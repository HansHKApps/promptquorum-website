#!/usr/bin/env node
const BASE = 'http://localhost:3071';
const SPECS = {
  "best-7b-models-consumer-hardware-overview": {
    "en": {
      "title": "Best 7B Models for Consumer Hardware",
      "subtitle": "Discover the best 7B local LLMs for consumer hardware in 2026. Compare speed, RAM usage, and coding ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste 7B-Modelle für Consumer-Hardware",
      "subtitle": "Die besten 7B Local LLMs für normale Hardware. Vergleiche Geschwindigkeit, RAM und Coding-Leistung. ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs modèles 7B pour les GPU grand public",
      "subtitle": "Découvrez les meilleurs LLM 7B locaux pour matériel standard. Comparez vitesse, mémoire et performan",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "コンシューマハードウェア向け最良の7Bモデル",
      "subtitle": "一般的なPCやノートで動作する7BローカルLLMを比較。速度・メモリ・コーディング性能を解説。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "消费级硬件最佳7B模型",
      "subtitle": "了解适用于消费级硬件的最佳7B本地LLM。对比速度、内存和编程性能，在普通电脑上运行强大AI。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejores modelos 7B para hardware de consumo",
      "subtitle": "Descubre los mejores LLMs locales 7B para hardware de consumo en 2026. Compara velocidad, uso de RAM",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores modelos 7B para hardware de consumo 2026",
      "subtitle": "Descubra os melhores LLMs locais 7B para hardware de consumo em 2026. Compare velocidade, uso de RAM",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نماذج ⁨7B⁩ لعتاد المستهلك",
      "subtitle": "⁨Llama 3.3 7B⁩ و⁨Qwen3 7B⁩ بـ ⁨15 tok/s⁩ على ⁨RTX 3060 12 GB. Llama⁩ الأفضل للاستدلال (⁨82% MATH⁩)، ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "소비자 하드웨어를 위한 최고의 7B 모델",
      "subtitle": "2026년 소비자 하드웨어를 위한 최고의 7B 로컬 LLM을 알아보십시오. 속도, RAM 사용량, 코딩 성능을 비교하고 GPU 클러스터 없이 노트북에서 강력한 AI를 실행하십시오.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-nas-storage-local-llm-overview": {
    "en": {
      "title": "Best NAS and Storage for Local AI Models",
      "subtitle": "Best NAS for local LLMs: RAID 6 redundancy, backup strategy, and model library organization. Compare",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Bestes NAS und Speicher für lokale KI-Modelle",
      "subtitle": "Bestes NAS für lokale LLMs: RAID-6-Redundanz, Backup-Strategie und Organisation der Modellbibliothek",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "NAS pour LLM locaux 2026: RAID 6, Sauvegarde & Redondance",
      "subtitle": "Meilleur NAS pour LLM locaux : redondance RAID 6, stratégie de sauvegarde et organisation de la bibl",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM用NAS 2026: RAID 6、バックアップ & 冗長性",
      "subtitle": "ローカルLLM向けベストNAS：RAID 6冗長性、バックアップ戦略、モデルライブラリ組織。Synology、QNAP、TrueNASを比較。無料--2026年4月。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM的NAS存储 2026: RAID 6 与备份冗余",
      "subtitle": "本地LLM最佳NAS：RAID 6冗余、备份策略和模型库组织。对比Synology、QNAP和TrueNAS。免费--2026年4月。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejor NAS y Almacenamiento para Modelos de IA Local",
      "subtitle": "Mejor NAS para LLMs locales: redundancia RAID 6, estrategia de backup y organización de la bibliotec",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor NAS e Armazenamento para Modelos de IA Local",
      "subtitle": "Melhor NAS para LLMs locais: redundância RAID 6, estratégia de backup e organização da biblioteca de",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل ⁨NAS⁩ وتخزين لنماذج الذكاء الاصطناعي المحلية",
      "subtitle": "⁨RAID 6⁩ يتحمّل عطل قرصين — الحد الأدنى لفرق ⁨LLM⁩ في الإنتاج. قارن ⁨Synology⁩ و⁨QNAP⁩ و⁨TrueNAS⁩ لت",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 AI 모델을 위한 최고의 NAS 및 스토리지",
      "subtitle": "로컬 LLM을 위한 최고의 NAS: RAID 6 이중화, 백업 전략, 모델 라이브러리 구성. Synology, QNAP, TrueNAS를 비교합니다.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-local-llms-business-writing-overview": {
    "en": {
      "title": "Best Local LLMs for Business Writing in 2026: Email, Proposals, and Brand Voice",
      "subtitle": "Mistral Small 3.1 24B leads for emails and memos. Qwen3 7B excels at non-English writing. 7B-24B mod",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Die besten lokalen LLMs für Geschäftskorrespondenz 2026: E-Mail, Angebote und Markenstimme",
      "subtitle": "Mistral Small 3.1 24B führt bei E-Mails und Memos. Qwen3 7B bei mehrsprachiger Korrespondenz. 7B-24B",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs LLMs locaux pour rédaction professionnelle en 2026 : emails, propositions et voix de marque",
      "subtitle": "Mistral Small 3.1 24B excellent emails/mémos. Qwen3 7B multilingue. Modèles 7B-24B surpassent 70B. C",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "2026年ビジネスライティング向けベストなローカルLLM: メール、提案、ブランドボイス",
      "subtitle": "Mistral Small 3.1 24B最適（メール・メモ）。Qwen3 7B多言語卓越。7B-24Bが70B超越。プロンプトエンジニアリング実例・Ollama完全セットアップガイド・敬語対応。20",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年商业写作最佳本地LLM：电子邮件、提案和品牌声音",
      "subtitle": "Mistral Small 3.1 24B商务邮件最优。Qwen3 7B多语言卓越。7B-24B模型超越70B。Ollama部署10分钟。完整提示工程实例·品牌声音配置·部署最佳实践。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejores LLMs locales para redacción profesional en 2026: correos, propuestas y voz de marca",
      "subtitle": "Mistral Small 3.1 24B lidera para correos y memos; Qwen3 7B destaca en redacción multilingüe. Los mo",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores LLMs locais para escrita profissional em 2026: e-mails, propostas e voz da marca",
      "subtitle": "O Mistral Small 3.1 24B lidera para e-mails e memos; o Qwen3 7B se destaca na escrita multilíngue. O",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نماذج ⁨LLM⁩ المحلية للكتابة المهنية في ⁨2026⁩: رسائل البريد والمقترحات وصوت العلامة التجارية",
      "subtitle": "⁨Mistral Small 3.1 24B⁩ يتصدّر رسائل البريد والمذكرات. ⁨Qwen3 7B⁩ الأفضل للكتابة متعددة اللغات. نماذ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 비즈니스 문서 작성을 위한 최고의 로컬 LLM: 이메일, 제안서, 브랜드 보이스",
      "subtitle": "이메일과 메모에는 Mistral Small 3.1 24B가 최적입니다. 비영어권 문서 작성에는 Qwen3 7B가 탁월합니다. 7B~24B 모델이 70B보다 우수합니다. Ollama",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-local-reasoning-model-deepseek-r1-2026-overview": {
    "en": {
      "title": "Best Local Reasoning Model 2026: DeepSeek-R1 Ranked",
      "subtitle": "The 6 DeepSeek-R1 distills ranked for local reasoning — which fits your GPU, real AIME 2024 scores, ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Bestes lokales Reasoning-Modell 2026: DeepSeek-R1 im Ranking",
      "subtitle": "Die 6 DeepSeek-R1-Distills im Ranking für lokales Reasoning – Mathe, Logik, mehrstufig. Welches pass",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleur modèle de raisonnement local 2026 : DeepSeek-R1 classé",
      "subtitle": "Les 6 distillés DeepSeek-R1 classés pour le raisonnement local — maths, logique, multi-étapes. Leque",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカル推論モデル2026最強は: DeepSeek-R1ディスティル比較",
      "subtitle": "ローカル推論向けにDeepSeek-R1ディスティル6種をランキング — 数学・論理・多段階推論。どれがあなたのGPUに収まるか、実測AIMEスコア、最良の小型ディスティル(R1-0528-Qwen3",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026 最佳本地推理模型：DeepSeek-R1 蒸馏版排名",
      "subtitle": "6 个 DeepSeek-R1 蒸馏模型本地推理（数学、逻辑、多步）排名——哪个适合你的 GPU、真实 AIME 分数，以及最佳小型蒸馏版（R1-0528-Qwen3-8B）。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejor modelo de razonamiento local 2026: DeepSeek-R1 clasificado",
      "subtitle": "Los 6 destilados de DeepSeek-R1 clasificados para razonamiento local: matemáticas, lógica, multipaso",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor Modelo de Raciocínio Local 2026: DeepSeek-R1",
      "subtitle": "Os 6 destilados do DeepSeek-R1 classificados para raciocínio local — matemática, lógica, múltiplas e",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نموذج استدلال محلي ⁨2026⁩: تصنيف ⁨DeepSeek-R1⁩",
      "subtitle": "تصنيف نماذج ⁨DeepSeek-R1⁩ المُقطّرة الستة للاستدلال المحلي — رياضيات ومنطق ومهام متعددة الخطوات. أيّ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 최고의 로컬 추론 모델: DeepSeek-R1 순위",
      "subtitle": "로컬 추론을 위한 6개 DeepSeek-R1 증류 모델 순위 — 수학, 논리, 다단계 문제. 어떤 것이 GPU에 맞는지, 실제 AIME 점수, 그리고 최고의 소형 증류 모델(R1-",
      "footer": "PromptQuorum 가이드"
    }
  },
  "qwen-vs-claude-vs-deepseek-local-2026-overview": {
    "en": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2: Local LLM vs Cloud Comparison 2026",
      "subtitle": "Compare Qwen 3.6 27B (92.1% HumanEval, 16 GB VRAM), Claude Sonnet 5 (89.4%, $3/1M), and DeepSeek R2 ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Qwen 3 vs. Claude Sonnet 5 vs. DeepSeek R2: Lokale KI vs. Cloud-Vergleich 2026",
      "subtitle": "Qwen vs. Claude vs. DeepSeek lokal 2026: Benchmarks, Datenschutz und Kosten. Das beste lokale LLM fü",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 : Comparatif Local vs Cloud 2026",
      "subtitle": "Comparez Qwen 3.6 27B (92,1% HumanEval, 16 Go VRAM), Claude Sonnet 5 (89,4%, 3 $/1M), et DeepSeek R2",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2：ローカルLLM vs クラウド比較 2026",
      "subtitle": "Qwen 3.6 27B（92.1% HumanEval、16 GB VRAM）とClaude Sonnet 5（89.4%、$3/1M）、DeepSeek R2（$0.14/1M）を徹底比較。GDP",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2：本地LLM vs 云端对比 2026",
      "subtitle": "对比Qwen 3.6 27B（92.1% HumanEval、16GB显存）、Claude Sonnet 5（89.4%、$3/1M）、DeepSeek R2（$0.14/1M）。2026年GDPR合",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2: LLM Local vs Cloud Comparación 2026",
      "subtitle": "Compara Qwen 3.6 27B (92,1% HumanEval, 16 GB VRAM), Claude Sonnet 5 (89,4%, $3/1M) y DeepSeek R2 ($0",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2: LLM Local vs Nuvem 2026",
      "subtitle": "Compare Qwen 3.6 27B (92,1% HumanEval, 16 GB VRAM), Claude Sonnet 5 (89,4%, $3/1M) e DeepSeek R2 ($0",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Qwen 3⁩ مقابل ⁨Claude Sonnet 5⁩ مقابل ⁨DeepSeek R2⁩: مقارنة ⁨LLM⁩ المحلي مقابل السحابي ⁨2026⁩",
      "subtitle": "قارن ⁨Qwen 3.6 27B⁩ (⁨92.1% HumanEval⁩، ⁨16 GB VRAM⁩) و⁨Claude Sonnet 5⁩ (⁨89.4%⁩، $⁨3/1M⁩) و⁨DeepSe",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2: 로컬 LLM vs 클라우드 비교 2026",
      "subtitle": "Qwen 3.6 27B(HumanEval 92.1%, 16 GB VRAM), Claude Sonnet 5(89.4%, $3/1M), DeepSeek R2($0.14/1M) 비교. ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "run-qwen-vl-locally-2026-overview": {
    "en": {
      "title": "How to Run Qwen2-VL Locally in 2026: Document OCR & Vision Guide",
      "subtitle": "Run Qwen2-VL locally in ~6 GB VRAM via Ollama: setup steps, Chinese and Japanese document OCR, image",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Qwen2-VL lokal ausführen 2026: Dokumenten-OCR & Vision-Setup-Anleitung",
      "subtitle": "Qwen2-VL lokal mit ~6 GB VRAM über Ollama ausführen: Einrichtungsschritte, OCR für chinesische und j",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Exécuter Qwen2-VL en local en 2026 : guide OCR et vision",
      "subtitle": "Exécuter Qwen2-VL en local avec ~6 GB de VRAM via Ollama : installation, OCR de documents chinois et",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Qwen2-VLをローカル実行 2026：ドキュメントOCRと画像認識ガイド",
      "subtitle": "約6 GBのVRAMでOllamaを使いQwen2-VLをローカル実行：セットアップ手順、中国語・日本語ドキュメントのOCR、画像Q&A、LLaVAとの比較を解説します。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地运行 Qwen2-VL 2026：文档 OCR 与图像识别指南",
      "subtitle": "通过 Ollama 在约 6 GB VRAM 下本地运行 Qwen2-VL：设置步骤、中文与日文文档 OCR、图像问答，以及与 LLaVA 的对比。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Cómo ejecutar Qwen2-VL en local en 2026: guía de OCR de documentos y visión",
      "subtitle": "Ejecuta Qwen2-VL en local con ~6 GB de VRAM vía Ollama: instalación, OCR en chino y japonés, pregunt",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Como executar o Qwen2-VL localmente em 2026: guia de OCR de documentos e visão",
      "subtitle": "Execute o Qwen2-VL localmente com ~6 GB de VRAM via Ollama: instalação, OCR em chinês e japonês, per",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "كيفية تشغيل ⁨Qwen2-VL⁩ محليًا في ⁨2026⁩: دليل ⁨OCR⁩ للمستندات والرؤية",
      "subtitle": "شغّل ⁨Qwen2-VL⁩ محليًا بـ ~⁨6 GB⁩ من ⁨VRAM⁩ عبر ⁨Ollama⁩: التثبيت، ⁨OCR⁩ بالصينية واليابانية، الأسئل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 Qwen2-VL 로컬 실행 방법: 문서 OCR 및 비전 가이드",
      "subtitle": "Ollama를 통해 약 6 GB VRAM으로 Qwen2-VL을 로컬 실행: 설정 단계, 중국어·일본어 문서 OCR, 이미지 Q&A, LLaVA 및 Llama 3.2 Vision 대",
      "footer": "PromptQuorum 가이드"
    }
  },
  "lm-studio-advanced-features-overview": {
    "en": {
      "title": "LM Studio Advanced Features in 2026: GPU Settings, LoRA, and Fine-Tuning",
      "subtitle": "LM Studio",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "LM Studio erweiterte Funktionen 2026: GPU-Einstellungen, LoRA und Fine-Tuning",
      "subtitle": "Konfigurieren Sie GPU-Speicher (10-100% VRAM), erweitern Sie den Kontext bis 32k, nutzen Sie Q4_K_M ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LM Studio : Fonctionnalités avancées 2026 (Paramètres GPU, LoRA et Fine-Tuning)",
      "subtitle": "Configurez la mémoire GPU, les fenêtres de contexte, API locale. Utilisez API pour la production, pa",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "LM Studio高度な機能 2026: GPU、API、ファインチューニング",
      "subtitle": "LM Studio高度な機能：GPU最適化、コンテキストウィンドウ、API、LoRAファインチューニング、バッチ推論。デベロッパーガイド。無料--2026年4月。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "LM Studio高级功能 2026: GPU、API、微调",
      "subtitle": "LM Studio高级功能：GPU优化、上下文窗口、API、LoRA微调和批量推理。开发者指南。免费--2026年4月。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LM Studio: Funciones avanzadas 2026 (GPU, LoRA y ajuste fino)",
      "subtitle": "Servidor API de LM Studio (puerto 1234), control de capas GPU, ajuste de la ventana de contexto, car",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Recursos Avançados do LM Studio em 2026: GPU, LoRA e Fine-Tuning",
      "subtitle": "Servidor API do LM Studio (porta 1234), controle de camadas GPU, ajuste da janela de contexto, carre",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨LM Studio⁩: الميزات المتقدمة ⁨2026⁩ (⁨GPU⁩ و⁨LoRA⁩ والضبط الدقيق)",
      "subtitle": "خادم ⁨API⁩ على المنفذ ⁨1234⁩، تحكم دقيق في طبقات ⁨GPU⁩ من ⁨10%⁩ إلى ⁨100%⁩، توسيع نافذة السياق حتى ⁨",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "LM Studio 고급 기능 2026: GPU 설정, LoRA, 파인튜닝",
      "subtitle": "LM Studio의 API 서버(포트 1234), GPU 레이어 슬라이더, 컨텍스트 창 조정, LoRA 로드/언로드, 배치 추론에 대한 2026년 고급 가이드입니다.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "ollama-on-mac-apple-silicon-setup-2026-overview": {
    "en": {
      "title": "Ollama on Mac 2026: Complete Apple Silicon Setup Guide (M1–M5, Metal GPU)",
      "subtitle": "Install Ollama on Mac with one command. Metal GPU automatic, download any Llama or Mistral model, ru",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Ollama auf Mac 2026: Vollständige Apple Silicon Setup-Anleitung (M1–M5, Metal GPU)",
      "subtitle": "Ollama mit einem Befehl installieren. Metal GPU automatisch, jedes Modell herunterladen, lokal in 2 ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Ollama sur Mac 2026 : Guide d'installation complet Apple Silicon (M1–M5, GPU Metal)",
      "subtitle": "Installez Ollama en une commande. GPU Metal automatique, téléchargez n'importe quel modèle, exécutez",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Mac上のOllama 2026：Apple Silicon完全セットアップガイド（M1–M5、Metal GPU）",
      "subtitle": "Ollamaを1コマンドでインストール。Metal GPU自動、任意のモデルをダウンロード、2分でローカル実行開始。開発者向けREST API完備。セットアップ方法、モデル管理、メモリ最適化、複数モデ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Mac上的Ollama 2026：完整Apple Silicon安装指南（M1–M5，Metal GPU）",
      "subtitle": "一命令安装Ollama。Metal GPU自动启用，下载任意模型，2分钟内本地运行。开发者REST API。完整安装指南、模型管理、内存优化、多模型同时运行、故障排查。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Ollama en Mac 2026: Guía completa de configuración Apple Silicon (M1–M5, GPU Metal)",
      "subtitle": "Instala Ollama en Mac con un solo comando. GPU Metal automática, descarga cualquier modelo Llama o M",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Ollama no Mac 2026: Guia completo de configuração Apple Silicon (M1–M5, GPU Metal)",
      "subtitle": "Instale o Ollama no Mac com um único comando. GPU Metal automática, baixe qualquer modelo Llama ou M",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Ollama⁩ على ⁨Mac 2026⁩: دليل إعداد ⁨Apple Silicon⁩ الكامل (⁨M1⁩–⁨M5⁩، ⁨GPU Metal⁩)",
      "subtitle": "⁨Metal GPU⁩ يعمل تلقائيًا مع ⁨Ollama⁩ على ⁨Mac⁩. تثبيت بأمر واحد، ⁨M5 Pro⁩ يصل إلى ⁨50⁩ رمزًا/ثانية ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Mac용 Ollama 2026: Apple Silicon 완전 설치 가이드 (M1–M5, Metal GPU)",
      "subtitle": "Ollama를 Mac에 단 하나의 명령어로 설치하십시오. Metal GPU 자동 설정, Llama 또는 Mistral 모델 다운로드, 2분 내 로컬 실행. 개발자를 위한 REST ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "mac-mini-m5-local-ai-server-overview": {
    "en": {
      "title": "Mac Mini M5 as Local AI Server 2026: Always-On LLM, Whisper, RAG, Voice Assistant",
      "subtitle": "Run always-on local AI server on Mac Mini M5. 25–55W power, $26–39/year electricity. Ollama LLM, Whi",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Mac Mini M5 als lokaler KI-Server 2026: Always-On LLM, Whisper, RAG, Sprachassistent",
      "subtitle": "Lokaler KI-Server auf Mac Mini M5. 25–55 W Stromverbrauch, ca. 53 €/Jahr. Ollama LLM, Whisper STT, R",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Mac Mini M5 comme serveur IA local 2026 : LLM, Whisper, RAG, assistant vocal 24/7",
      "subtitle": "Serveur IA local sur Mac Mini M5. 25–55 W, env. 44 €/an. LLM Ollama, Whisper STT, RAG, assistant voc",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Mac Mini M5をローカルAIサーバーとして活用 2026：LLM・Whisper・RAG・音声アシスタント常時稼働",
      "subtitle": "Mac Mini M5でローカルAIサーバーを構築。25～55W、年間電気代5,400円程度。Ollama LLM、Whisper STT、RAGパイプライン、音声アシスタント常時稼働。完全セットアッ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Mac Mini M5作为本地AI服务器 2026：全天候LLM、Whisper、RAG与语音助手",
      "subtitle": "Mac Mini M5作为本地AI服务器配置。25～55W功耗，年电费约350元。Ollama LLM、Whisper STT、RAG管道、语音助手全天候运行。完整配置指南、实用场景、5年总成本分析。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mac Mini M5 como servidor de IA local 2026: LLM, Whisper, RAG y asistente de voz 24/7",
      "subtitle": "Un servidor de IA siempre activo en Mac Mini M5: 25–55 W, $26–39/año de luz. Ollama, Whisper STT, RA",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Mac Mini M5 como Servidor de IA Local 2026: LLM, Whisper, RAG e Assistente de Voz 24/7",
      "subtitle": "Um servidor de IA sempre ativo no Mac Mini M5: 25–55 W, $26–39/ano de energia. Ollama, Whisper STT, ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Mac Mini M5⁩ كخادم ذكاء اصطناعي محلي ⁨2026⁩: ⁨LLM⁩ و⁨Whisper⁩ و⁨RAG⁩ ومساعد صوتي ⁨24/7⁩",
      "subtitle": "⁨Mac Mini M5 Pro 64 GB⁩: خادم ذكاء دائم التشغيل، ⁨25⁩–⁨55⁩ واط، ⁨26⁩–⁨39⁩ دولارًا سنويًا. ⁨Ollama⁩ و",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Mac Mini M5를 로컬 AI 서버로 활용하기 2026: 상시 구동 LLM, Whisper, RAG, 음성 어시스턴트",
      "subtitle": "Mac Mini M5에서 상시 구동 로컬 AI 서버를 실행하세요. 소비 전력 25–55W, 연간 전기 요금 $26–39. Ollama LLM, Whisper STT, RAG, 음성",
      "footer": "PromptQuorum 가이드"
    }
  },
  "xinference-llama-qwen-chatglm-mistral-overview": {
    "en": {
      "title": "Xinference: Run Llama 3, Qwen, ChatGLM & Mistral Locally 2026",
      "subtitle": "Xinference supports Llama 3, Qwen 3, ChatGLM4, and Mistral out of the box. pip install, xi launch, d",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Xinference: Llama 3, Qwen, ChatGLM & Mistral lokal ausführen 2026",
      "subtitle": "Xinference unterstützt Llama 3, Qwen 3, ChatGLM4 und Mistral nativ. Einrichten mit pip, Modell per x",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Xinference : exécuter Llama 3, Qwen, ChatGLM & Mistral localement 2026",
      "subtitle": "Xinference supporte Llama 3, Qwen 3, ChatGLM4 et Mistral nativement. pip install, xi launch — API co",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Xinference：Llama 3・Qwen・ChatGLM・Mistralをローカルで実行する2026年版ガイド",
      "subtitle": "XinferenceはLlama 3、Qwen 3、ChatGLM4、Mistralをネイティブサポート。pip installで導入、xinference-localで起動、xi launchで任意",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Xinference：本地运行Llama 3、Qwen、ChatGLM与Mistral — 2026年完整指南",
      "subtitle": "Xinference是原生支持Llama 3、Qwen 3、ChatGLM4和Mistral的开源本地推理框架。单条pip install命令安装，xinference-local启动服务器，xi l",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Xinference: ejecutar Llama 3, Qwen, ChatGLM y Mistral localmente 2026",
      "subtitle": "Servidor LLM local con 200+ modelos: Llama 3, Qwen 3, ChatGLM4 y Mistral. pip install + xi launch — ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Xinference: executar Llama 3, Qwen, ChatGLM e Mistral localmente 2026",
      "subtitle": "Xinference suporta Llama 3, Qwen 3, ChatGLM4 e Mistral nativamente. pip install, xi launch — API com",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Xinference⁩: تشغيل ⁨Llama 3⁩ و⁨Qwen⁩ و⁨ChatGLM⁩ و⁨Mistral⁩ محليًا ⁨2026⁩",
      "subtitle": "يدعم ⁨Xinference 200⁩+ نموذج منها ⁨Llama 3⁩ و⁨Qwen 3⁩ و⁨ChatGLM4⁩ و⁨Mistral⁩ — ⁨pip install⁩ ثم ⁨xin",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Xinference: Llama 3, Qwen, ChatGLM & Mistral 로컬 실행 가이드 2026",
      "subtitle": "Xinference는 Llama 3, Qwen 3, ChatGLM4, Mistral을 기본 지원합니다. pip install 후 xi launch 한 번으로 localhost:99",
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

