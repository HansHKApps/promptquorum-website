// Display copy for the Local LLMs hub (all 9 languages). Plain data, no JSX, so both the original
// client hub (src/components/LocalLLMsHub.tsx) and the shared-template adapter (hub-template.tsx)
// read the same strings. Moved here verbatim from LocalLLMsHub.tsx; do not duplicate.

export const HUB_HERO_TITLE: Record<string, string> = {
  en: 'Best Local LLMs by VRAM Tier 2026: Ollama, LM Studio & Hardware Guide',
  de: 'Beste lokale LLMs 2026: Modelle, Hardware, Ollama & LM Studio im Vergleich',
  fr: 'Meilleurs LLMs Locaux par Palier VRAM 2026 : Ollama, LM Studio & Guide Matériel',
  ja: 'VRAM別ベストローカルLLM 2026：Ollama・LM Studio・ハードウェアガイド',
  zh: '按VRAM档位划分的最佳本地LLM 2026：Ollama、LM Studio与硬件指南',
  es: 'Mejores LLMs Locales por Nivel de VRAM 2026: Ollama, LM Studio y Guía de Hardware',
  pt: 'Melhores LLMs Locais por Nível de VRAM 2026: Ollama, LM Studio e Guia de Hardware',
  ko: '로컬 LLM 순위·추천 2026: 모델 성능 비교, Ollama, LM Studio 및 하드웨어 가이드',
  ar: 'أفضل ⁨LLM⁩ محلي حسب مستوى ⁨VRAM⁩ ⁨2026⁩: ⁨Ollama⁩ وLM Studio ودليل الأجهزة',
}

export const HUB_HERO_DESC: Record<string, string> = {
  en: 'Local LLMs are large language models that run entirely on your own computer — no internet connection, no API fees, and no data leaving your machine. Compared with the OpenAI API you trade a little quality for privacy and zero running cost. If you are just starting, install Ollama and run Llama 3.2 3B or Qwen3.5 4B on 8 GB of RAM in under 10 minutes; the tier list below is a ranking of the best models, GPUs, and tools by VRAM — 4GB, 12GB, 24GB, 32GB and 48GB — for every budget.',
  de: 'Lokale LLMs — international meist als Local LLMs bezeichnet — sind große Sprachmodelle, die vollständig auf Ihrem eigenen Computer laufen: ohne Internetverbindung, ohne API-Gebühren und ohne dass Daten Ihr Gerät verlassen. Als lokale KI-Modelle auf eigener Hardware ersetzen sie ChatGPT für viele Aufgaben. Um ein LLM lokal zu betreiben, installieren Sie Ollama und führen Llama 3.2 3B oder Qwen3.5 4B mit 8 GB RAM in unter 10 Minuten aus; die folgenden Leitfäden bewerten die besten Modelle, GPUs und Tools für jedes Budget.',
  fr: 'Les LLMs locaux sont de grands modèles de langage qui s\'exécutent entièrement sur votre propre ordinateur — sans connexion Internet, sans frais d\'API et sans qu\'aucune donnée ne quitte votre machine. Pour débuter, installez Ollama et exécutez Llama 3.2 3B ou Qwen3.5 4B avec 8 Go de RAM en moins de 10 minutes ; les guides ci-dessous classent les meilleurs modèles, GPU et outils pour chaque budget.',
  ja: 'ローカルLLMとは、インターネット接続・API料金・データ送信なしで、自分のパソコン上だけで動作する大規模言語モデルです。初めての方は、Ollamaをインストールして8GBのRAMでLlama 3.2 3BまたはQwen3.5 4Bを10分以内に実行できます。以下のガイドでは、あらゆる予算に最適なモデル・GPU・ツールをランク付けしています。',
  zh: '本地LLM是完全在你自己的电脑上运行的大语言模型——无需联网、没有API费用，数据也不会离开你的设备。新手只需安装Ollama，用8GB内存即可在10分钟内运行Llama 3.2 3B或Qwen3.5 4B；以下指南为各种预算评选最佳模型、GPU和工具。',
  es: 'Los LLMs locales son grandes modelos de lenguaje que se ejecutan por completo en tu propio ordenador, sin conexión a Internet, sin tarifas de API y sin que ningún dato salga de tu máquina. Si empiezas, instala Ollama y ejecuta Llama 3.2 3B o Qwen3.5 4B con 8 GB de RAM en menos de 10 minutos; las guías siguientes clasifican los mejores modelos, GPUs y herramientas para cada presupuesto.',
  pt: 'Os LLMs locais são grandes modelos de linguagem que rodam inteiramente no seu próprio computador — sem conexão à Internet, sem taxas de API e sem que nenhum dado saia da sua máquina. Se está a começar, instale o Ollama e rode o Llama 3.2 3B ou o Qwen3.5 4B com 8 GB de RAM em menos de 10 minutos; os guias abaixo classificam os melhores modelos, GPUs e ferramentas para cada orçamento.',
  ko: '로컬 LLM은 인터넷 연결, API 요금, 데이터 전송 없이 전적으로 자신의 컴퓨터에서 실행되는 대규모 언어 모델입니다. 로컬 AI와 로컬 LLM은 같은 것을 가리킵니다. 처음이라면 Ollama를 설치하고 8GB RAM으로 Llama 3.2 3B 또는 Qwen3.5 4B를 10분 이내에 실행할 수 있습니다. 아래 가이드는 VRAM 등급별 순위와 추천으로, 모델 종류와 성능을 가성비까지 비교합니다.',
  ar: 'النماذج اللغوية ⁨LLM⁩ المحلية هي نماذج لغوية كبيرة تعمل بالكامل على جهازك الخاص — بلا اتصال إنترنت، وبلا رسوم ⁨API⁩، وبلا خروج أي بيانات من جهازك. إذا كنت مبتدئًا، ثبّت ⁨Ollama⁩ وشغّل ⁨Llama 3.2 3B⁩ أو ⁨Qwen3.5 4B⁩ بذاكرة ⁨8 GB RAM⁩ في أقل من 10 دقائق؛ الأدلة أدناه تصنّف أفضل النماذج وبطاقات ⁨GPU⁩ والأدوات لكل ميزانية.',
}

export const HUB_START_HERE_TITLE: Record<string, string> = {
  en: 'Start Here: 8 Guides by What You Want to Do',
  de: 'Hier starten: 8 Guides nach Ihrem Ziel',
  fr: 'Commencez ici : 8 guides selon votre objectif',
  ja: 'ここから始める：目的別8つのガイド',
  zh: '从这里开始：按需求分类的8篇指南',
  es: 'Empieza aquí: 8 guías según lo que quieras hacer',
  pt: 'Comece aqui: 8 guias conforme o seu objetivo',
  ko: '여기서 시작: 목적별 8가지 가이드',
  ar: 'ابدأ هنا: 8 أدلة حسب ما تريد فعله',
}

export const HUB_START_HERE_ITEMS: Record<string, { emoji: string; label: string; desc: string; href: string }[]> = {
  en: [
    { emoji: '🚀', label: 'New to local LLMs?', desc: 'Install Ollama and run your first model in 10 minutes.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Which model is best?', desc: 'Top open-source models on Ollama ranked (Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Coding with local LLMs', desc: 'The strongest local models for code generation and review.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'What hardware do I need?', desc: 'VRAM and RAM required for each model size, explained.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: 'On a budget?', desc: 'Cheapest GPUs that run 7B–13B models smoothly.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'No GPU, or an old PC?', desc: 'CPU-only picks that run without a graphics card.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'On a Mac?', desc: 'Apple Silicon M5: memory bandwidth, unified memory and which Mac to buy.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: 'Need a small model?', desc: 'Small models for 4–8 GB machines, down to the smallest worth running.', href: '/local-llms/small-local-llm-models' },
  ],
  de: [
    { emoji: '🚀', label: 'Neu bei lokalen LLMs?', desc: 'Ollama installieren und in 10 Minuten das erste Modell ausführen.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Welches Modell ist das beste?', desc: 'Top-Open-Source-Modelle für Ollama im Ranking (Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programmieren mit lokalen LLMs', desc: 'Die stärksten lokalen Modelle für Code-Generierung und Review.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'Welche Hardware brauche ich?', desc: 'VRAM und RAM je Modellgröße — verständlich erklärt.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: 'Schmales Budget?', desc: 'Günstigste GPUs, die 7B–13B-Modelle flüssig ausführen.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'Keine GPU oder ein alter PC?', desc: 'Modelle für den reinen CPU-Betrieb, ganz ohne Grafikkarte.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'Mit dem Mac?', desc: 'Apple Silicon M5: Speicherbandbreite, Unified Memory und welcher Mac sich lohnt.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: 'Ein kleines Modell gesucht?', desc: 'Kleine Modelle für Rechner mit 4–8 GB, bis hin zum kleinsten sinnvollen.', href: '/local-llms/small-local-llm-models' },
  ],
  fr: [
    { emoji: '🚀', label: 'Nouveau sur les LLMs locaux ?', desc: 'Installez Ollama et exécutez votre premier modèle en 10 minutes.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Quel modèle choisir ?', desc: 'Les meilleurs modèles open source sur Ollama, classés (Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Coder avec des LLMs locaux', desc: 'Les modèles locaux les plus performants pour le code.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'Quel matériel faut-il ?', desc: 'VRAM et RAM nécessaires selon la taille du modèle, expliqués.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: 'Petit budget ?', desc: 'Les GPU les moins chers qui font tourner les modèles 7B–13B.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'Pas de GPU, ou un vieux PC ?', desc: 'Modèles pour fonctionner sur CPU seul, sans carte graphique.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'Sur un Mac ?', desc: 'Apple Silicon M5 : bande passante mémoire, mémoire unifiée et quel Mac choisir.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: 'Besoin d\'un petit modèle ?', desc: 'Petits modèles pour machines de 4 à 8 Go, jusqu\'au plus petit qui vaille la peine.', href: '/local-llms/small-local-llm-models' },
  ],
  ja: [
    { emoji: '🚀', label: 'ローカルLLMが初めて？', desc: 'Ollamaをインストールし、10分で最初のモデルを実行。', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'どのモデルが最適？', desc: 'Ollamaのおすすめオープンソースモデルをランキング（Qwen3.8・Gemma 4・gpt-oss・Nemotron 3.5）。', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'ローカルLLMでコーディング', desc: 'コード生成・レビューに最も強いローカルモデル。', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '必要なハードウェアは？', desc: 'モデルサイズ別に必要なVRAM・RAMを解説。', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: '予算重視？', desc: '7B〜13Bモデルを快適に動かせる最安GPU。', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'GPUなし、または古いPC？', desc: 'グラフィックボードなし、CPUだけで動かせるモデル。', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'Macで使いたい？', desc: 'Apple Silicon M5：メモリ帯域、ユニファイドメモリ、選ぶべきMac。', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: '小型モデルが欲しい？', desc: '4〜8 GBのマシン向けの小型モデルと、実用的な最小モデル。', href: '/local-llms/small-local-llm-models' },
  ],
  zh: [
    { emoji: '🚀', label: '第一次用本地LLM？', desc: '安装Ollama，10分钟内运行你的第一个模型。', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '哪个模型最好？', desc: 'Ollama上的顶级开源模型排名（Qwen3.8、Gemma 4、gpt-oss、Nemotron 3.5）。', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: '用本地LLM编程', desc: '代码生成与审查最强的本地模型。', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '需要什么硬件？', desc: '按模型大小说明所需的VRAM和内存。', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: '预算有限？', desc: '能流畅运行7B–13B模型的最便宜显卡。', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: '没有GPU，或是旧电脑？', desc: '无需独立显卡，仅靠CPU即可运行的模型。', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: '用Mac运行？', desc: 'Apple Silicon M5：内存带宽、统一内存，以及该选哪款Mac。', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: '需要小模型？', desc: '适合4–8 GB设备的小模型，以及值得一试的最小模型。', href: '/local-llms/small-local-llm-models' },
  ],
  es: [
    { emoji: '🚀', label: '¿Nuevo en LLMs locales?', desc: 'Instala Ollama y ejecuta tu primer modelo en 10 minutos.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '¿Qué modelo es el mejor?', desc: 'Mejores modelos open source en Ollama, clasificados (Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programar con LLMs locales', desc: 'Los modelos locales más potentes para generar y revisar código.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '¿Qué hardware necesito?', desc: 'VRAM y RAM necesarias según el tamaño del modelo, explicadas.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: '¿Presupuesto ajustado?', desc: 'Las GPUs más baratas que ejecutan modelos 7B–13B con fluidez.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: '¿Sin GPU o con un PC antiguo?', desc: 'Modelos para funcionar solo con CPU, sin tarjeta gráfica.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: '¿Con un Mac?', desc: 'Apple Silicon M5: ancho de banda de memoria, memoria unificada y qué Mac elegir.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: '¿Necesitas un modelo pequeño?', desc: 'Modelos pequeños para equipos de 4–8 GB, hasta el más pequeño que merece la pena.', href: '/local-llms/small-local-llm-models' },
  ],
  pt: [
    { emoji: '🚀', label: 'Novo em LLMs locais?', desc: 'Instale o Ollama e rode o seu primeiro modelo em 10 minutos.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'Qual modelo é o melhor?', desc: 'Melhores modelos open source no Ollama, classificados (Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'Programar com LLMs locais', desc: 'Os modelos locais mais fortes para gerar e revisar código.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'De que hardware preciso?', desc: 'VRAM e RAM necessárias por tamanho de modelo, explicadas.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: 'Orçamento apertado?', desc: 'As GPUs mais baratas que rodam modelos 7B–13B com fluidez.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'Sem GPU ou com um PC antigo?', desc: 'Modelos para rodar só na CPU, sem placa de vídeo.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'Usa um Mac?', desc: 'Apple Silicon M5: largura de banda de memória, memória unificada e qual Mac escolher.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: 'Precisa de um modelo pequeno?', desc: 'Modelos pequenos para máquinas de 4–8 GB, até o menor que vale a pena rodar.', href: '/local-llms/small-local-llm-models' },
  ],
  ko: [
    { emoji: '🚀', label: '로컬 LLM이 처음인가요?', desc: 'Ollama를 설치하고 10분 안에 첫 모델을 실행하세요.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: '어떤 모델이 가장 좋나요?', desc: 'Ollama의 최고 오픈소스 모델 순위(Qwen3.8, Gemma 4, gpt-oss, Nemotron 3.5).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: '로컬 LLM으로 코딩하기', desc: '코드 생성과 리뷰에 가장 강력한 로컬 모델.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: '어떤 하드웨어가 필요한가요?', desc: '모델 크기별로 필요한 VRAM과 RAM을 설명합니다.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: '예산이 빠듯한가요?', desc: '7B–13B 모델을 원활하게 돌리는 가장 저렴한 GPU.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'GPU가 없거나 오래된 PC인가요?', desc: 'GPU 없이 CPU만으로 실행할 수 있는 모델.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'Mac을 사용하시나요?', desc: 'Apple Silicon M5: 메모리 대역폭, 통합 메모리, 어떤 Mac을 고를지.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: '작은 모델이 필요하신가요?', desc: '4~8 GB 기기용 소형 모델과 실행할 가치가 있는 가장 작은 모델.', href: '/local-llms/small-local-llm-models' },
  ],
  ar: [
    { emoji: '🚀', label: 'هل ⁨LLM⁩ جديدة عليك؟', desc: 'ثبّت ⁨Ollama⁩ وشغّل أول نموذج خلال 10 دقائق.', href: '/local-llms/how-to-install-ollama' },
    { emoji: '🏆', label: 'ما هو أفضل نموذج؟', desc: 'أفضل النماذج مفتوحة المصدر على ⁨Ollama⁩ (⁨Qwen3.8⁩ و⁨Gemma 4⁩ و⁨gpt-oss⁩ و⁨Nemotron 3.5⁩).', href: '/local-llms/top-open-source-models-ollama' },
    { emoji: '💻', label: 'البرمجة مع ⁨LLM⁩ المحلية', desc: 'أقوى النماذج المحلية لتوليد الشيفرة ومراجعتها.', href: '/local-llms/best-local-llms-for-coding' },
    { emoji: '🖥️', label: 'ما الأجهزة التي أحتاجها؟', desc: '⁨VRAM⁩ و⁨RAM⁩ المطلوبة لكل حجم نموذج، موضّحة.', href: '/local-llms/local-llm-hardware-guide' },
    { emoji: '💸', label: 'ميزانية محدودة؟', desc: 'أرخص بطاقات ⁨GPU⁩ التي تشغّل نماذج ⁨7B-13B⁩ بسلاسة.', href: '/local-llms/best-budget-gpus-local-llm' },
    { emoji: '🧠', label: 'لا توجد بطاقة ⁨GPU⁩، أو جهاز قديم؟', desc: 'نماذج تعمل على ⁨CPU⁩ وحده دون بطاقة رسوميات.', href: '/local-llms/best-cpu-only-llm' },
    { emoji: '🍎', label: 'تستخدم ⁨Mac⁩؟', desc: '⁨Apple Silicon M5:⁩ عرض نطاق الذاكرة، والذاكرة الموحّدة، وأي جهاز ⁨Mac⁩ تختار.', href: '/local-llms/apple-silicon-m5-local-llm' },
    { emoji: '🪶', label: 'تحتاج نموذجًا صغيرًا؟', desc: 'نماذج صغيرة لأجهزة بذاكرة 4–⁨8 GB⁩، وصولًا إلى أصغر نموذج يستحق التشغيل.', href: '/local-llms/small-local-llm-models' },
  ],
}

export const HUB_NEW_APRIL_HEADING: Record<string, string> = {
  en: 'Newest Models Added',
  de: 'Neueste hinzugefügte Modelle',
  fr: 'Derniers modèles ajoutés',
  ja: '最新追加モデル',
  zh: '最新增加的模型',
  es: 'Últimos modelos añadidos',
  pt: 'Modelos mais recentes adicionados',
  ko: '최근 추가된 모델',
  ar: 'أحدث النماذج المضافة',
}

export const HUB_NEW_APRIL_MODELS: Record<string, { name: string; pull: string; vram: string; note: string }[]> = {
  en: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba. 256K context, text and image input; our pick for 24 GB cards' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google. 256K context, vision and tool calling; fits a 12 GB GPU' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI. 128K context, open weights; fits a 16 GB GPU' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba. Text and image input; our small-model pick for 8 GB machines' },
  ],
  de: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba. 256K Kontext, Text- und Bildeingabe; unsere Empfehlung für 24-GB-Karten' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google. 256K Kontext, Vision und Tool Calling; passt auf eine 12-GB-GPU' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI. 128K Kontext, offene Gewichte; passt auf eine 16-GB-GPU' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba. Text- und Bildeingabe; unsere Empfehlung unter den kleinen Modellen für 8-GB-Rechner' },
  ],
  fr: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 Go', note: 'Alibaba. Contexte 256K, entrée texte et image ; notre choix pour les cartes de 24 Go' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 Go', note: 'Google. Contexte 256K, vision et appel d\'outils ; tient sur un GPU de 12 Go' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 Go', note: 'OpenAI. Contexte 128K, poids ouverts ; tient sur un GPU de 16 Go' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 Go', note: 'Alibaba. Entrée texte et image ; notre choix de petit modèle pour machines de 8 Go' },
  ],
  ja: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba。256Kコンテキスト、テキストと画像の入力に対応。24 GBカードのおすすめ' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google。256Kコンテキスト、画像理解とツール呼び出しに対応。12 GBのGPUに収まります' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI。128Kコンテキスト、オープンウェイト。16 GBのGPUに収まります' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba。テキストと画像の入力に対応。8 GBマシン向けの小型モデルのおすすめ' },
  ],
  zh: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba。256K上下文，支持文本和图像输入；我们为24 GB显卡推荐的首选' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google。256K上下文，支持视觉和工具调用；12 GB显卡即可运行' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI。128K上下文，开放权重；16 GB显卡即可运行' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba。支持文本和图像输入；我们为8 GB设备推荐的小模型' },
  ],
  es: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba. Contexto de 256K, entrada de texto e imagen; nuestra elección para tarjetas de 24 GB' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google. Contexto de 256K, visión y uso de herramientas; cabe en una GPU de 12 GB' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI. Contexto de 128K, pesos abiertos; cabe en una GPU de 16 GB' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba. Entrada de texto e imagen; nuestra elección de modelo pequeño para equipos de 8 GB' },
  ],
  pt: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba. Contexto de 256K, entrada de texto e imagem; nossa escolha para placas de 24 GB' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google. Contexto de 256K, visão e uso de ferramentas; cabe em uma GPU de 12 GB' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI. Contexto de 128K, pesos abertos; cabe em uma GPU de 16 GB' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba. Entrada de texto e imagem; nossa escolha de modelo pequeno para máquinas de 8 GB' },
  ],
  ko: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'Alibaba. 256K 컨텍스트, 텍스트·이미지 입력 지원. 24 GB 카드에 권장하는 선택' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'Google. 256K 컨텍스트, 비전 및 도구 호출 지원. 12 GB GPU에 들어갑니다' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'OpenAI. 128K 컨텍스트, 오픈 웨이트. 16 GB GPU에 들어갑니다' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'Alibaba. 텍스트·이미지 입력 지원. 8 GB 기기에 권장하는 소형 모델' },
  ],
  ar: [
    { name: 'Qwen3.8-27B', pull: 'ollama pull qwen3.8:27b', vram: '18 GB', note: 'من ⁨Alibaba.⁩ سياق ⁨256K⁩، إدخال نصوص وصور؛ اختيارنا لبطاقات ⁨24 GB⁩' },
    { name: 'Gemma 4 12B', pull: 'ollama pull gemma4:12b', vram: '8 GB', note: 'من ⁨Google.⁩ سياق ⁨256K⁩، رؤية واستدعاء أدوات؛ يناسب بطاقة ⁨GPU⁩ بذاكرة ⁨12 GB⁩' },
    { name: 'gpt-oss 20B', pull: 'ollama pull gpt-oss:20b', vram: '14 GB', note: 'من ⁨OpenAI.⁩ سياق ⁨128K⁩، أوزان مفتوحة؛ يناسب بطاقة ⁨GPU⁩ بذاكرة ⁨16 GB⁩' },
    { name: 'Qwen3.5 4B', pull: 'ollama pull qwen3.5:4b', vram: '4 GB', note: 'من ⁨Alibaba.⁩ إدخال نصوص وصور؛ اختيارنا للنماذج الصغيرة على أجهزة ⁨8 GB⁩' },
  ],
}

export const HUB_NEW_APRIL_COLS: Record<string, string[]> = {
  en: ['Model', 'Pull Command', 'Download size', 'Notes'],
  de: ['Modell', 'Pull-Befehl', 'Downloadgröße', 'Hinweise'],
  fr: ['Modèle', 'Commande pull', 'Taille du téléchargement', 'Notes'],
  ja: ['モデル', 'Pullコマンド', 'ダウンロードサイズ', 'メモ'],
  zh: ['模型', 'Pull命令', '下载大小', '备注'],
  es: ['Modelo', 'Comando pull', 'Tamaño de descarga', 'Notas'],
  pt: ['Modelo', 'Comando pull', 'Tamanho do download', 'Notas'],
  ko: ['모델', 'Pull 명령어', '다운로드 크기', '비고'],
  ar: ['النموذج', 'أمر السحب', 'حجم التنزيل', 'ملاحظات'],
}

export const HUB_COMPARISON_HEADING: Record<string, string> = {
  en: 'Ollama vs LM Studio vs Jan.ai: Which Should You Use?',
  de: 'Ollama vs LM Studio vs Jan.ai: Was sollten Sie verwenden?',
  fr: 'Ollama vs LM Studio vs Jan.ai : lequel utiliser ?',
  ja: 'Ollama vs LM Studio vs Jan.ai：どれを使うべきか？',
  zh: 'Ollama vs LM Studio vs Jan.ai：该用哪个？',
  es: 'Ollama vs LM Studio vs Jan.ai: ¿Cuál deberías usar?',
  pt: 'Ollama vs LM Studio vs Jan.ai: Qual você deve usar?',
  ko: 'Ollama vs LM Studio vs Jan.ai: 무엇을 사용해야 하나요?',
  ar: 'Ollama مقابل LM Studio مقابل Jan.ai: أيهما تختار؟',
}

