// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-on-laptop
// Refreshed 2026-10-23 (targeted correction: estimates from memory bandwidth, verified figures)

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  "en": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "Local LLM on a Laptop: What Runs on 8GB, 16GB & Apple Silicon (2026)",
    "seoTitle": "Local LLM on a Laptop (2026): 8GB, 16GB & Apple Silicon",
    "intro": "You can run a local LLM on a laptop with 8 GB of RAM: a 3B–4B model at Q4_K_M runs at an estimated 15–30 tok/s on dual-channel RAM, and a 16 GB laptop runs 8B models at an estimated 8–15 tok/s. Apple Silicon is faster because its unified memory has more bandwidth. Speeds are PromptQuorum estimates derived from memory bandwidth, not lab measurements; thermals and battery limit how long a laptop sustains them.",
    "metaDescription": "Local LLM on a laptop: what fits in 8 GB, 16 GB and Apple Silicon, estimated tok/s from memory bandwidth, plus thermals, battery and quantization.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-en.webp",
    "twitterDescription": "Local LLM on a laptop: 8 GB RAM runs a 3B–4B model at an est. 15–30 tok/s, 16 GB runs 8B at an est. 8–15 tok/s. Estimates from memory bandwidth, not lab tests.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**You can run a local LLM on a laptop: 8 GB RAM fits a 3B–4B model at an estimated 15–30 tok/s, and 16 GB fits 8B models at an estimated 8–15 tok/s on CPU. Apple Silicon is faster. Speeds are PromptQuorum estimates derived from memory bandwidth, not lab measurements.**",
    "comparisonTable": {
      "columns": [
        "Setup",
        "Model Size",
        "Speed",
        "Experience"
      ],
      "rows": [
        {
          "Setup": "8 GB RAM, CPU",
          "Model Size": "3B–4B",
          "Speed": "est. 15–30 tok/s",
          "Experience": "Chat, summaries, simple coding"
        },
        {
          "Setup": "16 GB RAM, CPU",
          "Model Size": "8B–9B",
          "Speed": "est. 8–15 tok/s",
          "Experience": "General use with multitasking"
        },
        {
          "Setup": "Apple Silicon (M3 to M5), 16 GB",
          "Model Size": "8B",
          "Speed": "est. 13–26 tok/s",
          "Experience": "More memory bandwidth than typical laptop RAM"
        },
        {
          "Setup": "GPU laptop (RTX 4060, 8 GB VRAM)",
          "Model Size": "8B",
          "Speed": "est. 34–44 tok/s",
          "Experience": "Fast if the model fits VRAM; high heat and power draw"
        }
      ]
    },
    "audience": "Beginners running their first local LLM on consumer hardware",
    "readTime": "8 min read",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "Quick Answer: Which Local LLM Runs on Your Laptop?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "Key Takeaways",
        "anchor": "#key-takeaways"
      },
      {
        "label": "Can You Run a Local LLM on a Laptop?",
        "anchor": "#can-you-run"
      },
      {
        "label": "Can You Run RAG on a Laptop?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "Which Setup Do You Need?",
        "anchor": "#use-case"
      },
      {
        "label": "Which Local LLM Models Run Best on a Laptop?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon vs Windows Laptop",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "Laptop vs Desktop for Local LLMs",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "How to Handle Thermal Throttling",
        "anchor": "#thermals"
      },
      {
        "label": "How Much Battery Does Running a Local LLM Use?",
        "anchor": "#battery-drain"
      },
      {
        "label": "Which Quantization Level Should You Use on a Laptop?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "Which Privacy Laws Apply When Running Local LLMs on a Laptop?",
        "anchor": "#regional-context"
      },
      {
        "label": "What Are the Common Mistakes When Running Local LLMs on Laptops?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "Related Reading",
        "anchor": "#related-reading"
      },
      {
        "label": "Common Questions About Running Local LLMs on Laptops",
        "anchor": "#faq"
      },
      {
        "label": "Sources",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "en": {
        "question": "Can you run a local LLM on a laptop?",
        "answer": "Yes. An 8 GB laptop runs a 3B–4B model at Q4_K_M, for example Llama 3.2 3B (2.0 GB file) at an estimated 18–30 tok/s on dual-channel RAM. A 16 GB laptop runs 8B–9B models such as Qwen3 8B (5.2 GB file) at an estimated 8–15 tok/s on CPU. Apple Silicon is faster because unified memory has more bandwidth: an estimated 13–17 tok/s on an M3 and 21–26 tok/s on an M5 for Qwen3 8B. All speeds are PromptQuorum estimates derived from memory bandwidth, not lab measurements.",
        "bullets": [
          "8 GB RAM: Llama 3.2 3B (2.0 GB file) or Phi-4-mini (2.5 GB), est. 15–30 tok/s on dual-channel RAM",
          "16 GB RAM: Qwen3 8B (5.2 GB file) or Llama 3.1 8B (4.9 GB), est. 8–15 tok/s on CPU",
          "Apple Silicon: Qwen3 8B est. 13–17 tok/s on an M3 (100 GB/s), 21–26 tok/s on an M5 (153 GB/s)",
          "Speed rule: tok/s is at most memory bandwidth ÷ model file size; single-channel RAM halves it",
          "Sustained load can lower clock speeds and drains the battery fast: plug in and give the laptop airflow"
        ],
        "updatedDate": "2026-10-23"
      },
      "de": {
        "question": "Kann man ein lokales LLM auf einem Laptop ausführen?",
        "answer": "Ja. Ein Laptop mit 8 GB führt ein 3B–4B-Modell mit Q4_K_M aus, zum Beispiel Llama 3.2 3B (2,0 GB große Datei) mit geschätzten 18–30 tok/s bei Dual-Channel-RAM. Ein Laptop mit 16 GB schafft 8B–9B-Modelle wie Qwen3 8B (5,2 GB große Datei) mit geschätzten 8–15 tok/s auf der CPU. Apple Silicon ist schneller, weil der Unified Memory mehr Bandbreite hat: für Qwen3 8B geschätzte 13–17 tok/s auf einem M3 und 21–26 tok/s auf einem M5. Alle Geschwindigkeiten sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen.",
        "bullets": [
          "8 GB RAM: Llama 3.2 3B (2,0 GB große Datei) oder Phi-4-mini (2,5 GB), gesch. 15–30 tok/s bei Dual-Channel-RAM",
          "16 GB RAM: Qwen3 8B (5,2 GB große Datei) oder Llama 3.1 8B (4,9 GB), gesch. 8–15 tok/s auf der CPU",
          "Apple Silicon: Qwen3 8B gesch. 13–17 tok/s auf einem M3 (100 GB/s), 21–26 tok/s auf einem M5 (153 GB/s)",
          "Faustregel: tok/s liegt höchstens bei Speicherbandbreite ÷ Größe der Modelldatei; Single-Channel-RAM halbiert den Wert",
          "Dauerlast kann die Taktrate senken und leert den Akku schnell: Netzteil anschließen und für Luftzufuhr sorgen"
        ],
        "updatedDate": "2026-10-23"
      },
      "fr": {
        "question": "Peut-on faire tourner un LLM local sur un ordinateur portable ?",
        "answer": "Oui. Un portable de 8 GB fait tourner un modèle 3B–4B en Q4_K_M, par exemple Llama 3.2 3B (fichier de 2.0 GB), à 18–30 tok/s estimés en RAM dual-channel. Un portable de 16 GB fait tourner des modèles 8B–9B comme Qwen3 8B (fichier de 5.2 GB) à 8–15 tok/s estimés sur CPU. Apple Silicon est plus rapide, car la mémoire unifiée offre plus de bande passante : 13–17 tok/s estimés sur un M3 et 21–26 tok/s sur un M5 pour Qwen3 8B. Toutes les vitesses sont des estimations PromptQuorum dérivées de la bande passante mémoire, pas des mesures de laboratoire.",
        "bullets": [
          "8 GB RAM : Llama 3.2 3B (fichier de 2.0 GB) ou Phi-4-mini (2.5 GB), 15–30 tok/s est. en RAM dual-channel",
          "16 GB RAM : Qwen3 8B (fichier de 5.2 GB) ou Llama 3.1 8B (4.9 GB), 8–15 tok/s est. sur CPU",
          "Apple Silicon : Qwen3 8B à 13–17 tok/s est. sur un M3 (100 GB/s), 21–26 tok/s sur un M5 (153 GB/s)",
          "Règle de vitesse : les tok/s sont au plus égaux à la bande passante mémoire ÷ la taille du fichier du modèle ; une RAM single-channel les divise par deux",
          "Une charge soutenue peut baisser les fréquences et vide vite la batterie : branchez le portable et laissez-le respirer"
        ],
        "updatedDate": "2026-10-23"
      },
      "ja": {
        "question": "ノートPCでローカルLLMを実行できますか？",
        "answer": "はい。RAM 8 GBのノートPCではQ4_K_Mの3B–4Bモデルが動きます。例えばLlama 3.2 3B（ファイル2.0 GB）はデュアルチャネル RAMで推定18–30 tok/sです。16 GBのノートPCならQwen3 8B（ファイル5.2 GB）などの8B–9Bモデルが、CPUで推定8–15 tok/sで動きます。Apple Siliconはユニファイドメモリの帯域が広いため高速で、Qwen3 8Bの場合、M3で推定13–17 tok/s、M5で21–26 tok/sです。速度はすべてメモリ帯域から導いたPromptQuorumの推定値で、実測ではありません。",
        "bullets": [
          "8 GB RAM：Llama 3.2 3B（ファイル2.0 GB）またはPhi-4-mini（2.5 GB）。デュアルチャネル RAMで推定15–30 tok/s",
          "16 GB RAM：Qwen3 8B（ファイル5.2 GB）またはLlama 3.1 8B（4.9 GB）。CPUで推定8–15 tok/s",
          "Apple Silicon：Qwen3 8Bは、M3（100 GB/s）で推定13–17 tok/s、M5（153 GB/s）で21–26 tok/s",
          "速度の目安：tok/sは最大でもメモリ帯域 ÷ モデルのファイルサイズ。シングルチャネル RAMでは半分になります",
          "負荷が続くとクロックが下がり、バッテリーも急速に減ります。電源につなぎ、通気を確保してください"
        ],
        "updatedDate": "2026-10-23"
      },
      "zh": {
        "question": "笔记本电脑可以运行本地LLM吗？",
        "answer": "可以。8 GB内存的笔记本电脑可运行Q4_K_M量化的3B–4B模型，例如Llama 3.2 3B（文件2.0 GB），在双通道内存上估算为18–30 tok/s。16 GB笔记本电脑可运行8B–9B模型，例如Qwen3 8B（文件5.2 GB），在CPU上估算为8–15 tok/s。Apple Silicon的统一内存带宽更高，因此更快：运行Qwen3 8B时，M3估算为13–17 tok/s，M5估算为21–26 tok/s。所有速度均为PromptQuorum根据内存带宽得出的估算，并非实验室实测。",
        "bullets": [
          "8 GB内存：Llama 3.2 3B（文件2.0 GB）或Phi-4-mini（2.5 GB），双通道内存上估算15–30 tok/s",
          "16 GB内存：Qwen3 8B（文件5.2 GB）或Llama 3.1 8B（4.9 GB），CPU上估算8–15 tok/s",
          "Apple Silicon：Qwen3 8B在M3（100 GB/s）上估算13–17 tok/s，在M5（153 GB/s）上估算21–26 tok/s",
          "速度规则：tok/s最高不超过内存带宽 ÷ 模型文件大小；单通道内存会使速度减半",
          "持续高负载会使时钟频率下降，并快速消耗电池：请接通电源并保证散热通风"
        ],
        "updatedDate": "2026-10-23"
      },
      "es": {
        "question": "¿Se puede ejecutar un LLM local en un portátil?",
        "answer": "Sí. Un portátil de 8 GB ejecuta un modelo de 3B–4B en Q4_K_M, por ejemplo Llama 3.2 3B (archivo de 2.0 GB), a unos 18–30 tok/s estimados con RAM de doble canal. Un portátil de 16 GB ejecuta modelos de 8B–9B como Qwen3 8B (archivo de 5.2 GB) a unos 8–15 tok/s estimados en CPU. Apple Silicon es más rápido porque la memoria unificada tiene más ancho de banda: unos 13–17 tok/s estimados en un M3 y 21–26 tok/s en un M5 con Qwen3 8B. Todas las velocidades son estimaciones de PromptQuorum derivadas del ancho de banda de memoria, no mediciones de laboratorio.",
        "bullets": [
          "8 GB de RAM: Llama 3.2 3B (archivo de 2.0 GB) o Phi-4-mini (2.5 GB), est. 15–30 tok/s con RAM de doble canal",
          "16 GB de RAM: Qwen3 8B (archivo de 5.2 GB) o Llama 3.1 8B (4.9 GB), est. 8–15 tok/s en CPU",
          "Apple Silicon: Qwen3 8B est. 13–17 tok/s en un M3 (100 GB/s), 21–26 tok/s en un M5 (153 GB/s)",
          "Regla de velocidad: los tok/s son como máximo el ancho de banda de memoria ÷ el tamaño del archivo del modelo; la RAM de un solo canal los reduce a la mitad",
          "Una carga sostenida puede bajar la velocidad de reloj y agota la batería rápido: conecta el cargador y deja ventilar el portátil"
        ],
        "updatedDate": "2026-10-23"
      },
      "pt": {
        "question": "É possível rodar um LLM local em um notebook?",
        "answer": "Sim. Um notebook de 8 GB roda um modelo 3B–4B em Q4_K_M, por exemplo o Llama 3.2 3B (arquivo de 2.0 GB), a cerca de 18–30 tok/s estimados com RAM dual-channel. Um notebook de 16 GB roda modelos 8B–9B, como o Qwen3 8B (arquivo de 5.2 GB), a 8–15 tok/s estimados na CPU. O Apple Silicon é mais rápido porque a memória unificada tem mais largura de banda: estimados 13–17 tok/s em um M3 e 21–26 tok/s em um M5 com o Qwen3 8B. Todas as velocidades são estimativas da PromptQuorum derivadas da largura de banda da memória, não medições de laboratório.",
        "bullets": [
          "8 GB de RAM: Llama 3.2 3B (arquivo de 2.0 GB) ou Phi-4-mini (2.5 GB), est. 15–30 tok/s com RAM dual-channel",
          "16 GB de RAM: Qwen3 8B (arquivo de 5.2 GB) ou Llama 3.1 8B (4.9 GB), est. 8–15 tok/s na CPU",
          "Apple Silicon: Qwen3 8B a est. 13–17 tok/s em um M3 (100 GB/s) e 21–26 tok/s em um M5 (153 GB/s)",
          "Regra de velocidade: tok/s é no máximo a largura de banda da memória ÷ o tamanho do arquivo do modelo; RAM single-channel reduz isso pela metade",
          "Carga sustentada pode reduzir o clock e esgota a bateria rápido: conecte na tomada e dê ventilação ao notebook"
        ],
        "updatedDate": "2026-10-23"
      },
      "ar": {
        "question": "هل يمكن تشغيل LLM محلي على حاسوب محمول؟",
        "answer": "نعم. الحاسوب المحمول بذاكرة 8 GB يشغّل نموذج 3B–4B بتكميم Q4_K_M، مثل Llama 3.2 3B (ملف بحجم 2.0 GB) بسرعة تقديرية 18–30 tok/s على ذاكرة ثنائية القناة. أما الحاسوب بذاكرة 16 GB فيشغّل نماذج 8B–9B مثل Qwen3 8B (ملف بحجم 5.2 GB) بسرعة تقديرية 8–15 tok/s على CPU. شرائح Apple Silicon أسرع لأن الذاكرة الموحّدة ذات عرض نطاق أكبر: تقديري 13–17 tok/s على M3 و21–26 tok/s على M5 لنموذج Qwen3 8B. جميع السرعات تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية.",
        "bullets": [
          "ذاكرة 8 GB: Llama 3.2 3B (ملف بحجم 2.0 GB) أو Phi-4-mini (2.5 GB)، بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة",
          "ذاكرة 16 GB: Qwen3 8B (ملف بحجم 5.2 GB) أو Llama 3.1 8B (4.9 GB)، بسرعة تقديرية 8–15 tok/s على CPU",
          "Apple Silicon: Qwen3 8B بسرعة تقديرية 13–17 tok/s على M3 (100 GB/s) و21–26 tok/s على M5 (153 GB/s)",
          "قاعدة السرعة: tok/s لا يتجاوز عرض نطاق الذاكرة ÷ حجم ملف النموذج؛ والذاكرة أحادية القناة تخفّضه إلى النصف",
          "الحمل المستمر قد يخفّض سرعة المعالج ويستنزف البطارية بسرعة: وصّل الشاحن ووفّر تهوية للحاسوب"
        ],
        "updatedDate": "2026-10-23"
      },
      "ko": {
        "question": "노트북에서 로컬 LLM을 실행할 수 있나요?",
        "answer": "네. RAM 8 GB 노트북은 Q4_K_M 3B–4B 모델을 실행할 수 있으며, 예를 들어 Llama 3.2 3B(파일 2.0 GB)는 듀얼 채널 RAM에서 추정 18–30 tok/s입니다. 16 GB 노트북은 Qwen3 8B(파일 5.2 GB) 같은 8B–9B 모델을 CPU에서 추정 8–15 tok/s로 실행합니다. Apple Silicon은 통합 메모리의 대역폭이 더 넓어 더 빠르며, Qwen3 8B 기준 M3에서 추정 13–17 tok/s, M5에서 21–26 tok/s입니다. 모든 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다.",
        "bullets": [
          "RAM 8 GB: Llama 3.2 3B(파일 2.0 GB) 또는 Phi-4-mini(2.5 GB), 듀얼 채널 RAM에서 추정 15–30 tok/s",
          "RAM 16 GB: Qwen3 8B(파일 5.2 GB) 또는 Llama 3.1 8B(4.9 GB), CPU에서 추정 8–15 tok/s",
          "Apple Silicon: Qwen3 8B 기준 M3(100 GB/s)에서 추정 13–17 tok/s, M5(153 GB/s)에서 21–26 tok/s",
          "속도 법칙: tok/s는 최대 메모리 대역폭 ÷ 모델 파일 크기이며, 싱글 채널 RAM은 이 값이 절반으로 줄어듭니다",
          "부하가 지속되면 클럭이 낮아질 수 있고 배터리도 빠르게 소모됩니다. 전원을 연결하고 통풍을 확보하십시오"
        ],
        "updatedDate": "2026-10-23"
      }
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "Quick Answer: Which Local LLM Runs on Your Laptop (8GB, 16GB, Apple Silicon)?",
        "content": [
          "**You can run a local LLM on a laptop with 8 GB RAM: a 3B–4B model at Q4_K_M runs at an estimated 15–30 tok/s on dual-channel RAM.** The table matches your hardware to a model. Speeds are PromptQuorum estimates derived from memory bandwidth (tok/s ≈ bandwidth ÷ model file size), not lab measurements."
        ],
        "rows": [
          {
            "Your laptop": "8 GB RAM, CPU only",
            "Best model": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "Est. tok/s": "15–30",
            "Hardware assumption": "Dual-channel DDR4/DDR5"
          },
          {
            "Your laptop": "16 GB RAM, CPU only",
            "Best model": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "Est. tok/s": "8–15",
            "Hardware assumption": "Dual-channel DDR4/DDR5"
          },
          {
            "Your laptop": "Apple M3, 16 GB",
            "Best model": "Qwen3 8B, Q4_K_M",
            "Est. tok/s": "13–17",
            "Hardware assumption": "100 GB/s unified memory"
          },
          {
            "Your laptop": "Apple M5, 16 GB",
            "Best model": "Qwen3 8B, Q4_K_M",
            "Est. tok/s": "21–26",
            "Hardware assumption": "153 GB/s unified memory"
          },
          {
            "Your laptop": "Intel Iris Xe / AMD iGPU",
            "Best model": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "Est. tok/s": "15–30",
            "Hardware assumption": "Shares system RAM; check ollama ps"
          }
        ],
        "columns": [
          "Your laptop",
          "Best model",
          "Est. tok/s",
          "Hardware assumption"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-en.webp",
        "imageCaption": "Local LLM on a laptop: Q4_K_M model picks by RAM tier, with estimated tok/s"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "A laptop with 8 GB RAM runs a 3B–4B local LLM at an estimated 15–30 tok/s, a 16 GB laptop runs 8B–9B models at an estimated 8–15 tok/s, and Apple Silicon is faster because unified memory has more bandwidth."
          },
          {
            "type": "plain-terms",
            "text": "Your laptop's main limits are RAM and memory bandwidth. The model file must fit in RAM, and every generated token reads the whole file once, so speed is at most memory bandwidth divided by file size. Laptops can also slow down under sustained load (thermal throttling); a stand, a power plug and a smaller model help."
          }
        ],
        "items": [
          "A 3B–4B model at Q4_K_M runs on a laptop with 8 GB RAM: Llama 3.2 3B (2.0 GB file) at an estimated 18–30 tok/s and Phi-4-mini (2.5 GB) at an estimated 15–25 tok/s.",
          "16 GB RAM fits 8B–9B models at Q4_K_M: Qwen3 8B (5.2 GB file) at an estimated 8–15 tok/s on dual-channel RAM, 13–17 tok/s on an Apple M3 and 21–26 tok/s on an Apple M5.",
          "Speed rule: tokens per second is at most memory bandwidth ÷ model file size (a ceiling; real speed is lower). Dual-channel DDR4-3200 is 51.2 GB/s, dual-channel DDR5-5600 is 89.6 GB/s, and single-channel halves the result. Apple publishes 100 GB/s for the M3 and 153 GB/s for the M5.",
          "All speeds on this page are PromptQuorum estimates derived from memory bandwidth, not lab measurements. Run `ollama run <model> --verbose` to read your own tokens per second.",
          "Plug in for long sessions and give the laptop airflow: sustained load can make laptop chips lower their clock speed, and active inference drains the battery much faster than light use."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "In One Sentence",
        "content": [
          "A local LLM can run on a laptop using quantized models: Q4_K_M shrinks the file to about 31% of its FP16 size (4.58 GiB instead of 14.96 GiB for Llama 3.1 8B) with a small quality loss."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "In Plain Terms",
        "content": [
          "Running an LLM locally means running the chatbot on your own laptop instead of on a provider's servers: private and usable offline, but slower than a cloud service."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "When Should You Run an LLM on a Laptop?",
        "items": [
          "✅ **Use local LLMs if:** you need data to stay on the device, you work offline, you want no per-token API cost",
          "❌ **Do NOT use if:** you need the strongest reasoning quality, you need very long context (100K+ tokens, because the KV cache grows with context), you need fast batch processing — see [local LLM limitations](/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "Can You Run a Local LLM on a Laptop?",
        "content": [
          "**Yes -- with the right model size.** A laptop with 8 GB RAM runs a 3B–4B model at Q4_K_M at an estimated 15–30 tok/s on dual-channel RAM (Llama 3.2 3B: 18–30, Phi-4-mini: 15–25). An Apple Silicon laptop with 16 GB runs an 8B model at an estimated 13–26 tok/s depending on the chip. That is slower than most cloud APIs but fast enough to read along.",
          "The practical ceiling on an 8 GB laptop is a 3B–4B model; 7B–8B files (4.4–5.2 GB) leave little room for the operating system and a browser. A 14B model at Q4_K_M (Qwen3 14B: 9.3 GB file) fits a 16 GB machine only with a short context and other apps closed.",
          "Speeds here are PromptQuorum estimates derived from memory bandwidth, not lab measurements. For tiers below 8 GB and the full bandwidth rule, see **[Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs)**; for laptops without a GPU, see **[Best CPU-Only Local LLMs 2026](/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "Can You Run RAG (Retrieval) on a Laptop?",
        "content": [
          "**Yes -- RAG runs on a laptop, because the binding constraint is still the chat model, not the retrieval layer.** A laptop RAG stack is three parts: a small embedding model, a local vector store and your chat model.",
          "The embedding model is small: nomic-embed-text is 274 MB on Ollama (2K context window), so it adds little RAM pressure. On an 8 GB laptop you can run a 3B chat model plus an embedding model; on 16 GB you have headroom for an 8B chat model alongside retrieval.",
          "**2 GB of RAM only works for very small setups.** Qwen3 0.6B (523 MB) plus nomic-embed-text is about 0.8 GB of files and fits when 2 GB is actually free. On a typical laptop the operating system takes 2–3 GB, and swapping to disk slows generation sharply, so plan for 8 GB as the practical floor."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "What Laptop Setup Do You Need for Your Use Case?",
        "items": [
          "**For beginners** — 8 GB RAM, 3B–4B models, CPU only. Expect an estimated 15–30 tok/s. Enough for chat, summarization and simple coding.",
          "**For developers** — 16 GB RAM, 8B–9B models, optional GPU. Multitasking is possible without closing other apps (est. 8–15 tok/s on CPU).",
          "**For power users** — Apple Silicon with a Pro or Max chip, or a laptop GPU with 8 GB+ VRAM, 8B–14B models. Estimates for Qwen3 8B: 41–53 tok/s on an M5 Pro (307 GB/s) and 34–44 tok/s on an RTX 4060 laptop GPU (about 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "Who Can Run a Local LLM on a Laptop?",
        "items": [
          "**Beginners** → [LM Studio](/local-llms/how-to-install-lm-studio) + 3B model",
          "**Intermediate** → [Ollama](/local-llms/how-to-install-ollama) + 8B model",
          "**Advanced users** → 14B with [quantization tuning](/local-llms/llm-quantization-explained)",
          "❌ **Do NOT use a laptop if:** you need real-time APIs (use a vLLM server), you process large datasets (use cloud GPUs)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "Which Local LLM Model Size Do You Need?",
        "content": "File sizes are the Ollama downloads checked on ollama.com on 2026-10-23, at Q4_K_M-class quantization (roughly 70% smaller than FP16). Min RAM is the file plus about 0.5 GB overhead; leave 2–4 GB more for the operating system and a browser:",
        "rows": [
          {
            "Model": "Llama 3.2 3B",
            "File (Ollama)": "2.0 GB",
            "Min RAM": "2.5–3 GB",
            "Est. tok/s": "18–30",
            "Best Use": "Basic tasks, chat, summarization"
          },
          {
            "Model": "Phi-4-mini 3.8B",
            "File (Ollama)": "2.5 GB",
            "Min RAM": "3 GB",
            "Est. tok/s": "15–25",
            "Best Use": "Reasoning and coding on 8 GB"
          },
          {
            "Model": "Qwen3 8B",
            "File (Ollama)": "5.2 GB",
            "Min RAM": "6 GB",
            "Est. tok/s": "8–15",
            "Best Use": "General use, multilingual, coding"
          },
          {
            "Model": "Qwen3 14B",
            "File (Ollama)": "9.3 GB",
            "Min RAM": "10 GB",
            "Est. tok/s": "4–8",
            "Best Use": "Harder tasks on 16 GB, short context"
          }
        ],
        "columns": [
          "Model",
          "File (Ollama)",
          "Min RAM",
          "Est. tok/s",
          "Best Use"
        ],
        "note": "Estimates are PromptQuorum estimates, not lab measurements, for a laptop with dual-channel DDR4-3200 to DDR5-5600 (51.2–89.6 GB/s); single-channel RAM halves them. Q4_K_M example: Llama 3.1 8B is 14.96 GiB at FP16 and 4.58 GiB at Q4_K_M (llama.cpp quantize README), about 69% smaller. → [VRAM calculator](/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "8 GB RAM vs 16 GB RAM Laptop: What Is the Practical Difference?",
        "rows": [
          {
            "Scenario": "Maximum model size",
            "8 GB RAM": "3B–4B comfortable; 7B–8B (4.4–5.2 GB files) tight",
            "16 GB RAM": "8B–9B comfortable; 14B (9.3 GB) with short context"
          },
          {
            "Scenario": "Model while browser open",
            "8 GB RAM": "3B–4B (tight)",
            "16 GB RAM": "8B–9B comfortably"
          },
          {
            "Scenario": "Recommended first model",
            "8 GB RAM": "llama3.2:3b or phi4-mini",
            "16 GB RAM": "qwen3:8b or llama3.1:8b"
          },
          {
            "Scenario": "Simultaneous apps",
            "8 GB RAM": "Close the browser before loading an 8B model",
            "16 GB RAM": "Normal multitasking with an 8B model"
          }
        ],
        "columns": [
          "Scenario",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "Which Local LLM Models Run Best on a Laptop?",
        "content": "**These models suit laptop limits: small files give more tokens per second from the same memory bandwidth.** Speeds are PromptQuorum estimates for a laptop with dual-channel DDR4-3200 to DDR5-5600 (51.2–89.6 GB/s), derived from the bandwidth ceiling (bandwidth ÷ Ollama file size), not lab measurements; single-channel RAM halves them. File sizes are the Ollama downloads checked on 2026-10-23. For VRAM requirements across models and laptop configurations, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm). Install [Ollama](/local-llms/how-to-install-ollama) to run any of these with a single command. No GPU? See **[Best CPU-Only Local LLMs 2026](/local-llms/best-cpu-only-llm)**. These are open-weights models; check each model card for its licence.",
        "rows": [
          {
            "Model": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "File (Ollama)": "2.0 GB",
            "Min RAM": "2.5–3 GB",
            "Est. tok/s": "18–30",
            "Best For": "8 GB laptops, quick tasks"
          },
          {
            "Model": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "File (Ollama)": "2.5 GB",
            "Min RAM": "3 GB",
            "Est. tok/s": "15–25",
            "Best For": "8 GB laptops, reasoning and coding"
          },
          {
            "Model": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "File (Ollama)": "5.2 GB",
            "Min RAM": "6 GB",
            "Est. tok/s": "8–15",
            "Best For": "16 GB laptops, multilingual, coding"
          },
          {
            "Model": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "File (Ollama)": "4.9 GB",
            "Min RAM": "5.5 GB",
            "Est. tok/s": "8–14",
            "Best For": "16 GB laptops, general use"
          },
          {
            "Model": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "File (Ollama)": "6.6 GB",
            "Min RAM": "7–8 GB",
            "Est. tok/s": "6–12",
            "Best For": "16 GB laptops, newer family, image input"
          }
        ],
        "columns": [
          "Model",
          "File (Ollama)",
          "Min RAM",
          "Est. tok/s",
          "Best For"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-en.webp",
        "imageCaption": "Best local LLM models for laptops by file size, with estimated tok/s on dual-channel RAM"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "Which Local LLM Setup Should You Start With on a Laptop?",
        "content": [
          "Laptop hardware limits model size, but clear, structured prompts can improve the output of smaller models. See the [prompt engineering guide](/prompt-engineering) for techniques suited to smaller models."
        ],
        "items": [
          "🥇 **Simple command-line start:** [Ollama](/local-llms/how-to-install-ollama) — one command per model, wide model support",
          "🥈 **Easiest for beginners:** [LM Studio](/local-llms/how-to-install-lm-studio) — GUI, no terminal needed",
          "🥉 **Low RAM (8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **More quality on 16 GB:** Qwen3 8B (Q4_K_M, or Q5_K_M if speed allows)",
          "💡 **If unsure:** start with Ollama + Llama 3.2 3B Q4_K_M"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon vs Windows Laptop: Which Is Better for Local LLMs?",
        "content": [
          "**Apple Silicon MacBooks are a strong choice for local LLMs because unified memory gives the GPU high-bandwidth access to the whole memory pool.** Speed is set by memory bandwidth: Apple publishes 100 GB/s for the M3, 153 GB/s for the M5, 307 GB/s for the M5 Pro and 460 or 614 GB/s for the M5 Max (depending on GPU cores). The M5 Pro and M5 Max MacBook Pro, announced on 3 March 2026, offer up to 64 GB and 128 GB of unified memory.",
          "A Windows laptop with a discrete NVIDIA GPU can be faster when the model fits in VRAM. The RTX 4060 laptop GPU has 8 GB of GDDR6 on a 128-bit bus (NVIDIA); at 16 Gbps (third-party spec) that is about 256 GB/s, so Qwen3 8B (5.2 GB) has a ceiling near 49 tok/s. The trade-off is higher power draw and heat.",
          "Windows laptops with only Intel Iris Xe or AMD Radeon integrated graphics are limited by system-RAM bandwidth. Ollama's documentation says Vulkan GPU support is enabled by default when the backend is installed and does not list Intel integrated graphics in a support table, so check the PROCESSOR column of `ollama ps`. An iGPU shares the same RAM, so gains are usually modest.",
          "**Best models for integrated graphics (Intel Iris Xe / AMD Radeon):** With 16 GB RAM, pick a 3B–4B model at Q4_K_M for speed (Llama 3.2 3B, est. 18–30 tok/s on dual-channel RAM) or Qwen3 8B for quality (est. 8–15 tok/s). Prioritise a model that stays comfortably within RAM. For a step-by-step low-end setup, see [Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs).",
          "Table method: each estimate is roughly 70–90% of the ceiling (bandwidth ÷ the 5.2 GB Qwen3 8B file). They are PromptQuorum estimates, not lab measurements."
        ],
        "rows": [
          {
            "Laptop type": "Apple M3, 16 GB",
            "Memory bandwidth": "100 GB/s",
            "Qwen3 8B est. tok/s": "13–17",
            "Practical max model": "~9B (14B tight)"
          },
          {
            "Laptop type": "Apple M5, 16 GB",
            "Memory bandwidth": "153 GB/s",
            "Qwen3 8B est. tok/s": "21–26",
            "Practical max model": "~9B (14B tight)"
          },
          {
            "Laptop type": "Apple M5 Pro",
            "Memory bandwidth": "307 GB/s",
            "Qwen3 8B est. tok/s": "41–53",
            "Practical max model": "Memory-limited (up to 64 GB)"
          },
          {
            "Laptop type": "Apple M5 Max",
            "Memory bandwidth": "460–614 GB/s",
            "Qwen3 8B est. tok/s": "62–106",
            "Practical max model": "Memory-limited (up to 128 GB)"
          },
          {
            "Laptop type": "RTX 4060 laptop (8 GB VRAM)",
            "Memory bandwidth": "~256 GB/s",
            "Qwen3 8B est. tok/s": "34–44",
            "Practical max model": "~8B in VRAM"
          },
          {
            "Laptop type": "Dual-channel DDR5-5600 laptop",
            "Memory bandwidth": "89.6 GB/s",
            "Qwen3 8B est. tok/s": "12–15",
            "Practical max model": "~9B (16 GB RAM)"
          },
          {
            "Laptop type": "Single-channel DDR4-3200 laptop",
            "Memory bandwidth": "25.6 GB/s",
            "Qwen3 8B est. tok/s": "3–4",
            "Practical max model": "3B–4B recommended"
          }
        ],
        "columns": [
          "Laptop type",
          "Memory bandwidth",
          "Qwen3 8B est. tok/s",
          "Practical max model"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "Is a Laptop Good Enough for Local LLMs vs a Desktop?",
        "content": [
          "**Laptops run 3B–14B models effectively, but desktops can go further thanks to better cooling and dedicated GPUs with much higher memory bandwidth.** A desktop RTX 4090 has 24 GB of VRAM and 1,008 GB/s of bandwidth (NVIDIA), enough to hold model files up to roughly 20 GB in VRAM, such as Gemma 4 31B (19–20 GB on Ollama). A 70B model at Q4 is a 43 GB file on Ollama (llama3.3:70b), which does not fit in 24 GB and must be split with much slower system RAM.",
          "Use a laptop for portability and experimentation. Use a desktop for large models (14B+), sustained workloads, or production inference. Choosing between platforms? See the [laptop vs desktop buying guide for local LLMs](/local-llms/laptop-vs-desktop-local-llm) for a full cost and performance breakdown."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "How Do You Handle Thermal Throttling on a Laptop?",
        "content": [
          "**Thermal throttling occurs when the CPU or GPU reaches its temperature limit and lowers its clock speed to cool down.** Local inference is a sustained load, so a thin laptop can slow down after a while; how much and how soon depends on its cooling design. Check your own speed over 10 minutes with `ollama run <model> --verbose`."
        ],
        "items": [
          "**Use a laptop stand with airflow clearance** -- raising the laptop improves exhaust airflow and can delay throttling.",
          "**Try a lower power mode** -- token generation is limited by memory bandwidth rather than clock speed, so a balanced or low power plan (on macOS, Low Power Mode) can cut heat and may cost less speed than you expect; test it on your machine.",
          "**Limit generation length and context** -- break long tasks into shorter prompts and avoid regenerating very long responses.",
          "**Use Q4_K_M instead of Q8_0** -- the file is about 1.7 times smaller (4.58 vs 7.95 GiB for Llama 3.1 8B), so each token reads less data from memory and the chip is under load for less time."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "How Much Battery Does Running a Local LLM Use?",
        "content": [
          "**Battery drain during local inference is significant because the CPU or GPU runs at high load for the whole generation.** Runtime in hours is roughly battery capacity in watt-hours divided by average power draw: a 60 Wh battery at 20 W lasts about 3 hours, at 30 W about 2 hours. These are illustrative arithmetic, not measurements; real power draw varies by laptop, model and power mode.",
          "Rated battery life does not describe inference. Apple's figure of up to 16 hours of wireless web browsing for the 14-inch MacBook Pro with M5 (72.4 Wh battery) is for light use, not sustained generation.",
          "For extended sessions, plug in. For battery-friendly use, pick a smaller model (a 3B file is less than half the size of an 8B file, so each response finishes sooner) and shorten the context."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "Which Quantization Level Should You Use on a Laptop?",
        "content": "[Quantization](/local-llms/llm-quantization-explained) reduces model precision to lower RAM and bandwidth needs. For laptops, Q4_K_M is the usual default. Sizes below are for Llama 3.1 8B from the llama.cpp quantize README (14.96 GiB at FP16); other models scale similarly:",
        "rows": [
          {
            "Quantization": "Q2_K",
            "Size vs FP16": "~20% (2.95 GiB)",
            "Quality loss": "High -- noticeable degradation",
            "Use case": "Only when nothing else fits"
          },
          {
            "Quantization": "Q3_K_S",
            "Size vs FP16": "~23% (3.41 GiB)",
            "Quality loss": "Moderate",
            "Use case": "Squeezing a bigger model into RAM"
          },
          {
            "Quantization": "Q4_K_M",
            "Size vs FP16": "~31% (4.58 GiB)",
            "Quality loss": "Low -- common default",
            "Use case": "Most laptops, good balance"
          },
          {
            "Quantization": "Q5_K_M",
            "Size vs FP16": "~36% (5.33 GiB)",
            "Quality loss": "Small",
            "Use case": "16 GB laptops if speed allows"
          },
          {
            "Quantization": "Q8_0",
            "Size vs FP16": "~53% (7.95 GiB)",
            "Quality loss": "Very small",
            "Use case": "Spare RAM, speed not critical"
          }
        ],
        "columns": [
          "Quantization",
          "Size vs FP16",
          "Quality loss",
          "Use case"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "Which Privacy Laws Apply When Running Local LLMs on a Laptop?",
        "content": [
          "**European Union (GDPR):** When a model runs on your own laptop, prompts and documents do not have to leave the device, which can avoid sending personal data to a third-party processor. Whether GDPR, the EU AI Act or other obligations apply depends on who deploys the system and for what purpose; this guide is not legal advice, and compliance depends on your whole setup, not on where inference runs.",
          "**Germany:** For German businesses, keeping documents on the device can simplify data-protection questions, but whether a local setup meets your obligations (for example for confidential client data) is decided case by case; ask your data-protection officer.",
          "**Japan (APPI):** Japan's Act on the Protection of Personal Information regulates transfers of personal data abroad. Running inference on the laptop avoids sending prompts to an overseas API, which can simplify the transfer question; it does not replace a legal assessment.",
          "**United States:** There is no single federal AI data law; sector rules such as HIPAA (healthcare), FERPA (education) and state privacy laws apply depending on the use. Keeping data on a local device can reduce the number of third parties that handle it, but you remain responsible for securing the device and the data."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Common Questions About Running Local LLMs on Laptops",
        "faqs": [
          {
            "q": "What are the best Ollama models for Intel Iris Xe with 16 GB RAM?",
            "a": "On a laptop with Intel Iris Xe graphics and 16 GB RAM, speed is limited by system-RAM bandwidth. Whether Ollama uses the iGPU depends on driver and backend support (check the PROCESSOR column of `ollama ps`), and an iGPU shares the same RAM, so gains are usually modest. Pick a 3B–4B model at Q4_K_M for speed: Llama 3.2 3B (est. 18–30 tok/s on dual-channel RAM) with `ollama run llama3.2:3b`, or Qwen3 8B (est. 8–15 tok/s) with `ollama run qwen3:8b` for more quality. Speeds are PromptQuorum estimates, not lab measurements."
          },
          {
            "q": "Can you run RAG locally on a laptop?",
            "a": "Yes. A laptop RAG stack is a small embedding model plus a local vector store plus your chat model. The embedding model is small (nomic-embed-text is 274 MB on Ollama), so the chat model remains the binding RAM constraint: an 8 GB laptop runs a 3B chat model with retrieval, and 16 GB leaves room for an 8B model. See the [RAG on a laptop section](#rag-laptop) above for the RAM breakdown."
          },
          {
            "q": "What is the best CPU-only local LLM for a laptop?",
            "a": "Among the models compared in the CPU-only guide, Phi-4 Mini (3.8B, 2.5 GB file) is the best all-round pick at an estimated 15–25 tok/s on dual-channel RAM, and Llama 3.2 3B (2.0 GB file) is the smallest file at an estimated 18–30 tok/s, both at Q4_K_M. For the full comparison and Ollama commands, see [Best CPU-Only Local LLMs 2026](/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "Will running a local LLM damage my laptop over time?",
            "a": "No immediate damage is expected on a healthy laptop: chips lower their clock speed when they get hot, so sustained inference slows the machine rather than harming it. Sustained heat is still wear on fans and the battery over time, so use a stand or cooling pad, keep the vents clear and take breaks. Follow your manufacturer's guidance on thermals and battery care."
          },
          {
            "q": "Can I run a local LLM on a 4 GB RAM laptop?",
            "a": "Barely. A small model such as Qwen3 1.7B (1.4 GB file) or Llama 3.2 1B (1.3 GB file) fits, but the operating system needs 2–3 GB, so on 4 GB total you are likely to hit swap, which slows generation sharply. The practical minimum for a comfortable experience is 8 GB. See [Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "Does my laptop need a dedicated GPU to run local LLMs?",
            "a": "No. Ollama, LM Studio and GPT4All run on CPU only. A GPU with high memory bandwidth speeds up generation, but 3B–4B models are usable on CPU at an estimated 15–30 tok/s on dual-channel RAM. See [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for CPU-friendly model recommendations."
          },
          {
            "q": "What is the fastest local LLM I can run on an 8 GB MacBook?",
            "a": "Among the models in this guide, Llama 3.2 3B at Q4_K_M (2.0 GB file) is the fastest practical pick on an 8 GB MacBook. On an M2 or M3 (both 100 GB/s per Apple) the bandwidth ceiling is about 50 tok/s and the PromptQuorum estimate is 35–45 tok/s. An 8B file (5.2 GB) is tight on 8 GB because macOS and your apps need memory too."
          },
          {
            "q": "How do I reduce thermal throttling on a laptop during LLM inference?",
            "a": "Four steps: (1) raise the laptop on a stand with airflow clearance, (2) try a balanced or low power mode, because generation is limited by memory bandwidth more than clock speed, (3) limit generation length and context, and (4) use Q4_K_M instead of Q8_0 so each token reads less data. Check your speed over 10 minutes with `ollama run <model> --verbose`."
          },
          {
            "q": "Can I run a local LLM on a Chromebook?",
            "a": "Only on Chromebooks with Linux (Crostini) enabled, and only small models. Most Chromebooks have 4–8 GB RAM and modest memory bandwidth, so a 1B–3B model at Q4_K_M is the realistic ceiling and speed will be low. Chromebooks without Linux support cannot run Ollama."
          },
          {
            "q": "Is Apple Silicon better than an NVIDIA laptop GPU for local LLMs?",
            "a": "It depends on memory. Speed follows memory bandwidth and capacity: a 16 GB MacBook with M5 (153 GB/s) has a Qwen3 8B ceiling near 29 tok/s, while an RTX 4060 laptop GPU (about 256 GB/s, 8 GB VRAM) has a ceiling near 49 tok/s but only holds models that fit in 8 GB. An M5 Pro (307 GB/s) or M5 Max (460–614 GB/s) with more memory holds larger models in fast memory. Power draw differs by model, so check your laptop."
          },
          {
            "q": "What happens if the model is too large for my laptop RAM?",
            "a": "The operating system starts swapping to disk, or the model fails to load, and generation can slow to a crawl while the fans run hard. The fix is a smaller model, a lower quantization level (Q4_K_M instead of Q8_0) or a shorter context (`OLLAMA_CONTEXT_LENGTH`, default 4096)."
          },
          {
            "q": "How long does battery last when running local LLMs on a laptop?",
            "a": "Runtime is roughly battery capacity in Wh divided by average power draw in W. A 60 Wh battery at 20 W lasts about 3 hours and at 30 W about 2 hours (illustrative arithmetic, not a measurement). Real draw varies by laptop, model and power mode. For day-long use, plug in."
          },
          {
            "q": "Do I need an internet connection to run a local LLM on a laptop?",
            "a": "No. After downloading the model (which requires internet), inference is fully offline. The model runs entirely on the laptop CPU or GPU. This makes local LLMs useful for travel, secure environments, or locations with unreliable connectivity."
          },
          {
            "q": "Can I run a local LLM on 8 GB RAM?",
            "a": "Yes. An 8 GB laptop runs a 3B–4B model at Q4_K_M (2.0–2.5 GB files) at an estimated 15–30 tok/s on dual-channel RAM, or an estimated 28–45 tok/s on an Apple M2 or M3. 7B–8B models (4.4–5.2 GB files) are tight on 8 GB."
          },
          {
            "q": "What is the fastest laptop for local LLMs?",
            "a": "For local LLMs the key specs are memory bandwidth and enough memory. Apple lists 307 GB/s for the M5 Pro (up to 64 GB) and 460 or 614 GB/s for the M5 Max (up to 128 GB); for Qwen3 8B the PromptQuorum estimates are 41–53 tok/s on an M5 Pro and 62–106 tok/s on an M5 Max. On Windows, a laptop with an NVIDIA GPU that holds the model in VRAM has a high ceiling, for example about 256 GB/s for an RTX 4060 laptop GPU with 8 GB."
          },
          {
            "q": "How slow are local LLMs on CPU?",
            "a": "Speed is at most memory bandwidth ÷ model file size. On dual-channel DDR4/DDR5 a 3B–4B Q4_K_M model runs at an estimated 15–30 tok/s and Qwen3 8B at an estimated 8–15 tok/s; single-channel RAM halves that. This is slow enough to read along but fast enough for chat and summarization. Apple Silicon reaches an estimated 13–26 tok/s on Qwen3 8B (M3 to M5) because unified memory has more bandwidth."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "**Apple MacBook Pro technical specifications** -- memory bandwidth of M5 (153 GB/s), M5 Pro (307 GB/s) and M5 Max (460 and 614 GB/s), and rated battery life. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Apple MacBook Air (15-inch, M3, 2024) technical specifications** -- M3 memory bandwidth of 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom: M2** -- 100 GB/s unified memory bandwidth. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom: MacBook Pro with M5 Pro and M5 Max (3 March 2026)** -- up to 64 GB and 128 GB unified memory. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**NVIDIA GeForce laptop comparison** -- RTX 4060 laptop GPU: 8 GB GDDR6, 128-bit bus. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: RTX 4060 Laptop GPU** -- 16 Gbps memory speed (third-party; basis of the ~256 GB/s figure). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**NVIDIA GeForce RTX 4090 specifications** -- 24 GB VRAM, 1,008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Ollama library** -- file sizes checked 2026-10-23: [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**Ollama FAQ** -- default context length 4096, OLLAMA_CONTEXT_LENGTH, KV cache type, keep-alive and `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Ollama GPU documentation** -- Metal on Apple Silicon, Vulkan and supported GPUs. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**llama.cpp quantize README** -- file sizes by quantization type for Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** -- GPU acceleration for Apple Silicon Macs. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- System requirements, GPU compatibility, and local inference setup. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "What Are the Common Mistakes When Running Local LLMs on Laptops?",
        "items": [
          "**Running a model too large for available RAM** → the system swaps to disk and generation slows sharply; pick a smaller model or a lower quantization.",
          "**Ignoring thermal throttling** → sustained speed can drop once the chip reaches its temperature limit; check your speed after 10 minutes with `ollama run <model> --verbose`.",
          "**Using Q8_0 instead of Q4_K_M** → the file is about 1.7 times bigger (7.95 vs 4.58 GiB for Llama 3.1 8B), so it needs more RAM and generates more slowly on a bandwidth-limited laptop, for a small quality gain.",
          "**Running on one RAM stick** → single-channel memory halves peak bandwidth and the speed ceiling; use two matching sticks where the laptop allows it.",
          "**Leaving GPU offload off in LM Studio** → the model runs on the CPU instead of the GPU; raise the GPU offload setting when the model fits in GPU memory.",
          "**Keeping the default context window** → Ollama's default is 4096 tokens, so multi-page documents are truncated; raise it with `OLLAMA_CONTEXT_LENGTH=8192` or `/set parameter num_ctx 8192` and expect more memory use."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- Small models optimized for laptops",
          "[How to Install Ollama](/local-llms/how-to-install-ollama) -- Installation guide",
          "[How to Install LM Studio](/local-llms/how-to-install-lm-studio) -- GUI-based installer",
          "[Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup) -- Performance and error fixes",
          "[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- Q4_K_M vs Q8_0 vs Q5_K_M in depth",
          "[Small Local LLM Models Under 4 GB](/local-llms/small-local-llm-models) -- 3B models for 8 GB laptops",
          "[Laptop vs Desktop for Local LLMs 2026](/local-llms/laptop-vs-desktop-local-llm) -- Buying guide: performance comparison, cost analysis, and which platform to buy.",
          "[MLX vs Ollama vs llama.cpp on Mac 2026](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Framework comparison for Apple Silicon: speed, setup time, and ecosystem trade-offs.",
          "[Cheapest Way to Run a 70B Model Locally](/prompt-bites/cheapest-way-to-run-70b-model-locally) -- When a laptop can handle 70B: Q3_K_S on M3 Max vs CPU offloading.",
          "[Best GPU for Local LLM Inference Under $500 (2026)](/local-llms/best-gpu-for-llm-inference-under-500-2026) -- eGPU upgrade path for MacBook and Windows laptops.",
          "[Best CPU-Only Local LLMs 2026](/local-llms/best-cpu-only-llm) -- Estimated tok/s by model file size for machines with no GPU.",
          "[Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs) -- Picks for 4–16 GB RAM, CPU-only or iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Local LLM on a Laptop: What Runs on 8GB, 16GB & Apple Silicon (2026)",
      "description": "Run local LLMs on laptops with 8 GB or 16 GB RAM or Apple Silicon. Covers model picks (Llama 3.2 3B, Phi-4-mini, Qwen3 8B), speed estimates from memory bandwidth, thermals, battery and Q4_K_M quantization.",
      "url": "https://www.promptquorum.com/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "local LLM laptop"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Q4_K_M quantization"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "thermal throttling"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "en"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Best Local LLM Models for Laptops 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "3B model, 2.0 GB Ollama file. Est. 18–30 tok/s on dual-channel RAM (PromptQuorum estimate). Smallest file here, suits 8 GB laptops."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "3.8B model, 2.5 GB Ollama file. Est. 15–25 tok/s on dual-channel RAM (PromptQuorum estimate). Reasoning and coding on 8 GB laptops."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "8B model, 5.2 GB Ollama file. Est. 8–15 tok/s on dual-channel RAM (PromptQuorum estimate). Multilingual and coding on 16 GB laptops."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "8B model, 4.9 GB Ollama file. Est. 8–14 tok/s on dual-channel RAM (PromptQuorum estimate). General use on 16 GB laptops."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "9B model, 6.6 GB Ollama file. Est. 6–12 tok/s on dual-channel RAM (PromptQuorum estimate). Newer family with image input on 16 GB laptops."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the best Ollama models for Intel Iris Xe with 16 GB RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On a laptop with Intel Iris Xe graphics and 16 GB RAM, speed is limited by system-RAM bandwidth. Whether Ollama uses the iGPU depends on driver and backend support (check the PROCESSOR column of `ollama ps`), and an iGPU shares the same RAM, so gains are usually modest. Pick a 3B–4B model at Q4_K_M for speed: Llama 3.2 3B (est. 18–30 tok/s on dual-channel RAM) with `ollama run llama3.2:3b`, or Qwen3 8B (est. 8–15 tok/s) with `ollama run qwen3:8b` for more quality. Speeds are PromptQuorum estimates, not lab measurements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you run RAG locally on a laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A laptop RAG stack is a small embedding model plus a local vector store plus your chat model. The embedding model is small (nomic-embed-text is 274 MB on Ollama), so the chat model remains the binding RAM constraint: an 8 GB laptop runs a 3B chat model with retrieval, and 16 GB leaves room for an 8B model. See the [RAG on a laptop section](#rag-laptop) above for the RAM breakdown."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best CPU-only local LLM for a laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Among the models compared in the CPU-only guide, Phi-4 Mini (3.8B, 2.5 GB file) is the best all-round pick at an estimated 15–25 tok/s on dual-channel RAM, and Llama 3.2 3B (2.0 GB file) is the smallest file at an estimated 18–30 tok/s, both at Q4_K_M. For the full comparison and Ollama commands, see [Best CPU-Only Local LLMs 2026](/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "Will running a local LLM damage my laptop over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No immediate damage is expected on a healthy laptop: chips lower their clock speed when they get hot, so sustained inference slows the machine rather than harming it. Sustained heat is still wear on fans and the battery over time, so use a stand or cooling pad, keep the vents clear and take breaks. Follow your manufacturer's guidance on thermals and battery care."
          }
        },
        {
          "@type": "Question",
          "name": "Can I run a local LLM on a 4 GB RAM laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barely. A small model such as Qwen3 1.7B (1.4 GB file) or Llama 3.2 1B (1.3 GB file) fits, but the operating system needs 2–3 GB, so on 4 GB total you are likely to hit swap, which slows generation sharply. The practical minimum for a comfortable experience is 8 GB. See [Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "Does my laptop need a dedicated GPU to run local LLMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Ollama, LM Studio and GPT4All run on CPU only. A GPU with high memory bandwidth speeds up generation, but 3B–4B models are usable on CPU at an estimated 15–30 tok/s on dual-channel RAM. See [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for CPU-friendly model recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the fastest local LLM I can run on an 8 GB MacBook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Among the models in this guide, Llama 3.2 3B at Q4_K_M (2.0 GB file) is the fastest practical pick on an 8 GB MacBook. On an M2 or M3 (both 100 GB/s per Apple) the bandwidth ceiling is about 50 tok/s and the PromptQuorum estimate is 35–45 tok/s. An 8B file (5.2 GB) is tight on 8 GB because macOS and your apps need memory too."
          }
        },
        {
          "@type": "Question",
          "name": "How do I reduce thermal throttling on a laptop during LLM inference?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Four steps: (1) raise the laptop on a stand with airflow clearance, (2) try a balanced or low power mode, because generation is limited by memory bandwidth more than clock speed, (3) limit generation length and context, and (4) use Q4_K_M instead of Q8_0 so each token reads less data. Check your speed over 10 minutes with `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "Can I run a local LLM on a Chromebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only on Chromebooks with Linux (Crostini) enabled, and only small models. Most Chromebooks have 4–8 GB RAM and modest memory bandwidth, so a 1B–3B model at Q4_K_M is the realistic ceiling and speed will be low. Chromebooks without Linux support cannot run Ollama."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Silicon better than an NVIDIA laptop GPU for local LLMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on memory. Speed follows memory bandwidth and capacity: a 16 GB MacBook with M5 (153 GB/s) has a Qwen3 8B ceiling near 29 tok/s, while an RTX 4060 laptop GPU (about 256 GB/s, 8 GB VRAM) has a ceiling near 49 tok/s but only holds models that fit in 8 GB. An M5 Pro (307 GB/s) or M5 Max (460–614 GB/s) with more memory holds larger models in fast memory. Power draw differs by model, so check your laptop."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the model is too large for my laptop RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The operating system starts swapping to disk, or the model fails to load, and generation can slow to a crawl while the fans run hard. The fix is a smaller model, a lower quantization level (Q4_K_M instead of Q8_0) or a shorter context (`OLLAMA_CONTEXT_LENGTH`, default 4096)."
          }
        },
        {
          "@type": "Question",
          "name": "How long does battery last when running local LLMs on a laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Runtime is roughly battery capacity in Wh divided by average power draw in W. A 60 Wh battery at 20 W lasts about 3 hours and at 30 W about 2 hours (illustrative arithmetic, not a measurement). Real draw varies by laptop, model and power mode. For day-long use, plug in."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an internet connection to run a local LLM on a laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After downloading the model (which requires internet), inference is fully offline. The model runs entirely on the laptop CPU or GPU. This makes local LLMs useful for travel, secure environments, or locations with unreliable connectivity."
          }
        },
        {
          "@type": "Question",
          "name": "Can I run a local LLM on 8 GB RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. An 8 GB laptop runs a 3B–4B model at Q4_K_M (2.0–2.5 GB files) at an estimated 15–30 tok/s on dual-channel RAM, or an estimated 28–45 tok/s on an Apple M2 or M3. 7B–8B models (4.4–5.2 GB files) are tight on 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "What is the fastest laptop for local LLMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For local LLMs the key specs are memory bandwidth and enough memory. Apple lists 307 GB/s for the M5 Pro (up to 64 GB) and 460 or 614 GB/s for the M5 Max (up to 128 GB); for Qwen3 8B the PromptQuorum estimates are 41–53 tok/s on an M5 Pro and 62–106 tok/s on an M5 Max. On Windows, a laptop with an NVIDIA GPU that holds the model in VRAM has a high ceiling, for example about 256 GB/s for an RTX 4060 laptop GPU with 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "How slow are local LLMs on CPU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Speed is at most memory bandwidth ÷ model file size. On dual-channel DDR4/DDR5 a 3B–4B Q4_K_M model runs at an estimated 15–30 tok/s and Qwen3 8B at an estimated 8–15 tok/s; single-channel RAM halves that. This is slow enough to read along but fast enough for chat and summarization. Apple Silicon reaches an estimated 13–26 tok/s on Qwen3 8B (M3 to M5) because unified memory has more bandwidth."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Reduce Thermal Throttling on a Laptop During Local LLM Inference",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Use a laptop stand with airflow clearance",
          "text": "Raise the laptop on a stand to improve exhaust airflow, which can delay throttling."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Try a lower power mode",
          "text": "Token generation is limited by memory bandwidth rather than clock speed, so a balanced or low power plan (on macOS, Low Power Mode) can cut heat. Test it on your machine."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Limit generation length and context",
          "text": "Break long tasks into shorter prompts and avoid regenerating very long responses in a single pass."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Use Q4_K_M quantization instead of Q8_0",
          "text": "The file is about 1.7 times smaller, so each token reads less data from memory and the chip is under load for less time."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "de": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "Lokales LLM auf dem Laptop: Was auf 8 GB, 16 GB und Apple Silicon läuft (2026)",
    "seoTitle": "Lokales LLM auf Laptop (2026): 8 GB, 16 GB, Apple Silicon",
    "intro": "Sie können ein lokales LLM auf einem Laptop mit 8 GB RAM ausführen: Ein 3B–4B-Modell mit Q4_K_M läuft bei Dual-Channel-RAM mit geschätzten 15–30 tok/s, ein Laptop mit 16 GB schafft 8B-Modelle mit geschätzten 8–15 tok/s. Apple Silicon ist schneller, weil der Unified Memory mehr Bandbreite bietet. Die Geschwindigkeiten sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen; Temperatur und Akku begrenzen, wie lange ein Laptop sie durchhält.",
    "metaDescription": "Lokales LLM auf dem Laptop: Was in 8 GB, 16 GB und Apple Silicon passt, geschätzte tok/s aus der Speicherbandbreite sowie Thermik, Akku und Quantisierung.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-de.webp",
    "twitterDescription": "Lokales LLM auf dem Laptop: 8 GB RAM schaffen ein 3B–4B-Modell mit gesch. 15–30 tok/s, 16 GB ein 8B-Modell mit gesch. 8–15 tok/s. Schätzungen aus der Speicherbandbreite, keine Labortests.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**Sie können ein lokales LLM auf einem Laptop ausführen: 8 GB RAM reichen für ein 3B–4B-Modell mit geschätzten 15–30 tok/s, 16 GB für 8B-Modelle mit geschätzten 8–15 tok/s auf der CPU. Apple Silicon ist schneller. Die Geschwindigkeiten sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen.**",
    "comparisonTable": {
      "columns": [
        "Setup",
        "Modellgröße",
        "Geschwindigkeit",
        "Praxis"
      ],
      "rows": [
        {
          "Setup": "8 GB RAM, CPU",
          "Modellgröße": "3B–4B",
          "Geschwindigkeit": "gesch. 15–30 tok/s",
          "Praxis": "Chat, Zusammenfassungen, einfaches Coding"
        },
        {
          "Setup": "16 GB RAM, CPU",
          "Modellgröße": "8B–9B",
          "Geschwindigkeit": "gesch. 8–15 tok/s",
          "Praxis": "Allgemeine Nutzung mit Multitasking"
        },
        {
          "Setup": "Apple Silicon (M3 bis M5), 16 GB",
          "Modellgröße": "8B",
          "Geschwindigkeit": "gesch. 13–26 tok/s",
          "Praxis": "Mehr Speicherbandbreite als typischer Laptop-RAM"
        },
        {
          "Setup": "GPU-Laptop (RTX 4060, 8 GB VRAM)",
          "Modellgröße": "8B",
          "Geschwindigkeit": "gesch. 34–44 tok/s",
          "Praxis": "Schnell, wenn das Modell in den VRAM passt; hohe Hitze und Leistungsaufnahme"
        }
      ]
    },
    "audience": "Einsteiger, die ihr erstes lokales LLM auf Standard-Hardware ausführen",
    "readTime": "8 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "Kurzantwort: Welches lokale LLM läuft auf Ihrem Laptop?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "Zusammenfassung",
        "anchor": "#key-takeaways"
      },
      {
        "label": "Kann man ein lokales LLM auf einem Laptop ausführen?",
        "anchor": "#can-you-run"
      },
      {
        "label": "Läuft RAG auf einem Laptop?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "Welches Setup brauchen Sie?",
        "anchor": "#use-case"
      },
      {
        "label": "Welche lokalen LLM-Modelle laufen auf einem Laptop am besten?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon vs. Windows-Laptop",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "Laptop vs. Desktop für lokale LLMs",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "Wie gehen Sie mit Thermal Throttling um?",
        "anchor": "#thermals"
      },
      {
        "label": "Wie viel Akku verbraucht ein lokales LLM?",
        "anchor": "#battery-drain"
      },
      {
        "label": "Welche Quantisierungsstufe eignet sich für einen Laptop?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "Welche Datenschutzgesetze gelten für lokale LLMs auf dem Laptop?",
        "anchor": "#regional-context"
      },
      {
        "label": "Welche typischen Fehler gibt es bei lokalen LLMs auf Laptops?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "Weiterführende Artikel",
        "anchor": "#related-reading"
      },
      {
        "label": "Häufige Fragen zu lokalen LLMs auf Laptops",
        "anchor": "#faq"
      },
      {
        "label": "Quellen",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "Kann man ein lokales LLM auf einem Laptop ausführen?",
      "answer": "Ja. Ein Laptop mit 8 GB führt ein 3B–4B-Modell mit Q4_K_M aus, zum Beispiel Llama 3.2 3B (2,0 GB große Datei) mit geschätzten 18–30 tok/s bei Dual-Channel-RAM. Ein Laptop mit 16 GB schafft 8B–9B-Modelle wie Qwen3 8B (5,2 GB große Datei) mit geschätzten 8–15 tok/s auf der CPU. Apple Silicon ist schneller, weil der Unified Memory mehr Bandbreite hat: für Qwen3 8B geschätzte 13–17 tok/s auf einem M3 und 21–26 tok/s auf einem M5. Alle Geschwindigkeiten sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen.",
      "bullets": [
        "8 GB RAM: Llama 3.2 3B (2,0 GB große Datei) oder Phi-4-mini (2,5 GB), gesch. 15–30 tok/s bei Dual-Channel-RAM",
        "16 GB RAM: Qwen3 8B (5,2 GB große Datei) oder Llama 3.1 8B (4,9 GB), gesch. 8–15 tok/s auf der CPU",
        "Apple Silicon: Qwen3 8B gesch. 13–17 tok/s auf einem M3 (100 GB/s), 21–26 tok/s auf einem M5 (153 GB/s)",
        "Faustregel: tok/s liegt höchstens bei Speicherbandbreite ÷ Größe der Modelldatei; Single-Channel-RAM halbiert den Wert",
        "Dauerlast kann die Taktrate senken und leert den Akku schnell: Netzteil anschließen und für Luftzufuhr sorgen"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "Kurzantwort: Welches lokale LLM läuft auf Ihrem Laptop (8 GB, 16 GB, Apple Silicon)?",
        "content": [
          "**Sie können ein lokales LLM auf einem Laptop mit 8 GB RAM ausführen: Ein 3B–4B-Modell mit Q4_K_M läuft bei Dual-Channel-RAM mit geschätzten 15–30 tok/s.** Die Tabelle ordnet Ihrer Hardware ein Modell zu. Die Geschwindigkeiten sind PromptQuorum-Schätzungen aus der Speicherbandbreite (tok/s ≈ Bandbreite ÷ Größe der Modelldatei), keine Labormessungen."
        ],
        "rows": [
          {
            "Ihr Laptop": "8 GB RAM, nur CPU",
            "Bestes Modell": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "Gesch. tok/s": "15–30",
            "Hardware-Annahme": "Dual-Channel DDR4/DDR5"
          },
          {
            "Ihr Laptop": "16 GB RAM, nur CPU",
            "Bestes Modell": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "Gesch. tok/s": "8–15",
            "Hardware-Annahme": "Dual-Channel DDR4/DDR5"
          },
          {
            "Ihr Laptop": "Apple M3, 16 GB",
            "Bestes Modell": "Qwen3 8B, Q4_K_M",
            "Gesch. tok/s": "13–17",
            "Hardware-Annahme": "100 GB/s Unified Memory"
          },
          {
            "Ihr Laptop": "Apple M5, 16 GB",
            "Bestes Modell": "Qwen3 8B, Q4_K_M",
            "Gesch. tok/s": "21–26",
            "Hardware-Annahme": "153 GB/s Unified Memory"
          },
          {
            "Ihr Laptop": "Intel Iris Xe / AMD iGPU",
            "Bestes Modell": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "Gesch. tok/s": "15–30",
            "Hardware-Annahme": "Teilt sich den Arbeitsspeicher; `ollama ps` prüfen"
          }
        ],
        "columns": [
          "Ihr Laptop",
          "Bestes Modell",
          "Gesch. tok/s",
          "Hardware-Annahme"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-de.webp",
        "imageCaption": "Lokales LLM auf dem Laptop: Q4_K_M-Modellempfehlungen nach RAM-Stufe, mit geschätzten tok/s"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Ein Laptop mit 8 GB RAM führt ein lokales 3B–4B-LLM mit geschätzten 15–30 tok/s aus, ein Laptop mit 16 GB schafft 8B–9B-Modelle mit geschätzten 8–15 tok/s, und Apple Silicon ist schneller, weil der Unified Memory mehr Bandbreite hat."
          },
          {
            "type": "plain-terms",
            "text": "Die Hauptgrenzen Ihres Laptops sind RAM und Speicherbandbreite. Die Modelldatei muss in den RAM passen, und jedes erzeugte Token liest die gesamte Datei einmal, daher liegt die Geschwindigkeit höchstens bei der Speicherbandbreite geteilt durch die Dateigröße. Unter Dauerlast können Laptops zudem langsamer werden (Thermal Throttling); ein Ständer, ein Netzteil und ein kleineres Modell helfen."
          }
        ],
        "items": [
          "Ein 3B–4B-Modell mit Q4_K_M läuft auf einem Laptop mit 8 GB RAM: Llama 3.2 3B (2,0 GB große Datei) mit geschätzten 18–30 tok/s und Phi-4-mini (2,5 GB) mit geschätzten 15–25 tok/s.",
          "16 GB RAM reichen für 8B–9B-Modelle mit Q4_K_M: Qwen3 8B (5,2 GB große Datei) mit geschätzten 8–15 tok/s bei Dual-Channel-RAM, 13–17 tok/s auf einem Apple M3 und 21–26 tok/s auf einem Apple M5.",
          "Faustregel für die Geschwindigkeit: Token pro Sekunde liegen höchstens bei Speicherbandbreite ÷ Größe der Modelldatei (eine Obergrenze; real ist es langsamer). Dual-Channel-DDR4-3200 bietet 51,2 GB/s, Dual-Channel-DDR5-5600 bietet 89,6 GB/s, und Single-Channel halbiert das Ergebnis. Apple gibt 100 GB/s für den M3 und 153 GB/s für den M5 an.",
          "Alle Geschwindigkeiten auf dieser Seite sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen. Mit `ollama run <model> --verbose` lesen Sie Ihre eigenen Token pro Sekunde ab.",
          "Schließen Sie bei langen Sitzungen das Netzteil an und sorgen Sie für Luftzufuhr: Unter Dauerlast können Laptop-Chips die Taktrate senken, und aktive Inferenz entleert den Akku deutlich schneller als leichte Nutzung."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "In einem Satz",
        "content": [
          "Ein lokales LLM läuft auf einem Laptop mit quantisierten Modellen: Q4_K_M verkleinert die Datei auf etwa 31 % der FP16-Größe (4,58 GiB statt 14,96 GiB bei Llama 3.1 8B) bei geringem Qualitätsverlust."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "In einfachen Worten",
        "content": [
          "Ein LLM lokal auszuführen heißt, den Chatbot auf dem eigenen Laptop statt auf den Servern eines Anbieters laufen zu lassen: privat und offline nutzbar, aber langsamer als ein Cloud-Dienst."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "Wann sollten Sie ein LLM auf einem Laptop ausführen?",
        "items": [
          "✅ **Lokale LLMs nutzen, wenn:** die Daten auf dem Gerät bleiben müssen, Sie offline arbeiten oder keine Kosten pro Token wünschen",
          "❌ **Nicht nutzen, wenn:** Sie die stärkste Reasoning-Qualität brauchen, sehr langen Kontext benötigen (100K+ Token, weil der KV-Cache mit dem Kontext wächst) oder schnelle Stapelverarbeitung wollen – siehe [Grenzen lokaler LLMs](/de/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "Kann man ein lokales LLM auf einem Laptop ausführen?",
        "content": [
          "**Ja – mit der passenden Modellgröße.** Ein Laptop mit 8 GB RAM führt ein 3B–4B-Modell mit Q4_K_M bei Dual-Channel-RAM mit geschätzten 15–30 tok/s aus (Llama 3.2 3B: 18–30, Phi-4-mini: 15–25). Ein Apple-Silicon-Laptop mit 16 GB schafft ein 8B-Modell je nach Chip mit geschätzten 13–26 tok/s. Das ist langsamer als die meisten Cloud-APIs, aber schnell genug zum Mitlesen.",
          "Die praktische Obergrenze auf einem Laptop mit 8 GB ist ein 3B–4B-Modell; 7B–8B-Dateien (4,4–5,2 GB) lassen kaum Platz für Betriebssystem und Browser. Ein 14B-Modell mit Q4_K_M (Qwen3 14B: 9,3 GB große Datei) passt nur mit kurzem Kontext und geschlossenen Apps auf einen Rechner mit 16 GB.",
          "Die Geschwindigkeiten hier sind PromptQuorum-Schätzungen aus der Speicherbandbreite, keine Labormessungen. Zu Stufen unter 8 GB und zur vollständigen Bandbreitenregel siehe **[Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs)**; für Laptops ohne GPU siehe **[Beste reine CPU-LLMs 2026](/de/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "Läuft RAG (Retrieval) auf einem Laptop?",
        "content": [
          "**Ja – RAG läuft auf einem Laptop, weil weiterhin das Chat-Modell der begrenzende Faktor ist, nicht die Retrieval-Schicht.** Ein RAG-Stack auf dem Laptop besteht aus drei Teilen: einem kleinen Embedding-Modell, einem lokalen Vektorspeicher und Ihrem Chat-Modell.",
          "Das Embedding-Modell ist klein: nomic-embed-text hat auf Ollama 274 MB (2K Kontextfenster) und belastet den RAM kaum. Auf einem Laptop mit 8 GB können Sie ein 3B-Chat-Modell plus Embedding-Modell betreiben; mit 16 GB bleibt Spielraum für ein 8B-Chat-Modell neben dem Retrieval.",
          "**2 GB RAM genügen nur für sehr kleine Setups.** Qwen3 0.6B (523 MB) plus nomic-embed-text sind zusammen etwa 0,8 GB an Dateien und passen, wenn tatsächlich 2 GB frei sind. Auf einem typischen Laptop belegt das Betriebssystem 2–3 GB, und Auslagern auf die Festplatte bremst die Generierung stark; planen Sie daher 8 GB als praktische Untergrenze ein."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "Welches Laptop-Setup brauchen Sie für Ihren Anwendungsfall?",
        "items": [
          "**Für Einsteiger** – 8 GB RAM, 3B–4B-Modelle, nur CPU. Erwarten Sie geschätzte 15–30 tok/s. Genug für Chat, Zusammenfassungen und einfaches Coding.",
          "**Für Entwickler** – 16 GB RAM, 8B–9B-Modelle, optional GPU. Multitasking ist möglich, ohne andere Apps zu schließen (gesch. 8–15 tok/s auf der CPU).",
          "**Für Power-User** – Apple Silicon mit Pro- oder Max-Chip oder ein Laptop mit GPU und mindestens 8 GB VRAM, 8B–14B-Modelle. Schätzungen für Qwen3 8B: 41–53 tok/s auf einem M5 Pro (307 GB/s) und 34–44 tok/s auf einer RTX 4060 Laptop-GPU (etwa 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "Wer kann ein lokales LLM auf einem Laptop ausführen?",
        "items": [
          "**Einsteiger** → [LM Studio](/de/local-llms/how-to-install-lm-studio) + 3B-Modell",
          "**Fortgeschrittene** → [Ollama](/de/local-llms/how-to-install-ollama) + 8B-Modell",
          "**Profis** → 14B mit [Quantisierungs-Feintuning](/de/local-llms/llm-quantization-explained)",
          "❌ **Keinen Laptop nutzen, wenn:** Sie Echtzeit-APIs brauchen (nutzen Sie einen vLLM-Server) oder große Datensätze verarbeiten (nutzen Sie Cloud-GPUs)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "Welche Größe lokaler LLM-Modelle brauchen Sie?",
        "content": "Die Dateigrößen sind die Ollama-Downloads, geprüft auf ollama.com am 2026-10-23, bei Quantisierung der Klasse Q4_K_M (etwa 70 % kleiner als FP16). Min. RAM ist die Datei plus etwa 0,5 GB Overhead; planen Sie 2–4 GB zusätzlich für Betriebssystem und Browser ein:",
        "rows": [
          {
            "Modell": "Llama 3.2 3B",
            "Datei (Ollama)": "2,0 GB",
            "Min. RAM": "2,5–3 GB",
            "Gesch. tok/s": "18–30",
            "Am besten für": "Einfache Aufgaben, Chat, Zusammenfassungen"
          },
          {
            "Modell": "Phi-4-mini 3.8B",
            "Datei (Ollama)": "2,5 GB",
            "Min. RAM": "3 GB",
            "Gesch. tok/s": "15–25",
            "Am besten für": "Reasoning und Coding mit 8 GB"
          },
          {
            "Modell": "Qwen3 8B",
            "Datei (Ollama)": "5,2 GB",
            "Min. RAM": "6 GB",
            "Gesch. tok/s": "8–15",
            "Am besten für": "Allgemeine Nutzung, mehrsprachig, Coding"
          },
          {
            "Modell": "Qwen3 14B",
            "Datei (Ollama)": "9,3 GB",
            "Min. RAM": "10 GB",
            "Gesch. tok/s": "4–8",
            "Am besten für": "Anspruchsvollere Aufgaben mit 16 GB, kurzer Kontext"
          }
        ],
        "columns": [
          "Modell",
          "Datei (Ollama)",
          "Min. RAM",
          "Gesch. tok/s",
          "Am besten für"
        ],
        "note": "Die Werte sind PromptQuorum-Schätzungen, keine Labormessungen, für einen Laptop mit Dual-Channel-DDR4-3200 bis DDR5-5600 (51,2–89,6 GB/s); Single-Channel-RAM halbiert sie. Beispiel Q4_K_M: Llama 3.1 8B hat 14,96 GiB bei FP16 und 4,58 GiB bei Q4_K_M (llama.cpp-quantize-README), etwa 69 % weniger. → [VRAM-Rechner](/de/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "Laptop mit 8 GB vs. 16 GB RAM: Was ist der praktische Unterschied?",
        "rows": [
          {
            "Szenario": "Maximale Modellgröße",
            "8 GB RAM": "3B–4B komfortabel; 7B–8B (4,4–5,2 GB große Dateien) knapp",
            "16 GB RAM": "8B–9B komfortabel; 14B (9,3 GB) mit kurzem Kontext"
          },
          {
            "Szenario": "Modell bei geöffnetem Browser",
            "8 GB RAM": "3B–4B (knapp)",
            "16 GB RAM": "8B–9B komfortabel"
          },
          {
            "Szenario": "Empfohlenes erstes Modell",
            "8 GB RAM": "llama3.2:3b oder phi4-mini",
            "16 GB RAM": "qwen3:8b oder llama3.1:8b"
          },
          {
            "Szenario": "Gleichzeitige Apps",
            "8 GB RAM": "Browser schließen, bevor Sie ein 8B-Modell laden",
            "16 GB RAM": "Normales Multitasking mit einem 8B-Modell"
          }
        ],
        "columns": [
          "Szenario",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "Welche lokalen LLM-Modelle laufen auf einem Laptop am besten?",
        "content": "**Diese Modelle passen zu den Grenzen eines Laptops: Kleine Dateien liefern bei gleicher Speicherbandbreite mehr Token pro Sekunde.** Die Geschwindigkeiten sind PromptQuorum-Schätzungen für einen Laptop mit Dual-Channel-DDR4-3200 bis DDR5-5600 (51,2–89,6 GB/s), abgeleitet aus der Bandbreitenobergrenze (Bandbreite ÷ Ollama-Dateigröße), keine Labormessungen; Single-Channel-RAM halbiert sie. Die Dateigrößen sind die Ollama-Downloads, geprüft am 2026-10-23. Zum VRAM-Bedarf verschiedener Modelle und Laptop-Konfigurationen siehe den [Leitfaden zum VRAM-Bedarf →](/de/local-llms/how-much-vram-local-llm). Installieren Sie [Ollama](/de/local-llms/how-to-install-ollama), um jedes dieser Modelle mit einem einzigen Befehl auszuführen. Keine GPU? Siehe **[Beste reine CPU-LLMs 2026](/de/local-llms/best-cpu-only-llm)**. Es sind Modelle mit offenen Gewichten (Open-Weights); die Lizenz steht jeweils auf der Model Card.",
        "rows": [
          {
            "Modell": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "Datei (Ollama)": "2,0 GB",
            "Min. RAM": "2,5–3 GB",
            "Gesch. tok/s": "18–30",
            "Am besten für": "Laptops mit 8 GB, schnelle Aufgaben"
          },
          {
            "Modell": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "Datei (Ollama)": "2,5 GB",
            "Min. RAM": "3 GB",
            "Gesch. tok/s": "15–25",
            "Am besten für": "Laptops mit 8 GB, Reasoning und Coding"
          },
          {
            "Modell": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "Datei (Ollama)": "5,2 GB",
            "Min. RAM": "6 GB",
            "Gesch. tok/s": "8–15",
            "Am besten für": "Laptops mit 16 GB, mehrsprachig, Coding"
          },
          {
            "Modell": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "Datei (Ollama)": "4,9 GB",
            "Min. RAM": "5,5 GB",
            "Gesch. tok/s": "8–14",
            "Am besten für": "Laptops mit 16 GB, allgemeine Nutzung"
          },
          {
            "Modell": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "Datei (Ollama)": "6,6 GB",
            "Min. RAM": "7–8 GB",
            "Gesch. tok/s": "6–12",
            "Am besten für": "Laptops mit 16 GB, neuere Familie, Bildeingabe"
          }
        ],
        "columns": [
          "Modell",
          "Datei (Ollama)",
          "Min. RAM",
          "Gesch. tok/s",
          "Am besten für"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-de.webp",
        "imageCaption": "Beste lokale LLM-Modelle für Laptops nach Dateigröße, mit geschätzten tok/s bei Dual-Channel-RAM"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "Mit welchem lokalen LLM-Setup starten Sie auf einem Laptop?",
        "content": [
          "Die Laptop-Hardware begrenzt die Modellgröße, doch klare, strukturierte Prompts können die Ausgabe kleinerer Modelle verbessern. Techniken für kleinere Modelle finden Sie im [Leitfaden zu Prompt Engineering](/de/prompt-engineering)."
        ],
        "items": [
          "🥇 **Einfacher Start per Kommandozeile:** [Ollama](/de/local-llms/how-to-install-ollama) – ein Befehl pro Modell, breite Modellunterstützung",
          "🥈 **Am einfachsten für Einsteiger:** [LM Studio](/de/local-llms/how-to-install-lm-studio) – grafische Oberfläche, kein Terminal nötig",
          "🥉 **Wenig RAM (8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **Mehr Qualität mit 16 GB:** Qwen3 8B (Q4_K_M, oder Q5_K_M, wenn die Geschwindigkeit es zulässt)",
          "💡 **Im Zweifel:** mit Ollama + Llama 3.2 3B Q4_K_M starten"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon vs. Windows-Laptop: Was eignet sich besser für lokale LLMs?",
        "content": [
          "**Apple-Silicon-MacBooks sind eine starke Wahl für lokale LLMs, weil der Unified Memory der GPU Zugriff mit hoher Bandbreite auf den gesamten Speicherpool gibt.** Die Geschwindigkeit wird von der Speicherbandbreite bestimmt: Apple gibt 100 GB/s für den M3, 153 GB/s für den M5, 307 GB/s für den M5 Pro und 460 oder 614 GB/s für den M5 Max an (je nach GPU-Kernen). Das MacBook Pro mit M5 Pro und M5 Max, vorgestellt am 3. März 2026, bietet bis zu 64 GB bzw. 128 GB Unified Memory.",
          "Ein Windows-Laptop mit dedizierter NVIDIA-GPU kann schneller sein, wenn das Modell in den VRAM passt. Die RTX 4060 Laptop-GPU hat 8 GB GDDR6 an einem 128-Bit-Bus (NVIDIA); bei 16 Gbps (Angabe eines Drittanbieters) sind das etwa 256 GB/s, sodass Qwen3 8B (5,2 GB) eine Obergrenze von rund 49 tok/s hat. Der Preis dafür sind höhere Leistungsaufnahme und mehr Hitze.",
          "Windows-Laptops mit nur integrierter Intel-Iris-Xe- oder AMD-Radeon-Grafik sind durch die Bandbreite des Arbeitsspeichers begrenzt. Laut Ollama-Dokumentation ist die Vulkan-GPU-Unterstützung standardmäßig aktiviert, wenn das Backend installiert ist, und Intel-Onboard-Grafik wird in keiner Support-Tabelle aufgeführt; prüfen Sie daher die Spalte PROCESSOR von `ollama ps`. Eine iGPU teilt sich denselben RAM, der Gewinn fällt deshalb meist gering aus.",
          "**Beste Modelle für integrierte Grafik (Intel Iris Xe / AMD Radeon):** Mit 16 GB RAM wählen Sie für Geschwindigkeit ein 3B–4B-Modell mit Q4_K_M (Llama 3.2 3B, gesch. 18–30 tok/s bei Dual-Channel-RAM) oder für Qualität Qwen3 8B (gesch. 8–15 tok/s). Bevorzugen Sie ein Modell, das bequem im RAM bleibt. Eine Schritt-für-Schritt-Anleitung für Low-End-Setups finden Sie unter [Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs).",
          "Methode der Tabelle: Jede Schätzung liegt bei etwa 70–90 % der Obergrenze (Bandbreite ÷ die 5,2 GB große Qwen3-8B-Datei). Es sind PromptQuorum-Schätzungen, keine Labormessungen."
        ],
        "rows": [
          {
            "Laptop-Typ": "Apple M3, 16 GB",
            "Speicherbandbreite": "100 GB/s",
            "Qwen3 8B gesch. tok/s": "13–17",
            "Praktisch max. Modell": "~9B (14B knapp)"
          },
          {
            "Laptop-Typ": "Apple M5, 16 GB",
            "Speicherbandbreite": "153 GB/s",
            "Qwen3 8B gesch. tok/s": "21–26",
            "Praktisch max. Modell": "~9B (14B knapp)"
          },
          {
            "Laptop-Typ": "Apple M5 Pro",
            "Speicherbandbreite": "307 GB/s",
            "Qwen3 8B gesch. tok/s": "41–53",
            "Praktisch max. Modell": "Speicherbegrenzt (bis 64 GB)"
          },
          {
            "Laptop-Typ": "Apple M5 Max",
            "Speicherbandbreite": "460–614 GB/s",
            "Qwen3 8B gesch. tok/s": "62–106",
            "Praktisch max. Modell": "Speicherbegrenzt (bis 128 GB)"
          },
          {
            "Laptop-Typ": "RTX 4060 Laptop (8 GB VRAM)",
            "Speicherbandbreite": "~256 GB/s",
            "Qwen3 8B gesch. tok/s": "34–44",
            "Praktisch max. Modell": "~8B im VRAM"
          },
          {
            "Laptop-Typ": "Laptop mit Dual-Channel-DDR5-5600",
            "Speicherbandbreite": "89,6 GB/s",
            "Qwen3 8B gesch. tok/s": "12–15",
            "Praktisch max. Modell": "~9B (16 GB RAM)"
          },
          {
            "Laptop-Typ": "Laptop mit Single-Channel-DDR4-3200",
            "Speicherbandbreite": "25,6 GB/s",
            "Qwen3 8B gesch. tok/s": "3–4",
            "Praktisch max. Modell": "3B–4B empfohlen"
          }
        ],
        "columns": [
          "Laptop-Typ",
          "Speicherbandbreite",
          "Qwen3 8B gesch. tok/s",
          "Praktisch max. Modell"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "Reicht ein Laptop für lokale LLMs im Vergleich zu einem Desktop?",
        "content": [
          "**Laptops führen 3B–14B-Modelle effektiv aus, doch Desktops kommen dank besserer Kühlung und dedizierter GPUs mit deutlich höherer Speicherbandbreite weiter.** Eine Desktop-RTX-4090 hat 24 GB VRAM und 1.008 GB/s Bandbreite (NVIDIA), genug für Modelldateien bis etwa 20 GB im VRAM, etwa Gemma 4 31B (19–20 GB auf Ollama). Ein 70B-Modell mit Q4 ist auf Ollama eine 43 GB große Datei (llama3.3:70b); sie passt nicht in 24 GB und muss mit dem viel langsameren Arbeitsspeicher aufgeteilt werden.",
          "Nutzen Sie einen Laptop für Mobilität und zum Experimentieren. Nutzen Sie einen Desktop für große Modelle (14B+), Dauerlast oder produktive Inferenz. Sie überlegen, welche Plattform? Im [Kaufratgeber Laptop vs. Desktop für lokale LLMs](/de/local-llms/laptop-vs-desktop-local-llm) finden Sie einen vollständigen Kosten- und Leistungsvergleich."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "Wie gehen Sie mit Thermal Throttling auf einem Laptop um?",
        "content": [
          "**Thermal Throttling tritt auf, wenn CPU oder GPU ihre Temperaturgrenze erreichen und die Taktrate senken, um sich abzukühlen.** Lokale Inferenz ist eine Dauerlast, deshalb kann ein dünner Laptop nach einer Weile langsamer werden; wie stark und wie schnell, hängt von der Kühlung ab. Prüfen Sie Ihre eigene Geschwindigkeit über 10 Minuten mit `ollama run <model> --verbose`."
        ],
        "items": [
          "**Nutzen Sie einen Laptop-Ständer mit Luftzirkulation** – ein erhöhter Laptop verbessert den Abluftstrom und kann das Throttling hinauszögern.",
          "**Testen Sie einen niedrigeren Energiemodus** – die Token-Generierung wird von der Speicherbandbreite begrenzt, nicht von der Taktrate; ein ausgewogener oder sparsamer Energieplan (unter macOS der Energiesparmodus) kann Hitze senken und kostet womöglich weniger Geschwindigkeit als erwartet; testen Sie es auf Ihrem Gerät.",
          "**Begrenzen Sie Generierungslänge und Kontext** – teilen Sie lange Aufgaben in kürzere Prompts auf und vermeiden Sie es, sehr lange Antworten erneut zu generieren.",
          "**Nehmen Sie Q4_K_M statt Q8_0** – die Datei ist etwa 1,7-mal kleiner (4,58 vs. 7,95 GiB bei Llama 3.1 8B), jedes Token liest also weniger Daten aus dem Speicher, und der Chip ist kürzer unter Last."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "Wie viel Akku verbraucht ein lokales LLM?",
        "content": [
          "**Der Akkuverbrauch bei lokaler Inferenz ist erheblich, weil CPU oder GPU während der gesamten Generierung unter hoher Last laufen.** Die Laufzeit in Stunden entspricht ungefähr der Akkukapazität in Wattstunden geteilt durch die durchschnittliche Leistungsaufnahme: Ein 60-Wh-Akku hält bei 20 W etwa 3 Stunden, bei 30 W etwa 2 Stunden. Das sind Rechenbeispiele, keine Messungen; die reale Leistungsaufnahme hängt von Laptop, Modell und Energiemodus ab.",
          "Die angegebene Akkulaufzeit beschreibt keine Inferenz. Apples Angabe von bis zu 16 Stunden drahtlosem Surfen für das 14-Zoll-MacBook Pro mit M5 (Akku mit 72,4 Wh) gilt für leichte Nutzung, nicht für dauerhafte Generierung.",
          "Schließen Sie bei längeren Sitzungen das Netzteil an. Für akkuschonende Nutzung wählen Sie ein kleineres Modell (eine 3B-Datei ist weniger als halb so groß wie eine 8B-Datei, jede Antwort ist also schneller fertig) und verkürzen den Kontext."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "Welche Quantisierungsstufe eignet sich für einen Laptop?",
        "content": "[Quantisierung](/de/local-llms/llm-quantization-explained) verringert die Modellpräzision, um den Bedarf an RAM und Bandbreite zu senken. Auf Laptops ist Q4_K_M der übliche Standard. Die Größen unten gelten für Llama 3.1 8B laut llama.cpp-quantize-README (14,96 GiB bei FP16); andere Modelle skalieren ähnlich:",
        "rows": [
          {
            "Quantisierung": "Q2_K",
            "Größe vs. FP16": "~20 % (2,95 GiB)",
            "Qualitätsverlust": "Hoch – spürbare Verschlechterung",
            "Einsatzfall": "Nur, wenn nichts anderes passt"
          },
          {
            "Quantisierung": "Q3_K_S",
            "Größe vs. FP16": "~23 % (3,41 GiB)",
            "Qualitätsverlust": "Mittel",
            "Einsatzfall": "Ein größeres Modell in den RAM pressen"
          },
          {
            "Quantisierung": "Q4_K_M",
            "Größe vs. FP16": "~31 % (4,58 GiB)",
            "Qualitätsverlust": "Gering – üblicher Standard",
            "Einsatzfall": "Die meisten Laptops, guter Kompromiss"
          },
          {
            "Quantisierung": "Q5_K_M",
            "Größe vs. FP16": "~36 % (5,33 GiB)",
            "Qualitätsverlust": "Klein",
            "Einsatzfall": "Laptops mit 16 GB, wenn die Geschwindigkeit reicht"
          },
          {
            "Quantisierung": "Q8_0",
            "Größe vs. FP16": "~53 % (7,95 GiB)",
            "Qualitätsverlust": "Sehr klein",
            "Einsatzfall": "Viel freier RAM, Geschwindigkeit unkritisch"
          }
        ],
        "columns": [
          "Quantisierung",
          "Größe vs. FP16",
          "Qualitätsverlust",
          "Einsatzfall"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "Welche Datenschutzgesetze gelten für lokale LLMs auf dem Laptop?",
        "content": [
          "**Europäische Union (DSGVO):** Läuft ein Modell auf Ihrem eigenen Laptop, müssen Prompts und Dokumente das Gerät nicht verlassen, wodurch sich vermeiden lässt, personenbezogene Daten an einen externen Auftragsverarbeiter zu senden. Ob die DSGVO, der EU AI Act oder andere Pflichten greifen, hängt davon ab, wer das System betreibt und zu welchem Zweck; dieser Leitfaden ist keine Rechtsberatung, und die Compliance hängt von Ihrem gesamten Setup ab, nicht davon, wo die Inferenz läuft.",
          "**Deutschland:** Für deutsche Unternehmen kann es datenschutzrechtliche Fragen vereinfachen, Dokumente auf dem Gerät zu halten; ob ein lokales Setup Ihre Pflichten erfüllt (zum Beispiel bei vertraulichen Mandantendaten), wird jedoch im Einzelfall entschieden. Fragen Sie Ihre Datenschutzbeauftragte oder Ihren Datenschutzbeauftragten.",
          "**Japan (APPI):** Japans Gesetz zum Schutz personenbezogener Daten regelt die Übermittlung personenbezogener Daten ins Ausland. Wenn die Inferenz auf dem Laptop läuft, werden Prompts nicht an eine ausländische API gesendet, was die Frage der Übermittlung vereinfachen kann; eine rechtliche Prüfung ersetzt das nicht.",
          "**Vereinigte Staaten:** Es gibt kein einheitliches Bundesgesetz für KI-Daten; je nach Anwendung gelten branchenspezifische Regeln wie HIPAA (Gesundheitswesen), FERPA (Bildung) und Datenschutzgesetze der Bundesstaaten. Daten auf einem lokalen Gerät zu halten kann die Zahl der beteiligten Dritten verringern, doch Sie bleiben für die Sicherheit von Gerät und Daten verantwortlich."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Häufige Fragen zu lokalen LLMs auf Laptops",
        "faqs": [
          {
            "q": "Welche Ollama-Modelle eignen sich am besten für Intel Iris Xe mit 16 GB RAM?",
            "a": "Bei einem Laptop mit Intel-Iris-Xe-Grafik und 16 GB RAM ist die Geschwindigkeit durch die Bandbreite des Arbeitsspeichers begrenzt. Ob Ollama die iGPU nutzt, hängt von Treiber- und Backend-Unterstützung ab (prüfen Sie die Spalte PROCESSOR von `ollama ps`), und eine iGPU teilt sich denselben RAM, der Gewinn fällt deshalb meist gering aus. Wählen Sie für Geschwindigkeit ein 3B–4B-Modell mit Q4_K_M: Llama 3.2 3B (gesch. 18–30 tok/s bei Dual-Channel-RAM) mit `ollama run llama3.2:3b`, oder für mehr Qualität Qwen3 8B (gesch. 8–15 tok/s) mit `ollama run qwen3:8b`. Die Geschwindigkeiten sind PromptQuorum-Schätzungen, keine Labormessungen."
          },
          {
            "q": "Kann man RAG lokal auf einem Laptop ausführen?",
            "a": "Ja. Ein RAG-Stack auf dem Laptop besteht aus einem kleinen Embedding-Modell, einem lokalen Vektorspeicher und Ihrem Chat-Modell. Das Embedding-Modell ist klein (nomic-embed-text hat auf Ollama 274 MB), daher bleibt das Chat-Modell die entscheidende RAM-Grenze: Ein Laptop mit 8 GB führt ein 3B-Chat-Modell mit Retrieval aus, und 16 GB lassen Platz für ein 8B-Modell. Die RAM-Aufteilung finden Sie oben im Abschnitt [RAG auf einem Laptop](#rag-laptop)."
          },
          {
            "q": "Welches ist das beste reine CPU-LLM für einen Laptop?",
            "a": "Unter den im CPU-Leitfaden verglichenen Modellen ist Phi-4 Mini (3,8B, 2,5 GB große Datei) die beste Allround-Wahl mit geschätzten 15–25 tok/s bei Dual-Channel-RAM, und Llama 3.2 3B (2,0 GB große Datei) hat die kleinste Datei bei geschätzten 18–30 tok/s, beide mit Q4_K_M. Den vollständigen Vergleich und die Ollama-Befehle finden Sie unter [Beste reine CPU-LLMs 2026](/de/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "Schadet ein lokales LLM meinem Laptop auf Dauer?",
            "a": "Bei einem intakten Laptop ist kein unmittelbarer Schaden zu erwarten: Chips senken ihre Taktrate, wenn sie heiß werden, sodass dauerhafte Inferenz das Gerät verlangsamt, statt es zu beschädigen. Anhaltende Hitze belastet über die Zeit dennoch Lüfter und Akku; nutzen Sie daher einen Ständer oder ein Kühlpad, halten Sie die Lüftungsschlitze frei und machen Sie Pausen. Beachten Sie die Hinweise des Herstellers zu Thermik und Akkupflege."
          },
          {
            "q": "Kann ich ein lokales LLM auf einem Laptop mit 4 GB RAM ausführen?",
            "a": "Gerade so. Ein kleines Modell wie Qwen3 1.7B (1,4 GB große Datei) oder Llama 3.2 1B (1,3 GB große Datei) passt, doch das Betriebssystem braucht 2–3 GB, sodass Sie bei insgesamt 4 GB wahrscheinlich in den Swap geraten, was die Generierung stark bremst. Das praktische Minimum für ein komfortables Erlebnis sind 8 GB. Siehe [Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "Braucht mein Laptop eine dedizierte GPU, um lokale LLMs auszuführen?",
            "a": "Nein. Ollama, LM Studio und GPT4All laufen auch nur mit der CPU. Eine GPU mit hoher Speicherbandbreite beschleunigt die Generierung, doch 3B–4B-Modelle sind auf der CPU mit geschätzten 15–30 tok/s bei Dual-Channel-RAM brauchbar. Empfehlungen für CPU-taugliche Modelle finden Sie unter [Beste lokale LLM-Modelle für Einsteiger](/de/local-llms/best-beginner-local-llm-models)."
          },
          {
            "q": "Welches ist das schnellste lokale LLM auf einem MacBook mit 8 GB?",
            "a": "Unter den Modellen in diesem Leitfaden ist Llama 3.2 3B mit Q4_K_M (2,0 GB große Datei) die schnellste praxistaugliche Wahl auf einem MacBook mit 8 GB. Auf einem M2 oder M3 (beide laut Apple 100 GB/s) liegt die Bandbreitenobergrenze bei etwa 50 tok/s, und die PromptQuorum-Schätzung beträgt 35–45 tok/s. Eine 8B-Datei (5,2 GB) ist mit 8 GB knapp, weil auch macOS und Ihre Apps Speicher brauchen."
          },
          {
            "q": "Wie verringere ich Thermal Throttling auf einem Laptop bei der LLM-Inferenz?",
            "a": "Vier Schritte: (1) den Laptop auf einen Ständer mit Luftzirkulation stellen, (2) einen ausgewogenen oder sparsamen Energiemodus testen, weil die Generierung stärker von der Speicherbandbreite als von der Taktrate begrenzt wird, (3) Generierungslänge und Kontext begrenzen und (4) Q4_K_M statt Q8_0 nutzen, damit jedes Token weniger Daten liest. Prüfen Sie Ihre Geschwindigkeit über 10 Minuten mit `ollama run <model> --verbose`."
          },
          {
            "q": "Kann ich ein lokales LLM auf einem Chromebook ausführen?",
            "a": "Nur auf Chromebooks mit aktiviertem Linux (Crostini) und nur mit kleinen Modellen. Die meisten Chromebooks haben 4–8 GB RAM und eine bescheidene Speicherbandbreite, daher ist ein 1B–3B-Modell mit Q4_K_M die realistische Obergrenze, und die Geschwindigkeit bleibt niedrig. Chromebooks ohne Linux-Unterstützung können Ollama nicht ausführen."
          },
          {
            "q": "Ist Apple Silicon besser als eine NVIDIA-Laptop-GPU für lokale LLMs?",
            "a": "Das hängt vom Speicher ab. Die Geschwindigkeit folgt Speicherbandbreite und Kapazität: Ein MacBook mit 16 GB und M5 (153 GB/s) hat für Qwen3 8B eine Obergrenze von rund 29 tok/s, während eine RTX 4060 Laptop-GPU (etwa 256 GB/s, 8 GB VRAM) eine Obergrenze von rund 49 tok/s hat, aber nur Modelle fasst, die in 8 GB passen. Ein M5 Pro (307 GB/s) oder M5 Max (460–614 GB/s) mit mehr Speicher hält größere Modelle in schnellem Speicher. Die Leistungsaufnahme unterscheidet sich je nach Modell, prüfen Sie daher Ihren Laptop."
          },
          {
            "q": "Was passiert, wenn das Modell für den RAM meines Laptops zu groß ist?",
            "a": "Das Betriebssystem beginnt, auf die Festplatte auszulagern, oder das Modell lässt sich nicht laden, und die Generierung kann zäh werden, während die Lüfter auf Hochtouren laufen. Abhilfe schaffen ein kleineres Modell, eine niedrigere Quantisierungsstufe (Q4_K_M statt Q8_0) oder ein kürzerer Kontext (`OLLAMA_CONTEXT_LENGTH`, Standard 4096)."
          },
          {
            "q": "Wie lange hält der Akku bei lokalen LLMs auf einem Laptop?",
            "a": "Die Laufzeit entspricht ungefähr der Akkukapazität in Wh geteilt durch die durchschnittliche Leistungsaufnahme in W. Ein 60-Wh-Akku hält bei 20 W etwa 3 Stunden und bei 30 W etwa 2 Stunden (Rechenbeispiel, keine Messung). Die reale Leistungsaufnahme hängt von Laptop, Modell und Energiemodus ab. Für ganztägige Nutzung schließen Sie das Netzteil an."
          },
          {
            "q": "Brauche ich eine Internetverbindung, um ein lokales LLM auf einem Laptop auszuführen?",
            "a": "Nein. Nach dem Herunterladen des Modells (dafür ist Internet nötig) läuft die Inferenz vollständig offline. Das Modell läuft komplett auf der CPU oder GPU des Laptops. Das macht lokale LLMs nützlich auf Reisen, in abgesicherten Umgebungen oder an Orten mit unzuverlässiger Verbindung."
          },
          {
            "q": "Kann ich ein lokales LLM mit 8 GB RAM ausführen?",
            "a": "Ja. Ein Laptop mit 8 GB führt ein 3B–4B-Modell mit Q4_K_M (2,0–2,5 GB große Dateien) mit geschätzten 15–30 tok/s bei Dual-Channel-RAM aus, oder mit geschätzten 28–45 tok/s auf einem Apple M2 oder M3. 7B–8B-Modelle (4,4–5,2 GB große Dateien) sind mit 8 GB knapp."
          },
          {
            "q": "Welcher Laptop ist der schnellste für lokale LLMs?",
            "a": "Für lokale LLMs sind Speicherbandbreite und ausreichend Speicher die entscheidenden Werte. Apple nennt 307 GB/s für den M5 Pro (bis 64 GB) und 460 oder 614 GB/s für den M5 Max (bis 128 GB); für Qwen3 8B betragen die PromptQuorum-Schätzungen 41–53 tok/s auf einem M5 Pro und 62–106 tok/s auf einem M5 Max. Unter Windows hat ein Laptop mit NVIDIA-GPU, die das Modell im VRAM hält, eine hohe Obergrenze, zum Beispiel etwa 256 GB/s bei einer RTX 4060 Laptop-GPU mit 8 GB."
          },
          {
            "q": "Wie langsam sind lokale LLMs auf der CPU?",
            "a": "Die Geschwindigkeit liegt höchstens bei Speicherbandbreite ÷ Größe der Modelldatei. Bei Dual-Channel-DDR4/DDR5 läuft ein 3B–4B-Modell mit Q4_K_M mit geschätzten 15–30 tok/s und Qwen3 8B mit geschätzten 8–15 tok/s; Single-Channel-RAM halbiert das. Das ist langsam genug zum Mitlesen, aber schnell genug für Chat und Zusammenfassungen. Apple Silicon erreicht bei Qwen3 8B geschätzte 13–26 tok/s (M3 bis M5), weil der Unified Memory mehr Bandbreite hat."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "**Technische Daten des Apple MacBook Pro** -- Speicherbandbreite von M5 (153 GB/s), M5 Pro (307 GB/s) und M5 Max (460 und 614 GB/s) sowie angegebene Akkulaufzeit. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Technische Daten des Apple MacBook Air (15 Zoll, M3, 2024)** -- M3-Speicherbandbreite von 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom: M2** -- 100 GB/s Bandbreite des Unified Memory. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom: MacBook Pro mit M5 Pro und M5 Max (3. März 2026)** -- bis zu 64 GB und 128 GB Unified Memory. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**NVIDIA-GeForce-Laptop-Vergleich** -- RTX 4060 Laptop-GPU: 8 GB GDDR6, 128-Bit-Bus. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: RTX 4060 Laptop GPU** -- 16 Gbps Speichergeschwindigkeit (Drittanbieter; Grundlage der Angabe von ~256 GB/s). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**Technische Daten der NVIDIA GeForce RTX 4090** -- 24 GB VRAM, 1.008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Ollama-Bibliothek** -- Dateigrößen geprüft am 2026-10-23: [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**Ollama FAQ** -- Standard-Kontextlänge 4096, OLLAMA_CONTEXT_LENGTH, KV-Cache-Typ, Keep-alive und `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Ollama-GPU-Dokumentation** -- Metal auf Apple Silicon, Vulkan und unterstützte GPUs. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**llama.cpp-quantize-README** -- Dateigrößen nach Quantisierungstyp für Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** -- GPU-Beschleunigung für Apple-Silicon-Macs. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- Systemanforderungen, GPU-Kompatibilität und Einrichtung der lokalen Inferenz. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "Welche typischen Fehler gibt es bei lokalen LLMs auf Laptops?",
        "items": [
          "**Ein Modell nutzen, das für den verfügbaren RAM zu groß ist** → das System lagert auf die Festplatte aus und die Generierung wird stark langsamer; wählen Sie ein kleineres Modell oder eine niedrigere Quantisierung.",
          "**Thermal Throttling ignorieren** → die Dauergeschwindigkeit kann sinken, sobald der Chip seine Temperaturgrenze erreicht; prüfen Sie Ihre Geschwindigkeit nach 10 Minuten mit `ollama run <model> --verbose`.",
          "**Q8_0 statt Q4_K_M verwenden** → die Datei ist etwa 1,7-mal größer (7,95 vs. 4,58 GiB bei Llama 3.1 8B), braucht daher mehr RAM und generiert auf einem bandbreitenbegrenzten Laptop langsamer, für einen kleinen Qualitätsgewinn.",
          "**Nur einen RAM-Riegel nutzen** → Single-Channel-Speicher halbiert die maximale Bandbreite und damit die Geschwindigkeitsobergrenze; nutzen Sie zwei identische Riegel, sofern der Laptop das erlaubt.",
          "**GPU-Offload in LM Studio ausgeschaltet lassen** → das Modell läuft auf der CPU statt auf der GPU; erhöhen Sie die GPU-Offload-Einstellung, wenn das Modell in den GPU-Speicher passt.",
          "**Das Standard-Kontextfenster beibehalten** → Ollamas Standard sind 4096 Token, sodass mehrseitige Dokumente abgeschnitten werden; erhöhen Sie es mit `OLLAMA_CONTEXT_LENGTH=8192` oder `/set parameter num_ctx 8192` und rechnen Sie mit höherem Speicherbedarf."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Beste lokale LLM-Modelle für Einsteiger](/de/local-llms/best-beginner-local-llm-models) -- Kleine, für Laptops optimierte Modelle",
          "[Ollama installieren](/de/local-llms/how-to-install-ollama) -- Installationsanleitung",
          "[LM Studio installieren](/de/local-llms/how-to-install-lm-studio) -- Installer mit grafischer Oberfläche",
          "[Fehlerbehebung beim lokalen LLM-Setup](/de/local-llms/troubleshooting-local-llm-setup) -- Lösungen für Leistungs- und Fehlerprobleme",
          "[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) -- Q4_K_M vs. Q8_0 vs. Q5_K_M im Detail",
          "[Kleine lokale LLM-Modelle unter 4 GB](/de/local-llms/small-local-llm-models) -- 3B-Modelle für Laptops mit 8 GB",
          "[Laptop vs. Desktop für lokale LLMs 2026](/de/local-llms/laptop-vs-desktop-local-llm) -- Kaufratgeber: Leistungsvergleich, Kostenanalyse und welche Plattform sich lohnt.",
          "[MLX vs. Ollama vs. llama.cpp auf dem Mac 2026](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Framework-Vergleich für Apple Silicon: Geschwindigkeit, Einrichtungszeit und Ökosystem-Abwägungen.",
          "[Der günstigste Weg, ein 70B-Modell lokal auszuführen](/de/prompt-bites/cheapest-way-to-run-70b-model-locally) -- Wann ein Laptop 70B stemmen kann: Q3_K_S auf dem M3 Max vs. CPU-Offloading.",
          "[Beste GPU für lokale LLM-Inferenz unter 500 $ (2026)](/de/local-llms/best-gpu-for-llm-inference-under-500-2026) -- eGPU-Upgrade-Pfad für MacBooks und Windows-Laptops.",
          "[Beste reine CPU-LLMs 2026](/de/local-llms/best-cpu-only-llm) -- Geschätzte tok/s nach Dateigröße für Rechner ohne GPU.",
          "[Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs) -- Empfehlungen für 4–16 GB RAM, nur CPU oder iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Lokales LLM auf dem Laptop: Was auf 8 GB, 16 GB und Apple Silicon läuft (2026)",
      "description": "Lokale LLMs auf Laptops mit 8 GB oder 16 GB RAM oder Apple Silicon ausführen. Mit Modellempfehlungen (Llama 3.2 3B, Phi-4-mini, Qwen3 8B), Geschwindigkeitsschätzungen aus der Speicherbandbreite, Thermik, Akku und Q4_K_M-Quantisierung.",
      "url": "https://www.promptquorum.com/de/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "Lokales LLM auf dem Laptop"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Q4_K_M-Quantisierung"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "Thermal Throttling"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "de"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Beste lokale LLM-Modelle für Laptops 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "3B-Modell, 2,0 GB große Ollama-Datei. Gesch. 18–30 tok/s bei Dual-Channel-RAM (PromptQuorum-Schätzung). Kleinste Datei hier, passend für Laptops mit 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "3,8B-Modell, 2,5 GB große Ollama-Datei. Gesch. 15–25 tok/s bei Dual-Channel-RAM (PromptQuorum-Schätzung). Reasoning und Coding auf Laptops mit 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "8B-Modell, 5,2 GB große Ollama-Datei. Gesch. 8–15 tok/s bei Dual-Channel-RAM (PromptQuorum-Schätzung). Mehrsprachig und Coding auf Laptops mit 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "8B-Modell, 4,9 GB große Ollama-Datei. Gesch. 8–14 tok/s bei Dual-Channel-RAM (PromptQuorum-Schätzung). Allgemeine Nutzung auf Laptops mit 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "9B-Modell, 6,6 GB große Ollama-Datei. Gesch. 6–12 tok/s bei Dual-Channel-RAM (PromptQuorum-Schätzung). Neuere Familie mit Bildeingabe auf Laptops mit 16 GB."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welche Ollama-Modelle eignen sich am besten für Intel Iris Xe mit 16 GB RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bei einem Laptop mit Intel-Iris-Xe-Grafik und 16 GB RAM ist die Geschwindigkeit durch die Bandbreite des Arbeitsspeichers begrenzt. Ob Ollama die iGPU nutzt, hängt von Treiber- und Backend-Unterstützung ab (prüfen Sie die Spalte PROCESSOR von `ollama ps`), und eine iGPU teilt sich denselben RAM, der Gewinn fällt deshalb meist gering aus. Wählen Sie für Geschwindigkeit ein 3B–4B-Modell mit Q4_K_M: Llama 3.2 3B (gesch. 18–30 tok/s bei Dual-Channel-RAM) mit `ollama run llama3.2:3b`, oder für mehr Qualität Qwen3 8B (gesch. 8–15 tok/s) mit `ollama run qwen3:8b`. Die Geschwindigkeiten sind PromptQuorum-Schätzungen, keine Labormessungen."
          }
        },
        {
          "@type": "Question",
          "name": "Kann man RAG lokal auf einem Laptop ausführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja. Ein RAG-Stack auf dem Laptop besteht aus einem kleinen Embedding-Modell, einem lokalen Vektorspeicher und Ihrem Chat-Modell. Das Embedding-Modell ist klein (nomic-embed-text hat auf Ollama 274 MB), daher bleibt das Chat-Modell die entscheidende RAM-Grenze: Ein Laptop mit 8 GB führt ein 3B-Chat-Modell mit Retrieval aus, und 16 GB lassen Platz für ein 8B-Modell. Die RAM-Aufteilung finden Sie oben im Abschnitt [RAG auf einem Laptop](#rag-laptop)."
          }
        },
        {
          "@type": "Question",
          "name": "Welches ist das beste reine CPU-LLM für einen Laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unter den im CPU-Leitfaden verglichenen Modellen ist Phi-4 Mini (3,8B, 2,5 GB große Datei) die beste Allround-Wahl mit geschätzten 15–25 tok/s bei Dual-Channel-RAM, und Llama 3.2 3B (2,0 GB große Datei) hat die kleinste Datei bei geschätzten 18–30 tok/s, beide mit Q4_K_M. Den vollständigen Vergleich und die Ollama-Befehle finden Sie unter [Beste reine CPU-LLMs 2026](/de/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "Schadet ein lokales LLM meinem Laptop auf Dauer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bei einem intakten Laptop ist kein unmittelbarer Schaden zu erwarten: Chips senken ihre Taktrate, wenn sie heiß werden, sodass dauerhafte Inferenz das Gerät verlangsamt, statt es zu beschädigen. Anhaltende Hitze belastet über die Zeit dennoch Lüfter und Akku; nutzen Sie daher einen Ständer oder ein Kühlpad, halten Sie die Lüftungsschlitze frei und machen Sie Pausen. Beachten Sie die Hinweise des Herstellers zu Thermik und Akkupflege."
          }
        },
        {
          "@type": "Question",
          "name": "Kann ich ein lokales LLM auf einem Laptop mit 4 GB RAM ausführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gerade so. Ein kleines Modell wie Qwen3 1.7B (1,4 GB große Datei) oder Llama 3.2 1B (1,3 GB große Datei) passt, doch das Betriebssystem braucht 2–3 GB, sodass Sie bei insgesamt 4 GB wahrscheinlich in den Swap geraten, was die Generierung stark bremst. Das praktische Minimum für ein komfortables Erlebnis sind 8 GB. Siehe [Schnellste lokale LLMs für Low-End-PCs](/de/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "Braucht mein Laptop eine dedizierte GPU, um lokale LLMs auszuführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nein. Ollama, LM Studio und GPT4All laufen auch nur mit der CPU. Eine GPU mit hoher Speicherbandbreite beschleunigt die Generierung, doch 3B–4B-Modelle sind auf der CPU mit geschätzten 15–30 tok/s bei Dual-Channel-RAM brauchbar. Empfehlungen für CPU-taugliche Modelle finden Sie unter [Beste lokale LLM-Modelle für Einsteiger](/de/local-llms/best-beginner-local-llm-models)."
          }
        },
        {
          "@type": "Question",
          "name": "Welches ist das schnellste lokale LLM auf einem MacBook mit 8 GB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unter den Modellen in diesem Leitfaden ist Llama 3.2 3B mit Q4_K_M (2,0 GB große Datei) die schnellste praxistaugliche Wahl auf einem MacBook mit 8 GB. Auf einem M2 oder M3 (beide laut Apple 100 GB/s) liegt die Bandbreitenobergrenze bei etwa 50 tok/s, und die PromptQuorum-Schätzung beträgt 35–45 tok/s. Eine 8B-Datei (5,2 GB) ist mit 8 GB knapp, weil auch macOS und Ihre Apps Speicher brauchen."
          }
        },
        {
          "@type": "Question",
          "name": "Wie verringere ich Thermal Throttling auf einem Laptop bei der LLM-Inferenz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vier Schritte: (1) den Laptop auf einen Ständer mit Luftzirkulation stellen, (2) einen ausgewogenen oder sparsamen Energiemodus testen, weil die Generierung stärker von der Speicherbandbreite als von der Taktrate begrenzt wird, (3) Generierungslänge und Kontext begrenzen und (4) Q4_K_M statt Q8_0 nutzen, damit jedes Token weniger Daten liest. Prüfen Sie Ihre Geschwindigkeit über 10 Minuten mit `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "Kann ich ein lokales LLM auf einem Chromebook ausführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nur auf Chromebooks mit aktiviertem Linux (Crostini) und nur mit kleinen Modellen. Die meisten Chromebooks haben 4–8 GB RAM und eine bescheidene Speicherbandbreite, daher ist ein 1B–3B-Modell mit Q4_K_M die realistische Obergrenze, und die Geschwindigkeit bleibt niedrig. Chromebooks ohne Linux-Unterstützung können Ollama nicht ausführen."
          }
        },
        {
          "@type": "Question",
          "name": "Ist Apple Silicon besser als eine NVIDIA-Laptop-GPU für lokale LLMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Das hängt vom Speicher ab. Die Geschwindigkeit folgt Speicherbandbreite und Kapazität: Ein MacBook mit 16 GB und M5 (153 GB/s) hat für Qwen3 8B eine Obergrenze von rund 29 tok/s, während eine RTX 4060 Laptop-GPU (etwa 256 GB/s, 8 GB VRAM) eine Obergrenze von rund 49 tok/s hat, aber nur Modelle fasst, die in 8 GB passen. Ein M5 Pro (307 GB/s) oder M5 Max (460–614 GB/s) mit mehr Speicher hält größere Modelle in schnellem Speicher. Die Leistungsaufnahme unterscheidet sich je nach Modell, prüfen Sie daher Ihren Laptop."
          }
        },
        {
          "@type": "Question",
          "name": "Was passiert, wenn das Modell für den RAM meines Laptops zu groß ist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Das Betriebssystem beginnt, auf die Festplatte auszulagern, oder das Modell lässt sich nicht laden, und die Generierung kann zäh werden, während die Lüfter auf Hochtouren laufen. Abhilfe schaffen ein kleineres Modell, eine niedrigere Quantisierungsstufe (Q4_K_M statt Q8_0) oder ein kürzerer Kontext (`OLLAMA_CONTEXT_LENGTH`, Standard 4096)."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange hält der Akku bei lokalen LLMs auf einem Laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Laufzeit entspricht ungefähr der Akkukapazität in Wh geteilt durch die durchschnittliche Leistungsaufnahme in W. Ein 60-Wh-Akku hält bei 20 W etwa 3 Stunden und bei 30 W etwa 2 Stunden (Rechenbeispiel, keine Messung). Die reale Leistungsaufnahme hängt von Laptop, Modell und Energiemodus ab. Für ganztägige Nutzung schließen Sie das Netzteil an."
          }
        },
        {
          "@type": "Question",
          "name": "Brauche ich eine Internetverbindung, um ein lokales LLM auf einem Laptop auszuführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nein. Nach dem Herunterladen des Modells (dafür ist Internet nötig) läuft die Inferenz vollständig offline. Das Modell läuft komplett auf der CPU oder GPU des Laptops. Das macht lokale LLMs nützlich auf Reisen, in abgesicherten Umgebungen oder an Orten mit unzuverlässiger Verbindung."
          }
        },
        {
          "@type": "Question",
          "name": "Kann ich ein lokales LLM mit 8 GB RAM ausführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja. Ein Laptop mit 8 GB führt ein 3B–4B-Modell mit Q4_K_M (2,0–2,5 GB große Dateien) mit geschätzten 15–30 tok/s bei Dual-Channel-RAM aus, oder mit geschätzten 28–45 tok/s auf einem Apple M2 oder M3. 7B–8B-Modelle (4,4–5,2 GB große Dateien) sind mit 8 GB knapp."
          }
        },
        {
          "@type": "Question",
          "name": "Welcher Laptop ist der schnellste für lokale LLMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Für lokale LLMs sind Speicherbandbreite und ausreichend Speicher die entscheidenden Werte. Apple nennt 307 GB/s für den M5 Pro (bis 64 GB) und 460 oder 614 GB/s für den M5 Max (bis 128 GB); für Qwen3 8B betragen die PromptQuorum-Schätzungen 41–53 tok/s auf einem M5 Pro und 62–106 tok/s auf einem M5 Max. Unter Windows hat ein Laptop mit NVIDIA-GPU, die das Modell im VRAM hält, eine hohe Obergrenze, zum Beispiel etwa 256 GB/s bei einer RTX 4060 Laptop-GPU mit 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "Wie langsam sind lokale LLMs auf der CPU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Geschwindigkeit liegt höchstens bei Speicherbandbreite ÷ Größe der Modelldatei. Bei Dual-Channel-DDR4/DDR5 läuft ein 3B–4B-Modell mit Q4_K_M mit geschätzten 15–30 tok/s und Qwen3 8B mit geschätzten 8–15 tok/s; Single-Channel-RAM halbiert das. Das ist langsam genug zum Mitlesen, aber schnell genug für Chat und Zusammenfassungen. Apple Silicon erreicht bei Qwen3 8B geschätzte 13–26 tok/s (M3 bis M5), weil der Unified Memory mehr Bandbreite hat."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "So verringern Sie Thermal Throttling auf einem Laptop bei lokaler LLM-Inferenz",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Nutzen Sie einen Laptop-Ständer mit Luftzirkulation",
          "text": "Stellen Sie den Laptop auf einen Ständer, um den Abluftstrom zu verbessern; das kann das Throttling hinauszögern."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Testen Sie einen niedrigeren Energiemodus",
          "text": "Die Token-Generierung wird von der Speicherbandbreite begrenzt, nicht von der Taktrate; ein ausgewogener oder sparsamer Energieplan (unter macOS der Energiesparmodus) kann die Hitze senken. Testen Sie es auf Ihrem Gerät."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Begrenzen Sie Generierungslänge und Kontext",
          "text": "Teilen Sie lange Aufgaben in kürzere Prompts auf und vermeiden Sie es, sehr lange Antworten in einem Durchgang erneut zu generieren."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Nutzen Sie Q4_K_M-Quantisierung statt Q8_0",
          "text": "Die Datei ist etwa 1,7-mal kleiner, jedes Token liest also weniger Daten aus dem Speicher, und der Chip ist kürzer unter Last."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "fr": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "LLM local sur ordinateur portable : ce qui tourne avec 8 GB, 16 GB et Apple Silicon (2026)",
    "seoTitle": "LLM local sur portable (2026) : 8 GB, 16 GB, Apple Silicon",
    "intro": "Vous pouvez faire tourner un LLM local sur un portable avec 8 GB de RAM : un modèle 3B–4B en Q4_K_M atteint 15–30 tok/s estimés en RAM dual-channel, et un portable de 16 GB fait tourner des modèles 8B à 8–15 tok/s estimés. Apple Silicon est plus rapide, car sa mémoire unifiée offre plus de bande passante. Ces vitesses sont des estimations PromptQuorum dérivées de la bande passante mémoire, pas des mesures de laboratoire ; la chaleur et la batterie limitent la durée pendant laquelle un portable les maintient.",
    "metaDescription": "LLM local sur portable : ce qui tient dans 8 GB, 16 GB et Apple Silicon, tok/s estimés d'après la bande passante mémoire, chaleur et batterie.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-fr.webp",
    "twitterDescription": "LLM local sur portable : 8 GB de RAM font tourner un modèle 3B–4B à 15–30 tok/s est., 16 GB un 8B à 8–15 tok/s est. Estimations tirées de la bande passante mémoire, pas de tests en labo.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**Oui, un LLM local tourne sur un portable : 8 GB de RAM suffisent pour un modèle 3B–4B à 15–30 tok/s estimés, 16 GB pour un 8B à 8–15 tok/s estimés sur CPU. Apple Silicon est plus rapide. Estimations PromptQuorum issues de la bande passante, pas de mesures de labo.**",
    "comparisonTable": {
      "columns": [
        "Configuration",
        "Taille du modèle",
        "Vitesse",
        "Expérience"
      ],
      "rows": [
        {
          "Configuration": "8 GB RAM, CPU",
          "Taille du modèle": "3B–4B",
          "Vitesse": "15–30 tok/s est.",
          "Expérience": "Chat, résumés, code simple"
        },
        {
          "Configuration": "16 GB RAM, CPU",
          "Taille du modèle": "8B–9B",
          "Vitesse": "8–15 tok/s est.",
          "Expérience": "Usage général avec multitâche"
        },
        {
          "Configuration": "Apple Silicon (M3 à M5), 16 GB",
          "Taille du modèle": "8B",
          "Vitesse": "13–26 tok/s est.",
          "Expérience": "Plus de bande passante mémoire que la RAM d'un portable classique"
        },
        {
          "Configuration": "Portable GPU (RTX 4060, 8 GB VRAM)",
          "Taille du modèle": "8B",
          "Vitesse": "34–44 tok/s est.",
          "Expérience": "Rapide si le modèle tient en VRAM ; chaleur et consommation élevées"
        }
      ]
    },
    "audience": "Débutants qui font tourner un premier LLM local sur du matériel grand public",
    "readTime": "8 min de lecture",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "Réponse rapide : quel LLM local tourne sur votre portable ?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "Points clés",
        "anchor": "#key-takeaways"
      },
      {
        "label": "Peut-on faire tourner un LLM local sur un portable ?",
        "anchor": "#can-you-run"
      },
      {
        "label": "Peut-on faire tourner du RAG sur un portable ?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "Quelle configuration vous faut-il ?",
        "anchor": "#use-case"
      },
      {
        "label": "Quels modèles de LLM local tournent le mieux sur un portable ?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon ou portable Windows",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "Portable ou ordinateur de bureau pour les LLM locaux",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "Comment gérer la limitation thermique",
        "anchor": "#thermals"
      },
      {
        "label": "Quelle autonomie un LLM local consomme-t-il ?",
        "anchor": "#battery-drain"
      },
      {
        "label": "Quel niveau de quantification choisir sur un portable ?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "Quelles lois sur la vie privée s'appliquent aux LLM locaux sur un portable ?",
        "anchor": "#regional-context"
      },
      {
        "label": "Quelles sont les erreurs courantes avec les LLM locaux sur portable ?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "Lectures associées",
        "anchor": "#related-reading"
      },
      {
        "label": "Questions fréquentes sur les LLM locaux sur portable",
        "anchor": "#faq"
      },
      {
        "label": "Sources",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "Peut-on faire tourner un LLM local sur un ordinateur portable ?",
      "answer": "Oui. Un portable de 8 GB fait tourner un modèle 3B–4B en Q4_K_M, par exemple Llama 3.2 3B (fichier de 2.0 GB), à 18–30 tok/s estimés en RAM dual-channel. Un portable de 16 GB fait tourner des modèles 8B–9B comme Qwen3 8B (fichier de 5.2 GB) à 8–15 tok/s estimés sur CPU. Apple Silicon est plus rapide, car la mémoire unifiée offre plus de bande passante : 13–17 tok/s estimés sur un M3 et 21–26 tok/s sur un M5 pour Qwen3 8B. Toutes les vitesses sont des estimations PromptQuorum dérivées de la bande passante mémoire, pas des mesures de laboratoire.",
      "bullets": [
        "8 GB RAM : Llama 3.2 3B (fichier de 2.0 GB) ou Phi-4-mini (2.5 GB), 15–30 tok/s est. en RAM dual-channel",
        "16 GB RAM : Qwen3 8B (fichier de 5.2 GB) ou Llama 3.1 8B (4.9 GB), 8–15 tok/s est. sur CPU",
        "Apple Silicon : Qwen3 8B à 13–17 tok/s est. sur un M3 (100 GB/s), 21–26 tok/s sur un M5 (153 GB/s)",
        "Règle de vitesse : les tok/s sont au plus égaux à la bande passante mémoire ÷ la taille du fichier du modèle ; une RAM single-channel les divise par deux",
        "Une charge soutenue peut baisser les fréquences et vide vite la batterie : branchez le portable et laissez-le respirer"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "Réponse rapide : quel LLM local tourne sur votre portable (8 GB, 16 GB, Apple Silicon) ?",
        "content": [
          "**Vous pouvez faire tourner un LLM local sur un portable avec 8 GB de RAM : un modèle 3B–4B en Q4_K_M atteint 15–30 tok/s estimés en RAM dual-channel.** Le tableau associe votre matériel à un modèle. Les vitesses sont des estimations PromptQuorum dérivées de la bande passante mémoire (tok/s ≈ bande passante ÷ taille du fichier du modèle), pas des mesures de laboratoire."
        ],
        "rows": [
          {
            "Votre portable": "8 GB RAM, CPU seul",
            "Meilleur modèle": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Hypothèse matérielle": "DDR4/DDR5 dual-channel"
          },
          {
            "Votre portable": "16 GB RAM, CPU seul",
            "Meilleur modèle": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "tok/s est.": "8–15",
            "Hypothèse matérielle": "DDR4/DDR5 dual-channel"
          },
          {
            "Votre portable": "Apple M3, 16 GB",
            "Meilleur modèle": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "13–17",
            "Hypothèse matérielle": "Mémoire unifiée à 100 GB/s"
          },
          {
            "Votre portable": "Apple M5, 16 GB",
            "Meilleur modèle": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "21–26",
            "Hypothèse matérielle": "Mémoire unifiée à 153 GB/s"
          },
          {
            "Votre portable": "Intel Iris Xe / iGPU AMD",
            "Meilleur modèle": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Hypothèse matérielle": "Partage la RAM système ; vérifiez avec ollama ps"
          }
        ],
        "columns": [
          "Votre portable",
          "Meilleur modèle",
          "tok/s est.",
          "Hypothèse matérielle"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-fr.webp",
        "imageCaption": "LLM local sur portable : modèles Q4_K_M conseillés par palier de RAM, avec tok/s estimés"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Un portable avec 8 GB de RAM fait tourner un LLM local 3B–4B à 15–30 tok/s estimés, un portable de 16 GB fait tourner des modèles 8B–9B à 8–15 tok/s estimés, et Apple Silicon est plus rapide car la mémoire unifiée offre plus de bande passante."
          },
          {
            "type": "plain-terms",
            "text": "Les limites principales de votre portable sont la RAM et la bande passante mémoire. Le fichier du modèle doit tenir en RAM, et chaque token généré relit tout le fichier une fois : la vitesse est donc au plus égale à la bande passante divisée par la taille du fichier. Un portable peut aussi ralentir sous charge soutenue (thermal throttling) ; un support, une prise secteur et un modèle plus petit aident."
          }
        ],
        "items": [
          "Un modèle 3B–4B en Q4_K_M tourne sur un portable de 8 GB de RAM : Llama 3.2 3B (fichier de 2.0 GB) à 18–30 tok/s estimés et Phi-4-mini (2.5 GB) à 15–25 tok/s estimés.",
          "16 GB de RAM accueillent des modèles 8B–9B en Q4_K_M : Qwen3 8B (fichier de 5.2 GB) à 8–15 tok/s estimés en RAM dual-channel, 13–17 tok/s sur un Apple M3 et 21–26 tok/s sur un Apple M5.",
          "Règle de vitesse : les tokens par seconde sont au plus égaux à la bande passante mémoire ÷ la taille du fichier du modèle (un plafond ; la vitesse réelle est plus basse). La DDR4-3200 dual-channel offre 51.2 GB/s, la DDR5-5600 dual-channel 89.6 GB/s, et le single-channel divise le résultat par deux. Apple publie 100 GB/s pour le M3 et 153 GB/s pour le M5.",
          "Toutes les vitesses de cette page sont des estimations PromptQuorum dérivées de la bande passante mémoire, pas des mesures de laboratoire. Lancez `ollama run <model> --verbose` pour lire vos propres tokens par seconde.",
          "Branchez le portable pour les longues sessions et laissez-le respirer : sous charge soutenue, les puces d'un portable peuvent baisser leur fréquence, et l'inférence active vide la batterie bien plus vite qu'un usage léger."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "En une phrase",
        "content": [
          "Un LLM local peut tourner sur un portable grâce aux modèles quantifiés : le Q4_K_M ramène le fichier à environ 31 % de sa taille FP16 (4.58 GiB au lieu de 14.96 GiB pour Llama 3.1 8B) avec une faible perte de qualité."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "En termes simples",
        "content": [
          "Faire tourner un LLM en local, c'est exécuter le chatbot sur votre propre portable plutôt que sur les serveurs d'un fournisseur : privé et utilisable hors ligne, mais plus lent qu'un service cloud."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "Quand faire tourner un LLM sur un portable ?",
        "items": [
          "✅ **Utilisez un LLM local si :** vos données doivent rester sur l'appareil, vous travaillez hors ligne, vous ne voulez aucun coût d'API par token",
          "❌ **À éviter si :** vous avez besoin de la meilleure qualité de raisonnement, d'un contexte très long (100K+ tokens, car le cache KV grandit avec le contexte) ou d'un traitement par lots rapide — voir [limites des LLM locaux](/fr/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "Peut-on faire tourner un LLM local sur un portable ?",
        "content": [
          "**Oui -- avec la bonne taille de modèle.** Un portable de 8 GB de RAM fait tourner un modèle 3B–4B en Q4_K_M à 15–30 tok/s estimés en RAM dual-channel (Llama 3.2 3B : 18–30, Phi-4-mini : 15–25). Un portable Apple Silicon de 16 GB fait tourner un modèle 8B à 13–26 tok/s estimés selon la puce. C'est plus lent que la plupart des API cloud, mais assez rapide pour lire au fil de l'eau.",
          "Le plafond pratique d'un portable de 8 GB est un modèle 3B–4B ; les fichiers 7B–8B (4.4–5.2 GB) laissent peu de place au système et à un navigateur. Un modèle 14B en Q4_K_M (Qwen3 14B : fichier de 9.3 GB) ne tient sur une machine de 16 GB qu'avec un contexte court et les autres applications fermées.",
          "Les vitesses ci-dessus sont des estimations PromptQuorum dérivées de la bande passante mémoire, pas des mesures de laboratoire. Pour les paliers sous 8 GB et la règle complète de bande passante, voir **[LLM locaux les plus rapides pour PC d'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs)** ; pour les portables sans GPU, voir **[Meilleurs LLM locaux CPU seul 2026](/fr/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "Peut-on faire tourner du RAG (recherche augmentée) sur un portable ?",
        "content": [
          "**Oui -- le RAG tourne sur un portable, car la contrainte déterminante reste le modèle de chat, pas la couche de recherche.** Une pile RAG sur portable comprend trois éléments : un petit modèle d'embedding, une base vectorielle locale et votre modèle de chat.",
          "Le modèle d'embedding est petit : nomic-embed-text pèse 274 MB sur Ollama (fenêtre de contexte de 2K), il ajoute donc peu de pression sur la RAM. Sur un portable de 8 GB, vous pouvez faire tourner un modèle de chat 3B plus un modèle d'embedding ; avec 16 GB, vous avez de la marge pour un modèle de chat 8B en plus de la recherche.",
          "**2 GB de RAM ne suffisent que pour de très petites configurations.** Qwen3 0.6B (523 MB) plus nomic-embed-text représentent environ 0.8 GB de fichiers et tiennent si 2 GB sont réellement libres. Sur un portable typique, le système occupe 2–3 GB, et le swap sur disque ralentit fortement la génération : prévoyez 8 GB comme plancher pratique."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "Quelle configuration de portable vous faut-il selon votre usage ?",
        "items": [
          "**Pour les débutants** — 8 GB de RAM, modèles 3B–4B, CPU seul. Comptez 15–30 tok/s estimés. Suffisant pour le chat, le résumé et le code simple.",
          "**Pour les développeurs** — 16 GB de RAM, modèles 8B–9B, GPU en option. Le multitâche reste possible sans fermer les autres applications (8–15 tok/s est. sur CPU).",
          "**Pour les utilisateurs avancés** — Apple Silicon avec une puce Pro ou Max, ou un GPU de portable avec 8 GB+ de VRAM, modèles 8B–14B. Estimations pour Qwen3 8B : 41–53 tok/s sur un M5 Pro (307 GB/s) et 34–44 tok/s sur un GPU de portable RTX 4060 (environ 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "Qui peut faire tourner un LLM local sur un portable ?",
        "items": [
          "**Débutants** → [LM Studio](/fr/local-llms/how-to-install-lm-studio) + modèle 3B",
          "**Intermédiaires** → [Ollama](/fr/local-llms/how-to-install-ollama) + modèle 8B",
          "**Utilisateurs avancés** → 14B avec [réglage de la quantification](/fr/local-llms/llm-quantization-explained)",
          "❌ **N'utilisez pas un portable si :** vous avez besoin d'API temps réel (utilisez un serveur vLLM) ou traitez de gros jeux de données (utilisez des GPU cloud)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "Quelle taille de modèle de LLM local vous faut-il ?",
        "content": "Les tailles de fichier sont celles des téléchargements Ollama vérifiés sur ollama.com le 23 octobre 2026, avec une quantification de type Q4_K_M (environ 70 % plus petit que le FP16). La RAM min. correspond au fichier plus environ 0.5 GB de surcoût ; prévoyez 2–4 GB de plus pour le système et un navigateur :",
        "rows": [
          {
            "Modèle": "Llama 3.2 3B",
            "Fichier (Ollama)": "2.0 GB",
            "RAM min.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Meilleur usage": "Tâches de base, chat, résumés"
          },
          {
            "Modèle": "Phi-4-mini 3.8B",
            "Fichier (Ollama)": "2.5 GB",
            "RAM min.": "3 GB",
            "tok/s est.": "15–25",
            "Meilleur usage": "Raisonnement et code sur 8 GB"
          },
          {
            "Modèle": "Qwen3 8B",
            "Fichier (Ollama)": "5.2 GB",
            "RAM min.": "6 GB",
            "tok/s est.": "8–15",
            "Meilleur usage": "Usage général, multilingue, code"
          },
          {
            "Modèle": "Qwen3 14B",
            "Fichier (Ollama)": "9.3 GB",
            "RAM min.": "10 GB",
            "tok/s est.": "4–8",
            "Meilleur usage": "Tâches plus difficiles sur 16 GB, contexte court"
          }
        ],
        "columns": [
          "Modèle",
          "Fichier (Ollama)",
          "RAM min.",
          "tok/s est.",
          "Meilleur usage"
        ],
        "note": "Ce sont des estimations PromptQuorum, pas des mesures de laboratoire, pour un portable avec de la DDR4-3200 à la DDR5-5600 dual-channel (51.2–89.6 GB/s) ; une RAM single-channel les divise par deux. Exemple Q4_K_M : Llama 3.1 8B pèse 14.96 GiB en FP16 et 4.58 GiB en Q4_K_M (README de quantize de llama.cpp), soit environ 69 % de moins. → [calculateur de VRAM](/fr/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "Portable 8 GB de RAM ou 16 GB de RAM : quelle différence concrète ?",
        "rows": [
          {
            "Scénario": "Taille maximale de modèle",
            "8 GB RAM": "3B–4B à l'aise ; 7B–8B (fichiers de 4.4–5.2 GB) juste",
            "16 GB RAM": "8B–9B à l'aise ; 14B (9.3 GB) avec un contexte court"
          },
          {
            "Scénario": "Modèle avec navigateur ouvert",
            "8 GB RAM": "3B–4B (juste)",
            "16 GB RAM": "8B–9B à l'aise"
          },
          {
            "Scénario": "Premier modèle conseillé",
            "8 GB RAM": "llama3.2:3b ou phi4-mini",
            "16 GB RAM": "qwen3:8b ou llama3.1:8b"
          },
          {
            "Scénario": "Applications simultanées",
            "8 GB RAM": "Fermez le navigateur avant de charger un modèle 8B",
            "16 GB RAM": "Multitâche normal avec un modèle 8B"
          }
        ],
        "columns": [
          "Scénario",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "Quels modèles de LLM local tournent le mieux sur un portable ?",
        "content": "**Ces modèles conviennent aux limites d'un portable : de petits fichiers donnent plus de tokens par seconde pour la même bande passante mémoire.** Les vitesses sont des estimations PromptQuorum pour un portable avec de la DDR4-3200 à la DDR5-5600 dual-channel (51.2–89.6 GB/s), dérivées du plafond de bande passante (bande passante ÷ taille du fichier Ollama), pas des mesures de laboratoire ; une RAM single-channel les divise par deux. Les tailles de fichier sont celles des téléchargements Ollama vérifiés le 23 octobre 2026. Pour les besoins en VRAM selon les modèles et les configurations de portable, voir le [guide des besoins en VRAM →](/fr/local-llms/how-much-vram-local-llm). Installez [Ollama](/fr/local-llms/how-to-install-ollama) pour lancer chacun d'eux avec une seule commande. Pas de GPU ? Voir **[Meilleurs LLM locaux CPU seul 2026](/fr/local-llms/best-cpu-only-llm)**. Ce sont des modèles à poids ouverts (open-weights) ; consultez la fiche de chaque modèle pour sa licence.",
        "rows": [
          {
            "Modèle": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "Fichier (Ollama)": "2.0 GB",
            "RAM min.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Idéal pour": "Portables 8 GB, tâches rapides"
          },
          {
            "Modèle": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "Fichier (Ollama)": "2.5 GB",
            "RAM min.": "3 GB",
            "tok/s est.": "15–25",
            "Idéal pour": "Portables 8 GB, raisonnement et code"
          },
          {
            "Modèle": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "Fichier (Ollama)": "5.2 GB",
            "RAM min.": "6 GB",
            "tok/s est.": "8–15",
            "Idéal pour": "Portables 16 GB, multilingue, code"
          },
          {
            "Modèle": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "Fichier (Ollama)": "4.9 GB",
            "RAM min.": "5.5 GB",
            "tok/s est.": "8–14",
            "Idéal pour": "Portables 16 GB, usage général"
          },
          {
            "Modèle": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "Fichier (Ollama)": "6.6 GB",
            "RAM min.": "7–8 GB",
            "tok/s est.": "6–12",
            "Idéal pour": "Portables 16 GB, famille récente, entrée image"
          }
        ],
        "columns": [
          "Modèle",
          "Fichier (Ollama)",
          "RAM min.",
          "tok/s est.",
          "Idéal pour"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-fr.webp",
        "imageCaption": "Meilleurs modèles de LLM local pour portable selon la taille du fichier, avec tok/s estimés en RAM dual-channel"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "Quelle configuration de LLM local choisir pour démarrer sur un portable ?",
        "content": [
          "Le matériel d'un portable limite la taille du modèle, mais des prompts clairs et structurés peuvent améliorer les résultats des petits modèles. Voir le [guide du prompt engineering](/fr/prompt-engineering) pour des techniques adaptées aux petits modèles."
        ],
        "items": [
          "🥇 **Démarrage simple en ligne de commande :** [Ollama](/fr/local-llms/how-to-install-ollama) — une commande par modèle, large choix de modèles",
          "🥈 **Le plus simple pour débuter :** [LM Studio](/fr/local-llms/how-to-install-lm-studio) — interface graphique, pas de terminal",
          "🥉 **Peu de RAM (8 GB) :** Llama 3.2 3B (Q4_K_M)",
          "⚡ **Plus de qualité avec 16 GB :** Qwen3 8B (Q4_K_M, ou Q5_K_M si la vitesse le permet)",
          "💡 **Dans le doute :** commencez avec Ollama + Llama 3.2 3B Q4_K_M"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon ou portable Windows : lequel convient le mieux aux LLM locaux ?",
        "content": [
          "**Les MacBook Apple Silicon sont un bon choix pour les LLM locaux, car la mémoire unifiée donne au GPU un accès à haute bande passante à l'ensemble de la mémoire.** La vitesse dépend de la bande passante mémoire : Apple publie 100 GB/s pour le M3, 153 GB/s pour le M5, 307 GB/s pour le M5 Pro et 460 ou 614 GB/s pour le M5 Max (selon le nombre de cœurs GPU). Les MacBook Pro M5 Pro et M5 Max, annoncés le 3 mars 2026, offrent jusqu'à 64 GB et 128 GB de mémoire unifiée.",
          "Un portable Windows avec un GPU NVIDIA dédié peut être plus rapide quand le modèle tient en VRAM. Le GPU de portable RTX 4060 dispose de 8 GB de GDDR6 sur un bus de 128 bits (NVIDIA) ; à 16 Gbps (spécification tierce), cela fait environ 256 GB/s, si bien que Qwen3 8B (5.2 GB) a un plafond proche de 49 tok/s. Le revers : une consommation et une chaleur plus élevées.",
          "Les portables Windows avec seulement un graphique intégré Intel Iris Xe ou AMD Radeon sont limités par la bande passante de la RAM système. La documentation d'Ollama indique que la prise en charge GPU Vulkan est activée par défaut lorsque le backend est installé et ne liste pas les graphiques intégrés Intel dans un tableau de compatibilité ; vérifiez donc la colonne PROCESSOR de `ollama ps`. Un iGPU partage la même RAM, les gains sont donc généralement modestes.",
          "**Meilleurs modèles pour un graphique intégré (Intel Iris Xe / AMD Radeon) :** avec 16 GB de RAM, choisissez un modèle 3B–4B en Q4_K_M pour la vitesse (Llama 3.2 3B, 18–30 tok/s est. en RAM dual-channel) ou Qwen3 8B pour la qualité (8–15 tok/s est.). Privilégiez un modèle qui reste confortablement dans la RAM. Pour une configuration pas à pas sur machine d'entrée de gamme, voir [LLM locaux les plus rapides pour PC d'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs).",
          "Méthode du tableau : chaque estimation représente environ 70–90 % du plafond (bande passante ÷ fichier de 5.2 GB de Qwen3 8B). Ce sont des estimations PromptQuorum, pas des mesures de laboratoire."
        ],
        "rows": [
          {
            "Type de portable": "Apple M3, 16 GB",
            "Bande passante mémoire": "100 GB/s",
            "Qwen3 8B tok/s est.": "13–17",
            "Modèle max. pratique": "~9B (14B juste)"
          },
          {
            "Type de portable": "Apple M5, 16 GB",
            "Bande passante mémoire": "153 GB/s",
            "Qwen3 8B tok/s est.": "21–26",
            "Modèle max. pratique": "~9B (14B juste)"
          },
          {
            "Type de portable": "Apple M5 Pro",
            "Bande passante mémoire": "307 GB/s",
            "Qwen3 8B tok/s est.": "41–53",
            "Modèle max. pratique": "Limité par la mémoire (jusqu'à 64 GB)"
          },
          {
            "Type de portable": "Apple M5 Max",
            "Bande passante mémoire": "460–614 GB/s",
            "Qwen3 8B tok/s est.": "62–106",
            "Modèle max. pratique": "Limité par la mémoire (jusqu'à 128 GB)"
          },
          {
            "Type de portable": "Portable RTX 4060 (8 GB VRAM)",
            "Bande passante mémoire": "~256 GB/s",
            "Qwen3 8B tok/s est.": "34–44",
            "Modèle max. pratique": "~8B en VRAM"
          },
          {
            "Type de portable": "Portable DDR5-5600 dual-channel",
            "Bande passante mémoire": "89.6 GB/s",
            "Qwen3 8B tok/s est.": "12–15",
            "Modèle max. pratique": "~9B (16 GB RAM)"
          },
          {
            "Type de portable": "Portable DDR4-3200 single-channel",
            "Bande passante mémoire": "25.6 GB/s",
            "Qwen3 8B tok/s est.": "3–4",
            "Modèle max. pratique": "3B–4B recommandé"
          }
        ],
        "columns": [
          "Type de portable",
          "Bande passante mémoire",
          "Qwen3 8B tok/s est.",
          "Modèle max. pratique"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "Un portable suffit-il pour les LLM locaux face à un ordinateur de bureau ?",
        "content": [
          "**Les portables font tourner efficacement des modèles de 3B à 14B, mais les ordinateurs de bureau vont plus loin grâce à un meilleur refroidissement et à des GPU dédiés dont la bande passante mémoire est bien supérieure.** Une RTX 4090 de bureau offre 24 GB de VRAM et 1 008 GB/s de bande passante (NVIDIA), de quoi contenir en VRAM des fichiers de modèle jusqu'à environ 20 GB, comme Gemma 4 31B (19–20 GB sur Ollama). Un modèle 70B en Q4 est un fichier de 43 GB sur Ollama (llama3.3:70b) : il ne tient pas dans 24 GB et doit être réparti avec la RAM système, bien plus lente.",
          "Utilisez un portable pour la mobilité et l'expérimentation. Utilisez un ordinateur de bureau pour les grands modèles (14B+), les charges soutenues ou l'inférence en production. Vous hésitez entre les deux ? Voir le [guide d'achat portable ou ordinateur de bureau pour LLM locaux](/fr/local-llms/laptop-vs-desktop-local-llm) pour une comparaison détaillée des coûts et des performances."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "Comment gérer la limitation thermique sur un portable ?",
        "content": [
          "**La limitation thermique (thermal throttling) survient quand le CPU ou le GPU atteint sa limite de température et baisse sa fréquence pour refroidir.** L'inférence locale est une charge soutenue : un portable fin peut donc ralentir au bout d'un moment ; l'ampleur et le délai dépendent de sa conception thermique. Mesurez votre vitesse sur 10 minutes avec `ollama run <model> --verbose`."
        ],
        "items": [
          "**Utilisez un support de portable dégageant la ventilation** -- surélever le portable améliore l'évacuation de l'air et peut retarder la limitation.",
          "**Essayez un mode d'alimentation plus bas** -- la génération de tokens est limitée par la bande passante mémoire plutôt que par la fréquence ; un plan équilibré ou économe (sous macOS, le mode économie d'énergie) peut réduire la chaleur pour une perte de vitesse moindre que prévu ; testez-le sur votre machine.",
          "**Limitez la longueur de génération et le contexte** -- découpez les longues tâches en prompts plus courts et évitez de régénérer de très longues réponses.",
          "**Utilisez Q4_K_M plutôt que Q8_0** -- le fichier est environ 1.7 fois plus petit (4.58 contre 7.95 GiB pour Llama 3.1 8B) : chaque token lit moins de données en mémoire et la puce est moins longtemps sous charge."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "Quelle autonomie un LLM local consomme-t-il ?",
        "content": [
          "**La décharge de la batterie pendant l'inférence locale est importante, car le CPU ou le GPU tourne à forte charge pendant toute la génération.** L'autonomie en heures vaut à peu près la capacité de la batterie en wattheures divisée par la consommation moyenne : une batterie de 60 Wh à 20 W dure environ 3 heures, à 30 W environ 2 heures. Il s'agit d'un calcul illustratif, pas de mesures ; la consommation réelle varie selon le portable, le modèle et le mode d'alimentation.",
          "L'autonomie annoncée ne décrit pas l'inférence. Le chiffre d'Apple de jusqu'à 16 heures de navigation web sans fil pour le MacBook Pro 14 pouces avec M5 (batterie de 72.4 Wh) correspond à un usage léger, pas à une génération soutenue.",
          "Pour les longues sessions, branchez le portable. Pour économiser la batterie, choisissez un modèle plus petit (un fichier 3B pèse moins de la moitié d'un fichier 8B, donc chaque réponse se termine plus vite) et raccourcissez le contexte."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "Quel niveau de quantification choisir sur un portable ?",
        "content": "La [quantification](/fr/local-llms/llm-quantization-explained) réduit la précision du modèle pour diminuer les besoins en RAM et en bande passante. Sur un portable, Q4_K_M est le choix par défaut habituel. Les tailles ci-dessous concernent Llama 3.1 8B, d'après le README de quantize de llama.cpp (14.96 GiB en FP16) ; les autres modèles suivent des proportions similaires :",
        "rows": [
          {
            "Quantification": "Q2_K",
            "Taille vs FP16": "~20 % (2.95 GiB)",
            "Perte de qualité": "Élevée -- dégradation perceptible",
            "Cas d'usage": "Seulement si rien d'autre ne tient"
          },
          {
            "Quantification": "Q3_K_S",
            "Taille vs FP16": "~23 % (3.41 GiB)",
            "Perte de qualité": "Modérée",
            "Cas d'usage": "Faire tenir un modèle plus gros en RAM"
          },
          {
            "Quantification": "Q4_K_M",
            "Taille vs FP16": "~31 % (4.58 GiB)",
            "Perte de qualité": "Faible -- choix par défaut courant",
            "Cas d'usage": "La plupart des portables, bon équilibre"
          },
          {
            "Quantification": "Q5_K_M",
            "Taille vs FP16": "~36 % (5.33 GiB)",
            "Perte de qualité": "Réduite",
            "Cas d'usage": "Portables 16 GB si la vitesse le permet"
          },
          {
            "Quantification": "Q8_0",
            "Taille vs FP16": "~53 % (7.95 GiB)",
            "Perte de qualité": "Très réduite",
            "Cas d'usage": "RAM en réserve, vitesse non critique"
          }
        ],
        "columns": [
          "Quantification",
          "Taille vs FP16",
          "Perte de qualité",
          "Cas d'usage"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "Quelles lois sur la vie privée s'appliquent aux LLM locaux sur un portable ?",
        "content": [
          "**Union européenne (RGPD) :** lorsqu'un modèle tourne sur votre propre portable, les prompts et les documents n'ont pas à quitter l'appareil, ce qui peut éviter d'envoyer des données personnelles à un sous-traitant tiers. L'application du RGPD, du règlement européen sur l'IA ou d'autres obligations dépend de qui déploie le système et dans quel but ; ce guide ne constitue pas un avis juridique, et la conformité dépend de l'ensemble de votre configuration, pas de l'endroit où tourne l'inférence.",
          "**Allemagne :** pour les entreprises allemandes, garder les documents sur l'appareil peut simplifier les questions de protection des données, mais savoir si une configuration locale répond à vos obligations (par exemple pour des données clients confidentielles) se décide au cas par cas ; demandez conseil à votre délégué à la protection des données.",
          "**Japon (APPI) :** la loi japonaise sur la protection des informations personnelles encadre les transferts de données personnelles à l'étranger. Exécuter l'inférence sur le portable évite d'envoyer les prompts à une API située à l'étranger, ce qui peut simplifier la question du transfert ; cela ne remplace pas une analyse juridique.",
          "**États-Unis :** il n'existe pas de loi fédérale unique sur les données d'IA ; des règles sectorielles comme HIPAA (santé), FERPA (éducation) et les lois des États sur la vie privée s'appliquent selon l'usage. Garder les données sur un appareil local peut réduire le nombre de tiers qui les traitent, mais vous restez responsable de la sécurité de l'appareil et des données."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Questions fréquentes sur les LLM locaux sur portable",
        "faqs": [
          {
            "q": "Quels sont les meilleurs modèles Ollama pour Intel Iris Xe avec 16 GB de RAM ?",
            "a": "Sur un portable avec un graphique Intel Iris Xe et 16 GB de RAM, la vitesse est limitée par la bande passante de la RAM système. Que Ollama utilise l'iGPU dépend du pilote et de la prise en charge par le backend (vérifiez la colonne PROCESSOR de `ollama ps`), et un iGPU partage la même RAM : les gains sont donc généralement modestes. Choisissez un modèle 3B–4B en Q4_K_M pour la vitesse : Llama 3.2 3B (18–30 tok/s est. en RAM dual-channel) avec `ollama run llama3.2:3b`, ou Qwen3 8B (8–15 tok/s est.) avec `ollama run qwen3:8b` pour plus de qualité. Les vitesses sont des estimations PromptQuorum, pas des mesures de laboratoire."
          },
          {
            "q": "Peut-on faire tourner du RAG en local sur un portable ?",
            "a": "Oui. Une pile RAG sur portable se compose d'un petit modèle d'embedding, d'une base vectorielle locale et de votre modèle de chat. Le modèle d'embedding est petit (nomic-embed-text pèse 274 MB sur Ollama), donc le modèle de chat reste la contrainte déterminante pour la RAM : un portable de 8 GB fait tourner un modèle de chat 3B avec recherche, et 16 GB laissent de la place pour un modèle 8B. Voir la [section RAG sur portable](#rag-laptop) ci-dessus pour le détail de la RAM."
          },
          {
            "q": "Quel est le meilleur LLM local CPU seul pour un portable ?",
            "a": "Parmi les modèles comparés dans le guide CPU seul, Phi-4 Mini (3.8B, fichier de 2.5 GB) est le meilleur choix polyvalent à 15–25 tok/s estimés en RAM dual-channel, et Llama 3.2 3B (fichier de 2.0 GB) est le plus petit fichier, à 18–30 tok/s estimés, tous deux en Q4_K_M. Pour la comparaison complète et les commandes Ollama, voir [Meilleurs LLM locaux CPU seul 2026](/fr/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "Faire tourner un LLM local peut-il abîmer mon portable à la longue ?",
            "a": "Aucun dommage immédiat n'est attendu sur un portable en bon état : les puces baissent leur fréquence quand elles chauffent, si bien qu'une inférence soutenue ralentit la machine sans l'endommager. Une chaleur soutenue use tout de même les ventilateurs et la batterie avec le temps : utilisez un support ou un refroidisseur, gardez les grilles dégagées et faites des pauses. Suivez les recommandations de votre fabricant sur la gestion thermique et l'entretien de la batterie."
          },
          {
            "q": "Puis-je faire tourner un LLM local sur un portable de 4 GB de RAM ?",
            "a": "À peine. Un petit modèle comme Qwen3 1.7B (fichier de 1.4 GB) ou Llama 3.2 1B (fichier de 1.3 GB) tient, mais le système a besoin de 2–3 GB : avec 4 GB au total, vous risquez de passer en swap, ce qui ralentit fortement la génération. Le minimum pratique pour une expérience confortable est de 8 GB. Voir [LLM locaux les plus rapides pour PC d'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "Mon portable a-t-il besoin d'un GPU dédié pour faire tourner des LLM locaux ?",
            "a": "Non. Ollama, LM Studio et GPT4All fonctionnent sur CPU seul. Un GPU à haute bande passante mémoire accélère la génération, mais les modèles 3B–4B restent utilisables sur CPU à 15–30 tok/s estimés en RAM dual-channel. Voir [Meilleurs modèles de LLM local pour débutants](/fr/local-llms/best-beginner-local-llm-models) pour des recommandations adaptées au CPU."
          },
          {
            "q": "Quel est le LLM local le plus rapide sur un MacBook de 8 GB ?",
            "a": "Parmi les modèles de ce guide, Llama 3.2 3B en Q4_K_M (fichier de 2.0 GB) est le choix pratique le plus rapide sur un MacBook de 8 GB. Sur un M2 ou un M3 (tous deux à 100 GB/s selon Apple), le plafond de bande passante est d'environ 50 tok/s et l'estimation PromptQuorum est de 35–45 tok/s. Un fichier 8B (5.2 GB) est juste sur 8 GB, car macOS et vos applications ont aussi besoin de mémoire."
          },
          {
            "q": "Comment réduire la limitation thermique d'un portable pendant l'inférence d'un LLM ?",
            "a": "Quatre étapes : (1) surélevez le portable sur un support dégageant la ventilation, (2) essayez un mode d'alimentation équilibré ou économe, car la génération est limitée par la bande passante mémoire plus que par la fréquence, (3) limitez la longueur de génération et le contexte, et (4) utilisez Q4_K_M plutôt que Q8_0 pour que chaque token lise moins de données. Mesurez votre vitesse sur 10 minutes avec `ollama run <model> --verbose`."
          },
          {
            "q": "Puis-je faire tourner un LLM local sur un Chromebook ?",
            "a": "Seulement sur les Chromebooks où Linux (Crostini) est activé, et seulement de petits modèles. La plupart des Chromebooks ont 4–8 GB de RAM et une bande passante mémoire modeste : un modèle 1B–3B en Q4_K_M est le plafond réaliste et la vitesse sera faible. Les Chromebooks sans prise en charge de Linux ne peuvent pas exécuter Ollama."
          },
          {
            "q": "Apple Silicon est-il meilleur qu'un GPU de portable NVIDIA pour les LLM locaux ?",
            "a": "Cela dépend de la mémoire. La vitesse suit la bande passante et la capacité mémoire : un MacBook de 16 GB avec M5 (153 GB/s) a un plafond proche de 29 tok/s pour Qwen3 8B, tandis qu'un GPU de portable RTX 4060 (environ 256 GB/s, 8 GB de VRAM) a un plafond proche de 49 tok/s mais ne contient que les modèles qui tiennent dans 8 GB. Un M5 Pro (307 GB/s) ou un M5 Max (460–614 GB/s) avec plus de mémoire garde de plus gros modèles en mémoire rapide. La consommation diffère selon le modèle : vérifiez votre portable."
          },
          {
            "q": "Que se passe-t-il si le modèle est trop gros pour la RAM de mon portable ?",
            "a": "Le système se met à utiliser le swap sur disque, ou le modèle ne se charge pas, et la génération peut devenir très lente pendant que les ventilateurs s'emballent. La solution : un modèle plus petit, un niveau de quantification plus bas (Q4_K_M plutôt que Q8_0) ou un contexte plus court (`OLLAMA_CONTEXT_LENGTH`, 4096 par défaut)."
          },
          {
            "q": "Combien de temps la batterie tient-elle avec un LLM local sur un portable ?",
            "a": "L'autonomie vaut à peu près la capacité de la batterie en Wh divisée par la consommation moyenne en W. Une batterie de 60 Wh à 20 W dure environ 3 heures et à 30 W environ 2 heures (calcul illustratif, pas une mesure). La consommation réelle varie selon le portable, le modèle et le mode d'alimentation. Pour un usage sur la journée, branchez le portable."
          },
          {
            "q": "Ai-je besoin d'une connexion internet pour faire tourner un LLM local sur un portable ?",
            "a": "Non. Une fois le modèle téléchargé (ce qui nécessite internet), l'inférence se fait entièrement hors ligne. Le modèle tourne uniquement sur le CPU ou le GPU du portable. Les LLM locaux sont donc utiles en déplacement, dans des environnements sécurisés ou dans des lieux à connexion peu fiable."
          },
          {
            "q": "Puis-je faire tourner un LLM local avec 8 GB de RAM ?",
            "a": "Oui. Un portable de 8 GB fait tourner un modèle 3B–4B en Q4_K_M (fichiers de 2.0–2.5 GB) à 15–30 tok/s estimés en RAM dual-channel, ou à 28–45 tok/s estimés sur un Apple M2 ou M3. Les modèles 7B–8B (fichiers de 4.4–5.2 GB) sont justes sur 8 GB."
          },
          {
            "q": "Quel est le portable le plus rapide pour les LLM locaux ?",
            "a": "Pour les LLM locaux, les caractéristiques clés sont la bande passante mémoire et une mémoire suffisante. Apple indique 307 GB/s pour le M5 Pro (jusqu'à 64 GB) et 460 ou 614 GB/s pour le M5 Max (jusqu'à 128 GB) ; pour Qwen3 8B, les estimations PromptQuorum sont de 41–53 tok/s sur un M5 Pro et de 62–106 tok/s sur un M5 Max. Sous Windows, un portable avec un GPU NVIDIA qui garde le modèle en VRAM a un plafond élevé, par exemple environ 256 GB/s pour un GPU de portable RTX 4060 avec 8 GB."
          },
          {
            "q": "À quel point les LLM locaux sont-ils lents sur CPU ?",
            "a": "La vitesse est au plus égale à la bande passante mémoire ÷ la taille du fichier du modèle. En DDR4/DDR5 dual-channel, un modèle 3B–4B en Q4_K_M tourne à 15–30 tok/s estimés et Qwen3 8B à 8–15 tok/s estimés ; une RAM single-channel divise cela par deux. C'est assez lent pour lire au fil de l'eau, mais assez rapide pour le chat et le résumé. Apple Silicon atteint 13–26 tok/s estimés sur Qwen3 8B (du M3 au M5), car la mémoire unifiée offre plus de bande passante."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "**Caractéristiques techniques du MacBook Pro d'Apple** -- bande passante mémoire du M5 (153 GB/s), du M5 Pro (307 GB/s) et du M5 Max (460 et 614 GB/s), et autonomie annoncée. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Caractéristiques techniques du MacBook Air d'Apple (15 pouces, M3, 2024)** -- bande passante mémoire du M3 de 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom : M2** -- bande passante de mémoire unifiée de 100 GB/s. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom : MacBook Pro avec M5 Pro et M5 Max (3 mars 2026)** -- jusqu'à 64 GB et 128 GB de mémoire unifiée. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**Comparatif des portables NVIDIA GeForce** -- GPU de portable RTX 4060 : 8 GB de GDDR6, bus de 128 bits. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck : GPU de portable RTX 4060** -- vitesse mémoire de 16 Gbps (source tierce ; base du chiffre d'environ 256 GB/s). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**Caractéristiques de la NVIDIA GeForce RTX 4090** -- 24 GB de VRAM, 1 008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Bibliothèque Ollama** -- tailles de fichier vérifiées le 23 octobre 2026 : [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**FAQ Ollama** -- longueur de contexte par défaut de 4096, OLLAMA_CONTEXT_LENGTH, type de cache KV, keep-alive et `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Documentation GPU d'Ollama** -- Metal sur Apple Silicon, Vulkan et GPU pris en charge. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**README de quantize de llama.cpp** -- tailles de fichier par type de quantification pour Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** -- accélération GPU pour les Mac Apple Silicon. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- configuration requise, compatibilité GPU et mise en place de l'inférence locale. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "Quelles sont les erreurs courantes avec les LLM locaux sur portable ?",
        "items": [
          "**Lancer un modèle trop gros pour la RAM disponible** → le système utilise le swap sur disque et la génération ralentit fortement ; choisissez un modèle plus petit ou une quantification plus basse.",
          "**Ignorer la limitation thermique** → la vitesse soutenue peut chuter une fois la limite de température atteinte ; mesurez votre vitesse après 10 minutes avec `ollama run <model> --verbose`.",
          "**Utiliser Q8_0 plutôt que Q4_K_M** → le fichier est environ 1.7 fois plus gros (7.95 contre 4.58 GiB pour Llama 3.1 8B) : il demande plus de RAM et génère plus lentement sur un portable limité par la bande passante, pour un faible gain de qualité.",
          "**Utiliser une seule barrette de RAM** → la mémoire single-channel divise par deux la bande passante de crête et le plafond de vitesse ; utilisez deux barrettes identiques lorsque le portable le permet.",
          "**Laisser le déchargement GPU désactivé dans LM Studio** → le modèle tourne sur le CPU au lieu du GPU ; augmentez le réglage de déchargement GPU quand le modèle tient dans la mémoire du GPU.",
          "**Garder la fenêtre de contexte par défaut** → celle d'Ollama est de 4096 tokens, donc les documents de plusieurs pages sont tronqués ; augmentez-la avec `OLLAMA_CONTEXT_LENGTH=8192` ou `/set parameter num_ctx 8192` et attendez-vous à plus de mémoire utilisée."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Meilleurs modèles de LLM local pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Petits modèles optimisés pour les portables",
          "[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Guide d'installation",
          "[Comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio) -- Installation avec interface graphique",
          "[Dépannage de la configuration d'un LLM local](/fr/local-llms/troubleshooting-local-llm-setup) -- Corrections de performances et d'erreurs",
          "[La quantification des LLM expliquée](/fr/local-llms/llm-quantization-explained) -- Q4_K_M, Q8_0 et Q5_K_M en détail",
          "[Petits modèles de LLM local sous 4 GB](/fr/local-llms/small-local-llm-models) -- Modèles 3B pour portables de 8 GB",
          "[Portable ou ordinateur de bureau pour les LLM locaux 2026](/fr/local-llms/laptop-vs-desktop-local-llm) -- Guide d'achat : comparaison des performances, analyse des coûts et choix de plateforme.",
          "[MLX, Ollama et llama.cpp sur Mac 2026](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Comparaison des frameworks pour Apple Silicon : vitesse, temps de mise en place et compromis d'écosystème.",
          "[Le moyen le moins cher de faire tourner un modèle 70B en local](/fr/prompt-bites/cheapest-way-to-run-70b-model-locally) -- Quand un portable peut gérer du 70B : Q3_K_S sur M3 Max ou déchargement vers le CPU.",
          "[Meilleur GPU pour l'inférence de LLM à moins de 500 $ (2026)](/fr/local-llms/best-gpu-for-llm-inference-under-500-2026) -- Piste d'évolution avec eGPU pour les portables MacBook et Windows.",
          "[Meilleurs LLM locaux CPU seul 2026](/fr/local-llms/best-cpu-only-llm) -- tok/s estimés selon la taille du fichier pour les machines sans GPU.",
          "[LLM locaux les plus rapides pour PC d'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs) -- Choix pour 4–16 GB de RAM, CPU seul ou iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "LLM local sur ordinateur portable : ce qui tourne avec 8 GB, 16 GB et Apple Silicon (2026)",
      "description": "Faites tourner des LLM locaux sur des portables de 8 GB ou 16 GB de RAM ou Apple Silicon. Choix de modèles (Llama 3.2 3B, Phi-4-mini, Qwen3 8B), vitesses estimées d'après la bande passante mémoire, chaleur, batterie et quantification Q4_K_M.",
      "url": "https://www.promptquorum.com/fr/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "LLM local sur ordinateur portable"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "quantification Q4_K_M"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "limitation thermique (thermal throttling)"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "fr"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Meilleurs modèles de LLM local pour portables 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "Modèle 3B, fichier Ollama de 2.0 GB. 18–30 tok/s est. en RAM dual-channel (estimation PromptQuorum). Plus petit fichier ici, adapté aux portables 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "Modèle 3.8B, fichier Ollama de 2.5 GB. 15–25 tok/s est. en RAM dual-channel (estimation PromptQuorum). Raisonnement et code sur portables 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "Modèle 8B, fichier Ollama de 5.2 GB. 8–15 tok/s est. en RAM dual-channel (estimation PromptQuorum). Multilingue et code sur portables 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "Modèle 8B, fichier Ollama de 4.9 GB. 8–14 tok/s est. en RAM dual-channel (estimation PromptQuorum). Usage général sur portables 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "Modèle 9B, fichier Ollama de 6.6 GB. 6–12 tok/s est. en RAM dual-channel (estimation PromptQuorum). Famille récente avec entrée image sur portables 16 GB."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels sont les meilleurs modèles Ollama pour Intel Iris Xe avec 16 GB de RAM ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur un portable avec un graphique Intel Iris Xe et 16 GB de RAM, la vitesse est limitée par la bande passante de la RAM système. Que Ollama utilise l'iGPU dépend du pilote et de la prise en charge par le backend (vérifiez la colonne PROCESSOR de `ollama ps`), et un iGPU partage la même RAM : les gains sont donc généralement modestes. Choisissez un modèle 3B–4B en Q4_K_M pour la vitesse : Llama 3.2 3B (18–30 tok/s est. en RAM dual-channel) avec `ollama run llama3.2:3b`, ou Qwen3 8B (8–15 tok/s est.) avec `ollama run qwen3:8b` pour plus de qualité. Les vitesses sont des estimations PromptQuorum, pas des mesures de laboratoire."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on faire tourner du RAG en local sur un portable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Une pile RAG sur portable se compose d'un petit modèle d'embedding, d'une base vectorielle locale et de votre modèle de chat. Le modèle d'embedding est petit (nomic-embed-text pèse 274 MB sur Ollama), donc le modèle de chat reste la contrainte déterminante pour la RAM : un portable de 8 GB fait tourner un modèle de chat 3B avec recherche, et 16 GB laissent de la place pour un modèle 8B. Voir la [section RAG sur portable](#rag-laptop) ci-dessus pour le détail de la RAM."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le meilleur LLM local CPU seul pour un portable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parmi les modèles comparés dans le guide CPU seul, Phi-4 Mini (3.8B, fichier de 2.5 GB) est le meilleur choix polyvalent à 15–25 tok/s estimés en RAM dual-channel, et Llama 3.2 3B (fichier de 2.0 GB) est le plus petit fichier, à 18–30 tok/s estimés, tous deux en Q4_K_M. Pour la comparaison complète et les commandes Ollama, voir [Meilleurs LLM locaux CPU seul 2026](/fr/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "Faire tourner un LLM local peut-il abîmer mon portable à la longue ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aucun dommage immédiat n'est attendu sur un portable en bon état : les puces baissent leur fréquence quand elles chauffent, si bien qu'une inférence soutenue ralentit la machine sans l'endommager. Une chaleur soutenue use tout de même les ventilateurs et la batterie avec le temps : utilisez un support ou un refroidisseur, gardez les grilles dégagées et faites des pauses. Suivez les recommandations de votre fabricant sur la gestion thermique et l'entretien de la batterie."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je faire tourner un LLM local sur un portable de 4 GB de RAM ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "À peine. Un petit modèle comme Qwen3 1.7B (fichier de 1.4 GB) ou Llama 3.2 1B (fichier de 1.3 GB) tient, mais le système a besoin de 2–3 GB : avec 4 GB au total, vous risquez de passer en swap, ce qui ralentit fortement la génération. Le minimum pratique pour une expérience confortable est de 8 GB. Voir [LLM locaux les plus rapides pour PC d'entrée de gamme](/fr/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "Mon portable a-t-il besoin d'un GPU dédié pour faire tourner des LLM locaux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Ollama, LM Studio et GPT4All fonctionnent sur CPU seul. Un GPU à haute bande passante mémoire accélère la génération, mais les modèles 3B–4B restent utilisables sur CPU à 15–30 tok/s estimés en RAM dual-channel. Voir [Meilleurs modèles de LLM local pour débutants](/fr/local-llms/best-beginner-local-llm-models) pour des recommandations adaptées au CPU."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le LLM local le plus rapide sur un MacBook de 8 GB ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parmi les modèles de ce guide, Llama 3.2 3B en Q4_K_M (fichier de 2.0 GB) est le choix pratique le plus rapide sur un MacBook de 8 GB. Sur un M2 ou un M3 (tous deux à 100 GB/s selon Apple), le plafond de bande passante est d'environ 50 tok/s et l'estimation PromptQuorum est de 35–45 tok/s. Un fichier 8B (5.2 GB) est juste sur 8 GB, car macOS et vos applications ont aussi besoin de mémoire."
          }
        },
        {
          "@type": "Question",
          "name": "Comment réduire la limitation thermique d'un portable pendant l'inférence d'un LLM ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quatre étapes : (1) surélevez le portable sur un support dégageant la ventilation, (2) essayez un mode d'alimentation équilibré ou économe, car la génération est limitée par la bande passante mémoire plus que par la fréquence, (3) limitez la longueur de génération et le contexte, et (4) utilisez Q4_K_M plutôt que Q8_0 pour que chaque token lise moins de données. Mesurez votre vitesse sur 10 minutes avec `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je faire tourner un LLM local sur un Chromebook ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seulement sur les Chromebooks où Linux (Crostini) est activé, et seulement de petits modèles. La plupart des Chromebooks ont 4–8 GB de RAM et une bande passante mémoire modeste : un modèle 1B–3B en Q4_K_M est le plafond réaliste et la vitesse sera faible. Les Chromebooks sans prise en charge de Linux ne peuvent pas exécuter Ollama."
          }
        },
        {
          "@type": "Question",
          "name": "Apple Silicon est-il meilleur qu'un GPU de portable NVIDIA pour les LLM locaux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cela dépend de la mémoire. La vitesse suit la bande passante et la capacité mémoire : un MacBook de 16 GB avec M5 (153 GB/s) a un plafond proche de 29 tok/s pour Qwen3 8B, tandis qu'un GPU de portable RTX 4060 (environ 256 GB/s, 8 GB de VRAM) a un plafond proche de 49 tok/s mais ne contient que les modèles qui tiennent dans 8 GB. Un M5 Pro (307 GB/s) ou un M5 Max (460–614 GB/s) avec plus de mémoire garde de plus gros modèles en mémoire rapide. La consommation diffère selon le modèle : vérifiez votre portable."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si le modèle est trop gros pour la RAM de mon portable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le système se met à utiliser le swap sur disque, ou le modèle ne se charge pas, et la génération peut devenir très lente pendant que les ventilateurs s'emballent. La solution : un modèle plus petit, un niveau de quantification plus bas (Q4_K_M plutôt que Q8_0) ou un contexte plus court (`OLLAMA_CONTEXT_LENGTH`, 4096 par défaut)."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps la batterie tient-elle avec un LLM local sur un portable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'autonomie vaut à peu près la capacité de la batterie en Wh divisée par la consommation moyenne en W. Une batterie de 60 Wh à 20 W dure environ 3 heures et à 30 W environ 2 heures (calcul illustratif, pas une mesure). La consommation réelle varie selon le portable, le modèle et le mode d'alimentation. Pour un usage sur la journée, branchez le portable."
          }
        },
        {
          "@type": "Question",
          "name": "Ai-je besoin d'une connexion internet pour faire tourner un LLM local sur un portable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Une fois le modèle téléchargé (ce qui nécessite internet), l'inférence se fait entièrement hors ligne. Le modèle tourne uniquement sur le CPU ou le GPU du portable. Les LLM locaux sont donc utiles en déplacement, dans des environnements sécurisés ou dans des lieux à connexion peu fiable."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je faire tourner un LLM local avec 8 GB de RAM ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Un portable de 8 GB fait tourner un modèle 3B–4B en Q4_K_M (fichiers de 2.0–2.5 GB) à 15–30 tok/s estimés en RAM dual-channel, ou à 28–45 tok/s estimés sur un Apple M2 ou M3. Les modèles 7B–8B (fichiers de 4.4–5.2 GB) sont justes sur 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le portable le plus rapide pour les LLM locaux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour les LLM locaux, les caractéristiques clés sont la bande passante mémoire et une mémoire suffisante. Apple indique 307 GB/s pour le M5 Pro (jusqu'à 64 GB) et 460 ou 614 GB/s pour le M5 Max (jusqu'à 128 GB) ; pour Qwen3 8B, les estimations PromptQuorum sont de 41–53 tok/s sur un M5 Pro et de 62–106 tok/s sur un M5 Max. Sous Windows, un portable avec un GPU NVIDIA qui garde le modèle en VRAM a un plafond élevé, par exemple environ 256 GB/s pour un GPU de portable RTX 4060 avec 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "À quel point les LLM locaux sont-ils lents sur CPU ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La vitesse est au plus égale à la bande passante mémoire ÷ la taille du fichier du modèle. En DDR4/DDR5 dual-channel, un modèle 3B–4B en Q4_K_M tourne à 15–30 tok/s estimés et Qwen3 8B à 8–15 tok/s estimés ; une RAM single-channel divise cela par deux. C'est assez lent pour lire au fil de l'eau, mais assez rapide pour le chat et le résumé. Apple Silicon atteint 13–26 tok/s estimés sur Qwen3 8B (du M3 au M5), car la mémoire unifiée offre plus de bande passante."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Comment réduire la limitation thermique d'un portable pendant l'inférence d'un LLM local",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Utiliser un support de portable dégageant la ventilation",
          "text": "Surélevez le portable sur un support pour améliorer l'évacuation de l'air, ce qui peut retarder la limitation."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Essayer un mode d'alimentation plus bas",
          "text": "La génération de tokens est limitée par la bande passante mémoire plutôt que par la fréquence ; un plan équilibré ou économe (sous macOS, le mode économie d'énergie) peut réduire la chaleur. Testez-le sur votre machine."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Limiter la longueur de génération et le contexte",
          "text": "Découpez les longues tâches en prompts plus courts et évitez de régénérer de très longues réponses d'un seul bloc."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Utiliser la quantification Q4_K_M plutôt que Q8_0",
          "text": "Le fichier est environ 1.7 fois plus petit : chaque token lit moins de données en mémoire et la puce est moins longtemps sous charge."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "ja": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "ノートPCでローカルLLM：8GB・16GB・Apple Siliconで動くモデル（2026）",
    "seoTitle": "ノートPCのローカルLLM（2026）：8GB・16GB・Mac",
    "intro": "RAM 8 GBのノートPCでもローカルLLMは動きます。Q4_K_Mの3B–4Bモデルはデュアルチャネル RAMで推定15–30 tok/s、16 GBのノートPCなら8Bモデルが推定8–15 tok/sです。Apple Siliconはユニファイドメモリの帯域が広いため、より高速です。速度はメモリ帯域から導いたPromptQuorumの推定値で、実験室での実測値ではありません。発熱とバッテリーにより、ノートPCが速度を維持できる時間は限られます。",
    "metaDescription": "ノートPCで動くローカルLLMを、8GB・16GB・Apple Silicon別に解説。メモリ帯域から求めた推定tok/s、発熱、バッテリー、量子化もまとめます。",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-ja.webp",
    "twitterDescription": "ノートPCのローカルLLM：RAM 8 GBなら3B–4Bモデルが推定15–30 tok/s、16 GBなら8Bが推定8–15 tok/s。数値はメモリ帯域からの推定で、実測ではありません。",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**ノートPCでローカルLLMは動きます。8 GB RAMなら3B–4Bで推定15–30 tok/s、16 GBなら8Bで推定8–15 tok/s（CPU）。PromptQuorumの推定値で実測ではありません。**",
    "comparisonTable": {
      "columns": [
        "構成",
        "モデルサイズ",
        "速度",
        "使い心地"
      ],
      "rows": [
        {
          "構成": "8 GB RAM、CPU",
          "モデルサイズ": "3B–4B",
          "速度": "推定15–30 tok/s",
          "使い心地": "チャット、要約、簡単なコーディング"
        },
        {
          "構成": "16 GB RAM、CPU",
          "モデルサイズ": "8B–9B",
          "速度": "推定8–15 tok/s",
          "使い心地": "マルチタスクしながらの一般用途"
        },
        {
          "構成": "Apple Silicon（M3〜M5）、16 GB",
          "モデルサイズ": "8B",
          "速度": "推定13–26 tok/s",
          "使い心地": "一般的なノートPCのRAMよりメモリ帯域が広い"
        },
        {
          "構成": "GPU搭載ノートPC（RTX 4060、VRAM 8 GB）",
          "モデルサイズ": "8B",
          "速度": "推定34–44 tok/s",
          "使い心地": "モデルがVRAMに収まれば高速。発熱と消費電力は大きい"
        }
      ]
    },
    "audience": "一般的なPCで初めてローカルLLMを動かす初心者",
    "readTime": "8分で読める",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "クイック回答：ノートPCで動くローカルLLMは？",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "重要ポイント",
        "anchor": "#key-takeaways"
      },
      {
        "label": "ノートPCでローカルLLMを実行できますか？",
        "anchor": "#can-you-run"
      },
      {
        "label": "ノートPCでRAGを実行できますか？",
        "anchor": "#rag-laptop"
      },
      {
        "label": "どの構成が必要ですか？",
        "anchor": "#use-case"
      },
      {
        "label": "ノートPCに向くローカルLLMモデルは？",
        "anchor": "#best-models"
      },
      {
        "label": "Apple SiliconとWindowsノートPCの比較",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "ローカルLLMはノートPCとデスクトップのどちら向き？",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "サーマルスロットリングへの対処法",
        "anchor": "#thermals"
      },
      {
        "label": "ローカルLLMの実行でバッテリーはどれくらい減る？",
        "anchor": "#battery-drain"
      },
      {
        "label": "ノートPCではどの量子化レベルを選ぶべき？",
        "anchor": "#quantization-tips"
      },
      {
        "label": "ノートPCでローカルLLMを動かすとき、どのプライバシー法が関係しますか？",
        "anchor": "#regional-context"
      },
      {
        "label": "ノートPCでローカルLLMを動かすときのよくある間違い",
        "anchor": "#common-mistakes"
      },
      {
        "label": "関連記事",
        "anchor": "#related-reading"
      },
      {
        "label": "ノートPCでのローカルLLMに関するよくある質問",
        "anchor": "#faq"
      },
      {
        "label": "出典",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "ノートPCでローカルLLMを実行できますか？",
      "answer": "はい。RAM 8 GBのノートPCではQ4_K_Mの3B–4Bモデルが動きます。例えばLlama 3.2 3B（ファイル2.0 GB）はデュアルチャネル RAMで推定18–30 tok/sです。16 GBのノートPCならQwen3 8B（ファイル5.2 GB）などの8B–9Bモデルが、CPUで推定8–15 tok/sで動きます。Apple Siliconはユニファイドメモリの帯域が広いため高速で、Qwen3 8Bの場合、M3で推定13–17 tok/s、M5で21–26 tok/sです。速度はすべてメモリ帯域から導いたPromptQuorumの推定値で、実測ではありません。",
      "bullets": [
        "8 GB RAM：Llama 3.2 3B（ファイル2.0 GB）またはPhi-4-mini（2.5 GB）。デュアルチャネル RAMで推定15–30 tok/s",
        "16 GB RAM：Qwen3 8B（ファイル5.2 GB）またはLlama 3.1 8B（4.9 GB）。CPUで推定8–15 tok/s",
        "Apple Silicon：Qwen3 8Bは、M3（100 GB/s）で推定13–17 tok/s、M5（153 GB/s）で21–26 tok/s",
        "速度の目安：tok/sは最大でもメモリ帯域 ÷ モデルのファイルサイズ。シングルチャネル RAMでは半分になります",
        "負荷が続くとクロックが下がり、バッテリーも急速に減ります。電源につなぎ、通気を確保してください"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "クイック回答：ノートPCで動くローカルLLMは？（8GB・16GB・Apple Silicon）",
        "content": [
          "**RAM 8 GBのノートPCでもローカルLLMは動きます。Q4_K_Mの3B–4Bモデルが、デュアルチャネル RAMで推定15–30 tok/sです。** 下の表で、お使いのハードウェアに合うモデルを確認できます。速度はメモリ帯域から導いたPromptQuorumの推定値（tok/s ≈ 帯域 ÷ モデルのファイルサイズ）で、実測ではありません。"
        ],
        "rows": [
          {
            "お使いのノートPC": "8 GB RAM、CPUのみ",
            "おすすめモデル": "Llama 3.2 3B / Phi-4-mini、Q4_K_M",
            "推定tok/s": "15–30",
            "ハードウェアの前提": "デュアルチャネル DDR4/DDR5"
          },
          {
            "お使いのノートPC": "16 GB RAM、CPUのみ",
            "おすすめモデル": "Qwen3 8B / Llama 3.1 8B、Q4_K_M",
            "推定tok/s": "8–15",
            "ハードウェアの前提": "デュアルチャネル DDR4/DDR5"
          },
          {
            "お使いのノートPC": "Apple M3、16 GB",
            "おすすめモデル": "Qwen3 8B、Q4_K_M",
            "推定tok/s": "13–17",
            "ハードウェアの前提": "100 GB/sのユニファイドメモリ"
          },
          {
            "お使いのノートPC": "Apple M5、16 GB",
            "おすすめモデル": "Qwen3 8B、Q4_K_M",
            "推定tok/s": "21–26",
            "ハードウェアの前提": "153 GB/sのユニファイドメモリ"
          },
          {
            "お使いのノートPC": "Intel Iris Xe / AMD内蔵GPU",
            "おすすめモデル": "Llama 3.2 3B / Phi-4-mini、Q4_K_M",
            "推定tok/s": "15–30",
            "ハードウェアの前提": "システムRAMを共有。ollama psで確認"
          }
        ],
        "columns": [
          "お使いのノートPC",
          "おすすめモデル",
          "推定tok/s",
          "ハードウェアの前提"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-ja.webp",
        "imageCaption": "ノートPCでローカルLLM：8GB・16GB・Apple Siliconで動くモデルと推定tok/s"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "RAM 8 GBのノートPCは3B–4BのローカルLLMを推定15–30 tok/sで、16 GBのノートPCは8B–9Bモデルを推定8–15 tok/sで実行でき、Apple Siliconはユニファイドメモリの帯域が広いため、さらに高速です。"
          },
          {
            "type": "plain-terms",
            "text": "ノートPCの主な制約は、RAMの容量とメモリ帯域です。モデルファイルはRAMに収まる必要があり、トークンを1つ生成するたびにファイル全体を1回読み込むため、速度は最大でもメモリ帯域 ÷ ファイルサイズになります。ノートPCは負荷が続くと速度が落ちること（サーマルスロットリング）もあり、スタンド、電源接続、小さめのモデルが有効です。"
          }
        ],
        "items": [
          "Q4_K_Mの3B–4Bモデルは、RAM 8 GBのノートPCで動作します。Llama 3.2 3B（ファイル2.0 GB）は推定18–30 tok/s、Phi-4-mini（2.5 GB）は推定15–25 tok/sです。",
          "16 GB RAMにはQ4_K_Mの8B–9Bモデルが収まります。Qwen3 8B（ファイル5.2 GB）は、デュアルチャネル RAMで推定8–15 tok/s、Apple M3で13–17 tok/s、Apple M5で21–26 tok/sです。",
          "速度の目安：毎秒のトークン数は最大でもメモリ帯域 ÷ モデルのファイルサイズです（これは上限で、実際の速度はそれより低くなります）。デュアルチャネル DDR4-3200は51.2 GB/s、デュアルチャネル DDR5-5600は89.6 GB/sで、シングルチャネルでは結果が半分になります。AppleはM3を100 GB/s、M5を153 GB/sと公表しています。",
          "このページの速度はすべて、メモリ帯域から導いたPromptQuorumの推定値で、実測ではありません。実際のtok/sは `ollama run <model> --verbose` で確認できます。",
          "長時間使うときは電源につなぎ、通気を確保してください。負荷が続くとノートPCのチップはクロック周波数を下げることがあり、推論中のバッテリー消費は軽い作業よりずっと速くなります。"
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "一文で言うと",
        "content": [
          "ローカルLLMは量子化モデルを使えばノートPCで動かせます。Q4_K_Mはファイルサイズを約FP16の31%に縮め（Llama 3.1 8BでFP16の14.96 GiBが4.58 GiB）、品質低下はわずかです。"
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "やさしく言うと",
        "content": [
          "ローカルでLLMを動かすとは、プロバイダーのサーバーではなく自分のノートPC上でチャットボットを動かすことです。プライバシーを守れてオフラインでも使えますが、クラウドサービスより低速です。"
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "ノートPCでLLMを動かすのはどんなときか？",
        "items": [
          "✅ **ローカルLLMが向くケース：** データを端末内にとどめたい、オフラインで作業する、トークン単位のAPI費用をかけたくない",
          "❌ **向かないケース：** 最高水準の推論品質が必要、非常に長いコンテキスト（100K+トークン。コンテキストが長くなるほどKVキャッシュが増えるため）が必要、高速なバッチ処理が必要 — [ローカルLLMの制限](/ja/local-llms/local-llm-limitations)を参照"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "ノートPCでローカルLLMを実行できますか？",
        "content": [
          "**はい。ただし、適切なサイズのモデルを選ぶことが条件です。** RAM 8 GBのノートPCでは、Q4_K_Mの3B–4Bモデルがデュアルチャネル RAMで推定15–30 tok/sで動きます（Llama 3.2 3B：18–30、Phi-4-mini：15–25）。16 GBのApple Siliconノートなら、チップによって8Bモデルが推定13–26 tok/sで動きます。多くのクラウドAPIより遅いものの、読みながら使える速さです。",
          "8 GBのノートPCで現実的な上限は3B–4Bモデルです。7B–8Bのファイル（4.4–5.2 GB）では、OSとブラウザに回すメモリがほとんど残りません。Q4_K_Mの14Bモデル（Qwen3 14B：ファイル9.3 GB）は、コンテキストを短くして他のアプリを閉じた場合に限り、16 GBのマシンに収まります。",
          "ここでの速度は、メモリ帯域から導いたPromptQuorumの推定値で、実測ではありません。8 GB未満の構成と帯域の考え方の全体は **[低スペックPC向け最速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs)** を、GPUのないノートPCについては **[CPUのみで動くおすすめローカルLLM 2026](/ja/local-llms/best-cpu-only-llm)** を参照してください。"
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "ノートPCでRAG（検索拡張）を実行できますか？",
        "content": [
          "**はい。ノートPCでもRAGは動作します。制約になるのは検索層ではなく、チャットモデルのほうだからです。** ノートPCのRAG構成は、小さな埋め込みモデル、ローカルのベクトルストア、チャットモデルの3つです。",
          "埋め込みモデルは小さく、nomic-embed-textはOllamaで274 MB（コンテキストウィンドウ2K）なので、RAMへの負担はわずかです。8 GBのノートPCなら3Bのチャットモデルと埋め込みモデルを併用でき、16 GBなら8Bのチャットモデルと検索を並行する余裕があります。",
          "**RAM 2 GBで動くのは、ごく小さな構成だけです。** Qwen3 0.6B（523 MB）とnomic-embed-textを合わせてファイルは約0.8 GBで、2 GBが実際に空いていれば収まります。一般的なノートPCではOSが2–3 GBを使い、ディスクへのスワップで生成が大きく遅くなるため、現実的な下限は8 GBと考えてください。"
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "用途別に、ノートPCはどんな構成が必要ですか？",
        "items": [
          "**初心者向け** — 8 GB RAM、3B–4Bモデル、CPUのみ。推定15–30 tok/sで、チャット、要約、簡単なコーディングには十分です。",
          "**開発者向け** — 16 GB RAM、8B–9Bモデル、GPUは任意。他のアプリを閉じなくてもマルチタスクが可能です（CPUで推定8–15 tok/s）。",
          "**パワーユーザー向け** — ProまたはMaxチップのApple Silicon、あるいはVRAM 8 GB以上のノートPC用GPUで、8B–14Bモデル。Qwen3 8Bの推定値は、M5 Pro（307 GB/s）で41–53 tok/s、RTX 4060 ノートPC用GPU（約256 GB/s）で34–44 tok/sです。"
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "ノートPCでローカルLLMを動かせるのはどんな人？",
        "items": [
          "**初心者** → [LM Studio](/ja/local-llms/how-to-install-lm-studio) + 3Bモデル",
          "**中級者** → [Ollama](/ja/local-llms/how-to-install-ollama) + 8Bモデル",
          "**上級者** → 14B + [量子化のチューニング](/ja/local-llms/llm-quantization-explained)",
          "❌ **ノートPCが向かないケース：** リアルタイムAPIが必要（vLLMサーバーを使用）、大規模データセットを処理する（クラウドGPUを使用）"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "必要なローカルLLMのモデルサイズは？",
        "content": "ファイルサイズは、2026-10-23にollama.comで確認したOllamaのダウンロードサイズで、Q4_K_M相当の量子化（FP16より約70%小さい）です。最小RAMは、ファイルサイズに約0.5 GBのオーバーヘッドを加えた値です。OSとブラウザ用に、さらに2–4 GBの余裕を残してください。",
        "rows": [
          {
            "モデル": "Llama 3.2 3B",
            "ファイル（Ollama）": "2.0 GB",
            "最小RAM": "2.5–3 GB",
            "推定tok/s": "18–30",
            "主な用途": "基本タスク、チャット、要約"
          },
          {
            "モデル": "Phi-4-mini 3.8B",
            "ファイル（Ollama）": "2.5 GB",
            "最小RAM": "3 GB",
            "推定tok/s": "15–25",
            "主な用途": "8 GBでの推論とコーディング"
          },
          {
            "モデル": "Qwen3 8B",
            "ファイル（Ollama）": "5.2 GB",
            "最小RAM": "6 GB",
            "推定tok/s": "8–15",
            "主な用途": "一般用途、多言語、コーディング"
          },
          {
            "モデル": "Qwen3 14B",
            "ファイル（Ollama）": "9.3 GB",
            "最小RAM": "10 GB",
            "推定tok/s": "4–8",
            "主な用途": "16 GBでの難しいタスク（短いコンテキスト）"
          }
        ],
        "columns": [
          "モデル",
          "ファイル（Ollama）",
          "最小RAM",
          "推定tok/s",
          "主な用途"
        ],
        "note": "推定値はPromptQuorumによる推定で、実測ではありません。デュアルチャネル DDR4-3200〜DDR5-5600（51.2–89.6 GB/s）のノートPCが前提で、シングルチャネル RAMでは半分になります。Q4_K_Mの例：Llama 3.1 8BはFP16で14.96 GiB、Q4_K_Mで4.58 GiB（llama.cpp quantize README）で、約69%小さくなります。→ [VRAM計算ツール](/ja/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "RAM 8 GBと16 GBのノートPC：実用上の違いは？",
        "rows": [
          {
            "シナリオ": "最大モデルサイズ",
            "8 GB RAM": "3B–4Bなら余裕あり。7B–8B（ファイル4.4–5.2 GB）はぎりぎり",
            "16 GB RAM": "8B–9Bなら余裕あり。14B（9.3 GB）は短いコンテキストなら可"
          },
          {
            "シナリオ": "ブラウザを開いたままのモデル",
            "8 GB RAM": "3B–4B（ぎりぎり）",
            "16 GB RAM": "8B–9Bでも余裕あり"
          },
          {
            "シナリオ": "最初におすすめのモデル",
            "8 GB RAM": "llama3.2:3b または phi4-mini",
            "16 GB RAM": "qwen3:8b または llama3.1:8b"
          },
          {
            "シナリオ": "同時に使うアプリ",
            "8 GB RAM": "8Bモデルを読み込む前にブラウザを閉じる",
            "16 GB RAM": "8Bモデルでも通常のマルチタスクが可能"
          }
        ],
        "columns": [
          "シナリオ",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "ノートPCで最も快適に動くローカルLLMモデルは？",
        "content": "**ノートPCの制約に合うのは、小さなファイルのモデルです。同じメモリ帯域でも、ファイルが小さいほど毎秒のトークン数が増えます。** 速度は、デュアルチャネル DDR4-3200〜DDR5-5600（51.2–89.6 GB/s）のノートPCを前提に、帯域の上限（帯域 ÷ Ollamaのファイルサイズ）から導いたPromptQuorumの推定値で、実測ではありません。シングルチャネル RAMでは半分になります。ファイルサイズは2026-10-23に確認したOllamaのダウンロードサイズです。モデルやノートPC構成ごとのVRAM要件は、[VRAM要件ガイド →](/ja/local-llms/how-much-vram-local-llm)を参照してください。[Ollama](/ja/local-llms/how-to-install-ollama)をインストールすれば、どのモデルもコマンド1つで実行できます。GPUがない場合は **[CPUのみで動くおすすめローカルLLM 2026](/ja/local-llms/best-cpu-only-llm)** を参照してください。これらはオープンウェイトのモデルです。ライセンスは各モデルカードで確認してください。",
        "rows": [
          {
            "モデル": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "ファイル（Ollama）": "2.0 GB",
            "最小RAM": "2.5–3 GB",
            "推定tok/s": "18–30",
            "おすすめ用途": "8 GBノートPC、手早いタスク"
          },
          {
            "モデル": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "ファイル（Ollama）": "2.5 GB",
            "最小RAM": "3 GB",
            "推定tok/s": "15–25",
            "おすすめ用途": "8 GBノートPC、推論とコーディング"
          },
          {
            "モデル": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "ファイル（Ollama）": "5.2 GB",
            "最小RAM": "6 GB",
            "推定tok/s": "8–15",
            "おすすめ用途": "16 GBノートPC、多言語、コーディング"
          },
          {
            "モデル": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "ファイル（Ollama）": "4.9 GB",
            "最小RAM": "5.5 GB",
            "推定tok/s": "8–14",
            "おすすめ用途": "16 GBノートPC、一般用途"
          },
          {
            "モデル": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "ファイル（Ollama）": "6.6 GB",
            "最小RAM": "7–8 GB",
            "推定tok/s": "6–12",
            "おすすめ用途": "16 GBノートPC、新世代、画像入力対応"
          }
        ],
        "columns": [
          "モデル",
          "ファイル（Ollama）",
          "最小RAM",
          "推定tok/s",
          "おすすめ用途"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-ja.webp",
        "imageCaption": "ノートPC向けローカルLLMモデルをファイルサイズ別に比較。デュアルチャネル RAMの推定tok/s付き"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "ノートPCでは、どのローカルLLM環境から始めるべきですか？",
        "content": [
          "ノートPCのハードウェアではモデルサイズに限りがありますが、明確で構造化されたプロンプトを使えば、小さなモデルの出力を改善できます。小さなモデル向けの手法は[プロンプトエンジニアリングガイド](/ja/prompt-engineering)を参照してください。"
        ],
        "items": [
          "🥇 **コマンドラインで手軽に始める：** [Ollama](/ja/local-llms/how-to-install-ollama) — モデルごとにコマンド1つ、幅広いモデルに対応",
          "🥈 **初心者に最も簡単：** [LM Studio](/ja/local-llms/how-to-install-lm-studio) — GUIでターミナル不要",
          "🥉 **低RAM（8 GB）：** Llama 3.2 3B（Q4_K_M）",
          "⚡ **16 GBでより高品質に：** Qwen3 8B（Q4_K_M。速度に余裕があればQ5_K_M）",
          "💡 **迷ったら：** Ollama + Llama 3.2 3B Q4_K_Mから始める"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple SiliconとWindowsノートPC：ローカルLLMに向くのはどちら？",
        "content": [
          "**Apple SiliconのMacBookは、ユニファイドメモリによってGPUがメモリ全体に高帯域でアクセスできるため、ローカルLLMに適した選択肢です。** 速度を決めるのはメモリ帯域で、AppleはM3を100 GB/s、M5を153 GB/s、M5 Proを307 GB/s、M5 Maxを460または614 GB/s（GPUコア数による）と公表しています。2026年3月3日に発表されたM5 ProおよびM5 Max搭載のMacBook Proは、最大64 GBおよび128 GBのユニファイドメモリを搭載できます。",
          "NVIDIAの単体GPUを搭載したWindowsノートPCは、モデルがVRAMに収まれば、より高速になることがあります。RTX 4060 ノートPC用GPUは、128ビットバスのGDDR6を8 GB搭載しています（NVIDIA）。16 Gbps（第三者のスペック）では約256 GB/sとなり、Qwen3 8B（5.2 GB）の上限は約49 tok/sです。その代わり、消費電力と発熱は大きくなります。",
          "Intel Iris XeまたはAMD Radeonの内蔵グラフィックスのみのWindowsノートPCは、システムRAMの帯域に制約されます。Ollamaのドキュメントによると、バックエンドがインストールされていればVulkan GPUサポートは既定で有効ですが、Intelの内蔵グラフィックスはサポート表に記載されていません。そのため、`ollama ps` のPROCESSOR列で確認してください。内蔵GPUは同じRAMを共有するため、効果は通常わずかです。",
          "**内蔵グラフィックス（Intel Iris Xe / AMD Radeon）に向くモデル：** RAM 16 GBなら、速度重視でQ4_K_Mの3B–4Bモデル（Llama 3.2 3B、デュアルチャネル RAMで推定18–30 tok/s）、品質重視でQwen3 8B（推定8–15 tok/s）を選びます。RAMに余裕を持って収まるモデルを優先してください。低スペックPCの手順は[低スペックPC向け最速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs)を参照してください。",
          "表の算出方法：各推定値は、上限（帯域 ÷ Qwen3 8Bのファイル5.2 GB）の約70–90%です。PromptQuorumの推定値で、実測ではありません。"
        ],
        "rows": [
          {
            "ノートPCの種類": "Apple M3、16 GB",
            "メモリ帯域": "100 GB/s",
            "Qwen3 8Bの推定tok/s": "13–17",
            "実用上の最大モデル": "約9B（14Bはぎりぎり）"
          },
          {
            "ノートPCの種類": "Apple M5、16 GB",
            "メモリ帯域": "153 GB/s",
            "Qwen3 8Bの推定tok/s": "21–26",
            "実用上の最大モデル": "約9B（14Bはぎりぎり）"
          },
          {
            "ノートPCの種類": "Apple M5 Pro",
            "メモリ帯域": "307 GB/s",
            "Qwen3 8Bの推定tok/s": "41–53",
            "実用上の最大モデル": "メモリ容量が上限（最大64 GB）"
          },
          {
            "ノートPCの種類": "Apple M5 Max",
            "メモリ帯域": "460–614 GB/s",
            "Qwen3 8Bの推定tok/s": "62–106",
            "実用上の最大モデル": "メモリ容量が上限（最大128 GB）"
          },
          {
            "ノートPCの種類": "RTX 4060 ノートPC（VRAM 8 GB）",
            "メモリ帯域": "約256 GB/s",
            "Qwen3 8Bの推定tok/s": "34–44",
            "実用上の最大モデル": "VRAM内で約8B"
          },
          {
            "ノートPCの種類": "デュアルチャネル DDR5-5600のノートPC",
            "メモリ帯域": "89.6 GB/s",
            "Qwen3 8Bの推定tok/s": "12–15",
            "実用上の最大モデル": "約9B（16 GB RAM）"
          },
          {
            "ノートPCの種類": "シングルチャネル DDR4-3200のノートPC",
            "メモリ帯域": "25.6 GB/s",
            "Qwen3 8Bの推定tok/s": "3–4",
            "実用上の最大モデル": "3B–4Bを推奨"
          }
        ],
        "columns": [
          "ノートPCの種類",
          "メモリ帯域",
          "Qwen3 8Bの推定tok/s",
          "実用上の最大モデル"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "ローカルLLMはノートPCで十分ですか？デスクトップと比べると？",
        "content": [
          "**ノートPCでも3B–14Bのモデルは十分に動かせますが、デスクトップは冷却性能が高く、メモリ帯域がはるかに広い専用GPUを使えるため、さらに大きなモデルに対応できます。** デスクトップ版RTX 4090はVRAM 24 GB、帯域1,008 GB/s（NVIDIA）で、Gemma 4 31B（Ollamaで19–20 GB）など、約20 GBまでのモデルファイルをVRAMに載せられます。Q4の70Bモデルは、Ollama上で43 GBのファイル（llama3.3:70b）となり、24 GBには収まらず、はるかに低速なシステムRAMに分割して載せる必要があります。",
          "ノートPCは持ち運びと試用に、デスクトップは大型モデル（14B以上）、継続的な負荷、本番の推論に使いましょう。プラットフォーム選びに迷う場合は、コストと性能を詳しく比べた[ローカルLLM向けノートPCとデスクトップの購入ガイド](/ja/local-llms/laptop-vs-desktop-local-llm)を参照してください。"
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "ノートPCのサーマルスロットリングにはどう対処しますか？",
        "content": [
          "**サーマルスロットリングとは、CPUやGPUが温度の上限に達し、冷却のためにクロック周波数を下げる現象です。** ローカル推論は負荷が続く処理なので、薄型のノートPCでは一定時間後に遅くなることがあります。どの程度、どれくらい早く遅くなるかは、冷却設計しだいです。実際の速度は、`ollama run <model> --verbose` で10分間にわたって確認してください。"
        ],
        "items": [
          "**通気スペースのあるノートPCスタンドを使う** -- 本体を持ち上げると排気の流れが良くなり、スロットリングを遅らせられる場合があります。",
          "**低電力モードを試す** -- トークン生成の速度はクロックよりメモリ帯域で決まるため、バランスまたは低電力プラン（macOSでは低電力モード）で発熱を抑えられ、速度の低下も思ったより小さい場合があります。お使いのマシンで試してください。",
          "**生成の長さとコンテキストを制限する** -- 長いタスクは短いプロンプトに分け、非常に長い応答の再生成は避けます。",
          "**Q8_0ではなくQ4_K_Mを使う** -- ファイルが約1.7倍小さく（Llama 3.1 8Bで4.58 GiB対7.95 GiB）、トークンごとに読み込むデータが減るため、チップに負荷がかかる時間が短くなります。"
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "ローカルLLMの実行でバッテリーはどれくらい減りますか？",
        "content": [
          "**ローカル推論中のバッテリー消費は大きくなります。生成のあいだ、CPUやGPUが高負荷で動き続けるためです。** 駆動時間（時間）は、おおよそバッテリー容量（Wh）÷ 平均消費電力（W）で決まります。60 Whのバッテリーなら、20 Wで約3時間、30 Wで約2時間です。これはあくまで例示的な計算で、実測ではありません。実際の消費電力は、ノートPC、モデル、電源モードによって変わります。",
          "公称のバッテリー駆動時間は、推論時の駆動時間を表すものではありません。14インチMacBook Pro（M5、バッテリー72.4 Wh）でAppleが公表している「ワイヤレスWeb閲覧で最大16時間」は軽い作業の値であり、生成を続けた場合の値ではありません。",
          "長時間使うときは電源につなぎましょう。バッテリーを節約したいなら、小さなモデルを選び（3Bのファイルは8Bの半分未満なので、応答が早く終わります）、コンテキストを短くします。"
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "ノートPCではどの量子化レベルを選ぶべきですか？",
        "content": "[量子化](/ja/local-llms/llm-quantization-explained)はモデルの精度を下げて、必要なRAMと帯域を減らす手法です。ノートPCでは、Q4_K_Mが通常の既定値になります。下の表のサイズは、llama.cpp quantize READMEにあるLlama 3.1 8B（FP16で14.96 GiB）のものです。他のモデルも同様の比率で変わります。",
        "rows": [
          {
            "量子化": "Q2_K",
            "FP16比のサイズ": "約20%（2.95 GiB）",
            "品質低下": "大きい -- 劣化がはっきり分かる",
            "用途": "他に収まらない場合のみ"
          },
          {
            "量子化": "Q3_K_S",
            "FP16比のサイズ": "約23%（3.41 GiB）",
            "品質低下": "中程度",
            "用途": "大きめのモデルをRAMに押し込みたいとき"
          },
          {
            "量子化": "Q4_K_M",
            "FP16比のサイズ": "約31%（4.58 GiB）",
            "品質低下": "小さい -- 一般的な既定値",
            "用途": "ほとんどのノートPC、バランスが良い"
          },
          {
            "量子化": "Q5_K_M",
            "FP16比のサイズ": "約36%（5.33 GiB）",
            "品質低下": "わずか",
            "用途": "速度に余裕がある16 GBノートPC"
          },
          {
            "量子化": "Q8_0",
            "FP16比のサイズ": "約53%（7.95 GiB）",
            "品質低下": "ごくわずか",
            "用途": "RAMに余裕があり、速度を重視しないとき"
          }
        ],
        "columns": [
          "量子化",
          "FP16比のサイズ",
          "品質低下",
          "用途"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "ノートPCでローカルLLMを動かすとき、どのプライバシー法が関係しますか？",
        "content": [
          "**欧州連合（GDPR）：** モデルを自分のノートPC上で動かすと、プロンプトや文書を端末の外に出さずに済む場合があり、個人データを第三者の処理者に送ることを避けられる可能性があります。GDPR、EU AI Actなどの義務が適用されるかどうかは、システムを誰が何の目的で運用するかによって決まります。本ガイドは法的助言ではなく、コンプライアンスは推論をどこで実行するかではなく、構成全体で決まります。",
          "**ドイツ：** ドイツの事業者にとって、文書を端末内にとどめることはデータ保護上の検討を簡素化できますが、ローカル構成が義務を満たすかどうか（例えば機密性の高い顧客データの場合）は、個別に判断されます。データ保護責任者に相談してください。",
          "**日本（個人情報保護法）：** 日本の個人情報の保護に関する法律は、個人データの国外移転を規制しています。ノートPC上で推論を実行すれば、プロンプトを海外のAPIに送らずに済み、移転に関する検討を簡素化できる場合があります。ただし、法的な評価の代わりにはなりません。",
          "**米国：** 連邦レベルの包括的なAIデータ法はなく、HIPAA（医療）、FERPA（教育）などの分野別ルールや州のプライバシー法が、用途に応じて適用されます。データをローカル端末にとどめれば、データを扱う第三者を減らせる場合がありますが、端末とデータの保護の責任は引き続きあなたにあります。"
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "ノートPCでのローカルLLMに関するよくある質問",
        "faqs": [
          {
            "q": "RAM 16 GBのIntel Iris Xeに向くOllamaモデルは？",
            "a": "Intel Iris Xeグラフィックスで16 GB RAMのノートPCでは、速度はシステムRAMの帯域に制約されます。OllamaがiGPUを使うかどうかはドライバーとバックエンドの対応しだいで（`ollama ps` のPROCESSOR列で確認）、iGPUは同じRAMを共有するため、効果は通常わずかです。速度重視なら、Q4_K_Mの3B–4Bモデルとして、`ollama run llama3.2:3b` でLlama 3.2 3B（デュアルチャネル RAMで推定18–30 tok/s）を、品質重視なら `ollama run qwen3:8b` でQwen3 8B（推定8–15 tok/s）を選びます。速度はPromptQuorumの推定値で、実測ではありません。"
          },
          {
            "q": "ノートPCでローカルにRAGを実行できますか？",
            "a": "はい。ノートPCのRAG構成は、小さな埋め込みモデル、ローカルのベクトルストア、チャットモデルの組み合わせです。埋め込みモデルは小さい（nomic-embed-textはOllamaで274 MB）ので、RAMの制約になるのはチャットモデルです。8 GBのノートPCなら3Bのチャットモデルと検索を併用でき、16 GBなら8Bモデルを動かす余裕があります。RAMの内訳は、前述の[ノートPCでのRAGのセクション](#rag-laptop)を参照してください。"
          },
          {
            "q": "ノートPC向けのCPUのみで動くローカルLLMでおすすめは？",
            "a": "CPUのみのガイドで比較したモデルのうち、総合力で選ぶならPhi-4 Mini（3.8B、ファイル2.5 GB）で、デュアルチャネル RAMで推定15–25 tok/sです。Llama 3.2 3B（ファイル2.0 GB）はファイルが最小で、推定18–30 tok/sです。いずれもQ4_K_Mです。比較の全体とOllamaのコマンドは、[CPUのみで動くおすすめローカルLLM 2026](/ja/local-llms/best-cpu-only-llm)を参照してください。"
          },
          {
            "q": "ローカルLLMを動かし続けると、ノートPCが傷みますか？",
            "a": "状態の良いノートPCで、すぐに故障することは想定されません。チップは熱くなるとクロック周波数を下げるため、推論を続けると本体は傷むのではなく遅くなります。ただし、高温が続くとファンやバッテリーは時間とともに消耗するため、スタンドや冷却パッドを使い、通気口をふさがず、適度に休ませてください。熱とバッテリーの扱いは、メーカーの案内に従ってください。"
          },
          {
            "q": "RAM 4 GBのノートPCでローカルLLMを動かせますか？",
            "a": "ぎりぎりです。Qwen3 1.7B（ファイル1.4 GB）やLlama 3.2 1B（ファイル1.3 GB）のような小さなモデルなら収まりますが、OSが2–3 GBを使うため、合計4 GBではスワップが発生しやすく、生成が大きく遅くなります。快適に使える現実的な下限は8 GBです。[低スペックPC向け最速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs)を参照してください。"
          },
          {
            "q": "ローカルLLMを動かすのに、ノートPCに専用GPUは必要ですか？",
            "a": "いいえ。Ollama、LM Studio、GPT4AllはCPUのみでも動作します。メモリ帯域の広いGPUがあれば生成は速くなりますが、3B–4Bモデルなら、デュアルチャネル RAMのCPUで推定15–30 tok/sと実用的です。CPUで使いやすいモデルは、[初心者向けおすすめローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models)を参照してください。"
          },
          {
            "q": "8 GBのMacBookで動かせる最速のローカルLLMは？",
            "a": "このガイドのモデルでは、Q4_K_MのLlama 3.2 3B（ファイル2.0 GB）が、8 GBのMacBookで最も実用的な最速の選択肢です。M2またはM3（Appleによればどちらも100 GB/s）では、帯域の上限は約50 tok/sで、PromptQuorumの推定値は35–45 tok/sです。8Bのファイル（5.2 GB）は、macOSやアプリにもメモリが必要なため、8 GBではぎりぎりです。"
          },
          {
            "q": "LLMの推論中に、ノートPCのサーマルスロットリングを抑えるには？",
            "a": "4つの手順があります。(1) 通気スペースのあるスタンドで本体を持ち上げる、(2) 生成の速度はクロックよりメモリ帯域で決まるため、バランスまたは低電力モードを試す、(3) 生成の長さとコンテキストを制限する、(4) Q8_0ではなくQ4_K_Mを使い、トークンごとに読み込むデータを減らす。速度は `ollama run <model> --verbose` で10分間にわたって確認してください。"
          },
          {
            "q": "ChromebookでローカルLLMを動かせますか？",
            "a": "Linux（Crostini）を有効にしたChromebookで、小さなモデルに限られます。多くのChromebookはRAMが4–8 GBでメモリ帯域も控えめなため、Q4_K_Mの1B–3Bモデルが現実的な上限で、速度は低くなります。Linuxに対応しないChromebookではOllamaを実行できません。"
          },
          {
            "q": "ローカルLLMでは、Apple SiliconはNVIDIAのノートPC用GPUより優れていますか？",
            "a": "メモリしだいです。速度はメモリ帯域と容量に左右されます。M5（153 GB/s）搭載の16 GB MacBookでは、Qwen3 8Bの上限は約29 tok/sです。一方、RTX 4060 ノートPC用GPU（約256 GB/s、VRAM 8 GB）の上限は約49 tok/sですが、8 GBに収まるモデルしか載せられません。メモリの多いM5 Pro（307 GB/s）やM5 Max（460–614 GB/s）なら、より大きなモデルを高速なメモリに載せられます。消費電力は機種によって異なるため、お使いのノートPCで確認してください。"
          },
          {
            "q": "モデルがノートPCのRAMに対して大きすぎるとどうなりますか？",
            "a": "OSがディスクへのスワップを始めるか、モデルの読み込みに失敗し、ファンが全開で回るなか、生成が極端に遅くなることがあります。対処は、小さなモデルにする、量子化レベルを下げる（Q8_0ではなくQ4_K_M）、またはコンテキストを短くする（`OLLAMA_CONTEXT_LENGTH`、既定は4096）ことです。"
          },
          {
            "q": "ローカルLLMを動かすと、ノートPCのバッテリーはどれくらい持ちますか？",
            "a": "駆動時間は、おおよそバッテリー容量（Wh）÷ 平均消費電力（W）です。60 Whのバッテリーなら、20 Wで約3時間、30 Wで約2時間です（例示的な計算で、実測ではありません）。実際の消費電力は、ノートPC、モデル、電源モードによって変わります。1日中使うなら、電源につないでください。"
          },
          {
            "q": "ノートPCでローカルLLMを動かすのに、インターネット接続は必要ですか？",
            "a": "いいえ。モデルのダウンロード時はインターネットが必要ですが、その後の推論は完全にオフラインで動きます。モデルはノートPCのCPUまたはGPUだけで動作します。そのため、出張先、セキュアな環境、接続が不安定な場所でもローカルLLMを使えます。"
          },
          {
            "q": "RAM 8 GBでローカルLLMを動かせますか？",
            "a": "はい。RAM 8 GBのノートPCでは、Q4_K_Mの3B–4Bモデル（ファイル2.0–2.5 GB）が、デュアルチャネル RAMで推定15–30 tok/s、Apple M2またはM3で推定28–45 tok/sで動きます。7B–8Bモデル（ファイル4.4–5.2 GB）は、8 GBではぎりぎりです。"
          },
          {
            "q": "ローカルLLMに最速のノートPCは？",
            "a": "ローカルLLMで重要なスペックは、メモリ帯域と十分なメモリ容量です。Appleは、M5 Proを307 GB/s（最大64 GB）、M5 Maxを460または614 GB/s（最大128 GB）と公表しています。Qwen3 8BのPromptQuorumの推定値は、M5 Proで41–53 tok/s、M5 Maxで62–106 tok/sです。Windowsでは、モデルをVRAMに載せられるNVIDIA GPU搭載のノートPCが高い上限を持ちます。例えば、VRAM 8 GBのRTX 4060 ノートPC用GPUは約256 GB/sです。"
          },
          {
            "q": "CPUでのローカルLLMはどれくらい遅いですか？",
            "a": "速度は最大でもメモリ帯域 ÷ モデルのファイルサイズです。デュアルチャネル DDR4/DDR5では、Q4_K_Mの3B–4Bモデルが推定15–30 tok/s、Qwen3 8Bが推定8–15 tok/sで、シングルチャネル RAMではその半分になります。読みながら使える程度に遅く、チャットや要約には十分な速さです。Apple Siliconはユニファイドメモリの帯域が広いため、Qwen3 8Bで推定13–26 tok/s（M3〜M5）に達します。"
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "出典",
        "items": [
          "**Apple MacBook Pro 技術仕様** -- M5（153 GB/s）、M5 Pro（307 GB/s）、M5 Max（460および614 GB/s）のメモリ帯域と、公称のバッテリー駆動時間。[apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Apple MacBook Air（15インチ、M3、2024）技術仕様** -- M3のメモリ帯域は100 GB/s。[support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom：M2** -- 100 GB/sのユニファイドメモリ帯域。[apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom：M5 ProおよびM5 Max搭載のMacBook Pro（2026年3月3日）** -- 最大64 GBおよび128 GBのユニファイドメモリ。[apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**NVIDIA GeForce ノートPC比較** -- RTX 4060 ノートPC用GPU：GDDR6 8 GB、128ビットバス。[nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck：RTX 4060 ノートPC用GPU** -- メモリ速度16 Gbps（第三者情報。約256 GB/sの算出根拠）。[notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**NVIDIA GeForce RTX 4090 仕様** -- VRAM 24 GB、1,008 GB/s。[nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Ollamaライブラリ** -- ファイルサイズは2026-10-23に確認：[llama3.2](https://ollama.com/library/llama3.2)、[phi4-mini](https://ollama.com/library/phi4-mini)、[qwen3](https://ollama.com/library/qwen3)、[qwen3.5](https://ollama.com/library/qwen3.5)、[llama3.1](https://ollama.com/library/llama3.1)、[llama3.3](https://ollama.com/library/llama3.3)、[gemma4](https://ollama.com/library/gemma4)。",
          "**Ollama FAQ** -- 既定のコンテキスト長4096、OLLAMA_CONTEXT_LENGTH、KVキャッシュのタイプ、keep-alive、`ollama ps`。[docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Ollama GPUドキュメント** -- Apple SiliconのMetal、Vulkan、対応GPU。[docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**llama.cpp quantize README** -- Llama 3.1 8Bの量子化タイプ別ファイルサイズ。[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLXフレームワーク** -- Apple Silicon搭載MacのGPU高速化。[github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- システム要件、GPU互換性、ローカル推論のセットアップ。[lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "ノートPCでローカルLLMを動かすときのよくある間違いは？",
        "items": [
          "**使えるRAMに対して大きすぎるモデルを動かす** → システムがディスクへスワップし、生成が大きく遅くなります。小さなモデルか、低めの量子化を選んでください。",
          "**サーマルスロットリングを無視する** → チップが温度の上限に達すると、持続的な速度が落ちることがあります。`ollama run <model> --verbose` で10分後の速度を確認してください。",
          "**Q4_K_Mではなく、Q8_0を使う** → ファイルが約1.7倍大きく（Llama 3.1 8Bで4.58 GiB対7.95 GiB）、より多くのRAMが必要で、帯域に制約のあるノートPCでは生成が遅くなります。得られる品質向上はわずかです。",
          "**RAMスティック1枚で動かす** → シングルチャネルのメモリは、ピーク帯域と速度の上限を半分にします。ノートPCが対応していれば、同じ仕様の2枚を使ってください。",
          "**LM StudioでGPUオフロードを切ったままにする** → モデルがGPUではなくCPUで動きます。モデルがGPUメモリに収まるなら、GPUオフロードの設定を上げてください。",
          "**既定のコンテキストウィンドウのまま使う** → Ollamaの既定は4096トークンのため、複数ページの文書は切り詰められます。`OLLAMA_CONTEXT_LENGTH=8192` または `/set parameter num_ctx 8192` で引き上げられますが、メモリ使用量も増えます。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[初心者向けおすすめローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) -- ノートPC向けに最適化された小型モデル",
          "[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- インストールガイド",
          "[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio) -- GUIベースのインストーラー",
          "[ローカルLLM環境のトラブルシューティング](/ja/local-llms/troubleshooting-local-llm-setup) -- 性能とエラーの対処法",
          "[LLM量子化の解説](/ja/local-llms/llm-quantization-explained) -- Q4_K_M、Q8_0、Q5_K_Mを詳しく比較",
          "[4 GB未満の小型ローカルLLMモデル](/ja/local-llms/small-local-llm-models) -- 8 GBノートPC向けの3Bモデル",
          "[ローカルLLM向けノートPCとデスクトップ 2026](/ja/local-llms/laptop-vs-desktop-local-llm) -- 購入ガイド：性能比較、コスト分析、どのプラットフォームを選ぶか。",
          "[MacでのMLX・Ollama・llama.cpp比較 2026](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Apple Silicon向けフレームワーク比較：速度、セットアップ時間、エコシステム上のトレードオフ。",
          "[70Bモデルをローカルで動かす最安の方法](/ja/prompt-bites/cheapest-way-to-run-70b-model-locally) -- ノートPCで70Bを扱えるのはいつか：M3 MaxでのQ3_K_SとCPUオフロードの比較。",
          "[500ドル以下のLLM推論向けおすすめGPU（2026）](/ja/local-llms/best-gpu-for-llm-inference-under-500-2026) -- MacBookとWindowsノートPC向けのeGPUによる強化手段。",
          "[CPUのみで動くおすすめローカルLLM 2026](/ja/local-llms/best-cpu-only-llm) -- GPUのないマシン向け、モデルファイルサイズ別の推定tok/s。",
          "[低スペックPC向け最速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs) -- RAM 4–16 GB、CPUのみまたは内蔵GPU向けのおすすめ。"
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "ノートPCでローカルLLM：8GB・16GB・Apple Siliconで動くモデル（2026）",
      "description": "RAM 8 GBまたは16 GB、もしくはApple SiliconのノートPCでローカルLLMを動かす方法を解説。モデルの選び方（Llama 3.2 3B、Phi-4-mini、Qwen3 8B）、メモリ帯域から求めた速度の推定、発熱、バッテリー、Q4_K_M量子化を扱います。",
      "url": "https://www.promptquorum.com/ja/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Organization",
        "name": "PromptQuorum"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "ノートPCのローカルLLM"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Q4_K_M量子化"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "サーマルスロットリング"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "ja"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "ノートPC向けおすすめローカルLLMモデル 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "3Bモデル、Ollamaのファイルは2.0 GB。デュアルチャネル RAMで推定18–30 tok/s（PromptQuorumの推定）。この中で最小のファイルで、8 GBノートPCに向きます。"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "3.8Bモデル、Ollamaのファイルは2.5 GB。デュアルチャネル RAMで推定15–25 tok/s（PromptQuorumの推定）。8 GBノートPCでの推論とコーディング向け。"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "8Bモデル、Ollamaのファイルは5.2 GB。デュアルチャネル RAMで推定8–15 tok/s（PromptQuorumの推定）。16 GBノートPCでの多言語とコーディング向け。"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "8Bモデル、Ollamaのファイルは4.9 GB。デュアルチャネル RAMで推定8–14 tok/s（PromptQuorumの推定）。16 GBノートPCでの一般用途向け。"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "9Bモデル、Ollamaのファイルは6.6 GB。デュアルチャネル RAMで推定6–12 tok/s（PromptQuorumの推定）。画像入力に対応する新世代で、16 GBノートPC向け。"
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "RAM 16 GBのIntel Iris Xeに向くOllamaモデルは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intel Iris Xeグラフィックスで16 GB RAMのノートPCでは、速度はシステムRAMの帯域に制約されます。OllamaがiGPUを使うかどうかはドライバーとバックエンドの対応しだいで（`ollama ps` のPROCESSOR列で確認）、iGPUは同じRAMを共有するため、効果は通常わずかです。速度重視なら、Q4_K_Mの3B–4Bモデルとして、`ollama run llama3.2:3b` でLlama 3.2 3B（デュアルチャネル RAMで推定18–30 tok/s）を、品質重視なら `ollama run qwen3:8b` でQwen3 8B（推定8–15 tok/s）を選びます。速度はPromptQuorumの推定値で、実測ではありません。"
          }
        },
        {
          "@type": "Question",
          "name": "ノートPCでローカルにRAGを実行できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。ノートPCのRAG構成は、小さな埋め込みモデル、ローカルのベクトルストア、チャットモデルの組み合わせです。埋め込みモデルは小さい（nomic-embed-textはOllamaで274 MB）ので、RAMの制約になるのはチャットモデルです。8 GBのノートPCなら3Bのチャットモデルと検索を併用でき、16 GBなら8Bモデルを動かす余裕があります。RAMの内訳は、前述の[ノートPCでのRAGのセクション](#rag-laptop)を参照してください。"
          }
        },
        {
          "@type": "Question",
          "name": "ノートPC向けのCPUのみで動くローカルLLMでおすすめは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CPUのみのガイドで比較したモデルのうち、総合力で選ぶならPhi-4 Mini（3.8B、ファイル2.5 GB）で、デュアルチャネル RAMで推定15–25 tok/sです。Llama 3.2 3B（ファイル2.0 GB）はファイルが最小で、推定18–30 tok/sです。いずれもQ4_K_Mです。比較の全体とOllamaのコマンドは、[CPUのみで動くおすすめローカルLLM 2026](/ja/local-llms/best-cpu-only-llm)を参照してください。"
          }
        },
        {
          "@type": "Question",
          "name": "ローカルLLMを動かし続けると、ノートPCが傷みますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "状態の良いノートPCで、すぐに故障することは想定されません。チップは熱くなるとクロック周波数を下げるため、推論を続けると本体は傷むのではなく遅くなります。ただし、高温が続くとファンやバッテリーは時間とともに消耗するため、スタンドや冷却パッドを使い、通気口をふさがず、適度に休ませてください。熱とバッテリーの扱いは、メーカーの案内に従ってください。"
          }
        },
        {
          "@type": "Question",
          "name": "RAM 4 GBのノートPCでローカルLLMを動かせますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ぎりぎりです。Qwen3 1.7B（ファイル1.4 GB）やLlama 3.2 1B（ファイル1.3 GB）のような小さなモデルなら収まりますが、OSが2–3 GBを使うため、合計4 GBではスワップが発生しやすく、生成が大きく遅くなります。快適に使える現実的な下限は8 GBです。[低スペックPC向け最速ローカルLLM](/ja/local-llms/fastest-local-llms-low-end-pcs)を参照してください。"
          }
        },
        {
          "@type": "Question",
          "name": "ローカルLLMを動かすのに、ノートPCに専用GPUは必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "いいえ。Ollama、LM Studio、GPT4AllはCPUのみでも動作します。メモリ帯域の広いGPUがあれば生成は速くなりますが、3B–4Bモデルなら、デュアルチャネル RAMのCPUで推定15–30 tok/sと実用的です。CPUで使いやすいモデルは、[初心者向けおすすめローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models)を参照してください。"
          }
        },
        {
          "@type": "Question",
          "name": "8 GBのMacBookで動かせる最速のローカルLLMは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "このガイドのモデルでは、Q4_K_MのLlama 3.2 3B（ファイル2.0 GB）が、8 GBのMacBookで最も実用的な最速の選択肢です。M2またはM3（Appleによればどちらも100 GB/s）では、帯域の上限は約50 tok/sで、PromptQuorumの推定値は35–45 tok/sです。8Bのファイル（5.2 GB）は、macOSやアプリにもメモリが必要なため、8 GBではぎりぎりです。"
          }
        },
        {
          "@type": "Question",
          "name": "LLMの推論中に、ノートPCのサーマルスロットリングを抑えるには？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4つの手順があります。(1) 通気スペースのあるスタンドで本体を持ち上げる、(2) 生成の速度はクロックよりメモリ帯域で決まるため、バランスまたは低電力モードを試す、(3) 生成の長さとコンテキストを制限する、(4) Q8_0ではなくQ4_K_Mを使い、トークンごとに読み込むデータを減らす。速度は `ollama run <model> --verbose` で10分間にわたって確認してください。"
          }
        },
        {
          "@type": "Question",
          "name": "ChromebookでローカルLLMを動かせますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linux（Crostini）を有効にしたChromebookで、小さなモデルに限られます。多くのChromebookはRAMが4–8 GBでメモリ帯域も控えめなため、Q4_K_Mの1B–3Bモデルが現実的な上限で、速度は低くなります。Linuxに対応しないChromebookではOllamaを実行できません。"
          }
        },
        {
          "@type": "Question",
          "name": "ローカルLLMでは、Apple SiliconはNVIDIAのノートPC用GPUより優れていますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "メモリしだいです。速度はメモリ帯域と容量に左右されます。M5（153 GB/s）搭載の16 GB MacBookでは、Qwen3 8Bの上限は約29 tok/sです。一方、RTX 4060 ノートPC用GPU（約256 GB/s、VRAM 8 GB）の上限は約49 tok/sですが、8 GBに収まるモデルしか載せられません。メモリの多いM5 Pro（307 GB/s）やM5 Max（460–614 GB/s）なら、より大きなモデルを高速なメモリに載せられます。消費電力は機種によって異なるため、お使いのノートPCで確認してください。"
          }
        },
        {
          "@type": "Question",
          "name": "モデルがノートPCのRAMに対して大きすぎるとどうなりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OSがディスクへのスワップを始めるか、モデルの読み込みに失敗し、ファンが全開で回るなか、生成が極端に遅くなることがあります。対処は、小さなモデルにする、量子化レベルを下げる（Q8_0ではなくQ4_K_M）、またはコンテキストを短くする（`OLLAMA_CONTEXT_LENGTH`、既定は4096）ことです。"
          }
        },
        {
          "@type": "Question",
          "name": "ローカルLLMを動かすと、ノートPCのバッテリーはどれくらい持ちますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "駆動時間は、おおよそバッテリー容量（Wh）÷ 平均消費電力（W）です。60 Whのバッテリーなら、20 Wで約3時間、30 Wで約2時間です（例示的な計算で、実測ではありません）。実際の消費電力は、ノートPC、モデル、電源モードによって変わります。1日中使うなら、電源につないでください。"
          }
        },
        {
          "@type": "Question",
          "name": "ノートPCでローカルLLMを動かすのに、インターネット接続は必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "いいえ。モデルのダウンロード時はインターネットが必要ですが、その後の推論は完全にオフラインで動きます。モデルはノートPCのCPUまたはGPUだけで動作します。そのため、出張先、セキュアな環境、接続が不安定な場所でもローカルLLMを使えます。"
          }
        },
        {
          "@type": "Question",
          "name": "RAM 8 GBでローカルLLMを動かせますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。RAM 8 GBのノートPCでは、Q4_K_Mの3B–4Bモデル（ファイル2.0–2.5 GB）が、デュアルチャネル RAMで推定15–30 tok/s、Apple M2またはM3で推定28–45 tok/sで動きます。7B–8Bモデル（ファイル4.4–5.2 GB）は、8 GBではぎりぎりです。"
          }
        },
        {
          "@type": "Question",
          "name": "ローカルLLMに最速のノートPCは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ローカルLLMで重要なスペックは、メモリ帯域と十分なメモリ容量です。Appleは、M5 Proを307 GB/s（最大64 GB）、M5 Maxを460または614 GB/s（最大128 GB）と公表しています。Qwen3 8BのPromptQuorumの推定値は、M5 Proで41–53 tok/s、M5 Maxで62–106 tok/sです。Windowsでは、モデルをVRAMに載せられるNVIDIA GPU搭載のノートPCが高い上限を持ちます。例えば、VRAM 8 GBのRTX 4060 ノートPC用GPUは約256 GB/sです。"
          }
        },
        {
          "@type": "Question",
          "name": "CPUでのローカルLLMはどれくらい遅いですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "速度は最大でもメモリ帯域 ÷ モデルのファイルサイズです。デュアルチャネル DDR4/DDR5では、Q4_K_Mの3B–4Bモデルが推定15–30 tok/s、Qwen3 8Bが推定8–15 tok/sで、シングルチャネル RAMではその半分になります。読みながら使える程度に遅く、チャットや要約には十分な速さです。Apple Siliconはユニファイドメモリの帯域が広いため、Qwen3 8Bで推定13–26 tok/s（M3〜M5）に達します。"
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "ローカルLLMの推論中に、ノートPCのサーマルスロットリングを抑える方法",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "通気スペースのあるノートPCスタンドを使う",
          "text": "ノートPCをスタンドで持ち上げて排気の流れを良くすると、スロットリングを遅らせられる場合があります。"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "低電力モードを試す",
          "text": "トークン生成の速度はクロックよりメモリ帯域で決まるため、バランスまたは低電力プラン（macOSでは低電力モード）で発熱を抑えられる場合があります。お使いのマシンで試してください。"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "生成の長さとコンテキストを制限する",
          "text": "長いタスクは短いプロンプトに分け、非常に長い応答を一度に再生成するのは避けます。"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Q8_0ではなくQ4_K_M量子化を使う",
          "text": "ファイルが約1.7倍小さく、トークンごとに読み込むデータが減るため、チップに負荷がかかる時間が短くなります。"
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "zh": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "笔记本电脑运行本地LLM：8GB、16GB与Apple Silicon能跑什么（2026）",
    "seoTitle": "笔记本电脑本地LLM（2026）：8GB、16GB与Mac",
    "intro": "8 GB内存的笔记本电脑就能运行本地LLM：Q4_K_M量化的3B–4B模型在双通道内存上估算可达15–30 tok/s，16 GB笔记本电脑运行8B模型估算为8–15 tok/s。Apple Silicon的统一内存带宽更高，因此更快。所有速度均为PromptQuorum根据内存带宽得出的估算，并非实验室实测；散热和电池会限制笔记本电脑能持续多久保持这一速度。",
    "metaDescription": "笔记本电脑能跑哪些本地LLM：8 GB、16 GB与Apple Silicon的模型选择，按内存带宽估算的tok/s，以及散热、电池和量化建议。",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-zh.webp",
    "twitterDescription": "笔记本电脑运行本地LLM：8 GB内存跑3B–4B模型估算15–30 tok/s，16 GB跑8B模型估算8–15 tok/s。数据按内存带宽估算，非实验室测试。",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**笔记本电脑可以运行本地LLM：8 GB内存跑3B–4B模型，估算15–30 tok/s；16 GB跑8B模型，估算8–15 tok/s。均为PromptQuorum估算，非实验室实测。**",
    "comparisonTable": {
      "columns": [
        "配置",
        "模型规模",
        "速度",
        "使用体验"
      ],
      "rows": [
        {
          "配置": "8 GB内存，CPU",
          "模型规模": "3B–4B",
          "速度": "估算 15–30 tok/s",
          "使用体验": "聊天、摘要、简单编程"
        },
        {
          "配置": "16 GB内存，CPU",
          "模型规模": "8B–9B",
          "速度": "估算 8–15 tok/s",
          "使用体验": "多任务下的日常使用"
        },
        {
          "配置": "Apple Silicon（M3至M5），16 GB",
          "模型规模": "8B",
          "速度": "估算 13–26 tok/s",
          "使用体验": "内存带宽高于常见笔记本电脑内存"
        },
        {
          "配置": "游戏本（RTX 4060，8 GB VRAM）",
          "模型规模": "8B",
          "速度": "估算 34–44 tok/s",
          "使用体验": "模型装得进VRAM时很快；发热和功耗高"
        }
      ]
    },
    "audience": "首次在消费级硬件上运行本地LLM的新手",
    "readTime": "阅读约8分钟",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "快速解答：你的笔记本电脑能运行哪种本地LLM？",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "核心要点",
        "anchor": "#key-takeaways"
      },
      {
        "label": "笔记本电脑能运行本地LLM吗？",
        "anchor": "#can-you-run"
      },
      {
        "label": "笔记本电脑能运行RAG吗？",
        "anchor": "#rag-laptop"
      },
      {
        "label": "你需要什么配置？",
        "anchor": "#use-case"
      },
      {
        "label": "哪些本地LLM模型最适合笔记本电脑？",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon与Windows笔记本电脑对比",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "本地LLM：笔记本电脑还是台式机？",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "如何应对热降频",
        "anchor": "#thermals"
      },
      {
        "label": "运行本地LLM会消耗多少电量？",
        "anchor": "#battery-drain"
      },
      {
        "label": "笔记本电脑该选哪种量化级别？",
        "anchor": "#quantization-tips"
      },
      {
        "label": "在笔记本电脑上运行本地LLM适用哪些隐私法规？",
        "anchor": "#regional-context"
      },
      {
        "label": "在笔记本电脑上运行本地LLM有哪些常见错误？",
        "anchor": "#common-mistakes"
      },
      {
        "label": "延伸阅读",
        "anchor": "#related-reading"
      },
      {
        "label": "关于在笔记本电脑上运行本地LLM的常见问题",
        "anchor": "#faq"
      },
      {
        "label": "资料来源",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "笔记本电脑可以运行本地LLM吗？",
      "answer": "可以。8 GB内存的笔记本电脑可运行Q4_K_M量化的3B–4B模型，例如Llama 3.2 3B（文件2.0 GB），在双通道内存上估算为18–30 tok/s。16 GB笔记本电脑可运行8B–9B模型，例如Qwen3 8B（文件5.2 GB），在CPU上估算为8–15 tok/s。Apple Silicon的统一内存带宽更高，因此更快：运行Qwen3 8B时，M3估算为13–17 tok/s，M5估算为21–26 tok/s。所有速度均为PromptQuorum根据内存带宽得出的估算，并非实验室实测。",
      "bullets": [
        "8 GB内存：Llama 3.2 3B（文件2.0 GB）或Phi-4-mini（2.5 GB），双通道内存上估算15–30 tok/s",
        "16 GB内存：Qwen3 8B（文件5.2 GB）或Llama 3.1 8B（4.9 GB），CPU上估算8–15 tok/s",
        "Apple Silicon：Qwen3 8B在M3（100 GB/s）上估算13–17 tok/s，在M5（153 GB/s）上估算21–26 tok/s",
        "速度规则：tok/s最高不超过内存带宽 ÷ 模型文件大小；单通道内存会使速度减半",
        "持续高负载会使时钟频率下降，并快速消耗电池：请接通电源并保证散热通风"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "快速解答：你的笔记本电脑能运行哪种本地LLM（8GB、16GB、Apple Silicon）？",
        "content": [
          "**8 GB内存的笔记本电脑就能运行本地LLM：Q4_K_M量化的3B–4B模型在双通道内存上估算可达15–30 tok/s。** 下表按硬件匹配模型。速度为PromptQuorum根据内存带宽得出的估算（tok/s ≈ 带宽 ÷ 模型文件大小），并非实验室实测。"
        ],
        "rows": [
          {
            "你的笔记本电脑": "8 GB内存，仅CPU",
            "推荐模型": "Llama 3.2 3B / Phi-4-mini，Q4_K_M",
            "估算 tok/s": "15–30",
            "硬件假设": "双通道DDR4/DDR5"
          },
          {
            "你的笔记本电脑": "16 GB内存，仅CPU",
            "推荐模型": "Qwen3 8B / Llama 3.1 8B，Q4_K_M",
            "估算 tok/s": "8–15",
            "硬件假设": "双通道DDR4/DDR5"
          },
          {
            "你的笔记本电脑": "Apple M3，16 GB",
            "推荐模型": "Qwen3 8B，Q4_K_M",
            "估算 tok/s": "13–17",
            "硬件假设": "100 GB/s统一内存"
          },
          {
            "你的笔记本电脑": "Apple M5，16 GB",
            "推荐模型": "Qwen3 8B，Q4_K_M",
            "估算 tok/s": "21–26",
            "硬件假设": "153 GB/s统一内存"
          },
          {
            "你的笔记本电脑": "Intel Iris Xe / AMD核显",
            "推荐模型": "Llama 3.2 3B / Phi-4-mini，Q4_K_M",
            "估算 tok/s": "15–30",
            "硬件假设": "共用系统内存；请查看 ollama ps"
          }
        ],
        "columns": [
          "你的笔记本电脑",
          "推荐模型",
          "估算 tok/s",
          "硬件假设"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-zh.webp",
        "imageCaption": "笔记本电脑运行本地LLM：8GB、16GB与Apple Silicon适用模型及估算tok/s"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "8 GB内存的笔记本电脑可运行3B–4B本地LLM，估算15–30 tok/s；16 GB笔记本电脑可运行8B–9B模型，估算8–15 tok/s；Apple Silicon的统一内存带宽更高，因此更快。"
          },
          {
            "type": "plain-terms",
            "text": "笔记本电脑的主要限制是内存容量和内存带宽。模型文件必须装进内存，而且每生成一个token都要读取整个文件一次，所以速度最高不超过内存带宽除以文件大小。笔记本电脑在持续高负载下还可能降速（热降频）；支架、接通电源和更小的模型都有帮助。"
          }
        ],
        "items": [
          "8 GB内存的笔记本电脑可运行Q4_K_M量化的3B–4B模型：Llama 3.2 3B（文件2.0 GB）估算18–30 tok/s，Phi-4-mini（2.5 GB）估算15–25 tok/s。",
          "16 GB内存可运行Q4_K_M量化的8B–9B模型：Qwen3 8B（文件5.2 GB）在双通道内存上估算8–15 tok/s，在Apple M3上估算13–17 tok/s，在Apple M5上估算21–26 tok/s。",
          "速度规则：每秒token数最高不超过内存带宽 ÷ 模型文件大小（这是上限，实际速度更低）。双通道DDR4-3200为51.2 GB/s，双通道DDR5-5600为89.6 GB/s，单通道会使结果减半。Apple公布的带宽为：M3 100 GB/s，M5 153 GB/s。",
          "本页所有速度均为PromptQuorum根据内存带宽得出的估算，并非实验室实测。运行 `ollama run <model> --verbose` 即可读取你自己的每秒token数。",
          "长时间使用请接通电源并保证通风：持续负载会使笔记本电脑芯片降低时钟频率，而且活跃推理比轻度使用耗电快得多。"
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "一句话概括",
        "content": [
          "借助量化模型，笔记本电脑就能运行本地LLM：Q4_K_M把文件压缩到FP16大小的约31%（Llama 3.1 8B从14.96 GiB降到4.58 GiB），质量损失较小。"
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "通俗解释",
        "content": [
          "在本地运行LLM，就是让聊天机器人在你自己的笔记本电脑上运行，而不是在服务商的服务器上：隐私性好、可离线使用，但比云服务慢。"
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "什么情况下适合在笔记本电脑上运行LLM？",
        "items": [
          "✅ **适合使用本地LLM：** 数据需要留在设备上、需要离线工作、不想按token付API费用",
          "❌ **不适合使用：** 需要最强的推理质量、需要超长上下文（100K以上token，因为KV缓存会随上下文增长）、需要快速批量处理——参见[本地LLM的局限](/zh/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "笔记本电脑能运行本地LLM吗？",
        "content": [
          "**可以——关键是选对模型规模。** 8 GB内存的笔记本电脑可运行Q4_K_M量化的3B–4B模型，在双通道内存上估算为15–30 tok/s（Llama 3.2 3B：18–30，Phi-4-mini：15–25）。16 GB的Apple Silicon笔记本电脑运行8B模型，视芯片不同估算为13–26 tok/s。这比大多数云API慢，但足以边生成边阅读。",
          "8 GB笔记本电脑的实际上限是3B–4B模型；7B–8B的文件（4.4–5.2 GB）会让操作系统和浏览器几乎没有余量。Q4_K_M量化的14B模型（Qwen3 14B：文件9.3 GB）只有在上下文较短且关闭其他应用时才能装进16 GB的机器。",
          "这里的速度是PromptQuorum根据内存带宽得出的估算，并非实验室实测。8 GB以下的档位和完整的带宽规则，请参见**[低配电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs)**；没有GPU的笔记本电脑，请参见**[最佳纯CPU本地LLM 2026](/zh/local-llms/best-cpu-only-llm)**。"
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "笔记本电脑能运行RAG（检索增强）吗？",
        "content": [
          "**可以——RAG能在笔记本电脑上运行，因为真正的限制仍是聊天模型，而不是检索层。** 笔记本电脑上的RAG方案由三部分组成：小型嵌入模型、本地向量库和你的聊天模型。",
          "嵌入模型很小：nomic-embed-text在Ollama上为274 MB（2K上下文窗口），因此几乎不增加内存压力。8 GB笔记本电脑可同时运行3B聊天模型和嵌入模型；16 GB则可在检索之外留出余量运行8B聊天模型。",
          "**2 GB内存只适用于非常小的方案。** Qwen3 0.6B（523 MB）加上nomic-embed-text，文件合计约0.8 GB，在确实有2 GB空闲内存时才装得下。普通笔记本电脑的操作系统会占用2–3 GB，交换到磁盘会让生成速度急剧下降，因此请把8 GB视为实际下限。"
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "不同用途需要什么样的笔记本电脑配置？",
        "items": [
          "**新手** — 8 GB内存，3B–4B模型，仅CPU。估算15–30 tok/s，足够聊天、摘要和简单编程。",
          "**开发者** — 16 GB内存，8B–9B模型，可选GPU。无需关闭其他应用即可多任务（CPU上估算8–15 tok/s）。",
          "**高级用户** — Pro或Max芯片的Apple Silicon，或配备8 GB以上VRAM的笔记本电脑GPU，运行8B–14B模型。Qwen3 8B的估算：M5 Pro（307 GB/s）为41–53 tok/s，RTX 4060笔记本电脑GPU（约256 GB/s）为34–44 tok/s。"
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "谁可以在笔记本电脑上运行本地LLM？",
        "items": [
          "**新手** → [LM Studio](/zh/local-llms/how-to-install-lm-studio) + 3B模型",
          "**进阶用户** → [Ollama](/zh/local-llms/how-to-install-ollama) + 8B模型",
          "**高级用户** → 14B模型配合[量化调优](/zh/local-llms/llm-quantization-explained)",
          "❌ **不适合使用笔记本电脑：** 需要实时API（请使用vLLM服务器）、需要处理大型数据集（请使用云GPU）"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "你需要多大的本地LLM模型？",
        "content": "文件大小为2026-10-23在ollama.com核对的Ollama下载大小，采用Q4_K_M级别量化（比FP16小约70%）。最低内存为文件大小加约0.5 GB开销；操作系统和浏览器还需再预留2–4 GB：",
        "rows": [
          {
            "模型": "Llama 3.2 3B",
            "文件（Ollama）": "2.0 GB",
            "最低内存": "2.5–3 GB",
            "估算 tok/s": "18–30",
            "最佳用途": "基础任务、聊天、摘要"
          },
          {
            "模型": "Phi-4-mini 3.8B",
            "文件（Ollama）": "2.5 GB",
            "最低内存": "3 GB",
            "估算 tok/s": "15–25",
            "最佳用途": "8 GB上的推理和编程"
          },
          {
            "模型": "Qwen3 8B",
            "文件（Ollama）": "5.2 GB",
            "最低内存": "6 GB",
            "估算 tok/s": "8–15",
            "最佳用途": "通用、多语言、编程"
          },
          {
            "模型": "Qwen3 14B",
            "文件（Ollama）": "9.3 GB",
            "最低内存": "10 GB",
            "估算 tok/s": "4–8",
            "最佳用途": "16 GB上的较难任务，短上下文"
          }
        ],
        "columns": [
          "模型",
          "文件（Ollama）",
          "最低内存",
          "估算 tok/s",
          "最佳用途"
        ],
        "note": "估算为PromptQuorum估算，并非实验室实测，针对双通道DDR4-3200至DDR5-5600（51.2–89.6 GB/s）的笔记本电脑；单通道内存会使其减半。Q4_K_M示例：Llama 3.1 8B在FP16下为14.96 GiB，在Q4_K_M下为4.58 GiB（llama.cpp quantize README），约小69%。→ [VRAM计算器](/zh/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "8 GB与16 GB内存的笔记本电脑：实际差别是什么？",
        "rows": [
          {
            "场景": "最大模型规模",
            "8 GB内存": "3B–4B较宽裕；7B–8B（文件4.4–5.2 GB）较紧张",
            "16 GB内存": "8B–9B较宽裕；14B（9.3 GB）需短上下文"
          },
          {
            "场景": "打开浏览器时可用的模型",
            "8 GB内存": "3B–4B（较紧张）",
            "16 GB内存": "8B–9B较宽裕"
          },
          {
            "场景": "推荐的第一个模型",
            "8 GB内存": "llama3.2:3b 或 phi4-mini",
            "16 GB内存": "qwen3:8b 或 llama3.1:8b"
          },
          {
            "场景": "同时运行的应用",
            "8 GB内存": "加载8B模型前先关闭浏览器",
            "16 GB内存": "运行8B模型时可正常多任务"
          }
        ],
        "columns": [
          "场景",
          "8 GB内存",
          "16 GB内存"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "哪些本地LLM模型最适合笔记本电脑？",
        "content": "**这些模型适合笔记本电脑的限制：文件越小，同样的内存带宽能换来越多的token每秒。** 速度为PromptQuorum针对双通道DDR4-3200至DDR5-5600（51.2–89.6 GB/s）笔记本电脑的估算，由带宽上限（带宽 ÷ Ollama文件大小）推算，并非实验室实测；单通道内存会使其减半。文件大小为2026-10-23核对的Ollama下载大小。各模型和笔记本电脑配置的VRAM需求，请参见[VRAM需求指南 →](/zh/local-llms/how-much-vram-local-llm)。安装[Ollama](/zh/local-llms/how-to-install-ollama)后，一条命令即可运行其中任何模型。没有GPU？请参见**[最佳纯CPU本地LLM 2026](/zh/local-llms/best-cpu-only-llm)**。这些是开放权重模型，请查看各模型卡片了解其许可协议。",
        "rows": [
          {
            "模型": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "文件（Ollama）": "2.0 GB",
            "最低内存": "2.5–3 GB",
            "估算 tok/s": "18–30",
            "适用场景": "8 GB笔记本电脑，快速任务"
          },
          {
            "模型": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "文件（Ollama）": "2.5 GB",
            "最低内存": "3 GB",
            "估算 tok/s": "15–25",
            "适用场景": "8 GB笔记本电脑，推理和编程"
          },
          {
            "模型": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "文件（Ollama）": "5.2 GB",
            "最低内存": "6 GB",
            "估算 tok/s": "8–15",
            "适用场景": "16 GB笔记本电脑，多语言、编程"
          },
          {
            "模型": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "文件（Ollama）": "4.9 GB",
            "最低内存": "5.5 GB",
            "估算 tok/s": "8–14",
            "适用场景": "16 GB笔记本电脑，通用"
          },
          {
            "模型": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "文件（Ollama）": "6.6 GB",
            "最低内存": "7–8 GB",
            "估算 tok/s": "6–12",
            "适用场景": "16 GB笔记本电脑，较新系列，支持图像输入"
          }
        ],
        "columns": [
          "模型",
          "文件（Ollama）",
          "最低内存",
          "估算 tok/s",
          "适用场景"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-zh.webp",
        "imageCaption": "按文件大小列出的笔记本电脑本地LLM模型及双通道内存上的估算tok/s"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "笔记本电脑上应该从哪种本地LLM方案入手？",
        "content": [
          "笔记本电脑硬件限制了模型规模，但清晰、结构化的提示词可以改善小模型的输出。适合小模型的技巧请参见[提示词工程指南](/zh/prompt-engineering)。"
        ],
        "items": [
          "🥇 **最简单的命令行入门：** [Ollama](/zh/local-llms/how-to-install-ollama) — 每个模型一条命令，支持的模型很广",
          "🥈 **最适合新手：** [LM Studio](/zh/local-llms/how-to-install-lm-studio) — 图形界面，无需终端",
          "🥉 **低内存（8 GB）：** Llama 3.2 3B（Q4_K_M）",
          "⚡ **16 GB上追求更高质量：** Qwen3 8B（Q4_K_M；速度允许时用Q5_K_M）",
          "💡 **拿不准时：** 从Ollama + Llama 3.2 3B Q4_K_M开始"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon与Windows笔记本电脑：哪个更适合本地LLM？",
        "content": [
          "**Apple Silicon MacBook是运行本地LLM的有力之选，因为统一内存让GPU能以高带宽访问整个内存池。** 速度取决于内存带宽：Apple公布的带宽为M3 100 GB/s、M5 153 GB/s、M5 Pro 307 GB/s，M5 Max为460或614 GB/s（取决于GPU核心数）。2026年3月3日发布的M5 Pro和M5 Max版MacBook Pro最高提供64 GB和128 GB统一内存。",
          "配备独立NVIDIA GPU的Windows笔记本电脑在模型装得进VRAM时可能更快。RTX 4060笔记本电脑GPU配备8 GB GDDR6、128位总线（NVIDIA）；按16 Gbps（第三方规格）计算约为256 GB/s，因此Qwen3 8B（5.2 GB）的上限接近49 tok/s。代价是功耗和发热更高。",
          "只有Intel Iris Xe或AMD Radeon核显的Windows笔记本电脑受限于系统内存带宽。Ollama文档称，安装后端时默认启用Vulkan GPU支持，且支持表中未列出Intel核显，因此请查看 `ollama ps` 的PROCESSOR一列。核显与系统共用同一块内存，所以提升通常有限。",
          "**适合核显（Intel Iris Xe / AMD Radeon）的模型：** 16 GB内存时，追求速度可选Q4_K_M量化的3B–4B模型（Llama 3.2 3B，双通道内存上估算18–30 tok/s），追求质量可选Qwen3 8B（估算8–15 tok/s）。优先选择能稳稳放进内存的模型。低配电脑的分步设置请参见[低配电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs)。",
          "表格方法：每个估算值约为上限（带宽 ÷ 5.2 GB的Qwen3 8B文件）的70–90%。它们是PromptQuorum估算，并非实验室实测。"
        ],
        "rows": [
          {
            "笔记本电脑类型": "Apple M3，16 GB",
            "内存带宽": "100 GB/s",
            "Qwen3 8B估算 tok/s": "13–17",
            "实际可用的最大模型": "约9B（14B较紧张）"
          },
          {
            "笔记本电脑类型": "Apple M5，16 GB",
            "内存带宽": "153 GB/s",
            "Qwen3 8B估算 tok/s": "21–26",
            "实际可用的最大模型": "约9B（14B较紧张）"
          },
          {
            "笔记本电脑类型": "Apple M5 Pro",
            "内存带宽": "307 GB/s",
            "Qwen3 8B估算 tok/s": "41–53",
            "实际可用的最大模型": "受内存限制（最高64 GB）"
          },
          {
            "笔记本电脑类型": "Apple M5 Max",
            "内存带宽": "460–614 GB/s",
            "Qwen3 8B估算 tok/s": "62–106",
            "实际可用的最大模型": "受内存限制（最高128 GB）"
          },
          {
            "笔记本电脑类型": "RTX 4060笔记本电脑（8 GB VRAM）",
            "内存带宽": "约256 GB/s",
            "Qwen3 8B估算 tok/s": "34–44",
            "实际可用的最大模型": "约8B（装入VRAM）"
          },
          {
            "笔记本电脑类型": "双通道DDR5-5600笔记本电脑",
            "内存带宽": "89.6 GB/s",
            "Qwen3 8B估算 tok/s": "12–15",
            "实际可用的最大模型": "约9B（16 GB内存）"
          },
          {
            "笔记本电脑类型": "单通道DDR4-3200笔记本电脑",
            "内存带宽": "25.6 GB/s",
            "Qwen3 8B估算 tok/s": "3–4",
            "实际可用的最大模型": "建议3B–4B"
          }
        ],
        "columns": [
          "笔记本电脑类型",
          "内存带宽",
          "Qwen3 8B估算 tok/s",
          "实际可用的最大模型"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "本地LLM：笔记本电脑够用，还是需要台式机？",
        "content": [
          "**笔记本电脑可以有效运行3B–14B模型，但台式机凭借更好的散热和内存带宽高得多的独立GPU，能走得更远。** 台式机RTX 4090拥有24 GB VRAM和1,008 GB/s带宽（NVIDIA），足以在VRAM中容纳约20 GB以内的模型文件，例如Gemma 4 31B（Ollama上19–20 GB）。Q4量化的70B模型在Ollama上是43 GB的文件（llama3.3:70b），装不进24 GB，必须与慢得多的系统内存拆分使用。",
          "便携和试验用笔记本电脑；大模型（14B以上）、持续工作负载或生产推理用台式机。在两种平台之间犹豫？完整的成本与性能对比请参见[本地LLM笔记本电脑与台式机选购指南](/zh/local-llms/laptop-vs-desktop-local-llm)。"
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "如何应对笔记本电脑的热降频？",
        "content": [
          "**热降频是指CPU或GPU达到温度上限后降低时钟频率来散热。** 本地推理是持续负载，所以轻薄的笔记本电脑过一段时间可能会降速；降多少、多快取决于其散热设计。用 `ollama run <model> --verbose` 检查你自己在10分钟内的速度。"
        ],
        "items": [
          "**使用留有通风空间的笔记本电脑支架** -- 垫高笔记本电脑可改善排风，有助于延迟降频。",
          "**尝试更低的电源模式** -- 生成token受内存带宽而非时钟频率限制，因此平衡或低功耗模式（macOS上为低电量模式）可减少发热，速度损失可能比你预想的小；请在自己的机器上测试。",
          "**限制生成长度和上下文** -- 把长任务拆成较短的提示词，避免重复生成很长的回复。",
          "**用Q4_K_M代替Q8_0** -- 文件约小1.7倍（Llama 3.1 8B为4.58 GiB对7.95 GiB），每个token从内存读取的数据更少，芯片承受负载的时间也更短。"
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "运行本地LLM会消耗多少电量？",
        "content": [
          "**本地推理期间电池消耗很大，因为整个生成过程中CPU或GPU都在高负载运行。** 续航小时数大致等于电池容量（瓦时）除以平均功耗：60 Wh电池在20 W下约可用3小时，在30 W下约2小时。这些只是示意性的算术，并非实测；实际功耗因笔记本电脑、模型和电源模式而异。",
          "标称续航并不代表推理场景。Apple标称14英寸搭载M5的MacBook Pro（72.4 Wh电池）无线网页浏览最长可达16小时，这针对的是轻度使用，而非持续生成。",
          "长时间使用请接通电源。想省电则选更小的模型（3B文件不到8B文件的一半，每次回复完成得更快），并缩短上下文。"
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "笔记本电脑该选哪种量化级别？",
        "content": "[量化](/zh/local-llms/llm-quantization-explained)通过降低模型精度来减少内存和带宽需求。对笔记本电脑来说，Q4_K_M是通常的默认选择。下表大小取自llama.cpp quantize README中的Llama 3.1 8B（FP16为14.96 GiB）；其他模型大致按比例变化：",
        "rows": [
          {
            "量化级别": "Q2_K",
            "相对FP16大小": "约20%（2.95 GiB）",
            "质量损失": "高 -- 退化明显",
            "适用场景": "仅在别的都装不下时使用"
          },
          {
            "量化级别": "Q3_K_S",
            "相对FP16大小": "约23%（3.41 GiB）",
            "质量损失": "中等",
            "适用场景": "把更大的模型挤进内存"
          },
          {
            "量化级别": "Q4_K_M",
            "相对FP16大小": "约31%（4.58 GiB）",
            "质量损失": "低 -- 常用默认选择",
            "适用场景": "大多数笔记本电脑，平衡较好"
          },
          {
            "量化级别": "Q5_K_M",
            "相对FP16大小": "约36%（5.33 GiB）",
            "质量损失": "较小",
            "适用场景": "速度允许时用于16 GB笔记本电脑"
          },
          {
            "量化级别": "Q8_0",
            "相对FP16大小": "约53%（7.95 GiB）",
            "质量损失": "极小",
            "适用场景": "内存有富余、速度不重要时"
          }
        ],
        "columns": [
          "量化级别",
          "相对FP16大小",
          "质量损失",
          "适用场景"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "在笔记本电脑上运行本地LLM适用哪些隐私法规？",
        "content": [
          "**欧盟（GDPR）：** 模型在你自己的笔记本电脑上运行时，提示词和文档不必离开设备，这有助于避免把个人数据发送给第三方处理者。GDPR、欧盟AI法案或其他义务是否适用，取决于谁部署系统以及用于什么目的；本指南不构成法律建议，合规取决于你的整体方案，而不是推理在哪里运行。",
          "**德国：** 对德国企业而言，把文档留在设备上可以简化数据保护方面的问题，但本地方案是否满足你的义务（例如保密的客户数据）需要逐案判断；请咨询你的数据保护官。",
          "**日本（APPI）：** 日本的《个人信息保护法》对个人数据的跨境传输有规定。在笔记本电脑上运行推理可避免把提示词发送到海外API，从而可能简化跨境传输问题；但这不能替代法律评估。",
          "**美国：** 美国没有统一的联邦AI数据法；适用的是HIPAA（医疗）、FERPA（教育）等行业规则以及各州隐私法，具体取决于用途。把数据留在本地设备上可以减少接触数据的第三方数量，但你仍须负责保护设备和数据的安全。"
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "关于在笔记本电脑上运行本地LLM的常见问题",
        "faqs": [
          {
            "q": "在16 GB内存、Intel Iris Xe的笔记本电脑上，最适合Ollama的模型有哪些？",
            "a": "在配备Intel Iris Xe显卡和16 GB内存的笔记本电脑上，速度受限于系统内存带宽。Ollama是否使用核显取决于驱动和后端支持（请查看 `ollama ps` 的PROCESSOR一列），而且核显与系统共用同一块内存，所以提升通常有限。追求速度可选Q4_K_M量化的3B–4B模型：Llama 3.2 3B（双通道内存上估算18–30 tok/s），命令为 `ollama run llama3.2:3b`；追求质量可选Qwen3 8B（估算8–15 tok/s），命令为 `ollama run qwen3:8b`。速度为PromptQuorum估算，并非实验室实测。"
          },
          {
            "q": "笔记本电脑上能在本地运行RAG吗？",
            "a": "可以。笔记本电脑上的RAG方案由小型嵌入模型、本地向量库和你的聊天模型组成。嵌入模型很小（nomic-embed-text在Ollama上为274 MB），所以聊天模型仍是内存的主要限制：8 GB笔记本电脑可运行3B聊天模型并配合检索，16 GB则可为8B模型留出空间。内存明细请参见上文的[笔记本电脑上的RAG部分](#rag-laptop)。"
          },
          {
            "q": "笔记本电脑上最好的纯CPU本地LLM是什么？",
            "a": "在纯CPU指南对比的模型中，Phi-4 Mini（3.8B，文件2.5 GB）是综合表现最好的选择，双通道内存上估算15–25 tok/s；Llama 3.2 3B（文件2.0 GB）文件最小，估算18–30 tok/s，二者均为Q4_K_M。完整对比和Ollama命令请参见[最佳纯CPU本地LLM 2026](/zh/local-llms/best-cpu-only-llm)。"
          },
          {
            "q": "长期运行本地LLM会损坏我的笔记本电脑吗？",
            "a": "状况良好的笔记本电脑预计不会立即受损：芯片发热时会降低时钟频率，所以持续推理只会让机器变慢，而不是造成损害。不过持续发热长期来看仍会磨损风扇和电池，因此请使用支架或散热垫，保持出风口通畅，并适当休息。请遵循制造商关于散热和电池保养的指引。"
          },
          {
            "q": "我能在4 GB内存的笔记本电脑上运行本地LLM吗？",
            "a": "勉强可以。Qwen3 1.7B（文件1.4 GB）或Llama 3.2 1B（文件1.3 GB）这类小模型装得下，但操作系统需要2–3 GB，所以在总共4 GB的情况下很可能触发交换，生成速度会急剧下降。想要舒适的体验，实际最低配置是8 GB。请参见[低配电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs)。"
          },
          {
            "q": "笔记本电脑需要独立GPU才能运行本地LLM吗？",
            "a": "不需要。Ollama、LM Studio和GPT4All都可以只用CPU运行。内存带宽高的GPU能加快生成，但3B–4B模型在CPU上也可用，双通道内存上估算15–30 tok/s。适合CPU的模型推荐请参见[最适合新手的本地LLM模型](/zh/local-llms/best-beginner-local-llm-models)。"
          },
          {
            "q": "8 GB的MacBook上能运行的最快本地LLM是什么？",
            "a": "在本指南的模型中，Q4_K_M量化的Llama 3.2 3B（文件2.0 GB）是8 GB MacBook上最快的实用选择。在M2或M3上（按Apple公布均为100 GB/s），带宽上限约为50 tok/s，PromptQuorum估算为35–45 tok/s。8B文件（5.2 GB）在8 GB上较紧张，因为macOS和你的应用也需要内存。"
          },
          {
            "q": "如何在LLM推理时减轻笔记本电脑的热降频？",
            "a": "四个步骤：（1）用留有通风空间的支架垫高笔记本电脑；（2）尝试平衡或低功耗模式，因为生成速度更多受内存带宽而非时钟频率限制；（3）限制生成长度和上下文；（4）用Q4_K_M代替Q8_0，让每个token读取的数据更少。用 `ollama run <model> --verbose` 检查你自己在10分钟内的速度。"
          },
          {
            "q": "我能在Chromebook上运行本地LLM吗？",
            "a": "只有启用了Linux（Crostini）的Chromebook才可以，而且只能运行小模型。大多数Chromebook只有4–8 GB内存且内存带宽有限，所以Q4_K_M量化的1B–3B模型是现实的上限，速度也会较低。不支持Linux的Chromebook无法运行Ollama。"
          },
          {
            "q": "对本地LLM来说，Apple Silicon比NVIDIA笔记本电脑GPU更好吗？",
            "a": "取决于内存。速度取决于内存带宽和容量：16 GB、搭载M5（153 GB/s）的MacBook运行Qwen3 8B的上限接近29 tok/s，而RTX 4060笔记本电脑GPU（约256 GB/s，8 GB VRAM）的上限接近49 tok/s，但只能容纳8 GB以内的模型。内存更大的M5 Pro（307 GB/s）或M5 Max（460–614 GB/s）可以把更大的模型放进高速内存。不同机型的功耗各不相同，请查看你的笔记本电脑。"
          },
          {
            "q": "模型对我的笔记本电脑内存来说太大会怎样？",
            "a": "操作系统会开始交换到磁盘，或者模型加载失败，生成速度可能慢到几乎停滞，风扇也会高速运转。解决办法是换更小的模型、更低的量化级别（用Q4_K_M代替Q8_0）或更短的上下文（`OLLAMA_CONTEXT_LENGTH`，默认4096）。"
          },
          {
            "q": "在笔记本电脑上运行本地LLM，电池能撑多久？",
            "a": "续航时间大致等于电池容量（Wh）除以平均功耗（W）。60 Wh电池在20 W下约可用3小时，在30 W下约2小时（示意性算术，并非实测）。实际功耗因笔记本电脑、模型和电源模式而异。需要全天使用时，请接通电源。"
          },
          {
            "q": "在笔记本电脑上运行本地LLM需要联网吗？",
            "a": "不需要。下载模型时需要联网，之后推理完全离线，模型完全在笔记本电脑的CPU或GPU上运行。这让本地LLM适用于出差旅行、保密环境或网络不稳定的地方。"
          },
          {
            "q": "我能在8 GB内存上运行本地LLM吗？",
            "a": "可以。8 GB笔记本电脑可运行Q4_K_M量化的3B–4B模型（文件2.0–2.5 GB），双通道内存上估算15–30 tok/s，在Apple M2或M3上估算28–45 tok/s。7B–8B模型（文件4.4–5.2 GB）在8 GB上较紧张。"
          },
          {
            "q": "运行本地LLM最快的笔记本电脑是什么？",
            "a": "对本地LLM来说，关键规格是内存带宽和足够的内存。Apple公布M5 Pro为307 GB/s（最高64 GB），M5 Max为460或614 GB/s（最高128 GB）；运行Qwen3 8B时，PromptQuorum估算M5 Pro为41–53 tok/s，M5 Max为62–106 tok/s。在Windows上，配备NVIDIA GPU且模型能装入VRAM的笔记本电脑上限很高，例如8 GB的RTX 4060笔记本电脑GPU约为256 GB/s。"
          },
          {
            "q": "本地LLM在CPU上有多慢？",
            "a": "速度最高不超过内存带宽 ÷ 模型文件大小。在双通道DDR4/DDR5上，Q4_K_M量化的3B–4B模型估算为15–30 tok/s，Qwen3 8B估算为8–15 tok/s；单通道内存会使其减半。这个速度慢到可以边生成边阅读，但足以用于聊天和摘要。Apple Silicon运行Qwen3 8B估算可达13–26 tok/s（M3至M5），因为统一内存带宽更高。"
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "**Apple MacBook Pro技术规格** -- M5（153 GB/s）、M5 Pro（307 GB/s）和M5 Max（460和614 GB/s）的内存带宽以及标称续航。[apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Apple MacBook Air（15英寸，M3，2024）技术规格** -- M3内存带宽100 GB/s。[support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple新闻稿：M2** -- 100 GB/s统一内存带宽。[apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple新闻稿：搭载M5 Pro和M5 Max的MacBook Pro（2026年3月3日）** -- 最高64 GB和128 GB统一内存。[apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**NVIDIA GeForce笔记本电脑对比** -- RTX 4060笔记本电脑GPU：8 GB GDDR6，128位总线。[nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck：RTX 4060笔记本电脑GPU** -- 16 Gbps内存速度（第三方；约256 GB/s数值的依据）。[notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**NVIDIA GeForce RTX 4090规格** -- 24 GB VRAM，1,008 GB/s。[nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Ollama模型库** -- 文件大小核对于2026-10-23：[llama3.2](https://ollama.com/library/llama3.2)、[phi4-mini](https://ollama.com/library/phi4-mini)、[qwen3](https://ollama.com/library/qwen3)、[qwen3.5](https://ollama.com/library/qwen3.5)、[llama3.1](https://ollama.com/library/llama3.1)、[llama3.3](https://ollama.com/library/llama3.3)、[gemma4](https://ollama.com/library/gemma4)。",
          "**Ollama FAQ** -- 默认上下文长度4096、OLLAMA_CONTEXT_LENGTH、KV缓存类型、keep-alive和 `ollama ps`。[docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Ollama GPU文档** -- Apple Silicon上的Metal、Vulkan及受支持的GPU。[docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**llama.cpp quantize README** -- Llama 3.1 8B各量化类型的文件大小。[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX框架** -- Apple Silicon Mac的GPU加速。[github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- 系统要求、GPU兼容性和本地推理设置。[lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "在笔记本电脑上运行本地LLM有哪些常见错误？",
        "items": [
          "**运行的模型超出可用内存** → 系统会交换到磁盘，生成速度急剧下降；请换更小的模型或更低的量化级别。",
          "**忽视热降频** → 芯片达到温度上限后，持续速度可能下降；用 `ollama run <model> --verbose` 检查10分钟后的速度。",
          "**用Q8_0代替Q4_K_M** → 文件约大1.7倍（Llama 3.1 8B为7.95 GiB对4.58 GiB），需要更多内存，在带宽受限的笔记本电脑上生成更慢，而质量提升很小。",
          "**只插一根内存条** → 单通道内存会使峰值带宽和速度上限减半；笔记本电脑允许时请使用两根相同的内存条。",
          "**在LM Studio中没有开启GPU卸载** → 模型会在CPU而不是GPU上运行；模型装得进GPU内存时，请调高GPU卸载设置。",
          "**沿用默认上下文窗口** → Ollama默认为4096个token，多页文档会被截断；可用 `OLLAMA_CONTEXT_LENGTH=8192` 或 `/set parameter num_ctx 8192` 调高，同时内存占用会增加。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "延伸阅读",
        "items": [
          "[最适合新手的本地LLM模型](/zh/local-llms/best-beginner-local-llm-models) -- 为笔记本电脑优化的小模型",
          "[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 安装指南",
          "[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio) -- 图形界面安装程序",
          "[本地LLM设置故障排查](/zh/local-llms/troubleshooting-local-llm-setup) -- 性能与错误修复",
          "[LLM量化详解](/zh/local-llms/llm-quantization-explained) -- Q4_K_M、Q8_0与Q5_K_M的深入对比",
          "[4 GB以下的小型本地LLM模型](/zh/local-llms/small-local-llm-models) -- 适合8 GB笔记本电脑的3B模型",
          "[本地LLM：笔记本电脑与台式机对比 2026](/zh/local-llms/laptop-vs-desktop-local-llm) -- 选购指南：性能对比、成本分析以及该买哪种平台。",
          "[Mac上的MLX、Ollama与llama.cpp对比 2026](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Apple Silicon框架对比：速度、设置时间和生态取舍。",
          "[在本地运行70B模型的最便宜方式](/zh/prompt-bites/cheapest-way-to-run-70b-model-locally) -- 笔记本电脑何时能处理70B：M3 Max上的Q3_K_S与CPU卸载。",
          "[500美元以内最适合LLM推理的GPU（2026）](/zh/local-llms/best-gpu-for-llm-inference-under-500-2026) -- MacBook和Windows笔记本电脑的外接显卡升级路径。",
          "[最佳纯CPU本地LLM 2026](/zh/local-llms/best-cpu-only-llm) -- 为没有GPU的机器，按模型文件大小列出的估算tok/s。",
          "[低配电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs) -- 适用于4–16 GB内存、仅CPU或核显的推荐。"
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "笔记本电脑运行本地LLM：8GB、16GB与Apple Silicon能跑什么（2026）",
      "description": "在8 GB或16 GB内存或Apple Silicon的笔记本电脑上运行本地LLM。涵盖模型选择（Llama 3.2 3B、Phi-4-mini、Qwen3 8B）、按内存带宽得出的速度估算、散热、电池以及Q4_K_M量化。",
      "url": "https://www.promptquorum.com/zh/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Organization",
        "name": "PromptQuorum"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "笔记本电脑本地LLM"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Q4_K_M量化"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "热降频"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "zh"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "2026年最适合笔记本电脑的本地LLM模型",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "3B模型，Ollama文件2.0 GB。双通道内存上估算18–30 tok/s（PromptQuorum估算）。本文中文件最小，适合8 GB笔记本电脑。"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "3.8B模型，Ollama文件2.5 GB。双通道内存上估算15–25 tok/s（PromptQuorum估算）。适合8 GB笔记本电脑上的推理和编程。"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "8B模型，Ollama文件5.2 GB。双通道内存上估算8–15 tok/s（PromptQuorum估算）。适合16 GB笔记本电脑上的多语言和编程。"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "8B模型，Ollama文件4.9 GB。双通道内存上估算8–14 tok/s（PromptQuorum估算）。适合16 GB笔记本电脑上的通用场景。"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "9B模型，Ollama文件6.6 GB。双通道内存上估算6–12 tok/s（PromptQuorum估算）。较新的系列，支持图像输入，适合16 GB笔记本电脑。"
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "在16 GB内存、Intel Iris Xe的笔记本电脑上，最适合Ollama的模型有哪些？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "在配备Intel Iris Xe显卡和16 GB内存的笔记本电脑上，速度受限于系统内存带宽。Ollama是否使用核显取决于驱动和后端支持（请查看 `ollama ps` 的PROCESSOR一列），而且核显与系统共用同一块内存，所以提升通常有限。追求速度可选Q4_K_M量化的3B–4B模型：Llama 3.2 3B（双通道内存上估算18–30 tok/s），命令为 `ollama run llama3.2:3b`；追求质量可选Qwen3 8B（估算8–15 tok/s），命令为 `ollama run qwen3:8b`。速度为PromptQuorum估算，并非实验室实测。"
          }
        },
        {
          "@type": "Question",
          "name": "笔记本电脑上能在本地运行RAG吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可以。笔记本电脑上的RAG方案由小型嵌入模型、本地向量库和你的聊天模型组成。嵌入模型很小（nomic-embed-text在Ollama上为274 MB），所以聊天模型仍是内存的主要限制：8 GB笔记本电脑可运行3B聊天模型并配合检索，16 GB则可为8B模型留出空间。内存明细请参见上文的[笔记本电脑上的RAG部分](#rag-laptop)。"
          }
        },
        {
          "@type": "Question",
          "name": "笔记本电脑上最好的纯CPU本地LLM是什么？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "在纯CPU指南对比的模型中，Phi-4 Mini（3.8B，文件2.5 GB）是综合表现最好的选择，双通道内存上估算15–25 tok/s；Llama 3.2 3B（文件2.0 GB）文件最小，估算18–30 tok/s，二者均为Q4_K_M。完整对比和Ollama命令请参见[最佳纯CPU本地LLM 2026](/zh/local-llms/best-cpu-only-llm)。"
          }
        },
        {
          "@type": "Question",
          "name": "长期运行本地LLM会损坏我的笔记本电脑吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "状况良好的笔记本电脑预计不会立即受损：芯片发热时会降低时钟频率，所以持续推理只会让机器变慢，而不是造成损害。不过持续发热长期来看仍会磨损风扇和电池，因此请使用支架或散热垫，保持出风口通畅，并适当休息。请遵循制造商关于散热和电池保养的指引。"
          }
        },
        {
          "@type": "Question",
          "name": "我能在4 GB内存的笔记本电脑上运行本地LLM吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "勉强可以。Qwen3 1.7B（文件1.4 GB）或Llama 3.2 1B（文件1.3 GB）这类小模型装得下，但操作系统需要2–3 GB，所以在总共4 GB的情况下很可能触发交换，生成速度会急剧下降。想要舒适的体验，实际最低配置是8 GB。请参见[低配电脑上最快的本地LLM](/zh/local-llms/fastest-local-llms-low-end-pcs)。"
          }
        },
        {
          "@type": "Question",
          "name": "笔记本电脑需要独立GPU才能运行本地LLM吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不需要。Ollama、LM Studio和GPT4All都可以只用CPU运行。内存带宽高的GPU能加快生成，但3B–4B模型在CPU上也可用，双通道内存上估算15–30 tok/s。适合CPU的模型推荐请参见[最适合新手的本地LLM模型](/zh/local-llms/best-beginner-local-llm-models)。"
          }
        },
        {
          "@type": "Question",
          "name": "8 GB的MacBook上能运行的最快本地LLM是什么？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "在本指南的模型中，Q4_K_M量化的Llama 3.2 3B（文件2.0 GB）是8 GB MacBook上最快的实用选择。在M2或M3上（按Apple公布均为100 GB/s），带宽上限约为50 tok/s，PromptQuorum估算为35–45 tok/s。8B文件（5.2 GB）在8 GB上较紧张，因为macOS和你的应用也需要内存。"
          }
        },
        {
          "@type": "Question",
          "name": "如何在LLM推理时减轻笔记本电脑的热降频？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "四个步骤：（1）用留有通风空间的支架垫高笔记本电脑；（2）尝试平衡或低功耗模式，因为生成速度更多受内存带宽而非时钟频率限制；（3）限制生成长度和上下文；（4）用Q4_K_M代替Q8_0，让每个token读取的数据更少。用 `ollama run <model> --verbose` 检查你自己在10分钟内的速度。"
          }
        },
        {
          "@type": "Question",
          "name": "我能在Chromebook上运行本地LLM吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "只有启用了Linux（Crostini）的Chromebook才可以，而且只能运行小模型。大多数Chromebook只有4–8 GB内存且内存带宽有限，所以Q4_K_M量化的1B–3B模型是现实的上限，速度也会较低。不支持Linux的Chromebook无法运行Ollama。"
          }
        },
        {
          "@type": "Question",
          "name": "对本地LLM来说，Apple Silicon比NVIDIA笔记本电脑GPU更好吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "取决于内存。速度取决于内存带宽和容量：16 GB、搭载M5（153 GB/s）的MacBook运行Qwen3 8B的上限接近29 tok/s，而RTX 4060笔记本电脑GPU（约256 GB/s，8 GB VRAM）的上限接近49 tok/s，但只能容纳8 GB以内的模型。内存更大的M5 Pro（307 GB/s）或M5 Max（460–614 GB/s）可以把更大的模型放进高速内存。不同机型的功耗各不相同，请查看你的笔记本电脑。"
          }
        },
        {
          "@type": "Question",
          "name": "模型对我的笔记本电脑内存来说太大会怎样？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "操作系统会开始交换到磁盘，或者模型加载失败，生成速度可能慢到几乎停滞，风扇也会高速运转。解决办法是换更小的模型、更低的量化级别（用Q4_K_M代替Q8_0）或更短的上下文（`OLLAMA_CONTEXT_LENGTH`，默认4096）。"
          }
        },
        {
          "@type": "Question",
          "name": "在笔记本电脑上运行本地LLM，电池能撑多久？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "续航时间大致等于电池容量（Wh）除以平均功耗（W）。60 Wh电池在20 W下约可用3小时，在30 W下约2小时（示意性算术，并非实测）。实际功耗因笔记本电脑、模型和电源模式而异。需要全天使用时，请接通电源。"
          }
        },
        {
          "@type": "Question",
          "name": "在笔记本电脑上运行本地LLM需要联网吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不需要。下载模型时需要联网，之后推理完全离线，模型完全在笔记本电脑的CPU或GPU上运行。这让本地LLM适用于出差旅行、保密环境或网络不稳定的地方。"
          }
        },
        {
          "@type": "Question",
          "name": "我能在8 GB内存上运行本地LLM吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可以。8 GB笔记本电脑可运行Q4_K_M量化的3B–4B模型（文件2.0–2.5 GB），双通道内存上估算15–30 tok/s，在Apple M2或M3上估算28–45 tok/s。7B–8B模型（文件4.4–5.2 GB）在8 GB上较紧张。"
          }
        },
        {
          "@type": "Question",
          "name": "运行本地LLM最快的笔记本电脑是什么？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "对本地LLM来说，关键规格是内存带宽和足够的内存。Apple公布M5 Pro为307 GB/s（最高64 GB），M5 Max为460或614 GB/s（最高128 GB）；运行Qwen3 8B时，PromptQuorum估算M5 Pro为41–53 tok/s，M5 Max为62–106 tok/s。在Windows上，配备NVIDIA GPU且模型能装入VRAM的笔记本电脑上限很高，例如8 GB的RTX 4060笔记本电脑GPU约为256 GB/s。"
          }
        },
        {
          "@type": "Question",
          "name": "本地LLM在CPU上有多慢？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "速度最高不超过内存带宽 ÷ 模型文件大小。在双通道DDR4/DDR5上，Q4_K_M量化的3B–4B模型估算为15–30 tok/s，Qwen3 8B估算为8–15 tok/s；单通道内存会使其减半。这个速度慢到可以边生成边阅读，但足以用于聊天和摘要。Apple Silicon运行Qwen3 8B估算可达13–26 tok/s（M3至M5），因为统一内存带宽更高。"
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "如何在本地LLM推理时减轻笔记本电脑的热降频",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "使用留有通风空间的笔记本电脑支架",
          "text": "用支架垫高笔记本电脑以改善排风，有助于延迟降频。"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "尝试更低的电源模式",
          "text": "生成token受内存带宽而非时钟频率限制，因此平衡或低功耗模式（macOS上为低电量模式）可减少发热。请在自己的机器上测试。"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "限制生成长度和上下文",
          "text": "把长任务拆成较短的提示词，避免一次性重复生成很长的回复。"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "用Q4_K_M量化代替Q8_0",
          "text": "文件约小1.7倍，每个token从内存读取的数据更少，芯片承受负载的时间也更短。"
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "es": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "LLM local en un portátil: qué funciona con 8 GB, 16 GB y Apple Silicon (2026)",
    "seoTitle": "LLM local en portátil (2026): 8 GB, 16 GB y Apple Silicon",
    "intro": "Puedes ejecutar un LLM local en un portátil con 8 GB de RAM: un modelo de 3B–4B en Q4_K_M funciona a unos 15–30 tok/s estimados con RAM de doble canal, y un portátil de 16 GB ejecuta modelos de 8B a unos 8–15 tok/s estimados. Apple Silicon es más rápido porque su memoria unificada tiene más ancho de banda. Las velocidades son estimaciones de PromptQuorum derivadas del ancho de banda de memoria, no mediciones de laboratorio; la temperatura y la batería limitan cuánto tiempo las sostiene un portátil.",
    "metaDescription": "LLM local en un portátil: qué cabe en 8 GB, 16 GB y Apple Silicon, tok/s estimados por ancho de banda de memoria, más térmica, batería y cuantización.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-es.webp",
    "twitterDescription": "LLM local en un portátil: 8 GB de RAM ejecutan un modelo de 3B–4B a unos 15–30 tok/s est., y 16 GB uno de 8B a unos 8–15 tok/s est. Estimaciones por ancho de banda, no pruebas de laboratorio.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**Un portátil con 8 GB de RAM ejecuta un modelo de 3B–4B a unos 15–30 tok/s estimados; con 16 GB, uno de 8B a unos 8–15 tok/s estimados en CPU. Apple Silicon es más rápido. Estimaciones de PromptQuorum según el ancho de banda de memoria, no mediciones de laboratorio.**",
    "comparisonTable": {
      "columns": [
        "Configuración",
        "Tamaño del modelo",
        "Velocidad",
        "Experiencia"
      ],
      "rows": [
        {
          "Configuración": "8 GB de RAM, CPU",
          "Tamaño del modelo": "3B–4B",
          "Velocidad": "est. 15–30 tok/s",
          "Experiencia": "Chat, resúmenes, programación sencilla"
        },
        {
          "Configuración": "16 GB de RAM, CPU",
          "Tamaño del modelo": "8B–9B",
          "Velocidad": "est. 8–15 tok/s",
          "Experiencia": "Uso general con multitarea"
        },
        {
          "Configuración": "Apple Silicon (M3 a M5), 16 GB",
          "Tamaño del modelo": "8B",
          "Velocidad": "est. 13–26 tok/s",
          "Experiencia": "Más ancho de banda de memoria que la RAM típica de un portátil"
        },
        {
          "Configuración": "Portátil con GPU (RTX 4060, 8 GB de VRAM)",
          "Tamaño del modelo": "8B",
          "Velocidad": "est. 34–44 tok/s",
          "Experiencia": "Rápido si el modelo cabe en la VRAM; mucho calor y consumo"
        }
      ]
    },
    "audience": "Principiantes que ejecutan su primer LLM local en hardware de consumo",
    "readTime": "8 min de lectura",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "Respuesta rápida: ¿qué LLM local funciona en tu portátil?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "Puntos clave",
        "anchor": "#key-takeaways"
      },
      {
        "label": "¿Se puede ejecutar un LLM local en un portátil?",
        "anchor": "#can-you-run"
      },
      {
        "label": "¿Se puede ejecutar RAG en un portátil?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "¿Qué configuración necesitas?",
        "anchor": "#use-case"
      },
      {
        "label": "¿Qué modelos de LLM local funcionan mejor en un portátil?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon frente a portátil con Windows",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "Portátil frente a sobremesa para LLMs locales",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "Cómo gestionar el throttling térmico",
        "anchor": "#thermals"
      },
      {
        "label": "¿Cuánta batería consume ejecutar un LLM local?",
        "anchor": "#battery-drain"
      },
      {
        "label": "¿Qué nivel de cuantización usar en un portátil?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "¿Qué leyes de privacidad se aplican al ejecutar LLMs locales en un portátil?",
        "anchor": "#regional-context"
      },
      {
        "label": "¿Cuáles son los errores comunes al ejecutar LLMs locales en portátiles?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "Lecturas relacionadas",
        "anchor": "#related-reading"
      },
      {
        "label": "Preguntas frecuentes sobre LLMs locales en portátiles",
        "anchor": "#faq"
      },
      {
        "label": "Fuentes",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "¿Se puede ejecutar un LLM local en un portátil?",
      "answer": "Sí. Un portátil de 8 GB ejecuta un modelo de 3B–4B en Q4_K_M, por ejemplo Llama 3.2 3B (archivo de 2.0 GB), a unos 18–30 tok/s estimados con RAM de doble canal. Un portátil de 16 GB ejecuta modelos de 8B–9B como Qwen3 8B (archivo de 5.2 GB) a unos 8–15 tok/s estimados en CPU. Apple Silicon es más rápido porque la memoria unificada tiene más ancho de banda: unos 13–17 tok/s estimados en un M3 y 21–26 tok/s en un M5 con Qwen3 8B. Todas las velocidades son estimaciones de PromptQuorum derivadas del ancho de banda de memoria, no mediciones de laboratorio.",
      "bullets": [
        "8 GB de RAM: Llama 3.2 3B (archivo de 2.0 GB) o Phi-4-mini (2.5 GB), est. 15–30 tok/s con RAM de doble canal",
        "16 GB de RAM: Qwen3 8B (archivo de 5.2 GB) o Llama 3.1 8B (4.9 GB), est. 8–15 tok/s en CPU",
        "Apple Silicon: Qwen3 8B est. 13–17 tok/s en un M3 (100 GB/s), 21–26 tok/s en un M5 (153 GB/s)",
        "Regla de velocidad: los tok/s son como máximo el ancho de banda de memoria ÷ el tamaño del archivo del modelo; la RAM de un solo canal los reduce a la mitad",
        "Una carga sostenida puede bajar la velocidad de reloj y agota la batería rápido: conecta el cargador y deja ventilar el portátil"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "Respuesta rápida: ¿qué LLM local funciona en tu portátil (8 GB, 16 GB, Apple Silicon)?",
        "content": [
          "**Puedes ejecutar un LLM local en un portátil con 8 GB de RAM: un modelo de 3B–4B en Q4_K_M funciona a unos 15–30 tok/s estimados con RAM de doble canal.** La tabla asocia tu hardware con un modelo. Las velocidades son estimaciones de PromptQuorum derivadas del ancho de banda de memoria (tok/s ≈ ancho de banda ÷ tamaño del archivo del modelo), no mediciones de laboratorio."
        ],
        "rows": [
          {
            "Tu portátil": "8 GB de RAM, solo CPU",
            "Mejor modelo": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Supuesto de hardware": "DDR4/DDR5 de doble canal"
          },
          {
            "Tu portátil": "16 GB de RAM, solo CPU",
            "Mejor modelo": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "tok/s est.": "8–15",
            "Supuesto de hardware": "DDR4/DDR5 de doble canal"
          },
          {
            "Tu portátil": "Apple M3, 16 GB",
            "Mejor modelo": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "13–17",
            "Supuesto de hardware": "Memoria unificada de 100 GB/s"
          },
          {
            "Tu portátil": "Apple M5, 16 GB",
            "Mejor modelo": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "21–26",
            "Supuesto de hardware": "Memoria unificada de 153 GB/s"
          },
          {
            "Tu portátil": "Intel Iris Xe / iGPU de AMD",
            "Mejor modelo": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Supuesto de hardware": "Comparte la RAM del sistema; revisa ollama ps"
          }
        ],
        "columns": [
          "Tu portátil",
          "Mejor modelo",
          "tok/s est.",
          "Supuesto de hardware"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-es.webp",
        "imageCaption": "LLM local en un portátil: modelos Q4_K_M según la RAM, con tok/s estimados"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Un portátil con 8 GB de RAM ejecuta un LLM local de 3B–4B a unos 15–30 tok/s estimados, uno de 16 GB ejecuta modelos de 8B–9B a unos 8–15 tok/s estimados, y Apple Silicon es más rápido porque la memoria unificada tiene más ancho de banda."
          },
          {
            "type": "plain-terms",
            "text": "Los límites principales de tu portátil son la RAM y el ancho de banda de memoria. El archivo del modelo debe caber en la RAM y cada token generado lee el archivo entero una vez, así que la velocidad es como máximo el ancho de banda dividido por el tamaño del archivo. Los portátiles también pueden ir más lentos bajo carga sostenida (throttling térmico); un soporte, el cargador conectado y un modelo más pequeño ayudan."
          }
        ],
        "items": [
          "Un modelo de 3B–4B en Q4_K_M funciona en un portátil con 8 GB de RAM: Llama 3.2 3B (archivo de 2.0 GB) a unos 18–30 tok/s estimados y Phi-4-mini (2.5 GB) a unos 15–25 tok/s estimados.",
          "16 GB de RAM admiten modelos de 8B–9B en Q4_K_M: Qwen3 8B (archivo de 5.2 GB) a unos 8–15 tok/s estimados con RAM de doble canal, 13–17 tok/s en un Apple M3 y 21–26 tok/s en un Apple M5.",
          "Regla de velocidad: los tokens por segundo son como máximo el ancho de banda de memoria ÷ el tamaño del archivo del modelo (un techo; la velocidad real es menor). DDR4-3200 de doble canal son 51.2 GB/s, DDR5-5600 de doble canal son 89.6 GB/s, y un solo canal reduce el resultado a la mitad. Apple publica 100 GB/s para el M3 y 153 GB/s para el M5.",
          "Todas las velocidades de esta página son estimaciones de PromptQuorum derivadas del ancho de banda de memoria, no mediciones de laboratorio. Ejecuta `ollama run <model> --verbose` para ver tus propios tokens por segundo.",
          "Conecta el cargador en sesiones largas y deja que el portátil ventile: una carga sostenida puede hacer que los chips bajen su velocidad de reloj, y la inferencia activa agota la batería mucho más rápido que un uso ligero."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "En una frase",
        "content": [
          "Un LLM local puede funcionar en un portátil con modelos cuantizados: Q4_K_M reduce el archivo a aproximadamente el 31% de su tamaño en FP16 (4.58 GiB en lugar de 14.96 GiB para Llama 3.1 8B) con una pérdida de calidad pequeña."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "En palabras sencillas",
        "content": [
          "Ejecutar un LLM en local significa que el chatbot funciona en tu propio portátil y no en los servidores de un proveedor: es privado y se puede usar sin conexión, pero es más lento que un servicio en la nube."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "¿Cuándo conviene ejecutar un LLM en un portátil?",
        "items": [
          "✅ **Usa LLMs locales si:** necesitas que los datos permanezcan en el dispositivo, trabajas sin conexión o no quieres pagar por token de API",
          "❌ **NO los uses si:** necesitas la máxima calidad de razonamiento, necesitas un contexto muy largo (más de 100K tokens, porque la caché KV crece con el contexto) o necesitas procesamiento por lotes rápido — consulta las [limitaciones de los LLMs locales](/es/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "¿Se puede ejecutar un LLM local en un portátil?",
        "content": [
          "**Sí, con el tamaño de modelo adecuado.** Un portátil con 8 GB de RAM ejecuta un modelo de 3B–4B en Q4_K_M a unos 15–30 tok/s estimados con RAM de doble canal (Llama 3.2 3B: 18–30, Phi-4-mini: 15–25). Un portátil con Apple Silicon y 16 GB ejecuta un modelo de 8B a unos 13–26 tok/s estimados según el chip. Es más lento que la mayoría de las API en la nube, pero suficientemente rápido para ir leyendo mientras se genera.",
          "El techo práctico en un portátil de 8 GB es un modelo de 3B–4B; los archivos de 7B–8B (4.4–5.2 GB) dejan poco espacio para el sistema operativo y un navegador. Un modelo de 14B en Q4_K_M (Qwen3 14B: archivo de 9.3 GB) cabe en un equipo de 16 GB solo con un contexto corto y las demás aplicaciones cerradas.",
          "Las velocidades de aquí son estimaciones de PromptQuorum derivadas del ancho de banda de memoria, no mediciones de laboratorio. Para los niveles por debajo de 8 GB y la regla completa del ancho de banda, consulta **[LLMs locales más rápidos para PCs de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs)**; para portátiles sin GPU, consulta **[Mejores LLMs locales solo con CPU 2026](/es/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "¿Se puede ejecutar RAG (recuperación) en un portátil?",
        "content": [
          "**Sí, RAG funciona en un portátil, porque la limitación real sigue siendo el modelo de chat y no la capa de recuperación.** Un stack RAG para portátil tiene tres partes: un modelo de embeddings pequeño, un almacén vectorial local y tu modelo de chat.",
          "El modelo de embeddings es pequeño: nomic-embed-text ocupa 274 MB en Ollama (ventana de contexto de 2K), así que añade poca presión de RAM. En un portátil de 8 GB puedes ejecutar un modelo de chat de 3B más un modelo de embeddings; con 16 GB tienes margen para un modelo de chat de 8B junto con la recuperación.",
          "**2 GB de RAM solo sirven para configuraciones muy pequeñas.** Qwen3 0.6B (523 MB) más nomic-embed-text suman unos 0.8 GB de archivos y caben cuando realmente hay 2 GB libres. En un portátil típico el sistema operativo ocupa 2–3 GB, y el uso de swap en disco ralentiza mucho la generación, así que cuenta con 8 GB como mínimo práctico."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "¿Qué configuración de portátil necesitas según tu caso de uso?",
        "items": [
          "**Para principiantes** — 8 GB de RAM, modelos de 3B–4B, solo CPU. Espera unos 15–30 tok/s estimados. Suficiente para chat, resúmenes y programación sencilla.",
          "**Para desarrolladores** — 16 GB de RAM, modelos de 8B–9B, GPU opcional. Se puede hacer multitarea sin cerrar otras aplicaciones (est. 8–15 tok/s en CPU).",
          "**Para usuarios avanzados** — Apple Silicon con chip Pro o Max, o un portátil con GPU de 8 GB+ de VRAM, modelos de 8B–14B. Estimaciones para Qwen3 8B: 41–53 tok/s en un M5 Pro (307 GB/s) y 34–44 tok/s en una GPU de portátil RTX 4060 (unos 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "¿Quién puede ejecutar un LLM local en un portátil?",
        "items": [
          "**Principiantes** → [LM Studio](/es/local-llms/how-to-install-lm-studio) + un modelo de 3B",
          "**Nivel intermedio** → [Ollama](/es/local-llms/how-to-install-ollama) + un modelo de 8B",
          "**Usuarios avanzados** → 14B con [ajuste de cuantización](/es/local-llms/llm-quantization-explained)",
          "❌ **NO uses un portátil si:** necesitas APIs en tiempo real (usa un servidor vLLM) o procesas grandes conjuntos de datos (usa GPUs en la nube)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "¿Qué tamaño de modelo de LLM local necesitas?",
        "content": "Los tamaños de archivo son las descargas de Ollama comprobadas en ollama.com el 2026-10-23, con cuantización de clase Q4_K_M (aproximadamente un 70% menos que FP16). La RAM mín. es el archivo más unos 0.5 GB de sobrecarga; deja 2–4 GB más para el sistema operativo y un navegador:",
        "rows": [
          {
            "Modelo": "Llama 3.2 3B",
            "Archivo (Ollama)": "2.0 GB",
            "RAM mín.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Mejor uso": "Tareas básicas, chat, resúmenes"
          },
          {
            "Modelo": "Phi-4-mini 3.8B",
            "Archivo (Ollama)": "2.5 GB",
            "RAM mín.": "3 GB",
            "tok/s est.": "15–25",
            "Mejor uso": "Razonamiento y programación en 8 GB"
          },
          {
            "Modelo": "Qwen3 8B",
            "Archivo (Ollama)": "5.2 GB",
            "RAM mín.": "6 GB",
            "tok/s est.": "8–15",
            "Mejor uso": "Uso general, multilingüe, programación"
          },
          {
            "Modelo": "Qwen3 14B",
            "Archivo (Ollama)": "9.3 GB",
            "RAM mín.": "10 GB",
            "tok/s est.": "4–8",
            "Mejor uso": "Tareas más difíciles en 16 GB, contexto corto"
          }
        ],
        "columns": [
          "Modelo",
          "Archivo (Ollama)",
          "RAM mín.",
          "tok/s est.",
          "Mejor uso"
        ],
        "note": "Las estimaciones son estimaciones de PromptQuorum, no mediciones de laboratorio, para un portátil con DDR4-3200 a DDR5-5600 de doble canal (51.2–89.6 GB/s); la RAM de un solo canal las reduce a la mitad. Ejemplo con Q4_K_M: Llama 3.1 8B ocupa 14.96 GiB en FP16 y 4.58 GiB en Q4_K_M (README de quantize de llama.cpp), aproximadamente un 69% menos. → [Calculadora de VRAM](/es/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "Portátil de 8 GB frente a 16 GB de RAM: ¿cuál es la diferencia práctica?",
        "rows": [
          {
            "Escenario": "Tamaño máximo de modelo",
            "8 GB de RAM": "3B–4B con holgura; 7B–8B (archivos de 4.4–5.2 GB) justo",
            "16 GB de RAM": "8B–9B con holgura; 14B (9.3 GB) con contexto corto"
          },
          {
            "Escenario": "Modelo con el navegador abierto",
            "8 GB de RAM": "3B–4B (justo)",
            "16 GB de RAM": "8B–9B con holgura"
          },
          {
            "Escenario": "Primer modelo recomendado",
            "8 GB de RAM": "llama3.2:3b o phi4-mini",
            "16 GB de RAM": "qwen3:8b o llama3.1:8b"
          },
          {
            "Escenario": "Aplicaciones simultáneas",
            "8 GB de RAM": "Cierra el navegador antes de cargar un modelo de 8B",
            "16 GB de RAM": "Multitarea normal con un modelo de 8B"
          }
        ],
        "columns": [
          "Escenario",
          "8 GB de RAM",
          "16 GB de RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "¿Qué modelos de LLM local funcionan mejor en un portátil?",
        "content": "**Estos modelos se ajustan a los límites de un portátil: los archivos pequeños dan más tokens por segundo con el mismo ancho de banda de memoria.** Las velocidades son estimaciones de PromptQuorum para un portátil con DDR4-3200 a DDR5-5600 de doble canal (51.2–89.6 GB/s), derivadas del techo de ancho de banda (ancho de banda ÷ tamaño del archivo en Ollama), no mediciones de laboratorio; la RAM de un solo canal las reduce a la mitad. Los tamaños de archivo son las descargas de Ollama comprobadas el 2026-10-23. Para los requisitos de VRAM de distintos modelos y configuraciones de portátil, consulta la [guía de requisitos de VRAM →](/es/local-llms/how-much-vram-local-llm). Instala [Ollama](/es/local-llms/how-to-install-ollama) para ejecutar cualquiera de ellos con un solo comando. ¿Sin GPU? Consulta **[Mejores LLMs locales solo con CPU 2026](/es/local-llms/best-cpu-only-llm)**. Son modelos de pesos abiertos (open-weights); revisa la licencia en la ficha de cada modelo.",
        "rows": [
          {
            "Modelo": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "Archivo (Ollama)": "2.0 GB",
            "RAM mín.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Ideal para": "Portátiles de 8 GB, tareas rápidas"
          },
          {
            "Modelo": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "Archivo (Ollama)": "2.5 GB",
            "RAM mín.": "3 GB",
            "tok/s est.": "15–25",
            "Ideal para": "Portátiles de 8 GB, razonamiento y programación"
          },
          {
            "Modelo": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "Archivo (Ollama)": "5.2 GB",
            "RAM mín.": "6 GB",
            "tok/s est.": "8–15",
            "Ideal para": "Portátiles de 16 GB, multilingüe, programación"
          },
          {
            "Modelo": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "Archivo (Ollama)": "4.9 GB",
            "RAM mín.": "5.5 GB",
            "tok/s est.": "8–14",
            "Ideal para": "Portátiles de 16 GB, uso general"
          },
          {
            "Modelo": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "Archivo (Ollama)": "6.6 GB",
            "RAM mín.": "7–8 GB",
            "tok/s est.": "6–12",
            "Ideal para": "Portátiles de 16 GB, familia más reciente, entrada de imagen"
          }
        ],
        "columns": [
          "Modelo",
          "Archivo (Ollama)",
          "RAM mín.",
          "tok/s est.",
          "Ideal para"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-es.webp",
        "imageCaption": "Mejores modelos de LLM local para portátiles según el tamaño del archivo, con tok/s estimados"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "¿Con qué configuración de LLM local empezar en un portátil?",
        "content": [
          "El hardware del portátil limita el tamaño del modelo, pero los prompts claros y estructurados pueden mejorar los resultados de los modelos pequeños. Consulta la [guía de prompt engineering](/es/prompt-engineering) para ver técnicas adecuadas para modelos más pequeños."
        ],
        "items": [
          "🥇 **Inicio sencillo por línea de comandos:** [Ollama](/es/local-llms/how-to-install-ollama) — un comando por modelo, amplio soporte de modelos",
          "🥈 **Lo más fácil para principiantes:** [LM Studio](/es/local-llms/how-to-install-lm-studio) — interfaz gráfica, sin terminal",
          "🥉 **Poca RAM (8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **Más calidad con 16 GB:** Qwen3 8B (Q4_K_M, o Q5_K_M si la velocidad lo permite)",
          "💡 **Si dudas:** empieza con Ollama + Llama 3.2 3B Q4_K_M"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon frente a portátil con Windows: ¿qué es mejor para LLMs locales?",
        "content": [
          "**Los MacBook con Apple Silicon son una buena opción para LLMs locales porque la memoria unificada da a la GPU acceso de alto ancho de banda a todo el pool de memoria.** La velocidad depende del ancho de banda de memoria: Apple publica 100 GB/s para el M3, 153 GB/s para el M5, 307 GB/s para el M5 Pro y 460 o 614 GB/s para el M5 Max (según los núcleos de GPU). Los MacBook Pro con M5 Pro y M5 Max, presentados el 3 de marzo de 2026, ofrecen hasta 64 GB y 128 GB de memoria unificada.",
          "Un portátil con Windows y una GPU NVIDIA dedicada puede ser más rápido cuando el modelo cabe en la VRAM. La GPU de portátil RTX 4060 tiene 8 GB de GDDR6 en un bus de 128 bits (NVIDIA); a 16 Gbps (dato de terceros) son unos 256 GB/s, así que Qwen3 8B (5.2 GB) tiene un techo cercano a 49 tok/s. La contrapartida es un mayor consumo y más calor.",
          "Los portátiles con Windows que solo tienen gráficos integrados Intel Iris Xe o AMD Radeon están limitados por el ancho de banda de la RAM del sistema. La documentación de Ollama indica que el soporte de GPU con Vulkan está activado por defecto cuando el backend está instalado y no incluye los gráficos integrados de Intel en una tabla de compatibilidad, así que revisa la columna PROCESSOR de `ollama ps`. Una iGPU comparte la misma RAM, por lo que las mejoras suelen ser modestas.",
          "**Mejores modelos para gráficos integrados (Intel Iris Xe / AMD Radeon):** Con 16 GB de RAM, elige un modelo de 3B–4B en Q4_K_M por velocidad (Llama 3.2 3B, est. 18–30 tok/s con RAM de doble canal) o Qwen3 8B por calidad (est. 8–15 tok/s). Prioriza un modelo que quepa con holgura en la RAM. Para una configuración paso a paso en equipos de gama baja, consulta [LLMs locales más rápidos para PCs de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs).",
          "Método de la tabla: cada estimación es aproximadamente el 70–90% del techo (ancho de banda ÷ el archivo de 5.2 GB de Qwen3 8B). Son estimaciones de PromptQuorum, no mediciones de laboratorio."
        ],
        "rows": [
          {
            "Tipo de portátil": "Apple M3, 16 GB",
            "Ancho de banda de memoria": "100 GB/s",
            "tok/s est. con Qwen3 8B": "13–17",
            "Modelo máximo práctico": "~9B (14B justo)"
          },
          {
            "Tipo de portátil": "Apple M5, 16 GB",
            "Ancho de banda de memoria": "153 GB/s",
            "tok/s est. con Qwen3 8B": "21–26",
            "Modelo máximo práctico": "~9B (14B justo)"
          },
          {
            "Tipo de portátil": "Apple M5 Pro",
            "Ancho de banda de memoria": "307 GB/s",
            "tok/s est. con Qwen3 8B": "41–53",
            "Modelo máximo práctico": "Limitado por la memoria (hasta 64 GB)"
          },
          {
            "Tipo de portátil": "Apple M5 Max",
            "Ancho de banda de memoria": "460–614 GB/s",
            "tok/s est. con Qwen3 8B": "62–106",
            "Modelo máximo práctico": "Limitado por la memoria (hasta 128 GB)"
          },
          {
            "Tipo de portátil": "Portátil RTX 4060 (8 GB de VRAM)",
            "Ancho de banda de memoria": "~256 GB/s",
            "tok/s est. con Qwen3 8B": "34–44",
            "Modelo máximo práctico": "~8B en VRAM"
          },
          {
            "Tipo de portátil": "Portátil con DDR5-5600 de doble canal",
            "Ancho de banda de memoria": "89.6 GB/s",
            "tok/s est. con Qwen3 8B": "12–15",
            "Modelo máximo práctico": "~9B (16 GB de RAM)"
          },
          {
            "Tipo de portátil": "Portátil con DDR4-3200 de un solo canal",
            "Ancho de banda de memoria": "25.6 GB/s",
            "tok/s est. con Qwen3 8B": "3–4",
            "Modelo máximo práctico": "Se recomienda 3B–4B"
          }
        ],
        "columns": [
          "Tipo de portátil",
          "Ancho de banda de memoria",
          "tok/s est. con Qwen3 8B",
          "Modelo máximo práctico"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "¿Basta un portátil para LLMs locales frente a un sobremesa?",
        "content": [
          "**Los portátiles ejecutan bien modelos de 3B–14B, pero los sobremesa llegan más lejos gracias a una mejor refrigeración y a GPUs dedicadas con un ancho de banda de memoria mucho mayor.** Una RTX 4090 de sobremesa tiene 24 GB de VRAM y 1,008 GB/s de ancho de banda (NVIDIA), suficiente para alojar en VRAM archivos de modelo de hasta unos 20 GB, como Gemma 4 31B (19–20 GB en Ollama). Un modelo de 70B en Q4 es un archivo de 43 GB en Ollama (llama3.3:70b), que no cabe en 24 GB y debe repartirse con la RAM del sistema, mucho más lenta.",
          "Usa un portátil para portabilidad y experimentación. Usa un sobremesa para modelos grandes (14B+), cargas sostenidas o inferencia en producción. ¿Dudas entre plataformas? Consulta la [guía de compra portátil frente a sobremesa para LLMs locales](/es/local-llms/laptop-vs-desktop-local-llm) para un desglose completo de costes y rendimiento."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "¿Cómo gestionar el throttling térmico en un portátil?",
        "content": [
          "**El throttling térmico ocurre cuando la CPU o la GPU alcanza su límite de temperatura y baja su velocidad de reloj para enfriarse.** La inferencia local es una carga sostenida, así que un portátil delgado puede ir más lento pasado un tiempo; cuánto y cuándo depende de su diseño de refrigeración. Comprueba tu propia velocidad durante 10 minutos con `ollama run <model> --verbose`."
        ],
        "items": [
          "**Usa un soporte para portátil con espacio para el flujo de aire** -- elevar el portátil mejora la salida de aire y puede retrasar el throttling.",
          "**Prueba un modo de energía más bajo** -- la generación de tokens está limitada por el ancho de banda de memoria y no por la velocidad de reloj, así que un plan de energía equilibrado o bajo (en macOS, el Modo de bajo consumo) puede reducir el calor y costar menos velocidad de la que esperas; pruébalo en tu equipo.",
          "**Limita la longitud de generación y el contexto** -- divide las tareas largas en prompts más cortos y evita regenerar respuestas muy largas.",
          "**Usa Q4_K_M en lugar de Q8_0** -- el archivo es unas 1.7 veces más pequeño (4.58 frente a 7.95 GiB para Llama 3.1 8B), así que cada token lee menos datos de la memoria y el chip está bajo carga menos tiempo."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "¿Cuánta batería consume ejecutar un LLM local?",
        "content": [
          "**El consumo de batería durante la inferencia local es considerable porque la CPU o la GPU trabaja a alta carga durante toda la generación.** La autonomía en horas es aproximadamente la capacidad de la batería en vatios-hora dividida entre el consumo medio: una batería de 60 Wh a 20 W dura unas 3 horas, a 30 W unas 2 horas. Son cálculos ilustrativos, no mediciones; el consumo real varía según el portátil, el modelo y el modo de energía.",
          "La autonomía indicada por el fabricante no describe la inferencia. La cifra de Apple de hasta 16 horas de navegación web inalámbrica para el MacBook Pro de 14 pulgadas con M5 (batería de 72.4 Wh) corresponde a un uso ligero, no a una generación sostenida.",
          "Para sesiones largas, conecta el cargador. Para un uso que cuide la batería, elige un modelo más pequeño (un archivo de 3B es menos de la mitad que uno de 8B, así que cada respuesta termina antes) y acorta el contexto."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "¿Qué nivel de cuantización usar en un portátil?",
        "content": "La [cuantización](/es/local-llms/llm-quantization-explained) reduce la precisión del modelo para bajar las necesidades de RAM y de ancho de banda. En portátiles, Q4_K_M es el valor habitual por defecto. Los tamaños de abajo son de Llama 3.1 8B según el README de quantize de llama.cpp (14.96 GiB en FP16); otros modelos escalan de forma similar:",
        "rows": [
          {
            "Cuantización": "Q2_K",
            "Tamaño frente a FP16": "~20% (2.95 GiB)",
            "Pérdida de calidad": "Alta -- degradación notable",
            "Caso de uso": "Solo cuando no cabe nada más"
          },
          {
            "Cuantización": "Q3_K_S",
            "Tamaño frente a FP16": "~23% (3.41 GiB)",
            "Pérdida de calidad": "Moderada",
            "Caso de uso": "Meter un modelo más grande en la RAM"
          },
          {
            "Cuantización": "Q4_K_M",
            "Tamaño frente a FP16": "~31% (4.58 GiB)",
            "Pérdida de calidad": "Baja -- valor habitual por defecto",
            "Caso de uso": "La mayoría de los portátiles, buen equilibrio"
          },
          {
            "Cuantización": "Q5_K_M",
            "Tamaño frente a FP16": "~36% (5.33 GiB)",
            "Pérdida de calidad": "Pequeña",
            "Caso de uso": "Portátiles de 16 GB si la velocidad lo permite"
          },
          {
            "Cuantización": "Q8_0",
            "Tamaño frente a FP16": "~53% (7.95 GiB)",
            "Pérdida de calidad": "Muy pequeña",
            "Caso de uso": "RAM de sobra, velocidad no crítica"
          }
        ],
        "columns": [
          "Cuantización",
          "Tamaño frente a FP16",
          "Pérdida de calidad",
          "Caso de uso"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "¿Qué leyes de privacidad se aplican al ejecutar LLMs locales en un portátil?",
        "content": [
          "**Unión Europea (RGPD):** Cuando un modelo se ejecuta en tu propio portátil, los prompts y los documentos no tienen por qué salir del dispositivo, lo que puede evitar enviar datos personales a un encargado de tratamiento externo. Que se apliquen el RGPD, la Ley de IA de la UE u otras obligaciones depende de quién despliega el sistema y con qué fin; esta guía no es asesoramiento jurídico, y el cumplimiento depende de toda tu configuración, no de dónde se ejecute la inferencia.",
          "**Alemania:** Para las empresas alemanas, mantener los documentos en el dispositivo puede simplificar las cuestiones de protección de datos, pero si una configuración local cumple tus obligaciones (por ejemplo, con datos confidenciales de clientes) se decide caso por caso; consulta a tu delegado de protección de datos.",
          "**Japón (APPI):** La Ley de Protección de la Información Personal de Japón regula las transferencias de datos personales al extranjero. Ejecutar la inferencia en el portátil evita enviar prompts a una API en el extranjero, lo que puede simplificar la cuestión de la transferencia; no sustituye una evaluación jurídica.",
          "**Estados Unidos:** No existe una única ley federal de datos de IA; se aplican normas sectoriales como HIPAA (sanidad), FERPA (educación) y leyes estatales de privacidad según el uso. Mantener los datos en un dispositivo local puede reducir el número de terceros que los gestionan, pero sigues siendo responsable de proteger el dispositivo y los datos."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Preguntas frecuentes sobre LLMs locales en portátiles",
        "faqs": [
          {
            "q": "¿Cuáles son los mejores modelos de Ollama para Intel Iris Xe con 16 GB de RAM?",
            "a": "En un portátil con gráficos Intel Iris Xe y 16 GB de RAM, la velocidad está limitada por el ancho de banda de la RAM del sistema. Que Ollama use la iGPU depende del soporte de controladores y del backend (revisa la columna PROCESSOR de `ollama ps`), y una iGPU comparte la misma RAM, por lo que las mejoras suelen ser modestas. Elige un modelo de 3B–4B en Q4_K_M por velocidad: Llama 3.2 3B (est. 18–30 tok/s con RAM de doble canal) con `ollama run llama3.2:3b`, o Qwen3 8B (est. 8–15 tok/s) con `ollama run qwen3:8b` para más calidad. Las velocidades son estimaciones de PromptQuorum, no mediciones de laboratorio."
          },
          {
            "q": "¿Se puede ejecutar RAG en local en un portátil?",
            "a": "Sí. Un stack RAG para portátil es un modelo de embeddings pequeño más un almacén vectorial local más tu modelo de chat. El modelo de embeddings es pequeño (nomic-embed-text ocupa 274 MB en Ollama), así que el modelo de chat sigue siendo la limitación de RAM: un portátil de 8 GB ejecuta un modelo de chat de 3B con recuperación, y 16 GB dejan espacio para uno de 8B. Consulta la [sección de RAG en un portátil](#rag-laptop) más arriba para el desglose de RAM."
          },
          {
            "q": "¿Cuál es el mejor LLM local solo con CPU para un portátil?",
            "a": "Entre los modelos comparados en la guía solo con CPU, Phi-4 Mini (3.8B, archivo de 2.5 GB) es la mejor opción general a unos 15–25 tok/s estimados con RAM de doble canal, y Llama 3.2 3B (archivo de 2.0 GB) es el archivo más pequeño a unos 18–30 tok/s estimados, ambos en Q4_K_M. Para la comparación completa y los comandos de Ollama, consulta [Mejores LLMs locales solo con CPU 2026](/es/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "¿Ejecutar un LLM local dañará mi portátil con el tiempo?",
            "a": "No se espera un daño inmediato en un portátil en buen estado: los chips bajan su velocidad de reloj cuando se calientan, así que la inferencia sostenida ralentiza el equipo en lugar de dañarlo. Aun así, el calor sostenido desgasta con el tiempo los ventiladores y la batería, por lo que conviene usar un soporte o una base refrigerante, mantener libres las rejillas de ventilación y hacer pausas. Sigue las indicaciones del fabricante sobre temperatura y cuidado de la batería."
          },
          {
            "q": "¿Puedo ejecutar un LLM local en un portátil con 4 GB de RAM?",
            "a": "Apenas. Un modelo pequeño como Qwen3 1.7B (archivo de 1.4 GB) o Llama 3.2 1B (archivo de 1.3 GB) cabe, pero el sistema operativo necesita 2–3 GB, así que con 4 GB en total es probable que se use swap, lo que ralentiza mucho la generación. El mínimo práctico para una experiencia cómoda es 8 GB. Consulta [LLMs locales más rápidos para PCs de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "¿Mi portátil necesita una GPU dedicada para ejecutar LLMs locales?",
            "a": "No. Ollama, LM Studio y GPT4All funcionan solo con CPU. Una GPU con alto ancho de banda de memoria acelera la generación, pero los modelos de 3B–4B son utilizables en CPU a unos 15–30 tok/s estimados con RAM de doble canal. Consulta [Mejores modelos de LLM local para principiantes](/es/local-llms/best-beginner-local-llm-models) para ver recomendaciones aptas para CPU."
          },
          {
            "q": "¿Cuál es el LLM local más rápido que puedo ejecutar en un MacBook de 8 GB?",
            "a": "Entre los modelos de esta guía, Llama 3.2 3B en Q4_K_M (archivo de 2.0 GB) es la opción práctica más rápida en un MacBook de 8 GB. En un M2 o M3 (ambos de 100 GB/s según Apple) el techo de ancho de banda es de unos 50 tok/s y la estimación de PromptQuorum es de 35–45 tok/s. Un archivo de 8B (5.2 GB) queda justo en 8 GB porque macOS y tus aplicaciones también necesitan memoria."
          },
          {
            "q": "¿Cómo reduzco el throttling térmico de un portátil durante la inferencia de un LLM?",
            "a": "Cuatro pasos: (1) eleva el portátil con un soporte que deje espacio para el flujo de aire, (2) prueba un modo de energía equilibrado o bajo, porque la generación está limitada por el ancho de banda de memoria más que por la velocidad de reloj, (3) limita la longitud de generación y el contexto, y (4) usa Q4_K_M en lugar de Q8_0 para que cada token lea menos datos. Comprueba tu velocidad durante 10 minutos con `ollama run <model> --verbose`."
          },
          {
            "q": "¿Puedo ejecutar un LLM local en un Chromebook?",
            "a": "Solo en Chromebooks con Linux (Crostini) activado, y solo modelos pequeños. La mayoría de los Chromebooks tienen 4–8 GB de RAM y un ancho de banda de memoria modesto, así que un modelo de 1B–3B en Q4_K_M es el techo realista y la velocidad será baja. Los Chromebooks sin soporte de Linux no pueden ejecutar Ollama."
          },
          {
            "q": "¿Es Apple Silicon mejor que una GPU NVIDIA de portátil para LLMs locales?",
            "a": "Depende de la memoria. La velocidad sigue al ancho de banda y a la capacidad de memoria: un MacBook de 16 GB con M5 (153 GB/s) tiene un techo cercano a 29 tok/s con Qwen3 8B, mientras que una GPU de portátil RTX 4060 (unos 256 GB/s, 8 GB de VRAM) tiene un techo cercano a 49 tok/s pero solo aloja modelos que quepan en 8 GB. Un M5 Pro (307 GB/s) o un M5 Max (460–614 GB/s) con más memoria aloja modelos más grandes en memoria rápida. El consumo varía según el modelo, así que revisa tu portátil."
          },
          {
            "q": "¿Qué pasa si el modelo es demasiado grande para la RAM de mi portátil?",
            "a": "El sistema operativo empieza a usar swap en disco, o el modelo no se carga, y la generación puede volverse extremadamente lenta mientras los ventiladores van a tope. La solución es un modelo más pequeño, un nivel de cuantización más bajo (Q4_K_M en lugar de Q8_0) o un contexto más corto (`OLLAMA_CONTEXT_LENGTH`, 4096 por defecto)."
          },
          {
            "q": "¿Cuánto dura la batería al ejecutar LLMs locales en un portátil?",
            "a": "La autonomía es aproximadamente la capacidad de la batería en Wh dividida entre el consumo medio en W. Una batería de 60 Wh a 20 W dura unas 3 horas y a 30 W unas 2 horas (cálculo ilustrativo, no una medición). El consumo real varía según el portátil, el modelo y el modo de energía. Para un uso de todo el día, conecta el cargador."
          },
          {
            "q": "¿Necesito conexión a internet para ejecutar un LLM local en un portátil?",
            "a": "No. Después de descargar el modelo (lo que requiere internet), la inferencia es totalmente offline. El modelo se ejecuta por completo en la CPU o la GPU del portátil. Esto hace útiles los LLMs locales para viajar, para entornos seguros o para lugares con conectividad poco fiable."
          },
          {
            "q": "¿Puedo ejecutar un LLM local con 8 GB de RAM?",
            "a": "Sí. Un portátil de 8 GB ejecuta un modelo de 3B–4B en Q4_K_M (archivos de 2.0–2.5 GB) a unos 15–30 tok/s estimados con RAM de doble canal, o a unos 28–45 tok/s estimados en un Apple M2 o M3. Los modelos de 7B–8B (archivos de 4.4–5.2 GB) quedan justos en 8 GB."
          },
          {
            "q": "¿Cuál es el portátil más rápido para LLMs locales?",
            "a": "Para los LLMs locales, las especificaciones clave son el ancho de banda de memoria y tener suficiente memoria. Apple indica 307 GB/s para el M5 Pro (hasta 64 GB) y 460 o 614 GB/s para el M5 Max (hasta 128 GB); con Qwen3 8B, las estimaciones de PromptQuorum son de 41–53 tok/s en un M5 Pro y de 62–106 tok/s en un M5 Max. En Windows, un portátil con una GPU NVIDIA que aloje el modelo en VRAM tiene un techo alto, por ejemplo unos 256 GB/s para una GPU de portátil RTX 4060 con 8 GB."
          },
          {
            "q": "¿Qué tan lentos son los LLMs locales en CPU?",
            "a": "La velocidad es como máximo el ancho de banda de memoria ÷ el tamaño del archivo del modelo. Con DDR4/DDR5 de doble canal, un modelo de 3B–4B en Q4_K_M funciona a unos 15–30 tok/s estimados y Qwen3 8B a unos 8–15 tok/s estimados; la RAM de un solo canal lo reduce a la mitad. Es lo bastante lento como para ir leyendo mientras se genera, pero lo bastante rápido para chat y resúmenes. Apple Silicon alcanza unos 13–26 tok/s estimados con Qwen3 8B (de M3 a M5) porque la memoria unificada tiene más ancho de banda."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "**Especificaciones técnicas del MacBook Pro de Apple** -- ancho de banda de memoria del M5 (153 GB/s), M5 Pro (307 GB/s) y M5 Max (460 y 614 GB/s), y autonomía de batería indicada. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Especificaciones técnicas del MacBook Air de Apple (15 pulgadas, M3, 2024)** -- ancho de banda de memoria del M3 de 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom: M2** -- ancho de banda de memoria unificada de 100 GB/s. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom: MacBook Pro con M5 Pro y M5 Max (3 de marzo de 2026)** -- hasta 64 GB y 128 GB de memoria unificada. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**Comparativa de portátiles NVIDIA GeForce** -- GPU de portátil RTX 4060: 8 GB de GDDR6, bus de 128 bits. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: GPU de portátil RTX 4060** -- velocidad de memoria de 16 Gbps (fuente de terceros; base de la cifra de ~256 GB/s). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**Especificaciones de la NVIDIA GeForce RTX 4090** -- 24 GB de VRAM, 1,008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Biblioteca de Ollama** -- tamaños de archivo comprobados el 2026-10-23: [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**Preguntas frecuentes de Ollama** -- longitud de contexto por defecto 4096, OLLAMA_CONTEXT_LENGTH, tipo de caché KV, keep-alive y `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Documentación de GPU de Ollama** -- Metal en Apple Silicon, Vulkan y GPUs compatibles. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**README de quantize de llama.cpp** -- tamaños de archivo por tipo de cuantización para Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** -- aceleración por GPU para Mac con Apple Silicon. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- requisitos del sistema, compatibilidad de GPU y configuración de inferencia local. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "¿Cuáles son los errores comunes al ejecutar LLMs locales en portátiles?",
        "items": [
          "**Ejecutar un modelo demasiado grande para la RAM disponible** → el sistema usa swap en disco y la generación se ralentiza mucho; elige un modelo más pequeño o una cuantización más baja.",
          "**Ignorar el throttling térmico** → la velocidad sostenida puede caer cuando el chip alcanza su límite de temperatura; comprueba tu velocidad tras 10 minutos con `ollama run <model> --verbose`.",
          "**Usar Q8_0 en lugar de Q4_K_M** → el archivo es unas 1.7 veces mayor (7.95 frente a 4.58 GiB para Llama 3.1 8B), así que necesita más RAM y genera más despacio en un portátil limitado por el ancho de banda, a cambio de una mejora de calidad pequeña.",
          "**Usar un solo módulo de RAM** → la memoria de un solo canal reduce a la mitad el ancho de banda máximo y el techo de velocidad; usa dos módulos iguales si el portátil lo permite.",
          "**Dejar desactivada la descarga a la GPU en LM Studio** → el modelo se ejecuta en la CPU en lugar de en la GPU; sube el ajuste de descarga a la GPU cuando el modelo quepa en su memoria.",
          "**Mantener la ventana de contexto por defecto** → el valor por defecto de Ollama es de 4096 tokens, así que los documentos de varias páginas se truncan; auméntalo con `OLLAMA_CONTEXT_LENGTH=8192` o `/set parameter num_ctx 8192` y espera un mayor uso de memoria."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Mejores modelos de LLM local para principiantes](/es/local-llms/best-beginner-local-llm-models) -- Modelos pequeños optimizados para portátiles",
          "[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Guía de instalación",
          "[Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) -- Instalador con interfaz gráfica",
          "[Solución de problemas en la configuración de un LLM local](/es/local-llms/troubleshooting-local-llm-setup) -- Soluciones de rendimiento y errores",
          "[Cuantización de LLMs explicada](/es/local-llms/llm-quantization-explained) -- Q4_K_M frente a Q8_0 y Q5_K_M en detalle",
          "[Modelos de LLM local pequeños de menos de 4 GB](/es/local-llms/small-local-llm-models) -- Modelos de 3B para portátiles de 8 GB",
          "[Portátil frente a sobremesa para LLMs locales 2026](/es/local-llms/laptop-vs-desktop-local-llm) -- Guía de compra: comparación de rendimiento, análisis de costes y qué plataforma elegir.",
          "[MLX frente a Ollama frente a llama.cpp en Mac 2026](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Comparación de frameworks para Apple Silicon: velocidad, tiempo de configuración y ventajas e inconvenientes del ecosistema.",
          "[La forma más barata de ejecutar un modelo de 70B en local](/es/prompt-bites/cheapest-way-to-run-70b-model-locally) -- Cuándo un portátil puede con 70B: Q3_K_S en un M3 Max frente a descarga a la CPU.",
          "[Mejor GPU para inferencia de LLM local por menos de $500 (2026)](/es/local-llms/best-gpu-for-llm-inference-under-500-2026) -- Ruta de ampliación con eGPU para MacBook y portátiles con Windows.",
          "[Mejores LLMs locales solo con CPU 2026](/es/local-llms/best-cpu-only-llm) -- tok/s estimados según el tamaño del archivo del modelo para equipos sin GPU.",
          "[LLMs locales más rápidos para PCs de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs) -- Opciones para 4–16 GB de RAM, solo CPU o iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "LLM local en un portátil: qué funciona con 8 GB, 16 GB y Apple Silicon (2026)",
      "description": "Ejecuta LLMs locales en portátiles con 8 GB o 16 GB de RAM o Apple Silicon. Incluye modelos recomendados (Llama 3.2 3B, Phi-4-mini, Qwen3 8B), velocidades estimadas según el ancho de banda de memoria, térmica, batería y cuantización Q4_K_M.",
      "url": "https://www.promptquorum.com/es/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "LLM local en portátil"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Cuantización Q4_K_M"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "throttling térmico"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "es"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Mejores modelos de LLM local para portátiles 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "Modelo de 3B, archivo de 2.0 GB en Ollama. Est. 18–30 tok/s con RAM de doble canal (estimación de PromptQuorum). El archivo más pequeño de la lista, ideal para portátiles de 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "Modelo de 3.8B, archivo de 2.5 GB en Ollama. Est. 15–25 tok/s con RAM de doble canal (estimación de PromptQuorum). Razonamiento y programación en portátiles de 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "Modelo de 8B, archivo de 5.2 GB en Ollama. Est. 8–15 tok/s con RAM de doble canal (estimación de PromptQuorum). Multilingüe y programación en portátiles de 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "Modelo de 8B, archivo de 4.9 GB en Ollama. Est. 8–14 tok/s con RAM de doble canal (estimación de PromptQuorum). Uso general en portátiles de 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "Modelo de 9B, archivo de 6.6 GB en Ollama. Est. 6–12 tok/s con RAM de doble canal (estimación de PromptQuorum). Familia más reciente con entrada de imagen en portátiles de 16 GB."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuáles son los mejores modelos de Ollama para Intel Iris Xe con 16 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En un portátil con gráficos Intel Iris Xe y 16 GB de RAM, la velocidad está limitada por el ancho de banda de la RAM del sistema. Que Ollama use la iGPU depende del soporte de controladores y del backend (revisa la columna PROCESSOR de `ollama ps`), y una iGPU comparte la misma RAM, por lo que las mejoras suelen ser modestas. Elige un modelo de 3B–4B en Q4_K_M por velocidad: Llama 3.2 3B (est. 18–30 tok/s con RAM de doble canal) con `ollama run llama3.2:3b`, o Qwen3 8B (est. 8–15 tok/s) con `ollama run qwen3:8b` para más calidad. Las velocidades son estimaciones de PromptQuorum, no mediciones de laboratorio."
          }
        },
        {
          "@type": "Question",
          "name": "¿Se puede ejecutar RAG en local en un portátil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Un stack RAG para portátil es un modelo de embeddings pequeño más un almacén vectorial local más tu modelo de chat. El modelo de embeddings es pequeño (nomic-embed-text ocupa 274 MB en Ollama), así que el modelo de chat sigue siendo la limitación de RAM: un portátil de 8 GB ejecuta un modelo de chat de 3B con recuperación, y 16 GB dejan espacio para uno de 8B. Consulta la [sección de RAG en un portátil](#rag-laptop) más arriba para el desglose de RAM."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el mejor LLM local solo con CPU para un portátil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre los modelos comparados en la guía solo con CPU, Phi-4 Mini (3.8B, archivo de 2.5 GB) es la mejor opción general a unos 15–25 tok/s estimados con RAM de doble canal, y Llama 3.2 3B (archivo de 2.0 GB) es el archivo más pequeño a unos 18–30 tok/s estimados, ambos en Q4_K_M. Para la comparación completa y los comandos de Ollama, consulta [Mejores LLMs locales solo con CPU 2026](/es/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ejecutar un LLM local dañará mi portátil con el tiempo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No se espera un daño inmediato en un portátil en buen estado: los chips bajan su velocidad de reloj cuando se calientan, así que la inferencia sostenida ralentiza el equipo en lugar de dañarlo. Aun así, el calor sostenido desgasta con el tiempo los ventiladores y la batería, por lo que conviene usar un soporte o una base refrigerante, mantener libres las rejillas de ventilación y hacer pausas. Sigue las indicaciones del fabricante sobre temperatura y cuidado de la batería."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo ejecutar un LLM local en un portátil con 4 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apenas. Un modelo pequeño como Qwen3 1.7B (archivo de 1.4 GB) o Llama 3.2 1B (archivo de 1.3 GB) cabe, pero el sistema operativo necesita 2–3 GB, así que con 4 GB en total es probable que se use swap, lo que ralentiza mucho la generación. El mínimo práctico para una experiencia cómoda es 8 GB. Consulta [LLMs locales más rápidos para PCs de gama baja](/es/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi portátil necesita una GPU dedicada para ejecutar LLMs locales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Ollama, LM Studio y GPT4All funcionan solo con CPU. Una GPU con alto ancho de banda de memoria acelera la generación, pero los modelos de 3B–4B son utilizables en CPU a unos 15–30 tok/s estimados con RAM de doble canal. Consulta [Mejores modelos de LLM local para principiantes](/es/local-llms/best-beginner-local-llm-models) para ver recomendaciones aptas para CPU."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el LLM local más rápido que puedo ejecutar en un MacBook de 8 GB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre los modelos de esta guía, Llama 3.2 3B en Q4_K_M (archivo de 2.0 GB) es la opción práctica más rápida en un MacBook de 8 GB. En un M2 o M3 (ambos de 100 GB/s según Apple) el techo de ancho de banda es de unos 50 tok/s y la estimación de PromptQuorum es de 35–45 tok/s. Un archivo de 8B (5.2 GB) queda justo en 8 GB porque macOS y tus aplicaciones también necesitan memoria."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo reduzco el throttling térmico de un portátil durante la inferencia de un LLM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cuatro pasos: (1) eleva el portátil con un soporte que deje espacio para el flujo de aire, (2) prueba un modo de energía equilibrado o bajo, porque la generación está limitada por el ancho de banda de memoria más que por la velocidad de reloj, (3) limita la longitud de generación y el contexto, y (4) usa Q4_K_M en lugar de Q8_0 para que cada token lea menos datos. Comprueba tu velocidad durante 10 minutos con `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo ejecutar un LLM local en un Chromebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Solo en Chromebooks con Linux (Crostini) activado, y solo modelos pequeños. La mayoría de los Chromebooks tienen 4–8 GB de RAM y un ancho de banda de memoria modesto, así que un modelo de 1B–3B en Q4_K_M es el techo realista y la velocidad será baja. Los Chromebooks sin soporte de Linux no pueden ejecutar Ollama."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es Apple Silicon mejor que una GPU NVIDIA de portátil para LLMs locales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende de la memoria. La velocidad sigue al ancho de banda y a la capacidad de memoria: un MacBook de 16 GB con M5 (153 GB/s) tiene un techo cercano a 29 tok/s con Qwen3 8B, mientras que una GPU de portátil RTX 4060 (unos 256 GB/s, 8 GB de VRAM) tiene un techo cercano a 49 tok/s pero solo aloja modelos que quepan en 8 GB. Un M5 Pro (307 GB/s) o un M5 Max (460–614 GB/s) con más memoria aloja modelos más grandes en memoria rápida. El consumo varía según el modelo, así que revisa tu portátil."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si el modelo es demasiado grande para la RAM de mi portátil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El sistema operativo empieza a usar swap en disco, o el modelo no se carga, y la generación puede volverse extremadamente lenta mientras los ventiladores van a tope. La solución es un modelo más pequeño, un nivel de cuantización más bajo (Q4_K_M en lugar de Q8_0) o un contexto más corto (`OLLAMA_CONTEXT_LENGTH`, 4096 por defecto)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto dura la batería al ejecutar LLMs locales en un portátil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La autonomía es aproximadamente la capacidad de la batería en Wh dividida entre el consumo medio en W. Una batería de 60 Wh a 20 W dura unas 3 horas y a 30 W unas 2 horas (cálculo ilustrativo, no una medición). El consumo real varía según el portátil, el modelo y el modo de energía. Para un uso de todo el día, conecta el cargador."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito conexión a internet para ejecutar un LLM local en un portátil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Después de descargar el modelo (lo que requiere internet), la inferencia es totalmente offline. El modelo se ejecuta por completo en la CPU o la GPU del portátil. Esto hace útiles los LLMs locales para viajar, para entornos seguros o para lugares con conectividad poco fiable."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo ejecutar un LLM local con 8 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Un portátil de 8 GB ejecuta un modelo de 3B–4B en Q4_K_M (archivos de 2.0–2.5 GB) a unos 15–30 tok/s estimados con RAM de doble canal, o a unos 28–45 tok/s estimados en un Apple M2 o M3. Los modelos de 7B–8B (archivos de 4.4–5.2 GB) quedan justos en 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el portátil más rápido para LLMs locales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para los LLMs locales, las especificaciones clave son el ancho de banda de memoria y tener suficiente memoria. Apple indica 307 GB/s para el M5 Pro (hasta 64 GB) y 460 o 614 GB/s para el M5 Max (hasta 128 GB); con Qwen3 8B, las estimaciones de PromptQuorum son de 41–53 tok/s en un M5 Pro y de 62–106 tok/s en un M5 Max. En Windows, un portátil con una GPU NVIDIA que aloje el modelo en VRAM tiene un techo alto, por ejemplo unos 256 GB/s para una GPU de portátil RTX 4060 con 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tan lentos son los LLMs locales en CPU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La velocidad es como máximo el ancho de banda de memoria ÷ el tamaño del archivo del modelo. Con DDR4/DDR5 de doble canal, un modelo de 3B–4B en Q4_K_M funciona a unos 15–30 tok/s estimados y Qwen3 8B a unos 8–15 tok/s estimados; la RAM de un solo canal lo reduce a la mitad. Es lo bastante lento como para ir leyendo mientras se genera, pero lo bastante rápido para chat y resúmenes. Apple Silicon alcanza unos 13–26 tok/s estimados con Qwen3 8B (de M3 a M5) porque la memoria unificada tiene más ancho de banda."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Cómo reducir el throttling térmico de un portátil durante la inferencia de un LLM local",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Usa un soporte para portátil con espacio para el flujo de aire",
          "text": "Eleva el portátil con un soporte para mejorar la salida de aire, lo que puede retrasar el throttling."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prueba un modo de energía más bajo",
          "text": "La generación de tokens está limitada por el ancho de banda de memoria y no por la velocidad de reloj, así que un plan de energía equilibrado o bajo (en macOS, el Modo de bajo consumo) puede reducir el calor. Pruébalo en tu equipo."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Limita la longitud de generación y el contexto",
          "text": "Divide las tareas largas en prompts más cortos y evita regenerar respuestas muy largas de una sola vez."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Usa la cuantización Q4_K_M en lugar de Q8_0",
          "text": "El archivo es unas 1.7 veces más pequeño, así que cada token lee menos datos de la memoria y el chip está bajo carga menos tiempo."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "pt": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "LLM Local em um Notebook: O Que Roda em 8GB, 16GB e Apple Silicon (2026)",
    "seoTitle": "LLM Local em Notebook (2026): 8GB, 16GB e Apple Silicon",
    "intro": "Dá para rodar um LLM local em um notebook com 8 GB de RAM: um modelo 3B–4B em Q4_K_M roda a cerca de 15–30 tok/s estimados com RAM dual-channel, e um notebook de 16 GB roda modelos 8B a 8–15 tok/s estimados. O Apple Silicon é mais rápido porque sua memória unificada tem mais largura de banda. As velocidades são estimativas da PromptQuorum derivadas da largura de banda da memória, não medições de laboratório; temperatura e bateria limitam por quanto tempo o notebook as sustenta.",
    "metaDescription": "LLM local em notebook: o que cabe em 8 GB, 16 GB e Apple Silicon, tok/s estimados pela largura de banda da memória, além de temperatura e bateria.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-pt.webp",
    "twitterDescription": "LLM local em notebook: 8 GB de RAM rodam um modelo 3B–4B a est. 15–30 tok/s, 16 GB rodam 8B a est. 8–15 tok/s. Estimativas pela largura de banda, não testes de laboratório.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**Um notebook roda um LLM local: 8 GB de RAM comportam um modelo 3B–4B a 15–30 tok/s (est.) e 16 GB comportam modelos 8B a 8–15 tok/s (est.) na CPU. O Apple Silicon é mais rápido. Velocidades são estimativas da PromptQuorum pela largura de banda, não medições de laboratório.**",
    "comparisonTable": {
      "columns": [
        "Configuração",
        "Tamanho do modelo",
        "Velocidade",
        "Experiência"
      ],
      "rows": [
        {
          "Configuração": "8 GB de RAM, CPU",
          "Tamanho do modelo": "3B–4B",
          "Velocidade": "est. 15–30 tok/s",
          "Experiência": "Chat, resumos, código simples"
        },
        {
          "Configuração": "16 GB de RAM, CPU",
          "Tamanho do modelo": "8B–9B",
          "Velocidade": "est. 8–15 tok/s",
          "Experiência": "Uso geral com multitarefa"
        },
        {
          "Configuração": "Apple Silicon (M3 a M5), 16 GB",
          "Tamanho do modelo": "8B",
          "Velocidade": "est. 13–26 tok/s",
          "Experiência": "Mais largura de banda que a RAM de um notebook comum"
        },
        {
          "Configuração": "Notebook com GPU (RTX 4060, 8 GB de VRAM)",
          "Tamanho do modelo": "8B",
          "Velocidade": "est. 34–44 tok/s",
          "Experiência": "Rápido se o modelo couber na VRAM; muito calor e consumo de energia"
        }
      ]
    },
    "audience": "Iniciantes rodando o primeiro LLM local em hardware de consumo",
    "readTime": "8 min de leitura",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "Resposta Rápida: Qual LLM Local Roda no Seu Notebook?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "Pontos principais",
        "anchor": "#key-takeaways"
      },
      {
        "label": "É Possível Rodar um LLM Local em um Notebook?",
        "anchor": "#can-you-run"
      },
      {
        "label": "É Possível Rodar RAG em um Notebook?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "Qual Configuração Você Precisa?",
        "anchor": "#use-case"
      },
      {
        "label": "Quais Modelos de LLM Local Rodam Melhor em um Notebook?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon vs Notebook Windows",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "Notebook vs Desktop para LLMs Locais",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "Como Lidar com o Throttling Térmico",
        "anchor": "#thermals"
      },
      {
        "label": "Quanta Bateria um LLM Local Consome?",
        "anchor": "#battery-drain"
      },
      {
        "label": "Qual Nível de Quantização Usar em um Notebook?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "Quais Leis de Privacidade se Aplicam a LLMs Locais em um Notebook?",
        "anchor": "#regional-context"
      },
      {
        "label": "Quais São os Erros Comuns ao Rodar LLMs Locais em Notebooks?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "Leituras Relacionadas",
        "anchor": "#related-reading"
      },
      {
        "label": "Perguntas Comuns Sobre Rodar LLMs Locais em Notebooks",
        "anchor": "#faq"
      },
      {
        "label": "Fontes",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "É possível rodar um LLM local em um notebook?",
      "answer": "Sim. Um notebook de 8 GB roda um modelo 3B–4B em Q4_K_M, por exemplo o Llama 3.2 3B (arquivo de 2.0 GB), a cerca de 18–30 tok/s estimados com RAM dual-channel. Um notebook de 16 GB roda modelos 8B–9B, como o Qwen3 8B (arquivo de 5.2 GB), a 8–15 tok/s estimados na CPU. O Apple Silicon é mais rápido porque a memória unificada tem mais largura de banda: estimados 13–17 tok/s em um M3 e 21–26 tok/s em um M5 com o Qwen3 8B. Todas as velocidades são estimativas da PromptQuorum derivadas da largura de banda da memória, não medições de laboratório.",
      "bullets": [
        "8 GB de RAM: Llama 3.2 3B (arquivo de 2.0 GB) ou Phi-4-mini (2.5 GB), est. 15–30 tok/s com RAM dual-channel",
        "16 GB de RAM: Qwen3 8B (arquivo de 5.2 GB) ou Llama 3.1 8B (4.9 GB), est. 8–15 tok/s na CPU",
        "Apple Silicon: Qwen3 8B a est. 13–17 tok/s em um M3 (100 GB/s) e 21–26 tok/s em um M5 (153 GB/s)",
        "Regra de velocidade: tok/s é no máximo a largura de banda da memória ÷ o tamanho do arquivo do modelo; RAM single-channel reduz isso pela metade",
        "Carga sustentada pode reduzir o clock e esgota a bateria rápido: conecte na tomada e dê ventilação ao notebook"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "Resposta Rápida: Qual LLM Local Roda no Seu Notebook (8GB, 16GB, Apple Silicon)?",
        "content": [
          "**Você pode rodar um LLM local em um notebook com 8 GB de RAM: um modelo 3B–4B em Q4_K_M roda a cerca de 15–30 tok/s estimados com RAM dual-channel.** A tabela combina seu hardware com um modelo. As velocidades são estimativas da PromptQuorum derivadas da largura de banda da memória (tok/s ≈ largura de banda ÷ tamanho do arquivo do modelo), não medições de laboratório."
        ],
        "rows": [
          {
            "Seu notebook": "8 GB de RAM, somente CPU",
            "Melhor modelo": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Premissa de hardware": "DDR4/DDR5 dual-channel"
          },
          {
            "Seu notebook": "16 GB de RAM, somente CPU",
            "Melhor modelo": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "tok/s est.": "8–15",
            "Premissa de hardware": "DDR4/DDR5 dual-channel"
          },
          {
            "Seu notebook": "Apple M3, 16 GB",
            "Melhor modelo": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "13–17",
            "Premissa de hardware": "Memória unificada de 100 GB/s"
          },
          {
            "Seu notebook": "Apple M5, 16 GB",
            "Melhor modelo": "Qwen3 8B, Q4_K_M",
            "tok/s est.": "21–26",
            "Premissa de hardware": "Memória unificada de 153 GB/s"
          },
          {
            "Seu notebook": "Intel Iris Xe / iGPU AMD",
            "Melhor modelo": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s est.": "15–30",
            "Premissa de hardware": "Compartilha a RAM do sistema; verifique com ollama ps"
          }
        ],
        "columns": [
          "Seu notebook",
          "Melhor modelo",
          "tok/s est.",
          "Premissa de hardware"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-pt.webp",
        "imageCaption": "LLM local em notebook: modelos Q4_K_M por faixa de RAM, com tok/s estimados"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Um notebook com 8 GB de RAM roda um LLM local 3B–4B a cerca de 15–30 tok/s estimados, um notebook de 16 GB roda modelos 8B–9B a 8–15 tok/s estimados, e o Apple Silicon é mais rápido porque a memória unificada tem mais largura de banda."
          },
          {
            "type": "plain-terms",
            "text": "Os principais limites do seu notebook são a RAM e a largura de banda da memória. O arquivo do modelo precisa caber na RAM, e cada token gerado lê o arquivo inteiro uma vez, então a velocidade é no máximo a largura de banda da memória dividida pelo tamanho do arquivo. Notebooks também podem desacelerar sob carga sustentada (throttling térmico); um suporte, a tomada e um modelo menor ajudam."
          }
        ],
        "items": [
          "Um modelo 3B–4B em Q4_K_M roda em um notebook com 8 GB de RAM: Llama 3.2 3B (arquivo de 2.0 GB) a cerca de 18–30 tok/s estimados e Phi-4-mini (2.5 GB) a 15–25 tok/s estimados.",
          "16 GB de RAM comportam modelos 8B–9B em Q4_K_M: Qwen3 8B (arquivo de 5.2 GB) a 8–15 tok/s estimados com RAM dual-channel, 13–17 tok/s em um Apple M3 e 21–26 tok/s em um Apple M5.",
          "Regra de velocidade: tokens por segundo é no máximo a largura de banda da memória ÷ o tamanho do arquivo do modelo (um teto; a velocidade real é menor). DDR4-3200 dual-channel tem 51.2 GB/s, DDR5-5600 dual-channel tem 89.6 GB/s, e single-channel reduz o resultado pela metade. A Apple publica 100 GB/s para o M3 e 153 GB/s para o M5.",
          "Todas as velocidades desta página são estimativas da PromptQuorum derivadas da largura de banda da memória, não medições de laboratório. Rode `ollama run <model> --verbose` para ver seus próprios tokens por segundo.",
          "Conecte na tomada em sessões longas e dê ventilação ao notebook: carga sustentada pode fazer os chips reduzirem o clock, e a inferência ativa esgota a bateria bem mais rápido que o uso leve."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "Em Uma Frase",
        "content": [
          "Um LLM local pode rodar em um notebook usando modelos quantizados: o Q4_K_M reduz o arquivo para cerca de 31% do tamanho em FP16 (4.58 GiB em vez de 14.96 GiB para o Llama 3.1 8B) com uma pequena perda de qualidade."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "Em Termos Simples",
        "content": [
          "Rodar um LLM localmente significa rodar o chatbot no seu próprio notebook, e não nos servidores de um provedor: é privado e funciona offline, mas é mais lento que um serviço na nuvem."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "Quando Você Deve Rodar um LLM em um Notebook?",
        "items": [
          "✅ **Use LLMs locais se:** você precisa que os dados fiquem no dispositivo, trabalha offline, não quer custo de API por token",
          "❌ **NÃO use se:** você precisa da melhor qualidade de raciocínio, precisa de contexto muito longo (100 mil+ tokens, porque o KV cache cresce com o contexto), precisa de processamento em lote rápido — veja [limitações dos LLMs locais](/pt/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "É Possível Rodar um LLM Local em um Notebook?",
        "content": [
          "**Sim -- com o tamanho de modelo certo.** Um notebook com 8 GB de RAM roda um modelo 3B–4B em Q4_K_M a cerca de 15–30 tok/s estimados com RAM dual-channel (Llama 3.2 3B: 18–30, Phi-4-mini: 15–25). Um notebook Apple Silicon com 16 GB roda um modelo 8B a 13–26 tok/s estimados, dependendo do chip. Isso é mais lento que a maioria das APIs na nuvem, mas rápido o bastante para acompanhar a leitura.",
          "O teto prático em um notebook de 8 GB é um modelo 3B–4B; arquivos de modelos 7B–8B (4.4–5.2 GB) deixam pouca folga para o sistema operacional e o navegador. Um modelo 14B em Q4_K_M (Qwen3 14B: arquivo de 9.3 GB) cabe em uma máquina de 16 GB apenas com contexto curto e outros aplicativos fechados.",
          "As velocidades aqui são estimativas da PromptQuorum derivadas da largura de banda da memória, não medições de laboratório. Para faixas abaixo de 8 GB e a regra completa de largura de banda, veja **[LLMs locais mais rápidos para PCs básicos](/pt/local-llms/fastest-local-llms-low-end-pcs)**; para notebooks sem GPU, veja **[Melhores LLMs Locais Somente CPU 2026](/pt/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "É Possível Rodar RAG (Recuperação) em um Notebook?",
        "content": [
          "**Sim -- o RAG roda em um notebook, porque a restrição real continua sendo o modelo de chat, não a camada de recuperação.** Uma stack de RAG em notebook tem três partes: um modelo de embedding pequeno, um vector store local e seu modelo de chat.",
          "O modelo de embedding é pequeno: o nomic-embed-text tem 274 MB no Ollama (janela de contexto de 2K), então adiciona pouca pressão de RAM. Em um notebook de 8 GB você roda um modelo de chat 3B mais um modelo de embedding; com 16 GB você tem folga para um modelo de chat 8B junto com a recuperação.",
          "**2 GB de RAM só funcionam em configurações muito pequenas.** O Qwen3 0.6B (523 MB) mais o nomic-embed-text somam cerca de 0.8 GB de arquivos e cabem quando 2 GB estão realmente livres. Em um notebook típico o sistema operacional ocupa 2–3 GB, e o swap em disco desacelera muito a geração, então considere 8 GB como o piso prático."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "Qual Configuração de Notebook Você Precisa Para o Seu Caso de Uso?",
        "items": [
          "**Para iniciantes** — 8 GB de RAM, modelos 3B–4B, somente CPU. Espere cerca de 15–30 tok/s estimados. Suficiente para chat, resumos e código simples.",
          "**Para desenvolvedores** — 16 GB de RAM, modelos 8B–9B, GPU opcional. Dá para fazer multitarefa sem fechar outros apps (est. 8–15 tok/s na CPU).",
          "**Para usuários avançados** — Apple Silicon com chip Pro ou Max, ou notebook com GPU de 8 GB+ de VRAM, modelos 8B–14B. Estimativas para o Qwen3 8B: 41–53 tok/s em um M5 Pro (307 GB/s) e 34–44 tok/s em uma GPU de notebook RTX 4060 (cerca de 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "Quem Pode Rodar um LLM Local em um Notebook?",
        "items": [
          "**Iniciantes** → [LM Studio](/pt/local-llms/how-to-install-lm-studio) + modelo 3B",
          "**Intermediários** → [Ollama](/pt/local-llms/how-to-install-ollama) + modelo 8B",
          "**Usuários avançados** → 14B com [ajuste de quantização](/pt/local-llms/llm-quantization-explained)",
          "❌ **NÃO use um notebook se:** você precisa de APIs em tempo real (use um servidor vLLM), processa grandes conjuntos de dados (use GPUs na nuvem)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "Qual Tamanho de Modelo de LLM Local Você Precisa?",
        "content": "Os tamanhos de arquivo são os downloads do Ollama conferidos em ollama.com em 2026-10-23, com quantização da classe Q4_K_M (cerca de 70% menor que o FP16). RAM mín. é o arquivo mais cerca de 0.5 GB de overhead; deixe mais 2–4 GB para o sistema operacional e o navegador:",
        "rows": [
          {
            "Modelo": "Llama 3.2 3B",
            "Arquivo (Ollama)": "2.0 GB",
            "RAM mín.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Melhor uso": "Tarefas básicas, chat, resumos"
          },
          {
            "Modelo": "Phi-4-mini 3.8B",
            "Arquivo (Ollama)": "2.5 GB",
            "RAM mín.": "3 GB",
            "tok/s est.": "15–25",
            "Melhor uso": "Raciocínio e código em 8 GB"
          },
          {
            "Modelo": "Qwen3 8B",
            "Arquivo (Ollama)": "5.2 GB",
            "RAM mín.": "6 GB",
            "tok/s est.": "8–15",
            "Melhor uso": "Uso geral, multilíngue, código"
          },
          {
            "Modelo": "Qwen3 14B",
            "Arquivo (Ollama)": "9.3 GB",
            "RAM mín.": "10 GB",
            "tok/s est.": "4–8",
            "Melhor uso": "Tarefas mais difíceis em 16 GB, contexto curto"
          }
        ],
        "columns": [
          "Modelo",
          "Arquivo (Ollama)",
          "RAM mín.",
          "tok/s est.",
          "Melhor uso"
        ],
        "note": "As estimativas são da PromptQuorum, não medições de laboratório, para um notebook com DDR4-3200 a DDR5-5600 dual-channel (51.2–89.6 GB/s); RAM single-channel reduz tudo pela metade. Exemplo com Q4_K_M: o Llama 3.1 8B tem 14.96 GiB em FP16 e 4.58 GiB em Q4_K_M (README do quantize do llama.cpp), cerca de 69% menor. → [Calculadora de VRAM](/pt/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "Notebook com 8 GB vs 16 GB de RAM: Qual a Diferença Prática?",
        "rows": [
          {
            "Cenário": "Tamanho máximo do modelo",
            "8 GB RAM": "3B–4B confortável; 7B–8B (arquivos de 4.4–5.2 GB) apertado",
            "16 GB RAM": "8B–9B confortável; 14B (9.3 GB) com contexto curto"
          },
          {
            "Cenário": "Modelo com navegador aberto",
            "8 GB RAM": "3B–4B (apertado)",
            "16 GB RAM": "8B–9B com folga"
          },
          {
            "Cenário": "Primeiro modelo recomendado",
            "8 GB RAM": "llama3.2:3b ou phi4-mini",
            "16 GB RAM": "qwen3:8b ou llama3.1:8b"
          },
          {
            "Cenário": "Apps simultâneos",
            "8 GB RAM": "Feche o navegador antes de carregar um modelo 8B",
            "16 GB RAM": "Multitarefa normal com um modelo 8B"
          }
        ],
        "columns": [
          "Cenário",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "Quais Modelos de LLM Local Rodam Melhor em um Notebook?",
        "content": "**Estes modelos se encaixam nos limites de um notebook: arquivos pequenos dão mais tokens por segundo com a mesma largura de banda de memória.** As velocidades são estimativas da PromptQuorum para um notebook com DDR4-3200 a DDR5-5600 dual-channel (51.2–89.6 GB/s), derivadas do teto de largura de banda (largura de banda ÷ tamanho do arquivo no Ollama), não medições de laboratório; RAM single-channel reduz tudo pela metade. Os tamanhos de arquivo são os downloads do Ollama conferidos em 2026-10-23. Para os requisitos de VRAM entre modelos e configurações de notebook, veja o [guia de requisitos de VRAM →](/pt/local-llms/how-much-vram-local-llm). Instale o [Ollama](/pt/local-llms/how-to-install-ollama) para rodar qualquer um deles com um único comando. Sem GPU? Veja **[Melhores LLMs Locais Somente CPU 2026](/pt/local-llms/best-cpu-only-llm)**. Estes são modelos de pesos abertos (open-weights); confira a licença no model card de cada um.",
        "rows": [
          {
            "Modelo": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "Arquivo (Ollama)": "2.0 GB",
            "RAM mín.": "2.5–3 GB",
            "tok/s est.": "18–30",
            "Melhor para": "Notebooks de 8 GB, tarefas rápidas"
          },
          {
            "Modelo": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "Arquivo (Ollama)": "2.5 GB",
            "RAM mín.": "3 GB",
            "tok/s est.": "15–25",
            "Melhor para": "Notebooks de 8 GB, raciocínio e código"
          },
          {
            "Modelo": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "Arquivo (Ollama)": "5.2 GB",
            "RAM mín.": "6 GB",
            "tok/s est.": "8–15",
            "Melhor para": "Notebooks de 16 GB, multilíngue, código"
          },
          {
            "Modelo": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "Arquivo (Ollama)": "4.9 GB",
            "RAM mín.": "5.5 GB",
            "tok/s est.": "8–14",
            "Melhor para": "Notebooks de 16 GB, uso geral"
          },
          {
            "Modelo": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "Arquivo (Ollama)": "6.6 GB",
            "RAM mín.": "7–8 GB",
            "tok/s est.": "6–12",
            "Melhor para": "Notebooks de 16 GB, família mais nova, entrada de imagem"
          }
        ],
        "columns": [
          "Modelo",
          "Arquivo (Ollama)",
          "RAM mín.",
          "tok/s est.",
          "Melhor para"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-pt.webp",
        "imageCaption": "Melhores modelos de LLM local para notebook por tamanho de arquivo, com tok/s estimados em RAM dual-channel"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "Com Qual Configuração de LLM Local Começar em um Notebook?",
        "content": [
          "O hardware do notebook limita o tamanho do modelo, mas prompts claros e estruturados podem melhorar a saída de modelos menores. Veja o [guia de engenharia de prompt](/pt/prompt-engineering) para técnicas adequadas a modelos menores."
        ],
        "items": [
          "🥇 **Início simples pela linha de comando:** [Ollama](/pt/local-llms/how-to-install-ollama) — um comando por modelo, amplo suporte a modelos",
          "🥈 **Mais fácil para iniciantes:** [LM Studio](/pt/local-llms/how-to-install-lm-studio) — interface gráfica, sem terminal",
          "🥉 **Pouca RAM (8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **Mais qualidade em 16 GB:** Qwen3 8B (Q4_K_M, ou Q5_K_M se a velocidade permitir)",
          "💡 **Na dúvida:** comece com Ollama + Llama 3.2 3B Q4_K_M"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon vs Notebook Windows: Qual É Melhor Para LLMs Locais?",
        "content": [
          "**Os MacBooks com Apple Silicon são uma ótima escolha para LLMs locais porque a memória unificada dá à GPU acesso de alta largura de banda a todo o pool de memória.** A velocidade é definida pela largura de banda da memória: a Apple publica 100 GB/s para o M3, 153 GB/s para o M5, 307 GB/s para o M5 Pro e 460 ou 614 GB/s para o M5 Max (dependendo dos núcleos de GPU). O MacBook Pro com M5 Pro e M5 Max, anunciado em 3 de março de 2026, oferece até 64 GB e 128 GB de memória unificada.",
          "Um notebook Windows com GPU NVIDIA dedicada pode ser mais rápido quando o modelo cabe na VRAM. A GPU de notebook RTX 4060 tem 8 GB de GDDR6 em um barramento de 128 bits (NVIDIA); a 16 Gbps (especificação de terceiros) isso dá cerca de 256 GB/s, então o Qwen3 8B (5.2 GB) tem um teto próximo de 49 tok/s. A contrapartida é maior consumo de energia e calor.",
          "Notebooks Windows apenas com gráficos integrados Intel Iris Xe ou AMD Radeon são limitados pela largura de banda da RAM do sistema. A documentação do Ollama diz que o suporte a GPU via Vulkan vem ativado por padrão quando o backend está instalado e não lista os gráficos integrados da Intel em uma tabela de suporte, então confira a coluna PROCESSOR do `ollama ps`. Uma iGPU compartilha a mesma RAM, então os ganhos costumam ser modestos.",
          "**Melhores modelos para gráficos integrados (Intel Iris Xe / AMD Radeon):** Com 16 GB de RAM, escolha um modelo 3B–4B em Q4_K_M pela velocidade (Llama 3.2 3B, est. 18–30 tok/s com RAM dual-channel) ou o Qwen3 8B pela qualidade (est. 8–15 tok/s). Priorize um modelo que fique com folga dentro da RAM. Para uma configuração passo a passo em hardware básico, veja [LLMs locais mais rápidos para PCs básicos](/pt/local-llms/fastest-local-llms-low-end-pcs).",
          "Método da tabela: cada estimativa equivale a cerca de 70–90% do teto (largura de banda ÷ o arquivo de 5.2 GB do Qwen3 8B). São estimativas da PromptQuorum, não medições de laboratório."
        ],
        "rows": [
          {
            "Tipo de notebook": "Apple M3, 16 GB",
            "Largura de banda da memória": "100 GB/s",
            "tok/s est. do Qwen3 8B": "13–17",
            "Modelo máximo prático": "~9B (14B apertado)"
          },
          {
            "Tipo de notebook": "Apple M5, 16 GB",
            "Largura de banda da memória": "153 GB/s",
            "tok/s est. do Qwen3 8B": "21–26",
            "Modelo máximo prático": "~9B (14B apertado)"
          },
          {
            "Tipo de notebook": "Apple M5 Pro",
            "Largura de banda da memória": "307 GB/s",
            "tok/s est. do Qwen3 8B": "41–53",
            "Modelo máximo prático": "Limitado pela memória (até 64 GB)"
          },
          {
            "Tipo de notebook": "Apple M5 Max",
            "Largura de banda da memória": "460–614 GB/s",
            "tok/s est. do Qwen3 8B": "62–106",
            "Modelo máximo prático": "Limitado pela memória (até 128 GB)"
          },
          {
            "Tipo de notebook": "Notebook RTX 4060 (8 GB de VRAM)",
            "Largura de banda da memória": "~256 GB/s",
            "tok/s est. do Qwen3 8B": "34–44",
            "Modelo máximo prático": "~8B na VRAM"
          },
          {
            "Tipo de notebook": "Notebook DDR5-5600 dual-channel",
            "Largura de banda da memória": "89.6 GB/s",
            "tok/s est. do Qwen3 8B": "12–15",
            "Modelo máximo prático": "~9B (16 GB de RAM)"
          },
          {
            "Tipo de notebook": "Notebook DDR4-3200 single-channel",
            "Largura de banda da memória": "25.6 GB/s",
            "tok/s est. do Qwen3 8B": "3–4",
            "Modelo máximo prático": "3B–4B recomendado"
          }
        ],
        "columns": [
          "Tipo de notebook",
          "Largura de banda da memória",
          "tok/s est. do Qwen3 8B",
          "Modelo máximo prático"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "Um Notebook É Bom o Suficiente Para LLMs Locais Comparado a um Desktop?",
        "content": [
          "**Notebooks rodam modelos de 3B–14B com eficácia, mas desktops vão mais longe graças à melhor refrigeração e a placas de vídeo dedicadas com largura de banda de memória muito maior.** Uma RTX 4090 de desktop tem 24 GB de VRAM e 1008 GB/s de largura de banda (NVIDIA), o suficiente para manter na VRAM arquivos de modelo de até cerca de 20 GB, como o Gemma 4 31B (19–20 GB no Ollama). Um modelo 70B em Q4 é um arquivo de 43 GB no Ollama (llama3.3:70b), que não cabe em 24 GB e precisa ser dividido com a RAM do sistema, bem mais lenta.",
          "Use um notebook para portabilidade e experimentação. Use um desktop para modelos grandes (14B+), cargas de trabalho sustentadas ou inferência em produção. Está escolhendo entre plataformas? Veja o [guia de compra notebook vs desktop para LLMs locais](/pt/local-llms/laptop-vs-desktop-local-llm) para uma análise completa de custo e desempenho."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "Como Lidar com o Throttling Térmico em um Notebook?",
        "content": [
          "**O throttling térmico ocorre quando a CPU ou a GPU atinge o limite de temperatura e reduz o clock para esfriar.** A inferência local é uma carga sustentada, então um notebook fino pode desacelerar depois de um tempo; quanto e com que rapidez depende do projeto de refrigeração. Confira sua própria velocidade ao longo de 10 minutos com `ollama run <model> --verbose`."
        ],
        "items": [
          "**Use um suporte para notebook com espaço para ventilação** -- elevar o notebook melhora o fluxo de ar de exaustão e pode adiar o throttling.",
          "**Experimente um modo de energia mais baixo** -- a geração de tokens é limitada pela largura de banda da memória, e não pelo clock, então um plano de energia equilibrado ou econômico (no macOS, Modo de Baixo Consumo) pode reduzir o calor e custar menos velocidade do que você espera; teste na sua máquina.",
          "**Limite o tamanho da geração e do contexto** -- divida tarefas longas em prompts mais curtos e evite regenerar respostas muito longas.",
          "**Use Q4_K_M em vez de Q8_0** -- o arquivo é cerca de 1.7 vez menor (4.58 vs 7.95 GiB para o Llama 3.1 8B), então cada token lê menos dados da memória e o chip fica menos tempo sob carga."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "Quanta Bateria um LLM Local Consome?",
        "content": [
          "**O consumo de bateria durante a inferência local é significativo, porque a CPU ou a GPU trabalha em carga alta durante toda a geração.** A autonomia em horas é aproximadamente a capacidade da bateria em watt-hora dividida pelo consumo médio: uma bateria de 60 Wh a 20 W dura cerca de 3 horas, a 30 W cerca de 2 horas. São contas ilustrativas, não medições; o consumo real varia conforme notebook, modelo e modo de energia.",
          "A autonomia informada pelo fabricante não descreve a inferência. O valor da Apple de até 16 horas de navegação web sem fio no MacBook Pro de 14 polegadas com M5 (bateria de 72.4 Wh) é para uso leve, não para geração sustentada.",
          "Para sessões longas, conecte na tomada. Para usar com a bateria, escolha um modelo menor (um arquivo 3B tem menos da metade do tamanho de um arquivo 8B, então cada resposta termina mais cedo) e reduza o contexto."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "Qual Nível de Quantização Você Deve Usar em um Notebook?",
        "content": "A [quantização](/pt/local-llms/llm-quantization-explained) reduz a precisão do modelo para diminuir as necessidades de RAM e de largura de banda. Em notebooks, o Q4_K_M é o padrão habitual. Os tamanhos abaixo são do Llama 3.1 8B, do README do quantize do llama.cpp (14.96 GiB em FP16); outros modelos escalam de forma parecida:",
        "rows": [
          {
            "Quantização": "Q2_K",
            "Tamanho vs FP16": "~20% (2.95 GiB)",
            "Perda de qualidade": "Alta -- degradação perceptível",
            "Caso de uso": "Só quando nada mais cabe"
          },
          {
            "Quantização": "Q3_K_S",
            "Tamanho vs FP16": "~23% (3.41 GiB)",
            "Perda de qualidade": "Moderada",
            "Caso de uso": "Encaixar um modelo maior na RAM"
          },
          {
            "Quantização": "Q4_K_M",
            "Tamanho vs FP16": "~31% (4.58 GiB)",
            "Perda de qualidade": "Baixa -- padrão comum",
            "Caso de uso": "Maioria dos notebooks, bom equilíbrio"
          },
          {
            "Quantização": "Q5_K_M",
            "Tamanho vs FP16": "~36% (5.33 GiB)",
            "Perda de qualidade": "Pequena",
            "Caso de uso": "Notebooks de 16 GB se a velocidade permitir"
          },
          {
            "Quantização": "Q8_0",
            "Tamanho vs FP16": "~53% (7.95 GiB)",
            "Perda de qualidade": "Muito pequena",
            "Caso de uso": "RAM de sobra, velocidade não crítica"
          }
        ],
        "columns": [
          "Quantização",
          "Tamanho vs FP16",
          "Perda de qualidade",
          "Caso de uso"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "Quais Leis de Privacidade se Aplicam ao Rodar LLMs Locais em um Notebook?",
        "content": [
          "**União Europeia (GDPR):** Quando um modelo roda no seu próprio notebook, prompts e documentos não precisam sair do dispositivo, o que pode evitar o envio de dados pessoais a um operador terceiro. Se o GDPR, o EU AI Act ou outras obrigações se aplicam depende de quem implanta o sistema e com que finalidade; este guia não é aconselhamento jurídico, e a conformidade depende de toda a sua configuração, não de onde a inferência roda.",
          "**Alemanha:** Para empresas alemãs, manter documentos no dispositivo pode simplificar questões de proteção de dados, mas se uma configuração local cumpre suas obrigações (por exemplo, para dados confidenciais de clientes) é decidido caso a caso; consulte seu encarregado de proteção de dados.",
          "**Japão (APPI):** A Lei de Proteção de Informações Pessoais do Japão regula a transferência de dados pessoais para o exterior. Rodar a inferência no notebook evita enviar prompts a uma API no exterior, o que pode simplificar a questão da transferência; isso não substitui uma avaliação jurídica.",
          "**Estados Unidos:** Não existe uma lei federal única sobre dados de IA; regras setoriais como HIPAA (saúde), FERPA (educação) e leis estaduais de privacidade se aplicam conforme o uso. Manter os dados em um dispositivo local pode reduzir o número de terceiros que lidam com eles, mas você continua responsável por proteger o dispositivo e os dados."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Perguntas Comuns Sobre Rodar LLMs Locais em Notebooks",
        "faqs": [
          {
            "q": "Quais são os melhores modelos do Ollama para Intel Iris Xe com 16 GB de RAM?",
            "a": "Em um notebook com gráficos Intel Iris Xe e 16 GB de RAM, a velocidade é limitada pela largura de banda da RAM do sistema. Se o Ollama usa a iGPU depende do suporte de driver e de backend (confira a coluna PROCESSOR do `ollama ps`), e uma iGPU compartilha a mesma RAM, então os ganhos costumam ser modestos. Escolha um modelo 3B–4B em Q4_K_M pela velocidade: Llama 3.2 3B (est. 18–30 tok/s com RAM dual-channel) com `ollama run llama3.2:3b`, ou Qwen3 8B (est. 8–15 tok/s) com `ollama run qwen3:8b` para mais qualidade. As velocidades são estimativas da PromptQuorum, não medições de laboratório."
          },
          {
            "q": "É possível rodar RAG localmente em um notebook?",
            "a": "Sim. Uma stack de RAG em notebook é um modelo de embedding pequeno mais um vector store local mais o seu modelo de chat. O modelo de embedding é pequeno (o nomic-embed-text tem 274 MB no Ollama), então o modelo de chat continua sendo a restrição de RAM: um notebook de 8 GB roda um modelo de chat 3B com recuperação, e 16 GB deixam espaço para um modelo 8B. Veja a [seção sobre RAG em notebook](#rag-laptop) acima para o detalhamento de RAM."
          },
          {
            "q": "Qual é o melhor LLM local somente CPU para um notebook?",
            "a": "Entre os modelos comparados no guia somente CPU, o Phi-4 Mini (3.8B, arquivo de 2.5 GB) é a melhor escolha geral, a cerca de 15–25 tok/s estimados com RAM dual-channel, e o Llama 3.2 3B (arquivo de 2.0 GB) é o menor arquivo, a 18–30 tok/s estimados, ambos em Q4_K_M. Para a comparação completa e os comandos do Ollama, veja [Melhores LLMs Locais Somente CPU 2026](/pt/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "Rodar um LLM local vai danificar meu notebook com o tempo?",
            "a": "Nenhum dano imediato é esperado em um notebook saudável: os chips reduzem o clock quando esquentam, então a inferência sustentada deixa a máquina mais lenta em vez de danificá-la. Ainda assim, calor prolongado desgasta ventoinhas e bateria com o tempo, então use um suporte ou base de resfriamento, mantenha as saídas de ar desobstruídas e faça pausas. Siga as orientações do fabricante sobre temperatura e cuidados com a bateria."
          },
          {
            "q": "Posso rodar um LLM local em um notebook com 4 GB de RAM?",
            "a": "Mal dá. Um modelo pequeno como o Qwen3 1.7B (arquivo de 1.4 GB) ou o Llama 3.2 1B (arquivo de 1.3 GB) cabe, mas o sistema operacional precisa de 2–3 GB, então com 4 GB no total você provavelmente vai cair no swap, que desacelera muito a geração. O mínimo prático para uma experiência confortável é 8 GB. Veja [LLMs locais mais rápidos para PCs básicos](/pt/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "Meu notebook precisa de uma GPU dedicada para rodar LLMs locais?",
            "a": "Não. Ollama, LM Studio e GPT4All rodam somente com CPU. Uma GPU com alta largura de banda de memória acelera a geração, mas modelos 3B–4B são utilizáveis na CPU a cerca de 15–30 tok/s estimados com RAM dual-channel. Veja [Melhores Modelos de LLM Local Para Iniciantes](/pt/local-llms/best-beginner-local-llm-models) para recomendações de modelos que rodam bem na CPU."
          },
          {
            "q": "Qual é o LLM local mais rápido que posso rodar em um MacBook de 8 GB?",
            "a": "Entre os modelos deste guia, o Llama 3.2 3B em Q4_K_M (arquivo de 2.0 GB) é a escolha prática mais rápida em um MacBook de 8 GB. Em um M2 ou M3 (ambos com 100 GB/s segundo a Apple) o teto de largura de banda é de cerca de 50 tok/s e a estimativa da PromptQuorum é de 35–45 tok/s. Um arquivo 8B (5.2 GB) fica apertado em 8 GB porque o macOS e seus apps também precisam de memória."
          },
          {
            "q": "Como reduzo o throttling térmico em um notebook durante a inferência de LLM?",
            "a": "Quatro passos: (1) eleve o notebook em um suporte com espaço para ventilação, (2) experimente um modo de energia equilibrado ou econômico, porque a geração é limitada mais pela largura de banda da memória do que pelo clock, (3) limite o tamanho da geração e do contexto e (4) use Q4_K_M em vez de Q8_0 para que cada token leia menos dados. Confira sua velocidade ao longo de 10 minutos com `ollama run <model> --verbose`."
          },
          {
            "q": "Posso rodar um LLM local em um Chromebook?",
            "a": "Somente em Chromebooks com Linux (Crostini) ativado, e apenas modelos pequenos. A maioria dos Chromebooks tem 4–8 GB de RAM e largura de banda de memória modesta, então um modelo 1B–3B em Q4_K_M é o teto realista e a velocidade será baixa. Chromebooks sem suporte a Linux não conseguem rodar o Ollama."
          },
          {
            "q": "O Apple Silicon é melhor que uma GPU de notebook NVIDIA para LLMs locais?",
            "a": "Depende da memória. A velocidade acompanha a largura de banda e a capacidade da memória: um MacBook de 16 GB com M5 (153 GB/s) tem um teto de cerca de 29 tok/s com o Qwen3 8B, enquanto uma GPU de notebook RTX 4060 (cerca de 256 GB/s, 8 GB de VRAM) tem um teto de cerca de 49 tok/s, mas só comporta modelos que caibam em 8 GB. Um M5 Pro (307 GB/s) ou M5 Max (460–614 GB/s) com mais memória mantém modelos maiores em memória rápida. O consumo de energia varia conforme o modelo, então confira o seu notebook."
          },
          {
            "q": "O que acontece se o modelo for grande demais para a RAM do meu notebook?",
            "a": "O sistema operacional começa a usar swap em disco, ou o modelo falha ao carregar, e a geração pode ficar extremamente lenta enquanto as ventoinhas trabalham forte. A solução é um modelo menor, um nível de quantização mais baixo (Q4_K_M em vez de Q8_0) ou um contexto mais curto (`OLLAMA_CONTEXT_LENGTH`, padrão 4096)."
          },
          {
            "q": "Quanto tempo a bateria dura rodando LLMs locais em um notebook?",
            "a": "A autonomia é aproximadamente a capacidade da bateria em Wh dividida pelo consumo médio em W. Uma bateria de 60 Wh a 20 W dura cerca de 3 horas e a 30 W cerca de 2 horas (conta ilustrativa, não uma medição). O consumo real varia conforme notebook, modelo e modo de energia. Para uso o dia todo, conecte na tomada."
          },
          {
            "q": "Preciso de conexão com a internet para rodar um LLM local em um notebook?",
            "a": "Não. Depois de baixar o modelo (o que exige internet), a inferência é totalmente offline. O modelo roda inteiramente na CPU ou GPU do notebook. Isso torna os LLMs locais úteis para viagens, ambientes seguros ou locais com conectividade instável."
          },
          {
            "q": "Posso rodar um LLM local com 8 GB de RAM?",
            "a": "Sim. Um notebook de 8 GB roda um modelo 3B–4B em Q4_K_M (arquivos de 2.0–2.5 GB) a cerca de 15–30 tok/s estimados com RAM dual-channel, ou a 28–45 tok/s estimados em um Apple M2 ou M3. Modelos 7B–8B (arquivos de 4.4–5.2 GB) ficam apertados em 8 GB."
          },
          {
            "q": "Qual é o notebook mais rápido para LLMs locais?",
            "a": "Para LLMs locais, as especificações-chave são a largura de banda da memória e memória suficiente. A Apple lista 307 GB/s para o M5 Pro (até 64 GB) e 460 ou 614 GB/s para o M5 Max (até 128 GB); para o Qwen3 8B, as estimativas da PromptQuorum são 41–53 tok/s em um M5 Pro e 62–106 tok/s em um M5 Max. No Windows, um notebook com GPU NVIDIA que mantém o modelo na VRAM tem um teto alto, por exemplo cerca de 256 GB/s para uma GPU de notebook RTX 4060 com 8 GB."
          },
          {
            "q": "Quão lentos são os LLMs locais na CPU?",
            "a": "A velocidade é no máximo a largura de banda da memória ÷ o tamanho do arquivo do modelo. Com DDR4/DDR5 dual-channel, um modelo 3B–4B em Q4_K_M roda a cerca de 15–30 tok/s estimados e o Qwen3 8B a 8–15 tok/s estimados; RAM single-channel reduz isso pela metade. É lento o bastante para acompanhar lendo, mas rápido o bastante para chat e resumos. O Apple Silicon chega a 13–26 tok/s estimados com o Qwen3 8B (M3 a M5) porque a memória unificada tem mais largura de banda."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "**Especificações técnicas do Apple MacBook Pro** -- largura de banda de memória do M5 (153 GB/s), M5 Pro (307 GB/s) e M5 Max (460 e 614 GB/s), e autonomia de bateria informada. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Especificações técnicas do Apple MacBook Air (15 polegadas, M3, 2024)** -- largura de banda de memória do M3 de 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom: M2** -- largura de banda de memória unificada de 100 GB/s. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom: MacBook Pro com M5 Pro e M5 Max (3 de março de 2026)** -- até 64 GB e 128 GB de memória unificada. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**Comparação de notebooks NVIDIA GeForce** -- GPU de notebook RTX 4060: 8 GB de GDDR6, barramento de 128 bits. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: GPU de notebook RTX 4060** -- velocidade de memória de 16 Gbps (terceiros; base do valor de ~256 GB/s). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**Especificações da NVIDIA GeForce RTX 4090** -- 24 GB de VRAM, 1008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Biblioteca do Ollama** -- tamanhos de arquivo conferidos em 2026-10-23: [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**FAQ do Ollama** -- tamanho de contexto padrão 4096, OLLAMA_CONTEXT_LENGTH, tipo de KV cache, keep-alive e `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Documentação de GPU do Ollama** -- Metal no Apple Silicon, Vulkan e GPUs compatíveis. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**README do quantize do llama.cpp** -- tamanhos de arquivo por tipo de quantização para o Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** -- Aceleração de GPU para Macs com Apple Silicon. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- Requisitos de sistema, compatibilidade de GPU e configuração de inferência local. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "Quais São os Erros Comuns ao Rodar LLMs Locais em Notebooks?",
        "items": [
          "**Rodar um modelo grande demais para a RAM disponível** → o sistema usa swap em disco e a geração desacelera muito; escolha um modelo menor ou uma quantização mais baixa.",
          "**Ignorar o throttling térmico** → a velocidade sustentada pode cair quando o chip atinge o limite de temperatura; confira sua velocidade após 10 minutos com `ollama run <model> --verbose`.",
          "**Usar Q8_0 em vez de Q4_K_M** → o arquivo é cerca de 1.7 vez maior (7.95 vs 4.58 GiB para o Llama 3.1 8B), então precisa de mais RAM e gera mais devagar em um notebook limitado pela largura de banda, por um pequeno ganho de qualidade.",
          "**Rodar com um único pente de RAM** → memória single-channel reduz pela metade a largura de banda de pico e o teto de velocidade; use dois pentes iguais quando o notebook permitir.",
          "**Deixar o GPU offload desligado no LM Studio** → o modelo roda na CPU em vez de na GPU; aumente a configuração de GPU offload quando o modelo couber na memória da GPU.",
          "**Manter a janela de contexto padrão** → o padrão do Ollama é 4096 tokens, então documentos de várias páginas são truncados; aumente com `OLLAMA_CONTEXT_LENGTH=8192` ou `/set parameter num_ctx 8192` e espere maior uso de memória."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras Relacionadas",
        "items": [
          "[Melhores Modelos de LLM Local Para Iniciantes](/pt/local-llms/best-beginner-local-llm-models) -- Modelos pequenos otimizados para notebooks",
          "[Como Instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- Guia de instalação",
          "[Como Instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) -- Instalador com interface gráfica",
          "[Solução de Problemas na Configuração de LLM Local](/pt/local-llms/troubleshooting-local-llm-setup) -- Correções de desempenho e erros",
          "[Quantização de LLM Explicada](/pt/local-llms/llm-quantization-explained) -- Q4_K_M vs Q8_0 vs Q5_K_M em profundidade",
          "[Modelos de LLM Local Pequenos Abaixo de 4 GB](/pt/local-llms/small-local-llm-models) -- Modelos 3B para notebooks de 8 GB",
          "[Notebook vs Desktop Para LLMs Locais 2026](/pt/local-llms/laptop-vs-desktop-local-llm) -- Guia de compra: comparação de desempenho, análise de custo e qual plataforma comprar.",
          "[MLX vs Ollama vs llama.cpp no Mac 2026](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Comparação de frameworks para Apple Silicon: velocidade, tempo de configuração e trade-offs de ecossistema.",
          "[A Forma Mais Barata de Rodar um Modelo 70B Localmente](/pt/prompt-bites/cheapest-way-to-run-70b-model-locally) -- Quando um notebook aguenta um 70B: Q3_K_S no M3 Max vs offloading para CPU.",
          "[Melhor GPU Para Inferência de LLM Local Por Menos de $500 (2026)](/pt/local-llms/best-gpu-for-llm-inference-under-500-2026) -- Caminho de upgrade com eGPU para MacBook e notebooks Windows.",
          "[Melhores LLMs Locais Somente CPU 2026](/pt/local-llms/best-cpu-only-llm) -- tok/s estimados por tamanho de arquivo do modelo para máquinas sem GPU.",
          "[LLMs Locais Mais Rápidos Para PCs Básicos](/pt/local-llms/fastest-local-llms-low-end-pcs) -- Escolhas para 4–16 GB de RAM, somente CPU ou iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "LLM Local em um Notebook: O Que Roda em 8GB, 16GB e Apple Silicon (2026)",
      "description": "Rode LLMs locais em notebooks com 8 GB ou 16 GB de RAM ou Apple Silicon. Inclui escolhas de modelos (Llama 3.2 3B, Phi-4-mini, Qwen3 8B), estimativas de velocidade pela largura de banda da memória, temperatura, bateria e quantização Q4_K_M.",
      "url": "https://www.promptquorum.com/pt/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "LLM local em notebook"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "quantização Q4_K_M"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "throttling térmico"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "pt-BR"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Melhores Modelos de LLM Local para Notebooks 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "Modelo 3B, arquivo de 2.0 GB no Ollama. Est. 18–30 tok/s com RAM dual-channel (estimativa da PromptQuorum). Menor arquivo da lista, ideal para notebooks de 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "Modelo 3.8B, arquivo de 2.5 GB no Ollama. Est. 15–25 tok/s com RAM dual-channel (estimativa da PromptQuorum). Raciocínio e código em notebooks de 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "Modelo 8B, arquivo de 5.2 GB no Ollama. Est. 8–15 tok/s com RAM dual-channel (estimativa da PromptQuorum). Multilíngue e código em notebooks de 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "Modelo 8B, arquivo de 4.9 GB no Ollama. Est. 8–14 tok/s com RAM dual-channel (estimativa da PromptQuorum). Uso geral em notebooks de 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "Modelo 9B, arquivo de 6.6 GB no Ollama. Est. 6–12 tok/s com RAM dual-channel (estimativa da PromptQuorum). Família mais nova com entrada de imagem em notebooks de 16 GB."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais são os melhores modelos do Ollama para Intel Iris Xe com 16 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em um notebook com gráficos Intel Iris Xe e 16 GB de RAM, a velocidade é limitada pela largura de banda da RAM do sistema. Se o Ollama usa a iGPU depende do suporte de driver e de backend (confira a coluna PROCESSOR do `ollama ps`), e uma iGPU compartilha a mesma RAM, então os ganhos costumam ser modestos. Escolha um modelo 3B–4B em Q4_K_M pela velocidade: Llama 3.2 3B (est. 18–30 tok/s com RAM dual-channel) com `ollama run llama3.2:3b`, ou Qwen3 8B (est. 8–15 tok/s) com `ollama run qwen3:8b` para mais qualidade. As velocidades são estimativas da PromptQuorum, não medições de laboratório."
          }
        },
        {
          "@type": "Question",
          "name": "É possível rodar RAG localmente em um notebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Uma stack de RAG em notebook é um modelo de embedding pequeno mais um vector store local mais o seu modelo de chat. O modelo de embedding é pequeno (o nomic-embed-text tem 274 MB no Ollama), então o modelo de chat continua sendo a restrição de RAM: um notebook de 8 GB roda um modelo de chat 3B com recuperação, e 16 GB deixam espaço para um modelo 8B. Veja a [seção sobre RAG em notebook](#rag-laptop) acima para o detalhamento de RAM."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é o melhor LLM local somente CPU para um notebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre os modelos comparados no guia somente CPU, o Phi-4 Mini (3.8B, arquivo de 2.5 GB) é a melhor escolha geral, a cerca de 15–25 tok/s estimados com RAM dual-channel, e o Llama 3.2 3B (arquivo de 2.0 GB) é o menor arquivo, a 18–30 tok/s estimados, ambos em Q4_K_M. Para a comparação completa e os comandos do Ollama, veja [Melhores LLMs Locais Somente CPU 2026](/pt/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "Rodar um LLM local vai danificar meu notebook com o tempo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nenhum dano imediato é esperado em um notebook saudável: os chips reduzem o clock quando esquentam, então a inferência sustentada deixa a máquina mais lenta em vez de danificá-la. Ainda assim, calor prolongado desgasta ventoinhas e bateria com o tempo, então use um suporte ou base de resfriamento, mantenha as saídas de ar desobstruídas e faça pausas. Siga as orientações do fabricante sobre temperatura e cuidados com a bateria."
          }
        },
        {
          "@type": "Question",
          "name": "Posso rodar um LLM local em um notebook com 4 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mal dá. Um modelo pequeno como o Qwen3 1.7B (arquivo de 1.4 GB) ou o Llama 3.2 1B (arquivo de 1.3 GB) cabe, mas o sistema operacional precisa de 2–3 GB, então com 4 GB no total você provavelmente vai cair no swap, que desacelera muito a geração. O mínimo prático para uma experiência confortável é 8 GB. Veja [LLMs locais mais rápidos para PCs básicos](/pt/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "Meu notebook precisa de uma GPU dedicada para rodar LLMs locais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Ollama, LM Studio e GPT4All rodam somente com CPU. Uma GPU com alta largura de banda de memória acelera a geração, mas modelos 3B–4B são utilizáveis na CPU a cerca de 15–30 tok/s estimados com RAM dual-channel. Veja [Melhores Modelos de LLM Local Para Iniciantes](/pt/local-llms/best-beginner-local-llm-models) para recomendações de modelos que rodam bem na CPU."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é o LLM local mais rápido que posso rodar em um MacBook de 8 GB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre os modelos deste guia, o Llama 3.2 3B em Q4_K_M (arquivo de 2.0 GB) é a escolha prática mais rápida em um MacBook de 8 GB. Em um M2 ou M3 (ambos com 100 GB/s segundo a Apple) o teto de largura de banda é de cerca de 50 tok/s e a estimativa da PromptQuorum é de 35–45 tok/s. Um arquivo 8B (5.2 GB) fica apertado em 8 GB porque o macOS e seus apps também precisam de memória."
          }
        },
        {
          "@type": "Question",
          "name": "Como reduzo o throttling térmico em um notebook durante a inferência de LLM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quatro passos: (1) eleve o notebook em um suporte com espaço para ventilação, (2) experimente um modo de energia equilibrado ou econômico, porque a geração é limitada mais pela largura de banda da memória do que pelo clock, (3) limite o tamanho da geração e do contexto e (4) use Q4_K_M em vez de Q8_0 para que cada token leia menos dados. Confira sua velocidade ao longo de 10 minutos com `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "Posso rodar um LLM local em um Chromebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Somente em Chromebooks com Linux (Crostini) ativado, e apenas modelos pequenos. A maioria dos Chromebooks tem 4–8 GB de RAM e largura de banda de memória modesta, então um modelo 1B–3B em Q4_K_M é o teto realista e a velocidade será baixa. Chromebooks sem suporte a Linux não conseguem rodar o Ollama."
          }
        },
        {
          "@type": "Question",
          "name": "O Apple Silicon é melhor que uma GPU de notebook NVIDIA para LLMs locais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da memória. A velocidade acompanha a largura de banda e a capacidade da memória: um MacBook de 16 GB com M5 (153 GB/s) tem um teto de cerca de 29 tok/s com o Qwen3 8B, enquanto uma GPU de notebook RTX 4060 (cerca de 256 GB/s, 8 GB de VRAM) tem um teto de cerca de 49 tok/s, mas só comporta modelos que caibam em 8 GB. Um M5 Pro (307 GB/s) ou M5 Max (460–614 GB/s) com mais memória mantém modelos maiores em memória rápida. O consumo de energia varia conforme o modelo, então confira o seu notebook."
          }
        },
        {
          "@type": "Question",
          "name": "O que acontece se o modelo for grande demais para a RAM do meu notebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O sistema operacional começa a usar swap em disco, ou o modelo falha ao carregar, e a geração pode ficar extremamente lenta enquanto as ventoinhas trabalham forte. A solução é um modelo menor, um nível de quantização mais baixo (Q4_K_M em vez de Q8_0) ou um contexto mais curto (`OLLAMA_CONTEXT_LENGTH`, padrão 4096)."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo a bateria dura rodando LLMs locais em um notebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A autonomia é aproximadamente a capacidade da bateria em Wh dividida pelo consumo médio em W. Uma bateria de 60 Wh a 20 W dura cerca de 3 horas e a 30 W cerca de 2 horas (conta ilustrativa, não uma medição). O consumo real varia conforme notebook, modelo e modo de energia. Para uso o dia todo, conecte na tomada."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso de conexão com a internet para rodar um LLM local em um notebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Depois de baixar o modelo (o que exige internet), a inferência é totalmente offline. O modelo roda inteiramente na CPU ou GPU do notebook. Isso torna os LLMs locais úteis para viagens, ambientes seguros ou locais com conectividade instável."
          }
        },
        {
          "@type": "Question",
          "name": "Posso rodar um LLM local com 8 GB de RAM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Um notebook de 8 GB roda um modelo 3B–4B em Q4_K_M (arquivos de 2.0–2.5 GB) a cerca de 15–30 tok/s estimados com RAM dual-channel, ou a 28–45 tok/s estimados em um Apple M2 ou M3. Modelos 7B–8B (arquivos de 4.4–5.2 GB) ficam apertados em 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é o notebook mais rápido para LLMs locais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para LLMs locais, as especificações-chave são a largura de banda da memória e memória suficiente. A Apple lista 307 GB/s para o M5 Pro (até 64 GB) e 460 ou 614 GB/s para o M5 Max (até 128 GB); para o Qwen3 8B, as estimativas da PromptQuorum são 41–53 tok/s em um M5 Pro e 62–106 tok/s em um M5 Max. No Windows, um notebook com GPU NVIDIA que mantém o modelo na VRAM tem um teto alto, por exemplo cerca de 256 GB/s para uma GPU de notebook RTX 4060 com 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "Quão lentos são os LLMs locais na CPU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A velocidade é no máximo a largura de banda da memória ÷ o tamanho do arquivo do modelo. Com DDR4/DDR5 dual-channel, um modelo 3B–4B em Q4_K_M roda a cerca de 15–30 tok/s estimados e o Qwen3 8B a 8–15 tok/s estimados; RAM single-channel reduz isso pela metade. É lento o bastante para acompanhar lendo, mas rápido o bastante para chat e resumos. O Apple Silicon chega a 13–26 tok/s estimados com o Qwen3 8B (M3 a M5) porque a memória unificada tem mais largura de banda."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Como Reduzir o Throttling Térmico em um Notebook Durante a Inferência de LLM Local",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Use um suporte para notebook com espaço para ventilação",
          "text": "Eleve o notebook em um suporte para melhorar o fluxo de ar de exaustão, o que pode adiar o throttling."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Experimente um modo de energia mais baixo",
          "text": "A geração de tokens é limitada pela largura de banda da memória, e não pelo clock, então um plano de energia equilibrado ou econômico (no macOS, Modo de Baixo Consumo) pode reduzir o calor. Teste na sua máquina."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Limite o tamanho da geração e do contexto",
          "text": "Divida tarefas longas em prompts mais curtos e evite regenerar respostas muito longas de uma só vez."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Use a quantização Q4_K_M em vez de Q8_0",
          "text": "O arquivo é cerca de 1.7 vez menor, então cada token lê menos dados da memória e o chip fica menos tempo sob carga."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "ar": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "تشغيل LLM محلي على حاسوب محمول: ما يعمل على 8GB و16GB وApple Silicon (2026)",
    "seoTitle": "LLM محلي على حاسوب محمول: 8GB و16GB وApple Silicon",
    "intro": "يمكنك تشغيل LLM محلي على حاسوب محمول بذاكرة RAM بحجم 8 GB: نموذج 3B–4B بتكميم Q4_K_M يعمل بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة، والحاسوب بذاكرة 16 GB يشغّل نماذج 8B بسرعة تقديرية 8–15 tok/s. شرائح Apple Silicon أسرع لأن ذاكرتها الموحّدة تتمتع بعرض نطاق أكبر. السرعات تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية؛ وتحدّ الحرارة والبطارية من مدة الحفاظ عليها.",
    "metaDescription": "LLM محلي على حاسوب محمول: ما يناسب 8 GB و16 GB وApple Silicon، وtok/s التقديرية من عرض نطاق الذاكرة، مع الحرارة والبطارية والتكميم.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-ar.webp",
    "twitterDescription": "LLM محلي على حاسوب محمول: ذاكرة 8 GB تشغّل نموذج 3B–4B بسرعة تقديرية 15–30 tok/s، و16 GB تشغّل 8B بسرعة تقديرية 8–15 tok/s. تقديرات من عرض نطاق الذاكرة، لا اختبارات مخبرية.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**يمكنك تشغيل LLM محلي على حاسوب محمول: ذاكرة RAM بحجم 8 GB تتسع لنموذج 3B–4B بسرعة تقديرية 15–30 tok/s، و16 GB تتسع لنماذج 8B بسرعة تقديرية 8–15 tok/s على CPU. شرائح Apple Silicon أسرع. السرعات تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية.**",
    "comparisonTable": {
      "columns": [
        "الإعداد",
        "حجم النموذج",
        "السرعة",
        "التجربة"
      ],
      "rows": [
        {
          "الإعداد": "8 GB RAM، CPU",
          "حجم النموذج": "3B–4B",
          "السرعة": "تقديري 15–30 tok/s",
          "التجربة": "محادثة وتلخيص وبرمجة بسيطة"
        },
        {
          "الإعداد": "16 GB RAM، CPU",
          "حجم النموذج": "8B–9B",
          "السرعة": "تقديري 8–15 tok/s",
          "التجربة": "استخدام عام مع تعدد المهام"
        },
        {
          "الإعداد": "Apple Silicon (من M3 إلى M5)، 16 GB",
          "حجم النموذج": "8B",
          "السرعة": "تقديري 13–26 tok/s",
          "التجربة": "عرض نطاق ذاكرة أكبر من ذاكرة الحواسيب المحمولة المعتادة"
        },
        {
          "الإعداد": "حاسوب محمول بـ GPU (RTX 4060، ذاكرة VRAM بحجم 8 GB)",
          "حجم النموذج": "8B",
          "السرعة": "تقديري 34–44 tok/s",
          "التجربة": "سريع إذا اتسع النموذج في VRAM؛ حرارة واستهلاك طاقة مرتفعان"
        }
      ]
    },
    "audience": "المبتدئون الذين يشغّلون أول LLM محلي على عتاد استهلاكي",
    "readTime": "8 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "إجابة سريعة: أي LLM محلي يعمل على حاسوبك المحمول؟",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "النقاط الرئيسية",
        "anchor": "#key-takeaways"
      },
      {
        "label": "هل يمكن تشغيل LLM محلي على حاسوب محمول؟",
        "anchor": "#can-you-run"
      },
      {
        "label": "هل يمكن تشغيل RAG على حاسوب محمول؟",
        "anchor": "#rag-laptop"
      },
      {
        "label": "أي إعداد تحتاج؟",
        "anchor": "#use-case"
      },
      {
        "label": "أي نماذج LLM محلية تعمل بأفضل شكل على حاسوب محمول؟",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon مقابل الحاسوب المحمول بنظام Windows",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "الحاسوب المحمول مقابل المكتبي لتشغيل LLM محلي",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "كيف تتعامل مع الخنق الحراري؟",
        "anchor": "#thermals"
      },
      {
        "label": "كم تستهلك من البطارية عند تشغيل LLM محلي؟",
        "anchor": "#battery-drain"
      },
      {
        "label": "أي مستوى تكميم تستخدم على حاسوب محمول؟",
        "anchor": "#quantization-tips"
      },
      {
        "label": "أي قوانين خصوصية تنطبق عند تشغيل LLM محلي على حاسوب محمول؟",
        "anchor": "#regional-context"
      },
      {
        "label": "ما الأخطاء الشائعة عند تشغيل LLM محلي على الحواسيب المحمولة؟",
        "anchor": "#common-mistakes"
      },
      {
        "label": "قراءات ذات صلة",
        "anchor": "#related-reading"
      },
      {
        "label": "أسئلة شائعة حول تشغيل LLM محلي على الحواسيب المحمولة",
        "anchor": "#faq"
      },
      {
        "label": "المصادر",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "هل يمكن تشغيل LLM محلي على حاسوب محمول؟",
      "answer": "نعم. الحاسوب المحمول بذاكرة 8 GB يشغّل نموذج 3B–4B بتكميم Q4_K_M، مثل Llama 3.2 3B (ملف بحجم 2.0 GB) بسرعة تقديرية 18–30 tok/s على ذاكرة ثنائية القناة. أما الحاسوب بذاكرة 16 GB فيشغّل نماذج 8B–9B مثل Qwen3 8B (ملف بحجم 5.2 GB) بسرعة تقديرية 8–15 tok/s على CPU. شرائح Apple Silicon أسرع لأن الذاكرة الموحّدة ذات عرض نطاق أكبر: تقديري 13–17 tok/s على M3 و21–26 tok/s على M5 لنموذج Qwen3 8B. جميع السرعات تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية.",
      "bullets": [
        "ذاكرة 8 GB: Llama 3.2 3B (ملف بحجم 2.0 GB) أو Phi-4-mini (2.5 GB)، بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة",
        "ذاكرة 16 GB: Qwen3 8B (ملف بحجم 5.2 GB) أو Llama 3.1 8B (4.9 GB)، بسرعة تقديرية 8–15 tok/s على CPU",
        "Apple Silicon: Qwen3 8B بسرعة تقديرية 13–17 tok/s على M3 (100 GB/s) و21–26 tok/s على M5 (153 GB/s)",
        "قاعدة السرعة: tok/s لا يتجاوز عرض نطاق الذاكرة ÷ حجم ملف النموذج؛ والذاكرة أحادية القناة تخفّضه إلى النصف",
        "الحمل المستمر قد يخفّض سرعة المعالج ويستنزف البطارية بسرعة: وصّل الشاحن ووفّر تهوية للحاسوب"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "إجابة سريعة: أي LLM محلي يعمل على حاسوبك المحمول (8GB، 16GB، Apple Silicon)؟",
        "content": [
          "**يمكنك تشغيل LLM محلي على حاسوب محمول بذاكرة RAM بحجم 8 GB: نموذج 3B–4B بتكميم Q4_K_M يعمل بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة.** يطابق الجدول عتادك مع النموذج المناسب. السرعات تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة (tok/s ≈ عرض النطاق ÷ حجم ملف النموذج)، وليست قياسات مخبرية."
        ],
        "rows": [
          {
            "حاسوبك المحمول": "8 GB RAM، CPU فقط",
            "أفضل نموذج": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s تقديري": "15–30",
            "افتراض العتاد": "ذاكرة ثنائية القناة DDR4/DDR5"
          },
          {
            "حاسوبك المحمول": "16 GB RAM، CPU فقط",
            "أفضل نموذج": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "tok/s تقديري": "8–15",
            "افتراض العتاد": "ذاكرة ثنائية القناة DDR4/DDR5"
          },
          {
            "حاسوبك المحمول": "Apple M3، 16 GB",
            "أفضل نموذج": "Qwen3 8B, Q4_K_M",
            "tok/s تقديري": "13–17",
            "افتراض العتاد": "ذاكرة موحّدة 100 GB/s"
          },
          {
            "حاسوبك المحمول": "Apple M5، 16 GB",
            "أفضل نموذج": "Qwen3 8B, Q4_K_M",
            "tok/s تقديري": "21–26",
            "افتراض العتاد": "ذاكرة موحّدة 153 GB/s"
          },
          {
            "حاسوبك المحمول": "Intel Iris Xe / AMD iGPU",
            "أفضل نموذج": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "tok/s تقديري": "15–30",
            "افتراض العتاد": "تشارك ذاكرة النظام؛ تحقق عبر ollama ps"
          }
        ],
        "columns": [
          "حاسوبك المحمول",
          "أفضل نموذج",
          "tok/s تقديري",
          "افتراض العتاد"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-ar.webp",
        "imageCaption": "LLM محلي على حاسوب محمول: اختيارات نماذج Q4_K_M حسب فئة RAM مع tok/s تقديري"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "الحاسوب المحمول بذاكرة 8 GB يشغّل LLM محلياً من فئة 3B–4B بسرعة تقديرية 15–30 tok/s، والحاسوب بذاكرة 16 GB يشغّل نماذج 8B–9B بسرعة تقديرية 8–15 tok/s، وApple Silicon أسرع لأن الذاكرة الموحّدة ذات عرض نطاق أكبر."
          },
          {
            "type": "plain-terms",
            "text": "القيدان الرئيسيان في حاسوبك المحمول هما حجم RAM وعرض نطاق الذاكرة. يجب أن يتسع ملف النموذج في RAM، وكل رمز يُولَّد يقرأ الملف كاملاً مرة واحدة، لذلك لا تتجاوز السرعة عرض نطاق الذاكرة مقسوماً على حجم الملف. وقد تتباطأ الحواسيب المحمولة تحت الحمل المستمر (الخنق الحراري)؛ ويساعد في ذلك حامل ووصلة طاقة ونموذج أصغر."
          }
        ],
        "items": [
          "نموذج 3B–4B بتكميم Q4_K_M يعمل على حاسوب محمول بذاكرة 8 GB: Llama 3.2 3B (ملف بحجم 2.0 GB) بسرعة تقديرية 18–30 tok/s وPhi-4-mini (2.5 GB) بسرعة تقديرية 15–25 tok/s.",
          "ذاكرة 16 GB تتسع لنماذج 8B–9B بتكميم Q4_K_M: Qwen3 8B (ملف بحجم 5.2 GB) بسرعة تقديرية 8–15 tok/s على ذاكرة ثنائية القناة، و13–17 tok/s على Apple M3 و21–26 tok/s على Apple M5.",
          "قاعدة السرعة: عدد الرموز في الثانية لا يتجاوز عرض نطاق الذاكرة ÷ حجم ملف النموذج (سقف نظري؛ والسرعة الفعلية أقل). ذاكرة DDR4-3200 ثنائية القناة تعطي 51.2 GB/s، وDDR5-5600 ثنائية القناة تعطي 89.6 GB/s، والقناة الواحدة تخفّض النتيجة إلى النصف. تعلن Apple عن 100 GB/s لـ M3 و153 GB/s لـ M5.",
          "جميع السرعات في هذه الصفحة تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية. شغّل `ollama run <model> --verbose` لقراءة عدد الرموز في الثانية على جهازك.",
          "وصّل الشاحن في الجلسات الطويلة ووفّر تهوية للحاسوب: الحمل المستمر قد يدفع شرائح الحواسيب المحمولة إلى خفض سرعتها، والاستدلال النشط يستنزف البطارية أسرع بكثير من الاستخدام الخفيف."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "في جملة واحدة",
        "content": [
          "يمكن تشغيل LLM محلي على حاسوب محمول باستخدام النماذج المكمَّمة: يقلّص Q4_K_M الملف إلى نحو 31% من حجم FP16 (4.58 GiB بدلاً من 14.96 GiB لنموذج Llama 3.1 8B) مع خسارة صغيرة في الجودة."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "بعبارات بسيطة",
        "content": [
          "تشغيل LLM محلياً يعني تشغيل روبوت المحادثة على حاسوبك المحمول بدلاً من خوادم مزوّد الخدمة: خصوصية أعلى وإمكانية الاستخدام دون اتصال، لكنه أبطأ من الخدمة السحابية."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "متى تشغّل LLM على حاسوب محمول؟",
        "items": [
          "✅ **استخدم نماذج LLM المحلية إذا:** كنت تحتاج إلى بقاء البيانات على الجهاز، أو تعمل دون اتصال، أو لا تريد تكلفة API لكل رمز",
          "❌ **لا تستخدمها إذا:** كنت تحتاج إلى أقوى جودة استدلال، أو إلى سياق طويل جداً (أكثر من 100K رمز، لأن KV cache ينمو مع السياق)، أو إلى معالجة دفعات سريعة — راجع [قيود LLM المحلية](/ar/local-llms/local-llm-limitations)"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "هل يمكن تشغيل LLM محلي على حاسوب محمول؟",
        "content": [
          "**نعم -- مع اختيار حجم النموذج المناسب.** الحاسوب المحمول بذاكرة 8 GB يشغّل نموذج 3B–4B بتكميم Q4_K_M بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة (Llama 3.2 3B: 18–30، Phi-4-mini: 15–25). وحاسوب Apple Silicon بذاكرة 16 GB يشغّل نموذج 8B بسرعة تقديرية 13–26 tok/s بحسب الشريحة. هذا أبطأ من معظم واجهات API السحابية، لكنه سريع بما يكفي لمتابعة القراءة أثناء التوليد.",
          "السقف العملي على حاسوب محمول بذاكرة 8 GB هو نموذج 3B–4B؛ أما ملفات 7B–8B (بحجم 4.4–5.2 GB) فتترك مساحة ضيقة لنظام التشغيل والمتصفح. ونموذج 14B بتكميم Q4_K_M (Qwen3 14B: ملف بحجم 9.3 GB) يتسع في جهاز بذاكرة 16 GB فقط مع سياق قصير وإغلاق التطبيقات الأخرى.",
          "السرعات هنا تقديرات من PromptQuorum مشتقة من عرض نطاق الذاكرة، وليست قياسات مخبرية. للفئات الأقل من 8 GB وللقاعدة الكاملة لعرض النطاق راجع **[أسرع نماذج LLM المحلية للحواسيب منخفضة المواصفات](/ar/local-llms/fastest-local-llms-low-end-pcs)**؛ وللحواسيب المحمولة بلا GPU راجع **[أفضل نماذج LLM المحلية على CPU فقط 2026](/ar/local-llms/best-cpu-only-llm)**."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "هل يمكن تشغيل RAG (الاسترجاع) على حاسوب محمول؟",
        "content": [
          "**نعم -- يعمل RAG على حاسوب محمول، لأن القيد الحاسم يظل نموذج المحادثة وليس طبقة الاسترجاع.** تتكون حزمة RAG على الحاسوب المحمول من ثلاثة أجزاء: نموذج تضمين صغير، ومخزن متجهات محلي، ونموذج المحادثة.",
          "نموذج التضمين صغير: حجم nomic-embed-text هو 274 MB على Ollama (نافذة سياق 2K)، لذا فهو يضيف ضغطاً طفيفاً على RAM. على حاسوب بذاكرة 8 GB يمكنك تشغيل نموذج محادثة 3B مع نموذج تضمين؛ وعلى 16 GB يتوفر هامش لنموذج محادثة 8B إلى جانب الاسترجاع.",
          "**ذاكرة 2 GB تكفي فقط للإعدادات الصغيرة جداً.** نموذج Qwen3 0.6B (523 MB) مع nomic-embed-text يبلغ نحو 0.8 GB من الملفات ويتسع حين تكون 2 GB خالية فعلاً. وفي الحاسوب المحمول المعتاد يستهلك نظام التشغيل 2–3 GB، والتبديل إلى القرص يبطّئ التوليد بشدة، لذا اعتبر 8 GB الحد الأدنى العملي."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "ما إعداد الحاسوب المحمول المناسب لحالة استخدامك؟",
        "items": [
          "**للمبتدئين** — ذاكرة 8 GB ونماذج 3B–4B وCPU فقط. توقّع سرعة تقديرية 15–30 tok/s. كافية للمحادثة والتلخيص والبرمجة البسيطة.",
          "**للمطورين** — ذاكرة 16 GB ونماذج 8B–9B وGPU اختياري. يمكن تعدد المهام دون إغلاق التطبيقات الأخرى (تقديري 8–15 tok/s على CPU).",
          "**للمستخدمين المتقدمين** — Apple Silicon بشريحة Pro أو Max، أو حاسوب محمول بـ GPU وذاكرة VRAM لا تقل عن 8 GB، ونماذج 8B–14B. التقديرات لنموذج Qwen3 8B: 41–53 tok/s على M5 Pro (307 GB/s) و34–44 tok/s على GPU الحاسوب المحمول RTX 4060 (نحو 256 GB/s)."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "من يستطيع تشغيل LLM محلي على حاسوب محمول؟",
        "items": [
          "**المبتدئون** ← [LM Studio](/ar/local-llms/how-to-install-lm-studio) + نموذج 3B",
          "**المستوى المتوسط** ← [Ollama](/ar/local-llms/how-to-install-ollama) + نموذج 8B",
          "**المستخدمون المتقدمون** ← نموذج 14B مع [ضبط التكميم](/ar/local-llms/llm-quantization-explained)",
          "❌ **لا تستخدم حاسوباً محمولاً إذا:** كنت تحتاج إلى واجهات API فورية (استخدم خادم vLLM)، أو تعالج مجموعات بيانات كبيرة (استخدم وحدات GPU سحابية)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "ما حجم نموذج LLM المحلي الذي تحتاجه؟",
        "content": "أحجام الملفات هي تنزيلات Ollama التي جرى التحقق منها على ollama.com بتاريخ 2026-10-23، بتكميم من فئة Q4_K_M (أصغر بنحو 70% من FP16). الحد الأدنى من RAM هو حجم الملف مضافاً إليه نحو 0.5 GB؛ واترك 2–4 GB إضافية لنظام التشغيل والمتصفح:",
        "rows": [
          {
            "النموذج": "Llama 3.2 3B",
            "الملف (Ollama)": "2.0 GB",
            "أدنى RAM": "2.5–3 GB",
            "tok/s تقديري": "18–30",
            "أفضل استخدام": "مهام أساسية ومحادثة وتلخيص"
          },
          {
            "النموذج": "Phi-4-mini 3.8B",
            "الملف (Ollama)": "2.5 GB",
            "أدنى RAM": "3 GB",
            "tok/s تقديري": "15–25",
            "أفضل استخدام": "استدلال وبرمجة على ذاكرة 8 GB"
          },
          {
            "النموذج": "Qwen3 8B",
            "الملف (Ollama)": "5.2 GB",
            "أدنى RAM": "6 GB",
            "tok/s تقديري": "8–15",
            "أفضل استخدام": "استخدام عام ولغات متعددة وبرمجة"
          },
          {
            "النموذج": "Qwen3 14B",
            "الملف (Ollama)": "9.3 GB",
            "أدنى RAM": "10 GB",
            "tok/s تقديري": "4–8",
            "أفضل استخدام": "مهام أصعب على 16 GB بسياق قصير"
          }
        ],
        "columns": [
          "النموذج",
          "الملف (Ollama)",
          "أدنى RAM",
          "tok/s تقديري",
          "أفضل استخدام"
        ],
        "note": "هذه تقديرات من PromptQuorum وليست قياسات مخبرية، لحاسوب محمول بذاكرة DDR4-3200 إلى DDR5-5600 ثنائية القناة (51.2–89.6 GB/s)؛ والذاكرة أحادية القناة تخفّضها إلى النصف. مثال Q4_K_M: حجم Llama 3.1 8B هو 14.96 GiB بصيغة FP16 و4.58 GiB بتكميم Q4_K_M (وفق README الخاص بـ quantize في llama.cpp)، أي أصغر بنحو 69%. ← [حاسبة VRAM](/ar/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "حاسوب محمول بذاكرة 8 GB مقابل 16 GB: ما الفرق العملي؟",
        "rows": [
          {
            "السيناريو": "أقصى حجم للنموذج",
            "8 GB RAM": "3B–4B براحة؛ 7B–8B (ملفات 4.4–5.2 GB) بضيق",
            "16 GB RAM": "8B–9B براحة؛ 14B (9.3 GB) بسياق قصير"
          },
          {
            "السيناريو": "النموذج مع متصفح مفتوح",
            "8 GB RAM": "3B–4B (بضيق)",
            "16 GB RAM": "8B–9B براحة"
          },
          {
            "السيناريو": "أول نموذج موصى به",
            "8 GB RAM": "llama3.2:3b أو phi4-mini",
            "16 GB RAM": "qwen3:8b أو llama3.1:8b"
          },
          {
            "السيناريو": "التطبيقات المتزامنة",
            "8 GB RAM": "أغلق المتصفح قبل تحميل نموذج 8B",
            "16 GB RAM": "تعدد مهام عادي مع نموذج 8B"
          }
        ],
        "columns": [
          "السيناريو",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "أي نماذج LLM محلية تعمل بأفضل شكل على حاسوب محمول؟",
        "content": "**هذه النماذج تناسب حدود الحواسيب المحمولة: الملفات الصغيرة تعطي رموزاً أكثر في الثانية من عرض نطاق الذاكرة نفسه.** السرعات تقديرات من PromptQuorum لحاسوب محمول بذاكرة DDR4-3200 إلى DDR5-5600 ثنائية القناة (51.2–89.6 GB/s)، مشتقة من سقف عرض النطاق (عرض النطاق ÷ حجم ملف Ollama)، وليست قياسات مخبرية؛ والذاكرة أحادية القناة تخفّضها إلى النصف. أحجام الملفات هي تنزيلات Ollama التي جرى التحقق منها بتاريخ 2026-10-23. لمتطلبات VRAM عبر النماذج وإعدادات الحواسيب المحمولة راجع [دليل متطلبات VRAM ←](/ar/local-llms/how-much-vram-local-llm). ثبّت [Ollama](/ar/local-llms/how-to-install-ollama) لتشغيل أي منها بأمر واحد. بلا GPU؟ راجع **[أفضل نماذج LLM المحلية على CPU فقط 2026](/ar/local-llms/best-cpu-only-llm)**. هذه نماذج مفتوحة الأوزان (open-weights)؛ راجع بطاقة كل نموذج لمعرفة ترخيصه.",
        "rows": [
          {
            "النموذج": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "الملف (Ollama)": "2.0 GB",
            "أدنى RAM": "2.5–3 GB",
            "tok/s تقديري": "18–30",
            "الأنسب لـ": "حواسيب 8 GB، مهام سريعة"
          },
          {
            "النموذج": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "الملف (Ollama)": "2.5 GB",
            "أدنى RAM": "3 GB",
            "tok/s تقديري": "15–25",
            "الأنسب لـ": "حواسيب 8 GB، استدلال وبرمجة"
          },
          {
            "النموذج": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "الملف (Ollama)": "5.2 GB",
            "أدنى RAM": "6 GB",
            "tok/s تقديري": "8–15",
            "الأنسب لـ": "حواسيب 16 GB، لغات متعددة وبرمجة"
          },
          {
            "النموذج": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "الملف (Ollama)": "4.9 GB",
            "أدنى RAM": "5.5 GB",
            "tok/s تقديري": "8–14",
            "الأنسب لـ": "حواسيب 16 GB، استخدام عام"
          },
          {
            "النموذج": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "الملف (Ollama)": "6.6 GB",
            "أدنى RAM": "7–8 GB",
            "tok/s تقديري": "6–12",
            "الأنسب لـ": "حواسيب 16 GB، عائلة أحدث، إدخال صور"
          }
        ],
        "columns": [
          "النموذج",
          "الملف (Ollama)",
          "أدنى RAM",
          "tok/s تقديري",
          "الأنسب لـ"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-ar.webp",
        "imageCaption": "أفضل نماذج LLM المحلية للحواسيب المحمولة حسب حجم الملف مع tok/s تقديري على ذاكرة ثنائية القناة"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "بأي إعداد LLM محلي تبدأ على حاسوب محمول؟",
        "content": [
          "عتاد الحاسوب المحمول يحدّ من حجم النموذج، لكن المطالبات الواضحة والمنظمة قد تحسّن مخرجات النماذج الأصغر. راجع [دليل هندسة المطالبات](/ar/prompt-engineering) لأساليب تناسب النماذج الأصغر."
        ],
        "items": [
          "🥇 **بداية بسيطة عبر سطر الأوامر:** [Ollama](/ar/local-llms/how-to-install-ollama) — أمر واحد لكل نموذج ودعم واسع للنماذج",
          "🥈 **الأسهل للمبتدئين:** [LM Studio](/ar/local-llms/how-to-install-lm-studio) — واجهة رسومية دون حاجة إلى الطرفية",
          "🥉 **ذاكرة RAM منخفضة (8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **جودة أعلى على 16 GB:** Qwen3 8B (Q4_K_M، أو Q5_K_M إذا سمحت السرعة)",
          "💡 **إذا كنت غير متأكد:** ابدأ بـ Ollama مع Llama 3.2 3B Q4_K_M"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon مقابل الحاسوب المحمول بنظام Windows: أيهما أفضل لـ LLM المحلي؟",
        "content": [
          "**حواسيب MacBook بشرائح Apple Silicon خيار قوي لـ LLM المحلي لأن الذاكرة الموحّدة تمنح GPU وصولاً بعرض نطاق عالٍ إلى كامل مجمع الذاكرة.** تحدد السرعةَ عرضُ نطاق الذاكرة: تعلن Apple عن 100 GB/s لـ M3 و153 GB/s لـ M5 و307 GB/s لـ M5 Pro و460 أو 614 GB/s لـ M5 Max (بحسب عدد أنوية GPU). ويوفر MacBook Pro بشريحتي M5 Pro وM5 Max، المعلن عنه في 3 مارس 2026، ذاكرة موحّدة تصل إلى 64 GB و128 GB.",
          "قد يكون الحاسوب المحمول بنظام Windows وبـ GPU منفصل من NVIDIA أسرع عندما يتسع النموذج في VRAM. يحتوي GPU الحاسوب المحمول RTX 4060 على 8 GB من GDDR6 بناقل 128 بت (NVIDIA)؛ وبسرعة 16 Gbps (مواصفة من جهة خارجية) يعادل ذلك نحو 256 GB/s، فيكون السقف النظري لنموذج Qwen3 8B (5.2 GB) قرابة 49 tok/s. والمقابل هو ارتفاع استهلاك الطاقة والحرارة.",
          "الحواسيب المحمولة بنظام Windows التي تعتمد على رسوميات Intel Iris Xe أو AMD Radeon المدمجة فقط يحدّها عرض نطاق ذاكرة النظام. وتذكر وثائق Ollama أن دعم Vulkan لـ GPU مفعّل افتراضياً عند تثبيت الواجهة الخلفية، ولا تدرج رسوميات Intel المدمجة في جدول الدعم، لذا تحقق من عمود PROCESSOR في `ollama ps`. ويشارك iGPU الذاكرة نفسها، لذلك تكون المكاسب متواضعة عادةً.",
          "**أفضل النماذج للرسوميات المدمجة (Intel Iris Xe / AMD Radeon):** مع ذاكرة 16 GB، اختر نموذج 3B–4B بتكميم Q4_K_M للسرعة (Llama 3.2 3B، تقديري 18–30 tok/s على ذاكرة ثنائية القناة) أو Qwen3 8B للجودة (تقديري 8–15 tok/s). وفضّل نموذجاً يبقى ضمن RAM بهامش مريح. لإعداد خطوة بخطوة للأجهزة منخفضة المواصفات راجع [أسرع نماذج LLM المحلية للحواسيب منخفضة المواصفات](/ar/local-llms/fastest-local-llms-low-end-pcs).",
          "طريقة الجدول: كل تقدير يساوي نحو 70–90% من السقف (عرض النطاق ÷ ملف Qwen3 8B بحجم 5.2 GB). وهي تقديرات من PromptQuorum وليست قياسات مخبرية."
        ],
        "rows": [
          {
            "نوع الحاسوب المحمول": "Apple M3، 16 GB",
            "عرض نطاق الذاكرة": "100 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "13–17",
            "أقصى نموذج عملي": "~9B (14B بضيق)"
          },
          {
            "نوع الحاسوب المحمول": "Apple M5، 16 GB",
            "عرض نطاق الذاكرة": "153 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "21–26",
            "أقصى نموذج عملي": "~9B (14B بضيق)"
          },
          {
            "نوع الحاسوب المحمول": "Apple M5 Pro",
            "عرض نطاق الذاكرة": "307 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "41–53",
            "أقصى نموذج عملي": "محدود بالذاكرة (حتى 64 GB)"
          },
          {
            "نوع الحاسوب المحمول": "Apple M5 Max",
            "عرض نطاق الذاكرة": "460–614 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "62–106",
            "أقصى نموذج عملي": "محدود بالذاكرة (حتى 128 GB)"
          },
          {
            "نوع الحاسوب المحمول": "حاسوب محمول بـ RTX 4060 (ذاكرة VRAM بحجم 8 GB)",
            "عرض نطاق الذاكرة": "~256 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "34–44",
            "أقصى نموذج عملي": "~8B داخل VRAM"
          },
          {
            "نوع الحاسوب المحمول": "حاسوب محمول بذاكرة DDR5-5600 ثنائية القناة",
            "عرض نطاق الذاكرة": "89.6 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "12–15",
            "أقصى نموذج عملي": "~9B (ذاكرة 16 GB)"
          },
          {
            "نوع الحاسوب المحمول": "حاسوب محمول بذاكرة DDR4-3200 أحادية القناة",
            "عرض نطاق الذاكرة": "25.6 GB/s",
            "tok/s تقديري لـ Qwen3 8B": "3–4",
            "أقصى نموذج عملي": "يُنصح بـ 3B–4B"
          }
        ],
        "columns": [
          "نوع الحاسوب المحمول",
          "عرض نطاق الذاكرة",
          "tok/s تقديري لـ Qwen3 8B",
          "أقصى نموذج عملي"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "هل يكفي الحاسوب المحمول لتشغيل LLM محلي مقارنة بالمكتبي؟",
        "content": [
          "**تشغّل الحواسيب المحمولة نماذج 3B–14B بفعالية، لكن الحواسيب المكتبية تستطيع الذهاب أبعد بفضل التبريد الأفضل ووحدات GPU المخصصة ذات عرض نطاق الذاكرة الأعلى بكثير.** يمتلك RTX 4090 المكتبي ذاكرة VRAM بحجم 24 GB وعرض نطاق 1,008 GB/s (NVIDIA)، وهو يكفي لاحتواء ملفات نماذج حتى نحو 20 GB داخل VRAM، مثل Gemma 4 31B (19–20 GB على Ollama). أما نموذج 70B بتكميم Q4 فملفه 43 GB على Ollama (llama3.3:70b)، ولا يتسع في 24 GB ويجب تقسيمه مع ذاكرة النظام الأبطأ بكثير.",
          "استخدم الحاسوب المحمول للتنقل والتجربة. واستخدم المكتبي للنماذج الكبيرة (14B فأكثر) وأحمال العمل المستمرة أو الاستدلال في بيئة الإنتاج. هل تختار بين المنصتين؟ راجع [دليل شراء الحاسوب المحمول أم المكتبي لـ LLM المحلي](/ar/local-llms/laptop-vs-desktop-local-llm) لتفصيل كامل للتكلفة والأداء."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "كيف تتعامل مع الخنق الحراري على حاسوب محمول؟",
        "content": [
          "**يحدث الخنق الحراري عندما يبلغ CPU أو GPU حده الحراري فيخفّض سرعته ليبرد.** الاستدلال المحلي حمل مستمر، لذلك قد يتباطأ الحاسوب المحمول النحيف بعد مدة؛ ويتوقف مقدار ذلك وموعده على تصميم التبريد. تحقق من سرعتك خلال 10 دقائق عبر `ollama run <model> --verbose`."
        ],
        "items": [
          "**استخدم حامل حاسوب يتيح مرور الهواء** -- رفع الحاسوب يحسّن تدفق هواء العادم وقد يؤخر الخنق.",
          "**جرّب وضع طاقة أقل** -- توليد الرموز يحدّه عرض نطاق الذاكرة لا سرعة المعالج، لذا قد تقلل خطة طاقة متوازنة أو منخفضة (في macOS: وضع الطاقة المنخفضة) الحرارة بخسارة سرعة أقل مما تتوقع؛ اختبرها على جهازك.",
          "**قلّل طول التوليد والسياق** -- قسّم المهام الطويلة إلى مطالبات أقصر وتجنّب إعادة توليد الاستجابات الطويلة جداً.",
          "**استخدم Q4_K_M بدلاً من Q8_0** -- الملف أصغر بنحو 1.7 مرة (4.58 مقابل 7.95 GiB لنموذج Llama 3.1 8B)، فيقرأ كل رمز بيانات أقل من الذاكرة وتبقى الشريحة تحت الحمل مدة أقصر."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "كم تستهلك من البطارية عند تشغيل LLM محلي؟",
        "content": [
          "**استنزاف البطارية أثناء الاستدلال المحلي كبير لأن CPU أو GPU يعمل بحمل عالٍ طوال التوليد.** مدة التشغيل بالساعات تساوي تقريباً سعة البطارية بالواط-ساعة مقسومة على متوسط استهلاك الطاقة: بطارية 60 Wh عند 20 W تدوم نحو 3 ساعات، وعند 30 W نحو ساعتين. هذه حسابات توضيحية وليست قياسات؛ فاستهلاك الطاقة الفعلي يختلف بحسب الحاسوب والنموذج ووضع الطاقة.",
          "عمر البطارية المعلن لا يصف الاستدلال. فرقم Apple البالغ حتى 16 ساعة من تصفح الويب اللاسلكي لـ MacBook Pro مقاس 14 بوصة بشريحة M5 (بطارية 72.4 Wh) يخص الاستخدام الخفيف، لا التوليد المستمر.",
          "في الجلسات الطويلة وصّل الشاحن. وللاستخدام الموفّر للبطارية اختر نموذجاً أصغر (ملف 3B أقل من نصف حجم ملف 8B، فتنتهي كل استجابة أسرع) وقلّص السياق."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "أي مستوى تكميم تستخدم على حاسوب محمول؟",
        "content": "[التكميم](/ar/local-llms/llm-quantization-explained) يقلل دقة النموذج لخفض حاجته إلى RAM وعرض النطاق. وفي الحواسيب المحمولة يُعد Q4_K_M الخيار الافتراضي المعتاد. الأحجام أدناه لنموذج Llama 3.1 8B من README الخاص بـ quantize في llama.cpp (14.96 GiB بصيغة FP16)؛ وتتدرج النماذج الأخرى بصورة مماثلة:",
        "rows": [
          {
            "التكميم": "Q2_K",
            "الحجم مقابل FP16": "~20% (2.95 GiB)",
            "خسارة الجودة": "عالية -- تدهور ملحوظ",
            "حالة الاستخدام": "فقط عندما لا يتسع غيره"
          },
          {
            "التكميم": "Q3_K_S",
            "الحجم مقابل FP16": "~23% (3.41 GiB)",
            "خسارة الجودة": "متوسطة",
            "حالة الاستخدام": "إدخال نموذج أكبر في RAM"
          },
          {
            "التكميم": "Q4_K_M",
            "الحجم مقابل FP16": "~31% (4.58 GiB)",
            "خسارة الجودة": "منخفضة -- الخيار الافتراضي الشائع",
            "حالة الاستخدام": "معظم الحواسيب المحمولة، توازن جيد"
          },
          {
            "التكميم": "Q5_K_M",
            "الحجم مقابل FP16": "~36% (5.33 GiB)",
            "خسارة الجودة": "صغيرة",
            "حالة الاستخدام": "حواسيب 16 GB إذا سمحت السرعة"
          },
          {
            "التكميم": "Q8_0",
            "الحجم مقابل FP16": "~53% (7.95 GiB)",
            "خسارة الجودة": "صغيرة جداً",
            "حالة الاستخدام": "ذاكرة RAM فائضة والسرعة غير حاسمة"
          }
        ],
        "columns": [
          "التكميم",
          "الحجم مقابل FP16",
          "خسارة الجودة",
          "حالة الاستخدام"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "أي قوانين خصوصية تنطبق عند تشغيل LLM محلي على حاسوب محمول؟",
        "content": [
          "**الاتحاد الأوروبي (GDPR):** عندما يعمل النموذج على حاسوبك المحمول، لا يلزم أن تغادر المطالبات والمستندات الجهاز، مما قد يتجنب إرسال بيانات شخصية إلى معالِج من طرف ثالث. وانطباق GDPR أو قانون الذكاء الاصطناعي الأوروبي أو التزامات أخرى يتوقف على من ينشر النظام ولأي غرض؛ هذا الدليل ليس استشارة قانونية، والامتثال يعتمد على إعدادك بالكامل لا على مكان تشغيل الاستدلال.",
          "**ألمانيا:** بالنسبة للشركات الألمانية، قد يبسّط إبقاء المستندات على الجهاز أسئلة حماية البيانات، لكن تحديد ما إذا كان الإعداد المحلي يفي بالتزاماتك (مثلاً لبيانات العملاء السرية) يتم حالةً بحالة؛ استشر مسؤول حماية البيانات لديك.",
          "**اليابان (APPI):** ينظم قانون حماية المعلومات الشخصية في اليابان نقل البيانات الشخصية إلى الخارج. وتشغيل الاستدلال على الحاسوب المحمول يتجنب إرسال المطالبات إلى API في الخارج، مما قد يبسّط مسألة النقل؛ لكنه لا يغني عن تقييم قانوني.",
          "**الولايات المتحدة:** لا يوجد قانون اتحادي واحد لبيانات الذكاء الاصطناعي؛ بل تنطبق قواعد قطاعية مثل HIPAA (الرعاية الصحية) وFERPA (التعليم) وقوانين الخصوصية في الولايات بحسب الاستخدام. وإبقاء البيانات على جهاز محلي قد يقلل عدد الأطراف الثالثة التي تتعامل معها، لكنك تظل مسؤولاً عن تأمين الجهاز والبيانات."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "أسئلة شائعة حول تشغيل LLM محلي على الحواسيب المحمولة",
        "faqs": [
          {
            "q": "ما أفضل نماذج Ollama لحاسوب بـ Intel Iris Xe وذاكرة 16 GB؟",
            "a": "في حاسوب محمول برسوميات Intel Iris Xe وذاكرة 16 GB، يحدّ السرعةَ عرضُ نطاق ذاكرة النظام. واستخدام Ollama لـ iGPU من عدمه يتوقف على دعم برنامج التشغيل والواجهة الخلفية (تحقق من عمود PROCESSOR في `ollama ps`)، ويشارك iGPU الذاكرة نفسها، لذلك تكون المكاسب متواضعة عادةً. اختر نموذج 3B–4B بتكميم Q4_K_M للسرعة: Llama 3.2 3B (تقديري 18–30 tok/s على ذاكرة ثنائية القناة) عبر `ollama run llama3.2:3b`، أو Qwen3 8B (تقديري 8–15 tok/s) عبر `ollama run qwen3:8b` لجودة أعلى. السرعات تقديرات من PromptQuorum وليست قياسات مخبرية."
          },
          {
            "q": "هل يمكن تشغيل RAG محلياً على حاسوب محمول؟",
            "a": "نعم. تتكون حزمة RAG على الحاسوب المحمول من نموذج تضمين صغير ومخزن متجهات محلي ونموذج المحادثة. نموذج التضمين صغير (حجم nomic-embed-text هو 274 MB على Ollama)، لذا يظل نموذج المحادثة هو القيد الحاسم في RAM: الحاسوب بذاكرة 8 GB يشغّل نموذج محادثة 3B مع الاسترجاع، وذاكرة 16 GB تترك مجالاً لنموذج 8B. راجع [قسم RAG على حاسوب محمول](#rag-laptop) أعلاه لتفصيل RAM."
          },
          {
            "q": "ما أفضل LLM محلي على CPU فقط لحاسوب محمول؟",
            "a": "من بين النماذج المقارَنة في دليل CPU فقط، يُعد Phi-4 Mini (3.8B، ملف بحجم 2.5 GB) أفضل خيار شامل بسرعة تقديرية 15–25 tok/s على ذاكرة ثنائية القناة، ويُعد Llama 3.2 3B (ملف بحجم 2.0 GB) أصغر ملف بسرعة تقديرية 18–30 tok/s، وكلاهما بتكميم Q4_K_M. للمقارنة الكاملة وأوامر Ollama راجع [أفضل نماذج LLM المحلية على CPU فقط 2026](/ar/local-llms/best-cpu-only-llm)."
          },
          {
            "q": "هل يضر تشغيل LLM محلي بحاسوبي المحمول مع الوقت؟",
            "a": "لا يُتوقع ضرر فوري على حاسوب محمول سليم: الشرائح تخفّض سرعتها عند ارتفاع حرارتها، لذا يبطّئ الاستدلال المستمر الجهازَ ولا يتلفه. ومع ذلك تمثل الحرارة المستمرة تآكلاً للمراوح والبطارية مع الوقت، فاستخدم حاملاً أو قاعدة تبريد، وأبقِ فتحات التهوية مفتوحة، وخذ فترات راحة. واتبع إرشادات الشركة المصنّعة بشأن الحرارة والعناية بالبطارية."
          },
          {
            "q": "هل يمكن تشغيل LLM محلي على حاسوب محمول بذاكرة 4 GB؟",
            "a": "بصعوبة. يتسع نموذج صغير مثل Qwen3 1.7B (ملف بحجم 1.4 GB) أو Llama 3.2 1B (ملف بحجم 1.3 GB)، لكن نظام التشغيل يحتاج إلى 2–3 GB، لذا في جهاز بذاكرة 4 GB إجمالاً يُرجَّح أن تصل إلى التبديل (swap) الذي يبطّئ التوليد بشدة. الحد الأدنى العملي لتجربة مريحة هو 8 GB. راجع [أسرع نماذج LLM المحلية للحواسيب منخفضة المواصفات](/ar/local-llms/fastest-local-llms-low-end-pcs)."
          },
          {
            "q": "هل يحتاج حاسوبي المحمول إلى GPU مخصص لتشغيل LLM محلي؟",
            "a": "لا. يعمل Ollama وLM Studio وGPT4All على CPU فقط. يسرّع GPU ذو عرض نطاق الذاكرة العالي التوليد، لكن نماذج 3B–4B قابلة للاستخدام على CPU بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة. راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) لتوصيات نماذج مناسبة لـ CPU."
          },
          {
            "q": "ما أسرع LLM محلي يمكنني تشغيله على MacBook بذاكرة 8 GB؟",
            "a": "من بين النماذج في هذا الدليل، يُعد Llama 3.2 3B بتكميم Q4_K_M (ملف بحجم 2.0 GB) أسرع خيار عملي على MacBook بذاكرة 8 GB. على M2 أو M3 (كلاهما 100 GB/s بحسب Apple) يبلغ سقف عرض النطاق نحو 50 tok/s، وتقدير PromptQuorum هو 35–45 tok/s. أما ملف 8B (بحجم 5.2 GB) فضيق على 8 GB لأن macOS وتطبيقاتك تحتاج إلى ذاكرة أيضاً."
          },
          {
            "q": "كيف أقلل الخنق الحراري في الحاسوب المحمول أثناء استدلال LLM؟",
            "a": "أربع خطوات: (1) ارفع الحاسوب على حامل يتيح مرور الهواء، (2) جرّب وضع طاقة متوازناً أو منخفضاً، لأن التوليد يحدّه عرض نطاق الذاكرة أكثر من سرعة المعالج، (3) قلّل طول التوليد والسياق، (4) استخدم Q4_K_M بدلاً من Q8_0 ليقرأ كل رمز بيانات أقل. تحقق من سرعتك خلال 10 دقائق عبر `ollama run <model> --verbose`."
          },
          {
            "q": "هل يمكن تشغيل LLM محلي على Chromebook؟",
            "a": "فقط على أجهزة Chromebook التي فُعِّل فيها Linux (Crostini)، ومع نماذج صغيرة فقط. معظم أجهزة Chromebook تملك ذاكرة 4–8 GB وعرض نطاق ذاكرة متواضعاً، لذا فإن نموذج 1B–3B بتكميم Q4_K_M هو السقف الواقعي وستكون السرعة منخفضة. أجهزة Chromebook التي لا تدعم Linux لا تستطيع تشغيل Ollama."
          },
          {
            "q": "هل Apple Silicon أفضل من GPU الحاسوب المحمول من NVIDIA لتشغيل LLM محلي؟",
            "a": "يتوقف ذلك على الذاكرة. تتبع السرعةُ عرضَ نطاق الذاكرة وسعتها: MacBook بذاكرة 16 GB وشريحة M5 (153 GB/s) له سقف نحو 29 tok/s لنموذج Qwen3 8B، بينما GPU الحاسوب المحمول RTX 4060 (نحو 256 GB/s، وذاكرة VRAM بحجم 8 GB) له سقف نحو 49 tok/s لكنه لا يحتوي إلا النماذج التي تتسع في 8 GB. وشريحة M5 Pro (307 GB/s) أو M5 Max (460–614 GB/s) بذاكرة أكبر تحتوي نماذج أكبر في ذاكرة سريعة. ويختلف استهلاك الطاقة بحسب الطراز، فتحقق من حاسوبك."
          },
          {
            "q": "ماذا يحدث إذا كان النموذج أكبر من ذاكرة RAM في حاسوبي المحمول؟",
            "a": "يبدأ نظام التشغيل بالتبديل إلى القرص، أو يفشل تحميل النموذج، وقد يتباطأ التوليد إلى حد الزحف بينما تعمل المراوح بقوة. الحل هو نموذج أصغر، أو مستوى تكميم أدنى (Q4_K_M بدلاً من Q8_0)، أو سياق أقصر (`OLLAMA_CONTEXT_LENGTH`، والقيمة الافتراضية 4096)."
          },
          {
            "q": "كم تدوم البطارية عند تشغيل LLM محلي على حاسوب محمول؟",
            "a": "مدة التشغيل تساوي تقريباً سعة البطارية بالواط-ساعة (Wh) مقسومة على متوسط استهلاك الطاقة بالواط (W). بطارية 60 Wh عند 20 W تدوم نحو 3 ساعات، وعند 30 W نحو ساعتين (حساب توضيحي وليس قياساً). يختلف الاستهلاك الفعلي بحسب الحاسوب والنموذج ووضع الطاقة. وللاستخدام طوال اليوم، وصّل الشاحن."
          },
          {
            "q": "هل أحتاج إلى اتصال بالإنترنت لتشغيل LLM محلي على حاسوب محمول؟",
            "a": "لا. بعد تنزيل النموذج (وهو يتطلب الإنترنت)، يعمل الاستدلال دون اتصال بالكامل. يعمل النموذج بالكامل على CPU أو GPU الحاسوب المحمول. وهذا يجعل نماذج LLM المحلية مفيدة في السفر والبيئات المؤمَّنة أو المواقع ذات الاتصال غير الموثوق."
          },
          {
            "q": "هل يمكنني تشغيل LLM محلي على ذاكرة RAM بحجم 8 GB؟",
            "a": "نعم. الحاسوب المحمول بذاكرة 8 GB يشغّل نموذج 3B–4B بتكميم Q4_K_M (ملفات 2.0–2.5 GB) بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة، أو بسرعة تقديرية 28–45 tok/s على Apple M2 أو M3. أما نماذج 7B–8B (ملفات 4.4–5.2 GB) فضيقة على 8 GB."
          },
          {
            "q": "ما أسرع حاسوب محمول لتشغيل LLM محلي؟",
            "a": "المواصفتان الأهم لـ LLM المحلي هما عرض نطاق الذاكرة وسعة ذاكرة كافية. تعلن Apple عن 307 GB/s لـ M5 Pro (حتى 64 GB) و460 أو 614 GB/s لـ M5 Max (حتى 128 GB)؛ وتقديرات PromptQuorum لنموذج Qwen3 8B هي 41–53 tok/s على M5 Pro و62–106 tok/s على M5 Max. وفي Windows، فإن الحاسوب المحمول بـ GPU من NVIDIA يحتوي النموذج في VRAM له سقف مرتفع، مثلاً نحو 256 GB/s لـ GPU الحاسوب المحمول RTX 4060 بذاكرة 8 GB."
          },
          {
            "q": "ما مدى بطء LLM المحلي على CPU؟",
            "a": "السرعة لا تتجاوز عرض نطاق الذاكرة ÷ حجم ملف النموذج. على ذاكرة DDR4/DDR5 ثنائية القناة يعمل نموذج 3B–4B بتكميم Q4_K_M بسرعة تقديرية 15–30 tok/s، ونموذج Qwen3 8B بسرعة تقديرية 8–15 tok/s؛ والذاكرة أحادية القناة تخفّض ذلك إلى النصف. هذا بطيء بما يكفي لمتابعة القراءة لكنه سريع بما يكفي للمحادثة والتلخيص. وتصل Apple Silicon إلى سرعة تقديرية 13–26 tok/s لنموذج Qwen3 8B (من M3 إلى M5) لأن الذاكرة الموحّدة ذات عرض نطاق أكبر."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "**المواصفات التقنية لـ Apple MacBook Pro** -- عرض نطاق الذاكرة لـ M5 (153 GB/s) وM5 Pro (307 GB/s) وM5 Max (460 و614 GB/s)، وعمر البطارية المعلن. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**المواصفات التقنية لـ Apple MacBook Air (مقاس 15 بوصة، M3، 2024)** -- عرض نطاق ذاكرة M3 البالغ 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**غرفة أخبار Apple: M2** -- عرض نطاق الذاكرة الموحّدة 100 GB/s. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**غرفة أخبار Apple: MacBook Pro بشريحتي M5 Pro وM5 Max (3 مارس 2026)** -- ذاكرة موحّدة تصل إلى 64 GB و128 GB. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**مقارنة GeForce للحواسيب المحمولة من NVIDIA** -- GPU الحاسوب المحمول RTX 4060: ذاكرة GDDR6 بحجم 8 GB وناقل 128 بت. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: RTX 4060 Laptop GPU** -- سرعة ذاكرة 16 Gbps (من جهة خارجية؛ أساس رقم ~256 GB/s). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**مواصفات NVIDIA GeForce RTX 4090** -- ذاكرة VRAM بحجم 24 GB وعرض نطاق 1,008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**مكتبة Ollama** -- أحجام الملفات جرى التحقق منها بتاريخ 2026-10-23: [llama3.2](https://ollama.com/library/llama3.2)، [phi4-mini](https://ollama.com/library/phi4-mini)، [qwen3](https://ollama.com/library/qwen3)، [qwen3.5](https://ollama.com/library/qwen3.5)، [llama3.1](https://ollama.com/library/llama3.1)، [llama3.3](https://ollama.com/library/llama3.3)، [gemma4](https://ollama.com/library/gemma4).",
          "**الأسئلة الشائعة لـ Ollama** -- طول السياق الافتراضي 4096، وOLLAMA_CONTEXT_LENGTH، ونوع KV cache، وkeep-alive، و`ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**وثائق GPU في Ollama** -- Metal على Apple Silicon وVulkan ووحدات GPU المدعومة. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**README الخاص بـ quantize في llama.cpp** -- أحجام الملفات حسب نوع التكميم لنموذج Llama 3.1 8B. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**إطار Apple MLX** -- تسريع GPU على حواسيب Mac بشرائح Apple Silicon. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** -- متطلبات النظام وتوافق GPU وإعداد الاستدلال المحلي. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "ما الأخطاء الشائعة عند تشغيل LLM محلي على الحواسيب المحمولة؟",
        "items": [
          "**تشغيل نموذج أكبر من RAM المتاحة** ← يبدأ النظام بالتبديل إلى القرص ويتباطأ التوليد بشدة؛ اختر نموذجاً أصغر أو تكميماً أدنى.",
          "**تجاهل الخنق الحراري** ← قد تنخفض السرعة المستدامة عندما تبلغ الشريحة حدها الحراري؛ تحقق من سرعتك بعد 10 دقائق عبر `ollama run <model> --verbose`.",
          "**استخدام Q8_0 بدلاً من Q4_K_M** ← الملف أكبر بنحو 1.7 مرة (7.95 مقابل 4.58 GiB لنموذج Llama 3.1 8B)، فيحتاج إلى RAM أكثر ويولّد أبطأ على حاسوب محمول محدود عرض النطاق، مقابل مكسب صغير في الجودة.",
          "**التشغيل بشريحة RAM واحدة** ← الذاكرة أحادية القناة تخفّض ذروة عرض النطاق وسقف السرعة إلى النصف؛ استخدم شريحتين متطابقتين حيث يسمح الحاسوب بذلك.",
          "**ترك GPU offload معطلاً في LM Studio** ← يعمل النموذج على CPU بدلاً من GPU؛ ارفع إعداد GPU offload عندما يتسع النموذج في ذاكرة GPU.",
          "**إبقاء نافذة السياق الافتراضية** ← القيمة الافتراضية في Ollama هي 4096 رمزاً، فتُقتطع المستندات متعددة الصفحات؛ ارفعها عبر `OLLAMA_CONTEXT_LENGTH=8192` أو `/set parameter num_ctx 8192` وتوقّع استهلاك ذاكرة أكبر."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- نماذج صغيرة محسّنة للحواسيب المحمولة",
          "[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- دليل التثبيت",
          "[كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) -- مثبّت بواجهة رسومية",
          "[استكشاف أخطاء إعداد LLM المحلي وإصلاحها](/ar/local-llms/troubleshooting-local-llm-setup) -- حلول للأداء والأخطاء",
          "[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) -- Q4_K_M مقابل Q8_0 مقابل Q5_K_M بالتفصيل",
          "[نماذج LLM المحلية الصغيرة بحجم أقل من 4 GB](/ar/local-llms/small-local-llm-models) -- نماذج 3B للحواسيب المحمولة بذاكرة 8 GB",
          "[الحاسوب المحمول مقابل المكتبي لـ LLM المحلي 2026](/ar/local-llms/laptop-vs-desktop-local-llm) -- دليل الشراء: مقارنة الأداء وتحليل التكلفة وأي منصة تشتري.",
          "[MLX مقابل Ollama مقابل llama.cpp على Mac 2026](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- مقارنة الأطر على Apple Silicon: السرعة ووقت الإعداد والمفاضلات في المنظومة.",
          "[أرخص طريقة لتشغيل نموذج 70B محلياً](/ar/prompt-bites/cheapest-way-to-run-70b-model-locally) -- متى يتحمل الحاسوب المحمول نموذج 70B: Q3_K_S على M3 Max مقابل التفريغ إلى CPU.",
          "[أفضل GPU لاستدلال LLM المحلي بأقل من 500 دولار (2026)](/ar/local-llms/best-gpu-for-llm-inference-under-500-2026) -- مسار الترقية عبر eGPU لحواسيب MacBook والحواسيب المحمولة بنظام Windows.",
          "[أفضل نماذج LLM المحلية على CPU فقط 2026](/ar/local-llms/best-cpu-only-llm) -- tok/s تقديري حسب حجم ملف النموذج للأجهزة بلا GPU.",
          "[أسرع نماذج LLM المحلية للحواسيب منخفضة المواصفات](/ar/local-llms/fastest-local-llms-low-end-pcs) -- اختيارات لذاكرة 4–16 GB على CPU فقط أو iGPU."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "تشغيل LLM محلي على حاسوب محمول: ما يعمل على 8GB و16GB وApple Silicon (2026)",
      "description": "شغّل نماذج LLM محلية على حواسيب محمولة بذاكرة 8 GB أو 16 GB أو بشرائح Apple Silicon. يغطي اختيار النماذج (Llama 3.2 3B وPhi-4-mini وQwen3 8B)، وتقديرات السرعة من عرض نطاق الذاكرة، والحرارة والبطارية وتكميم Q4_K_M.",
      "url": "https://www.promptquorum.com/ar/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Organization",
        "name": "PromptQuorum"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "LLM محلي على حاسوب محمول"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "تكميم Q4_K_M"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "الخنق الحراري"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "ar"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "أفضل نماذج LLM المحلية للحواسيب المحمولة 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "نموذج 3B بملف Ollama حجمه 2.0 GB. تقديري 18–30 tok/s على ذاكرة ثنائية القناة (تقدير PromptQuorum). أصغر ملف هنا، ويناسب الحواسيب المحمولة بذاكرة 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "نموذج 3.8B بملف Ollama حجمه 2.5 GB. تقديري 15–25 tok/s على ذاكرة ثنائية القناة (تقدير PromptQuorum). استدلال وبرمجة على الحواسيب المحمولة بذاكرة 8 GB."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "نموذج 8B بملف Ollama حجمه 5.2 GB. تقديري 8–15 tok/s على ذاكرة ثنائية القناة (تقدير PromptQuorum). لغات متعددة وبرمجة على الحواسيب المحمولة بذاكرة 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "نموذج 8B بملف Ollama حجمه 4.9 GB. تقديري 8–14 tok/s على ذاكرة ثنائية القناة (تقدير PromptQuorum). استخدام عام على الحواسيب المحمولة بذاكرة 16 GB."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "نموذج 9B بملف Ollama حجمه 6.6 GB. تقديري 6–12 tok/s على ذاكرة ثنائية القناة (تقدير PromptQuorum). عائلة أحدث مع إدخال صور على الحواسيب المحمولة بذاكرة 16 GB."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما أفضل نماذج Ollama لحاسوب بـ Intel Iris Xe وذاكرة 16 GB؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "في حاسوب محمول برسوميات Intel Iris Xe وذاكرة 16 GB، يحدّ السرعةَ عرضُ نطاق ذاكرة النظام. واستخدام Ollama لـ iGPU من عدمه يتوقف على دعم برنامج التشغيل والواجهة الخلفية (تحقق من عمود PROCESSOR في `ollama ps`)، ويشارك iGPU الذاكرة نفسها، لذلك تكون المكاسب متواضعة عادةً. اختر نموذج 3B–4B بتكميم Q4_K_M للسرعة: Llama 3.2 3B (تقديري 18–30 tok/s على ذاكرة ثنائية القناة) عبر `ollama run llama3.2:3b`، أو Qwen3 8B (تقديري 8–15 tok/s) عبر `ollama run qwen3:8b` لجودة أعلى. السرعات تقديرات من PromptQuorum وليست قياسات مخبرية."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن تشغيل RAG محلياً على حاسوب محمول؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم. تتكون حزمة RAG على الحاسوب المحمول من نموذج تضمين صغير ومخزن متجهات محلي ونموذج المحادثة. نموذج التضمين صغير (حجم nomic-embed-text هو 274 MB على Ollama)، لذا يظل نموذج المحادثة هو القيد الحاسم في RAM: الحاسوب بذاكرة 8 GB يشغّل نموذج محادثة 3B مع الاسترجاع، وذاكرة 16 GB تترك مجالاً لنموذج 8B. راجع [قسم RAG على حاسوب محمول](#rag-laptop) أعلاه لتفصيل RAM."
          }
        },
        {
          "@type": "Question",
          "name": "ما أفضل LLM محلي على CPU فقط لحاسوب محمول؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "من بين النماذج المقارَنة في دليل CPU فقط، يُعد Phi-4 Mini (3.8B، ملف بحجم 2.5 GB) أفضل خيار شامل بسرعة تقديرية 15–25 tok/s على ذاكرة ثنائية القناة، ويُعد Llama 3.2 3B (ملف بحجم 2.0 GB) أصغر ملف بسرعة تقديرية 18–30 tok/s، وكلاهما بتكميم Q4_K_M. للمقارنة الكاملة وأوامر Ollama راجع [أفضل نماذج LLM المحلية على CPU فقط 2026](/ar/local-llms/best-cpu-only-llm)."
          }
        },
        {
          "@type": "Question",
          "name": "هل يضر تشغيل LLM محلي بحاسوبي المحمول مع الوقت؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "لا يُتوقع ضرر فوري على حاسوب محمول سليم: الشرائح تخفّض سرعتها عند ارتفاع حرارتها، لذا يبطّئ الاستدلال المستمر الجهازَ ولا يتلفه. ومع ذلك تمثل الحرارة المستمرة تآكلاً للمراوح والبطارية مع الوقت، فاستخدم حاملاً أو قاعدة تبريد، وأبقِ فتحات التهوية مفتوحة، وخذ فترات راحة. واتبع إرشادات الشركة المصنّعة بشأن الحرارة والعناية بالبطارية."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن تشغيل LLM محلي على حاسوب محمول بذاكرة 4 GB؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "بصعوبة. يتسع نموذج صغير مثل Qwen3 1.7B (ملف بحجم 1.4 GB) أو Llama 3.2 1B (ملف بحجم 1.3 GB)، لكن نظام التشغيل يحتاج إلى 2–3 GB، لذا في جهاز بذاكرة 4 GB إجمالاً يُرجَّح أن تصل إلى التبديل (swap) الذي يبطّئ التوليد بشدة. الحد الأدنى العملي لتجربة مريحة هو 8 GB. راجع [أسرع نماذج LLM المحلية للحواسيب منخفضة المواصفات](/ar/local-llms/fastest-local-llms-low-end-pcs)."
          }
        },
        {
          "@type": "Question",
          "name": "هل يحتاج حاسوبي المحمول إلى GPU مخصص لتشغيل LLM محلي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "لا. يعمل Ollama وLM Studio وGPT4All على CPU فقط. يسرّع GPU ذو عرض نطاق الذاكرة العالي التوليد، لكن نماذج 3B–4B قابلة للاستخدام على CPU بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة. راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) لتوصيات نماذج مناسبة لـ CPU."
          }
        },
        {
          "@type": "Question",
          "name": "ما أسرع LLM محلي يمكنني تشغيله على MacBook بذاكرة 8 GB؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "من بين النماذج في هذا الدليل، يُعد Llama 3.2 3B بتكميم Q4_K_M (ملف بحجم 2.0 GB) أسرع خيار عملي على MacBook بذاكرة 8 GB. على M2 أو M3 (كلاهما 100 GB/s بحسب Apple) يبلغ سقف عرض النطاق نحو 50 tok/s، وتقدير PromptQuorum هو 35–45 tok/s. أما ملف 8B (بحجم 5.2 GB) فضيق على 8 GB لأن macOS وتطبيقاتك تحتاج إلى ذاكرة أيضاً."
          }
        },
        {
          "@type": "Question",
          "name": "كيف أقلل الخنق الحراري في الحاسوب المحمول أثناء استدلال LLM؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "أربع خطوات: (1) ارفع الحاسوب على حامل يتيح مرور الهواء، (2) جرّب وضع طاقة متوازناً أو منخفضاً، لأن التوليد يحدّه عرض نطاق الذاكرة أكثر من سرعة المعالج، (3) قلّل طول التوليد والسياق، (4) استخدم Q4_K_M بدلاً من Q8_0 ليقرأ كل رمز بيانات أقل. تحقق من سرعتك خلال 10 دقائق عبر `ollama run <model> --verbose`."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن تشغيل LLM محلي على Chromebook؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "فقط على أجهزة Chromebook التي فُعِّل فيها Linux (Crostini)، ومع نماذج صغيرة فقط. معظم أجهزة Chromebook تملك ذاكرة 4–8 GB وعرض نطاق ذاكرة متواضعاً، لذا فإن نموذج 1B–3B بتكميم Q4_K_M هو السقف الواقعي وستكون السرعة منخفضة. أجهزة Chromebook التي لا تدعم Linux لا تستطيع تشغيل Ollama."
          }
        },
        {
          "@type": "Question",
          "name": "هل Apple Silicon أفضل من GPU الحاسوب المحمول من NVIDIA لتشغيل LLM محلي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يتوقف ذلك على الذاكرة. تتبع السرعةُ عرضَ نطاق الذاكرة وسعتها: MacBook بذاكرة 16 GB وشريحة M5 (153 GB/s) له سقف نحو 29 tok/s لنموذج Qwen3 8B، بينما GPU الحاسوب المحمول RTX 4060 (نحو 256 GB/s، وذاكرة VRAM بحجم 8 GB) له سقف نحو 49 tok/s لكنه لا يحتوي إلا النماذج التي تتسع في 8 GB. وشريحة M5 Pro (307 GB/s) أو M5 Max (460–614 GB/s) بذاكرة أكبر تحتوي نماذج أكبر في ذاكرة سريعة. ويختلف استهلاك الطاقة بحسب الطراز، فتحقق من حاسوبك."
          }
        },
        {
          "@type": "Question",
          "name": "ماذا يحدث إذا كان النموذج أكبر من ذاكرة RAM في حاسوبي المحمول؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يبدأ نظام التشغيل بالتبديل إلى القرص، أو يفشل تحميل النموذج، وقد يتباطأ التوليد إلى حد الزحف بينما تعمل المراوح بقوة. الحل هو نموذج أصغر، أو مستوى تكميم أدنى (Q4_K_M بدلاً من Q8_0)، أو سياق أقصر (`OLLAMA_CONTEXT_LENGTH`، والقيمة الافتراضية 4096)."
          }
        },
        {
          "@type": "Question",
          "name": "كم تدوم البطارية عند تشغيل LLM محلي على حاسوب محمول؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "مدة التشغيل تساوي تقريباً سعة البطارية بالواط-ساعة (Wh) مقسومة على متوسط استهلاك الطاقة بالواط (W). بطارية 60 Wh عند 20 W تدوم نحو 3 ساعات، وعند 30 W نحو ساعتين (حساب توضيحي وليس قياساً). يختلف الاستهلاك الفعلي بحسب الحاسوب والنموذج ووضع الطاقة. وللاستخدام طوال اليوم، وصّل الشاحن."
          }
        },
        {
          "@type": "Question",
          "name": "هل أحتاج إلى اتصال بالإنترنت لتشغيل LLM محلي على حاسوب محمول؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "لا. بعد تنزيل النموذج (وهو يتطلب الإنترنت)، يعمل الاستدلال دون اتصال بالكامل. يعمل النموذج بالكامل على CPU أو GPU الحاسوب المحمول. وهذا يجعل نماذج LLM المحلية مفيدة في السفر والبيئات المؤمَّنة أو المواقع ذات الاتصال غير الموثوق."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكنني تشغيل LLM محلي على ذاكرة RAM بحجم 8 GB؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم. الحاسوب المحمول بذاكرة 8 GB يشغّل نموذج 3B–4B بتكميم Q4_K_M (ملفات 2.0–2.5 GB) بسرعة تقديرية 15–30 tok/s على ذاكرة ثنائية القناة، أو بسرعة تقديرية 28–45 tok/s على Apple M2 أو M3. أما نماذج 7B–8B (ملفات 4.4–5.2 GB) فضيقة على 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "ما أسرع حاسوب محمول لتشغيل LLM محلي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "المواصفتان الأهم لـ LLM المحلي هما عرض نطاق الذاكرة وسعة ذاكرة كافية. تعلن Apple عن 307 GB/s لـ M5 Pro (حتى 64 GB) و460 أو 614 GB/s لـ M5 Max (حتى 128 GB)؛ وتقديرات PromptQuorum لنموذج Qwen3 8B هي 41–53 tok/s على M5 Pro و62–106 tok/s على M5 Max. وفي Windows، فإن الحاسوب المحمول بـ GPU من NVIDIA يحتوي النموذج في VRAM له سقف مرتفع، مثلاً نحو 256 GB/s لـ GPU الحاسوب المحمول RTX 4060 بذاكرة 8 GB."
          }
        },
        {
          "@type": "Question",
          "name": "ما مدى بطء LLM المحلي على CPU؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "السرعة لا تتجاوز عرض نطاق الذاكرة ÷ حجم ملف النموذج. على ذاكرة DDR4/DDR5 ثنائية القناة يعمل نموذج 3B–4B بتكميم Q4_K_M بسرعة تقديرية 15–30 tok/s، ونموذج Qwen3 8B بسرعة تقديرية 8–15 tok/s؛ والذاكرة أحادية القناة تخفّض ذلك إلى النصف. هذا بطيء بما يكفي لمتابعة القراءة لكنه سريع بما يكفي للمحادثة والتلخيص. وتصل Apple Silicon إلى سرعة تقديرية 13–26 tok/s لنموذج Qwen3 8B (من M3 إلى M5) لأن الذاكرة الموحّدة ذات عرض نطاق أكبر."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "كيف تقلل الخنق الحراري في حاسوب محمول أثناء استدلال LLM محلي",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "استخدم حامل حاسوب يتيح مرور الهواء",
          "text": "ارفع الحاسوب على حامل لتحسين تدفق هواء العادم، فقد يؤخر ذلك الخنق."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "جرّب وضع طاقة أقل",
          "text": "توليد الرموز يحدّه عرض نطاق الذاكرة لا سرعة المعالج، لذا قد تقلل خطة طاقة متوازنة أو منخفضة (في macOS: وضع الطاقة المنخفضة) الحرارة. اختبرها على جهازك."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "قلّل طول التوليد والسياق",
          "text": "قسّم المهام الطويلة إلى مطالبات أقصر وتجنّب إعادة توليد الاستجابات الطويلة جداً دفعة واحدة."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "استخدم تكميم Q4_K_M بدلاً من Q8_0",
          "text": "الملف أصغر بنحو 1.7 مرة، فيقرأ كل رمز بيانات أقل من الذاكرة وتبقى الشريحة تحت الحمل مدة أقصر."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  },
  "ko": {
    "freshness_tier": "semi_annual",
    "next_refresh_due": "2027-04-23",
    "last_full_refresh": "2026-10-23",
    "next_seo_review_due": "2027-01-01",
    "last_seo_review": "2026-10-23",
    "theme": "Getting Started",
    "title": "노트북에서 로컬 LLM 실행하기: 8GB, 16GB, Apple Silicon에서 되는 것 (2026)",
    "seoTitle": "노트북 로컬 LLM: 8GB, 16GB, Apple Silicon",
    "intro": "RAM 8 GB 노트북에서도 로컬 LLM을 실행할 수 있습니다. Q4_K_M 3B–4B 모델은 듀얼 채널 RAM에서 추정 15–30 tok/s로 동작하고, 16 GB 노트북은 8B 모델을 추정 8–15 tok/s로 실행합니다. Apple Silicon은 통합 메모리의 대역폭이 더 넓어 더 빠릅니다. 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다. 노트북이 이 속도를 얼마나 오래 유지하는지는 발열과 배터리에 따라 제한됩니다.",
    "metaDescription": "노트북 로컬 LLM: 8 GB, 16 GB, Apple Silicon에서 실행되는 모델과 메모리 대역폭 기반 추정 tok/s, 발열, 배터리, 양자화까지 정리했습니다.",
    "heroImage": "/images/local-llm-on-laptop-ram-tiers-hero-ko.webp",
    "twitterDescription": "노트북 로컬 LLM: RAM 8 GB는 3B–4B 모델을 추정 15–30 tok/s, 16 GB는 8B를 추정 8–15 tok/s로 실행합니다. 메모리 대역폭 기반 추정이며 실측이 아닙니다.",
    "publishDate": "2026-04-04",
    "dateModified": "2026-10-23",
    "leadAnswerBlock": "**노트북에서 로컬 LLM을 실행할 수 있습니다. 8 GB는 3B–4B 모델 추정 15–30 tok/s, 16 GB는 8B 모델 추정 8–15 tok/s(CPU)입니다. 추정치이며 실측이 아닙니다.**",
    "comparisonTable": {
      "columns": [
        "구성",
        "모델 크기",
        "속도",
        "사용 느낌"
      ],
      "rows": [
        {
          "구성": "RAM 8 GB, CPU",
          "모델 크기": "3B–4B",
          "속도": "추정 15–30 tok/s",
          "사용 느낌": "채팅, 요약, 간단한 코딩"
        },
        {
          "구성": "RAM 16 GB, CPU",
          "모델 크기": "8B–9B",
          "속도": "추정 8–15 tok/s",
          "사용 느낌": "멀티태스킹과 병행하는 일반 용도"
        },
        {
          "구성": "Apple Silicon (M3~M5), 16 GB",
          "모델 크기": "8B",
          "속도": "추정 13–26 tok/s",
          "사용 느낌": "일반 노트북 RAM보다 넓은 메모리 대역폭"
        },
        {
          "구성": "GPU 노트북 (RTX 4060, VRAM 8 GB)",
          "모델 크기": "8B",
          "속도": "추정 34–44 tok/s",
          "사용 느낌": "모델이 VRAM에 들어가면 빠름. 발열과 전력 소비 큼"
        }
      ]
    },
    "audience": "소비자용 하드웨어에서 처음으로 로컬 LLM을 실행해 보는 입문자",
    "readTime": "8분 읽기",
    "educationalLevel": "Beginner",
    "primaryTerm": "local LLM laptop",
    "toc": [
      {
        "label": "빠른 답변: 내 노트북에서는 어떤 로컬 LLM이 실행될까요?",
        "anchor": "#quick-answer-ram"
      },
      {
        "label": "핵심 내용",
        "anchor": "#key-takeaways"
      },
      {
        "label": "노트북에서 로컬 LLM을 실행할 수 있나요?",
        "anchor": "#can-you-run"
      },
      {
        "label": "노트북에서 RAG를 실행할 수 있나요?",
        "anchor": "#rag-laptop"
      },
      {
        "label": "어떤 구성이 필요한가요?",
        "anchor": "#use-case"
      },
      {
        "label": "노트북에서 가장 잘 돌아가는 로컬 LLM 모델은 무엇인가요?",
        "anchor": "#best-models"
      },
      {
        "label": "Apple Silicon과 Windows 노트북 비교",
        "anchor": "#apple-vs-windows"
      },
      {
        "label": "로컬 LLM용 노트북과 데스크톱 비교",
        "anchor": "#laptop-vs-desktop"
      },
      {
        "label": "열 쓰로틀링은 어떻게 다루나요?",
        "anchor": "#thermals"
      },
      {
        "label": "로컬 LLM을 실행하면 배터리를 얼마나 쓰나요?",
        "anchor": "#battery-drain"
      },
      {
        "label": "노트북에서는 어떤 양자화 수준을 써야 하나요?",
        "anchor": "#quantization-tips"
      },
      {
        "label": "노트북에서 로컬 LLM을 실행할 때 어떤 개인정보 보호법이 적용되나요?",
        "anchor": "#regional-context"
      },
      {
        "label": "노트북에서 로컬 LLM을 실행할 때 흔한 실수는 무엇인가요?",
        "anchor": "#common-mistakes"
      },
      {
        "label": "관련 글",
        "anchor": "#related-reading"
      },
      {
        "label": "노트북에서 로컬 LLM을 실행할 때 자주 묻는 질문",
        "anchor": "#faq"
      },
      {
        "label": "출처",
        "anchor": "#sources"
      }
    ],
    "quickAnswerTop": {
      "question": "노트북에서 로컬 LLM을 실행할 수 있나요?",
      "answer": "네. RAM 8 GB 노트북은 Q4_K_M 3B–4B 모델을 실행할 수 있으며, 예를 들어 Llama 3.2 3B(파일 2.0 GB)는 듀얼 채널 RAM에서 추정 18–30 tok/s입니다. 16 GB 노트북은 Qwen3 8B(파일 5.2 GB) 같은 8B–9B 모델을 CPU에서 추정 8–15 tok/s로 실행합니다. Apple Silicon은 통합 메모리의 대역폭이 더 넓어 더 빠르며, Qwen3 8B 기준 M3에서 추정 13–17 tok/s, M5에서 21–26 tok/s입니다. 모든 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다.",
      "bullets": [
        "RAM 8 GB: Llama 3.2 3B(파일 2.0 GB) 또는 Phi-4-mini(2.5 GB), 듀얼 채널 RAM에서 추정 15–30 tok/s",
        "RAM 16 GB: Qwen3 8B(파일 5.2 GB) 또는 Llama 3.1 8B(4.9 GB), CPU에서 추정 8–15 tok/s",
        "Apple Silicon: Qwen3 8B 기준 M3(100 GB/s)에서 추정 13–17 tok/s, M5(153 GB/s)에서 21–26 tok/s",
        "속도 법칙: tok/s는 최대 메모리 대역폭 ÷ 모델 파일 크기이며, 싱글 채널 RAM은 이 값이 절반으로 줄어듭니다",
        "부하가 지속되면 클럭이 낮아질 수 있고 배터리도 빠르게 소모됩니다. 전원을 연결하고 통풍을 확보하십시오"
      ],
      "updatedDate": "2026-10-23"
    },
    "sections": {
      "quickAnswerByRam": {
        "id": "quick-answer-ram",
        "title": "빠른 답변: 내 노트북(8GB, 16GB, Apple Silicon)에서는 어떤 로컬 LLM이 실행될까요?",
        "content": [
          "**RAM 8 GB 노트북에서도 로컬 LLM을 실행할 수 있습니다. Q4_K_M 3B–4B 모델은 듀얼 채널 RAM에서 추정 15–30 tok/s로 동작합니다.** 아래 표는 하드웨어에 맞는 모델을 보여 줍니다. 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치(tok/s ≈ 대역폭 ÷ 모델 파일 크기)이며 실험실 측정값이 아닙니다."
        ],
        "rows": [
          {
            "내 노트북": "RAM 8 GB, CPU만 사용",
            "추천 모델": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "추정 tok/s": "15–30",
            "하드웨어 가정": "듀얼 채널 DDR4/DDR5"
          },
          {
            "내 노트북": "RAM 16 GB, CPU만 사용",
            "추천 모델": "Qwen3 8B / Llama 3.1 8B, Q4_K_M",
            "추정 tok/s": "8–15",
            "하드웨어 가정": "듀얼 채널 DDR4/DDR5"
          },
          {
            "내 노트북": "Apple M3, 16 GB",
            "추천 모델": "Qwen3 8B, Q4_K_M",
            "추정 tok/s": "13–17",
            "하드웨어 가정": "통합 메모리 100 GB/s"
          },
          {
            "내 노트북": "Apple M5, 16 GB",
            "추천 모델": "Qwen3 8B, Q4_K_M",
            "추정 tok/s": "21–26",
            "하드웨어 가정": "통합 메모리 153 GB/s"
          },
          {
            "내 노트북": "Intel Iris Xe / AMD iGPU",
            "추천 모델": "Llama 3.2 3B / Phi-4-mini, Q4_K_M",
            "추정 tok/s": "15–30",
            "하드웨어 가정": "시스템 RAM 공유, ollama ps로 확인"
          }
        ],
        "columns": [
          "내 노트북",
          "추천 모델",
          "추정 tok/s",
          "하드웨어 가정"
        ],
        "image": "/images/local-llm-on-laptop-ram-tiers-hero-ko.webp",
        "imageCaption": "노트북에서 로컬 LLM 실행: 8GB, 16GB, Apple Silicon 모델과 추정 tok/s"
      },
      "tldr": {
        "id": "key-takeaways",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "RAM 8 GB 노트북은 3B–4B 로컬 LLM을 추정 15–30 tok/s로, 16 GB 노트북은 8B–9B 모델을 추정 8–15 tok/s로 실행하며, Apple Silicon은 통합 메모리의 대역폭이 더 넓어 더 빠릅니다."
          },
          {
            "type": "plain-terms",
            "text": "노트북의 주요 한계는 RAM과 메모리 대역폭입니다. 모델 파일이 RAM에 들어가야 하고, 토큰을 하나 생성할 때마다 파일 전체를 한 번 읽기 때문에 속도는 최대 메모리 대역폭을 파일 크기로 나눈 값입니다. 노트북은 부하가 지속되면 느려질 수 있으며(열 쓰로틀링), 거치대, 전원 연결, 더 작은 모델이 도움이 됩니다."
          }
        ],
        "items": [
          "RAM 8 GB 노트북에서는 Q4_K_M 3B–4B 모델을 실행할 수 있습니다. Llama 3.2 3B(파일 2.0 GB)는 추정 18–30 tok/s, Phi-4-mini(2.5 GB)는 추정 15–25 tok/s입니다.",
          "RAM 16 GB에는 Q4_K_M 8B–9B 모델이 들어갑니다. Qwen3 8B(파일 5.2 GB)는 듀얼 채널 RAM에서 추정 8–15 tok/s, Apple M3에서 13–17 tok/s, Apple M5에서 21–26 tok/s입니다.",
          "속도 법칙: 초당 토큰 수는 최대 메모리 대역폭 ÷ 모델 파일 크기입니다(상한값이며 실제 속도는 더 낮습니다). 듀얼 채널 DDR4-3200은 51.2 GB/s, 듀얼 채널 DDR5-5600은 89.6 GB/s이고, 싱글 채널이면 결과가 절반이 됩니다. Apple은 M3를 100 GB/s, M5를 153 GB/s로 공개하고 있습니다.",
          "이 페이지의 모든 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다. `ollama run <model> --verbose`를 실행하면 내 노트북의 초당 토큰 수를 직접 확인할 수 있습니다.",
          "긴 작업에는 전원을 연결하고 노트북의 통풍을 확보하십시오. 부하가 지속되면 노트북 칩이 클럭을 낮출 수 있고, 추론 중에는 가벼운 사용보다 배터리가 훨씬 빠르게 소모됩니다."
        ]
      },
      "inOneSentence": {
        "id": "in-one-sentence",
        "title": "한 문장 요약",
        "content": [
          "로컬 LLM은 양자화된 모델을 사용해 노트북에서 실행할 수 있습니다. Q4_K_M은 품질 손실을 조금 감수하는 대신 파일을 FP16 크기의 약 31%로 줄입니다(Llama 3.1 8B 기준 14.96 GiB에서 4.58 GiB로 감소)."
        ]
      },
      "plainTerms": {
        "id": "in-plain-terms",
        "title": "쉽게 말하면",
        "content": [
          "LLM을 로컬에서 실행한다는 것은 챗봇을 제공업체의 서버가 아니라 내 노트북에서 돌린다는 뜻입니다. 개인정보를 지키고 오프라인에서도 쓸 수 있지만, 클라우드 서비스보다는 느립니다."
        ]
      },
      "whenToUse": {
        "id": "when-to-use",
        "title": "노트북에서 LLM을 실행하는 것이 적합한 경우는 언제인가요?",
        "items": [
          "✅ **로컬 LLM이 적합한 경우:** 데이터가 기기 안에 머물러야 할 때, 오프라인으로 작업할 때, 토큰당 API 비용을 원하지 않을 때",
          "❌ **적합하지 않은 경우:** 가장 강력한 추론 품질이 필요할 때, 매우 긴 컨텍스트(100K+ 토큰, 컨텍스트가 길어지면 KV 캐시도 커지기 때문)가 필요할 때, 빠른 배치 처리가 필요할 때 — [로컬 LLM의 한계](/ko/local-llms/local-llm-limitations)를 참고하십시오"
        ]
      },
      "canYouRun": {
        "id": "can-you-run",
        "title": "노트북에서 로컬 LLM을 실행할 수 있나요?",
        "content": [
          "**네, 모델 크기만 알맞게 고르면 됩니다.** RAM 8 GB 노트북은 Q4_K_M 3B–4B 모델을 듀얼 채널 RAM에서 추정 15–30 tok/s로 실행합니다(Llama 3.2 3B: 18–30, Phi-4-mini: 15–25). 16 GB Apple Silicon 노트북은 칩에 따라 8B 모델을 추정 13–26 tok/s로 실행합니다. 대부분의 클라우드 API보다는 느리지만 읽으면서 따라가기에는 충분히 빠릅니다.",
          "8 GB 노트북의 현실적인 상한은 3B–4B 모델입니다. 7B–8B 파일(4.4–5.2 GB)은 운영체제와 브라우저를 위한 여유가 거의 남지 않습니다. Q4_K_M 14B 모델(Qwen3 14B: 파일 9.3 GB)은 컨텍스트를 짧게 하고 다른 앱을 닫은 경우에만 16 GB 기기에 들어갑니다.",
          "여기의 속도는 메모리 대역폭에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다. 8 GB 미만 구간과 전체 대역폭 법칙은 **[저사양 PC용 가장 빠른 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)**을, GPU가 없는 노트북은 **[CPU 전용 최고의 로컬 LLM 2026](/ko/local-llms/best-cpu-only-llm)**을 참고하십시오."
        ]
      },
      "rag": {
        "id": "rag-laptop",
        "title": "노트북에서 RAG(검색 증강 생성)를 실행할 수 있나요?",
        "content": [
          "**네, RAG는 노트북에서 실행됩니다. 실제 제약은 검색 계층이 아니라 여전히 채팅 모델이기 때문입니다.** 노트북 RAG 구성은 작은 임베딩 모델, 로컬 벡터 저장소, 채팅 모델의 세 부분입니다.",
          "임베딩 모델은 작습니다. nomic-embed-text는 Ollama에서 274 MB(컨텍스트 창 2K)여서 RAM 부담이 거의 없습니다. 8 GB 노트북에서는 3B 채팅 모델과 임베딩 모델을 함께 실행할 수 있고, 16 GB에서는 8B 채팅 모델과 검색을 함께 돌릴 여유가 있습니다.",
          "**RAM 2 GB는 아주 작은 구성에서만 동작합니다.** Qwen3 0.6B(523 MB)와 nomic-embed-text를 합치면 파일이 약 0.8 GB이므로, 실제로 2 GB가 비어 있다면 들어갑니다. 일반적인 노트북에서는 운영체제가 2–3 GB를 쓰고 디스크 스왑이 발생하면 생성 속도가 크게 떨어지므로, 현실적인 최소 사양은 8 GB로 잡으십시오."
        ]
      },
      "useCase": {
        "id": "use-case",
        "title": "내 용도에는 어떤 노트북 구성이 필요한가요?",
        "items": [
          "**입문자** — RAM 8 GB, 3B–4B 모델, CPU만 사용. 추정 15–30 tok/s입니다. 채팅, 요약, 간단한 코딩에 충분합니다.",
          "**개발자** — RAM 16 GB, 8B–9B 모델, GPU는 선택. 다른 앱을 닫지 않고도 멀티태스킹이 가능합니다(CPU에서 추정 8–15 tok/s).",
          "**고급 사용자** — Pro 또는 Max 칩의 Apple Silicon, 또는 VRAM 8 GB 이상의 노트북 GPU, 8B–14B 모델. Qwen3 8B 추정치는 M5 Pro(307 GB/s)에서 41–53 tok/s, RTX 4060 노트북 GPU(약 256 GB/s)에서 34–44 tok/s입니다."
        ]
      },
      "whoCan": {
        "id": "who-can-run",
        "title": "노트북에서 로컬 LLM을 실행할 수 있는 사람은 누구인가요?",
        "items": [
          "**입문자** → [LM Studio](/ko/local-llms/how-to-install-lm-studio) + 3B 모델",
          "**중급자** → [Ollama](/ko/local-llms/how-to-install-ollama) + 8B 모델",
          "**고급 사용자** → [양자화 튜닝](/ko/local-llms/llm-quantization-explained)을 적용한 14B",
          "❌ **노트북이 적합하지 않은 경우:** 실시간 API가 필요할 때(vLLM 서버 사용), 대용량 데이터셋을 처리할 때(클라우드 GPU 사용)"
        ]
      },
      "modelComparison": {
        "id": "model-comparison",
        "title": "어떤 크기의 로컬 LLM 모델이 필요한가요?",
        "content": "파일 크기는 2026-10-23에 ollama.com에서 확인한 Ollama 다운로드 크기이며, Q4_K_M급 양자화(FP16보다 약 70% 작음) 기준입니다. 최소 RAM은 파일 크기에 오버헤드 약 0.5 GB를 더한 값이며, 운영체제와 브라우저를 위해 2–4 GB를 더 남겨 두십시오.",
        "rows": [
          {
            "모델": "Llama 3.2 3B",
            "파일(Ollama)": "2.0 GB",
            "최소 RAM": "2.5–3 GB",
            "추정 tok/s": "18–30",
            "추천 용도": "기본 작업, 채팅, 요약"
          },
          {
            "모델": "Phi-4-mini 3.8B",
            "파일(Ollama)": "2.5 GB",
            "최소 RAM": "3 GB",
            "추정 tok/s": "15–25",
            "추천 용도": "8 GB에서의 추론과 코딩"
          },
          {
            "모델": "Qwen3 8B",
            "파일(Ollama)": "5.2 GB",
            "최소 RAM": "6 GB",
            "추정 tok/s": "8–15",
            "추천 용도": "일반 용도, 다국어, 코딩"
          },
          {
            "모델": "Qwen3 14B",
            "파일(Ollama)": "9.3 GB",
            "최소 RAM": "10 GB",
            "추정 tok/s": "4–8",
            "추천 용도": "16 GB에서 더 어려운 작업, 짧은 컨텍스트"
          }
        ],
        "columns": [
          "모델",
          "파일(Ollama)",
          "최소 RAM",
          "추정 tok/s",
          "추천 용도"
        ],
        "note": "추정치는 실험실 측정값이 아닌 PromptQuorum의 추정이며, 듀얼 채널 DDR4-3200~DDR5-5600(51.2–89.6 GB/s) 노트북을 기준으로 합니다. 싱글 채널 RAM에서는 절반이 됩니다. Q4_K_M 예시: Llama 3.1 8B는 FP16에서 14.96 GiB, Q4_K_M에서 4.58 GiB(llama.cpp quantize README)로 약 69% 작습니다. → [VRAM 계산기](/ko/local-llms/vram-calculator-local-llm)"
      },
      "ram8vs16": {
        "id": "8gb-vs-16gb",
        "title": "RAM 8 GB와 16 GB 노트북의 실질적인 차이는 무엇인가요?",
        "rows": [
          {
            "시나리오": "최대 모델 크기",
            "8 GB RAM": "3B–4B는 여유 있음, 7B–8B(파일 4.4–5.2 GB)는 빠듯함",
            "16 GB RAM": "8B–9B는 여유 있음, 14B(9.3 GB)는 짧은 컨텍스트에서 가능"
          },
          {
            "시나리오": "브라우저를 연 상태의 모델",
            "8 GB RAM": "3B–4B(빠듯함)",
            "16 GB RAM": "8B–9B도 여유 있음"
          },
          {
            "시나리오": "처음 쓰기 좋은 모델",
            "8 GB RAM": "llama3.2:3b 또는 phi4-mini",
            "16 GB RAM": "qwen3:8b 또는 llama3.1:8b"
          },
          {
            "시나리오": "동시에 실행하는 앱",
            "8 GB RAM": "8B 모델을 불러오기 전에 브라우저를 닫으십시오",
            "16 GB RAM": "8B 모델에서도 일반적인 멀티태스킹 가능"
          }
        ],
        "columns": [
          "시나리오",
          "8 GB RAM",
          "16 GB RAM"
        ]
      },
      "bestModels": {
        "id": "best-models",
        "title": "노트북에서 가장 잘 돌아가는 로컬 LLM 모델은 무엇인가요?",
        "content": "**노트북의 한계에는 파일이 작은 모델이 맞습니다. 같은 메모리 대역폭에서 파일이 작을수록 초당 토큰 수가 늘기 때문입니다.** 속도는 듀얼 채널 DDR4-3200~DDR5-5600(51.2–89.6 GB/s) 노트북을 기준으로, 대역폭 상한(대역폭 ÷ Ollama 파일 크기)에서 산출한 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다. 싱글 채널 RAM에서는 절반이 됩니다. 파일 크기는 2026-10-23에 확인한 Ollama 다운로드 크기입니다. 모델과 노트북 구성별 VRAM 요구량은 [VRAM 요구량 가이드 →](/ko/local-llms/how-much-vram-local-llm)를 참고하십시오. [Ollama](/ko/local-llms/how-to-install-ollama)를 설치하면 이 모델들을 명령어 하나로 실행할 수 있습니다. GPU가 없다면 **[CPU 전용 최고의 로컬 LLM 2026](/ko/local-llms/best-cpu-only-llm)**을 참고하십시오. 이 모델들은 open-weights 모델이므로 라이선스는 각 모델 카드에서 확인하십시오.",
        "rows": [
          {
            "모델": "[Llama 3.2 3B](https://ollama.com/library/llama3.2)",
            "파일(Ollama)": "2.0 GB",
            "최소 RAM": "2.5–3 GB",
            "추정 tok/s": "18–30",
            "추천 대상": "8 GB 노트북, 빠른 작업"
          },
          {
            "모델": "[Phi-4-mini 3.8B](https://ollama.com/library/phi4-mini)",
            "파일(Ollama)": "2.5 GB",
            "최소 RAM": "3 GB",
            "추정 tok/s": "15–25",
            "추천 대상": "8 GB 노트북, 추론과 코딩"
          },
          {
            "모델": "[Qwen3 8B](https://ollama.com/library/qwen3)",
            "파일(Ollama)": "5.2 GB",
            "최소 RAM": "6 GB",
            "추정 tok/s": "8–15",
            "추천 대상": "16 GB 노트북, 다국어, 코딩"
          },
          {
            "모델": "[Llama 3.1 8B](https://ollama.com/library/llama3.1)",
            "파일(Ollama)": "4.9 GB",
            "최소 RAM": "5.5 GB",
            "추정 tok/s": "8–14",
            "추천 대상": "16 GB 노트북, 일반 용도"
          },
          {
            "모델": "[Qwen3.5 9B](https://ollama.com/library/qwen3.5)",
            "파일(Ollama)": "6.6 GB",
            "최소 RAM": "7–8 GB",
            "추정 tok/s": "6–12",
            "추천 대상": "16 GB 노트북, 최신 모델군, 이미지 입력"
          }
        ],
        "columns": [
          "모델",
          "파일(Ollama)",
          "최소 RAM",
          "추정 tok/s",
          "추천 대상"
        ],
        "image": "/images/local-llm-on-laptop-model-picks-hero-ko.webp",
        "imageCaption": "노트북용 로컬 LLM 모델을 파일 크기순으로 정리, 듀얼 채널 RAM 기준 추정 tok/s"
      },
      "bestSetup": {
        "id": "best-setup",
        "title": "노트북에서는 어떤 로컬 LLM 구성으로 시작해야 하나요?",
        "content": [
          "노트북 하드웨어는 모델 크기를 제한하지만, 명확하고 구조화된 프롬프트는 작은 모델의 출력 품질을 높일 수 있습니다. 작은 모델에 맞는 기법은 [프롬프트 엔지니어링 가이드](/ko/prompt-engineering)를 참고하십시오."
        ],
        "items": [
          "🥇 **간단한 명령줄 시작:** [Ollama](/ko/local-llms/how-to-install-ollama) — 모델당 명령어 하나, 폭넓은 모델 지원",
          "🥈 **입문자에게 가장 쉬운 방법:** [LM Studio](/ko/local-llms/how-to-install-lm-studio) — GUI 제공, 터미널 불필요",
          "🥉 **낮은 RAM(8 GB):** Llama 3.2 3B (Q4_K_M)",
          "⚡ **16 GB에서 더 높은 품질:** Qwen3 8B (Q4_K_M, 속도에 여유가 있으면 Q5_K_M)",
          "💡 **잘 모르겠다면:** Ollama + Llama 3.2 3B Q4_K_M으로 시작하십시오"
        ]
      },
      "appleSilicon": {
        "id": "apple-vs-windows",
        "title": "Apple Silicon과 Windows 노트북 중 로컬 LLM에는 무엇이 더 나은가요?",
        "content": [
          "**Apple Silicon MacBook은 통합 메모리 덕분에 GPU가 전체 메모리 풀에 높은 대역폭으로 접근할 수 있어 로컬 LLM에 유력한 선택입니다.** 속도는 메모리 대역폭이 좌우합니다. Apple은 M3를 100 GB/s, M5를 153 GB/s, M5 Pro를 307 GB/s, M5 Max를 460 또는 614 GB/s(GPU 코어 수에 따라 다름)로 공개하고 있습니다. 2026년 3월 3일에 발표된 M5 Pro와 M5 Max MacBook Pro는 각각 최대 64 GB와 128 GB의 통합 메모리를 제공합니다.",
          "외장 NVIDIA GPU를 탑재한 Windows 노트북은 모델이 VRAM에 들어가면 더 빠를 수 있습니다. RTX 4060 노트북 GPU는 128비트 버스에 GDDR6 8 GB를 탑재하며(NVIDIA), 16 Gbps(제3자 사양)에서 약 256 GB/s이므로 Qwen3 8B(5.2 GB)의 상한은 약 49 tok/s입니다. 대신 전력 소비와 발열이 더 큽니다.",
          "Intel Iris Xe나 AMD Radeon 내장 그래픽만 있는 Windows 노트북은 시스템 RAM 대역폭에 제한됩니다. Ollama 문서에 따르면 Vulkan GPU 지원은 백엔드가 설치되어 있으면 기본으로 활성화되며, 지원 표에는 Intel 내장 그래픽이 나와 있지 않으므로 `ollama ps`의 PROCESSOR 열을 확인하십시오. iGPU는 같은 RAM을 공유하므로 개선 폭은 대체로 크지 않습니다.",
          "**내장 그래픽(Intel Iris Xe / AMD Radeon)에 가장 잘 맞는 모델:** RAM 16 GB라면 속도를 위해 Q4_K_M 3B–4B 모델(Llama 3.2 3B, 듀얼 채널 RAM에서 추정 18–30 tok/s)을, 품질을 위해 Qwen3 8B(추정 8–15 tok/s)를 고르십시오. RAM 안에 여유 있게 들어가는 모델을 우선하십시오. 저사양 환경의 단계별 설정은 [저사양 PC용 가장 빠른 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)을 참고하십시오.",
          "표 산출 방법: 각 추정치는 상한(대역폭 ÷ 5.2 GB인 Qwen3 8B 파일 크기)의 대략 70–90%입니다. PromptQuorum의 추정치이며 실험실 측정값이 아닙니다."
        ],
        "rows": [
          {
            "노트북 유형": "Apple M3, 16 GB",
            "메모리 대역폭": "100 GB/s",
            "Qwen3 8B 추정 tok/s": "13–17",
            "현실적 최대 모델": "~9B (14B는 빠듯함)"
          },
          {
            "노트북 유형": "Apple M5, 16 GB",
            "메모리 대역폭": "153 GB/s",
            "Qwen3 8B 추정 tok/s": "21–26",
            "현실적 최대 모델": "~9B (14B는 빠듯함)"
          },
          {
            "노트북 유형": "Apple M5 Pro",
            "메모리 대역폭": "307 GB/s",
            "Qwen3 8B 추정 tok/s": "41–53",
            "현실적 최대 모델": "메모리에 따라 제한(최대 64 GB)"
          },
          {
            "노트북 유형": "Apple M5 Max",
            "메모리 대역폭": "460–614 GB/s",
            "Qwen3 8B 추정 tok/s": "62–106",
            "현실적 최대 모델": "메모리에 따라 제한(최대 128 GB)"
          },
          {
            "노트북 유형": "RTX 4060 노트북 (VRAM 8 GB)",
            "메모리 대역폭": "~256 GB/s",
            "Qwen3 8B 추정 tok/s": "34–44",
            "현실적 최대 모델": "VRAM 내 ~8B"
          },
          {
            "노트북 유형": "듀얼 채널 DDR5-5600 노트북",
            "메모리 대역폭": "89.6 GB/s",
            "Qwen3 8B 추정 tok/s": "12–15",
            "현실적 최대 모델": "~9B (RAM 16 GB)"
          },
          {
            "노트북 유형": "싱글 채널 DDR4-3200 노트북",
            "메모리 대역폭": "25.6 GB/s",
            "Qwen3 8B 추정 tok/s": "3–4",
            "현실적 최대 모델": "3B–4B 권장"
          }
        ],
        "columns": [
          "노트북 유형",
          "메모리 대역폭",
          "Qwen3 8B 추정 tok/s",
          "현실적 최대 모델"
        ]
      },
      "laptopVsDesktop": {
        "id": "laptop-vs-desktop",
        "title": "로컬 LLM에는 데스크톱 대신 노트북으로도 충분한가요?",
        "content": [
          "**노트북은 3B–14B 모델을 효과적으로 실행하지만, 데스크톱은 더 나은 냉각과 훨씬 높은 메모리 대역폭의 전용 GPU 덕분에 더 멀리 갈 수 있습니다.** 데스크톱 RTX 4090은 VRAM 24 GB와 1,008 GB/s의 대역폭(NVIDIA)을 갖추고 있어 Gemma 4 31B(Ollama에서 19–20 GB)처럼 약 20 GB까지의 모델 파일을 VRAM에 올릴 수 있습니다. Q4 70B 모델은 Ollama에서 파일 크기가 43 GB(llama3.3:70b)로 24 GB에 들어가지 않으며, 훨씬 느린 시스템 RAM으로 나누어 올려야 합니다.",
          "휴대성과 실험에는 노트북을 쓰십시오. 큰 모델(14B 이상), 지속적인 워크로드, 프로덕션 추론에는 데스크톱을 쓰십시오. 플랫폼을 고르는 중이라면 비용과 성능을 자세히 비교한 [로컬 LLM용 노트북 대 데스크톱 구매 가이드](/ko/local-llms/laptop-vs-desktop-local-llm)를 참고하십시오."
        ]
      },
      "thermals": {
        "id": "thermals",
        "title": "노트북의 열 쓰로틀링은 어떻게 다루나요?",
        "content": [
          "**열 쓰로틀링은 CPU나 GPU가 온도 한계에 도달해 식히기 위해 클럭을 낮추는 현상입니다.** 로컬 추론은 지속적인 부하이므로 얇은 노트북은 시간이 지나면 느려질 수 있으며, 그 정도와 시점은 냉각 설계에 따라 다릅니다. `ollama run <model> --verbose`로 10분 동안의 속도를 직접 확인해 보십시오."
        ],
        "items": [
          "**통풍 공간이 있는 노트북 거치대를 사용하십시오** — 노트북을 들어 올리면 배기 공기 흐름이 좋아져 쓰로틀링을 늦출 수 있습니다.",
          "**낮은 전원 모드를 사용해 보십시오** — 토큰 생성은 클럭 속도보다 메모리 대역폭에 좌우되므로, 균형 또는 절전 전원 계획(macOS에서는 저전력 모드)은 발열을 줄이면서 속도 손실은 예상보다 작을 수 있습니다. 내 기기에서 직접 시험해 보십시오.",
          "**생성 길이와 컨텍스트를 제한하십시오** — 긴 작업은 더 짧은 프롬프트로 나누고, 매우 긴 응답을 다시 생성하는 일은 피하십시오.",
          "**Q8_0 대신 Q4_K_M을 사용하십시오** — 파일이 약 1.7배 작아(Llama 3.1 8B 기준 4.58 GiB 대 7.95 GiB) 토큰마다 메모리에서 읽는 데이터가 줄고 칩에 부하가 걸리는 시간도 짧아집니다."
        ]
      },
      "battery": {
        "id": "battery-drain",
        "title": "로컬 LLM을 실행하면 배터리를 얼마나 쓰나요?",
        "content": [
          "**로컬 추론 중 배터리 소모는 상당합니다. 생성하는 내내 CPU나 GPU가 높은 부하로 동작하기 때문입니다.** 동작 시간(시간)은 대략 배터리 용량(Wh)을 평균 소비 전력(W)으로 나눈 값입니다. 60 Wh 배터리는 20 W에서 약 3시간, 30 W에서 약 2시간 지속됩니다. 이는 설명을 위한 계산 예시이며 측정값이 아닙니다. 실제 소비 전력은 노트북, 모델, 전원 모드에 따라 다릅니다.",
          "공식 배터리 사용 시간은 추론 상황을 설명하지 않습니다. M5가 탑재된 14인치 MacBook Pro(배터리 72.4 Wh)에 대해 Apple이 밝힌 무선 웹 브라우징 최대 16시간은 가벼운 사용 기준이며, 지속적인 생성 기준이 아닙니다.",
          "장시간 사용할 때는 전원을 연결하십시오. 배터리를 아끼려면 더 작은 모델(3B 파일은 8B 파일의 절반보다 작으므로 응답이 더 빨리 끝납니다)을 고르고 컨텍스트를 줄이십시오."
        ]
      },
      "quantization": {
        "id": "quantization-tips",
        "title": "노트북에서는 어떤 양자화 수준을 써야 하나요?",
        "content": "[양자화](/ko/local-llms/llm-quantization-explained)는 모델 정밀도를 낮춰 RAM과 대역폭 요구량을 줄입니다. 노트북에서는 Q4_K_M이 일반적인 기본값입니다. 아래 크기는 llama.cpp quantize README의 Llama 3.1 8B 기준(FP16에서 14.96 GiB)이며, 다른 모델도 비슷한 비율로 달라집니다.",
        "rows": [
          {
            "양자화": "Q2_K",
            "FP16 대비 크기": "~20% (2.95 GiB)",
            "품질 손실": "높음 — 눈에 띄는 품질 저하",
            "사용 사례": "다른 방법이 모두 맞지 않을 때만"
          },
          {
            "양자화": "Q3_K_S",
            "FP16 대비 크기": "~23% (3.41 GiB)",
            "품질 손실": "중간",
            "사용 사례": "더 큰 모델을 RAM에 맞춰 넣을 때"
          },
          {
            "양자화": "Q4_K_M",
            "FP16 대비 크기": "~31% (4.58 GiB)",
            "품질 손실": "낮음 — 일반적인 기본값",
            "사용 사례": "대부분의 노트북, 균형이 좋음"
          },
          {
            "양자화": "Q5_K_M",
            "FP16 대비 크기": "~36% (5.33 GiB)",
            "품질 손실": "작음",
            "사용 사례": "속도에 여유가 있는 16 GB 노트북"
          },
          {
            "양자화": "Q8_0",
            "FP16 대비 크기": "~53% (7.95 GiB)",
            "품질 손실": "매우 작음",
            "사용 사례": "RAM에 여유가 있고 속도가 중요하지 않을 때"
          }
        ],
        "columns": [
          "양자화",
          "FP16 대비 크기",
          "품질 손실",
          "사용 사례"
        ]
      },
      "regionalContext": {
        "id": "regional-context",
        "title": "노트북에서 로컬 LLM을 실행할 때 어떤 개인정보 보호법이 적용되나요?",
        "content": [
          "**유럽연합(GDPR):** 모델이 내 노트북에서 실행되면 프롬프트와 문서가 기기 밖으로 나가지 않아도 되므로, 개인정보를 제3자 처리자에게 보내는 일을 피할 수 있습니다. GDPR, EU AI Act 등의 의무가 적용되는지는 시스템을 누가 어떤 목적으로 운영하는지에 따라 달라집니다. 이 가이드는 법률 자문이 아니며, 규정 준수는 추론이 실행되는 위치가 아니라 전체 구성에 달려 있습니다.",
          "**독일:** 독일 기업의 경우 문서를 기기 안에 두면 데이터 보호 문제가 단순해질 수 있지만, 로컬 구성이 의무(예: 기밀 고객 데이터)를 충족하는지는 사안별로 판단됩니다. 데이터 보호 책임자와 상의하십시오.",
          "**일본(APPI):** 일본의 개인정보보호법(Act on the Protection of Personal Information)은 개인 데이터의 해외 이전을 규율합니다. 노트북에서 추론을 실행하면 프롬프트를 해외 API로 보내지 않아도 되므로 이전 문제가 단순해질 수 있지만, 법적 검토를 대신하지는 않습니다.",
          "**미국:** 단일 연방 AI 데이터 법은 없으며, 용도에 따라 HIPAA(의료), FERPA(교육) 같은 분야별 규정과 주별 개인정보 보호법이 적용됩니다. 데이터를 로컬 기기에 두면 데이터를 다루는 제3자의 수를 줄일 수 있지만, 기기와 데이터를 안전하게 보호할 책임은 여전히 사용자에게 있습니다."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "노트북에서 로컬 LLM을 실행할 때 자주 묻는 질문",
        "faqs": [
          {
            "q": "RAM 16 GB의 Intel Iris Xe 노트북에 가장 좋은 Ollama 모델은 무엇인가요?",
            "a": "Intel Iris Xe 그래픽과 RAM 16 GB를 갖춘 노트북에서는 시스템 RAM 대역폭이 속도를 제한합니다. Ollama가 iGPU를 사용하는지는 드라이버와 백엔드 지원에 달려 있으며(`ollama ps`의 PROCESSOR 열 확인), iGPU는 같은 RAM을 공유하므로 개선 폭은 대체로 크지 않습니다. 속도를 위해서는 Q4_K_M 3B–4B 모델을 고르십시오. `ollama run llama3.2:3b`로 Llama 3.2 3B(듀얼 채널 RAM에서 추정 18–30 tok/s)를, 더 높은 품질을 원하면 `ollama run qwen3:8b`로 Qwen3 8B(추정 8–15 tok/s)를 실행합니다. 속도는 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다."
          },
          {
            "q": "노트북에서 RAG를 로컬로 실행할 수 있나요?",
            "a": "네. 노트북 RAG 구성은 작은 임베딩 모델, 로컬 벡터 저장소, 채팅 모델로 이루어집니다. 임베딩 모델은 작아서(nomic-embed-text는 Ollama에서 274 MB) RAM의 실제 제약은 계속 채팅 모델입니다. 8 GB 노트북은 3B 채팅 모델과 검색을 함께 실행하고, 16 GB에서는 8B 모델을 올릴 여유가 있습니다. RAM 구성은 위의 [노트북에서의 RAG 섹션](#rag-laptop)을 참고하십시오."
          },
          {
            "q": "노트북에 가장 좋은 CPU 전용 로컬 LLM은 무엇인가요?",
            "a": "CPU 전용 가이드에서 비교한 모델 중에서는 Phi-4 Mini(3.8B, 파일 2.5 GB)가 듀얼 채널 RAM에서 추정 15–25 tok/s로 가장 균형 잡힌 선택이고, Llama 3.2 3B(파일 2.0 GB)는 추정 18–30 tok/s로 파일이 가장 작습니다. 둘 다 Q4_K_M 기준입니다. 전체 비교와 Ollama 명령어는 [CPU 전용 최고의 로컬 LLM 2026](/ko/local-llms/best-cpu-only-llm)을 참고하십시오."
          },
          {
            "q": "로컬 LLM을 실행하면 시간이 지나면서 노트북이 손상되나요?",
            "a": "정상적인 노트북에서는 즉각적인 손상이 예상되지 않습니다. 칩은 뜨거워지면 클럭을 낮추므로 지속적인 추론은 기기를 손상시키기보다 느리게 만듭니다. 다만 지속적인 열은 시간이 지나면서 팬과 배터리를 마모시키므로, 거치대나 쿨링 패드를 쓰고 통풍구를 막지 말며 중간에 쉬어 주십시오. 발열과 배터리 관리는 제조사의 안내를 따르십시오."
          },
          {
            "q": "RAM 4 GB 노트북에서 로컬 LLM을 실행할 수 있나요?",
            "a": "겨우 가능합니다. Qwen3 1.7B(파일 1.4 GB)나 Llama 3.2 1B(파일 1.3 GB) 같은 작은 모델은 들어가지만, 운영체제가 2–3 GB를 쓰기 때문에 전체 4 GB에서는 스왑이 발생할 가능성이 높고 생성 속도가 크게 떨어집니다. 쾌적하게 쓰려면 현실적인 최소 사양은 8 GB입니다. [저사양 PC용 가장 빠른 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)을 참고하십시오."
          },
          {
            "q": "로컬 LLM을 실행하려면 노트북에 전용 GPU가 필요한가요?",
            "a": "아니요. Ollama, LM Studio, GPT4All은 CPU만으로도 실행됩니다. 메모리 대역폭이 높은 GPU는 생성 속도를 높여 주지만, 3B–4B 모델은 듀얼 채널 RAM의 CPU에서 추정 15–30 tok/s로 충분히 쓸 수 있습니다. CPU에 적합한 모델 추천은 [입문자를 위한 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models)을 참고하십시오."
          },
          {
            "q": "RAM 8 GB MacBook에서 실행할 수 있는 가장 빠른 로컬 LLM은 무엇인가요?",
            "a": "이 가이드의 모델 중에서는 Q4_K_M Llama 3.2 3B(파일 2.0 GB)가 8 GB MacBook에서 가장 빠른 현실적인 선택입니다. M2나 M3(Apple 공개 기준 둘 다 100 GB/s)에서 대역폭 상한은 약 50 tok/s이고 PromptQuorum의 추정치는 35–45 tok/s입니다. 8B 파일(5.2 GB)은 macOS와 다른 앱도 메모리를 쓰기 때문에 8 GB에서는 빠듯합니다."
          },
          {
            "q": "LLM 추론 중 노트북의 열 쓰로틀링을 어떻게 줄일 수 있나요?",
            "a": "네 가지 방법이 있습니다. (1) 통풍 공간이 있는 거치대에 노트북을 올립니다. (2) 생성은 클럭 속도보다 메모리 대역폭에 좌우되므로 균형 또는 절전 전원 모드를 시도합니다. (3) 생성 길이와 컨텍스트를 제한합니다. (4) 토큰마다 읽는 데이터가 줄도록 Q8_0 대신 Q4_K_M을 사용합니다. `ollama run <model> --verbose`로 10분 동안의 속도를 확인하십시오."
          },
          {
            "q": "Chromebook에서 로컬 LLM을 실행할 수 있나요?",
            "a": "Linux(Crostini)를 사용할 수 있는 Chromebook에서, 그것도 작은 모델만 가능합니다. 대부분의 Chromebook은 RAM이 4–8 GB이고 메모리 대역폭도 낮아 Q4_K_M 1B–3B 모델이 현실적인 상한이며 속도도 낮습니다. Linux를 지원하지 않는 Chromebook에서는 Ollama를 실행할 수 없습니다."
          },
          {
            "q": "로컬 LLM에는 Apple Silicon이 NVIDIA 노트북 GPU보다 나은가요?",
            "a": "메모리에 따라 다릅니다. 속도는 메모리 대역폭과 용량을 따릅니다. M5가 탑재된 16 GB MacBook(153 GB/s)은 Qwen3 8B 상한이 약 29 tok/s이고, RTX 4060 노트북 GPU(약 256 GB/s, VRAM 8 GB)는 상한이 약 49 tok/s이지만 8 GB에 들어가는 모델만 올릴 수 있습니다. 메모리가 더 큰 M5 Pro(307 GB/s)나 M5 Max(460–614 GB/s)는 더 큰 모델을 빠른 메모리에 올릴 수 있습니다. 소비 전력은 모델마다 다르므로 내 노트북에서 확인하십시오."
          },
          {
            "q": "모델이 노트북 RAM에 비해 너무 크면 어떻게 되나요?",
            "a": "운영체제가 디스크로 스왑을 시작하거나 모델 로드에 실패하며, 팬이 세게 돌면서 생성 속도가 극도로 느려질 수 있습니다. 해결책은 더 작은 모델, 더 낮은 양자화 수준(Q8_0 대신 Q4_K_M), 또는 더 짧은 컨텍스트(`OLLAMA_CONTEXT_LENGTH`, 기본값 4096)입니다."
          },
          {
            "q": "노트북에서 로컬 LLM을 실행하면 배터리는 얼마나 지속되나요?",
            "a": "동작 시간은 대략 배터리 용량(Wh)을 평균 소비 전력(W)으로 나눈 값입니다. 60 Wh 배터리는 20 W에서 약 3시간, 30 W에서 약 2시간 지속됩니다(설명을 위한 계산 예시이며 측정값이 아닙니다). 실제 소비 전력은 노트북, 모델, 전원 모드에 따라 다릅니다. 하루 종일 쓰려면 전원을 연결하십시오."
          },
          {
            "q": "노트북에서 로컬 LLM을 실행하려면 인터넷 연결이 필요한가요?",
            "a": "아니요. 모델을 내려받을 때(인터넷 필요)를 제외하면 추론은 완전히 오프라인으로 동작합니다. 모델은 전적으로 노트북의 CPU나 GPU에서 실행됩니다. 그래서 출장, 보안이 중요한 환경, 연결이 불안정한 곳에서도 로컬 LLM을 쓸 수 있습니다."
          },
          {
            "q": "RAM 8 GB에서 로컬 LLM을 실행할 수 있나요?",
            "a": "네. RAM 8 GB 노트북은 Q4_K_M 3B–4B 모델(파일 2.0–2.5 GB)을 듀얼 채널 RAM에서 추정 15–30 tok/s로, Apple M2나 M3에서는 추정 28–45 tok/s로 실행합니다. 7B–8B 모델(파일 4.4–5.2 GB)은 8 GB에서 빠듯합니다."
          },
          {
            "q": "로컬 LLM에 가장 빠른 노트북은 무엇인가요?",
            "a": "로컬 LLM에서 핵심 사양은 메모리 대역폭과 충분한 메모리입니다. Apple은 M5 Pro를 307 GB/s(최대 64 GB), M5 Max를 460 또는 614 GB/s(최대 128 GB)로 공개하고 있으며, Qwen3 8B에 대한 PromptQuorum 추정치는 M5 Pro에서 41–53 tok/s, M5 Max에서 62–106 tok/s입니다. Windows에서는 모델을 VRAM에 올릴 수 있는 NVIDIA GPU 탑재 노트북의 상한이 높으며, 예를 들어 VRAM 8 GB의 RTX 4060 노트북 GPU는 약 256 GB/s입니다."
          },
          {
            "q": "CPU에서 로컬 LLM은 얼마나 느린가요?",
            "a": "속도는 최대 메모리 대역폭 ÷ 모델 파일 크기입니다. 듀얼 채널 DDR4/DDR5에서 Q4_K_M 3B–4B 모델은 추정 15–30 tok/s, Qwen3 8B는 추정 8–15 tok/s이며, 싱글 채널 RAM에서는 절반이 됩니다. 읽으면서 따라가기에는 느리지만 채팅과 요약에는 충분히 빠릅니다. Apple Silicon은 통합 메모리의 대역폭이 더 넓어 Qwen3 8B에서 추정 13–26 tok/s(M3~M5)에 이릅니다."
          }
        ]
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "**Apple MacBook Pro 기술 사양** — M5(153 GB/s), M5 Pro(307 GB/s), M5 Max(460 및 614 GB/s)의 메모리 대역폭과 공식 배터리 사용 시간. [apple.com/macbook-pro/specs](https://www.apple.com/macbook-pro/specs/)",
          "**Apple MacBook Air(15인치, M3, 2024) 기술 사양** — M3 메모리 대역폭 100 GB/s. [support.apple.com](https://support.apple.com/en-gb/118552)",
          "**Apple Newsroom: M2** — 통합 메모리 대역폭 100 GB/s. [apple.com/newsroom](https://www.apple.com/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/)",
          "**Apple Newsroom: M5 Pro와 M5 Max를 탑재한 MacBook Pro(2026년 3월 3일)** — 최대 64 GB 및 128 GB 통합 메모리. [apple.com/newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)",
          "**NVIDIA GeForce 노트북 비교** — RTX 4060 노트북 GPU: GDDR6 8 GB, 128비트 버스. [nvidia.com](https://www.nvidia.com/en-us/geforce/laptops/compare/)",
          "**Notebookcheck: RTX 4060 Laptop GPU** — 메모리 속도 16 Gbps(제3자 자료, 약 256 GB/s 수치의 근거). [notebookcheck.net](https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4060-Laptop-GPU-Benchmarks-and-Specs.675692.0.html)",
          "**NVIDIA GeForce RTX 4090 사양** — VRAM 24 GB, 1,008 GB/s. [nvidia.com](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)",
          "**Ollama 라이브러리** — 파일 크기 2026-10-23 확인: [llama3.2](https://ollama.com/library/llama3.2), [phi4-mini](https://ollama.com/library/phi4-mini), [qwen3](https://ollama.com/library/qwen3), [qwen3.5](https://ollama.com/library/qwen3.5), [llama3.1](https://ollama.com/library/llama3.1), [llama3.3](https://ollama.com/library/llama3.3), [gemma4](https://ollama.com/library/gemma4).",
          "**Ollama FAQ** — 기본 컨텍스트 길이 4096, OLLAMA_CONTEXT_LENGTH, KV 캐시 유형, keep-alive, `ollama ps`. [docs.ollama.com/faq](https://docs.ollama.com/faq)",
          "**Ollama GPU 문서** — Apple Silicon의 Metal, Vulkan, 지원 GPU. [docs.ollama.com/gpu](https://docs.ollama.com/gpu)",
          "**llama.cpp quantize README** — Llama 3.1 8B의 양자화 유형별 파일 크기. [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)",
          "**Apple MLX Framework** — Apple Silicon Mac의 GPU 가속. [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx)",
          "**LM Studio** — 시스템 요구 사항, GPU 호환성, 로컬 추론 설정. [lmstudio.ai](https://lmstudio.ai)"
        ]
      },
      "commonMistakes": {
        "id": "common-mistakes",
        "title": "노트북에서 로컬 LLM을 실행할 때 흔한 실수는 무엇인가요?",
        "items": [
          "**사용 가능한 RAM보다 큰 모델 실행** → 시스템이 디스크로 스왑하면서 생성 속도가 크게 떨어집니다. 더 작은 모델이나 더 낮은 양자화를 고르십시오.",
          "**열 쓰로틀링 무시** → 칩이 온도 한계에 도달하면 지속 속도가 떨어질 수 있습니다. `ollama run <model> --verbose`로 10분 후의 속도를 확인하십시오.",
          "**Q4_K_M 대신 Q8_0 사용** → 파일이 약 1.7배 커서(Llama 3.1 8B 기준 7.95 GiB 대 4.58 GiB) RAM이 더 필요하고, 대역폭이 제한된 노트북에서는 생성이 더 느려지는 데 비해 품질 향상은 작습니다.",
          "**RAM 모듈 하나로 실행** → 싱글 채널 메모리는 최대 대역폭과 속도 상한을 절반으로 줄입니다. 노트북이 허용하면 동일한 모듈 두 개를 사용하십시오.",
          "**LM Studio에서 GPU 오프로드 끄기** → 모델이 GPU 대신 CPU에서 실행됩니다. 모델이 GPU 메모리에 들어간다면 GPU 오프로드 설정을 높이십시오.",
          "**기본 컨텍스트 창 유지** → Ollama의 기본값은 4096 토큰이라 여러 페이지짜리 문서는 잘립니다. `OLLAMA_CONTEXT_LENGTH=8192` 또는 `/set parameter num_ctx 8192`로 늘릴 수 있으며, 그만큼 메모리를 더 씁니다."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[입문자를 위한 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models) — 노트북에 최적화된 소형 모델",
          "[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 설치 가이드",
          "[LM Studio 설치 방법](/ko/local-llms/how-to-install-lm-studio) — GUI 기반 설치 프로그램",
          "[로컬 LLM 설정 문제 해결](/ko/local-llms/troubleshooting-local-llm-setup) — 성능 및 오류 해결",
          "[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) — Q4_K_M, Q8_0, Q5_K_M 심층 비교",
          "[4 GB 미만의 소형 로컬 LLM 모델](/ko/local-llms/small-local-llm-models) — 8 GB 노트북용 3B 모델",
          "[로컬 LLM용 노트북 대 데스크톱 2026](/ko/local-llms/laptop-vs-desktop-local-llm) — 구매 가이드: 성능 비교, 비용 분석, 어떤 플랫폼을 살지.",
          "[Mac에서 MLX, Ollama, llama.cpp 비교 2026](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Apple Silicon용 프레임워크 비교: 속도, 설정 시간, 생태계 장단점.",
          "[70B 모델을 로컬에서 실행하는 가장 저렴한 방법](/ko/prompt-bites/cheapest-way-to-run-70b-model-locally) — 노트북이 70B를 감당할 수 있는 경우: M3 Max의 Q3_K_S 대 CPU 오프로딩.",
          "[500달러 이하 LLM 추론용 최고의 GPU (2026)](/ko/local-llms/best-gpu-for-llm-inference-under-500-2026) — MacBook과 Windows 노트북을 위한 eGPU 업그레이드 경로.",
          "[CPU 전용 최고의 로컬 LLM 2026](/ko/local-llms/best-cpu-only-llm) — GPU가 없는 기기를 위한 모델 파일 크기별 추정 tok/s.",
          "[저사양 PC용 가장 빠른 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs) — RAM 4–16 GB, CPU 전용 또는 iGPU용 추천."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "노트북에서 로컬 LLM 실행하기: 8GB, 16GB, Apple Silicon에서 되는 것 (2026)",
      "description": "RAM 8 GB 또는 16 GB 노트북과 Apple Silicon에서 로컬 LLM을 실행하는 방법. 모델 추천(Llama 3.2 3B, Phi-4-mini, Qwen3 8B), 메모리 대역폭 기반 속도 추정, 발열, 배터리, Q4_K_M 양자화를 다룹니다.",
      "url": "https://www.promptquorum.com/ko/local-llms/local-llm-on-laptop",
      "datePublished": "2026-04-04",
      "dateModified": "2026-10-23",
      "author": {
        "@type": "Organization",
        "name": "PromptQuorum"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "proficiencyLevel": "Beginner",
      "about": [
        {
          "@type": "Thing",
          "name": "노트북 로컬 LLM"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Q4_K_M 양자화"
        },
        {
          "@type": "Thing",
          "name": "Apple Silicon"
        },
        {
          "@type": "Thing",
          "name": "열 쓰로틀링"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".article-intro",
          ".key-takeaways",
          "h2"
        ]
      },
      "inLanguage": "ko"
    },
    "itemListSchema": {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "노트북용 최고의 로컬 LLM 모델 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Llama 3.2 3B",
          "description": "3B 모델, Ollama 파일 2.0 GB. 듀얼 채널 RAM에서 추정 18–30 tok/s(PromptQuorum 추정). 여기서 파일이 가장 작아 8 GB 노트북에 적합합니다."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phi-4-mini 3.8B",
          "description": "3.8B 모델, Ollama 파일 2.5 GB. 듀얼 채널 RAM에서 추정 15–25 tok/s(PromptQuorum 추정). 8 GB 노트북에서의 추론과 코딩에 적합합니다."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Qwen3 8B",
          "description": "8B 모델, Ollama 파일 5.2 GB. 듀얼 채널 RAM에서 추정 8–15 tok/s(PromptQuorum 추정). 16 GB 노트북에서의 다국어와 코딩에 적합합니다."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Llama 3.1 8B",
          "description": "8B 모델, Ollama 파일 4.9 GB. 듀얼 채널 RAM에서 추정 8–14 tok/s(PromptQuorum 추정). 16 GB 노트북에서의 일반 용도에 적합합니다."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Qwen3.5 9B",
          "description": "9B 모델, Ollama 파일 6.6 GB. 듀얼 채널 RAM에서 추정 6–12 tok/s(PromptQuorum 추정). 이미지 입력을 지원하는 최신 모델군으로, 16 GB 노트북에 적합합니다."
        }
      ]
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "RAM 16 GB의 Intel Iris Xe 노트북에 가장 좋은 Ollama 모델은 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intel Iris Xe 그래픽과 RAM 16 GB를 갖춘 노트북에서는 시스템 RAM 대역폭이 속도를 제한합니다. Ollama가 iGPU를 사용하는지는 드라이버와 백엔드 지원에 달려 있으며(`ollama ps`의 PROCESSOR 열 확인), iGPU는 같은 RAM을 공유하므로 개선 폭은 대체로 크지 않습니다. 속도를 위해서는 Q4_K_M 3B–4B 모델을 고르십시오. `ollama run llama3.2:3b`로 Llama 3.2 3B(듀얼 채널 RAM에서 추정 18–30 tok/s)를, 더 높은 품질을 원하면 `ollama run qwen3:8b`로 Qwen3 8B(추정 8–15 tok/s)를 실행합니다. 속도는 PromptQuorum의 추정치이며 실험실 측정값이 아닙니다."
          }
        },
        {
          "@type": "Question",
          "name": "노트북에서 RAG를 로컬로 실행할 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. 노트북 RAG 구성은 작은 임베딩 모델, 로컬 벡터 저장소, 채팅 모델로 이루어집니다. 임베딩 모델은 작아서(nomic-embed-text는 Ollama에서 274 MB) RAM의 실제 제약은 계속 채팅 모델입니다. 8 GB 노트북은 3B 채팅 모델과 검색을 함께 실행하고, 16 GB에서는 8B 모델을 올릴 여유가 있습니다. RAM 구성은 위의 [노트북에서의 RAG 섹션](#rag-laptop)을 참고하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "노트북에 가장 좋은 CPU 전용 로컬 LLM은 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CPU 전용 가이드에서 비교한 모델 중에서는 Phi-4 Mini(3.8B, 파일 2.5 GB)가 듀얼 채널 RAM에서 추정 15–25 tok/s로 가장 균형 잡힌 선택이고, Llama 3.2 3B(파일 2.0 GB)는 추정 18–30 tok/s로 파일이 가장 작습니다. 둘 다 Q4_K_M 기준입니다. 전체 비교와 Ollama 명령어는 [CPU 전용 최고의 로컬 LLM 2026](/ko/local-llms/best-cpu-only-llm)을 참고하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "로컬 LLM을 실행하면 시간이 지나면서 노트북이 손상되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "정상적인 노트북에서는 즉각적인 손상이 예상되지 않습니다. 칩은 뜨거워지면 클럭을 낮추므로 지속적인 추론은 기기를 손상시키기보다 느리게 만듭니다. 다만 지속적인 열은 시간이 지나면서 팬과 배터리를 마모시키므로, 거치대나 쿨링 패드를 쓰고 통풍구를 막지 말며 중간에 쉬어 주십시오. 발열과 배터리 관리는 제조사의 안내를 따르십시오."
          }
        },
        {
          "@type": "Question",
          "name": "RAM 4 GB 노트북에서 로컬 LLM을 실행할 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "겨우 가능합니다. Qwen3 1.7B(파일 1.4 GB)나 Llama 3.2 1B(파일 1.3 GB) 같은 작은 모델은 들어가지만, 운영체제가 2–3 GB를 쓰기 때문에 전체 4 GB에서는 스왑이 발생할 가능성이 높고 생성 속도가 크게 떨어집니다. 쾌적하게 쓰려면 현실적인 최소 사양은 8 GB입니다. [저사양 PC용 가장 빠른 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)을 참고하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "로컬 LLM을 실행하려면 노트북에 전용 GPU가 필요한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "아니요. Ollama, LM Studio, GPT4All은 CPU만으로도 실행됩니다. 메모리 대역폭이 높은 GPU는 생성 속도를 높여 주지만, 3B–4B 모델은 듀얼 채널 RAM의 CPU에서 추정 15–30 tok/s로 충분히 쓸 수 있습니다. CPU에 적합한 모델 추천은 [입문자를 위한 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models)을 참고하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "RAM 8 GB MacBook에서 실행할 수 있는 가장 빠른 로컬 LLM은 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "이 가이드의 모델 중에서는 Q4_K_M Llama 3.2 3B(파일 2.0 GB)가 8 GB MacBook에서 가장 빠른 현실적인 선택입니다. M2나 M3(Apple 공개 기준 둘 다 100 GB/s)에서 대역폭 상한은 약 50 tok/s이고 PromptQuorum의 추정치는 35–45 tok/s입니다. 8B 파일(5.2 GB)은 macOS와 다른 앱도 메모리를 쓰기 때문에 8 GB에서는 빠듯합니다."
          }
        },
        {
          "@type": "Question",
          "name": "LLM 추론 중 노트북의 열 쓰로틀링을 어떻게 줄일 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네 가지 방법이 있습니다. (1) 통풍 공간이 있는 거치대에 노트북을 올립니다. (2) 생성은 클럭 속도보다 메모리 대역폭에 좌우되므로 균형 또는 절전 전원 모드를 시도합니다. (3) 생성 길이와 컨텍스트를 제한합니다. (4) 토큰마다 읽는 데이터가 줄도록 Q8_0 대신 Q4_K_M을 사용합니다. `ollama run <model> --verbose`로 10분 동안의 속도를 확인하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "Chromebook에서 로컬 LLM을 실행할 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linux(Crostini)를 사용할 수 있는 Chromebook에서, 그것도 작은 모델만 가능합니다. 대부분의 Chromebook은 RAM이 4–8 GB이고 메모리 대역폭도 낮아 Q4_K_M 1B–3B 모델이 현실적인 상한이며 속도도 낮습니다. Linux를 지원하지 않는 Chromebook에서는 Ollama를 실행할 수 없습니다."
          }
        },
        {
          "@type": "Question",
          "name": "로컬 LLM에는 Apple Silicon이 NVIDIA 노트북 GPU보다 나은가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "메모리에 따라 다릅니다. 속도는 메모리 대역폭과 용량을 따릅니다. M5가 탑재된 16 GB MacBook(153 GB/s)은 Qwen3 8B 상한이 약 29 tok/s이고, RTX 4060 노트북 GPU(약 256 GB/s, VRAM 8 GB)는 상한이 약 49 tok/s이지만 8 GB에 들어가는 모델만 올릴 수 있습니다. 메모리가 더 큰 M5 Pro(307 GB/s)나 M5 Max(460–614 GB/s)는 더 큰 모델을 빠른 메모리에 올릴 수 있습니다. 소비 전력은 모델마다 다르므로 내 노트북에서 확인하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "모델이 노트북 RAM에 비해 너무 크면 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "운영체제가 디스크로 스왑을 시작하거나 모델 로드에 실패하며, 팬이 세게 돌면서 생성 속도가 극도로 느려질 수 있습니다. 해결책은 더 작은 모델, 더 낮은 양자화 수준(Q8_0 대신 Q4_K_M), 또는 더 짧은 컨텍스트(`OLLAMA_CONTEXT_LENGTH`, 기본값 4096)입니다."
          }
        },
        {
          "@type": "Question",
          "name": "노트북에서 로컬 LLM을 실행하면 배터리는 얼마나 지속되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "동작 시간은 대략 배터리 용량(Wh)을 평균 소비 전력(W)으로 나눈 값입니다. 60 Wh 배터리는 20 W에서 약 3시간, 30 W에서 약 2시간 지속됩니다(설명을 위한 계산 예시이며 측정값이 아닙니다). 실제 소비 전력은 노트북, 모델, 전원 모드에 따라 다릅니다. 하루 종일 쓰려면 전원을 연결하십시오."
          }
        },
        {
          "@type": "Question",
          "name": "노트북에서 로컬 LLM을 실행하려면 인터넷 연결이 필요한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "아니요. 모델을 내려받을 때(인터넷 필요)를 제외하면 추론은 완전히 오프라인으로 동작합니다. 모델은 전적으로 노트북의 CPU나 GPU에서 실행됩니다. 그래서 출장, 보안이 중요한 환경, 연결이 불안정한 곳에서도 로컬 LLM을 쓸 수 있습니다."
          }
        },
        {
          "@type": "Question",
          "name": "RAM 8 GB에서 로컬 LLM을 실행할 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. RAM 8 GB 노트북은 Q4_K_M 3B–4B 모델(파일 2.0–2.5 GB)을 듀얼 채널 RAM에서 추정 15–30 tok/s로, Apple M2나 M3에서는 추정 28–45 tok/s로 실행합니다. 7B–8B 모델(파일 4.4–5.2 GB)은 8 GB에서 빠듯합니다."
          }
        },
        {
          "@type": "Question",
          "name": "로컬 LLM에 가장 빠른 노트북은 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "로컬 LLM에서 핵심 사양은 메모리 대역폭과 충분한 메모리입니다. Apple은 M5 Pro를 307 GB/s(최대 64 GB), M5 Max를 460 또는 614 GB/s(최대 128 GB)로 공개하고 있으며, Qwen3 8B에 대한 PromptQuorum 추정치는 M5 Pro에서 41–53 tok/s, M5 Max에서 62–106 tok/s입니다. Windows에서는 모델을 VRAM에 올릴 수 있는 NVIDIA GPU 탑재 노트북의 상한이 높으며, 예를 들어 VRAM 8 GB의 RTX 4060 노트북 GPU는 약 256 GB/s입니다."
          }
        },
        {
          "@type": "Question",
          "name": "CPU에서 로컬 LLM은 얼마나 느린가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "속도는 최대 메모리 대역폭 ÷ 모델 파일 크기입니다. 듀얼 채널 DDR4/DDR5에서 Q4_K_M 3B–4B 모델은 추정 15–30 tok/s, Qwen3 8B는 추정 8–15 tok/s이며, 싱글 채널 RAM에서는 절반이 됩니다. 읽으면서 따라가기에는 느리지만 채팅과 요약에는 충분히 빠릅니다. Apple Silicon은 통합 메모리의 대역폭이 더 넓어 Qwen3 8B에서 추정 13–26 tok/s(M3~M5)에 이릅니다."
          }
        }
      ]
    },
    "howToSchema": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "로컬 LLM 추론 중 노트북의 열 쓰로틀링을 줄이는 방법",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "통풍 공간이 있는 노트북 거치대를 사용합니다",
          "text": "노트북을 거치대에 올려 배기 공기 흐름을 개선하면 쓰로틀링을 늦출 수 있습니다."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "낮은 전원 모드를 사용해 봅니다",
          "text": "토큰 생성은 클럭 속도보다 메모리 대역폭에 좌우되므로, 균형 또는 절전 전원 계획(macOS에서는 저전력 모드)은 발열을 줄일 수 있습니다. 내 기기에서 직접 시험해 보십시오."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "생성 길이와 컨텍스트를 제한합니다",
          "text": "긴 작업은 더 짧은 프롬프트로 나누고, 매우 긴 응답을 한 번에 다시 생성하는 일은 피하십시오."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Q8_0 대신 Q4_K_M 양자화를 사용합니다",
          "text": "파일이 약 1.7배 작아 토큰마다 메모리에서 읽는 데이터가 줄고 칩에 부하가 걸리는 시간도 짧아집니다."
        }
      ]
    },
    "designSkin": "hub",
    "current_models_mentioned": [
      "Llama 3.2 3B",
      "Phi-4-mini 3.8B",
      "Qwen3 8B",
      "Llama 3.1 8B",
      "Qwen3.5 9B",
      "Qwen3 14B"
    ],
    "current_benchmarks_used": [
      "tok/s (estimated from memory bandwidth)"
    ],
    "current_hardware_mentioned": [
      "Apple M3",
      "Apple M5",
      "Apple M5 Pro",
      "Apple M5 Max",
      "RTX 4060 Laptop GPU",
      "Dual-channel DDR4-3200",
      "Dual-channel DDR5-5600",
      "Single-channel DDR4-3200"
    ]
  }
};
