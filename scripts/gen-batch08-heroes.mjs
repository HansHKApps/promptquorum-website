#!/usr/bin/env node
const BASE = 'http://localhost:3067';
const SPECS = {
  "gpu-vs-ai-subscription-roi-overview": {
    "en": {
      "title": "GPU vs ChatGPT Plus 2026: When Buying a GPU Pays Back the Subscription",
      "subtitle": "Used RTX 5060 Ti ($450) breaks even with ChatGPT Plus ($240/yr) in 18–24 months at 5 hrs/week. Heavy",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "GPU vs ChatGPT Plus 2026: Wann sich der GPU-Kauf gegenüber dem Abonnement amortisiert",
      "subtitle": "Gebrauchte RTX 5060 Ti (449 €) amortisiert sich mit ChatGPT Plus (240 €/Jahr) in 18 Monaten.",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "GPU vs ChatGPT Plus 2026 : Quand l'achat d'un GPU devient rentable face à l'abonnement",
      "subtitle": "RTX 5060 Ti d'occasion (450 €) s'amortit face à ChatGPT Plus (240 €/an) en 18–24 mois à 5 h/sem. Éco",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "GPU vs ChatGPT Plus 2026: 中古GPU（¥44万）が18ヶ月で元が取れる時代",
      "subtitle": "中古RTX 5060 Ti (¥56,000) がChatGPT Plus (¥30,000/年) と18–24ヶ月で損益分岐点。重度利用者は5年で¥540万以上節約。7つのChatGPTティア全体で",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "GPU vs ChatGPT Plus 2026: 二手GPU在18个月内收回成本的时代",
      "subtitle": "二手RTX 5060 Ti ($450) 与ChatGPT Plus ($240/年) 在18–24个月内收回成本。每周5小时用量。重度用户5年省$5,000+。7个ChatGPT价格层级全表对比。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "GPU vs ChatGPT Plus 2026: Cuándo comprar una GPU es más rentable que la suscripción",
      "subtitle": "RTX 5060 Ti usada ($450) iguala a ChatGPT Plus ($240/año) en 18–24 meses a 5 h/semana. Los usuarios ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "GPU vs ChatGPT Plus 2026: Quando comprar uma GPU é mais econômico que a assinatura",
      "subtitle": "RTX 5060 Ti usada ($450) iguala ChatGPT Plus ($240/ano) em 18–24 meses a 5 h/semana. Usuários intens",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨GPU⁩ مقابل ⁨ChatGPT Plus 2026⁩: متى يكون شراء ⁨GPU⁩ أوفر من الاشتراك",
      "subtitle": "⁨RTX 5060 Ti⁩ مستعملة بـ ⁨450⁩$ تعادل ⁨ChatGPT Plus⁩ (⁨240⁩$/سنة) خلال ⁨18⁩–⁨24⁩ شهرًا بمعدل ⁨5⁩ ساع",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "GPU vs ChatGPT Plus 2026: GPU 구매가 구독료를 회수하는 시점",
      "subtitle": "중고 RTX 5060 Ti ($450)는 주 5시간 사용 기준 18~24개월 만에 ChatGPT Plus ($240/년)와 손익분기점에 도달합니다. 헤비 유저는 5년간 $5,000",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-vs-cloud-gpu-cost-overview": {
    "en": {
      "title": "Local LLM vs Cloud GPU: What Is Cheaper?",
      "subtitle": "Local GPU vs cloud compute: cost per hour, breakeven analysis. Lambda Labs, Paperspace, AWS.",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Local LLMs vs. Cloud-GPUs: Kostenvergleich 2026",
      "subtitle": "Gesamtbetriebskosten von Local LLMs vs. Cloud-GPU-Lösungen. TCO-Vergleich, ROI-Analyse und Kostenopt",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Local LLMs vs. GPU Cloud: Comparaison des coûts 2026",
      "subtitle": "Coût total de possession des LLM locaux vs. solutions GPU Cloud. Comparaison TCO, analyse ROI et opt",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMとクラウドGPU: コスト比較2026",
      "subtitle": "ローカルLLMとクラウドGPUソリューションの総所有コスト。TCO比較、ROI分析、企業向けコスト最適化。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM与云GPU: 2026年成本比较",
      "subtitle": "本地LLM与云GPU解决方案的总拥有成本。TCO比较、ROI分析和企业成本优化。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLM Local vs GPU en la Nube: ¿Qué Sale Más Barato?",
      "subtitle": "GPU local vs cómputo en la nube: costo por hora, análisis de punto de equilibrio. Lambda Labs, Paper",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLM Local vs GPU na Nuvem: o que sai mais barato?",
      "subtitle": "GPU local vs computação em nuvem: custo por hora, análise de ponto de equilíbrio. Lambda Labs, Paper",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨LLM⁩ المحلي مقابل ⁨GPU⁩ السحابية: أيهما أرخص؟",
      "subtitle": "⁨RTX 4070⁩ المحلية: ⁨0.02⁩–⁨0.05⁩$/ساعة مقابل ⁨0.50⁩–⁨2.50⁩$ على ⁨Paperspace⁩ و⁨Lambda Labs⁩ و⁨AWS⁩.",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM vs 클라우드 GPU: 어느 쪽이 더 저렴합니까?",
      "subtitle": "로컬 GPU vs 클라우드 컴퓨팅: 시간당 비용, 손익분기점 분석. Lambda Labs, Paperspace, AWS.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "cloud-gpu-rental-comparison-2026-overview": {
    "en": {
      "title": "RunPod vs Vast.ai vs Lambda Labs for LLM Inference (July 2026)",
      "subtitle": "RunPod vs Vast.ai vs Lambda Labs for LLM inference: RTX 4090, A100, H100, RTX 5090 hourly pricing, u",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "RunPod vs Vast.ai vs Lambda Labs für LLM-Inferenz (Juli 2026)",
      "subtitle": "RunPod vs Vast.ai vs Lambda Labs für LLM-Inferenz: Stundenpreise für RTX 4090, A100, H100, RTX 5090,",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "RunPod vs Vast.ai vs Lambda Labs pour l'inférence LLM (Juillet 2026)",
      "subtitle": "RunPod vs Vast.ai vs Lambda Labs pour l'inférence LLM : tarifs horaires RTX 4090, A100, H100, RTX 50",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "RunPod vs Vast.ai vs Lambda Labs：LLM推論向けGPUレンタル比較(2026年7月版)",
      "subtitle": "LLM推論向けRunPod・Vast.ai・Lambda Labs比較:RTX 4090・A100・H100・RTX 5090の時間料金、稼働率SLA、GDPR対応。2026年7月更新。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "RunPod vs Vast.ai vs Lambda Labs：LLM推理云GPU租赁对比(2026年7月)",
      "subtitle": "面向LLM推理的RunPod、Vast.ai、Lambda Labs对比:RTX 4090、A100、H100、RTX 5090的每小时价格、正常运行时间SLA、GDPR合规性。2026年7月更新。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "RunPod vs Vast.ai vs Lambda Labs para Inferencia LLM (Julio 2026)",
      "subtitle": "RunPod vs Vast.ai vs Lambda Labs para inferencia LLM: precios por hora de RTX 4090, A100, H100 y RTX",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Aluguel de GPU na Nuvem 2026: RunPod vs Vast.ai vs Lambda Labs (Testado Maio 2026)",
      "subtitle": "Compare RunPod, Vast.ai e Lambda Labs para inferência LLM: preços ($0,34–$2,99/hr), SLA de uptime, c",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "RunPod مقابل Vast.ai مقابل Lambda Labs لاستدلال LLM (يوليو 2026)",
      "subtitle": "RunPod مقابل Vast.ai مقابل Lambda Labs لاستدلال LLM: أسعار RTX 4090 وA100 وH100 وRTX 5090 بالساعة، و",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "클라우드 GPU 렌탈 2026: RunPod vs Vast.ai vs Lambda Labs (2026년 5월 테스트)",
      "subtitle": "로컬 LLM 추론을 위한 RunPod, Vast.ai, Lambda Labs 비교: 가격($0.34–$2.99/시간), 가동률 SLA, GDPR 준수 여부, 설정 시간. 2026년",
      "footer": "PromptQuorum 가이드"
    }
  },
  "used-gpus-for-local-llms-overview": {
    "en": {
      "title": "Used GPUs for Local LLMs: Best Value Picks",
      "subtitle": "Best used GPUs for local LLMs: RTX 3060, 3080, 3090, 4090. Where to buy, risk assessment, how to ben",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Gebrauchte GPUs für lokale LLMs: Die besten Sparangebote",
      "subtitle": "Beste gebrauchte GPUs für lokale LLMs: RTX 3060, 3080, 3090, 4090. Wo kaufen, Risikobewertung, Bench",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "GPU utilisés pour LLMs locaux : Meilleures offres de valeur",
      "subtitle": "Meilleures GPU utilisées pour LLMs locaux : RTX 3060, 3080, 3090, 4090. Où acheter, évaluation des r",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM向け中古GPU：ベストバリューピック",
      "subtitle": "ローカルLLM向け最高の中古GPU：RTX 3060、3080、3090、4090。購入方法、リスク評価、ベンチマークテスト。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM二手GPU：最佳价值选择",
      "subtitle": "本地LLM最佳二手GPU：RTX 3060、3080、3090、4090。购买位置、风险评估、基准测试。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "GPUs de segunda mano para LLMs locales: Las mejores opciones por precio",
      "subtitle": "Mejores GPUs de segunda mano para LLMs locales: RTX 3060, 3080, 3090, 4090. Dónde comprar, evaluació",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "GPUs usadas para LLMs locais: As melhores opções por preço",
      "subtitle": "Melhores GPUs usadas para LLMs locais: RTX 3060, 3080, 3090, 4090. Onde comprar, avaliação de riscos",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "وحدات ⁨GPU⁩ المستعملة لنماذج ⁨LLM⁩ المحلية: أفضل الخيارات حسب السعر",
      "subtitle": "⁨RTX 3060 12GB⁩ مستعملة بـ ⁨200-250⁩ دولارًا توفّر ⁨40%⁩ عن السعر الجديد. دليل ⁨GPU⁩ مستعملة لـ ⁨LLM",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "중고 GPU로 로컬 LLM 구동하기: 최고의 가성비 선택",
      "subtitle": "로컬 LLM용 최고의 중고 GPU: RTX 3060, 3080, 3090, 4090. 구매처, 리스크 평가, 벤치마크 테스트 방법.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "headless-local-llms-overview": {
    "en": {
      "title": "Headless Local LLMs: Running Models Without a UI (2026)",
      "subtitle": "Headless local LLM deployment 2026: run Ollama, vLLM, and inference APIs without UI. Production setu",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Headless Local LLMs: Modelle ohne Benutzeroberfläche ausführen (2026)",
      "subtitle": "Headless-LLM-Deployment mit Ollama und vLLM: Produktionssetup für Server und Microservices ohne UI. ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLMs Headless locaux : exécuter des modèles sans interface utilisateur (2026)",
      "subtitle": "Déploiement LLM Headless avec Ollama et vLLM : configuration de production pour serveurs et microser",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Headless Local LLMs: UIなしでモデルを実行する (2026)",
      "subtitle": "Headless LLMデプロイメント: OllamaやvLLMをUIなしで実行。本番環境向けサーバーおよびマイクロサービス構成のセットアップと監視。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Headless本地LLMs: 无界面运行模型 (2026)",
      "subtitle": "Headless LLM部署: 无界面运行Ollama和vLLM。面向服务器和微服务的生产环境配置、监视和扩展。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs locales headless: ejecutar modelos sin interfaz de usuario (2026)",
      "subtitle": "Despliegue de LLM local headless 2026: ejecuta Ollama, vLLM y APIs de inferencia sin UI. Configuraci",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs locais headless: rodar modelos sem interface de usuário (2026)",
      "subtitle": "Implantação de LLM local headless 2026: rode Ollama, vLLM e APIs de inferência sem UI. Configuração ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية بلا واجهة (⁨headless⁩): تشغيل النماذج دون واجهة مستخدم (⁨2026⁩)",
      "subtitle": "⁨vLLM⁩ يدعم ⁨50⁩+ طلبًا متزامنًا؛ ⁨Ollama⁩ يبدأ ⁨API⁩ بأمر واحد على ⁨localhost⁩:⁨11434⁩. نشر ⁨LLM⁩ ب",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "헤드리스 로컬 LLM: UI 없이 모델 실행하기 (2026)",
      "subtitle": "헤드리스 로컬 LLM 배포 2026: UI 없이 Ollama, vLLM, 추론 API 실행. 서버 및 마이크로서비스를 위한 프로덕션 설정.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "vpn-for-local-llm-users-overview": {
    "en": {
      "title": "VPNs and Local AI: What You Need to Know",
      "subtitle": "VPN for local LLM server access: WireGuard, OpenVPN setup. Remote team access, security. Split tunne",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "VPNs und lokale KI: Was du wissen musst",
      "subtitle": "VPN für lokalen LLM-Serverzugriff: WireGuard, OpenVPN Setup. Remote-Team-Zugriff, Sicherheit. Split-",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "VPN et IA locale : ce que vous devez savoir",
      "subtitle": "VPN pour accès serveur LLM local : WireGuard, setup OpenVPN. Accès équipe distante, sécurité. Guide ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "VPNとローカルAI：知っておくべきこと",
      "subtitle": "ローカルLLMサーバーアクセス用VPN：WireGuard、OpenVPNセットアップ。リモートチームアクセス、セキュリティ。分割トンネリングガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "VPN 和本地 AI：你需要了解的内容",
      "subtitle": "本地 LLM 服务器 VPN 访问：WireGuard、OpenVPN 设置。远程团队访问、安全。分割隧道指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "VPN y AI local: todo lo que necesitas saber",
      "subtitle": "VPN para acceso al servidor LLM local: configuración de WireGuard y OpenVPN. Acceso de equipo remoto",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "VPN e IA local: tudo o que você precisa saber",
      "subtitle": "VPN para acesso ao servidor LLM local: configuração de WireGuard e OpenVPN. Acesso de equipe remota,",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨VPN⁩ والذكاء الاصطناعي المحلي: كل ما تحتاج معرفته",
      "subtitle": "⁨VPN⁩ للوصول إلى خادم ⁨LLM⁩ المحلي عن بُعد: إعداد ⁨WireGuard⁩ و⁨OpenVPN⁩ خطوة بخطوة، وصول الفريق الآ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "VPN과 로컬 AI: 알아야 할 모든 것",
      "subtitle": "로컬 LLM 서버 접속을 위한 VPN: WireGuard, OpenVPN 설정. 원격 팀 접속, 보안. 분할 터널링 가이드.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "multilingual-local-llms-overview": {
    "en": {
      "title": "Multilingual Local LLMs: Best Models for Non-English Languages in 2026",
      "subtitle": "Qwen3 dominates Asian languages (15-25% better than Llama on JMT-bench). Mistral competitive for Eur",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste mehrsprachige lokale LLMs 2026: Qwen3 vs. Mistral",
      "subtitle": "Mehrsprachige LLMs 2026: Qwen3 7B beste für Chinesisch/Japanisch/Koreanisch. Mistral konkurriert bei",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs LLMs locaux multilingues 2026 : Qwen3 vs Mistral",
      "subtitle": "LLMs locaux multilingues 2026 : Qwen3 7B meilleur pour chinois/japonais/coréen. Mistral rivalise en ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ベスト多言語ローカルLLM 2026：Qwen3 vs Mistral",
      "subtitle": "多言語ローカルLLM 2026：Qwen3 7Bはアジア言語でLlamaより15-25%優勢（JMT基準）。欧州語はMistralと競争力互角。29言語、ベンチマーク比較掲載。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "多语言本地LLM：2026年非英语语言的最佳模型",
      "subtitle": "Qwen3在中文/日文/韩文上领先（JMT基准高15-25%）。支持29种语言本地运行。Mistral在欧洲语言具竞争力。基准对比与推荐 -- 2026年4月。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Los mejores LLM locales multilingues 2026: Qwen3 vs Mistral",
      "subtitle": "Qwen3 domina los idiomas asiáticos (15-25% mejor que Llama en JMT-bench). Mistral competitivo en idi",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores LLMs Locais Multilíngues 2026: Qwen3 vs Mistral",
      "subtitle": "Qwen3 domina idiomas asiáticos (15–25% melhor que Llama no JMT-bench). Mistral competitivo em idioma",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نماذج ⁨LLM⁩ المحلية متعددة اللغات ⁨2026⁩: ⁨Qwen3⁩ مقابل ⁨Mistral⁩",
      "subtitle": "⁨Qwen3⁩ يتفوق في اللغات الآسيوية بـ ⁨15⁩–⁨25%⁩ عن ⁨Llama⁩ في ⁨JMT-bench. Mistral⁩ تنافسي أوروبياً. م",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "다국어 로컬 LLM: 2026년 비영어권 언어에 최적화된 모델",
      "subtitle": "Qwen3는 아시아 언어에서 Llama 대비 15~25% 높은 성능을 기록합니다. Mistral은 유럽 언어에서 경쟁력이 있습니다. 2026년 4월 벤치마크 비교.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "multimodal-local-llms-overview": {
    "en": {
      "title": "Multimodal Local LLMs: Vision, Audio, and Text Processing",
      "subtitle": "Multimodal local LLMs 2026: vision, image processing, OCR, audio models. LLaVA, Qwen-VL guides with ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Multimodale lokale LLMs: Vision, Audio und Textverarbeitung",
      "subtitle": "Multimodale lokale LLMs 2026: Vision, Bildverarbeitung, OCR, Audio-Modelle. LLaVA, Qwen-VL-Anleitung",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Modèles multimodaux locaux : vision, audio et traitement de texte",
      "subtitle": "Modèles multimodaux locaux 2026 : vision, traitement d'images, OCR, modèles audio. Guides LLaVA, Qwe",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "マルチモーダルローカルLLM: ビジョン、オーディオ、テキスト処理",
      "subtitle": "マルチモーダルローカルLLM 2026: ビジョン、画像処理、OCR、オーディオモデル。LLaVA、Qwen-VLガイドと使用例。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "多模态本地LLM：视觉、音频和文本处理",
      "subtitle": "多模态本地LLM 2026: 视觉、图像处理、OCR、音频模型。LLaVA、Qwen-VL指南和用例。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs locales multimodales: visión, audio y procesamiento de texto",
      "subtitle": "LLMs locales multimodales 2026: visión, procesamiento de imágenes, OCR, modelos de audio. Guías de L",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs locais multimodais: visão, áudio e processamento de texto",
      "subtitle": "LLMs locais multimodais 2026: visão, processamento de imagens, OCR, modelos de áudio. Guias de LLaVA",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية متعددة الوسائط: معالجة الرؤية والصوت والنص",
      "subtitle": "نماذج ⁨LLM⁩ المحلية متعددة الوسائط: رؤية الحاسوب، معالجة الصور، ⁨OCR⁩، ونماذج الصوت. أدلة ⁨LLaVA⁩ و⁨",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "멀티모달 로컬 LLM: 비전, 오디오, 텍스트 처리",
      "subtitle": "멀티모달 로컬 LLM 2026: 비전, 이미지 처리, OCR, 오디오 모델. LLaVA, Qwen-VL 가이드 및 활용 사례.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "text-generation-webui-vs-vllm-vs-llamacpp-overview": {
    "en": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp in 2026: Inference Engine Comparison",
      "subtitle": "vLLM dominates production (highest throughput). llama.cpp powers Ollama. Text-Generation-WebUI best ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp 2026: Vergleich von Inference-Engines",
      "subtitle": "vLLM dominiert Production (höchster Durchsatz). llama.cpp treibt Ollama an. Text-Generation-WebUI fü",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp en 2026 : Comparaison des moteurs d'inférence",
      "subtitle": "vLLM domine la production (débit maximal). llama.cpp alimente Ollama (le plus léger). Text-Generatio",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp 2026：推論エンジン比較",
      "subtitle": "vLLM が本番環境を主導（最高スループット）。llama.cpp が Ollama を駆動（最軽量）。Text-Generation-WebUI は研究に最適。2026年推論エンジン比較。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp 2026：推理引擎对比",
      "subtitle": "vLLM 主导生产环境（最高吞吐量）。llama.cpp 驱动 Ollama（最轻量）。Text-Generation-WebUI 最适合研究。2026年推理引擎对比。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp en 2026: Comparación de Motores de Inferencia",
      "subtitle": "vLLM domina la producción (mayor rendimiento), llama.cpp impulsa Ollama (el más ligero) y Text-Gener",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp em 2026: Comparação de Motores de Inferência",
      "subtitle": "vLLM domina produção (maior rendimento), llama.cpp alimenta Ollama (mais leve) e Text-Generation-Web",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Text-Generation-WebUI⁩ مقابل ⁨vLLM⁩ مقابل ⁨llama.cpp⁩ في ⁨2026⁩: مقارنة محركات الاستدلال",
      "subtitle": "⁨vLLM⁩ يُنتج ⁨300⁩+ رمز/ثانية في الإنتاج؛ ⁨llama.cpp⁩ يشغّل ⁨Ollama⁩ (الأخف)؛ ⁨Text-Generation-WebUI",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Text-Generation-WebUI vs vLLM vs llama.cpp 2026년 비교: 추론 엔진 완벽 가이드",
      "subtitle": "vLLM은 프로덕션에 최적(최고 처리량). llama.cpp는 Ollama의 기반. Text-Generation-WebUI는 연구 및 LoRA 파인튜닝에 최적. 2026년 비교.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "desktop-vs-webui-local-llm-overview": {
    "en": {
      "title": "Desktop vs Web UI for Local LLMs: Which Interface Should You Choose?",
      "subtitle": "Desktop vs web UI for local LLMs 2026: comparison on interfaces, features, sharing, scalability. Whe",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Desktop vs Web-UI für lokale LLMs: Welche Oberfläche sollten Sie wählen?",
      "subtitle": "Desktop vs Web-UI für lokale LLMs 2026: Vergleich von Oberflächen, Funktionen, Freigabe, Skalierbark",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Bureau vs Interface Web pour LLM locaux : quelle interface choisir ?",
      "subtitle": "Bureau vs interface Web pour LLM locaux 2026: comparaison d'interfaces, fonctionnalités, partage, sc",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "デスクトップ対Webインターフェース: ローカルLLMに最適なインターフェースを選択",
      "subtitle": "デスクトップ対Webインターフェース 2026: インターフェース、機能、共有、スケーラビリティの比較。本番展開に各を使用する時期。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "桌面应用对Web界面：本地LLM的最佳界面选择",
      "subtitle": "桌面应用对Web界面 2026: 界面、功能、共享、可扩展性比较。何时在本地LLM生产部署中使用各种。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Desktop vs Web UI para LLMs locales: ¿Qué interfaz debes elegir?",
      "subtitle": "Desktop vs Web UI para LLMs locales 2026: compara interfaces, funciones, compatibilidad y escalabili",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Desktop vs Web UI para LLMs locais: qual interface escolher?",
      "subtitle": "Desktop vs Web UI para LLMs locais 2026: compare interfaces, recursos, compatibilidade e escalabilid",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تطبيق سطح المكتب مقابل واجهة الويب لنماذج ⁨LLM⁩ المحلية: أي واجهة تختار؟",
      "subtitle": "⁨LM Studio⁩ و⁨Jan AI⁩ أسهل للمستخدمين العامين. ⁨Open WebUI⁩ قابل للمشاركة وأقوى للإنتاج. قارن الميزا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM용 데스크톱 vs 웹 UI: 어떤 인터페이스를 선택해야 합니까?",
      "subtitle": "로컬 LLM용 데스크톱 vs 웹 UI 2026: 인터페이스, 기능, 공유, 확장성 비교. 프로덕션 배포 시 각 방식의 활용 시점을 안내합니다.",
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