export const HUB_COMPARISON_ROWS: Record<string, { feature: string; ollama: string; lmstudio: string; janai: string }[]> = {
  en: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'Desktop GUI', janai: 'Desktop GUI + chat' },
    { feature: 'API endpoint', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Model browser', ollama: 'CLI only', lmstudio: 'Built-in', janai: 'Built-in' },
    { feature: 'Best for', ollama: 'Developers, automation', lmstudio: 'Beginners, GUI users', janai: 'Privacy-first chat' },
    { feature: 'Setup time', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  de: [
    { feature: 'Oberfläche', ollama: 'Terminal (CLI)', lmstudio: 'Desktop-GUI', janai: 'Desktop-GUI + Chat' },
    { feature: 'API-Endpunkt', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Modell-Browser', ollama: 'Nur CLI', lmstudio: 'Eingebaut', janai: 'Eingebaut' },
    { feature: 'Geeignet für', ollama: 'Entwickler, Automatisierung', lmstudio: 'Einsteiger, GUI-Nutzer', janai: 'Privacy-first Chat' },
    { feature: 'Einrichtungszeit', ollama: '2 Min', lmstudio: '5 Min', janai: '5 Min' },
  ],
  fr: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'GUI bureau', janai: 'GUI bureau + chat' },
    { feature: 'Endpoint API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Navigateur modèles', ollama: 'CLI uniquement', lmstudio: 'Intégré', janai: 'Intégré' },
    { feature: 'Idéal pour', ollama: 'Développeurs, automation', lmstudio: 'Débutants, utilisateurs GUI', janai: 'Chat axé confidentialité' },
    { feature: 'Temps de setup', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  ja: [
    { feature: 'インターフェース', ollama: 'ターミナル（CLI）', lmstudio: 'デスクトップGUI', janai: 'GUI＋チャット' },
    { feature: 'APIエンドポイント', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'モデルブラウザ', ollama: 'CLIのみ', lmstudio: '内蔵', janai: '内蔵' },
    { feature: '最適な用途', ollama: '開発者・自動化', lmstudio: '初心者・GUI利用者', janai: 'プライバシー重視チャット' },
    { feature: 'セットアップ時間', ollama: '2分', lmstudio: '5分', janai: '5分' },
  ],
  zh: [
    { feature: '界面', ollama: '终端（CLI）', lmstudio: '桌面GUI', janai: 'GUI + 聊天' },
    { feature: 'API端点', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: '模型浏览器', ollama: '仅CLI', lmstudio: '内置', janai: '内置' },
    { feature: '最适合', ollama: '开发者、自动化', lmstudio: '初学者、GUI用户', janai: '隐私优先聊天' },
    { feature: '设置时间', ollama: '2分钟', lmstudio: '5分钟', janai: '5分钟' },
  ],
  es: [
    { feature: 'Interfaz', ollama: 'Terminal (CLI)', lmstudio: 'GUI de escritorio', janai: 'GUI escritorio + chat' },
    { feature: 'Endpoint API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Explorador de modelos', ollama: 'Solo CLI', lmstudio: 'Integrado', janai: 'Integrado' },
    { feature: 'Ideal para', ollama: 'Desarrolladores, automatización', lmstudio: 'Principiantes, usuarios GUI', janai: 'Chat enfocado en privacidad' },
    { feature: 'Tiempo de configuración', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  pt: [
    { feature: 'Interface', ollama: 'Terminal (CLI)', lmstudio: 'GUI desktop', janai: 'GUI desktop + chat' },
    { feature: 'Endpoint da API', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'Navegador de modelos', ollama: 'Apenas CLI', lmstudio: 'Integrado', janai: 'Integrado' },
    { feature: 'Ideal para', ollama: 'Desenvolvedores, automação', lmstudio: 'Iniciantes, usuários de GUI', janai: 'Chat com foco em privacidade' },
    { feature: 'Tempo de configuração', ollama: '2 min', lmstudio: '5 min', janai: '5 min' },
  ],
  ko: [
    { feature: '인터페이스', ollama: '터미널 (CLI)', lmstudio: '데스크탑 GUI', janai: '데스크탑 GUI + 채팅' },
    { feature: 'API 엔드포인트', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: '모델 브라우저', ollama: 'CLI 전용', lmstudio: '내장', janai: '내장' },
    { feature: '최적 용도', ollama: '개발자, 자동화', lmstudio: '초보자, GUI 사용자', janai: '개인 정보 보호 우선 채팅' },
    { feature: '설정 시간', ollama: '2분', lmstudio: '5분', janai: '5분' },
  ],
  ar: [
    { feature: 'الواجهة', ollama: '⁨طرفية (CLI)⁩', lmstudio: '⁨واجهة سطح مكتب⁩', janai: '⁨واجهة سطح مكتب + محادثة⁩' },
    { feature: 'نقطة نهاية ⁨API⁩', ollama: 'localhost:11434', lmstudio: 'localhost:1234', janai: 'localhost:1337' },
    { feature: 'متصفح النماذج', ollama: '⁨CLI⁩ فقط', lmstudio: 'مدمج', janai: 'مدمج' },
    { feature: 'الأنسب لـ', ollama: 'المطورون، الأتمتة', lmstudio: 'المبتدئون، مستخدمو ⁨GUI⁩', janai: 'محادثة تراعي الخصوصية' },
    { feature: 'وقت الإعداد', ollama: 'دقيقتان', lmstudio: '5 دقائق', janai: '5 دقائق' },
  ],
}

export const HUB_COMPARISON_COLS: Record<string, string[]> = {
  en: ['Feature', 'Ollama', 'LM Studio', 'Jan.ai'],
  de: ['Merkmal', 'Ollama', 'LM Studio', 'Jan.ai'],
  fr: ['Fonctionnalité', 'Ollama', 'LM Studio', 'Jan.ai'],
  ja: ['機能', 'Ollama', 'LM Studio', 'Jan.ai'],
  zh: ['功能', 'Ollama', 'LM Studio', 'Jan.ai'],
  es: ['Característica', 'Ollama', 'LM Studio', 'Jan.ai'],
  pt: ['Recurso', 'Ollama', 'LM Studio', 'Jan.ai'],
  ko: ['기능', 'Ollama', 'LM Studio', 'Jan.ai'],
  ar: ['الميزة', 'Ollama', 'LM Studio', 'Jan.ai'],
}

export const HUB_VRAM_TIER_HEADING: Record<string, string> = {
  en: 'Best Local LLM by VRAM Tier',
  de: 'Beste lokale LLMs nach VRAM-Tier',
  fr: 'Meilleur LLM local par palier de VRAM',
  ja: 'VRAM別ベストローカルLLM',
  zh: '按VRAM档位划分的最佳本地LLM',
  es: 'Mejor LLM local por nivel de VRAM',
  pt: 'Melhor LLM local por nível de VRAM',
  ko: 'VRAM 등급별 최고의 로컬 LLM',
  ar: 'أفضل ⁨LLM⁩ محلي حسب مستوى ⁨VRAM⁩',
}

export const HUB_VRAM_TIER_INTRO: Record<string, string> = {
  en: 'Already know your GPU\'s VRAM? Find your tier below for the best-fit model — for the full formula, quantization math, and MoE exceptions, see the [complete VRAM guide](/local-llms/how-much-vram-local-llm#by-vram-tier).',
  de: 'Kennen Sie den VRAM Ihrer GPU bereits? Finden Sie unten Ihr Tier und das passende Modell — die vollständige Formel, Quantisierungs-Rechnung und MoE-Ausnahmen finden Sie im [vollständigen VRAM-Guide](/local-llms/how-much-vram-local-llm#by-vram-tier).',
  fr: 'Vous connaissez déjà la VRAM de votre GPU ? Trouvez votre palier ci-dessous pour le modèle le mieux adapté — pour la formule complète, le calcul de quantification et les exceptions MoE, consultez le [guide VRAM complet](/local-llms/how-much-vram-local-llm#by-vram-tier).',
  ja: 'GPUのVRAM容量が分かっている方は、下の表からご自身のティアと最適なモデルを確認してください。計算式や量子化の詳細、MoEモデルの例外については[VRAM完全ガイド](/local-llms/how-much-vram-local-llm#by-vram-tier)をご覧ください。',
  zh: '已经知道你的GPU显存大小？在下表中找到对应档位和最合适的模型——完整公式、量化换算和MoE模型的例外情况，请查看[完整VRAM指南](/local-llms/how-much-vram-local-llm#by-vram-tier)。',
  es: '¿Ya sabes cuánta VRAM tiene tu GPU? Busca tu nivel abajo para ver el modelo que mejor encaja — para la fórmula completa, el cálculo de cuantización y las excepciones MoE, consulta la [guía completa de VRAM](/local-llms/how-much-vram-local-llm#by-vram-tier).',
  pt: 'Já sabe quanta VRAM sua GPU tem? Encontre seu nível abaixo para o modelo mais adequado — para a fórmula completa, o cálculo de quantização e as exceções MoE, veja o [guia completo de VRAM](/local-llms/how-much-vram-local-llm#by-vram-tier).',
  ko: 'GPU의 VRAM 용량을 이미 알고 계신가요? 아래에서 등급을 찾아 가장 적합한 모델을 확인하세요 — 전체 공식과 양자화 계산, MoE 모델의 예외 사항은 [전체 VRAM 가이드](/local-llms/how-much-vram-local-llm#by-vram-tier)를 참고하세요.',
  ar: 'هل تعرف بالفعل سعة ⁨VRAM⁩ في ⁨GPU⁩؟ ابحث عن مستواك أدناه لأفضل نموذج مناسب — للمعادلة الكاملة وحساب التكميم واستثناءات نماذج ⁨MoE⁩، راجع [دليل ⁨VRAM⁩ الكامل](/local-llms/how-much-vram-local-llm#by-vram-tier).',
}

export const HUB_VRAM_TIER_COLS: Record<string, string[]> = {
  en: ['VRAM', 'Best-Fit Model (Q4)', 'Example GPUs'],
  de: ['VRAM', 'Passendes Modell (Q4)', 'Beispiel-GPUs'],
  fr: ['VRAM', 'Modèle adapté (Q4)', 'GPU exemples'],
  ja: ['VRAM', '最適モデル（Q4）', '対応GPU例'],
  zh: ['VRAM', '最合适的模型（Q4）', '示例GPU'],
  es: ['VRAM', 'Modelo ideal (Q4)', 'GPUs de ejemplo'],
  pt: ['VRAM', 'Modelo ideal (Q4)', 'GPUs de exemplo'],
  ko: ['VRAM', '최적 모델 (Q4)', '예시 GPU'],
  ar: ['⁨VRAM⁩', 'أفضل نموذج (⁨Q4⁩)', 'أمثلة ⁨GPU⁩'],
}

export const HUB_VRAM_TIER_ROWS: Record<string, { vram: string; model: string; gpu: string }[]> = {
  en: [
    { vram: '4 GB', model: 'Llama 3.2 3B or Phi-4 Mini (~2–2.5 GB)', gpu: 'RTX 3050 4 GB, GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B or Qwen3 8B (~4-5 GB)', gpu: 'RTX 4060 Ti 8 GB, RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B (~8.4 GB), or 7-8B at Q5/Q8 for higher quality', gpu: 'RTX 3060 12 GB, RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B at Q5/Q8, or 22B-class (~13 GB)', gpu: 'RTX 4060 Ti 16 GB, RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B (~18 GB, our top pick for 24 GB cards)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 GB', model: '22-32B at full precision, or one card in a dual-GPU 70B rig', gpu: 'RTX 5090' },
    { vram: '48 GB', model: '70B models at Q4 (~42 GB); Q5 (~50 GB) does not fit', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  de: [
    { vram: '4 GB', model: 'Llama 3.2 3B oder Phi-4 Mini (~2–2,5 GB)', gpu: 'RTX 3050 4 GB, GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B oder Qwen3 8B (~4-5 GB)', gpu: 'RTX 4060 Ti 8 GB, RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B (~8,4 GB), oder 7-8B bei Q5/Q8 für höhere Qualität', gpu: 'RTX 3060 12 GB, RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B bei Q5/Q8, oder 22B-Klasse (~13 GB)', gpu: 'RTX 4060 Ti 16 GB, RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B (~18 GB, unsere Top-Empfehlung für 24-GB-Karten)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 GB', model: '22-32B in voller Präzision, oder 1 Karte im Dual-GPU-70B-Rig', gpu: 'RTX 5090' },
    { vram: '48 GB', model: '70B-Modelle bei Q4 (~42 GB); Q5 (~50 GB) passt nicht', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  fr: [
    { vram: '4 Go', model: 'Llama 3.2 3B ou Phi-4 Mini (~2–2,5 Go)', gpu: 'RTX 3050 4 Go, GTX 1650' },
    { vram: '8 Go', model: 'Llama 3.1 8B ou Qwen3 8B (~4-5 Go)', gpu: 'RTX 4060 Ti 8 Go, RTX 3070' },
    { vram: '12 Go', model: 'Qwen3 14B (~8,4 Go), ou 7-8B en Q5/Q8 pour + de qualité', gpu: 'RTX 3060 12 Go, RTX 4070' },
    { vram: '16 Go', model: 'Qwen3 14B en Q5/Q8, ou classe 22B (~13 Go)', gpu: 'RTX 4060 Ti 16 Go, RTX 4080' },
    { vram: '24 Go', model: 'Qwen3.8-27B (~18 Go, notre premier choix pour les cartes de 24 Go)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 Go', model: '22-32B pleine précision, ou 1 carte d\'un rig double-GPU 70B', gpu: 'RTX 5090' },
    { vram: '48 Go', model: 'Modèles 70B en Q4 (~42 Go) ; le Q5 (~50 Go) ne tient pas', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  ja: [
    { vram: '4 GB', model: 'Llama 3.2 3B または Phi-4 Mini（約2〜2.5 GB）', gpu: 'RTX 3050 4GB、GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B または Qwen3 8B（約4〜5 GB）', gpu: 'RTX 4060 Ti 8GB、RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B（約8.4 GB）、または高品質重視なら7〜8BをQ5/Q8で', gpu: 'RTX 3060 12GB、RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14BをQ5/Q8で、または22Bクラス（約13 GB）', gpu: 'RTX 4060 Ti 16GB、RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B（約18 GB、24 GBカードの第一候補）', gpu: 'RTX 4090、RTX 3090' },
    { vram: '32 GB', model: '22〜32Bをフル精度で、または70B用デュアルGPU構成の1枚として', gpu: 'RTX 5090' },
    { vram: '48 GB', model: '70BモデルをQ4で（約42 GB）、Q5（約50 GB）は収まりません', gpu: '2枚のRTX 4090、RTX 6000 Ada' },
  ],
  zh: [
    { vram: '4 GB', model: 'Llama 3.2 3B 或 Phi-4 Mini（约2–2.5 GB）', gpu: 'RTX 3050 4GB、GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B 或 Qwen3 8B（约4-5 GB）', gpu: 'RTX 4060 Ti 8GB、RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B（约8.4 GB），或追求更高质量选7-8B的Q5/Q8', gpu: 'RTX 3060 12GB、RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B用Q5/Q8，或22B级别（约13 GB）', gpu: 'RTX 4060 Ti 16GB、RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B（约18 GB，24 GB显卡的首选）', gpu: 'RTX 4090、RTX 3090' },
    { vram: '32 GB', model: '22-32B全精度运行，或作为双卡70B方案中的一张显卡', gpu: 'RTX 5090' },
    { vram: '48 GB', model: '70B模型用Q4（约42 GB），Q5（约50 GB）放不下', gpu: '2张RTX 4090、RTX 6000 Ada' },
  ],
  es: [
    { vram: '4 GB', model: 'Llama 3.2 3B o Phi-4 Mini (~2–2.5 GB)', gpu: 'RTX 3050 4 GB, GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B o Qwen3 8B (~4-5 GB)', gpu: 'RTX 4060 Ti 8 GB, RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B (~8.4 GB), o 7-8B en Q5/Q8 para mayor calidad', gpu: 'RTX 3060 12 GB, RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B en Q5/Q8, o clase 22B (~13 GB)', gpu: 'RTX 4060 Ti 16 GB, RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B (~18 GB, nuestra primera opción para tarjetas de 24 GB)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 GB', model: '22-32B a máx. precisión, o 1 tarjeta de equipo doble-GPU 70B', gpu: 'RTX 5090' },
    { vram: '48 GB', model: 'Modelos 70B en Q4 (~42 GB); Q5 (~50 GB) no cabe', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  pt: [
    { vram: '4 GB', model: 'Llama 3.2 3B ou Phi-4 Mini (~2–2,5 GB)', gpu: 'RTX 3050 4 GB, GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B ou Qwen3 8B (~4-5 GB)', gpu: 'RTX 4060 Ti 8 GB, RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B (~8,4 GB), ou 7-8B em Q5/Q8 para mais qualidade', gpu: 'RTX 3060 12 GB, RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B em Q5/Q8, ou classe 22B (~13 GB)', gpu: 'RTX 4060 Ti 16 GB, RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B (~18 GB, nossa primeira escolha para placas de 24 GB)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 GB', model: '22-32B em precisão total, ou 1 placa de setup dual-GPU 70B', gpu: 'RTX 5090' },
    { vram: '48 GB', model: 'Modelos 70B em Q4 (~42 GB); Q5 (~50 GB) não cabe', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  ko: [
    { vram: '4 GB', model: 'Llama 3.2 3B 또는 Phi-4 Mini (~2–2.5 GB)', gpu: 'RTX 3050 4GB, GTX 1650' },
    { vram: '8 GB', model: 'Llama 3.1 8B 또는 Qwen3 8B (~4-5 GB)', gpu: 'RTX 4060 Ti 8GB, RTX 3070' },
    { vram: '12 GB', model: 'Qwen3 14B (~8.4 GB), 또는 고품질을 원하면 7-8B를 Q5/Q8로', gpu: 'RTX 3060 12GB, RTX 4070' },
    { vram: '16 GB', model: 'Qwen3 14B를 Q5/Q8로, 또는 22B급 (~13 GB)', gpu: 'RTX 4060 Ti 16GB, RTX 4080' },
    { vram: '24 GB', model: 'Qwen3.8-27B (~18 GB, 24 GB 카드의 1순위)', gpu: 'RTX 4090, RTX 3090' },
    { vram: '32 GB', model: '22-32B를 완전한 정밀도로, 또는 듀얼 GPU 70B 구성의 카드 한 장으로', gpu: 'RTX 5090' },
    { vram: '48 GB', model: '70B 모델을 Q4로 (~42 GB), Q5(~50 GB)는 들어가지 않음', gpu: '2x RTX 4090, RTX 6000 Ada' },
  ],
  ar: [
    { vram: '⁨4 GB⁩', model: '⁨Llama 3.2 3B⁩ أو ⁨Phi-4 Mini⁩ (~2–⁨2.5 GB⁩)', gpu: '⁨RTX 3050 4GB, GTX 1650⁩' },
    { vram: '⁨8 GB⁩', model: 'Llama 3.1 8B أو Qwen3 8B (⁨~4-5 GB⁩)', gpu: '⁨RTX 4060 Ti 8GB, RTX 3070⁩' },
    { vram: '⁨12 GB⁩', model: 'Qwen3 14B (⁨~8.4 GB⁩)، أو 7-8B بجودة ⁨Q5/Q8⁩ لأداء أعلى', gpu: '⁨RTX 3060 12GB, RTX 4070⁩' },
    { vram: '⁨16 GB⁩', model: 'Qwen3 14B بجودة ⁨Q5/Q8⁩، أو فئة 22B (⁨~13 GB⁩)', gpu: '⁨RTX 4060 Ti 16GB, RTX 4080⁩' },
    { vram: '⁨24 GB⁩', model: '⁨Qwen3.8-27B⁩ (~⁨18 GB⁩، خيارنا الأول لبطاقات ⁨24 GB⁩)', gpu: '⁨RTX 4090, RTX 3090⁩' },
    { vram: '⁨32 GB⁩', model: '22-32B بدقة كاملة، أو بطاقة واحدة في نظام مزدوج ⁨GPU⁩ لـ70B', gpu: '⁨RTX 5090⁩' },
    { vram: '⁨48 GB⁩', model: 'نماذج ⁨70B⁩ بتكميم ⁨Q4⁩ (~⁨42 GB⁩)؛ لا يتسع ⁨Q5⁩ (~⁨50 GB⁩)', gpu: '⁨2x RTX 4090, RTX 6000 Ada⁩' },
  ],
}

export const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum connects to your local LLM (Ollama, LM Studio, Jan AI) and dispatches your prompt to 25+ cloud models simultaneously — compare local vs cloud results in one view.',
  de: 'PromptQuorum verbindet sich mit Ihrem lokalen LLM (Ollama, LM Studio, Jan AI) und sendet Ihren Prompt gleichzeitig an 25+ Cloud-Modelle — lokale vs. Cloud-Ergebnisse in einer Ansicht.',
  fr: 'PromptQuorum se connecte à votre LLM local (Ollama, LM Studio, Jan AI) et envoie votre prompt simultanément à plus de 25 modèles cloud — comparez les résultats locaux vs cloud en une vue.',
  ja: 'PromptQuorumはあなたのローカルLLM（Ollama、LM Studio、Jan AI）に接続し、プロンプトを25以上のクラウドモデルに同時に送信します。ローカルとクラウドの結果を一画面で比較できます。',
  zh: 'PromptQuorum连接到您的本地LLM（Ollama、LM Studio、Jan AI），并同时将提示词发送给25+个云模型——在一个视图中比较本地与云端结果。',
  es: 'PromptQuorum se conecta a tu LLM local (Ollama, LM Studio, Jan AI) y envía tu prompt simultáneamente a más de 25 modelos cloud — compara resultados locales vs cloud en una sola vista.',
  pt: 'O PromptQuorum se conecta ao seu LLM local (Ollama, LM Studio, Jan AI) e envia seu prompt simultaneamente para mais de 25 modelos na cloud — compare os resultados locais vs cloud em uma única tela.',
  ko: 'PromptQuorum은 귀하의 로컬 LLM(Ollama, LM Studio, Jan AI)에 연결하여 프롬프트를 25개 이상의 클라우드 모델에 동시에 전송합니다. 로컬과 클라우드 결과를 한 화면에서 비교하세요.',
  ar: 'PromptQuorum يتصل بنموذجك اللغوي المحلي (⁨Ollama⁩، ⁨LM Studio⁩، ⁨Jan AI⁩) ويرسل مطالبتك إلى أكثر من 25 نموذجًا سحابيًا في وقت واحد — قارن نتائج المحلي والسحابي في شاشة واحدة.',
}

export const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
  es: 'Probar PromptQuorum gratis →',
  pt: 'Experimente o PromptQuorum grátis →',
  ko: 'PromptQuorum 무료로 사용해 보기 →',
  ar: 'جرّب PromptQuorum مجانًا ←',
}

export const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页', es: '← Inicio', pt: '← Início', ko: '← 홈', ar: '→ الرئيسية',
}

export const THEME_LABELS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Getting Started: How Do You Run Your First Local LLM?',
    de: 'Erste Schritte: Wie starten Sie Ihr erstes lokales LLM?',
    fr: 'Premiers pas : Comment exécuter votre premier LLM local ?',
    ja: 'はじめに：最初のローカルLLMをどう実行するか？',
    zh: '入门：如何运行您的第一个本地LLM？',
    es: 'Primeros pasos: ¿Cómo ejecutar tu primer LLM local?',
    pt: 'Primeiros passos: Como executar seu primeiro LLM local?',
    ko: '시작하기: 첫 번째 로컬 LLM을 어떻게 실행하나요?',
    ar: 'البدء: كيف تشغّل أول ⁨LLM⁩ محلي لك؟',
  },
  'best-models': {
    en: 'Models by Use Case: Which Local LLM Should You Actually Use?',
    de: 'Modelle nach Anwendungsfall: Welches lokale LLM sollten Sie wirklich verwenden?',
    fr: 'Modèles par cas d\'usage : Quel LLM local devriez-vous vraiment utiliser ?',
    ja: 'ユースケース別モデル：実際にどのローカルLLMを使うべきか？',
    zh: '按用例分类的模型：您实际上应该使用哪个本地LLM？',
    es: 'Modelos por caso de uso: ¿Qué LLM local deberías usar?',
    pt: 'Modelos por caso de uso: Qual LLM local você deve realmente usar?',
    ko: '사용 사례별 모델: 실제로 어떤 로컬 LLM을 사용해야 하나요?',
    ar: 'النماذج حسب حالة الاستخدام: أي ⁨LLM⁩ محلي عليك استخدامه فعليًا؟',
  },
  'tools-interfaces': {
    en: 'Tools & Interfaces: Which Software Gets You Running Fastest?',
    de: 'Tools & Interfaces: Welche Software bringt Sie am schnellsten zum Start?',
    fr: 'Outils et interfaces : Quel logiciel vous fait démarrer le plus vite ?',
    ja: 'ツールとインターフェース：どのソフトウェアが最も速く起動できるか？',
    zh: '工具与界面：哪款软件让您启动最快？',
    es: 'Herramientas e interfaces: ¿Qué software te pone en marcha más rápido?',
    pt: 'Ferramentas e interfaces: Qual software coloca você em funcionamento mais rápido?',
    ko: '도구 및 인터페이스: 어떤 소프트웨어가 가장 빠르게 시작할 수 있나요?',
    ar: 'الأدوات والواجهات: أي برنامج يشغّلك بأسرع وقت؟',
  },
  'hardware-performance': {
    en: 'Hardware & Performance: What Do You Actually Need to Run Local LLMs?',
    de: 'Hardware & Leistung: Was brauchen Sie wirklich für lokale LLMs?',
    fr: 'Matériel et performances : De quoi avez-vous vraiment besoin pour les LLMs locaux ?',
    ja: 'ハードウェアとパフォーマンス：ローカルLLMに本当に必要なものは？',
    zh: '硬件与性能：运行本地LLM您真正需要什么？',
    es: 'Hardware y rendimiento: ¿Qué necesitas realmente para LLMs locales?',
    pt: 'Hardware e desempenho: O que você realmente precisa para executar LLMs locais?',
    ko: '하드웨어 및 성능: 로컬 LLM 실행에 실제로 필요한 것은 무엇인가요?',
    ar: 'الأجهزة والأداء: ما الذي تحتاجه فعليًا لتشغيل ⁨LLM⁩ محلية؟',
  },
  'advanced-techniques': {
    en: 'Advanced Techniques: How Do You Go Beyond Basic Chat?',
    de: 'Fortgeschrittene Techniken: Wie gehen Sie über einfachen Chat hinaus?',
    fr: 'Techniques avancées : Comment aller au-delà du chat de base ?',
    ja: '高度なテクニック：基本的なチャット以上のことをどうするか？',
    zh: '高级技术：如何超越基本聊天？',
    es: 'Técnicas avanzadas: ¿Cómo ir más allá del chat básico?',
    pt: 'Técnicas avançadas: Como ir além do chat básico?',
    ko: '고급 기법: 기본 채팅을 넘어 어떻게 활용하나요?',
    ar: 'تقنيات متقدمة: كيف تتجاوز المحادثة الأساسية؟',
  },
  enterprise: {
    en: 'Enterprise: How Do Organizations Deploy Local LLMs at Scale?',
    de: 'Enterprise: Wie setzen Organisationen lokale LLMs im großen Maßstab ein?',
    fr: 'Entreprise : Comment les organisations déploient-elles des LLMs locaux à grande échelle ?',
    ja: 'エンタープライズ：組織はローカルLLMをどのようにスケールデプロイするか？',
    zh: '企业：组织如何大规模部署本地LLM？',
    es: 'Empresas: ¿Cómo despliegan organizaciones LLMs locales a escala?',
    pt: 'Enterprise: Como as organizações implantam LLMs locais em escala?',
    ko: '엔터프라이즈: 조직에서 로컬 LLM을 대규모로 배포하는 방법은?',
  },
  'gpu-buying-guides': {
    en: 'GPU Buying Guides: Which GPU Should You Buy for Local LLMs?',
    de: 'GPU-Kaufratgeber: Welche GPU sollten Sie für lokale LLMs kaufen?',
    fr: 'Guides d\'achat de GPU : Quelle GPU devriez-vous acheter pour les LLMs locaux ?',
    ja: 'GPU購入ガイド：ローカルLLM用にどのGPUを購入すべきか？',
    zh: 'GPU购买指南：您应该为本地LLM购买哪个GPU？',
    es: 'Guías de compra de GPU: ¿Qué GPU comprar para LLMs locales?',
    pt: 'Guias de compra de GPU: Qual GPU você deve comprar para LLMs locais?',
    ko: 'GPU 구매 가이드: 로컬 LLM용으로 어떤 GPU를 구매해야 하나요?',
    ar: 'أدلة شراء ⁨GPU⁩: أي بطاقة يجب أن تشتريها للنماذج المحلية؟',
  },
  'hardware-setups': {
    en: 'Hardware Setups: What Computer Do You Need for Local LLMs?',
    de: 'Hardware-Setups: Welchen Computer brauchen Sie für lokale LLMs?',
    fr: 'Configurations matérielles : Quel ordinateur avez-vous besoin pour les LLMs locaux ?',
    ja: 'ハードウェアセットアップ：ローカルLLM用にどのコンピュータが必要か？',
    zh: '硬件设置：为本地LLM您需要什么计算机？',
    es: 'Configuraciones de hardware: ¿Qué equipo necesitas para LLMs locales?',
    pt: 'Configurações de hardware: Qual computador você precisa para LLMs locais?',
    ko: '하드웨어 설정: 로컬 LLM을 위해 어떤 컴퓨터가 필요한가요?',
    ar: 'إعدادات الأجهزة: أي جهاز تحتاجه للنماذج المحلية؟',
  },
  'privacy-business': {
    en: 'Privacy & Business: How Do You Secure Local LLMs for Organizations?',
    de: 'Datenschutz & Unternehmen: Wie sichern Sie lokale LLMs für Organisationen?',
    fr: 'Confidentialité & Entreprise : Comment sécuriser les LLMs locaux pour les organisations ?',
    ja: 'プライバシーとビジネス：組織向けにローカルLLMをどのように保護するか？',
    zh: '隐私与业务：您如何为组织保护本地LLM？',
    es: 'Privacidad y empresa: ¿Cómo asegurar LLMs locales para organizaciones?',
    pt: 'Privacidade e negócios: Como proteger LLMs locais para organizações?',
    ko: '개인 정보 보호 및 비즈니스: 조직을 위해 로컬 LLM을 어떻게 보호하나요?',
    ar: 'الخصوصية والأعمال: كيف تؤمّن النماذج المحلية للمؤسسات؟',
  },
  'cost-comparisons': {
    en: 'Cost & Comparisons: Local vs Cloud vs Subscriptions—What\'s Cheaper?',
    de: 'Kosten & Vergleiche: Lokal vs Cloud vs Abos—Was ist günstiger?',
    fr: 'Coûts et comparaisons : Local vs Cloud vs Abonnements—Qu\'est-ce qui est moins cher ?',
    ja: 'コストと比較：ローカルvsクラウドvsサブスク—どれが安いか？',
    zh: '成本与比较：本地vs云vs订阅—哪个更便宜？',
    es: 'Costes y comparativas: Local vs cloud vs suscripciones — ¿qué es más barato?',
    pt: 'Custos e comparativos: Local vs cloud vs assinaturas — o que é mais barato?',
    ko: '비용 및 비교: 로컬 vs 클라우드 vs 구독 — 어떤 것이 더 저렴한가요?',
    ar: 'التكلفة والمقارنات: محلي مقابل سحابي مقابل الاشتراكات — أيهما أرخص؟',
  },
  'apple-silicon': {
    en: 'Apple Silicon: How Do M-Series Macs Run Local LLMs?',
    de: 'Apple Silicon: Wie führen Macs mit M-Chips lokale LLMs aus?',
    fr: 'Apple Silicon : Comment les Mac à puce M exécutent-ils des LLMs locaux ?',
    ja: 'Apple Silicon：M シリーズ Mac はどのようにローカル LLM を実行するか？',
    zh: 'Apple 芯片：M 系列 Mac 如何运行本地 LLM？',
    es: 'Apple Silicon: ¿Cómo ejecutan los Mac con chips M los LLMs locales?',
    pt: 'Apple Silicon: Como os Macs com chips M executam LLMs locais?',
    ko: 'Apple 실리콘: M 시리즈 Mac은 로컬 LLM을 어떻게 실행하나요?',
    ar: 'Apple Silicon: كيف تشغّل أجهزة Mac ذات شريحة M نماذج LLM محلية؟',
  },
  'enterprise-compliance': {
    en: 'Enterprise & Compliance: How Do Businesses Deploy and Govern Local LLMs?',
    de: 'Enterprise & Compliance: Wie setzen Unternehmen lokale LLMs ein und regeln sie?',
    fr: 'Entreprise et conformité : Comment les entreprises déploient-elles et encadrent-elles les LLMs locaux ?',
    ja: 'エンタープライズとコンプライアンス：企業はローカル LLM をどう導入し統制するか？',
    zh: '企业与合规：企业如何部署并治理本地LLM？',
    es: 'Empresa y cumplimiento: ¿Cómo despliegan y gobiernan las empresas los LLMs locales?',
    pt: 'Empresa e conformidade: Como as empresas implantam e governam LLMs locais?',
    ko: '엔터프라이즈 및 컴플라이언스: 기업은 로컬 LLM을 어떻게 도입하고 관리하나요?',
    ar: 'المؤسسات والامتثال: كيف تنشر الشركات نماذج LLM المحلية وتحكم استخدامها؟',
  },
}

export const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Zero-to-running in under 10 minutes. OS-specific installation guides, first-model walkthroughs, and a privacy-first setup checklist for beginners. Ollama installs with a single command on macOS, Windows, and Linux. For 8 GB RAM, start with Llama 3.2 3B (Q4, ~2 GB) using `ollama pull llama3.2:3b`.',
    de: 'Von null zu lauffähig in unter 10 Minuten. OS-spezifische Installationsleitfäden, erste Schritte mit Modellen und eine Datenschutz-erste Checkliste für Anfänger. Ollama installiert sich mit einem einzigen Befehl auf macOS, Windows und Linux. Bei 8 GB RAM beginnen Sie mit Llama 3.2 3B (Q4, ~2 GB) mit dem Befehl `ollama pull llama3.2:3b`.',
    fr: 'De zéro à prêt en moins de 10 minutes. Guides d\'installation spécifiques à l\'OS, démarrage avec les premiers modèles et liste de contrôle de configuration respectueuse de la vie privée. Ollama s\'installe en une seule commande sur macOS, Windows et Linux. Pour 8 GB de RAM, commencez avec Llama 3.2 3B (Q4, ~2 GB).',
    ja: 'ゼロから起動まで10分以下。OS固有のインストールガイド、最初のモデルチュートリアル、プライバシーファースト設定チェックリスト。OllamaはmacOS、Windows、Linuxで1つのコマンドでインストールできます。8 GB RAMの場合、Llama 3.2 3B（Q4、約2 GB）から始めてください。',
    zh: '从零开始到运行，只需10分钟以内。提供特定操作系统的安装指南、首次模型演练和隐私优先的设置检查清单。Ollama可在macOS、Windows和Linux上用一条命令安装。8 GB RAM时，从Llama 3.2 3B（Q4，约2 GB）开始。',
    es: 'De cero a funcionando en menos de 10 minutos. Guías de instalación por sistema operativo, primeros pasos con modelos y lista de verificación de configuración orientada a la privacidad. Ollama se instala con un solo comando en macOS, Windows y Linux. Con 8 GB de RAM, empieza con Llama 3.2 3B (Q4, ~2 GB) usando `ollama pull llama3.2:3b`.',
    pt: 'Do zero ao funcionamento em menos de 10 minutos. Guias de instalação por sistema operacional, tutoriais do primeiro modelo e um checklist de configuração com foco em privacidade para iniciantes. O Ollama é instalado com um único comando no macOS, Windows e Linux. Com 8 GB de RAM, comece com o Llama 3.2 3B (Q4, ~2 GB) usando `ollama pull llama3.2:3b`.',
    ko: '10분 이내에 제로에서 실행까지. OS별 설치 가이드, 첫 모델 실행 안내, 초보자를 위한 개인 정보 보호 우선 설정 체크리스트. Ollama는 macOS, Windows, Linux에서 단 하나의 명령으로 설치됩니다. 8 GB RAM의 경우 `ollama pull llama3.2:3b`로 Llama 3.2 3B(Q4, ~2 GB)를 시작하세요.',
    ar: 'من الصفر إلى التشغيل في أقل من 10 دقائق. أدلة تثبيت خاصة بكل نظام تشغيل، وشروحات لأول نموذج، وقائمة تحقق إعداد تراعي الخصوصية للمبتدئين. يُثبَّت ⁨Ollama⁩ بأمر واحد على ⁨macOS⁩ و⁨Windows⁩ و⁨Linux⁩. لذاكرة ⁨8 GB RAM⁩، ابدأ بـ⁨Llama 3.2 3B⁩ (⁨Q4⁩، ~2 GB) عبر الأمر `ollama pull llama3.2:3b`.',
  },
  'best-models': {
    en: 'Model rankings, benchmark comparisons, and use-case picks by memory tier. Current picks: Qwen3.8-27B for 24 GB cards, Gemma 4 12B for 12 GB, gpt-oss-20b for 16 GB, Qwen3 8B or Qwen3.5 4B for 8 GB machines, and Phi-4 Mini for CPU-only setups. Benchmark scores are vendor-reported unless marked as measured.',
    de: 'Modellbewertungen, Benchmark-Vergleiche und Empfehlungen nach Speicherklasse. Aktuelle Empfehlungen: Qwen3.8-27B für 24-GB-Karten, Gemma 4 12B für 12 GB, gpt-oss-20b für 16 GB, Qwen3 8B oder Qwen3.5 4B für 8-GB-Rechner und Phi-4 Mini für reinen CPU-Betrieb. Benchmark-Werte stammen von den Herstellern, sofern nicht als selbst gemessen gekennzeichnet.',
    fr: 'Classements de modèles, comparaisons de benchmarks et recommandations par palier de mémoire. Choix actuels : Qwen3.8-27B pour les cartes de 24 Go, Gemma 4 12B pour 12 Go, gpt-oss-20b pour 16 Go, Qwen3 8B ou Qwen3.5 4B pour les machines de 8 Go, et Phi-4 Mini pour le CPU seul. Les scores de benchmark sont annoncés par les éditeurs, sauf mention « mesuré ».',
    ja: 'モデルのランキング、ベンチマーク比較、メモリ容量別のおすすめ。現在の推奨：24 GBカードにはQwen3.8-27B、12 GBにはGemma 4 12B、16 GBにはgpt-oss-20b、8 GBマシンにはQwen3 8BまたはQwen3.5 4B、CPUのみの構成にはPhi-4 Mini。ベンチマーク値は、実測と明記したものを除き、メーカー公表の数値です。',
    zh: '模型排名、基准对比以及按内存档位给出的推荐。当前推荐：24 GB显卡用Qwen3.8-27B，12 GB用Gemma 4 12B，16 GB用gpt-oss-20b，8 GB设备用Qwen3 8B或Qwen3.5 4B，仅CPU用Phi-4 Mini。基准分数除标明为实测外，均为厂商公布的数值。',
    es: 'Clasificaciones de modelos, comparativas de benchmarks y recomendaciones por nivel de memoria. Opciones actuales: Qwen3.8-27B para tarjetas de 24 GB, Gemma 4 12B para 12 GB, gpt-oss-20b para 16 GB, Qwen3 8B o Qwen3.5 4B para equipos de 8 GB y Phi-4 Mini para solo CPU. Las puntuaciones de benchmark son las que publican los fabricantes, salvo que se indique que son medidas.',
    pt: 'Rankings de modelos, comparativos de benchmarks e recomendações por faixa de memória. Escolhas atuais: Qwen3.8-27B para placas de 24 GB, Gemma 4 12B para 12 GB, gpt-oss-20b para 16 GB, Qwen3 8B ou Qwen3.5 4B para máquinas de 8 GB e Phi-4 Mini para só CPU. As pontuações de benchmark são as divulgadas pelos fabricantes, salvo indicação de que foram medidas.',
    ko: '모델 순위, 벤치마크 비교, 메모리 구간별 추천. 현재 추천: 24 GB 카드에는 Qwen3.8-27B, 12 GB에는 Gemma 4 12B, 16 GB에는 gpt-oss-20b, 8 GB 기기에는 Qwen3 8B 또는 Qwen3.5 4B, CPU 전용에는 Phi-4 Mini입니다. 벤치마크 점수는 직접 측정했다고 표시한 경우를 제외하고 제조사가 발표한 값입니다.',
    ar: 'تصنيفات النماذج، ومقارنات معايير الأداء، وتوصيات بحسب فئة الذاكرة. الخيارات الحالية: ⁨Qwen3.8-27B⁩ لبطاقات ⁨24 GB⁩، و⁨Gemma 4 12B⁩ لذاكرة ⁨12 GB⁩، و⁨gpt-oss-20b⁩ لذاكرة ⁨16 GB⁩، و⁨Qwen3 8B⁩ أو ⁨Qwen3.5 4B⁩ لأجهزة ⁨8 GB⁩، و⁨Phi-4 Mini⁩ لأنظمة ⁨CPU⁩ فقط. نتائج المعايير تعلنها الشركات المطوّرة ما لم يُذكر أنها مقيسة.',
  },
  'tools-interfaces': {
    en: 'Ollama and LM Studio run many open models on macOS, Windows, and Linux. Ollama is CLI-first with a REST API; LM Studio provides a graphical interface with a built-in model browser. Guides cover both tools plus vLLM, llama.cpp, Open WebUI, and IDE integrations.',
    de: 'Ollama und LM Studio führen viele offene Modelle unter macOS, Windows und Linux aus. Ollama ist CLI-first mit REST-API; LM Studio bietet eine grafische Oberfläche mit integriertem Modellbrowser. Die Leitfäden behandeln beide Tools sowie vLLM, llama.cpp, Open WebUI und IDE-Integrationen.',
    fr: 'Ollama et LM Studio exécutent de nombreux modèles ouverts sous macOS, Windows et Linux. Ollama privilégie la ligne de commande avec une API REST ; LM Studio propose une interface graphique avec un navigateur de modèles intégré. Les guides couvrent les deux outils ainsi que vLLM, llama.cpp, Open WebUI et les intégrations IDE.',
    ja: 'OllamaとLM Studioは、macOS・Windows・Linux上で多くのオープンモデルを実行できます。OllamaはCLI中心でREST APIを備え、LM Studioはモデルブラウザ内蔵のGUIを提供します。ガイドでは両ツールに加え、vLLM、llama.cpp、Open WebUI、IDE連携を扱います。',
    zh: 'Ollama和LM Studio可在macOS、Windows和Linux上运行许多开放模型。Ollama以命令行为主并提供REST API；LM Studio提供带内置模型浏览器的图形界面。指南涵盖这两款工具，以及vLLM、llama.cpp、Open WebUI和IDE集成。',
    es: 'Ollama y LM Studio ejecutan muchos modelos abiertos en macOS, Windows y Linux. Ollama se centra en la línea de comandos con una API REST; LM Studio ofrece una interfaz gráfica con explorador de modelos integrado. Las guías cubren ambas herramientas, además de vLLM, llama.cpp, Open WebUI e integraciones con IDE.',
    pt: 'Ollama e LM Studio rodam muitos modelos abertos no macOS, Windows e Linux. O Ollama prioriza a linha de comando com uma API REST; o LM Studio oferece uma interface gráfica com navegador de modelos integrado. Os guias cobrem as duas ferramentas, além de vLLM, llama.cpp, Open WebUI e integrações com IDE.',
    ko: 'Ollama와 LM Studio는 macOS, Windows, Linux에서 다양한 오픈 모델을 실행합니다. Ollama는 CLI 중심이며 REST API를 제공하고, LM Studio는 모델 브라우저가 내장된 그래픽 인터페이스를 제공합니다. 가이드는 두 도구와 함께 vLLM, llama.cpp, Open WebUI, IDE 연동을 다룹니다.',
    ar: 'يشغّل ⁨Ollama⁩ و⁨LM Studio⁩ نماذج مفتوحة كثيرة على ⁨macOS⁩ و⁨Windows⁩ و⁨Linux.⁩ يعتمد ⁨Ollama⁩ على سطر الأوامر مع واجهة ⁨REST API⁩، بينما يوفّر ⁨LM Studio⁩ واجهة رسومية مع متصفّح نماذج مدمج. تغطي الأدلة الأداتين إضافةً إلى ⁨vLLM⁩ و⁨llama.cpp⁩ و⁨Open WebUI⁩ وتكاملات بيئات التطوير.',
  },
  'hardware-performance': {
    en: 'VRAM is the primary constraint for local LLMs. A 7B model at Q4_K_M needs about 4–5 GB; a 70B model needs about 42 GB. Guides cover GPU selection (RTX 4070 Ti to RTX 5090), Apple Silicon, budget builds, and VRAM calculation for any model. See also: **[Fastest Local LLMs for Low-End PCs](/local-llms/fastest-local-llms-low-end-pcs)** for CPU-only, 4 GB, and 8 GB VRAM speed benchmarks.',
    de: 'VRAM ist die wichtigste Grenze für lokale LLMs. Ein 7B-Modell in Q4_K_M braucht etwa 4–5 GB, ein 70B-Modell etwa 42 GB. Die Leitfäden behandeln die GPU-Auswahl (RTX 4070 Ti bis RTX 5090), Apple Silicon, Budget-Builds und die VRAM-Berechnung für jedes Modell.',
    fr: 'La VRAM est la principale contrainte des LLMs locaux. Un modèle 7B en Q4_K_M demande environ 4 à 5 Go ; un modèle 70B environ 42 Go. Les guides couvrent le choix du GPU (de la RTX 4070 Ti à la RTX 5090), Apple Silicon, les configurations économiques et le calcul de la VRAM pour tout modèle.',
    ja: 'ローカルLLMで最大の制約はVRAMです。Q4_K_Mの7Bモデルには約4〜5 GB、70Bモデルには約42 GBが必要です。ガイドでは、GPUの選び方（RTX 4070 TiからRTX 5090まで）、Apple Silicon、低予算構成、あらゆるモデルのVRAM計算を扱います。',
    zh: 'VRAM是本地LLM的首要限制。Q4_K_M量化的7B模型约需4–5 GB，70B模型约需42 GB。指南涵盖GPU选择（从RTX 4070 Ti到RTX 5090）、Apple Silicon、预算配置，以及任意模型的VRAM计算。',
    es: 'La VRAM es la restricción principal para los LLMs locales. Un modelo 7B en Q4_K_M necesita unos 4–5 GB; un modelo 70B, unos 42 GB. Las guías cubren la selección de GPU (de la RTX 4070 Ti a la RTX 5090), Apple Silicon, configuraciones económicas y el cálculo de VRAM para cualquier modelo.',
    pt: 'A VRAM é a principal restrição para os LLMs locais. Um modelo 7B em Q4_K_M precisa de cerca de 4–5 GB; um modelo 70B, de cerca de 42 GB. Os guias cobrem a escolha de GPU (da RTX 4070 Ti à RTX 5090), Apple Silicon, montagens econômicas e o cálculo de VRAM para qualquer modelo.',
    ko: 'VRAM은 로컬 LLM의 가장 큰 제약입니다. Q4_K_M의 7B 모델에는 약 4~5 GB, 70B 모델에는 약 42 GB가 필요합니다. 가이드는 GPU 선택(RTX 4070 Ti부터 RTX 5090까지), Apple Silicon, 예산형 구성, 모든 모델의 VRAM 계산을 다룹니다.',
    ar: 'تُعدّ ⁨VRAM⁩ القيد الأساسي للنماذج المحلية. يحتاج نموذج ⁨7B⁩ بتكميم ⁨Q4_K_M⁩ إلى نحو 4-⁨5 GB⁩، ويحتاج نموذج ⁨70B⁩ إلى نحو ⁨42 GB.⁩ تغطي الأدلة اختيار ⁨GPU⁩ (من ⁨RTX 4070 Ti⁩ إلى ⁨RTX 5090⁩)، و⁨Apple Silicon⁩، والتجميعات الاقتصادية، وحساب ⁨VRAM⁩ لأي نموذج.',
  },
  'advanced-techniques': {
    en: 'Fine-tuning, RAG pipelines, quantization deep-dives, distillation, model merging, and prompt optimization for production use. LoRA and QLoRA cut fine-tuning memory needs substantially compared with full fine-tuning. Local RAG workflows keep sensitive data on-premises while maintaining search quality.',
    de: 'Fine-Tuning, RAG-Pipelines, Quantisierungs-Deep-Dives, Destillation, Modell-Merging und Prompt-Optimierung für die Produktionsnutzung. LoRA und QLoRA senken den Speicherbedarf beim Fine-Tuning deutlich gegenüber vollständigem Fine-Tuning. Lokale RAG-Workflows halten sensible Daten vor Ort, während die Suchqualität erhalten bleibt.',
    fr: 'Fine-tuning, pipelines RAG, plongées approfondies de quantification, distillation, fusion de modèles et optimisation de prompts pour utilisation en production. LoRA et QLoRA réduisent nettement les besoins en mémoire du fine-tuning par rapport à un fine-tuning complet. Les workflows RAG locaux maintiennent les données sensibles sur site tout en maintenant la qualité de la recherche.',
    ja: 'ファインチューニング、RAGパイプライン、量子化の深掘り、蒸留、モデルマージング、本番環境用のプロンプト最適化。LoRAとQLoRAは、フルファインチューニングに比べてメモリ要件を大きく減らします。ローカルRAGワークフローは、検索品質を維持しながら機密データをオンプレミスに保ちます。',
    zh: '微调、RAG管道、量化深度探讨、蒸馏、模型合并以及生产用途的提示词优化。LoRA和QLoRA相比全量微调可大幅降低显存需求。本地RAG工作流在保持搜索质量的同时将敏感数据保留在本地。',
    es: 'Fine-tuning, pipelines RAG, análisis profundo de cuantización, destilación, fusión de modelos y optimización de prompts para uso en producción. LoRA y QLoRA reducen de forma notable la memoria necesaria para el fine-tuning frente al fine-tuning completo. Los flujos de trabajo RAG locales mantienen los datos sensibles en local sin perder calidad de búsqueda.',
    pt: 'Fine-tuning, pipelines RAG, análise profunda de quantização, destilação, fusão de modelos e otimização de prompts para uso em produção. LoRA e QLoRA reduzem bastante a memória necessária para o fine-tuning em comparação com o fine-tuning completo. Os fluxos de trabalho RAG locais mantêm os dados sensíveis no próprio ambiente sem perder qualidade de busca.',
    ko: '파인튜닝, RAG 파이프라인, 양자화 심화 분석, 증류, 모델 병합, 프로덕션 사용을 위한 프롬프트 최적화. LoRA와 QLoRA는 전체 파인튜닝에 비해 필요한 메모리를 크게 줄입니다. 로컬 RAG 워크플로우는 검색 품질을 유지하면서 민감한 데이터를 온프레미스에 보관합니다.',
    ar: 'الضبط الدقيق، وخطوط ⁨RAG⁩، وتحليلات عميقة للتكميم، والتقطير، ودمج النماذج، وتحسين المطالبات للاستخدام الإنتاجي. يخفّض ⁨LoRA⁩ و⁨QLoRA⁩ متطلبات ذاكرة الضبط الدقيق كثيرًا مقارنةً بالضبط الدقيق الكامل. تُبقي مسارات ⁨RAG⁩ المحلية البيانات الحساسة داخل المنشأة مع الحفاظ على جودة البحث.',
  },
  'enterprise': {
    en: 'Multi-GPU setups, inference optimization, model serving frameworks (vLLM, TensorRT-LLM), monitoring and observability, cost audits, and regulatory compliance. Running models locally avoids sending data to a third-party API and can lower licensing costs compared with SaaS, depending on usage; compliance still depends on your whole setup.',
    de: 'Multi-GPU-Setups, Inferenz-Optimierung, Serving-Frameworks (vLLM, TensorRT-LLM), Monitoring und Observability, Kostenprüfungen und regulatorische Compliance. Der lokale Betrieb vermeidet das Senden von Daten an eine Drittanbieter-API und kann je nach Nutzung die Lizenzkosten gegenüber SaaS senken; die Compliance hängt weiterhin von Ihrem gesamten Setup ab.',
    fr: 'Configurations multi-GPU, optimisation de l\'inférence, frameworks de service de modèles (vLLM, TensorRT-LLM), supervision et observabilité, audits de coûts et conformité réglementaire. L\'exécution locale évite d\'envoyer des données à une API tierce et peut réduire les coûts de licence par rapport au SaaS selon l\'usage ; la conformité dépend toujours de l\'ensemble de votre configuration.',
    ja: 'マルチGPU構成、推論の最適化、モデル提供フレームワーク（vLLM、TensorRT-LLM）、監視と可観測性、コスト監査、規制対応。ローカルで実行すればデータをサードパーティAPIに送らずに済み、使い方によってはSaaSよりライセンス費用を抑えられます。ただしコンプライアンスは構成全体に左右されます。',
    zh: '多GPU部署、推理优化、模型服务框架（vLLM、TensorRT-LLM）、监控与可观测性、成本审计和合规。本地运行可避免把数据发送给第三方API，并且视使用情况可能比SaaS更省授权费用；合规性仍取决于您的整体配置。',
    es: 'Configuraciones multi-GPU, optimización de inferencia, frameworks de servicio de modelos (vLLM, TensorRT-LLM), monitorización y observabilidad, auditorías de costes y cumplimiento normativo. Ejecutar los modelos en local evita enviar datos a una API de terceros y, según el uso, puede reducir los costes de licencia frente al SaaS; el cumplimiento sigue dependiendo de toda tu configuración.',
    pt: 'Configurações multi-GPU, otimização de inferência, frameworks de serviço de modelos (vLLM, TensorRT-LLM), monitoramento e observabilidade, auditorias de custos e conformidade regulatória. Rodar os modelos localmente evita enviar dados a uma API de terceiros e, conforme o uso, pode reduzir os custos de licenciamento em relação ao SaaS; a conformidade continua dependendo de toda a sua configuração.',
    ko: '멀티 GPU 구성, 추론 최적화, 모델 서빙 프레임워크(vLLM, TensorRT-LLM), 모니터링과 관측성, 비용 감사, 규제 준수. 로컬 실행은 데이터를 제3자 API로 보내지 않아도 되고 사용량에 따라 SaaS보다 라이선스 비용을 줄일 수 있지만, 규정 준수 여부는 전체 구성에 달려 있습니다.',
    ar: 'إعدادات متعددة ⁨GPU⁩، وتحسين الاستدلال، وأطر تقديم النماذج (⁨vLLM⁩ و⁨TensorRT-LLM⁩)، والمراقبة، وتدقيق التكاليف، والامتثال التنظيمي. يتيح التشغيل المحلي تجنّب إرسال البيانات إلى واجهة ⁨API⁩ تابعة لطرف ثالث، وقد يخفّض تكاليف الترخيص مقارنة بـ⁨SaaS⁩ بحسب الاستخدام؛ أما الامتثال فيظل متوقفًا على إعدادك بالكامل.',
  },
  'gpu-buying-guides': {
    en: 'GPU selection by budget and use case, cost per token, power efficiency, thermal design, second-hand marketplace comparisons, and warranty trade-offs. A 24 GB card such as the RTX 4090 suits 27B-class models; running a 70B model takes about 48 GB. Prices have moved with the 2026 memory shortage, so each guide lists current figures.',
    de: 'GPU-Auswahl nach Budget und Anwendungsfall, Kosten pro Token, Energieeffizienz, thermisches Design, Vergleiche von Gebrauchtmärkten und Garantie-Abwägungen. Eine 24-GB-Karte wie die RTX 4090 eignet sich für Modelle der 27B-Klasse; ein 70B-Modell braucht etwa 48 GB. Die Preise haben sich mit der Speicherknappheit 2026 verschoben, daher nennt jeder Guide aktuelle Werte.',
    fr: 'Choix du GPU selon le budget et l\'usage, coût par token, efficacité énergétique, conception thermique, comparaisons de marchés de l\'occasion et compromis de garantie. Une carte de 24 Go comme la RTX 4090 convient aux modèles de classe 27B ; un modèle 70B demande environ 48 Go. Les prix ont évolué avec la pénurie de mémoire de 2026 : chaque guide indique les chiffres actuels.',
    ja: '予算と用途に応じたGPU選び、トークンあたりのコスト、電力効率、熱設計、中古市場の比較、保証面のトレードオフ。RTX 4090のような24 GBカードは27Bクラスのモデルに向いており、70Bモデルには約48 GBが必要です。2026年のメモリ不足で価格が変動しているため、各ガイドで最新の数値を示しています。',
    zh: '按预算和用途选择GPU、每Token成本、能效、散热设计、二手市场对比以及保修取舍。RTX 4090这类24 GB显卡适合27B级模型；运行70B模型约需48 GB。价格随2026年的内存短缺而变动，各篇指南会列出最新数据。',
    es: 'Selección de GPU según presupuesto y uso, coste por token, eficiencia energética, diseño térmico, comparativas del mercado de segunda mano y equilibrios de garantía. Una tarjeta de 24 GB como la RTX 4090 encaja con modelos de clase 27B; un modelo 70B necesita unos 48 GB. Los precios se han movido con la escasez de memoria de 2026, así que cada guía indica las cifras actuales.',
    pt: 'Escolha de GPU por orçamento e uso, custo por token, eficiência energética, projeto térmico, comparativos do mercado de usados e trade-offs de garantia. Uma placa de 24 GB como a RTX 4090 serve para modelos da classe 27B; um modelo 70B precisa de cerca de 48 GB. Os preços mudaram com a escassez de memória de 2026, então cada guia traz os valores atuais.',
    ko: '예산과 용도에 따른 GPU 선택, 토큰당 비용, 전력 효율, 열 설계, 중고 시장 비교, 보증 관련 득실. RTX 4090 같은 24 GB 카드는 27B급 모델에 적합하고, 70B 모델에는 약 48 GB가 필요합니다. 2026년 메모리 부족으로 가격이 변동했으므로 각 가이드에서 최신 수치를 안내합니다.',
    ar: 'اختيار ⁨GPU⁩ بحسب الميزانية وحالة الاستخدام، وتكلفة كل توكن، وكفاءة الطاقة، والتصميم الحراري، ومقارنات سوق المستعمل، ومفاضلات الضمان. تناسب بطاقة بذاكرة ⁨24 GB⁩ مثل ⁨RTX 4090⁩ نماذج فئة ⁨27B⁩، ويحتاج نموذج ⁨70B⁩ إلى نحو ⁨48 GB.⁩ تغيّرت الأسعار مع نقص الذاكرة في 2026، لذا يذكر كل دليل الأرقام الحالية.',
  },
  'hardware-setups': {
    en: 'Complete build guides for laptop, desktop, workstation, and server deployments. From single-GPU setups to multi-node clusters. Budget builds ($500–$1500), mid-range ($1500–$5000), and enterprise ($5000+) configurations with exact part lists and estimated throughput.',
    de: 'Vollständige Bauanleitungen für Laptop-, Desktop-, Workstation- und Server-Bereitstellungen. Von Single-GPU-Setups bis zu Multi-Node-Clustern. Budget-Builds ($500–$1500), Mid-Range ($1500–$5000) und Enterprise ($5000+) Konfigurationen mit exakten Teilelisten und geschätztem Durchsatz.',
    fr: 'Guides complets pour les déploiements portables, de bureau, de station de travail et de serveur. Des configurations GPU simples aux grappes multi-nœuds. Configurations budget ($500–$1500), milieu de gamme ($1500–$5000) et entreprise ($5000+) avec listes de pièces exactes et débit estimé.',
    ja: 'ラップトップ、デスクトップ、ワークステーション、サーバーデプロイメント用の完全な構築ガイド。シングルGPUセットアップからマルチノードクラスターまで。予算構築($500–$1500)、ミッドレンジ($1500–$5000)、エンタープライズ($5000+)構成、正確なパーツリストと推定スループット。',
    zh: '笔记本电脑、台式机、工作站和服务器部署的完整构建指南。从单GPU设置到多节点集群。预算构建（$500–$1500）、中档（$1500–$5000）和企业（$5000+）配置，附带精确的零件清单和估计吞吐量。',
    es: 'Guías completas para despliegues en portátil, escritorio, estación de trabajo y servidor. Desde configuraciones con una sola GPU hasta clústeres multinodo. Configuraciones de presupuesto ($500–$1500), gama media ($1500–$5000) y empresa ($5000+) con listas de piezas exactas y rendimiento estimado.',
    pt: 'Guias completos de build para implantações em notebook, desktop, workstation e servidor. De configurações com uma única GPU a clusters multinó. Builds econômicos ($500–$1500), intermediários ($1500–$5000) e enterprise ($5000+) com listas exatas de peças e throughput estimado.',
    ko: '노트북, 데스크탑, 워크스테이션, 서버 배포를 위한 완전한 빌드 가이드. 단일 GPU 설정부터 멀티 노드 클러스터까지. 정확한 부품 목록과 예상 처리량이 포함된 예산($500–$1500), 중간 범위($1500–$5000), 엔터프라이즈($5000+) 구성.',
    ar: 'أدلة بناء كاملة لأجهزة الحاسوب المحمولة وأجهزة سطح المكتب ومحطات العمل والخوادم. من إعداد بطاقة ⁨GPU⁩ واحدة إلى عناقيد متعددة العقد. تشكيلات بميزانية محدودة (500$-1500$)، ومتوسطة (1500$-5000$)، ومؤسسية (5000$+)، مع قوائم قطع دقيقة وإنتاجية متوقعة.',
  },
  'privacy-business': {
    en: 'On-premises deployment for privacy and compliance work (GDPR, HIPAA, APPI, CAC). Air-gapped setups and access logging. Local LLMs avoid API vendor lock-in, can reduce the compliance audit surface, and keep proprietary data off third-party servers; compliance itself depends on your whole setup.',
    de: 'On-Premises-Betrieb für Datenschutz- und Compliance-Arbeit (DSGVO, HIPAA, APPI, CAC). Air-gapped-Setups und Zugriffsprotokollierung. Lokale LLMs vermeiden API-Anbieterbindung, können den Prüfaufwand bei Compliance-Audits verringern und halten proprietäre Daten von Servern Dritter fern; die Compliance selbst hängt von Ihrem gesamten Setup ab.',
    fr: 'Déploiement sur site pour la confidentialité et la conformité (RGPD, HIPAA, APPI, CAC). Configurations isolées du réseau et journalisation des accès. Les LLMs locaux évitent la dépendance à un fournisseur d\'API, peuvent réduire le périmètre des audits de conformité et gardent les données propriétaires hors des serveurs tiers ; la conformité elle-même dépend de l\'ensemble de votre configuration.',
    ja: 'プライバシーとコンプライアンス対応のためのオンプレミス導入（GDPR、HIPAA、APPI、CAC）。エアギャップ構成とアクセスログ。ローカルLLMはAPIベンダーへのロックインを避け、コンプライアンス監査の対象範囲を減らせる場合があり、独自データをサードパーティのサーバーに置かずに済みます。ただしコンプライアンス自体は構成全体に左右されます。',
    zh: '面向隐私与合规工作的本地部署（GDPR、HIPAA、APPI、CAC）。隔离网络部署与访问日志。本地LLM可避免API供应商锁定，有可能缩小合规审计范围，并让专有数据留在第三方服务器之外；合规本身仍取决于您的整体配置。',
    es: 'Despliegue en local para trabajos de privacidad y cumplimiento (RGPD, HIPAA, APPI, CAC). Entornos aislados de la red y registro de accesos. Los LLMs locales evitan la dependencia de un proveedor de API, pueden reducir el alcance de las auditorías de cumplimiento y mantienen los datos propios fuera de servidores de terceros; el cumplimiento en sí depende de toda tu configuración.',
    pt: 'Implantação local para trabalhos de privacidade e conformidade (GDPR, HIPAA, APPI, CAC). Ambientes isolados da rede e registro de acessos. Os LLMs locais evitam a dependência de um fornecedor de API, podem reduzir o escopo das auditorias de conformidade e mantêm os dados proprietários fora de servidores de terceiros; a conformidade em si depende de toda a sua configuração.',
    ko: '개인정보 보호와 규정 준수 작업을 위한 온프레미스 도입(GDPR, HIPAA, APPI, CAC). 망 분리 구성과 접근 로깅. 로컬 LLM은 API 공급업체 종속을 피하고, 규정 준수 감사 범위를 줄일 수 있으며, 자체 데이터를 제3자 서버 밖에 둘 수 있습니다. 다만 규정 준수 자체는 전체 구성에 달려 있습니다.',
    ar: 'النشر المحلي لأعمال الخصوصية والامتثال (⁨GDPR⁩ و⁨HIPAA⁩ و⁨APPI⁩ و⁨CAC⁩). بيئات معزولة عن الشبكة وسجلّ للوصول. تتجنّب النماذج المحلية الارتباط بمزوّد ⁨API⁩ واحد، وقد تقلّص نطاق تدقيق الامتثال، وتُبقي البيانات الخاصة بعيدًا عن خوادم الأطراف الثالثة؛ أما الامتثال نفسه فيتوقف على إعدادك بالكامل.',
  },
  'cost-comparisons': {
    en: 'Break-even analysis: local vs cloud vs subscription models. Hidden SaaS costs: overage fees, enterprise seats, audit logs. Whether local hardware pays for itself depends mainly on usage hours per month; the calculators let you enter your own numbers.',
    de: 'Break-even-Analyse: lokal vs. Cloud vs. Abo-Modelle. Versteckte SaaS-Kosten: Überschreitungsgebühren, Enterprise-Seats, Audit-Logs. Ob sich lokale Hardware rechnet, hängt vor allem von den Nutzungsstunden pro Monat ab; die Rechner erlauben die Eingabe eigener Werte.',
    fr: 'Analyse du point d\'équilibre : local, cloud ou abonnement. Coûts SaaS cachés : dépassements, licences entreprise, journaux d\'audit. L\'amortissement du matériel local dépend surtout du nombre d\'heures d\'utilisation par mois ; les calculateurs permettent de saisir vos propres chiffres.',
    ja: '損益分岐点の分析：ローカル、クラウド、サブスクリプションの比較。SaaSの隠れたコスト：超過料金、エンタープライズ席、監査ログ。ローカルのハードウェアが元を取れるかは、主に月間の利用時間で決まります。計算ツールでご自身の数値を入力できます。',
    zh: '盈亏平衡分析：本地、云端与订阅模式对比。SaaS的隐性成本：超量费用、企业席位、审计日志。本地硬件能否回本主要取决于每月的使用时长；计算器允许您输入自己的数据。',
    es: 'Análisis del punto de equilibrio: local, cloud y suscripción. Costes ocultos del SaaS: cargos por exceso, licencias empresariales, registros de auditoría. Que el hardware local se amortice depende sobre todo de las horas de uso al mes; las calculadoras te permiten introducir tus propios números.',
    pt: 'Análise do ponto de equilíbrio: local, cloud e assinatura. Custos ocultos do SaaS: cobranças por excedente, licenças corporativas, logs de auditoria. Se o hardware local se paga depende principalmente das horas de uso por mês; as calculadoras permitem inserir os seus próprios números.',
    ko: '손익분기 분석: 로컬, 클라우드, 구독 모델 비교. SaaS의 숨은 비용: 초과 요금, 기업용 좌석, 감사 로그. 로컬 하드웨어가 비용을 회수하는지는 주로 월간 사용 시간에 달려 있으며, 계산기에서 직접 수치를 입력할 수 있습니다.',
    ar: 'تحليل نقطة التعادل: المحلي مقابل السحابي مقابل الاشتراكات. تكاليف ⁨SaaS⁩ الخفية: رسوم تجاوز الحد، ومقاعد المؤسسات، وسجلات التدقيق. يتوقف استرداد تكلفة الجهاز المحلي أساسًا على ساعات الاستخدام الشهرية؛ وتتيح لك الحاسبات إدخال أرقامك الخاصة.',
  },
  'apple-silicon': {
    en: 'Mac-specific guides for M-series Apple Silicon — unified memory sizing, MLX vs Ollama vs llama.cpp benchmarks, Whisper transcription on Metal, and Mac Mini/MacBook builds for local inference. Apple Silicon shares unified memory between CPU and GPU, so a 32 GB M-series Mac can run 30B-parameter models without a discrete GPU. MLX is Apple\'s own inference framework and is typically faster than llama.cpp on the same chip.',
    de: 'Mac-spezifische Leitfäden für Apple Silicon der M-Serie — Größenplanung für Unified Memory, Benchmarks von MLX gegenüber Ollama und llama.cpp, Whisper-Transkription über Metal sowie Mac-Mini- und MacBook-Builds für lokale Inferenz. Apple Silicon teilt sich Unified Memory zwischen CPU und GPU, sodass ein Mac der M-Serie mit 32 GB RAM 30B-Parameter-Modelle ohne dedizierte GPU ausführen kann. MLX ist Apples eigenes Inferenz-Framework und auf demselben Chip meist schneller als llama.cpp.',
    fr: 'Guides spécifiques aux Mac pour Apple Silicon de la série M — dimensionnement de la mémoire unifiée, benchmarks MLX face à Ollama et llama.cpp, transcription Whisper via Metal, et configurations Mac Mini/MacBook pour l\'inférence locale. Apple Silicon partage une mémoire unifiée entre le CPU et le GPU : un Mac de la série M avec 32 Go de RAM peut exécuter des modèles à 30 milliards de paramètres sans GPU dédié. MLX est le framework d\'inférence propre à Apple et se montre généralement plus rapide que llama.cpp sur la même puce.',
    ja: 'M シリーズ Apple Silicon 向けの Mac 専用ガイド — Unified Memory のサイジング、MLX と Ollama・llama.cpp のベンチマーク比較、Metal 上での Whisper 文字起こし、ローカル推論向けの Mac mini・MacBook 構成を扱います。Apple Silicon は CPU と GPU で Unified Memory を共有するため、32 GB RAM の M シリーズ Mac はディスクリート GPU なしで 300 億パラメータ級のモデルを実行できます。MLX は Apple 独自の推論フレームワークで、同じチップ上では llama.cpp より高速なことが一般的です。',
    zh: '面向 M 系列 Apple 芯片的 Mac 专属指南 — 统一内存容量规划、MLX 与 Ollama、llama.cpp 的基准对比、基于 Metal 的 Whisper 转录，以及用于本地推理的 Mac mini/MacBook 配置。Apple 芯片在 CPU 与 GPU 之间共享统一内存，因此配备 32 GB 内存的 M 系列 Mac 无需独立显卡即可运行 300 亿参数级模型。MLX 是苹果自研的推理框架，在同一芯片上通常比 llama.cpp 更快。',
    es: 'Guías específicas para Mac con Apple Silicon de la serie M — dimensionamiento de memoria unificada, comparativas de MLX frente a Ollama y llama.cpp, transcripción con Whisper sobre Metal, y configuraciones de Mac Mini/MacBook para inferencia local. Apple Silicon comparte memoria unificada entre CPU y GPU, por lo que un Mac de la serie M con 32 GB de RAM puede ejecutar modelos de 30 000 millones de parámetros sin GPU dedicada. MLX es el framework de inferencia propio de Apple y suele ser más rápido que llama.cpp en el mismo chip.',
    pt: 'Guias específicos para Mac com Apple Silicon da série M — dimensionamento de memória unificada, comparativos de MLX frente a Ollama e llama.cpp, transcrição com Whisper via Metal, e configurações de Mac Mini/MacBook para inferência local. O Apple Silicon compartilha memória unificada entre CPU e GPU, então um Mac da série M com 32 GB de RAM roda modelos de 30 bilhões de parâmetros sem GPU dedicada. O MLX é o framework de inferência da própria Apple e costuma ser mais rápido que o llama.cpp no mesmo chip.',
    ko: 'M 시리즈 Apple 실리콘 전용 Mac 가이드 — 통합 메모리 용량 산정, MLX 대 Ollama·llama.cpp 벤치마크 비교, Metal 기반 Whisper 음성 인식, 로컬 추론을 위한 Mac mini/MacBook 구성을 다룹니다. Apple 실리콘은 CPU와 GPU가 통합 메모리를 공유하므로, 32GB RAM을 갖춘 M 시리즈 Mac은 별도 GPU 없이도 300억 파라미터급 모델을 실행할 수 있습니다. MLX는 Apple 자체 추론 프레임워크로, 동일 칩에서 llama.cpp보다 대체로 더 빠릅니다.',
    ar: 'أدلة خاصة بأجهزة Mac التي تعمل بمعالجات Apple Silicon من سلسلة M — تحديد حجم الذاكرة الموحّدة، ومقارنات أداء MLX مقابل Ollama وllama.cpp، وتفريغ الصوت عبر Whisper باستخدام Metal، وتشكيلات Mac mini وMacBook للاستدلال المحلي. يشارك Apple Silicon الذاكرة الموحّدة بين CPU وGPU، لذا يمكن لجهاز Mac من سلسلة M بذاكرة 32 GB تشغيل نماذج بحجم 30 مليار معلمة دون حاجة إلى GPU منفصلة. MLX هو إطار عمل الاستدلال الخاص بشركة Apple، وعادة ما يكون أسرع من llama.cpp على الشريحة نفسها.',
  },
  'enterprise-compliance': {
    en: 'Buying guides for enterprise GPU servers, SOC 2 and ISO 27001 compliance for self-hosted LLMs, commercial licensing terms, and head-to-head comparisons of API gateways, fine-tuning frameworks, agent frameworks, evaluation tools, observability platforms, and vector databases for production deployments. Whether renting cloud GPUs or buying on-premises hardware is cheaper depends mainly on how continuously the workload runs.',
    de: 'Kaufratgeber für Enterprise-GPU-Server, SOC-2- und ISO-27001-Compliance für selbst gehostete LLMs, Bedingungen kommerzieller Lizenzen sowie direkte Vergleiche von API-Gateways, Fine-Tuning-Frameworks, Agenten-Frameworks, Evaluationstools, Observability-Plattformen und Vektordatenbanken für Produktivumgebungen. Ob Mieten von Cloud-GPUs oder der Kauf eigener On-Premises-Hardware günstiger ist, hängt vor allem davon ab, wie durchgehend die Last läuft.',
    fr: 'Guides d\'achat de serveurs GPU d\'entreprise, conformité SOC 2 et ISO 27001 pour les LLMs auto-hébergés, conditions de licences commerciales, ainsi que des comparatifs directs de passerelles API, de frameworks de fine-tuning, de frameworks d\'agents, d\'outils d\'évaluation, de plateformes d\'observabilité et de bases de données vectorielles pour les déploiements en production. Le choix entre louer des GPU cloud et acheter du matériel sur site dépend surtout du caractère continu de la charge de travail.',
    ja: 'エンタープライズ向け GPU サーバーの購入ガイド、自社ホスト型 LLM の SOC 2・ISO 27001 準拠、商用ライセンス条件、そして本番導入向けの API ゲートウェイ、ファインチューニングフレームワーク、エージェントフレームワーク、評価ツール、可観測性プラットフォーム、ベクトルデータベースの直接比較を扱います。クラウドGPUのレンタルとオンプレミス機材の購入のどちらが安いかは、主にワークロードがどれだけ継続的に動くかで決まります。',
    zh: '企业级GPU服务器采购指南、面向自托管LLM的SOC 2与ISO 27001合规、商业授权条款，以及针对生产环境部署的API网关、微调框架、智能体框架、评估工具、可观测性平台和向量数据库的正面对比。租用云GPU与自建本地硬件哪个更划算，主要取决于工作负载持续运行的程度。',
    es: 'Guías de compra de servidores GPU empresariales, cumplimiento SOC 2 e ISO 27001 para LLMs autoalojados, condiciones de licencias comerciales, y comparativas directas de gateways de API, frameworks de fine-tuning, frameworks de agentes, herramientas de evaluación, plataformas de observabilidad y bases de datos vectoriales para despliegues en producción. Que resulte más barato alquilar GPUs en la nube o comprar hardware on-premises depende sobre todo de lo continua que sea la carga de trabajo.',
    pt: 'Guias de compra de servidores GPU empresariais, conformidade SOC 2 e ISO 27001 para LLMs auto-hospedados, condições de licenciamento comercial, e comparativos diretos de gateways de API, frameworks de fine-tuning, frameworks de agentes, ferramentas de avaliação, plataformas de observabilidade e bancos de dados vetoriais para implantações em produção. Se é mais barato alugar GPUs na nuvem ou comprar hardware on-premises depende principalmente de quão contínua é a carga de trabalho.',
    ko: '엔터프라이즈 GPU 서버 구매 가이드, 자체 호스팅 LLM을 위한 SOC 2 및 ISO 27001 준수, 상업용 라이선스 조건, 그리고 프로덕션 배포를 위한 API 게이트웨이, 파인튜닝 프레임워크, 에이전트 프레임워크, 평가 도구, 관찰 가능성 플랫폼, 벡터 데이터베이스의 정면 비교를 다룹니다. 클라우드 GPU를 임대하는 편이 나은지 온프레미스 하드웨어를 구매하는 편이 나은지는 주로 워크로드가 얼마나 지속적으로 실행되는지에 달려 있습니다.',
    ar: 'أدلة شراء خوادم GPU للمؤسسات، والامتثال لمعياري SOC 2 وISO 27001 للنماذج المستضافة ذاتيًا، وشروط التراخيص التجارية، ومقارنات مباشرة بين بوابات API، وأطر الضبط الدقيق، وأطر الوكلاء، وأدوات التقييم، ومنصات قابلية الرصد، وقواعد البيانات المتجهية للنشر الإنتاجي. يتوقف الأرخص بين استئجار ⁨GPU⁩ سحابية وشراء أجهزة داخل المنشأة أساسًا على مدى استمرارية عبء العمل.',
  },
}

export const HUB_COMING_SOON: Record<string, string> = {
  en: 'More guides coming soon.',
  de: 'Weitere Leitfäden folgen in Kürze.',
  fr: 'D\'autres guides arrivent bientôt.',
  ja: 'さらなるガイドが近日公開予定です。',
  zh: '更多指南即将推出。',
  es: 'Más guías próximamente.',
  pt: 'Mais guias em breve.',
  ko: '더 많은 가이드가 곧 추가됩니다.',
  ar: 'المزيد من الأدلة قريبًا.',
}

export const HUB_PE_SIDEBAR_TITLE: Record<string, string> = {
  en: 'Improve Your Results',
  de: 'Verbessern Sie Ihre Ergebnisse',
  fr: 'Améliorez Vos Résultats',
  ja: '結果を改善する',
  zh: '改进您的结果',
  es: 'Mejora tus resultados',
  pt: 'Melhore seus resultados',
  ko: '결과 개선하기',
  ar: 'حسّن نتائجك',
}

export const HUB_PE_SIDEBAR_BODY: Record<string, string> = {
  en: 'Running a local model? Your output quality depends on how you prompt it. Learn systematic techniques to get better answers from any local LLM.',
  de: 'Führen Sie ein lokales Modell aus? Die Ausgabequalität hängt davon ab, wie Sie es prompten. Lernen Sie systematische Techniken, um bessere Antworten von jedem lokalen LLM zu erhalten.',
  fr: 'Vous utilisez un modèle local ? La qualité de sortie dépend de la manière dont vous le promptez. Apprenez des techniques systématiques pour obtenir de meilleures réponses de n\'importe quel LLM local.',
  ja: 'ローカルモデルを実行していますか？出力品質はプロンプト作成方法に依存します。ローカルLLMからより良い答えを得るための体系的な技法を学びます。',
  zh: '运行本地模型？输出质量取决于您如何提示它。学习系统化技术以从任何本地LLM获得更好的答案。',
  es: '¿Usas un modelo local? La calidad de los resultados depende de cómo lo prompts. Aprende técnicas sistemáticas para obtener mejores respuestas de cualquier LLM local.',
  pt: 'Está rodando um modelo local? A qualidade da sua saída depende de como você cria o prompt. Aprenda técnicas sistemáticas para obter respostas melhores de qualquer LLM local.',
  ko: '로컬 모델을 실행하고 계신가요? 출력 품질은 프롬프트 작성 방법에 따라 달라집니다. 모든 로컬 LLM에서 더 나은 답변을 얻기 위한 체계적인 기법을 배워 보세요.',
  ar: 'هل تشغّل نموذجًا محليًا؟ جودة المخرجات تعتمد على طريقة صياغة مطالبتك. تعلّم تقنيات منهجية للحصول على إجابات أفضل من أي ⁨LLM⁩ محلي.',
}

export const HUB_PE_SIDEBAR_LINKS: Record<string, { label: string; href: string }[]> = {
  en: [
    { label: 'Prompt Engineering Guide', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'What Is Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  de: [
    { label: 'Prompt Engineering Leitfaden', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'Was ist Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought-Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  fr: [
    { label: 'Guide du Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'Qu\'est-ce que le Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Chain-of-Thought Prompting', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  ja: [
    { label: 'プロンプトエンジニアリングガイド', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'プロンプトエンジニアリングとは', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'チェーン・オブ・ソート・プロンプティング', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  zh: [
    { label: '提示词工程指南', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '什么是提示词工程', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: '链式推理提示词', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  es: [
    { label: 'Guía de Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '¿Qué es el Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Prompting de Cadena de Pensamiento', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  pt: [
    { label: 'Guia de Prompt Engineering', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'O que é Prompt Engineering?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'Prompting de Chain-of-Thought', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  ko: [
    { label: '프롬프트 엔지니어링 가이드', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: '프롬프트 엔지니어링이란?', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: '사고의 사슬 프롬프팅', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
  ar: [
    { label: 'دليل ⁨هندسة المطالبات (Prompt Engineering)⁩', href: 'https://www.promptquorum.com/prompt-engineering' },
    { label: 'ما هي ⁨هندسة المطالبات⁩؟', href: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering' },
    { label: 'التفكير التسلسلي (⁨Chain-of-Thought⁩)', href: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting' },
  ],
}

export const HUB_PB_SIDEBAR_TITLE: Record<string, string> = {
  en: 'Quick Answers, No Reading Required',
  de: 'Schnelle Antworten, ohne viel zu lesen',
  fr: 'Réponses rapides, sans lecture superflue',
  ja: '読み込み不要のクイック回答',
  zh: '无需长篇阅读的快速解答',
  es: 'Respuestas rápidas, sin tanta lectura',
  pt: 'Respostas rápidas, sem leitura longa',
  ko: '길게 읽지 않아도 되는 빠른 답변',
  ar: 'إجابات سريعة، بلا قراءة طويلة',
}

export const HUB_PB_SIDEBAR_BODY: Record<string, string> = {
  en: 'Got a specific question — how much VRAM, which quantization, Ollama vs LM Studio? Prompt Bites answers 100+ of these in under a minute each.',
  de: 'Haben Sie eine konkrete Frage — wie viel VRAM, welche Quantisierung, Ollama vs. LM Studio? Prompt Bites beantwortet über 100 solcher Fragen in jeweils unter einer Minute.',
  fr: 'Une question précise — combien de VRAM, quelle quantisation, Ollama ou LM Studio ? Prompt Bites répond à plus de 100 de ces questions en moins d\'une minute chacune.',
  ja: 'VRAMはどれくらい必要か、どの量子化を選ぶべきか、OllamaとLM Studioのどちらが良いかなど、具体的な疑問はありませんか？Prompt Bitesでは100以上のこうした質問に1分以内で回答しています。',
  zh: '有具体问题吗——需要多少VRAM、选哪种量化方式、Ollama还是LM Studio？Prompt Bites用不到一分钟就能回答100多个这类问题。',
  es: '¿Tienes una pregunta concreta — cuánta VRAM necesitas, qué cuantización elegir, Ollama o LM Studio? Prompt Bites responde más de 100 de estas preguntas en menos de un minuto cada una.',
  pt: 'Tem uma pergunta específica — quanta VRAM precisa, qual quantização escolher, Ollama ou LM Studio? O Prompt Bites responde mais de 100 dessas perguntas em menos de um minuto cada.',
  ko: 'VRAM이 얼마나 필요한지, 어떤 양자화를 선택해야 하는지, Ollama와 LM Studio 중 무엇이 나은지 등 구체적인 질문이 있으신가요? Prompt Bites는 이런 질문 100개 이상에 각각 1분 이내로 답합니다.',
  ar: 'لديك سؤال محدد — كم ⁨VRAM⁩ تحتاج، أي تكميم تختار، ⁨Ollama⁩ أم ⁨LM Studio⁩؟ يجيب ⁨Prompt Bites⁩ عن أكثر من 100 سؤال من هذا النوع في أقل من دقيقة لكل واحد.',
}

export const HUB_PB_SIDEBAR_LINKS: Record<string, { label: string; href: string }[]> = {
  en: [
    { label: 'Browse Prompt Bites', href: 'https://www.promptquorum.com/prompt-bites' },
    { label: 'How Much VRAM Do You Need?', href: 'https://www.promptquorum.com/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/prompt-bites/ollama-vs-lm-studio' },
  ],
  de: [
    { label: 'Prompt Bites durchsuchen', href: 'https://www.promptquorum.com/de/prompt-bites' },
    { label: 'Wie viel VRAM brauchen Sie?', href: 'https://www.promptquorum.com/de/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs. LM Studio', href: 'https://www.promptquorum.com/de/prompt-bites/ollama-vs-lm-studio' },
  ],
  fr: [
    { label: 'Parcourir Prompt Bites', href: 'https://www.promptquorum.com/fr/prompt-bites' },
    { label: 'De combien de VRAM avez-vous besoin ?', href: 'https://www.promptquorum.com/fr/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/fr/prompt-bites/ollama-vs-lm-studio' },
  ],
  ja: [
    { label: 'Prompt Bitesを見る', href: 'https://www.promptquorum.com/ja/prompt-bites' },
    { label: '必要なVRAM容量は？', href: 'https://www.promptquorum.com/ja/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/ja/prompt-bites/ollama-vs-lm-studio' },
  ],
  zh: [
    { label: '浏览 Prompt Bites', href: 'https://www.promptquorum.com/zh/prompt-bites' },
    { label: '你需要多少VRAM？', href: 'https://www.promptquorum.com/zh/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama 对比 LM Studio', href: 'https://www.promptquorum.com/zh/prompt-bites/ollama-vs-lm-studio' },
  ],
  es: [
    { label: 'Explorar Prompt Bites', href: 'https://www.promptquorum.com/es/prompt-bites' },
    { label: '¿Cuánta VRAM necesitas?', href: 'https://www.promptquorum.com/es/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/es/prompt-bites/ollama-vs-lm-studio' },
  ],
  pt: [
    { label: 'Ver Prompt Bites', href: 'https://www.promptquorum.com/pt/prompt-bites' },
    { label: 'Quanta VRAM você precisa?', href: 'https://www.promptquorum.com/pt/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/pt/prompt-bites/ollama-vs-lm-studio' },
  ],
  ko: [
    { label: 'Prompt Bites 둘러보기', href: 'https://www.promptquorum.com/ko/prompt-bites' },
    { label: '필요한 VRAM 용량은?', href: 'https://www.promptquorum.com/ko/prompt-bites/how-much-vram-for-local-llm' },
    { label: 'Ollama vs LM Studio', href: 'https://www.promptquorum.com/ko/prompt-bites/ollama-vs-lm-studio' },
  ],
  ar: [
    { label: 'تصفّح ⁨Prompt Bites⁩', href: 'https://www.promptquorum.com/ar/prompt-bites' },
    { label: 'كم ⁨VRAM⁩ تحتاج؟', href: 'https://www.promptquorum.com/ar/prompt-bites/how-much-vram-for-local-llm' },
    { label: '⁨Ollama⁩ مقابل ⁨LM Studio⁩', href: 'https://www.promptquorum.com/ar/prompt-bites/ollama-vs-lm-studio' },
  ],
}

export const HUB_GETTING_STARTED_LINK: Record<string, string> = {
  en: 'Start with Getting Started',
  de: 'Mit „Erste Schritte" beginnen',
  fr: 'Commencer par « Premiers pas »',
  ja: 'はじめにから始める',
  zh: '从"入门"开始',
  es: 'Comenzar con Primeros pasos',
  pt: 'Comece pelos Primeiros passos',
  ko: '시작하기로 시작하세요',
  ar: 'ابدأ بدليل البداية',
}

export const HUB_TAKEAWAYS_TITLE: Record<string, string> = {
  en: 'Key Takeaways',
  de: 'Zusammenfassung',
  fr: 'Points clés',
  ja: 'ポイントまとめ',
  zh: '核心要点',
  es: 'Puntos clave',
  pt: 'Pontos principais',
  ko: '핵심 요점',
  ar: 'أهم النقاط',
}

export const HUB_TAKEAWAYS_BULLETS: Record<string, string[]> = {
  en: [
    '8 GB RAM is enough to run a 7B model locally (Ollama or LM Studio, under 10 min setup)',
    '48 GB of VRAM runs a 70B model at Q4 (about 42 GB of weights); Llama 4 Scout (109B MoE) needs about 67 GB',
    'Q4 quantization cuts memory to roughly a quarter of FP16 with a small quality loss — a 7B model fits in 4–5 GB VRAM',
    'Open-weight models such as Qwen3.8, Gemma 4 and gpt-oss now cover most everyday coding and writing tasks; leading cloud models still lead on the hardest multi-step work',
    'Zero API costs after hardware purchase — no usage limits, no vendor lock-in',
    'Prompts and files stay on your machine, with no cloud storage — check each app\'s telemetry setting; local processing simplifies GDPR work but does not replace it',
    'LoRA fine-tuning requires 500+ labeled examples and 24 GB+ VRAM (or cloud GPU for training)',
    '[Qwen Local Deployment Guide 2026](/local-llms/qwen-local-deployment-guide-2026) — one-command Ollama setup for Qwen 3.6 27B and Qwen3 8B, plus Coder and VL tiers',
    '[Best GPU Under $500 for LLM Inference](/local-llms/best-gpu-for-llm-inference-under-500-2026) — Intel Arc B580 12 GB leads; a used RTX 3060 12 GB is the CUDA runner-up',
    '[DeepSeek vs Qwen: Local Comparison 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark head-to-head',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud for the Chinese market',
    '[Local LLM Cost Calculator: Build vs Rent 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3-year ROI calculator',
  ],
  de: [
    '8 GB RAM reichen aus, um ein 7B-Modell lokal auszuführen (Ollama oder LM Studio, unter 10 Minuten Einrichtung)',
    '48 GB VRAM führen ein 70B-Modell bei Q4 aus (ca. 42 GB Gewichte); Llama 4 Scout (109B MoE) benötigt etwa 67 GB',
    'Die Q4-Quantisierung reduziert den Speicherbedarf auf etwa ein Viertel von FP16 bei geringem Qualitätsverlust — ein 7B-Modell passt in 4–5 GB VRAM',
    'Open-Weight-Modelle wie Qwen3.8, Gemma 4 und gpt-oss decken die meisten alltäglichen Coding- und Schreibaufgaben ab; führende Cloud-Modelle liegen bei den anspruchsvollsten mehrstufigen Aufgaben weiter vorn',
    'Null API-Kosten nach Hardware-Kauf — keine Nutzungsbegrenzungen, keine Anbieter-Lock-in',
    'Prompts und Dateien bleiben auf Ihrem Rechner, ohne Cloud-Speicher — prüfen Sie die Telemetrie-Einstellung jeder App; lokale Verarbeitung erleichtert die DSGVO-Arbeit, ersetzt sie aber nicht',
    'LoRA-Fine-Tuning erfordert 500+ gekennzeichnete Beispiele und 24 GB+ VRAM (oder Cloud-GPU zum Training)',
    '[Qwen lokaler Deployment-Leitfaden 2026](/local-llms/qwen-local-deployment-guide-2026) — Ollama-Setup mit einem Befehl für Qwen 3.6 27B und Qwen3 8B, dazu Coder- und VL-Stufen',
    '[Bestes GPU unter 500 $ für LLM-Inferenz](/local-llms/best-gpu-for-llm-inference-under-500-2026) — Intel Arc B580 12 GB liegt vorn; eine gebrauchte RTX 3060 12 GB ist die CUDA-Alternative',
    '[DeepSeek vs Qwen: Lokaler Vergleich 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — Benchmark-Kopf-an-Kopf',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU-Cloud für den chinesischen Markt',
    '[Lokaler LLM-Kostenrechner: Bauen vs. Mieten 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3-Jahres-ROI-Rechner',
  ],
  fr: [
    '8 GB de RAM suffisent pour exécuter un modèle 7B localement (Ollama ou LM Studio, moins de 10 min de configuration)',
    '48 GB de VRAM exécutent un modèle 70B en Q4 (environ 42 GB de poids) ; Llama 4 Scout (MoE 109B) en demande environ 67 GB',
    'La quantification Q4 ramène la mémoire à environ un quart du FP16 pour une légère perte de qualité — un modèle 7B tient en 4–5 GB de VRAM',
    'Les modèles à poids ouverts comme Qwen3.8, Gemma 4 et gpt-oss couvrent la plupart des tâches courantes de code et de rédaction ; les meilleurs modèles cloud gardent l\'avantage sur les tâches multi-étapes les plus difficiles',
    'Zéro coût d\'API après achat du matériel — aucune limite d\'utilisation, aucun verrouillage fournisseur',
    'Les prompts et fichiers restent sur votre machine, sans stockage cloud — vérifiez le réglage de télémétrie de chaque application ; le traitement local facilite la conformité au RGPD sans la remplacer',
    'Le fine-tuning LoRA nécessite 500+ exemples étiquetés et 24 GB+ VRAM (ou GPU cloud pour l\'entraînement)',
    '[Guide de déploiement local Qwen 2026](/local-llms/qwen-local-deployment-guide-2026) — configuration Ollama en une commande pour Qwen 3.6 27B et Qwen3 8B, avec les niveaux Coder et VL',
    '[Meilleur GPU à moins de 500 $ pour l\'inférence LLM](/local-llms/best-gpu-for-llm-inference-under-500-2026) — l\'Intel Arc B580 12 GB arrive en tête ; une RTX 3060 12 GB d\'occasion est l\'alternative CUDA',
    '[DeepSeek vs Qwen : comparaison locale 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark face à face',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud pour le marché chinois',
    '[Calculateur de coût LLM local : Construire vs Louer 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculateur ROI sur 3 ans',
  ],
  ja: [
    '8 GB RAMで7Bモデルをローカルで実行できます（Ollama または LM Studio、10分以内のセットアップ）',
    '48 GB VRAMで70BモデルをQ4で実行（重みは約42 GB）。Llama 4 Scout（109B MoE）は約67 GBが必要です',
    'Q4量子化によりメモリ使用量はFP16の約4分の1に減り、品質低下はわずかです — 7BモデルはVRAM 4–5 GBに収まります',
    'Qwen3.8、Gemma 4、gpt-ossなどのオープンウェイトモデルは日常的なコーディングや文章作成の大半をこなせます。最も難しい多段階のタスクでは、最上位のクラウドモデルが引き続き優位です',
    'ハードウェア購入後のAPIコストはゼロ — 使用制限なし、ベンダーロックインなし',
    'プロンプトとファイルはマシン上に残り、クラウドストレージも使いません — 各アプリのテレメトリ設定を確認してください。ローカル処理はGDPR対応を楽にしますが、代わりにはなりません',
    'LoRA微調整には500個以上のラベル付き例とVRAM 24 GB以上が必要です（またはトレーニング用のクラウドGPU）',
    '[Qwenローカルデプロイガイド2026](/local-llms/qwen-local-deployment-guide-2026) — Qwen 3.6 27BとQwen3 8B向けの1コマンドOllamaセットアップ（Coder・VLの各ティアも）',
    '[LLM推論向け500ドル以下ベストGPU](/local-llms/best-gpu-for-llm-inference-under-500-2026) — Intel Arc B580 12 GBが首位、中古のRTX 3060 12 GBがCUDA派の次点',
    '[DeepSeek vs Qwen：ローカル比較2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — ベンチマーク対決',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 中国市場向けGPUクラウド',
    '[ローカルLLMコスト計算機：自作 vs レンタル2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3年間ROI計算機',
  ],
  zh: [
    '8 GB RAM足以在本地运行7B模型（Ollama或LM Studio，设置不到10分钟）',
    '48 GB VRAM可运行Q4量化的70B模型（权重约42 GB）；Llama 4 Scout（109B MoE）需要约67 GB',
    'Q4量化可将内存占用降至FP16的约四分之一，质量损失很小 — 7B模型仅需4–5 GB VRAM',
    'Qwen3.8、Gemma 4和gpt-oss等开放权重模型已能胜任大多数日常编程和写作任务；在最难的多步骤任务上，顶级云端模型仍然领先',
    '硬件购买后零API成本 — 无使用限制、无供应商锁定',
    '提示词和文件留在您的机器上，不使用云存储 — 请检查每个应用的遥测设置；本地处理能简化GDPR合规工作，但不能替代合规本身',
    'LoRA微调需要500多个标记示例和24 GB+ VRAM（或用于训练的云GPU）',
    '[Qwen本地部署指南2026](/local-llms/qwen-local-deployment-guide-2026) — Qwen 3.6 27B和Qwen3 8B的一键Ollama设置，另含Coder和VL档位',
    '[500美元以下最佳LLM推理GPU](/local-llms/best-gpu-for-llm-inference-under-500-2026) — Intel Arc B580 12 GB领先；二手RTX 3060 12 GB是CUDA阵营的次选',
    '[DeepSeek vs Qwen：本地对比2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — 基准测试对决',
    '[阿里云vs腾讯云GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 中国市场GPU云服务',
    '[本地LLM成本计算器：自建vs租用2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3年ROI计算器',
  ],
  es: [
    '8 GB de RAM son suficientes para ejecutar un modelo 7B localmente (Ollama o LM Studio, configuración en menos de 10 min)',
    '48 GB de VRAM ejecutan un modelo 70B en Q4 (unos 42 GB de pesos); Llama 4 Scout (MoE de 109B) necesita unos 67 GB',
    'La cuantización Q4 reduce la memoria a aproximadamente una cuarta parte de FP16 con una pequeña pérdida de calidad — un modelo 7B cabe en 4–5 GB de VRAM',
    'Los modelos de pesos abiertos como Qwen3.8, Gemma 4 y gpt-oss cubren la mayoría de las tareas cotidianas de código y redacción; los mejores modelos cloud siguen por delante en las tareas multipaso más difíciles',
    'Cero costes de API tras la compra del hardware — sin límites de uso, sin dependencia de proveedor',
    'Tus prompts y archivos permanecen en tu equipo, sin almacenamiento cloud — revisa el ajuste de telemetría de cada aplicación; el procesamiento local facilita el trabajo con el RGPD, pero no lo sustituye',
    'El fine-tuning con LoRA requiere 500+ ejemplos etiquetados y 24 GB+ VRAM (o GPU cloud para entrenamiento)',
    '[Guía de despliegue local de Qwen 2026](/local-llms/qwen-local-deployment-guide-2026) — configuración Ollama en un comando para Qwen 3.6 27B y Qwen3 8B, con niveles Coder y VL',
    '[Mejor GPU por menos de 500 $ para inferencia LLM](/local-llms/best-gpu-for-llm-inference-under-500-2026) — la Intel Arc B580 de 12 GB lidera; una RTX 3060 de 12 GB de segunda mano es la alternativa CUDA',
    '[DeepSeek vs Qwen: comparativa local 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark cara a cara',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU cloud para el mercado chino',
    '[Calculadora de costes LLM local: construir vs alquilar 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculadora ROI a 3 años',
  ],
  pt: [
    '8 GB de RAM são suficientes para rodar um modelo 7B localmente (Ollama ou LM Studio, configuração em menos de 10 min)',
    '48 GB de VRAM rodam um modelo 70B em Q4 (cerca de 42 GB de pesos); o Llama 4 Scout (MoE de 109B) precisa de cerca de 67 GB',
    'A quantização Q4 reduz a memória a cerca de um quarto do FP16 com uma pequena perda de qualidade — um modelo 7B cabe em 4–5 GB de VRAM',
    'Modelos de pesos abertos como Qwen3.8, Gemma 4 e gpt-oss cobrem a maioria das tarefas cotidianas de código e redação; os melhores modelos na cloud seguem à frente nas tarefas de várias etapas mais difíceis',
    'Zero custos de API após a compra do hardware — sem limites de uso, sem vendor lock-in',
    'Seus prompts e arquivos ficam na sua máquina, sem armazenamento na cloud — confira a configuração de telemetria de cada aplicativo; o processamento local facilita o trabalho com a LGPD, mas não o substitui',
    'O fine-tuning com LoRA exige 500+ exemplos rotulados e 24 GB+ VRAM (ou GPU na cloud para treinamento)',
    '[Guia de implantação local do Qwen 2026](/local-llms/qwen-local-deployment-guide-2026) — configuração Ollama em um comando para Qwen 3.6 27B e Qwen3 8B, com os níveis Coder e VL',
    '[Melhor GPU abaixo de $500 para inferência de LLM](/local-llms/best-gpu-for-llm-inference-under-500-2026) — a Intel Arc B580 de 12 GB lidera; uma RTX 3060 de 12 GB usada é a alternativa CUDA',
    '[DeepSeek vs Qwen: comparativo local 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — benchmark frente a frente',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — GPU na cloud para o mercado chinês',
    '[Calculadora de custo de LLM local: construir vs alugar 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — calculadora de ROI de 3 anos',
  ],
  ko: [
    '8 GB RAM으로 7B 모델을 로컬에서 실행할 수 있습니다(Ollama 또는 LM Studio, 10분 이내 설정)',
    '48 GB VRAM으로 70B 모델을 Q4로 실행(가중치 약 42 GB). Llama 4 Scout(109B MoE)는 약 67 GB가 필요합니다',
    'Q4 양자화는 메모리 사용량을 FP16의 약 4분의 1로 줄이며 품질 저하는 작습니다 — 7B 모델이 4–5 GB VRAM에 들어갑니다',
    'Qwen3.8, Gemma 4, gpt-oss 같은 오픈 웨이트 모델은 일상적인 코딩과 글쓰기 작업 대부분을 처리합니다. 가장 어려운 다단계 작업에서는 최상위 클라우드 모델이 여전히 앞섭니다',
    '하드웨어 구입 후 API 비용 제로 — 사용 제한 없음, 공급업체 종속 없음',
    '프롬프트와 파일은 기기에 남고 클라우드 저장소를 쓰지 않습니다 — 각 앱의 텔레메트리 설정을 확인하세요. 로컬 처리는 GDPR 대응을 쉽게 하지만 이를 대체하지는 않습니다',
    'LoRA 파인튜닝에는 500개 이상의 레이블이 지정된 예제와 24 GB+ VRAM이 필요합니다(또는 학습용 클라우드 GPU)',
    '[Qwen 로컬 배포 가이드 2026](/local-llms/qwen-local-deployment-guide-2026) — Qwen 3.6 27B와 Qwen3 8B용 단일 명령 Ollama 설정(Coder·VL 등급 포함)',
    '[LLM 추론을 위한 $500 미만 최고의 GPU](/local-llms/best-gpu-for-llm-inference-under-500-2026) — Intel Arc B580 12 GB가 선두, 중고 RTX 3060 12 GB가 CUDA 쪽 차선책',
    '[DeepSeek vs Qwen: 로컬 비교 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — 벤치마크 직접 비교',
    '[Alibaba Cloud vs Tencent Cloud GPU 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — 중국 시장을 위한 GPU 클라우드',
    '[로컬 LLM 비용 계산기: 구축 vs 임대 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 3년 ROI 계산기',
  ],
  ar: [
    '8 GB RAM كافية لتشغيل نموذج ⁨7B⁩ محليًا (⁨Ollama⁩ أو ⁨LM Studio⁩، إعداد أقل من 10 دقائق)',
    'تشغّل ⁨48 GB VRAM⁩ نموذج ⁨70B⁩ بتكميم ⁨Q4⁩ (نحو ⁨42 GB⁩ للأوزان)؛ أما ⁨Llama 4 Scout⁩ (⁨MoE⁩ بحجم ⁨109B⁩) فيحتاج نحو ⁨67 GB⁩',
    'يخفّض تكميم ⁨Q4⁩ استهلاك الذاكرة إلى نحو ربع ⁨FP16⁩ مع خسارة صغيرة في الجودة — نموذج ⁨7B⁩ يعمل بذاكرة 4-⁨5 GB VRAM⁩',
    'تغطي النماذج مفتوحة الأوزان مثل ⁨Qwen3.8⁩ و⁨Gemma 4⁩ و⁨gpt-oss⁩ معظم مهام البرمجة والكتابة اليومية؛ وتبقى النماذج السحابية الرائدة في المقدمة في المهام متعددة الخطوات الأصعب',
    'تكلفة ⁨API⁩ صفر بعد شراء الجهاز — بلا حدود استخدام، وبلا ارتباط بمزوّد واحد',
    'تبقى مطالباتك وملفاتك على جهازك دون تخزين سحابي — راجع إعداد التتبّع في كل تطبيق؛ والمعالجة المحلية تُسهّل العمل على ⁨GDPR⁩ لكنها لا تحلّ محله',
    'الضبط الدقيق بـ⁨LoRA⁩ يحتاج 500+ مثال موسوم و⁨24 GB+ VRAM⁩ على الأقل (أو ⁨GPU سحابي⁩ للتدريب)',
    '[دليل نشر ⁨Qwen⁩ المحلي 2026](/local-llms/qwen-local-deployment-guide-2026) — إعداد ⁨Ollama⁩ بأمر واحد لـ⁨Qwen 3.6 27B⁩ و⁨Qwen3 8B⁩، مع مستويي ⁨Coder⁩ و⁨VL⁩',
    '[أفضل ⁨GPU⁩ بأقل من 500$ لاستدلال ⁨LLM⁩](/local-llms/best-gpu-for-llm-inference-under-500-2026) — يتصدّر ⁨Intel Arc B580⁩ بذاكرة ⁨12 GB⁩، وتأتي ⁨RTX 3060 12 GB⁩ المستعملة بديلًا لمستخدمي ⁨CUDA⁩',
    '[⁨DeepSeek⁩ مقابل ⁨Qwen⁩: مقارنة محلية 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026) — مقارنة مباشرة بمعايير الأداء',
    '[⁨Alibaba Cloud GPU⁩ مقابل ⁨Tencent Cloud GPU⁩ للذكاء الاصطناعي 2026](/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026) — بطاقات سحابية للسوق الصيني',
    '[حاسبة تكلفة ⁨LLM⁩ المحلي: بناء أم إيجار 2026](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — حاسبة عائد استثمار لـ3 سنوات',
  ],
}

export const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  'getting-started':    { badge: 'bg-blue-50 text-blue-700 border-blue-200',    dot: 'bg-blue-400' },
  'best-models':        { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'tools-interfaces':   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  'hardware-performance': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  'advanced-techniques': { badge: 'bg-rose-50 text-rose-700 border-rose-200',   dot: 'bg-rose-400' },
  enterprise:           { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'gpu-buying-guides':  { badge: 'bg-red-50 text-red-700 border-red-200',     dot: 'bg-red-400' },
  'hardware-setups':    { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'privacy-business':   { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',  dot: 'bg-cyan-400' },
  'cost-comparisons':   { badge: 'bg-teal-50 text-teal-700 border-teal-200',  dot: 'bg-teal-400' },
  'apple-silicon':      { badge: 'bg-sky-50 text-sky-700 border-sky-200',    dot: 'bg-sky-400' },
  'enterprise-compliance': { badge: 'bg-violet-50 text-violet-700 border-violet-200', dot: 'bg-violet-400' },
}

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
export const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  lora: 'LoRA',
  vllm: 'vLLM',
}

export const HUB_FAQ_TITLE: Record<string, string> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  ar: 'الأسئلة الشائعة',
}

export const HUB_FAQS: Record<string, {q:string, a:string}[]> = {
  en: [
    {
      q: 'What is a local LLM?',
      a: 'A large language model (e.g., Qwen3.8, Gemma 4, gpt-oss, DeepSeek) that runs on your own hardware instead of a cloud API. Prompts and files stay on your machine, it works offline, has no usage limits, and costs nothing per token after the hardware purchase.'
    },
    {
      q: 'How much VRAM do I need for a local LLM?',
      a: '8 GB of VRAM runs 7–8B models at Q4 quantization (about 5 GB of weights). 16 GB handles 13–14B models comfortably. A 70B model needs about 42 GB for its Q4 weights, so a 48 GB setup (for example two RTX 4090s) is the practical minimum. Apple Silicon unified memory counts as VRAM.'
    },
    {
      q: 'What is the difference between Ollama and LM Studio?',
      a: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.'
    },
    {
      q: 'Can local LLMs match cloud models like GPT or Claude?',
      a: 'Open-weight models such as Qwen3.8-27B and Gemma 4 handle everyday coding, writing and summarizing on a single 24 GB GPU. Leading cloud models still have an edge on complex multi-step reasoning. Vendor-reported benchmark scores differ by test, so try your own prompts before choosing.'
    },
    {
      q: 'How do I fine-tune a local model?',
      a: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.'
    },
    {
      q: 'What is the minimum hardware to run a local LLM in 2026?',
      a: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at roughly 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for roughly 15–40 tokens/sec on 7–8B models.'
    },
    {
      q: 'Are local LLMs free to use?',
      a: 'Mostly yes. Ollama is open source and LM Studio is free to use but closed source. Most open-weight models (Qwen, Gemma, gpt-oss, Mistral, DeepSeek) are free to download, but licenses differ and Llama uses a community license, so check the terms before commercial use. The main cost is your hardware.'
    },
    {
      q: 'What is the best local LLM for coding in 2026?',
      a: 'Qwen3.8 27B is the top pick for a 24 GB GPU (18 GB, 256K context). Devstral Small 2 (24B, 15 GB) suits 16 GB machines, and Qwen3 8B suits 8 GB. Codestral 22B remains a common choice for IDE autocomplete, and Phi-4 Mini is the practical CPU-only choice. Benchmark scores are vendor-reported; see the coding guide for details.'
    },
    {
      q: 'Can I run a local LLM without a GPU?',
      a: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical speed is roughly 2–8 tokens/sec for 7B models on a laptop CPU and faster for 3–4B models, compared with 20–50 tokens/sec on an RTX 4060. 7B Q4 needs about 5 GB of RAM (not VRAM). For CPU-only setups, Phi-4 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.'
    },
    {
      q: 'How do I update local LLM models when new versions are released?',
      a: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. New models usually appear in the Ollama library within days of an official release.'
    },
    {
      q: 'What are the best Ollama models in 2026?',
      a: 'Top picks in the Ollama library: Qwen3.8-27B (our pick for a 24 GB card, `ollama pull qwen3.8:27b`, 18 GB), gpt-oss:20b (small, 16 GB class), Gemma 4 (vision and tool calling, E2B to 31B; `ollama pull gemma4:12b` is about 8 GB), Qwen3 8B (`ollama pull qwen3:8b`, about 5 GB) for 8 GB machines, and DeepSeek-R1 distills for step-by-step reasoning. Run any model with `ollama run <name>` after pulling.'
    },
    {
      q: 'What is the best local LLM for an RTX 3060 12 GB VRAM?',
      a: 'The RTX 3060 12 GB is a good local LLM GPU. Best fits: Qwen3 14B (about 9 GB, 9–12 tokens/sec), Gemma 4 12B (about 8 GB, 11–14 tokens/sec), Qwen3 8B (16–20 tokens/sec) or DeepSeek-R1 7B (10–12 tokens/sec). Llama 4 Scout does not fit: it needs about 67 GB. The 12 GB of VRAM also puts you above the RTX 3060 Ti (8 GB) and opens up 13–14B-class models at full quality.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: which should I use?',
      a: 'Use Ollama if you want a CLI tool with an OpenAI-compatible API at localhost:11434 — best for developers and automation. Use LM Studio if you want a desktop GUI, built-in model browser, and chat interface — best for beginners. Use Jan.ai if you want a privacy-focused chat app with a built-in model store. All three support the same GGUF models. Setup time: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'What are the best budget GPUs for local LLMs in 2026?',
      a: 'According to our budget GPU guide: a used RTX 3060 12 GB (about $270–300) is the cheapest card worth buying, running Qwen3 14B at 9–12 tokens/sec and Qwen3 8B at 16–20 tokens/sec. New alternatives are the RTX 5060 Ti 16 GB (about $570–600) and the Intel Arc B580 12 GB (about $250–290). Prices rose in 2026 because of a memory shortage, so check the guide for current figures. Minimum recommended: 8 GB VRAM for useful 7B inference.'
    },
  ],
  de: [
    {
      q: 'Was ist ein lokales LLM?',
      a: 'Ein großes Sprachmodell (z. B. Qwen3.8, Gemma 4, gpt-oss, DeepSeek), das auf Ihrer eigenen Hardware statt über eine Cloud-API läuft. Prompts und Dateien bleiben auf Ihrem Rechner, es funktioniert offline, kennt keine Nutzungsgrenzen und kostet nach dem Hardware-Kauf nichts pro Token.'
    },
    {
      q: 'Wie viel VRAM benötige ich für ein lokales LLM?',
      a: '8 GB VRAM führen 7–8B-Modelle bei Q4-Quantisierung aus (etwa 5 GB Gewichte). 16 GB verarbeiten 13–14B-Modelle komfortabel. Ein 70B-Modell braucht für seine Q4-Gewichte etwa 42 GB; ein Aufbau mit 48 GB (z. B. zwei RTX 4090) ist daher das praktische Minimum. Apple-Silicon-Unified-Memory zählt als VRAM.'
    },
    {
      q: 'Was ist der Unterschied zwischen Ollama und LM Studio?',
      a: 'Ollama ist ein CLI-Tool, das Modelle über einfache Terminalcommands ausführt und eine OpenAI-kompatible API unter `localhost:11434` bereitstellt. LM Studio bietet eine Desktop-GUI, einen Modellbrowser und eine integrierte Chat-Oberfläche. Beide unterstützen die gleichen Modelle.'
    },
    {
      q: 'Können lokale LLMs mit Cloud-Modellen wie GPT oder Claude mithalten?',
      a: 'Open-Weight-Modelle wie Qwen3.8-27B und Gemma 4 bewältigen alltägliches Coding, Schreiben und Zusammenfassen auf einer einzelnen 24-GB-GPU. Führende Cloud-Modelle haben bei komplexem mehrstufigem Reasoning weiterhin einen Vorsprung. Die von Herstellern angegebenen Benchmark-Werte unterscheiden sich je nach Test; probieren Sie daher eigene Prompts aus, bevor Sie sich entscheiden.'
    },
    {
      q: 'Wie fine-tunne ich ein lokales Modell?',
      a: 'Fine-Tuning erfordert 500+ gekennzeichnete Trainingsbeispiele, das QLoRA-Framework (reduziert VRAM-Anforderung durch 4-Bit-Quantisierung), 24 GB+ VRAM (oder Cloud-GPU-Vermietung) und 1–4 Stunden Trainingszeit für ein 7B-Modell.'
    },
    {
      q: 'Was ist die Mindest-Hardware zum Ausführen eines lokalen LLM im Jahr 2026?',
      a: 'Minimum: 8 GB RAM und eine beliebige moderne CPU (führt 3B–7B-Modelle mit etwa 2–5 Token/Sek aus). Empfohlen: eine GPU mit 8 GB+ VRAM (RTX 3060 oder neuer) für etwa 15–40 Token/Sek bei 7–8B-Modellen.'
    },
    {
      q: 'Sind lokale LLMs kostenlos nutzbar?',
      a: 'Größtenteils ja. Ollama ist Open Source, LM Studio ist kostenlos nutzbar, aber nicht quelloffen. Die meisten Open-Weight-Modelle (Qwen, Gemma, gpt-oss, Mistral, DeepSeek) lassen sich kostenlos herunterladen; die Lizenzen unterscheiden sich jedoch, und Llama nutzt eine Community-Lizenz — prüfen Sie die Bedingungen vor einer kommerziellen Nutzung. Die Hauptkosten sind Ihre Hardware.'
    },
    {
      q: 'Was ist das beste lokale LLM für Coding im Jahr 2026?',
      a: 'Qwen3.8 27B ist die erste Wahl für eine 24-GB-GPU (18 GB, 256K Kontext). Devstral Small 2 (24B, 15 GB) passt zu Rechnern mit 16 GB, Qwen3 8B zu 8 GB. Codestral 22B bleibt eine verbreitete Wahl für IDE-Autovervollständigung, und Phi-4 Mini ist die praktische Wahl für reinen CPU-Betrieb. Die Benchmark-Werte stammen von den Herstellern; Details stehen im Coding-Leitfaden.'
    },
    {
      q: 'Kann ich ein lokales LLM ohne GPU ausführen?',
      a: 'Ja. Jede moderne CPU kann 3B–7B-Modelle bei Q4-Quantisierung mit Ollama (CPU-Modus) oder LM Studio ausführen. Typisch sind etwa 2–8 Token/Sek bei 7B-Modellen auf einer Laptop-CPU, bei 3–4B-Modellen mehr, verglichen mit 20–50 Token/Sek auf einer RTX 4060. 7B Q4 benötigt etwa 5 GB RAM (nicht VRAM). Für reinen CPU-Betrieb bieten Phi-4 Mini (3,8B) und Llama 3.2 3B das beste Verhältnis von Qualität zu Geschwindigkeit.'
    },
    {
      q: 'Wie aktualisiere ich lokale LLM-Modelle, wenn neue Versionen freigegeben werden?',
      a: 'Ollama: Führen Sie `ollama pull <model-name>` erneut aus — es werden nur geänderte Layer heruntergeladen. LM Studio: Öffnen Sie den Modellbrowser, finden Sie die aktualisierte Version und laden Sie sie herunter. Alte GGUF-Dateien werden nicht automatisch entfernt — löschen Sie sie manuell aus ~/.ollama/models (Ollama) oder ~/Library/Application Support/LM Studio/models (macOS), um Speicherplatz freizugeben. Neue Modelle erscheinen in der Ollama-Bibliothek in der Regel innerhalb weniger Tage nach der offiziellen Veröffentlichung.'
    },
    {
      q: 'Muss ich bei lokalen LLMs die DSGVO beachten?',
      a: 'Bei lokaler Verarbeitung ist für den Inferenzschritt kein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) nötig, solange kein Dritter Zugriff auf die Daten hat. Ollama bindet standardmäßig an `localhost` — keine externe Erreichbarkeit. Weitere Pflichten wie Rechtsgrundlage, Sicherheit und Verzeichnis der Verarbeitungstätigkeiten bleiben bestehen.'
    },
    {
      q: 'Welche lokalen LLM-Modelle eignen sich am besten für den deutschen Mittelstand?',
      a: 'Für allgemeine Aufgaben eignen sich Qwen3.8-27B oder Gemma 4, für Softwareentwicklung Qwen3.8 27B oder Devstral Small 2. Der Betrieb auf eigener Hardware erleichtert die Einhaltung der DSGVO und vermeidet Anbieter-Lock-in; ob ein Setup die Anforderungen des BSI erfüllt, hängt von der gesamten Umgebung ab.'
    },
    {
      q: 'Was sind die besten Ollama-Modelle 2026?',
      a: 'Top-Auswahl in der Ollama-Bibliothek: Qwen3.8-27B (unsere Empfehlung für eine 24-GB-Karte, `ollama pull qwen3.8:27b`, 18 GB), gpt-oss:20b (kleines Modell, 16-GB-Klasse), Gemma 4 (Vision und Tool Calling, E2B bis 31B; `ollama pull gemma4:12b` benötigt etwa 8 GB), Qwen3 8B (`ollama pull qwen3:8b`, etwa 5 GB) für 8-GB-Rechner und DeepSeek-R1-Distills für schrittweises Reasoning. Führen Sie jedes Modell nach dem Pull mit `ollama run <name>` aus.'
    },
    {
      q: 'Welches lokale LLM eignet sich für eine RTX 3060 12 GB?',
      a: 'Die RTX 3060 12 GB ist eine gute GPU für lokale LLMs. Passende Modelle: Qwen3 14B (etwa 9 GB, 9–12 Token/Sek), Gemma 4 12B (etwa 8 GB, 11–14 Token/Sek), Qwen3 8B (16–20 Token/Sek) oder DeepSeek-R1 7B (10–12 Token/Sek). Llama 4 Scout passt nicht: Es benötigt etwa 67 GB. Mit 12 GB VRAM liegen Sie zudem über der RTX 3060 Ti (8 GB) und können Modelle der 13–14B-Klasse in voller Qualität nutzen.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: Was sollte ich verwenden?',
      a: 'Verwenden Sie Ollama für CLI und OpenAI-kompatible API unter localhost:11434 — ideal für Entwickler. LM Studio für Desktop-GUI und Modellbrowser — ideal für Einsteiger. Jan.ai für datenschutzorientierten Chat mit eingebautem Modellspeicher. Einrichtungszeit: Ollama 2 Min, LM Studio 5 Min, Jan.ai 5 Min.'
    },
    {
      q: 'Was sind die besten Budget-GPUs für lokale LLMs 2026?',
      a: 'Laut unserem Budget-GPU-Guide: Eine gebrauchte RTX 3060 12 GB (ca. 270–300 $, US-Preise) ist die günstigste empfehlenswerte Karte; sie führt Qwen3 14B mit 9–12 Token/Sek und Qwen3 8B mit 16–20 Token/Sek aus. Neu kommen die RTX 5060 Ti 16 GB (ca. 570–600 $) und die Intel Arc B580 12 GB (ca. 250–290 $) infrage. Die Preise sind 2026 wegen einer Speicherknappheit gestiegen; aktuelle Werte stehen im Guide. Empfohlenes Minimum: 8 GB VRAM für sinnvolle 7B-Inferenz.'
    },
  ],
  fr: [
    {
      q: 'Qu\'est-ce qu\'un LLM local ?',
      a: 'Un grand modèle de langage (par exemple Qwen3.8, Gemma 4, gpt-oss, DeepSeek) qui s\'exécute sur votre propre matériel plutôt que sur une API cloud. Vos prompts et fichiers restent sur votre machine, il fonctionne hors ligne, sans limite d\'utilisation, et ne coûte rien par token après l\'achat du matériel.'
    },
    {
      q: 'De combien de VRAM ai-je besoin pour un LLM local ?',
      a: '8 GB de VRAM exécutent des modèles 7–8B en quantification Q4 (environ 5 GB de poids). 16 GB gèrent confortablement les modèles 13–14B. Un modèle 70B demande environ 42 GB pour ses poids Q4 ; une configuration de 48 GB (par exemple deux RTX 4090) est donc le minimum pratique. La mémoire unifiée Apple Silicon compte comme VRAM.'
    },
    {
      q: 'Quelle est la différence entre Ollama et LM Studio ?',
      a: 'Ollama est un outil CLI qui exécute les modèles via des commandes simples et expose une API compatible OpenAI à `localhost:11434`. LM Studio fournit une GUI desktop, un navigateur de modèles et une interface de chat intégrée. Tous deux supportent les mêmes modèles.'
    },
    {
      q: 'Les LLMs locaux peuvent-ils rivaliser avec des modèles cloud comme GPT ou Claude ?',
      a: 'Des modèles à poids ouverts comme Qwen3.8-27B et Gemma 4 gèrent le code, la rédaction et la synthèse courants sur un seul GPU de 24 GB. Les meilleurs modèles cloud gardent l\'avantage sur le raisonnement multi-étapes complexe. Les scores de benchmark annoncés par les éditeurs varient selon le test : essayez vos propres prompts avant de choisir.'
    },
    {
      q: 'Comment affiner un modèle local ?',
      a: 'Le fine-tuning nécessite 500+ exemples d\'entraînement annotés, le framework QLoRA (réduit l\'exigence VRAM via quantification 4 bits), 24 GB+ VRAM (ou location GPU cloud) et 1–4 heures de temps d\'entraînement pour un modèle 7B.'
    },
    {
      q: 'Quel est le matériel minimum pour exécuter un LLM local en 2026 ?',
      a: 'Minimum : 8 GB de RAM et tout CPU moderne (exécute des modèles 3B–7B à environ 2–5 tokens/sec). Recommandé : un GPU avec 8 GB+ de VRAM (RTX 3060 ou plus récent) pour environ 15–40 tokens/sec sur des modèles 7–8B.'
    },
    {
      q: 'Les LLMs locaux sont-ils gratuits d\'utilisation ?',
      a: 'Pour l\'essentiel, oui. Ollama est open source ; LM Studio est gratuit mais son code n\'est pas ouvert. La plupart des modèles à poids ouverts (Qwen, Gemma, gpt-oss, Mistral, DeepSeek) se téléchargent gratuitement, mais les licences diffèrent et Llama utilise une licence communautaire : vérifiez les conditions avant un usage commercial. Le coût principal est votre matériel.'
    },
    {
      q: 'Quel est le meilleur LLM local pour le codage en 2026 ?',
      a: 'Qwen3.8 27B est le meilleur choix pour un GPU de 24 GB (18 GB, contexte 256K). Devstral Small 2 (24B, 15 GB) convient aux machines de 16 GB, et Qwen3 8B à celles de 8 GB. Codestral 22B reste un choix courant pour l\'autocomplétion en IDE, et Phi-4 Mini est le choix pratique sur CPU seul. Les scores de benchmark sont annoncés par les éditeurs ; voir le guide du code pour le détail.'
    },
    {
      q: 'Puis-je exécuter un LLM local sans GPU ?',
      a: 'Oui. Tout CPU moderne peut exécuter des modèles 3B–7B en quantification Q4 avec Ollama (mode CPU) ou LM Studio. La vitesse typique est d\'environ 2–8 tokens/sec pour un modèle 7B sur un CPU portable, plus élevée pour les modèles 3–4B, contre 20–50 tokens/sec sur une RTX 4060. 7B Q4 nécessite environ 5 GB de RAM (pas de VRAM). Pour les configurations CPU seul, Phi-4 Mini (3,8B) et Llama 3.2 3B offrent le meilleur rapport qualité/vitesse.'
    },
    {
      q: 'Comment mettre à jour les modèles LLM locaux lors de la sortie de nouvelles versions ?',
      a: 'Ollama : exécutez à nouveau `ollama pull <model-name>` — seules les couches modifiées sont téléchargées. LM Studio : ouvrez le navigateur de modèles, trouvez la version mise à jour et téléchargez-la. Les anciens fichiers GGUF ne sont pas supprimés automatiquement — supprimez-les manuellement de ~/.ollama/models (Ollama) ou ~/Library/Application Support/LM Studio/models (macOS) pour libérer de l\'espace disque. Les nouveaux modèles apparaissent généralement dans la bibliothèque Ollama dans les jours qui suivent leur sortie officielle.'
    },
    {
      q: 'Quels sont les meilleurs modèles Ollama en 2026 ?',
      a: 'Sélection dans la bibliothèque Ollama : Qwen3.8-27B (notre choix pour une carte de 24 Go, `ollama pull qwen3.8:27b`, 18 Go), gpt-oss:20b (petit modèle, classe 16 Go), Gemma 4 (vision et appel d\'outils, de E2B à 31B ; `ollama pull gemma4:12b` pèse environ 8 Go), Qwen3 8B (`ollama pull qwen3:8b`, environ 5 Go) pour les machines de 8 Go, et les distillations DeepSeek-R1 pour le raisonnement pas à pas. Lancez n\'importe quel modèle avec `ollama run <name>` après l\'avoir téléchargé.'
    },
    {
      q: 'Quel est le meilleur LLM local pour une RTX 3060 12 Go ?',
      a: 'La RTX 3060 12 Go est un bon GPU pour les LLMs locaux. Meilleurs choix : Qwen3 14B (environ 9 Go, 9–12 tokens/sec), Gemma 4 12B (environ 8 Go, 11–14 tokens/sec), Qwen3 8B (16–20 tokens/sec) ou DeepSeek-R1 7B (10–12 tokens/sec). Llama 4 Scout ne tient pas : il demande environ 67 Go. Avec 12 Go de VRAM, vous êtes aussi au-dessus de la RTX 3060 Ti (8 Go) et accédez aux modèles de classe 13–14B en pleine qualité.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai : lequel utiliser ?',
      a: 'Ollama pour CLI et API OpenAI-compatible sur localhost:11434 — idéal développeurs. LM Studio pour GUI desktop et navigateur de modèles — idéal débutants. Jan.ai pour chat axé confidentialité avec boutique de modèles intégrée. Temps de setup : Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'Quels sont les meilleurs GPU économiques pour LLMs locaux en 2026 ?',
      a: 'Selon notre guide des GPU économiques : une RTX 3060 12 Go d\'occasion (environ 270–300 $, prix US) est la carte la moins chère qui vaille l\'achat ; elle exécute Qwen3 14B à 9–12 tokens/sec et Qwen3 8B à 16–20 tokens/sec. Parmi les cartes neuves : la RTX 5060 Ti 16 Go (environ 570–600 $) et l\'Intel Arc B580 12 Go (environ 250–290 $). Les prix ont augmenté en 2026 à cause d\'une pénurie de mémoire ; consultez le guide pour les chiffres actuels. Minimum recommandé : 8 Go de VRAM pour une inférence 7B utile.'
    },
  ],
  ja: [
    {
      q: 'ローカルLLMとは何ですか？',
      a: 'クラウドAPIではなく、自分のハードウェア上で動く大規模言語モデルです（例：Qwen3.8、Gemma 4、gpt-oss、DeepSeek）。プロンプトやファイルはお使いのマシンに残り、オフラインで動作し、利用制限がなく、ハードウェア購入後はトークンあたりの費用がかかりません。'
    },
    {
      q: 'ローカルLLMにはどの程度のVRAMが必要ですか？',
      a: '8 GB VRAMでQ4量子化の7〜8Bモデル（重みは約5 GB）を実行できます。16 GBなら13〜14Bモデルを快適に動かせます。70BモデルはQ4の重みだけで約42 GBが必要なため、48 GB構成（例：RTX 4090を2枚）が現実的な最小ラインです。Apple SiliconのUnified MemoryはVRAMとして数えられます。'
    },
    {
      q: 'OllamaとLM Studioの違いは何ですか？',
      a: 'Ollamaはシンプルなターミナルコマンドでモデルを実行するCLIツールで、`localhost:11434`でOpenAI互換APIを公開します。LM Studioはデスクトップ GUI、モデルブラウザ、組み込みチャットインターフェースを提供します。どちらも同じモデルをサポートします。'
    },
    {
      q: 'ローカルLLMはGPTやClaudeなどのクラウドモデルに対抗できますか？',
      a: 'Qwen3.8-27BやGemma 4のようなオープンウェイトモデルは、24 GBのGPU1枚で日常的なコーディング、文章作成、要約をこなせます。複雑な多段階の推論では、最上位のクラウドモデルが引き続き優位です。メーカーが公表するベンチマークの数値はテストによって異なるため、選ぶ前にご自身のプロンプトで試してください。'
    },
    {
      q: 'ローカルモデルはどのようにファインチューニングしますか？',
      a: 'ファインチューニングには500+個のラベル付きトレーニング例、QLоRAフレームワーク（4ビット量子化によるVRAM削減）、24 GB+ VRAM（またはクラウドGPUレンタル）、および7Bモデルの1–4時間のトレーニング時間が必要です。'
    },
    {
      q: '2026年にローカルLLMを実行するための最小限のハードウェアは何ですか？',
      a: '最小：8 GB RAMと最新のCPU（3B〜7Bモデルを約2〜5トークン/秒で実行）。推奨：8 GB以上のVRAMを搭載したGPU（RTX 3060以降）で、7〜8Bモデルを約15〜40トークン/秒。'
    },
    {
      q: 'ローカルLLMは無料で使用できますか？',
      a: 'ほぼ無料です。Ollamaはオープンソースで、LM Studioは無料で使えますがクローズドソースです。Qwen、Gemma、gpt-oss、Mistral、DeepSeekなど多くのオープンウェイトモデルは無料でダウンロードできますが、ライセンスは異なり、Llamaはコミュニティライセンスです。商用利用の前に条件をご確認ください。主なコストはハードウェアです。'
    },
    {
      q: '2026年のコーディング向けベストローカルLLMは何ですか？',
      a: '24 GBのGPUにはQwen3.8 27Bが第一候補です（18 GB、256Kコンテキスト）。Devstral Small 2（24B、15 GB）は16 GBのマシンに、Qwen3 8Bは8 GBのマシンに向いています。IDEのオートコンプリートにはCodestral 22Bが定番で、CPUのみならPhi-4 Miniが実用的です。ベンチマーク値はメーカー公表のものです。詳細はコーディングガイドをご覧ください。'
    },
    {
      q: 'GPUなしでローカルLLMを実行できますか？',
      a: 'はい。最新のCPUなら、Ollama（CPUモード）またはLM StudioでQ4量子化の3B〜7Bモデルを実行できます。速度の目安は、ノートPCのCPUで7Bモデルが約2〜8トークン/秒、3〜4Bモデルはそれより速く、RTX 4060では20〜50トークン/秒です。7B Q4には約5 GBのRAM（VRAMではなく）が必要です。CPUのみの構成では、Phi-4 Mini（3.8B）とLlama 3.2 3Bが品質と速度のバランスに優れています。'
    },
    {
      q: '新しいバージョンがリリースされたときにローカルLLMモデルを更新するにはどうすればよいですか？',
      a: 'Ollama: `ollama pull <model-name>`を再実行します — 変更されたレイヤーのみをダウンロードします。LM Studio: モデルブラウザを開き、更新版を見つけてダウンロードします。古いGGUFファイルは自動削除されません — ~/.ollama/models（Ollama）または~/Library/Application Support/LM Studio/models（macOS）から手動で削除してディスク容量を解放します。新しいモデルは、公式リリースから数日以内にOllamaライブラリに登場するのが一般的です。'
    },
    {
      q: '2026年のベストOllamaモデルは？',
      a: 'Ollamaライブラリのおすすめ：Qwen3.8-27B（24 GBカードの第一候補、`ollama pull qwen3.8:27b`、18 GB）、gpt-oss:20b（小型、16 GBクラス）、Gemma 4（画像理解とツール呼び出し、E2Bから31Bまで。`ollama pull gemma4:12b`は約8 GB）、Qwen3 8B（`ollama pull qwen3:8b`、約5 GB）は8 GBマシン向け、段階的な推論にはDeepSeek-R1の蒸留モデル。プル後は`ollama run <name>`で実行できます。'
    },
    {
      q: 'RTX 3060 12 GB VRAMに最適なローカルLLMは？',
      a: 'RTX 3060 12 GBはローカルLLMに適したGPUです。おすすめ：Qwen3 14B（約9 GB、9〜12トークン/秒）、Gemma 4 12B（約8 GB、11〜14トークン/秒）、Qwen3 8B（16〜20トークン/秒）、DeepSeek-R1 7B（10〜12トークン/秒）。Llama 4 Scoutは約67 GBが必要なため収まりません。12 GB VRAMはRTX 3060 Ti（8 GB）を上回り、13〜14Bクラスのモデルをフル品質で使えます。'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai：どれを使うべきか？',
      a: 'localhost:11434のOpenAI互換APIが必要な開発者はOllama。デスクトップGUIとモデルブラウザが必要な初心者はLM Studio。プライバシー重視のチャットにはJan.ai。セットアップ時間：Ollama 2分、LM Studio 5分、Jan.ai 5分。'
    },
    {
      q: '2026年ローカルLLM向けのベスト予算GPUは？',
      a: '当サイトの予算GPUガイドによると、中古のRTX 3060 12 GB（約270〜300ドル、米国価格）が買う価値のある最安のカードで、Qwen3 14Bを9〜12トークン/秒、Qwen3 8Bを16〜20トークン/秒で実行できます。新品ではRTX 5060 Ti 16 GB（約570〜600ドル）とIntel Arc B580 12 GB（約250〜290ドル）が候補です。2026年はメモリ不足で価格が上がっているため、最新の価格はガイドでご確認ください。最低推奨：実用的な7B推論には8 GB VRAM。'
    },
  ],
  zh: [
    {
      q: '什么是本地LLM？',
      a: '在您自己的硬件上运行、而不是通过云API调用的大语言模型（例如Qwen3.8、Gemma 4、gpt-oss、DeepSeek）。提示词和文件留在您的机器上，可离线使用，没有使用限制，购买硬件后每个token零成本。'
    },
    {
      q: '本地LLM需要多少VRAM？',
      a: '8 GB VRAM可运行Q4量化的7–8B模型（权重约5 GB）。16 GB可流畅运行13–14B模型。70B模型的Q4权重约需42 GB，因此48 GB配置（例如两张RTX 4090）是实际可行的最低要求。Apple Silicon统一内存计为VRAM。'
    },
    {
      q: 'Ollama和LM Studio有什么区别？',
      a: 'Ollama是一个CLI工具，通过简单的终端命令运行模型，并在`localhost:11434`公开OpenAI兼容的API。LM Studio提供桌面GUI、模型浏览器和内置聊天界面。两者都支持相同的模型。'
    },
    {
      q: '本地LLM能否与GPT或Claude等云模型相匹敌？',
      a: 'Qwen3.8-27B和Gemma 4等开放权重模型，在单张24 GB GPU上就能处理日常的编程、写作和摘要任务。在复杂的多步骤推理上，顶级云端模型仍有优势。厂商公布的基准成绩因测试而异，选择前请用自己的提示词试一试。'
    },
    {
      q: '如何微调本地模型？',
      a: '微调需要500个以上标记的训练示例、QLoRA框架（通过4位量化降低VRAM要求）、24 GB+ VRAM（或云GPU租赁）和7B模型1–4小时的训练时间。'
    },
    {
      q: '2026年运行本地LLM的最少硬件要求是什么？',
      a: '最低要求：8 GB RAM和任何现代CPU（以约2–5令牌/秒运行3B–7B模型）。推荐：具有8 GB+ VRAM的GPU（RTX 3060或更新），7–8B模型可达约15–40令牌/秒。'
    },
    {
      q: '本地LLM可以免费使用吗？',
      a: '基本免费。Ollama是开源的；LM Studio可免费使用，但不开源。大多数开放权重模型（Qwen、Gemma、gpt-oss、Mistral、DeepSeek）可免费下载，但许可证各不相同，Llama使用社区许可证——商用前请先查看条款。主要成本是硬件。'
    },
    {
      q: '2026年最佳编码本地LLM是什么？',
      a: '24 GB GPU首选Qwen3.8 27B（18 GB，256K上下文）。Devstral Small 2（24B，15 GB）适合16 GB设备，Qwen3 8B适合8 GB设备。Codestral 22B仍是IDE自动补全的常见选择，仅CPU时Phi-4 Mini是实用之选。基准分数由厂商公布，详情见编程指南。'
    },
    {
      q: '没有GPU可以运行本地LLM吗？',
      a: '可以。任何现代CPU都可以使用Ollama（CPU模式）或LM Studio在Q4量化下运行3B–7B模型。典型速度：笔记本CPU上运行7B模型约2–8令牌/秒，3–4B模型更快，相比之下RTX 4060上为20–50令牌/秒。7B Q4需要约5 GB RAM（非VRAM）。对于仅CPU设置，Phi-4 Mini（3.8B）和Llama 3.2 3B在质量与速度之间的平衡最好。'
    },
    {
      q: '发布新版本时如何更新本地LLM模型？',
      a: 'Ollama：再次运行`ollama pull <model-name>`— 仅下载更改的层。LM Studio：打开模型浏览器，找到更新版本并下载。旧的GGUF文件不会自动删除— 从~/.ollama/models（Ollama）或~/Library/Application Support/LM Studio/models（macOS）手动删除以释放磁盘空间。新模型通常会在官方发布后几天内出现在Ollama模型库中。'
    },
    {
      q: '2026年最佳Ollama模型是什么？',
      a: 'Ollama模型库精选：Qwen3.8-27B（24 GB显卡的首选，`ollama pull qwen3.8:27b`，18 GB）、gpt-oss:20b（小模型，16 GB档）、Gemma 4（视觉与工具调用，E2B到31B；`ollama pull gemma4:12b`约8 GB）、Qwen3 8B（`ollama pull qwen3:8b`，约5 GB，适合8 GB设备），以及用于逐步推理的DeepSeek-R1蒸馏模型。拉取后用`ollama run <name>`运行任意模型。'
    },
    {
      q: 'RTX 3060 12 GB最适合哪款本地LLM？',
      a: 'RTX 3060 12 GB是适合本地LLM的GPU。最佳选择：Qwen3 14B（约9 GB，9–12令牌/秒）、Gemma 4 12B（约8 GB，11–14令牌/秒）、Qwen3 8B（16–20令牌/秒）或DeepSeek-R1 7B（10–12令牌/秒）。Llama 4 Scout放不下：它需要约67 GB。12 GB VRAM也高于RTX 3060 Ti（8 GB），可以完整品质运行13–14B级别的模型。'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai：该用哪个？',
      a: '需要CLI和localhost:11434 OpenAI兼容API的开发者用Ollama。需要桌面GUI和模型浏览器的初学者用LM Studio。注重隐私的聊天用Jan.ai。设置时间：Ollama 2分钟，LM Studio 5分钟，Jan.ai 5分钟。'
    },
    {
      q: '2026年本地LLM最佳预算GPU是什么？',
      a: '根据我们的预算GPU指南：二手RTX 3060 12 GB（约270–300美元，美国价格）是最便宜且值得买的显卡，运行Qwen3 14B约9–12令牌/秒，Qwen3 8B约16–20令牌/秒。新卡可考虑RTX 5060 Ti 16 GB（约570–600美元）和Intel Arc B580 12 GB（约250–290美元）。2026年因内存短缺价格上涨，最新价格请查看指南。最低推荐：8 GB VRAM，用于实用的7B推理。'
    },
  ],
  es: [
    {
      q: '¿Qué es un LLM local?',
      a: 'Un modelo de lenguaje grande (p. ej., Qwen3.8, Gemma 4, gpt-oss, DeepSeek) que se ejecuta en tu propio hardware en lugar de en una API cloud. Tus prompts y archivos se quedan en tu equipo, funciona sin conexión, no tiene límites de uso y no cuesta nada por token tras comprar el hardware.'
    },
    {
      q: '¿Cuánta VRAM necesito para un LLM local?',
      a: '8 GB de VRAM ejecutan modelos 7–8B con cuantización Q4 (unos 5 GB de pesos). 16 GB gestionan modelos 13–14B cómodamente. Un modelo 70B necesita unos 42 GB para sus pesos Q4, así que una configuración de 48 GB (por ejemplo, dos RTX 4090) es el mínimo práctico. La memoria unificada de Apple Silicon cuenta como VRAM.'
    },
    {
      q: '¿Cuál es la diferencia entre Ollama y LM Studio?',
      a: 'Ollama es una herramienta CLI que ejecuta modelos mediante comandos de terminal sencillos y expone una API compatible con OpenAI en `localhost:11434`. LM Studio ofrece una GUI de escritorio, explorador de modelos e interfaz de chat integrada. Ambos soportan los mismos modelos.'
    },
    {
      q: '¿Pueden los LLMs locales competir con modelos cloud como GPT o Claude?',
      a: 'Modelos de pesos abiertos como Qwen3.8-27B y Gemma 4 resuelven código, redacción y resúmenes cotidianos en una sola GPU de 24 GB. Los mejores modelos cloud siguen teniendo ventaja en el razonamiento complejo de varios pasos. Las puntuaciones de benchmark que publican los fabricantes varían según la prueba, así que prueba tus propios prompts antes de decidir.'
    },
    {
      q: '¿Cómo hago fine-tuning de un modelo local?',
      a: 'El fine-tuning requiere 500+ ejemplos de entrenamiento etiquetados, el framework QLoRA (reduce los requisitos de VRAM mediante cuantización de 4 bits), 24 GB+ VRAM (o alquiler de GPU cloud) y 1–4 horas de entrenamiento para un modelo 7B.'
    },
    {
      q: '¿Cuál es el hardware mínimo para ejecutar un LLM local en 2026?',
      a: 'Mínimo: 8 GB de RAM y cualquier CPU moderna (ejecuta modelos 3B–7B a unos 2–5 tokens/seg). Recomendado: una GPU con 8 GB+ de VRAM (RTX 3060 o superior) para unos 15–40 tokens/seg en modelos 7–8B.'
    },
    {
      q: '¿Son gratuitos los LLMs locales?',
      a: 'En su mayor parte, sí. Ollama es de código abierto; LM Studio es gratuito, pero su código no es abierto. La mayoría de los modelos de pesos abiertos (Qwen, Gemma, gpt-oss, Mistral, DeepSeek) se descargan gratis, pero las licencias difieren y Llama usa una licencia comunitaria: revisa las condiciones antes de un uso comercial. El coste principal es tu hardware.'
    },
    {
      q: '¿Cuál es el mejor LLM local para código en 2026?',
      a: 'Qwen3.8 27B es la mejor opción para una GPU de 24 GB (18 GB, contexto de 256K). Devstral Small 2 (24B, 15 GB) encaja en equipos de 16 GB, y Qwen3 8B en los de 8 GB. Codestral 22B sigue siendo una opción habitual para el autocompletado en el IDE, y Phi-4 Mini es la opción práctica para solo CPU. Las puntuaciones de benchmark son las que publican los fabricantes; consulta la guía de código para más detalle.'
    },
    {
      q: '¿Puedo ejecutar un LLM local sin GPU?',
      a: 'Sí. Cualquier CPU moderna puede ejecutar modelos 3B–7B con cuantización Q4 usando Ollama (modo CPU) o LM Studio. La velocidad típica ronda los 2–8 tokens/seg con modelos 7B en una CPU de portátil, y es mayor con modelos de 3–4B, frente a 20–50 tokens/seg en una RTX 4060. 7B Q4 requiere ~5 GB de RAM (no VRAM). Para configuraciones solo-CPU, Phi-4 Mini (3,8B) y Llama 3.2 3B ofrecen la mejor relación calidad-velocidad.'
    },
    {
      q: '¿Cómo actualizo los modelos LLM locales cuando se lanzan nuevas versiones?',
      a: 'Ollama: ejecuta `ollama pull <nombre-modelo>` de nuevo — solo descarga las capas modificadas. LM Studio: abre el explorador de modelos, encuentra la versión actualizada y descárgala. Los archivos GGUF antiguos no se eliminan automáticamente — bórralos manualmente de ~/.ollama/models (Ollama) o ~/Library/Application Support/LM Studio/models (macOS) para liberar espacio. Los modelos nuevos suelen aparecer en la biblioteca de Ollama en los días posteriores al lanzamiento oficial.'
    },
    {
      q: '¿Cuáles son los mejores modelos de Ollama en 2026?',
      a: 'Selección en la biblioteca de Ollama: Qwen3.8-27B (nuestra elección para una tarjeta de 24 GB, `ollama pull qwen3.8:27b`, 18 GB), gpt-oss:20b (modelo pequeño, clase de 16 GB), Gemma 4 (visión y uso de herramientas, de E2B a 31B; `ollama pull gemma4:12b` pesa unos 8 GB), Qwen3 8B (`ollama pull qwen3:8b`, unos 5 GB) para equipos de 8 GB y las destilaciones de DeepSeek-R1 para razonamiento paso a paso. Ejecuta cualquier modelo con `ollama run <nombre>` tras descargarlo.'
    },
    {
      q: '¿Cuál es el mejor LLM local para una RTX 3060 con 12 GB VRAM?',
      a: 'La RTX 3060 de 12 GB es una buena GPU para LLMs locales. Mejores opciones: Qwen3 14B (unos 9 GB, 9–12 tokens/seg), Gemma 4 12B (unos 8 GB, 11–14 tokens/seg), Qwen3 8B (16–20 tokens/seg) o DeepSeek-R1 7B (10–12 tokens/seg). Llama 4 Scout no cabe: necesita unos 67 GB. Con 12 GB de VRAM también quedas por encima de la RTX 3060 Ti (8 GB) y accedes a modelos de clase 13–14B en calidad completa.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: ¿cuál debo usar?',
      a: 'Usa Ollama si quieres una herramienta CLI con API compatible con OpenAI en localhost:11434 — ideal para desarrolladores y automatización. Usa LM Studio si quieres GUI de escritorio, explorador de modelos e interfaz de chat — ideal para principiantes. Usa Jan.ai si quieres una app de chat centrada en privacidad con tienda de modelos integrada. Los tres soportan los mismos modelos GGUF. Tiempo de configuración: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: '¿Cuáles son las mejores GPU económicas para LLMs locales en 2026?',
      a: 'Según nuestra guía de GPU económicas: una RTX 3060 de 12 GB de segunda mano (unos 270–300 $, precios de EE. UU.) es la tarjeta más barata que merece la pena; ejecuta Qwen3 14B a 9–12 tokens/seg y Qwen3 8B a 16–20 tokens/seg. Entre las nuevas están la RTX 5060 Ti de 16 GB (unos 570–600 $) y la Intel Arc B580 de 12 GB (unos 250–290 $). Los precios subieron en 2026 por una escasez de memoria; consulta la guía para las cifras actuales. Mínimo recomendado: 8 GB de VRAM para inferencia 7B útil.'
    },
  ],
  pt: [
    {
      q: 'O que é um LLM local?',
      a: 'Um modelo de linguagem grande (por exemplo, Qwen3.8, Gemma 4, gpt-oss, DeepSeek) que roda no seu próprio hardware em vez de em uma API na cloud. Seus prompts e arquivos ficam na sua máquina, ele funciona offline, não tem limites de uso e não custa nada por token depois da compra do hardware.'
    },
    {
      q: 'Quanta VRAM eu preciso para um LLM local?',
      a: '8 GB de VRAM rodam modelos 7–8B com quantização Q4 (cerca de 5 GB de pesos). 16 GB lidam com modelos 13–14B confortavelmente. Um modelo 70B precisa de cerca de 42 GB para os pesos Q4, então uma configuração de 48 GB (por exemplo, duas RTX 4090) é o mínimo prático. A memória unificada do Apple Silicon conta como VRAM.'
    },
    {
      q: 'Qual é a diferença entre Ollama e LM Studio?',
      a: 'O Ollama é uma ferramenta CLI que roda modelos por meio de comandos simples no terminal e expõe uma API compatível com OpenAI em `localhost:11434`. O LM Studio oferece uma GUI desktop, navegador de modelos e interface de chat integrada. Ambos suportam os mesmos modelos.'
    },
    {
      q: 'LLMs locais conseguem competir com modelos na cloud como GPT ou Claude?',
      a: 'Modelos de pesos abertos como Qwen3.8-27B e Gemma 4 dão conta de código, redação e resumos do dia a dia em uma única GPU de 24 GB. Os melhores modelos na cloud ainda levam vantagem no raciocínio complexo de várias etapas. As pontuações de benchmark divulgadas pelos fabricantes variam conforme o teste, então experimente seus próprios prompts antes de decidir.'
    },
    {
      q: 'Como faço fine-tuning de um modelo local?',
      a: 'O fine-tuning exige 500+ exemplos de treinamento rotulados, o framework QLoRA (reduz o requisito de VRAM via quantização de 4 bits), 24 GB+ VRAM (ou aluguel de GPU na cloud) e 1–4 horas de tempo de treinamento para um modelo 7B.'
    },
    {
      q: 'Qual é o hardware mínimo para rodar um LLM local em 2026?',
      a: 'Mínimo: 8 GB de RAM e qualquer CPU moderna (roda modelos 3B–7B a cerca de 2–5 tokens/s). Recomendado: uma GPU com 8 GB+ de VRAM (RTX 3060 ou mais recente) para cerca de 15–40 tokens/s em modelos 7–8B.'
    },
    {
      q: 'Os LLMs locais são gratuitos?',
      a: 'Em grande parte, sim. O Ollama é de código aberto; o LM Studio é gratuito, mas de código fechado. A maioria dos modelos de pesos abertos (Qwen, Gemma, gpt-oss, Mistral, DeepSeek) pode ser baixada de graça, mas as licenças variam e o Llama usa uma licença comunitária: confira os termos antes de usar comercialmente. O custo principal é o seu hardware.'
    },
    {
      q: 'Qual é o melhor LLM local para código em 2026?',
      a: 'O Qwen3.8 27B é a melhor escolha para uma GPU de 24 GB (18 GB, contexto de 256K). O Devstral Small 2 (24B, 15 GB) serve para máquinas de 16 GB, e o Qwen3 8B para as de 8 GB. O Codestral 22B continua sendo uma escolha comum para autocompletar no IDE, e o Phi-4 Mini é a opção prática só com CPU. As pontuações de benchmark são divulgadas pelos fabricantes; veja o guia de código para mais detalhes.'
    },
    {
      q: 'Posso rodar um LLM local sem GPU?',
      a: 'Sim. Qualquer CPU moderna pode rodar modelos 3B–7B com quantização Q4 usando o Ollama (modo CPU) ou o LM Studio. A velocidade típica fica em cerca de 2–8 tokens/s para modelos 7B em uma CPU de notebook, e é maior com modelos de 3–4B, contra 20–50 tokens/s em uma RTX 4060. 7B Q4 exige ~5 GB de RAM (não VRAM). Para configurações só com CPU, o Phi-4 Mini (3,8B) e o Llama 3.2 3B oferecem a melhor relação qualidade-velocidade.'
    },
    {
      q: 'Como atualizo os modelos de LLM local quando novas versões são lançadas?',
      a: 'Ollama: rode `ollama pull <model-name>` novamente — ele baixa apenas as camadas alteradas. LM Studio: abra o navegador de modelos, encontre a versão atualizada e baixe-a. Os arquivos GGUF antigos não são removidos automaticamente — apague-os manualmente em ~/.ollama/models (Ollama) ou ~/Library/Application Support/LM Studio/models (macOS) para liberar espaço em disco. Os modelos novos costumam aparecer na biblioteca do Ollama em poucos dias após o lançamento oficial.'
    },
    {
      q: 'Quais são os melhores modelos Ollama em 2026?',
      a: 'Seleção na biblioteca do Ollama: Qwen3.8-27B (nossa escolha para uma placa de 24 GB, `ollama pull qwen3.8:27b`, 18 GB), gpt-oss:20b (modelo pequeno, classe de 16 GB), Gemma 4 (visão e uso de ferramentas, de E2B a 31B; `ollama pull gemma4:12b` pesa cerca de 8 GB), Qwen3 8B (`ollama pull qwen3:8b`, cerca de 5 GB) para máquinas de 8 GB e as destilações do DeepSeek-R1 para raciocínio passo a passo. Rode qualquer modelo com `ollama run <name>` depois de baixá-lo.'
    },
    {
      q: 'Qual é o melhor LLM local para uma RTX 3060 12 GB VRAM?',
      a: 'A RTX 3060 de 12 GB é uma boa GPU para LLMs locais. Melhores opções: Qwen3 14B (cerca de 9 GB, 9–12 tokens/s), Gemma 4 12B (cerca de 8 GB, 11–14 tokens/s), Qwen3 8B (16–20 tokens/s) ou DeepSeek-R1 7B (10–12 tokens/s). O Llama 4 Scout não cabe: ele precisa de cerca de 67 GB. Com 12 GB de VRAM você também fica acima da RTX 3060 Ti (8 GB) e ganha acesso a modelos da classe 13–14B em qualidade total.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: qual devo usar?',
      a: 'Use o Ollama se quiser uma ferramenta CLI com API compatível com OpenAI em localhost:11434 — ideal para desenvolvedores e automação. Use o LM Studio se quiser uma GUI desktop, navegador de modelos e interface de chat — ideal para iniciantes. Use o Jan.ai se quiser um app de chat com foco em privacidade e loja de modelos integrada. Os três suportam os mesmos modelos GGUF. Tempo de configuração: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.'
    },
    {
      q: 'Quais são as melhores GPUs econômicas para LLMs locais em 2026?',
      a: 'Segundo o nosso guia de GPUs econômicas: uma RTX 3060 de 12 GB usada (cerca de US$ 270–300, preços dos EUA) é a placa mais barata que vale a compra; ela roda o Qwen3 14B a 9–12 tokens/s e o Qwen3 8B a 16–20 tokens/s. Entre as novas estão a RTX 5060 Ti de 16 GB (cerca de US$ 570–600) e a Intel Arc B580 de 12 GB (cerca de US$ 250–290). Os preços subiram em 2026 por causa de uma escassez de memória; veja o guia para os valores atuais. Os preços no Brasil podem variar bastante devido a impostos de importação. Mínimo recomendado: 8 GB de VRAM para inferência 7B útil.'
    },
  ],
  ko: [
    {
      q: '로컬 LLM이란 무엇입니까?',
      a: '클라우드 API 대신 자신의 하드웨어에서 실행되는 대규모 언어 모델입니다(예: Qwen3.8, Gemma 4, gpt-oss, DeepSeek). 프롬프트와 파일이 사용자의 기기에 남고, 오프라인에서 동작하며, 사용 제한이 없고, 하드웨어 구입 후에는 토큰당 비용이 들지 않습니다.'
    },
    {
      q: '로컬 LLM에는 VRAM이 얼마나 필요합니까?',
      a: '8 GB VRAM으로 Q4 양자화의 7~8B 모델(가중치 약 5 GB)을 실행할 수 있습니다. 16 GB면 13~14B 모델을 여유 있게 처리합니다. 70B 모델은 Q4 가중치만 약 42 GB가 필요하므로 48 GB 구성(예: RTX 4090 두 장)이 현실적인 최소 사양입니다. Apple Silicon의 통합 메모리는 VRAM으로 계산됩니다.'
    },
    {
      q: 'Ollama와 LM Studio의 차이는 무엇입니까?',
      a: 'Ollama는 간단한 터미널 명령으로 모델을 실행하는 CLI 도구이며 `localhost:11434`에서 OpenAI 호환 API를 제공합니다. LM Studio는 데스크톱 GUI, 모델 브라우저, 내장 채팅 인터페이스를 제공합니다. 둘 다 같은 모델을 지원합니다.'
    },
    {
      q: '로컬 LLM이 GPT나 Claude 같은 클라우드 모델에 필적할 수 있습니까?',
      a: 'Qwen3.8-27B나 Gemma 4 같은 오픈 웨이트 모델은 24 GB GPU 한 장으로 일상적인 코딩, 글쓰기, 요약을 처리합니다. 복잡한 다단계 추론에서는 최상위 클라우드 모델이 여전히 앞섭니다. 제조사가 발표하는 벤치마크 수치는 테스트마다 다르므로, 선택하기 전에 직접 프롬프트로 시험해 보시기 바랍니다.'
    },
    {
      q: '로컬 모델을 파인튜닝하려면 어떻게 합니까?',
      a: '파인튜닝에는 500개 이상의 레이블이 지정된 학습 예제, QLoRA 프레임워크(4비트 양자화로 VRAM 요구량을 줄임), 24 GB 이상의 VRAM(또는 클라우드 GPU 대여), 그리고 7B 모델 기준 1~4시간의 학습 시간이 필요합니다.'
    },
    {
      q: '2026년에 로컬 LLM을 실행하기 위한 최소 하드웨어는 무엇입니까?',
      a: '최소: 8 GB RAM과 최신 CPU(3B~7B 모델을 약 2~5 tokens/sec로 실행). 권장: 8 GB 이상의 VRAM을 갖춘 GPU(RTX 3060 이상)로 7~8B 모델에서 약 15~40 tokens/sec.'
    },
    {
      q: '로컬 LLM은 무료로 사용할 수 있습니까?',
      a: '대부분 무료입니다. Ollama는 오픈소스이고, LM Studio는 무료로 사용할 수 있지만 소스가 공개되어 있지 않습니다. Qwen, Gemma, gpt-oss, Mistral, DeepSeek 같은 대부분의 오픈 웨이트 모델은 무료로 내려받을 수 있지만 라이선스가 서로 다르고 Llama는 커뮤니티 라이선스를 사용하므로, 상업적으로 사용하기 전에 조건을 확인하시기 바랍니다. 주된 비용은 하드웨어입니다.'
    },
    {
      q: '2026년 코딩에 가장 좋은 로컬 LLM은 무엇입니까?',
      a: '24 GB GPU에는 Qwen3.8 27B가 1순위입니다(18 GB, 256K 컨텍스트). Devstral Small 2(24B, 15 GB)는 16 GB 기기에, Qwen3 8B는 8 GB 기기에 적합합니다. IDE 자동 완성에는 Codestral 22B가 여전히 흔한 선택이며, CPU만 사용한다면 Phi-4 Mini가 실용적입니다. 벤치마크 점수는 제조사가 발표한 값이며, 자세한 내용은 코딩 가이드를 참고하시기 바랍니다.'
    },
    {
      q: 'GPU 없이 로컬 LLM을 실행할 수 있습니까?',
      a: '가능합니다. 최신 CPU라면 Ollama(CPU 모드)나 LM Studio로 Q4 양자화의 3B~7B 모델을 실행할 수 있습니다. 속도는 노트북 CPU에서 7B 모델이 약 2~8 tokens/sec, 3~4B 모델은 그보다 빠르며, RTX 4060에서는 20~50 tokens/sec입니다. 7B Q4에는 약 5 GB의 RAM(VRAM이 아님)이 필요합니다. CPU만 사용하는 구성에서는 Phi-4 Mini(3.8B)와 Llama 3.2 3B가 품질 대비 속도가 가장 좋습니다.'
    },
    {
      q: '새 버전이 나오면 로컬 LLM 모델을 어떻게 업데이트합니까?',
      a: 'Ollama: `ollama pull <model-name>`을 다시 실행합니다 — 변경된 레이어만 내려받습니다. LM Studio: 모델 브라우저를 열어 업데이트된 버전을 찾아 내려받습니다. 이전 GGUF 파일은 자동으로 삭제되지 않으므로 ~/.ollama/models(Ollama) 또는 ~/Library/Application Support/LM Studio/models(macOS)에서 직접 삭제해 디스크 공간을 확보하세요. 새 모델은 보통 공식 출시 후 며칠 안에 Ollama 라이브러리에 올라옵니다.'
    },
    {
      q: '2026년 최고의 Ollama 모델은 무엇입니까?',
      a: 'Ollama 라이브러리의 추천: Qwen3.8-27B(24 GB 카드에 권장, `ollama pull qwen3.8:27b`, 18 GB), gpt-oss:20b(소형 모델, 16 GB급), Gemma 4(비전 및 도구 호출, E2B부터 31B까지, `ollama pull gemma4:12b`는 약 8 GB), 8 GB 기기용 Qwen3 8B(`ollama pull qwen3:8b`, 약 5 GB), 단계별 추론용 DeepSeek-R1 증류 모델. 내려받은 뒤 `ollama run <name>`으로 어떤 모델이든 실행할 수 있습니다.'
    },
    {
      q: 'RTX 3060 12 GB에는 어떤 로컬 LLM이 가장 적합합니까?',
      a: 'RTX 3060 12 GB는 로컬 LLM에 적합한 GPU입니다. 추천 모델: Qwen3 14B(약 9 GB, 9~12 tokens/sec), Gemma 4 12B(약 8 GB, 11~14 tokens/sec), Qwen3 8B(16~20 tokens/sec), DeepSeek-R1 7B(10~12 tokens/sec). Llama 4 Scout는 약 67 GB가 필요해 들어가지 않습니다. 12 GB VRAM은 RTX 3060 Ti(8 GB)보다 넉넉해 13~14B급 모델을 온전한 품질로 사용할 수 있습니다.'
    },
    {
      q: 'Ollama vs LM Studio vs Jan.ai: 무엇을 사용해야 합니까?',
      a: 'CLI와 localhost:11434의 OpenAI 호환 API가 필요한 개발자에게는 Ollama, 데스크톱 GUI와 모델 브라우저가 필요한 입문자에게는 LM Studio, 개인정보 보호 중심의 채팅 앱과 내장 모델 스토어가 필요하면 Jan.ai가 적합합니다. 세 가지 모두 같은 GGUF 모델을 지원합니다. 설정 시간: Ollama 2분, LM Studio 5분, Jan.ai 5분.'
    },
    {
      q: '2026년 로컬 LLM에 적합한 가성비 GPU는 무엇입니까?',
      a: '당사의 가성비 GPU 가이드에 따르면, 중고 RTX 3060 12 GB(약 $270~300, 미국 가격)가 살 만한 가장 저렴한 카드이며 Qwen3 14B를 9~12 tokens/sec, Qwen3 8B를 16~20 tokens/sec로 실행합니다. 새 제품으로는 RTX 5060 Ti 16 GB(약 $570~600)와 Intel Arc B580 12 GB(약 $250~290)가 있습니다. 2026년에는 메모리 부족으로 가격이 올랐으므로 최신 수치는 가이드를 확인하세요. 최소 권장 사양: 실용적인 7B 추론에는 8 GB VRAM.'
    },
  ],
  ar: [
    {
      q: 'ما هو النموذج اللغوي المحلي؟',
      a: 'نموذج لغوي كبير (مثل ⁨Qwen3.8⁩ و⁨Gemma 4⁩ و⁨gpt-oss⁩ و⁨DeepSeek⁩) يعمل على جهازك الخاص بدلًا من واجهة ⁨API⁩ سحابية. تبقى مطالباتك وملفاتك على جهازك، ويعمل دون اتصال، وبلا حدود استخدام، وبلا أي تكلفة لكل توكن بعد شراء الجهاز.'
    },
    {
      q: 'كم ⁨VRAM⁩ أحتاج للنموذج اللغوي المحلي؟',
      a: 'تشغّل ⁨8 GB VRAM⁩ نماذج 7-⁨8B⁩ بتكميم ⁨Q4⁩ (نحو ⁨5 GB⁩ للأوزان). وتتعامل ⁨16 GB⁩ مع نماذج 13-⁨14B⁩ بسهولة. ويحتاج نموذج ⁨70B⁩ إلى نحو ⁨42 GB⁩ لأوزانه بتكميم ⁨Q4⁩، لذا فإن إعدادًا بذاكرة ⁨48 GB⁩ (مثل بطاقتَي ⁨RTX 4090⁩) هو الحد الأدنى العملي. الذاكرة الموحّدة في ⁨Apple Silicon⁩ تُحتسب كـ⁨VRAM.⁩'
    },
    {
      q: 'ما الفرق بين ⁨Ollama⁩ و⁨LM Studio⁩؟',
      a: '⁨Ollama⁩ أداة ⁨CLI⁩ تشغّل النماذج عبر أوامر طرفية بسيطة وتوفّر واجهة ⁨API⁩ متوافقة مع ⁨OpenAI⁩ على `localhost:11434`. أما ⁨LM Studio⁩ فتقدّم واجهة رسومية لسطح المكتب، ومتصفّح نماذج، وواجهة محادثة مدمجة. كلاهما يدعم نفس النماذج.'
    },
    {
      q: 'هل تضاهي النماذج المحلية نماذج سحابية مثل ⁨GPT⁩ و⁨Claude⁩؟',
      a: 'تتولى النماذج مفتوحة الأوزان مثل ⁨Qwen3.8-27B⁩ و⁨Gemma 4⁩ مهام البرمجة والكتابة والتلخيص اليومية على بطاقة ⁨GPU⁩ واحدة بذاكرة ⁨24 GB.⁩ وتحتفظ النماذج السحابية الرائدة بأفضلية في الاستدلال المعقّد متعدد الخطوات. تختلف نتائج المعايير التي تعلنها الشركات باختلاف الاختبار، فجرّب مطالباتك الخاصة قبل أن تقرّر.'
    },
    {
      q: 'كيف أُجري الضبط الدقيق لنموذج محلي؟',
      a: 'يتطلّب الضبط الدقيق 500+ مثال تدريب موسوم، وإطار ⁨QLoRA⁩ (يخفّض متطلبات ⁨VRAM⁩ عبر تكميم 4-بت)، و⁨24 GB+ VRAM⁩ على الأقل (أو استئجار ⁨GPU⁩ سحابية)، وساعة إلى 4 ساعات وقت تدريب لنموذج ⁨7B⁩.'
    },
    {
      q: 'ما الحد الأدنى من الأجهزة لتشغيل نموذج لغوي محلي في 2026؟',
      a: 'الحد الأدنى: ⁨8 GB RAM⁩ وأي معالج ⁨CPU⁩ حديث (يشغّل نماذج ⁨3B-7B⁩ بسرعة نحو 2-5 توكن/ثانية). الموصى به: بطاقة ⁨GPU⁩ بذاكرة ⁨8 GB+ VRAM⁩ فأكثر (⁨RTX 3060⁩ أو أحدث) لسرعة نحو 15-40 توكن/ثانية على نماذج 7-⁨8B.⁩'
    },
    {
      q: 'هل النماذج اللغوية المحلية مجانية للاستخدام؟',
      a: 'نعم في معظمه. ⁨Ollama⁩ مفتوح المصدر، أما ⁨LM Studio⁩ فمجاني الاستخدام لكنه مغلق المصدر. ويمكن تنزيل معظم النماذج مفتوحة الأوزان (⁨Qwen⁩ و⁨Gemma⁩ و⁨gpt-oss⁩ و⁨Mistral⁩ و⁨DeepSeek⁩) مجانًا، لكن التراخيص تختلف، ويستخدم ⁨Llama⁩ رخصة مجتمعية، فراجع الشروط قبل أي استخدام تجاري. التكلفة الرئيسية هي جهازك.'
    },
    {
      q: 'ما أفضل نموذج لغوي محلي للبرمجة في 2026؟',
      a: 'يُعدّ ⁨Qwen3.8 27B⁩ الاختيار الأول لبطاقة ⁨GPU⁩ بذاكرة ⁨24 GB⁩ (⁨18 GB⁩، سياق ⁨256K⁩). ويناسب ⁨Devstral Small 2⁩ (⁨24B⁩، ⁨15 GB⁩) الأجهزة بذاكرة ⁨16 GB⁩، ويناسب ⁨Qwen3 8B⁩ أجهزة ⁨8 GB.⁩ ويظل ⁨Codestral 22B⁩ خيارًا شائعًا للإكمال التلقائي في بيئة التطوير، ويُعدّ ⁨Phi-4 Mini⁩ الخيار العملي لأنظمة ⁨CPU⁩ فقط. نتائج المعايير تعلنها الشركات المطوّرة؛ راجع دليل البرمجة للتفاصيل.'
    },
    {
      q: 'هل يمكنني تشغيل نموذج محلي دون بطاقة ⁨GPU⁩؟',
      a: 'نعم. يستطيع أي معالج ⁨CPU⁩ حديث تشغيل نماذج ⁨3B-7B⁩ بتكميم ⁨Q4⁩ عبر ⁨Ollama⁩ (وضع ⁨CPU⁩) أو ⁨LM Studio.⁩ السرعة المعتادة نحو 2-8 توكن/ثانية لنماذج ⁨7B⁩ على معالج حاسوب محمول، وأسرع لنماذج 3-⁨4B⁩، مقابل 20-50 توكن/ثانية على ⁨RTX 4060.⁩ يحتاج ⁨7B Q4⁩ إلى نحو ⁨5 GB RAM⁩ (وليس ⁨VRAM⁩). لأنظمة ⁨CPU⁩ فقط، يقدّم ⁨Phi-4 Mini⁩ (⁨3.8B⁩) و⁨Llama 3.2 3B⁩ أفضل نسبة جودة إلى سرعة.'
    },
    {
      q: 'كيف أُحدّث نماذج ⁨LLM⁩ المحلية عند صدور إصدارات جديدة؟',
      a: '⁨Ollama:⁩ شغّل `ollama pull <model-name>` مجددًا — يُنزَّل فقط الطبقات المتغيّرة. ⁨LM Studio:⁩ افتح متصفّح النماذج، وابحث عن الإصدار المحدَّث، ونزّله. لا تُحذف ملفات ⁨GGUF⁩ القديمة تلقائيًا — احذفها يدويًا من `~/.ollama/models` (⁨Ollama⁩) أو `~/Library/Application Support/LM Studio/models` (⁨macOS⁩) لتحرير مساحة القرص. وتظهر النماذج الجديدة عادةً في مكتبة ⁨Ollama⁩ خلال أيام من الإصدار الرسمي.'
    },
    {
      q: 'ما أفضل نماذج ⁨Ollama⁩ في 2026؟',
      a: 'أبرز الخيارات في مكتبة ⁨Ollama: Qwen3.8-27B⁩ (اختيارنا لبطاقة ⁨24 GB⁩، `ollama pull qwen3.8:27b`، ⁨18 GB⁩)، و⁨gpt-oss:20b⁩ (نموذج صغير، فئة ⁨16 GB⁩)، و⁨Gemma 4⁩ (رؤية واستدعاء أدوات، من ⁨E2B⁩ إلى ⁨31B⁩؛ ويبلغ حجم `ollama pull gemma4:12b` نحو ⁨8 GB⁩)، و⁨Qwen3 8B⁩ (`ollama pull qwen3:8b`، نحو ⁨5 GB⁩) لأجهزة ⁨8 GB⁩، ونماذج ⁨DeepSeek-R1⁩ المقطّرة للاستدلال خطوة بخطوة. شغّل أي نموذج بالأمر `ollama run <name>` بعد سحبه.'
    },
    {
      q: 'ما أفضل نموذج محلي لبطاقة ⁨RTX 3060⁩ بذاكرة ⁨12 GB VRAM⁩؟',
      a: 'تُعدّ ⁨RTX 3060⁩ بذاكرة ⁨12 GB⁩ بطاقة ⁨GPU⁩ جيدة للنماذج المحلية. أنسب الخيارات: ⁨Qwen3 14B⁩ (نحو ⁨9 GB⁩، 9-12 توكن/ثانية)، و⁨Gemma 4 12B⁩ (نحو ⁨8 GB⁩، 11-14 توكن/ثانية)، و⁨Qwen3 8B⁩ (16-20 توكن/ثانية)، أو ⁨DeepSeek-R1 7B⁩ (10-12 توكن/ثانية). أما ⁨Llama 4 Scout⁩ فلا يتسع: فهو يحتاج إلى نحو ⁨67 GB.⁩ كما تضعك ذاكرة ⁨12 GB VRAM⁩ فوق ⁨RTX 3060 Ti⁩ (⁨8 GB⁩)، وتتيح لك تشغيل نماذج فئة 13-⁨14B⁩ بجودة كاملة.'
    },
    {
      q: '⁨Ollama⁩ مقابل ⁨LM Studio⁩ مقابل ⁨Jan.ai⁩: أيها أستخدم؟',
      a: 'استخدم ⁨Ollama⁩ إن أردت أداة ⁨CLI⁩ بواجهة ⁨API⁩ متوافقة مع ⁨OpenAI⁩ على `localhost:11434` — الأنسب للمطورين والأتمتة. استخدم ⁨LM Studio⁩ إن أردت واجهة رسومية لسطح المكتب، ومتصفّح نماذج مدمج، وواجهة محادثة — الأنسب للمبتدئين. استخدم ⁨Jan.ai⁩ إن أردت تطبيق محادثة يركّز على الخصوصية مع متجر نماذج مدمج. الثلاثة تدعم نفس نماذج ⁨GGUF⁩. وقت الإعداد: ⁨Ollama⁩ دقيقتان، ⁨LM Studio⁩ 5 دقائق، ⁨Jan.ai⁩ 5 دقائق.'
    },
    {
      q: 'ما أفضل بطاقات ⁨GPU⁩ الاقتصادية للنماذج المحلية في 2026؟',
      a: 'بحسب دليلنا للبطاقات الاقتصادية: تُعدّ ⁨RTX 3060 12 GB⁩ المستعملة (نحو 270-300$، أسعار الولايات المتحدة) أرخص بطاقة تستحق الشراء؛ فهي تشغّل ⁨Qwen3 14B⁩ بسرعة 9-12 توكن/ثانية و⁨Qwen3 8B⁩ بسرعة 16-20 توكن/ثانية. ومن البطاقات الجديدة ⁨RTX 5060 Ti 16 GB⁩ (نحو 570-600$) و⁨Intel Arc B580 12 GB⁩ (نحو 250-290$). ارتفعت الأسعار في 2026 بسبب نقص الذاكرة، فراجع الدليل لمعرفة الأرقام الحالية. الحد الأدنى الموصى به: ⁨8 GB VRAM⁩ لاستدلال ⁨7B⁩ مفيد.'
    },
  ],
}

export const HUB_REGIONAL_TITLE: Record<string, string> = {
  en: 'Compliance & Regional Context',
  de: 'Compliance & Regionaler Kontext',
  fr: 'Conformité et contexte régional',
  ja: 'コンプライアンスと地域別コンテキスト',
  zh: '合规与地区背景',
  es: 'Cumplimiento normativo y contexto regional',
  pt: 'Conformidade e contexto regional',
  ar: 'الامتثال والسياق الإقليمي',
}

export const HUB_REGIONAL_ITEMS: Record<string, {region:string, text:string}[]> = {
  en: [
    {
      region: 'EU / GDPR',
      text: 'Local LLMs process data on-premises. With full-disk encryption and access logging, on-premises inference keeps personal data inside your own systems. If no third party can access the data, no processor agreement under GDPR Article 28 is needed for the inference step; your other obligations (lawful basis, security, records of processing) still apply. Ollama binds to `localhost` by default — no external exposure.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japan\'s Act on the Protection of Personal Information (APPI) restricts cross-border transfers of personal data. Running a model locally avoids a cross-border transfer for the inference step. METI\'s 2024 AI governance guidelines encourage privacy-preserving AI, and local deployment is consistent with that direction.'
    },
    {
      region: 'China / CAC',
      text: 'The Cyberspace Administration of China\'s Interim Measures for Generative AI Services (2023) require providers of public-facing generative AI services to register. A model that runs only on your own premises for internal use is generally not a public-facing service, but how the rules apply depends on the use case — check with counsel before relying on this.'
    },
  ],
  de: [
    {
      region: 'EU / DSGVO',
      text: 'Lokale LLMs verarbeiten Daten vor Ort. Mit Festplattenverschlüsselung und Zugriffsprotokollierung bleiben personenbezogene Daten bei lokaler Inferenz in Ihren eigenen Systemen. Wenn kein Dritter auf die Daten zugreifen kann, ist für den Inferenzschritt kein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO nötig; Ihre übrigen Pflichten (Rechtsgrundlage, Sicherheit, Verzeichnis der Verarbeitungstätigkeiten) bleiben bestehen. Ollama bindet standardmäßig an `localhost` — keine externe Erreichbarkeit.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japans Gesetz zum Schutz personenbezogener Daten (APPI) beschränkt die grenzüberschreitende Übermittlung personenbezogener Daten. Wer ein Modell lokal betreibt, vermeidet für den Inferenzschritt eine solche Übermittlung. Die KI-Governance-Leitlinien des METI von 2024 fördern datenschutzfreundliche KI; ein lokaler Betrieb entspricht dieser Richtung.'
    },
    {
      region: 'China / CAC',
      text: 'Die „Vorläufigen Maßnahmen für generative KI-Dienste“ der chinesischen Cyberspace Administration (CAC, 2023) verpflichten Anbieter öffentlich zugänglicher generativer KI-Dienste zur Registrierung. Ein Modell, das nur in den eigenen Räumen für interne Zwecke läuft, ist in der Regel kein öffentlich zugänglicher Dienst; die Anwendung der Regeln hängt jedoch vom Einzelfall ab — klären Sie das vorab mit Rechtsberatung.'
    },
  ],
  fr: [
    {
      region: 'EU / RGPD',
      text: 'Les LLMs locaux traitent les données sur site. Avec un chiffrement complet du disque et une journalisation des accès, l\'inférence sur site garde les données personnelles dans vos propres systèmes. Si aucun tiers ne peut accéder aux données, aucun contrat de sous-traitance au titre de l\'article 28 du RGPD n\'est nécessaire pour l\'étape d\'inférence ; vos autres obligations (base légale, sécurité, registre des traitements) restent applicables. Ollama écoute par défaut sur `localhost` — aucune exposition externe.'
    },
    {
      region: 'Japan / APPI',
      text: 'La loi japonaise sur la protection des informations personnelles (APPI) restreint les transferts transfrontaliers de données personnelles. Exécuter un modèle en local évite un transfert transfrontalier pour l\'étape d\'inférence. Les lignes directrices 2024 du METI sur la gouvernance de l\'IA encouragent une IA respectueuse de la vie privée, et le déploiement local va dans ce sens.'
    },
    {
      region: 'China / CAC',
      text: 'Les Mesures provisoires de l\'Administration chinoise du cyberespace (CAC, 2023) sur les services d\'IA générative imposent un enregistrement aux fournisseurs de services d\'IA générative accessibles au public. Un modèle exécuté uniquement sur vos propres locaux, pour un usage interne, n\'est en général pas un service accessible au public ; l\'application des règles dépend toutefois du cas d\'usage — consultez un conseil juridique avant de vous y fier.'
    },
  ],
  ja: [
    {
      region: 'Japan / APPI',
      text: 'ローカルLLMはデータをオンプレミスで処理します。ディスク全体の暗号化とアクセスログを組み合わせれば、ローカル推論で個人データを自社システム内にとどめられます。第三者がデータにアクセスできない場合、推論の段階ではGDPR第28条に基づく処理者契約は不要です。ただし、適法な根拠、セキュリティ、処理活動の記録といったその他の義務は引き続き適用されます。Ollamaは既定で`localhost`にのみバインドされ、外部には公開されません。'
    },
    {
      region: 'EU / GDPR',
      text: '日本の個人情報保護法（APPI）は、個人データの国外移転を制限しています。モデルをローカルで実行すれば、推論の段階で国外移転は生じません。経済産業省の2024年のAIガバナンス指針はプライバシーを守るAIを後押ししており、ローカル運用はその方向と合致します。'
    },
    {
      region: 'China / CAC',
      text: '中国のサイバー空間管理局（CAC）の「生成式人工知能サービス管理暫定弁法」（2023年）は、一般向けに生成AIサービスを提供する事業者に登録を求めています。自社の施設内だけで社内利用向けに動かすモデルは、通常は一般向けサービスに当たりませんが、適用はユースケースによって異なります。依拠する前に法律の専門家へ確認してください。'
    },
  ],
  zh: [
    {
      region: 'China / CAC',
      text: '本地LLM在本地处理数据。配合全盘加密和访问日志，本地推理可让个人数据留在您自己的系统内。如果没有第三方能访问这些数据，推理环节无需依据GDPR第28条签订数据处理协议；您的其他义务（合法性基础、安全措施、处理活动记录）仍然适用。Ollama默认仅绑定`localhost`，不对外暴露。'
    },
    {
      region: 'EU / GDPR',
      text: '日本《个人信息保护法》（APPI）限制个人数据的跨境传输。在本地运行模型可避免推理环节的跨境传输。日本经济产业省（METI）2024年的AI治理指南鼓励保护隐私的AI，本地部署与这一方向一致。'
    },
    {
      region: 'Japan / APPI',
      text: '中国国家互联网信息办公室（CAC）的《生成式人工智能服务管理暂行办法》（2023年）要求面向公众提供生成式AI服务的提供者进行备案。仅在自有场所内部使用的模型，通常不属于面向公众的服务，但具体适用取决于使用场景——请在依赖这一判断之前咨询法律顾问。'
    },
  ],
  es: [
    {
      region: 'EU / GDPR',
      text: 'Los LLMs locales procesan los datos en tus propias instalaciones. Con cifrado de disco completo y registro de accesos, la inferencia local mantiene los datos personales dentro de tus sistemas. Si ningún tercero puede acceder a los datos, no hace falta un contrato de encargado del tratamiento conforme al artículo 28 del RGPD para el paso de inferencia; el resto de tus obligaciones (base jurídica, seguridad, registro de actividades) sigue vigente. Ollama escucha por defecto en `localhost`, sin exposición externa.'
    },
    {
      region: 'Japan / APPI',
      text: 'La Ley de Protección de la Información Personal de Japón (APPI) restringe las transferencias transfronterizas de datos personales. Ejecutar un modelo en local evita una transferencia transfronteriza en el paso de inferencia. Las directrices de gobernanza de IA del METI de 2024 fomentan una IA que proteja la privacidad, y el despliegue local es coherente con esa orientación.'
    },
    {
      region: 'China / CAC',
      text: 'Las Medidas Provisionales para los Servicios de IA Generativa de la Administración del Ciberespacio de China (CAC, 2023) exigen registro a quienes ofrecen servicios de IA generativa de cara al público. Un modelo que solo se ejecuta en tus propias instalaciones para uso interno normalmente no es un servicio de cara al público, pero la aplicación de las normas depende del caso de uso; consulta con un asesor jurídico antes de darlo por hecho.'
    },
  ],
  pt: [
    {
      region: 'Brasil / LGPD',
      text: 'Os LLMs locais processam os dados nas suas próprias instalações. Com criptografia de disco completa e registro de acessos, a inferência local mantém os dados pessoais dentro dos seus sistemas. Se nenhum terceiro puder acessar os dados, não é necessário um contrato de operador nos moldes do artigo 28 do GDPR para a etapa de inferência; as demais obrigações (base legal, segurança, registro das operações) continuam valendo. O Ollama escuta por padrão em `localhost`, sem exposição externa.'
    },
    {
      region: 'EU / GDPR',
      text: 'A Lei de Proteção de Informações Pessoais do Japão (APPI) restringe a transferência internacional de dados pessoais. Rodar um modelo localmente evita uma transferência internacional na etapa de inferência. As diretrizes de governança de IA do METI de 2024 incentivam uma IA que proteja a privacidade, e a implantação local é coerente com essa orientação.'
    },
    {
      region: 'China / CAC',
      text: 'As Medidas Provisórias para Serviços de IA Generativa da Administração do Ciberespaço da China (CAC, 2023) exigem registro de quem oferece serviços de IA generativa ao público. Um modelo que roda apenas nas suas próprias instalações, para uso interno, normalmente não é um serviço voltado ao público, mas a aplicação das regras depende do caso de uso; consulte um assessor jurídico antes de confiar nisso.'
    },
  ],
  ar: [
    {
      region: 'الخليج / ⁨PDPL⁩',
      text: 'تعالج النماذج اللغوية المحلية البيانات داخل منشأتك. ومع تشفير القرص الكامل وسجلّ الوصول، يُبقي الاستدلال المحلي البيانات الشخصية داخل أنظمتك. وإذا لم يكن بوسع أي طرف ثالث الوصول إلى البيانات، فلا حاجة إلى اتفاقية معالجة بموجب المادة 28 من ⁨GDPR⁩ في خطوة الاستدلال؛ أما التزاماتك الأخرى (الأساس القانوني، والأمن، وسجلّ أنشطة المعالجة) فتبقى سارية. يرتبط ⁨Ollama⁩ افتراضيًا بـ`localhost` فقط، فلا يتعرّض للشبكة الخارجية.'
    },
    {
      region: 'الاتحاد الأوروبي / ⁨GDPR⁩',
      text: 'يقيّد قانون حماية المعلومات الشخصية في اليابان (⁨APPI⁩) نقل البيانات الشخصية عبر الحدود. وتشغيل النموذج محليًا يتجنّب هذا النقل في خطوة الاستدلال. وتشجّع إرشادات الحوكمة للذكاء الاصطناعي الصادرة عن وزارة الاقتصاد والتجارة والصناعة اليابانية (⁨METI⁩) عام 2024 الذكاء الاصطناعي الحافظ للخصوصية، والنشر المحلي ينسجم مع هذا التوجّه.'
    },
    {
      region: 'الصين / ⁨CAC⁩',
      text: 'تُلزم «التدابير المؤقتة لخدمات الذكاء الاصطناعي التوليدي» الصادرة عن إدارة الفضاء السيبراني في الصين (⁨CAC⁩، 2023) مقدّمي خدمات الذكاء الاصطناعي التوليدي الموجّهة للجمهور بالتسجيل. أما النموذج الذي يعمل داخل منشأتك فقط للاستخدام الداخلي فلا يُعدّ عادةً خدمة موجّهة للجمهور، لكن تطبيق القواعد يتوقف على حالة الاستخدام — استشر مختصًا قانونيًا قبل الاعتماد على ذلك.'
    },
  ],
}

export const HUB_PRESENTATION_HEADING: Record<string, string> = {
  en: 'Visual Summary: Local LLMs 2026',
  de: 'Visuelle Zusammenfassung: Lokale LLMs 2026',
  fr: 'Résumé visuel : LLMs locaux 2026',
  ja: 'ビジュアルサマリー：ローカルLLM 2026',
  zh: '视觉摘要：本地LLM 2026',
  es: 'Resumen visual: LLMs locales 2026',
  pt: 'Resumo visual: LLMs locais 2026',
  ar: 'ملخص مرئي: ⁨LLM⁩ المحلية 2026',
}

export const HUB_PRESENTATION_DESC: Record<string, string> = {
  en: 'The slide deck below covers hardware requirements (8 GB VRAM for 7B models, about 42 GB for a 70B model), top open-source models 2026, Ollama setup in 5 minutes, Q4_K_M quantization, regional compliance (GDPR, APPI), and key takeaways. Download the PDF as a Local LLMs quick-reference card.',
  de: 'Die Folien unten zeigen Hardwareanforderungen (8 GB VRAM für 7B-Modelle, etwa 42 GB für ein 70B-Modell), Top-Open-Source-Modelle 2026, Ollama-Setup in 5 Minuten, Q4_K_M-Quantisierung, regionale Compliance (DSGVO, APPI) und wichtige Erkenntnisse. PDF als lokales LLM-Referenzkarte herunterladen.',
  fr: 'Les diapositives ci-dessous couvrent les exigences matérielles (8 Go de VRAM pour les modèles 7B, environ 42 Go pour un modèle 70B), les meilleurs modèles open source 2026, la configuration Ollama en 5 minutes, la quantification Q4_K_M, la conformité régionale (RGPD, APPI) et les points clés. Téléchargez le PDF comme carte de référence LLM locale.',
  ja: '以下のスライドは、ハードウェア要件（7Bモデルに8 GB VRAM、70Bモデルに約42 GB）、2026年トップオープンソースモデル、5分でのOllamaセットアップ、Q4_K_M量子化、地域コンプライアンス（GDPR、APPI）、重要なポイントをカバーしています。PDFをローカルLLMクイックリファレンスカードとしてダウンロードしてください。',
  zh: '以下幻灯片涵盖硬件需求（7B模型需要8 GB显存，70B模型约需42 GB）、2026年顶级开源模型、5分钟内完成Ollama设置、Q4_K_M量化、地区合规性（GDPR、APPI）和关键要点。将PDF下载为本地LLM快速参考卡。',
  es: 'La presentación a continuación cubre los requisitos de hardware (8 GB VRAM para modelos 7B, unos 42 GB para un modelo 70B), los principales modelos open-source de 2026, configuración de Ollama en 5 minutos, cuantización Q4_K_M, cumplimiento regional (GDPR, APPI) y puntos clave. Descarga el PDF como tarjeta de referencia rápida de LLMs locales.',
  pt: 'A apresentação abaixo cobre os requisitos de hardware (8 GB VRAM para modelos 7B, cerca de 42 GB para um modelo 70B), os principais modelos open-source de 2026, configuração do Ollama em 5 minutos, quantização Q4_K_M, conformidade regional (GDPR, APPI) e pontos principais. Baixe o PDF como cartão de referência rápida de LLMs locais.',
  ar: 'تغطي الشرائح أدناه متطلبات الأجهزة (⁨8 GB VRAM⁩ لنماذج ⁨7B⁩، نحو ⁨42 GB⁩ لنموذج ⁨70B⁩)، وأفضل النماذج مفتوحة المصدر لعام 2026، وإعداد ⁨Ollama⁩ خلال 5 دقائق، وتكميم ⁨Q4_K_M⁩، والامتثال الإقليمي (⁨GDPR⁩، ⁨APPI⁩)، وأهم النقاط. نزّل ملف ⁨PDF⁩ كبطاقة مرجعية سريعة للنماذج المحلية.',
}

export const HUB_PRESENTATION_PDF: Record<string, string> = {
  en: 'Download Local LLMs Reference Card (PDF)',
  de: 'Lokales LLM-Referenzblatt herunterladen (PDF)',
  fr: 'Télécharger la carte de référence LLMs locaux (PDF)',
  ja: 'ローカルLLMリファレンスカードをダウンロード（PDF）',
  zh: '下载本地LLM参考卡（PDF）',
  es: 'Descargar tarjeta de referencia LLMs locales (PDF)',
  pt: 'Baixar cartão de referência de LLMs locais (PDF)',
  ar: 'تنزيل بطاقة مرجعية للنماذج المحلية (⁨PDF⁩)',
}

export const HUB_FIGCAPTION_VRAM: Record<string, string> = {
  en: 'VRAM requirements at Q4_K_M quantization — 8 GB runs 7–8B models; a 70B model needs about 42 GB for its weights, and Llama 4 Scout (109B MoE) about 67 GB.',
  de: 'VRAM-Anforderungen bei Q4_K_M-Quantisierung — 8 GB führen 7–8B-Modelle aus; ein 70B-Modell benötigt für seine Gewichte etwa 42 GB, Llama 4 Scout (109B MoE) etwa 67 GB.',
  fr: 'Besoins en VRAM avec quantification Q4_K_M — 8 Go pour les modèles 7–8B ; un modèle 70B demande environ 42 Go pour ses poids, et Llama 4 Scout (MoE 109B) environ 67 Go.',
  ja: 'Q4_K_M量子化でのVRAM要件 — 8 GBで7〜8Bモデルを実行できます。70Bモデルの重みには約42 GB、Llama 4 Scout（109B MoE）には約67 GBが必要です。',
  zh: 'Q4_K_M量化下的VRAM需求 — 8 GB可运行7–8B模型；70B模型的权重约需42 GB，Llama 4 Scout（109B MoE）约需67 GB。',
  es: 'Requisitos de VRAM con cuantización Q4_K_M — 8 GB ejecutan modelos 7–8B; un modelo 70B necesita unos 42 GB para sus pesos, y Llama 4 Scout (MoE de 109B) unos 67 GB.',
  pt: 'Requisitos de VRAM com quantização Q4_K_M — 8 GB rodam modelos 7–8B; um modelo 70B precisa de cerca de 42 GB para os pesos, e o Llama 4 Scout (MoE de 109B) de cerca de 67 GB.',
  ar: 'متطلبات ⁨VRAM⁩ بتكميم ⁨Q4_K_M⁩ — تشغّل ⁨8 GB⁩ نماذج 7-⁨8B⁩؛ ويحتاج نموذج ⁨70B⁩ إلى نحو ⁨42 GB⁩ لأوزانه، و⁨Llama 4 Scout⁩ (⁨MoE⁩ بحجم ⁨109B⁩) إلى نحو ⁨67 GB.⁩',
}

export const HUB_FIGCAPTION_CLOUD: Record<string, string> = {
  en: 'Local LLMs cost nothing per token after the hardware purchase; cloud APIs charge per token, with prices that vary widely by model and provider.',
  de: 'Lokale LLMs kosten nach dem Hardware-Kauf nichts pro Token; Cloud-APIs rechnen pro Token ab, wobei die Preise je nach Modell und Anbieter stark variieren.',
  fr: 'Les LLMs locaux ne coûtent rien par token après l\'achat du matériel ; les API cloud facturent au token, avec des prix très variables selon le modèle et le fournisseur.',
  ja: 'ローカルLLMはハードウェア購入後、トークンあたりの費用がかかりません。クラウドAPIはトークン単位で課金され、料金はモデルや提供元によって大きく異なります。',
  zh: '本地LLM在购买硬件后每个token零成本；云API按token计费，价格因模型和服务商而差异很大。',
  es: 'Los LLMs locales no cuestan nada por token tras comprar el hardware; las API cloud cobran por token, con precios que varían mucho según el modelo y el proveedor.',
  pt: 'Os LLMs locais não custam nada por token depois da compra do hardware; as APIs na cloud cobram por token, com preços que variam bastante conforme o modelo e o provedor.',
  ar: 'لا تكلّف النماذج اللغوية المحلية شيئًا لكل توكن بعد شراء الجهاز؛ أما واجهات ⁨API⁩ السحابية فتحاسب لكل توكن، وتتفاوت الأسعار كثيرًا بحسب النموذج والمزوّد.',
}

export const HUB_FIGCAPTION_MODELS: Record<string, string> = {
  en: 'Open-weight local models by memory tier, 2026: Qwen3.8-27B (24 GB GPU), gpt-oss-20b (16 GB), Gemma 4 12B (12 GB), Qwen3.5 4B (8 GB RAM) and Phi-4 Mini (CPU-only).',
  de: 'Open-Weight-Modelle für den lokalen Betrieb nach Speicherklasse, 2026: Qwen3.8-27B (24-GB-GPU), gpt-oss-20b (16 GB), Gemma 4 12B (12 GB), Qwen3.5 4B (8 GB RAM) und Phi-4 Mini (nur CPU).',
  fr: 'Modèles locaux à poids ouverts par palier de mémoire, 2026 : Qwen3.8-27B (GPU 24 Go), gpt-oss-20b (16 Go), Gemma 4 12B (12 Go), Qwen3.5 4B (8 Go de RAM) et Phi-4 Mini (CPU seul).',
  ja: 'メモリ帯域別のオープンウェイト・ローカルモデル（2026年）：Qwen3.8-27B（24 GB GPU）、gpt-oss-20b（16 GB）、Gemma 4 12B（12 GB）、Qwen3.5 4B（RAM 8 GB）、Phi-4 Mini（CPUのみ）。',
  zh: '按内存档位划分的开放权重本地模型（2026年）：Qwen3.8-27B（24 GB GPU）、gpt-oss-20b（16 GB）、Gemma 4 12B（12 GB）、Qwen3.5 4B（8 GB内存）和Phi-4 Mini（仅CPU）。',
  es: 'Modelos locales de pesos abiertos por nivel de memoria, 2026: Qwen3.8-27B (GPU de 24 GB), gpt-oss-20b (16 GB), Gemma 4 12B (12 GB), Qwen3.5 4B (8 GB de RAM) y Phi-4 Mini (solo CPU).',
  pt: 'Modelos locais de pesos abertos por faixa de memória, 2026: Qwen3.8-27B (GPU de 24 GB), gpt-oss-20b (16 GB), Gemma 4 12B (12 GB), Qwen3.5 4B (8 GB de RAM) e Phi-4 Mini (só CPU).',
  ar: 'نماذج محلية مفتوحة الأوزان بحسب فئة الذاكرة، 2026: ⁨Qwen3.8-27B⁩ (⁨GPU⁩ بذاكرة ⁨24 GB⁩)، و⁨gpt-oss-20b⁩ (⁨16 GB⁩)، و⁨Gemma 4 12B⁩ (⁨12 GB⁩)، و⁨Qwen3.5 4B⁩ (⁨8 GB RAM⁩)، و⁨Phi-4 Mini⁩ (⁨CPU⁩ فقط).',
}

export const HUB_FIGCAPTION_OLLAMA: Record<string, string> = {
  en: 'Ollama terminal: two commands download and run Llama 3.2 locally — typically under 10 minutes, depending on your connection.',
  de: 'Ollama-Terminal: Zwei Befehle laden Llama 3.2 herunter und führen es lokal aus — meist in unter 10 Minuten, je nach Internetverbindung.',
  fr: 'Terminal Ollama : deux commandes téléchargent et exécutent Llama 3.2 en local — en général en moins de 10 minutes, selon votre connexion.',
  ja: 'Ollamaのターミナル：2つのコマンドでLlama 3.2をダウンロードして実行します。通常は10分以内です（回線速度によります）。',
  zh: 'Ollama终端：两条命令即可下载并在本地运行Llama 3.2——通常10分钟内完成，取决于网速。',
  es: 'Terminal de Ollama: dos comandos descargan y ejecutan Llama 3.2 en local — normalmente en menos de 10 minutos, según tu conexión.',
  pt: 'Terminal do Ollama: dois comandos baixam e rodam o Llama 3.2 localmente — normalmente em menos de 10 minutos, dependendo da sua conexão.',
  ar: 'طرفية ⁨Ollama:⁩ أمران يُنزّلان ⁨Llama 3.2⁩ ويشغّلانه محليًا — عادةً في أقل من 10 دقائق بحسب سرعة اتصالك.',
}

export const HUB_FIGCAPTION_PQ: Record<string, string> = {
  en: 'PromptQuorum dispatches one prompt simultaneously to your local Ollama model and 25+ cloud APIs — compare results side-by-side in one view.',
  de: 'PromptQuorum sendet einen Prompt gleichzeitig an Ihr lokales Ollama-Modell und 25+ Cloud-APIs — vergleichen Sie Ergebnisse nebeneinander in einer Ansicht.',
  fr: 'PromptQuorum envoie un prompt simultanément à votre modèle Ollama local et à 25+ APIs cloud — comparez les résultats côte à côte en une seule vue.',
  ja: 'PromptQuorumはローカルOllamaモデルと25以上のクラウドAPIに同時にプロンプトを送信 — 1つの画面で結果を並べて比較。',
  zh: 'PromptQuorum同时将一个提示词发送到您的本地Ollama模型和25+个云API — 在一个视图中并排比较结果。',
  es: 'PromptQuorum envía un prompt simultáneamente a tu modelo Ollama local y a 25+ APIs cloud — compara los resultados lado a lado en una sola vista.',
  pt: 'O PromptQuorum envia um prompt simultaneamente ao seu modelo Ollama local e a 25+ APIs cloud — compare os resultados lado a lado em uma única visualização.',
  ar: '⁨PromptQuorum⁩ يرسل مطالبة واحدة في آن معًا إلى نموذج ⁨Ollama⁩ المحلي لديك وأكثر من 25 واجهة ⁨API⁩ سحابية — قارن النتائج جنبًا إلى جنب في شاشة واحدة.',
}

export const HUB_BOTTOM_FAQ_TITLE: Record<string, string> = {
  en: 'Frequently Asked Questions About Local LLMs',
  de: 'Häufig gestellte Fragen zu lokalen LLMs',
  fr: 'Questions fréquentes sur les LLMs locaux',
  ja: 'ローカルLLMに関するよくある質問',
  zh: '关于本地LLM的常见问题',
  es: 'Preguntas frecuentes sobre LLMs locales',
  pt: 'Perguntas frequentes sobre LLMs locais',
  ar: 'الأسئلة الشائعة حول ⁨LLM⁩ المحلية',
}

export const HUB_FAQS_BOTTOM: Record<string, { q: string; a: string }[]> = {
  en: [
    {
      q: 'What is a local LLM?',
      a: 'A local LLM is a large language model that runs entirely on your own hardware — CPU, GPU, or Apple Silicon — without sending data to external servers. You download the model file (typically 2–40 GB) and run it with a tool like Ollama or LM Studio. Popular local models today include Qwen3.8, Gemma 4, gpt-oss and the Llama family; most run on machines with 8–24 GB of VRAM.'
    },
    {
      q: 'Is a local LLM better than ChatGPT?',
      a: 'For privacy and cost, yes. For raw output quality on the hardest tasks, usually no: leading cloud models still outperform locally runnable models on complex reasoning. For everyday tasks, a 27B-class local model on a 24 GB GPU is a capable alternative at no per-query cost.'
    },
    {
      q: 'How much RAM do I need to run a local LLM?',
      a: 'Minimum: 8 GB RAM to run a 7B model at Q4 quantization. Recommended: 16 GB for 13B models and about 48 GB for 70B models (about 42 GB of Q4 weights plus headroom). Apple Silicon unified memory counts fully toward this — an M3 Mac with 18 GB can run a 13B model well. GPU VRAM is equivalent to RAM for GPU inference.'
    },
    {
      q: 'How do I run a local LLM?',
      a: 'Install Ollama (ollama.com), then run one command: `ollama run llama3.1:8b`. The model downloads automatically and you can start chatting in under 5 minutes. No API key, no account, no internet connection after the initial download.'
    },
    {
      q: 'What is the best free local LLM in 2026?',
      a: 'For a 24 GB GPU: Qwen3.8-27B (18 GB, `ollama pull qwen3.8:27b`). For 16 GB: gpt-oss:20b or Gemma 4 12B. For 8 GB: Qwen3 8B. For CPU-only setups: Phi-4 Mini. All are open-weight and free to download via `ollama pull`; check each license before commercial use.'
    },
    {
      q: 'Are local LLMs private?',
      a: 'Yes, for inference. When running with Ollama or LM Studio, prompts, documents and responses are processed on your machine and are not sent to a model provider\'s server. Update checks and optional telemetry are separate, so review each app\'s settings. Local processing suits confidential and personal data and simplifies GDPR work, but legal compliance still depends on your whole setup.'
    },
  ],
  de: [
    {
      q: 'Was ist ein lokales LLM?',
      a: 'Ein lokales LLM ist ein großes Sprachmodell, das vollständig auf Ihrer eigenen Hardware läuft — CPU, GPU oder Apple Silicon —, ohne Daten an externe Server zu senden. Sie laden die Modelldatei (typischerweise 2–40 GB) herunter und führen sie mit einem Tool wie Ollama oder LM Studio aus. Zu den beliebten lokalen Modellen zählen heute Qwen3.8, Gemma 4, gpt-oss und die Llama-Familie; die meisten laufen auf Rechnern mit 8–24 GB VRAM.'
    },
    {
      q: 'Ist ein lokales LLM besser als ChatGPT?',
      a: 'Bei Datenschutz und Kosten: ja. Bei der reinen Ausgabequalität für die schwierigsten Aufgaben meist nein: Führende Cloud-Modelle übertreffen lokal ausführbare Modelle beim komplexen logischen Schließen weiterhin. Für Alltagsaufgaben ist ein lokales Modell der 27B-Klasse auf einer 24-GB-GPU eine leistungsfähige Alternative — ohne Kosten pro Anfrage.'
    },
    {
      q: 'Wie viel RAM benötige ich für ein lokales LLM?',
      a: 'Minimum: 8 GB RAM für ein 7B-Modell in Q4-Quantisierung. Empfohlen: 16 GB für 13B-Modelle und etwa 48 GB für 70B-Modelle (rund 42 GB Q4-Gewichte plus Reserve). Der Unified Memory von Apple Silicon zählt vollständig dazu — ein M3 Mac mit 18 GB kann ein 13B-Modell gut ausführen. Bei GPU-Inferenz entspricht der VRAM dem RAM.'
    },
    {
      q: 'Wie führe ich ein lokales LLM aus?',
      a: 'Installieren Sie Ollama (ollama.com) und führen Sie einen einzigen Befehl aus: `ollama run llama3.1:8b`. Das Modell wird automatisch heruntergeladen, und Sie können in weniger als 5 Minuten mit dem Chatten beginnen. Kein API-Schlüssel, kein Konto, keine Internetverbindung nach dem ersten Download erforderlich.'
    },
    {
      q: 'Was ist das beste kostenlose lokale LLM 2026?',
      a: 'Für eine 24-GB-GPU: Qwen3.8-27B (18 GB, `ollama pull qwen3.8:27b`). Für 16 GB: gpt-oss:20b oder Gemma 4 12B. Für 8 GB: Qwen3 8B. Für reinen CPU-Betrieb: Phi-4 Mini. Alle sind Open Weight und per `ollama pull` kostenlos herunterladbar; prüfen Sie vor kommerzieller Nutzung die jeweilige Lizenz.'
    },
    {
      q: 'Sind lokale LLMs privat?',
      a: 'Ja, was die Inferenz betrifft. Bei der Ausführung mit Ollama oder LM Studio werden Prompts, Dokumente und Antworten auf Ihrem Rechner verarbeitet und nicht an den Server eines Modellanbieters gesendet. Update-Prüfungen und optionale Telemetrie sind davon getrennt; prüfen Sie daher die Einstellungen jeder App. Lokale Verarbeitung eignet sich für vertrauliche und personenbezogene Daten und erleichtert die DSGVO-Arbeit, doch die rechtliche Konformität hängt von Ihrem gesamten Setup ab.'
    },
  ],
  fr: [
    {
      q: 'Qu\'est-ce qu\'un LLM local ?',
      a: 'Un LLM local est un grand modèle de langage qui s\'exécute entièrement sur votre propre matériel — CPU, GPU ou Apple Silicon — sans envoyer de données à des serveurs externes. Vous téléchargez le fichier du modèle (généralement 2 à 40 Go) et l\'exécutez avec un outil comme Ollama ou LM Studio. Parmi les modèles locaux populaires aujourd\'hui : Qwen3.8, Gemma 4, gpt-oss et la famille Llama ; la plupart tournent sur des machines de 8 à 24 Go de VRAM.'
    },
    {
      q: 'Un LLM local est-il meilleur que ChatGPT ?',
      a: 'Pour la confidentialité et le coût, oui. Pour la qualité brute sur les tâches les plus difficiles, en général non : les meilleurs modèles cloud surpassent encore les modèles exécutables localement sur le raisonnement complexe. Pour les tâches courantes, un modèle local de classe 27B sur un GPU de 24 Go est une alternative solide, sans coût par requête.'
    },
    {
      q: 'Combien de RAM faut-il pour exécuter un LLM local ?',
      a: 'Minimum : 8 Go de RAM pour un modèle 7B en quantification Q4. Recommandé : 16 Go pour les modèles 13B et environ 48 Go pour les modèles 70B (environ 42 Go de poids Q4 plus une marge). La mémoire unifiée d\'Apple Silicon compte intégralement — un Mac M3 avec 18 Go exécute bien un modèle 13B. Le VRAM du GPU équivaut à la RAM pour l\'inférence GPU.'
    },
    {
      q: 'Comment exécuter un LLM local ?',
      a: 'Installez Ollama (ollama.com), puis exécutez une seule commande : `ollama run llama3.1:8b`. Le modèle se télécharge automatiquement et vous pouvez commencer à discuter en moins de 5 minutes. Aucune clé API, aucun compte, aucune connexion Internet requise après le téléchargement initial.'
    },
    {
      q: 'Quel est le meilleur LLM local gratuit en 2026 ?',
      a: 'Pour un GPU de 24 Go : Qwen3.8-27B (18 Go, `ollama pull qwen3.8:27b`). Pour 16 Go : gpt-oss:20b ou Gemma 4 12B. Pour 8 Go : Qwen3 8B. Pour les configurations CPU seul : Phi-4 Mini. Tous sont à poids ouverts et téléchargeables gratuitement via `ollama pull` ; vérifiez chaque licence avant un usage commercial.'
    },
    {
      q: 'Les LLM locaux sont-ils privés ?',
      a: 'Oui, pour l\'inférence. Avec Ollama ou LM Studio, les prompts, documents et réponses sont traités sur votre machine et ne sont pas envoyés au serveur d\'un fournisseur de modèle. Les vérifications de mise à jour et la télémétrie facultative sont distinctes : examinez les réglages de chaque application. Le traitement local convient aux données confidentielles et personnelles et facilite le travail de conformité au RGPD, mais la conformité juridique dépend de l\'ensemble de votre configuration.'
    },
  ],
  ja: [
    {
      q: 'ローカルLLMとは何ですか?',
      a: 'ローカルLLMとは、CPU・GPU・Apple Siliconなど、お使いのハードウェア上で完全に動作する大規模言語モデルです。外部サーバーへデータを送信しません。モデルファイル(通常2〜40GB)をダウンロードし、OllamaやLM Studioなどのツールで実行します。現在人気のローカルモデルには、Qwen3.8、Gemma 4、gpt-oss、Llamaファミリーがあり、多くは8〜24GBのVRAMを持つマシンで動作します。'
    },
    {
      q: 'ローカルLLMはChatGPTより優れていますか?',
      a: 'プライバシーとコストの面では優れています。最も難しいタスクでの出力品質では、たいていは劣ります。最上位のクラウドモデルは、複雑な推論でローカル実行可能なモデルを今も上回っています。日常的なタスクなら、24GBのGPU上の27Bクラスのローカルモデルが有力な選択肢で、クエリごとのコストはかかりません。'
    },
    {
      q: 'ローカルLLMの実行にはどれくらいのRAMが必要ですか?',
      a: '最低: 7BモデルをQ4量子化で実行するには8GB RAM。推奨: 13Bモデルには16GB、70Bモデルには約48GB（Q4の重み約42GBに余裕分を加えた量）。Apple Siliconのユニファイドメモリはこれに完全にカウントされます — 18GBのM3 Macなら13Bモデルを問題なく実行できます。GPU推論の場合、GPU VRAMはRAMと同等です。'
    },
    {
      q: 'ローカルLLMはどうやって実行しますか?',
      a: 'Ollama(ollama.com)をインストールし、コマンドを1つ実行するだけです: `ollama run llama3.1:8b`。モデルは自動的にダウンロードされ、5分以内にチャットを開始できます。APIキー、アカウント登録は不要で、初回ダウンロード後はインターネット接続も不要です。'
    },
    {
      q: '2026年で最も優れた無料のローカルLLMは何ですか?',
      a: '24GBのGPUにはQwen3.8-27B(18GB、`ollama pull qwen3.8:27b`)。16GBにはgpt-oss:20bまたはGemma 4 12B。8GBにはQwen3 8B。CPUのみならPhi-4 Mini。いずれもオープンウェイトで、`ollama pull`から無料でダウンロードできます。商用利用の前に各ライセンスをご確認ください。'
    },
    {
      q: 'ローカルLLMはプライバシーが保たれますか?',
      a: 'はい、推論については。OllamaやLM Studioで実行する場合、プロンプト・文書・応答はお使いのマシン上で処理され、モデル提供元のサーバーには送信されません。アップデートの確認や任意のテレメトリは別の話なので、各アプリの設定を確認してください。ローカル処理は機密情報や個人情報の扱いに向き、GDPR対応も楽になりますが、法令順守は構成全体によって決まります。'
    },
  ],
  zh: [
    {
      q: '什么是本地LLM?',
      a: '本地LLM是完全在您自己的硬件上运行的大语言模型——CPU、GPU或Apple Silicon均可——不会将数据发送到外部服务器。您下载模型文件(通常2–40 GB),然后使用Ollama或LM Studio等工具运行。目前常见的本地模型包括Qwen3.8、Gemma 4、gpt-oss和Llama系列,大多数可在8–24 GB VRAM的设备上运行。'
    },
    {
      q: '本地LLM比ChatGPT更好吗?',
      a: '在隐私和成本方面,是的。在最难任务的原始输出质量方面,通常不是:顶级云端模型在复杂推理上仍优于可本地运行的模型。对于日常任务,24 GB GPU上的27B级本地模型是一个能力不错的替代方案,且每次查询零成本。'
    },
    {
      q: '运行本地LLM需要多少RAM?',
      a: '最低要求:8 GB RAM可运行Q4量化的7B模型。推荐配置:13B模型需16 GB,70B模型需约48 GB(Q4权重约42 GB再加余量)。Apple Silicon的统一内存可完全计入——配备18 GB内存的M3 Mac可流畅运行13B模型。对于GPU推理,GPU VRAM相当于RAM。'
    },
    {
      q: '如何运行本地LLM?',
      a: '安装Ollama(ollama.com),然后执行一条命令:`ollama run llama3.1:8b`。模型会自动下载,5分钟内即可开始对话。无需API密钥、无需注册账户,首次下载完成后也无需联网。'
    },
    {
      q: '2026年最好的免费本地LLM是什么?',
      a: '24 GB GPU：Qwen3.8-27B(18 GB,`ollama pull qwen3.8:27b`)。16 GB：gpt-oss:20b或Gemma 4 12B。8 GB：Qwen3 8B。仅CPU设置：Phi-4 Mini。均为开放权重模型,可通过`ollama pull`免费下载；商用前请查看各自的许可证。'
    },
    {
      q: '本地LLM是否保护隐私?',
      a: '是的,就推理而言。使用Ollama或LM Studio运行时,提示词、文档和回复都在您的设备上处理,不会发送到模型提供商的服务器。更新检查和可选的遥测是另外的事,请检查每个应用的设置。本地处理适合机密和个人信息,也能简化GDPR相关工作,但法律合规取决于您的整体配置。'
    },
  ],
  es: [
    {
      q: '¿Qué es un LLM local?',
      a: 'Un LLM local es un modelo de lenguaje grande que se ejecuta completamente en tu propio hardware — CPU, GPU o Apple Silicon — sin enviar datos a servidores externos. Descargas el archivo del modelo (normalmente entre 2 y 40 GB) y lo ejecutas con una herramienta como Ollama o LM Studio. Entre los modelos locales populares hoy están Qwen3.8, Gemma 4, gpt-oss y la familia Llama; la mayoría funciona en equipos con 8–24 GB de VRAM.'
    },
    {
      q: '¿Es un LLM local mejor que ChatGPT?',
      a: 'En privacidad y coste, sí. En calidad bruta en las tareas más difíciles, normalmente no: los mejores modelos cloud siguen superando a los modelos ejecutables localmente en razonamiento complejo. Para tareas cotidianas, un modelo local de clase 27B en una GPU de 24 GB es una alternativa sólida, sin coste por consulta.'
    },
    {
      q: '¿Cuánta RAM necesito para ejecutar un LLM local?',
      a: 'Mínimo: 8 GB de RAM para un modelo 7B con cuantización Q4. Recomendado: 16 GB para modelos 13B y unos 48 GB para modelos 70B (unos 42 GB de pesos Q4 más margen). La memoria unificada de Apple Silicon cuenta por completo — un Mac M3 con 18 GB ejecuta bien un modelo 13B. La VRAM de la GPU equivale a la RAM en inferencia por GPU.'
    },
    {
      q: '¿Cómo ejecuto un LLM local?',
      a: 'Instala Ollama (ollama.com) y ejecuta un solo comando: `ollama run llama3.1:8b`. El modelo se descarga automáticamente y puedes empezar a chatear en menos de 5 minutos. Sin clave API, sin cuenta, sin conexión a internet tras la descarga inicial.'
    },
    {
      q: '¿Cuál es el mejor LLM local gratuito en 2026?',
      a: 'Para una GPU de 24 GB: Qwen3.8-27B (18 GB, `ollama pull qwen3.8:27b`). Para 16 GB: gpt-oss:20b o Gemma 4 12B. Para 8 GB: Qwen3 8B. Para configuraciones solo-CPU: Phi-4 Mini. Todos son de pesos abiertos y se descargan gratis con `ollama pull`; revisa cada licencia antes de un uso comercial.'
    },
    {
      q: '¿Son privados los LLM locales?',
      a: 'Sí, en lo que respecta a la inferencia. Al ejecutarlos con Ollama o LM Studio, tus prompts, documentos y respuestas se procesan en tu equipo y no se envían al servidor de un proveedor de modelos. Las comprobaciones de actualización y la telemetría opcional son aparte, así que revisa los ajustes de cada aplicación. El procesamiento local es adecuado para información confidencial y personal y facilita el trabajo con el RGPD, pero el cumplimiento legal depende de toda tu configuración.'
    },
  ],
  pt: [
    {
      q: 'O que é um LLM local?',
      a: 'Um LLM local é um modelo de linguagem grande que roda inteiramente no seu próprio hardware — CPU, GPU ou Apple Silicon — sem enviar dados a servidores externos. Você baixa o arquivo do modelo (normalmente de 2 a 40 GB) e o executa com uma ferramenta como o Ollama ou o LM Studio. Entre os modelos locais populares hoje estão Qwen3.8, Gemma 4, gpt-oss e a família Llama; a maioria roda em máquinas com 8–24 GB de VRAM.'
    },
    {
      q: 'Um LLM local é melhor que o ChatGPT?',
      a: 'Em privacidade e custo, sim. Em qualidade bruta nas tarefas mais difíceis, normalmente não: os melhores modelos na cloud ainda superam os modelos executáveis localmente em raciocínio complexo. Para tarefas do dia a dia, um modelo local da classe 27B em uma GPU de 24 GB é uma alternativa sólida, sem custo por consulta.'
    },
    {
      q: 'Quanta RAM eu preciso para rodar um LLM local?',
      a: 'Mínimo: 8 GB de RAM para um modelo 7B com quantização Q4. Recomendado: 16 GB para modelos 13B e cerca de 48 GB para modelos 70B (cerca de 42 GB de pesos Q4 mais margem). A memória unificada do Apple Silicon conta por completo — um Mac M3 com 18 GB roda bem um modelo 13B. A VRAM da GPU equivale à RAM na inferência por GPU.'
    },
    {
      q: 'Como eu rodo um LLM local?',
      a: 'Instale o Ollama (ollama.com) e rode um único comando: `ollama run llama3.1:8b`. O modelo é baixado automaticamente e você pode começar a conversar em menos de 5 minutos. Sem chave de API, sem conta e sem conexão com a internet depois do download inicial.'
    },
    {
      q: 'Qual é o melhor LLM local gratuito em 2026?',
      a: 'Para uma GPU de 24 GB: Qwen3.8-27B (18 GB, `ollama pull qwen3.8:27b`). Para 16 GB: gpt-oss:20b ou Gemma 4 12B. Para 8 GB: Qwen3 8B. Para configurações só com CPU: Phi-4 Mini. Todos têm pesos abertos e podem ser baixados de graça com `ollama pull`; confira cada licença antes de usar comercialmente.'
    },
    {
      q: 'Os LLMs locais são privados?',
      a: 'Sim, no que diz respeito à inferência. Ao rodar com o Ollama ou o LM Studio, seus prompts, documentos e respostas são processados na sua máquina e não são enviados ao servidor de um provedor de modelos. As verificações de atualização e a telemetria opcional são separadas, então revise as configurações de cada aplicativo. O processamento local serve para informações confidenciais e pessoais e facilita o trabalho com a LGPD, mas a conformidade legal depende de toda a sua configuração.'
    },
  ],
  ko: [
    {
      q: '로컬 LLM이란 무엇입니까?',
      a: '로컬 LLM은 CPU, GPU, Apple Silicon 등 사용자의 하드웨어에서 전적으로 실행되는 대규모 언어 모델이며 외부 서버로 데이터를 보내지 않습니다. 모델 파일(보통 2~40 GB)을 내려받아 Ollama나 LM Studio 같은 도구로 실행합니다. 요즘 인기 있는 로컬 모델로는 Qwen3.8, Gemma 4, gpt-oss, Llama 계열이 있으며, 대부분 8~24 GB VRAM을 갖춘 기기에서 실행됩니다.'
    },
    {
      q: '로컬 LLM이 ChatGPT보다 낫습니까?',
      a: '개인정보 보호와 비용 면에서는 그렇습니다. 가장 어려운 작업의 출력 품질에서는 대체로 그렇지 않습니다. 최상위 클라우드 모델은 복잡한 추론에서 로컬로 실행할 수 있는 모델보다 여전히 앞섭니다. 일상적인 작업에는 24 GB GPU의 27B급 로컬 모델이 질의당 비용 없이 쓸 수 있는 유력한 대안입니다.'
    },
    {
      q: '로컬 LLM을 실행하려면 RAM이 얼마나 필요합니까?',
      a: '최소: Q4 양자화의 7B 모델에 8 GB RAM. 권장: 13B 모델에 16 GB, 70B 모델에 약 48 GB(Q4 가중치 약 42 GB에 여유분 추가). Apple Silicon의 통합 메모리는 전부 계산됩니다 — 18 GB의 M3 Mac은 13B 모델을 잘 실행합니다. GPU 추론에서는 VRAM이 RAM과 같은 역할을 합니다.'
    },
    {
      q: '로컬 LLM은 어떻게 실행합니까?',
      a: 'Ollama(ollama.com)를 설치한 뒤 명령 하나를 실행합니다: `ollama run llama3.1:8b`. 모델이 자동으로 내려받아지며 5분 이내에 대화를 시작할 수 있습니다. API 키도, 계정도 필요 없고 처음 내려받은 뒤에는 인터넷 연결도 필요하지 않습니다.'
    },
    {
      q: '2026년 최고의 무료 로컬 LLM은 무엇입니까?',
      a: '24 GB GPU에는 Qwen3.8-27B(18 GB, `ollama pull qwen3.8:27b`). 16 GB에는 gpt-oss:20b 또는 Gemma 4 12B. 8 GB에는 Qwen3 8B. CPU만 사용하는 구성에는 Phi-4 Mini. 모두 오픈 웨이트이며 `ollama pull`로 무료로 내려받을 수 있습니다. 상업적으로 사용하기 전에 각 라이선스를 확인하시기 바랍니다.'
    },
    {
      q: '로컬 LLM은 개인정보가 보호됩니까?',
      a: '추론에 관해서는 그렇습니다. Ollama나 LM Studio로 실행하면 프롬프트, 문서, 응답이 사용자의 기기에서 처리되며 모델 제공업체의 서버로 전송되지 않습니다. 업데이트 확인과 선택적 텔레메트리는 별개이므로 각 앱의 설정을 확인하세요. 로컬 처리는 기밀 정보와 개인정보에 적합하고 GDPR 대응을 쉽게 하지만, 법적 준수 여부는 전체 구성에 달려 있습니다.'
    },
  ],
  ar: [
    {
      q: 'ما هو النموذج اللغوي المحلي؟',
      a: 'النموذج اللغوي المحلي هو نموذج لغوي كبير يعمل بالكامل على جهازك الخاص — ⁨CPU⁩ أو ⁨GPU⁩ أو ⁨Apple Silicon⁩ — دون إرسال أي بيانات إلى خوادم خارجية. تنزّل ملف النموذج (عادةً 2-⁨40 GB⁩) وتشغّله باستخدام أداة مثل ⁨Ollama⁩ أو ⁨LM Studio.⁩ من النماذج المحلية الشائعة اليوم ⁨Qwen3.8⁩ و⁨Gemma 4⁩ و⁨gpt-oss⁩ وعائلة ⁨Llama⁩؛ ومعظمها يعمل على أجهزة بذاكرة 8-⁨24 GB VRAM.⁩'
    },
    {
      q: 'هل النموذج اللغوي المحلي أفضل من ⁨ChatGPT⁩؟',
      a: 'من ناحية الخصوصية والتكلفة، نعم. ومن ناحية جودة المخرجات الخام في أصعب المهام، لا في الغالب: فما زالت النماذج السحابية الرائدة تتفوّق على النماذج القابلة للتشغيل محليًا في الاستدلال المعقّد. أما في المهام اليومية، فإن نموذجًا محليًا من فئة ⁨27B⁩ على بطاقة ⁨GPU⁩ بذاكرة ⁨24 GB⁩ بديل قدير بتكلفة صفر لكل استعلام.'
    },
    {
      q: 'كم ذاكرة ⁨RAM⁩ أحتاج لتشغيل نموذج لغوي محلي؟',
      a: 'الحد الأدنى: ⁨8 GB RAM⁩ لتشغيل نموذج ⁨7B⁩ بتكميم ⁨Q4.⁩ الموصى به: ⁨16 GB⁩ لنماذج ⁨13B⁩، ونحو ⁨48 GB⁩ لنماذج ⁨70B⁩ (نحو ⁨42 GB⁩ لأوزان ⁨Q4⁩ مع هامش إضافي). تُحتسب الذاكرة الموحّدة في ⁨Apple Silicon⁩ بالكامل ضمن هذا — جهاز ⁨M3 Mac⁩ بذاكرة ⁨18 GB⁩ يشغّل نموذج ⁨13B⁩ بشكل جيد. ذاكرة ⁨VRAM⁩ تعادل ذاكرة ⁨RAM⁩ في استدلال ⁨GPU.⁩'
    },
    {
      q: 'كيف أشغّل نموذجًا لغويًا محليًا؟',
      a: 'ثبّت ⁨Ollama⁩ (ollama.com)، ثم شغّل أمرًا واحدًا: `ollama run llama3.1:8b`. يُنزَّل النموذج تلقائيًا وتستطيع بدء المحادثة خلال أقل من 5 دقائق. بلا مفتاح ⁨API⁩، وبلا حساب، وبلا حاجة لاتصال إنترنت بعد التنزيل الأولي.'
    },
    {
      q: 'ما أفضل نموذج لغوي محلي مجاني حاليًا؟',
      a: 'لبطاقة ⁨GPU⁩ بذاكرة ⁨24 GB: Qwen3.8-27B⁩ (⁨18 GB⁩، `ollama pull qwen3.8:27b`). لذاكرة ⁨16 GB: gpt-oss:20b⁩ أو ⁨Gemma 4 12B.⁩ لذاكرة ⁨8 GB: Qwen3 8B.⁩ لأنظمة ⁨CPU⁩ فقط: ⁨Phi-4 Mini.⁩ كلها مفتوحة الأوزان ويمكن تنزيلها مجانًا عبر `ollama pull`؛ راجع كل رخصة قبل الاستخدام التجاري.'
    },
    {
      q: 'هل النماذج اللغوية المحلية تحافظ على الخصوصية؟',
      a: 'نعم، فيما يخص الاستدلال. عند التشغيل عبر ⁨Ollama⁩ أو ⁨LM Studio⁩، تُعالَج مطالباتك ومستنداتك وردودك على جهازك ولا تُرسَل إلى خادم مزوّد النموذج. أما فحوص التحديث والتتبّع الاختياري فمسألة منفصلة، فراجع إعدادات كل تطبيق. المعالجة المحلية مناسبة للمعلومات السرية والشخصية وتُسهّل العمل على ⁨GDPR⁩، لكن الامتثال القانوني يتوقف على إعدادك بالكامل.'
    },
  ],
}
