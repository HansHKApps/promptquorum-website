#!/usr/bin/env node
const BASE = 'http://localhost:3073';
const SPECS = {
  "local-llm-power-consumption-overview": {
    "en": {
      "title": "Local LLM Power Consumption and Cooling 2026: RTX 4090, RTX 5090, M5 Max Compared",
      "subtitle": "RTX 4090: 575W, $52/month. RTX 5090: 575W, 32GB GDDR7. M5 Max: 30W (10× more efficient per token). 1",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Stromverbrauch lokaler LLMs 2026: RTX 4090, RTX 5090 und M5 Max im Vergleich",
      "subtitle": "RTX 4090: 575W, €150/Monat. RTX 5090: 575W, 32GB GDDR7. M5 Max: 30W (10× effizienter pro Token). 120",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Consommation électrique des LLMs locaux 2026 : RTX 4090, RTX 5090 et M5 Max comparés",
      "subtitle": "RTX 4090 : 575W, 110 €/mois. RTX 5090 : 575W, 32 Go GDDR7. M5 Max : 30W (10× plus efficace par token",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM電力消費と冷却2026: RTX 4090、RTX 5090、M5 Max比較",
      "subtitle": "RTX 4090: 575W、¥5,200/月(@¥25/kWh)。RTX 5090: 575W、32GB VRAM。M5 Max: 30W(10倍効率)。1200W PSU必要。冷却、日本電力コスト",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM功耗与冷却指南2026：RTX 4090、RTX 5090、M5 Max对比",
      "subtitle": "RTX 4090：575W、$52/月（$0.12/kWh）。RTX 5090：575W、32GB VRAM。M5 Max：30W（10倍效率）。需1200W电源。功耗、冷却、电源、亚太合规。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Consumo de Energía de LLMs Locales 2026: RTX 4090, RTX 5090 y M5 Max Comparados",
      "subtitle": "RTX 4090: 575 W, $52/mes. RTX 5090: 575 W, 32 GB GDDR7. M5 Max: 30 W (10× más eficiente por token). ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Consumo de Energia de LLMs Locais 2026: RTX 4090, RTX 5090 e M5 Max Comparados",
      "subtitle": "RTX 4090: 575W, ~R$280/mês. RTX 5090: 575W, 32GB GDDR7. M5 Max: 30W (10× mais econômico por token). ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "استهلاك الطاقة لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: مقارنة ⁨RTX 4090⁩ و⁨RTX 5090⁩ و⁨M5 Max⁩",
      "subtitle": "⁨RTX 4090⁩: ⁨575W⁩ مع مزود ⁨1200W⁩ بتكلفة ⁨52⁩$/شهر. ⁨M5 Max⁩: ⁨30W⁩ — أكفأ ⁨10⁩ مرات لكل ⁨token. RT",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 전력 소비 및 냉각 2026: RTX 4090, RTX 5090, M5 Max 비교",
      "subtitle": "RTX 4090: 575W, 월 $52. RTX 5090: 575W, 32GB GDDR7. M5 Max: 30W (토큰당 10배 효율). 1200W PSU 필요. 냉각 및 지역별 ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "secure-offline-local-llm-workflow-overview": {
    "en": {
      "title": "How to Build a Secure Offline Local LLM Workflow",
      "subtitle": "Secure offline local LLM workflow: Air-gapped server, encrypted USB data transfer, hardcopy output. ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Sichere Offline-Workflow mit lokalen LLMs aufbauen",
      "subtitle": "Sichere Offline-LLM-Workflow: Isolierter Server, verschlüsselter USB-Datentransfer, Hardcopy-Ausgabe",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Construire un flux de travail LLM sécurisé hors ligne",
      "subtitle": "Flux de travail LLM sécurisé hors ligne : serveur isolé, transfert USB chiffré, sortie papier. Zéro ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "セキュアなオフラインローカルLLMワークフローの構築",
      "subtitle": "セキュアなオフラインLLMワークフロー：エアギャップサーバー、暗号化USBデータ転送、ハードコピー出力。ネットワークリスク0。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "构建安全的离线本地LLM工作流",
      "subtitle": "安全离线LLM工作流：气隙服务器、加密USB数据传输、硬拷贝输出。零网络风险。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Cómo construir un flujo de trabajo local con LLM offline seguro",
      "subtitle": "Flujo de trabajo LLM offline seguro: servidor air-gapped, transferencia de datos por USB cifrado, sa",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Como construir um fluxo de trabalho local com LLM offline seguro",
      "subtitle": "Fluxo de trabalho LLM offline seguro: servidor air-gapped, transferência de dados por USB criptograf",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "كيفية بناء سير عمل آمن لنموذج ⁨LLM⁩ محلي يعمل دون اتصال",
      "subtitle": "سير عمل ⁨LLM⁩ آمن دون اتصال: خادم معزول عن الشبكة (⁨air-gap⁩)، ونقل البيانات عبر ⁨USB⁩ مشفّر، ومخرجا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "안전한 오프라인 로컬 LLM 워크플로우 구축 방법",
      "subtitle": "안전한 오프라인 로컬 LLM 워크플로우: Air-gapped 서버, 암호화된 USB 데이터 전송, 하드카피 출력. 네트워크 위험 없음.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "private-local-llm-sensitive-data-overview": {
    "en": {
      "title": "Best Local LLM Setup for Sensitive Data",
      "subtitle": "Zero data egress: local LLMs for HIPAA (healthcare), PCI-DSS (finance), and legal privilege. Air-gap",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Optimale lokale LLM-Einrichtung für sensible Daten",
      "subtitle": "Zero Data Egress mit lokalen LLMs: DSGVO § 32 (Medizin), PCI-DSS (Finanzen), Anwaltsprivileg. Air-Ga",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Configuration optimale des LLM locaux pour données sensibles",
      "subtitle": "LLM sécurisé pour données sensibles : RGPD, CNIL, PCI-DSS, conformité légale. Configuration isolée, ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "機密データ向けローカルLLMの最適なセットアップ",
      "subtitle": "セキュアローカルLLM（機密データ向け）：HIPAA、PCI-DSS、弁護士秘匿特権対応。エアギャップ設定、監査ログ、データガバナンス、GDPR第32条への対応を解説。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "敏感数据安全的本地 LLM 配置",
      "subtitle": "本地LLM数据安全2026：医疗HIPAA、金融PCI-DSS、法律合规全指南。零数据泄露。隔离网络部署、审计日志（GDPR第32条）、数据治理方案。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejor configuración de LLM local para datos sensibles",
      "subtitle": "Cero egreso de datos: LLM local para HIPAA (sanidad), PCI-DSS (finanzas) y privilegio legal. Configu",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor configuração de LLM local para dados sensíveis",
      "subtitle": "Zero saída de dados: LLM local para HIPAA (saúde), PCI-DSS (finanças) e sigilo jurídico. Configuraçã",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل تهيئة ⁨LLM⁩ محلي للبيانات الحساسة",
      "subtitle": "صفر تسريب: ⁨LLM⁩ محلي يحتفظ بالبيانات الطبية والمالية والقانونية على جهازك. تهيئة معزولة وسجلات تدقي",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "민감한 데이터를 위한 최적의 로컬 LLM 설정",
      "subtitle": "데이터 외부 전송 제로: HIPAA(의료), PCI-DSS(금융), 법적 특권을 위한 로컬 LLM. 에어갭 설정, 감사 로그, GDPR 제32조 내용 수록.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "create-custom-local-models-overview": {
    "en": {
      "title": "Create Custom Local LLMs 2026: Fine-Tuning vs Pre-Training with Unsloth and Ollama",
      "subtitle": "Fine-tune Llama 3.3 8B with LoRA: 500 examples, 8 GB VRAM, 1–2 hours, $100–500. Pre-training: 10B+ t",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Eigene lokale LLMs erstellen 2026: Fine-Tuning vs. Pre-Training mit Unsloth und Ollama",
      "subtitle": "Eigene lokale LLMs erstellen 2026: Fine-Tuning (ab $500) vs. Pre-Training (ab $50K). LoRA, QLoRA und",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Créer des LLMs locaux personnalisés en 2026 : Fine-tuning vs. Pre-training avec Unsloth et Ollama",
      "subtitle": "Fine-tuner Llama 3.3 8B avec LoRA : 500 exemples, 8 Go VRAM, 1–2h, 100–500 $. Pré-entraînement : 10B",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "カスタム ローカル LLM を構築する 2026 年版：Unsloth と Ollama による Fine-tuning vs. Pre-training",
      "subtitle": "Llama 3.3 8BをLoRAで微調整：500例、8GB VRAM、1–2時間、$100–500。事前訓練：10B+トークン、数週間、$50K–500K。判断マトリクスとOllamaデプロイ手順付",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "创建自定义本地 LLM 2026：使用 Unsloth 和 Ollama 进行微调与预训练",
      "subtitle": "用LoRA微调Llama 3.3 8B：500个样本，8GB显存，1–2小时，$100–500。预训练：10B+令牌，数周，$50K–500K。含决策矩阵与Ollama部署指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Crear LLMs Locales Personalizados 2026: Fine-Tuning vs Pre-Training con Unsloth y Ollama",
      "subtitle": "Fine-tune Llama 3.3 8B con LoRA: 500 ejemplos, 8 GB VRAM, 1–2 h, $100–500. Pre-training: 10B+ tokens",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Criar LLMs Locais Personalizados 2026: Fine-Tuning vs Pré-Treinamento com Unsloth e Ollama",
      "subtitle": "Fine-tune Llama 3.3 8B com LoRA: 500 exemplos, 8 GB VRAM, 1–2 h, $100–500. Pré-treinamento: 10B+ tok",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "إنشاء نماذج ⁨LLM⁩ محلية مخصصة ⁨2026⁩: الضبط الدقيق مقابل التدريب المسبق بـ ⁨Unsloth⁩ و⁨Ollama⁩",
      "subtitle": "الضبط بـ ⁨LoRA⁩ على ⁨Llama 3.3 8B⁩: ⁨500⁩ مثال، ⁨8 GB VRAM⁩، ⁨1⁩–⁨2⁩ ساعة، ⁨100⁩–⁨500⁩$. التدريب الم",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "커스텀 로컬 LLM 만들기 2026: Unsloth와 Ollama를 활용한 파인튜닝 vs 사전학습",
      "subtitle": "LoRA로 Llama 3.3 8B 파인튜닝: 예시 500개, VRAM 8 GB, 1~2시간, $100~500. 사전학습: 토큰 100억 개 이상, 수 주, $5만~50만. 의사결정",
      "footer": "PromptQuorum 가이드"
    }
  },
  "prompt-engineering-for-local-models-overview": {
    "en": {
      "title": "Prompt Engineering for Local LLMs 2026: CoT & Few-Shot",
      "subtitle": "Chain-of-thought boosts 7B accuracy 10–20%. Few-shot (3–5 examples) beats zero-shot by 15–25%. Syste",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Prompt Engineering für lokale LLMs 2026: CoT & Few-Shot",
      "subtitle": "Prompt Engineering für lokale Modelle 2026: Techniken für kleinere LLMs. System-Prompts, Few-Shot un",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Ingénierie des prompts pour LLM locaux 2026 : CoT & Few-Shot",
      "subtitle": "Le prompting par chaîne de pensées améliore la précision 7B de 10–20%. Few-Shot (3–5 exemples) surpa",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM向けプロンプトエンジニアリング2026：CoT＆Few-Shot",
      "subtitle": "思考の連鎖によるプロンプティングで7B精度が10～20%向上。Few-Shot（3～5例）がZero-Shotを15～25%上回ります。OllamaとLM Studioのシステムプロンプトガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM提示工程2026：思维链与少样本",
      "subtitle": "思维链提示词提高7B准确率10-20%。少样本（3-5例）优于零样本15-25%。Ollama和LM Studio系统提示指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Prompt Engineering para LLMs locales 2026: CoT y Few-Shot",
      "subtitle": "La cadena de pensamiento sube la precisión de los modelos 7B un 10–20%. El few-shot (3–5 ejemplos) s",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Prompt Engineering para LLMs locais 2026: CoT e Few-Shot",
      "subtitle": "Cadeia de pensamento aumenta a precisão de modelos 7B em 10–20%. Few-shot (3–5 exemplos) supera zero",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "هندسة الأوامر لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: ⁨CoT⁩ و⁨Few-Shot⁩",
      "subtitle": "سلسلة التفكير (⁨Chain-of-Thought⁩) ترفع دقة نماذج ⁨7B⁩ بـ ⁨10⁩–⁨20%. few-shot⁩ بـ ⁨3⁩–⁨5⁩ أمثلة يتفو",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 프롬프트 엔지니어링 2026: CoT 및 Few-Shot",
      "subtitle": "Chain-of-thought로 7B 정확도를 10–20% 향상시킵니다. Few-shot(예시 3–5개)은 zero-shot 대비 15–25% 우수합니다. Ollama 및 LM S",
      "footer": "PromptQuorum 가이드"
    }
  },
  "future-of-local-llms-overview": {
    "en": {
      "title": "Local LLM Trends 2026–2027: 5 Key Predictions for Enterprise Adoption and On-Device AI",
      "subtitle": "Small-model quality keeps improving in 2026. Smartphones run local LLMs at 15–30 tok/sec. Enterprise",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLM Trends 2026–2027: 5 Schlüsselvorhersagen für Enterprise-Adoption und On-Device-KI",
      "subtitle": "Die Zukunft lokaler LLMs: Modellqualität pro Parameter bei kleinen Modellen steigt weiter, Smartphon",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Tendances LLM local 2026–2027 : 5 prédictions clés pour l'adoption entreprise et l'IA sur appareil",
      "subtitle": "La qualité par paramètre des petits modèles s'améliore en 2026. Les smartphones exécutent des LLM lo",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMトレンド2026–2027：エンタープライズ導入と端末AI予測",
      "subtitle": "小型モデルのパラメータ当たり品質は2026年も向上を続けています。スマートフォンは15–30トークン/秒でローカルLLMを実行。企業のオンプレミス推論導入は規制業界を中心に拡大しています。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM趋势2026–2027：企业采用与端设备AI的5大预测",
      "subtitle": "小型模型的参数效率在2026年持续提升。智能手机以15–30令牌/秒运行本地LLM。企业本地推理的采用正在增长，由受监管行业带头。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Tendencias de LLM local 2026–2027: 5 predicciones clave para la adopción empresarial y la IA en dispositivo",
      "subtitle": "La calidad de los modelos pequeños por parámetro sigue mejorando en 2026 y los smartphones ejecutan ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Tendências de LLM local 2026–2027: 5 previsões principais para adoção empresarial e IA em dispositivo",
      "subtitle": "A qualidade dos modelos pequenos por parâmetro continua melhorando em 2026 e smartphones executam LL",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "اتجاهات ⁨LLM⁩ المحلية ⁨2026⁩–⁨2027⁩: ⁨5⁩ تنبؤات رئيسية لتبني المؤسسات والذكاء الاصطناعي على الجهاز",
      "subtitle": "جودة النماذج الصغيرة لكل معامل تستمر في التحسن في ⁨2026⁩؛ الهواتف تشغّل ⁨LLMs⁩ محلياً بسرعة ⁨15⁩–⁨30",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 트렌드 2026–2027: 기업 도입과 온디바이스 AI를 위한 5가지 핵심 예측",
      "subtitle": "소형 모델의 파라미터당 품질은 2026년에도 계속 향상되고 있습니다. 스마트폰이 15–30 tok/sec으로 로컬 LLM을 실행합니다. 기업의 온프레미스 추론 도입이 규제 산업을 ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "apple-on-device-ai-vs-local-llms-overview": {
    "en": {
      "title": "Apple",
      "subtitle": "Apple WWDC 2026: three-tier Apple Intelligence — on-device AFM Core, Private Cloud Compute, and Gemi",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Apples On-Device-KI vs. echte lokale LLMs: Was WWDC 2026 wirklich geändert hat",
      "subtitle": "WWDC 2026: Apple Intelligence dreistufig — On-Device AFM, Private Cloud Compute und Google Cloud (Ge",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "L",
      "subtitle": "WWDC 2026 : Apple Intelligence sur trois niveaux — AFM on-device, Private Cloud Compute et Google Cl",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "AppleのオンデバイスAI対ローカルLLM：WWDC 2026で実際に何が変わったか",
      "subtitle": "WWDC 2026：Apple Intelligenceは3層構造——オンデバイスAFM Core、Private Cloud Compute、Gemini訓練済みGoogle Cloudレイヤー。ロ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Apple的本地AI与真正的本地LLM：WWDC 2026到底改变了什么",
      "subtitle": "WWDC 2026：Apple Intelligence三层架构——设备端AFM Core、Private Cloud Compute、Gemini训练的Google Cloud层。本地LLM用户须知",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "La IA on-device de Apple vs los LLM locales reales: qué cambió realmente en WWDC 2026",
      "subtitle": "WWDC 2026: Apple Intelligence tiene tres niveles — AFM on-device, Private Cloud Compute y Google Clo",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "A IA no dispositivo da Apple vs LLMs locais reais: o que a WWDC 2026 mudou de verdade",
      "subtitle": "WWDC 2026: Apple Intelligence em três camadas — AFM no dispositivo, Private Cloud Compute e Google C",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "الذكاء الاصطناعي المحلي من ⁨Apple⁩ مقابل نماذج ⁨LLM⁩ المستضافة ذاتياً: ما الذي غيّرته ⁨WWDC 2026⁩ فعلاً",
      "subtitle": "⁨WWDC 2026⁩: ⁨Apple Intelligence⁩ بثلاثة مستويات: ⁨AFM⁩ على الجهاز، و⁨Private Cloud Compute⁩، و⁨Goog",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Apple 온디바이스 AI vs 실제 로컬 LLM: WWDC 2026이 실제로 바꾼 것",
      "subtitle": "Apple WWDC 2026: 3계층 Apple Intelligence — 온디바이스 AFM Core, Private Cloud Compute, Gemini로 훈련된 Google ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "apple-silicon-vs-nvidia-gpu-local-llm-overview": {
    "en": {
      "title": "Apple Silicon vs NVIDIA GPU for Local LLMs 2026: Performance, Cost, Workflow Compared",
      "subtitle": "M5 Max vs RTX 4090: speed, cost, power, VRAM vs unified memory. Crossover at ~24GB. Below 24GB: NVID",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Apple Silicon vs NVIDIA GPU für lokale LLMs 2026: Performance, Kosten, Workflow im Vergleich",
      "subtitle": "M5 Max vs RTX 4090: Geschwindigkeit, Kosten, Stromverbrauch, VRAM vs Unified Memory. Wendepunkt bei ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Apple Silicon vs NVIDIA GPU pour les LLMs locaux 2026 : Performance, coûts, workflow comparés",
      "subtitle": "M5 Max vs RTX 4090 : vitesse, coûts, consommation d'énergie, VRAM vs mémoire unifiée. Point de bascu",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "2026年 Apple SiliconとNVIDIA GPUのローカルLLM比較：性能、コスト、ワークフロー",
      "subtitle": "M5 Max vs RTX 4090：性能、コスト、消費電力、VRAM vs Unified Memory比較。分岐点24GB。以下ではNVIDIA高速、以上ではApple Siliconのみ。ベンチ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年Apple Silicon vs NVIDIA GPU本地大模型对比：性能、成本、工作流",
      "subtitle": "M5 Max vs RTX 4090：性能、成本、功耗、VRAM对统一内存对比。转折点24GB。24GB以下NVIDIA更快，以上Apple Silicon唯一。完整基准、TCO分析、工作流对比。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Apple Silicon vs NVIDIA GPU para LLMs locales 2026: Rendimiento, Costo, Workflow Comparados",
      "subtitle": "M5 Max vs RTX 4090: velocidad, costo, consumo y VRAM vs memoria unificada. Punto de cruce a ~24 GB: ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Apple Silicon vs GPU NVIDIA para LLMs locais 2026: desempenho, custo e workflow comparados",
      "subtitle": "M5 Max vs RTX 4090: velocidade, custo, consumo e VRAM vs memória unificada. Ponto de cruzamento em ~",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Apple Silicon⁩ مقابل ⁨GPU⁩ من ⁨NVIDIA⁩ لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: الأداء والتكلفة وتدفق العمل",
      "subtitle": "⁨M5 Max⁩ مقابل ⁨RTX 4090⁩: التقاطع عند ⁨24 GB⁩. دونها تتفوق ⁨NVIDIA⁩؛ فوقها ⁨Apple Silicon⁩ الخيار ا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 Apple Silicon vs NVIDIA GPU 로컬 LLM 비교: 성능, 비용, 워크플로우",
      "subtitle": "M5 Max vs RTX 4090: 속도, 비용, 전력, VRAM 대 통합 메모리 비교. 분기점 약 24GB. 24GB 미만에서는 NVIDIA 우세, 초과 시 Apple Silic",
      "footer": "PromptQuorum 가이드"
    }
  },
  "apple-silicon-whisper-metal-benchmark-overview": {
    "en": {
      "title": "Whisper on Apple Silicon 2026: Metal Benchmarks, Core ML Setup, M1–M5 Speed Guide",
      "subtitle": "Whisper on Mac: Metal GPU benchmarks M1–M5, setup, real-time transcription. Large-v3 runs 10× real-t",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Whisper auf Apple Silicon 2026: Metal-Benchmarks, Core-ML-Setup, M1–M5-Geschwindigkeitsleitfaden",
      "subtitle": "Whisper auf Mac: Metal GPU Benchmarks M1–M5, Setup, Echtzeit-Transkription. Large-v3 läuft 10× Realz",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Whisper sur Apple Silicon 2026 : Benchmarks Metal, Configuration Core ML, Guide M1–M5",
      "subtitle": "Whisper sur Mac : benchmarks GPU Metal M1–M5, configuration, transcription temps réel. Large-v3 10× ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Apple Silicon上のWhisper 2026：MetalベンチマークとCore ML設定、M1–M5速度ガイド",
      "subtitle": "Whisper on Mac：Metal GPU ベンチマーク M1–M5、セットアップ、リアルタイム文字起こし。Large-v3は M5 Pro で10×リアルタイム実行。Core MLガイド、モデ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Apple Silicon上的Whisper 2026：Metal基准测试、Core ML设置、M1–M5速度指南",
      "subtitle": "Whisper on Mac：Metal GPU 基准测试 M1–M5、安装、实时转录。Large-v3 在 M5 Pro 上实现10倍实时速度。Core ML 配置指南、模型选择、实现步骤。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Whisper en Apple Silicon 2026: Benchmarks Metal, Configuración Core ML, Guía M1–M5",
      "subtitle": "Whisper en Mac: benchmarks GPU Metal M1–M5, configuración, transcripción en tiempo real. Large-v3 co",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Whisper no Apple Silicon 2026: benchmarks Metal, configuração Core ML, guia M1-M5",
      "subtitle": "Whisper no Mac: benchmarks GPU Metal M1-M5, configuração, transcrição em tempo real. Large-v3 roda a",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Whisper⁩ على ⁨Apple Silicon 2026⁩: اختبارات ⁨Metal⁩ المرجعية، إعداد ⁨Core ML⁩، دليل ⁨M1⁩–⁨M5⁩",
      "subtitle": "⁨Whisper Large-v3⁩ يعمل بسرعة ⁨10⁩× الوقت الفعلي على ⁨M5 Pro⁩ عبر ⁨Metal⁩. اختبارات ⁨M1⁩–⁨M5 Max⁩، إ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Apple Silicon의 Whisper 2026: Metal 벤치마크, Core ML 설정, M1–M5 속도 가이드",
      "subtitle": "Mac에서의 Whisper: Metal GPU 벤치마크 M1–M5, 설정, 실시간 전사. Large-v3는 M5 Pro에서 10× 실시간 속도로 실행됩니다. Core ML 가이드.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-cost-calculator-build-vs-rent-2026-overview": {
    "en": {
      "title": "Local LLM Cost Calculator: Build vs Rent 2026",
      "subtitle": "Build vs rent LLM cost comparison 2026. Full TCO calculator for a local GPU workstation vs RunPod/La",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "LLM Kostenrechner: Kaufen vs. Mieten 2026",
      "subtitle": "Lokale LLM-Kosten 2026: Hardware kaufen vs. Cloud-GPU mieten. Break-even-Rechner für RTX 4090, Mac u",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Calculateur de coût LLM : construire vs louer 2026",
      "subtitle": "Comparatif TCO complet : workstation GPU locale vs location cloud GPU (RunPod, Lambda Labs) pour LLM",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "LLMコスト計算：ローカル構築 vs クラウドレンタル 2026年版",
      "subtitle": "ローカルGPUワークステーション vs RunPod/Lambda Labs完全TCO比較 2026年。損益分岐点は累計約1,800GPU時間。電気代を含む詳細計算付き。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM成本计算器：自建 vs 云租GPU 2026",
      "subtitle": "2026年自建GPU工作站与云GPU租赁（RunPod/Lambda Labs）完整生命周期成本（TCO）对比分析：损益平衡点约1,800 GPU小时，含电费、折旧与维护成本计算器，帮您精确判断自建还",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Calculadora de Costos LLM Local: Construir vs Rentar 2026",
      "subtitle": "TCO completo 2026: workstation GPU local vs alquiler cloud (RunPod, Lambda Labs). Punto de equilibri",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Calculadora de Custo de LLM Local: Montar vs Alugar 2026",
      "subtitle": "Comparação de custo montar vs alugar LLM 2026. Calculadora completa de TCO para workstation com GPU ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "حاسبة تكلفة ⁨LLM⁩ المحلي: البناء مقابل الاستئجار ⁨2026⁩",
      "subtitle": "⁨RTX 4090⁩ بـ ⁨1800⁩ دولار تسترد تكلفتها في ⁨12⁩–⁨18⁩ شهرًا مقابل ⁨RunPod⁩. دون ⁨50⁩ ساعة/شهر السحاب",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 비용 계산기: 자체 구축 vs 클라우드 렌탈 2026",
      "subtitle": "로컬 LLM 구축 대 클라우드 렌탈 비용 비교 2026. 로컬 GPU 워크스테이션 vs RunPod/Lambda Labs 클라우드의 총소유비용(TCO) 계산기 — 손익분기점은 약 ",
      "footer": "PromptQuorum 가이드"
    }
  }
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}
(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();

