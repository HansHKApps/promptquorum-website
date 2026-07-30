#!/usr/bin/env node
const BASE = 'http://localhost:3063';
const SPECS = {
  "local-llm-pc-build-1000-overview": {
    "en": {
      "title": "Local LLM PC Build Under $1,000 (2026): Full Parts List and Performance",
      "subtitle": "$1,000 local LLM PC build: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. Runs 7B at 55-65 tok/s, 14B ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokaler LLM-PC-Build für unter 1.000 € (2026): Vollständige Teileliste und Leistung",
      "subtitle": "Lokaler LLM-PC-Build für unter 1.000 €: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. Läuft mit 7B be",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Configuration PC pour LLM local à moins de $1,000 (2026) : liste de pièces complète et performances",
      "subtitle": "Configuration PC LLM local à $1,000 : RTX 5060 Ti 16 Go + Ryzen 5 7600 + 32 Go DDR5. 7B à 55-65 tok/",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "$1,000以下のローカルLLM PCビルド（2026年）：完全パーツリストと性能",
      "subtitle": "$1,000のローカルLLM PCビルド：RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5。7Bを55〜65 tok/s、14Bを28〜35 tok/s、32Bを",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年$1,000以下本地LLM PC构建：完整配件清单与性能表现",
      "subtitle": "$1,000本地LLM PC构建：RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5。7B达55-65 tok/s，14B达28-35 tok/s，32B达12-1",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Build de PC para LLM Local por Menos de $1,000 (2026): Lista de Componentes Completa y Rendimiento",
      "subtitle": "Build de PC para LLM local por $1,000: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. Ejecuta 7B a 55-",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Build de PC para LLM Local Por Menos de $1.000 (2026): Lista Completa de Peças e Desempenho",
      "subtitle": "Build de PC para LLM local por $1.000: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. Executa 7B a 55-",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تجميع كمبيوتر لنماذج LLM محلية بأقل من 1,000 دولار (2026): قائمة القطع الكاملة والأداء",
      "subtitle": "تجميع كمبيوتر LLM محلي بـ 1,000 دولار: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. يشغّل 7B بسرعة 5",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "$1,000 미만 로컬 LLM PC 빌드(2026): 전체 부품 목록과 성능",
      "subtitle": "$1,000 로컬 LLM PC 빌드: RTX 5060 Ti 16GB + Ryzen 5 7600 + 32GB DDR5. 7B는 초당 55~65토큰, 14B는 초당 28~35토큰, 3",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-pc-build-2000-overview": {
    "en": {
      "title": "Local LLM PC Build for $2,000 (2026): Dual-GPU 32GB VRAM Parts List",
      "subtitle": "$2,000 local LLM PC build: dual RTX 5060 Ti 16GB (32GB VRAM) + Ryzen 7 9700X + 64GB DDR5. Runs 70B Q",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokaler LLM-PC-Build für 2.000 € (2026): Dual-GPU-Teileliste mit 32GB VRAM",
      "subtitle": "Lokaler LLM-PC-Build für 2.000 €: zwei RTX 5060 Ti 16GB (32GB VRAM) + Ryzen 7 9700X + 64GB DDR5. Läu",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Configuration PC pour LLM local à $2,000 (2026) : liste de pièces double GPU 32 Go VRAM",
      "subtitle": "Configuration PC LLM local à $2,000 : double RTX 5060 Ti 16 Go (32 Go VRAM) + Ryzen 7 9700X + 64 Go ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "$2,000のローカルLLM PCビルド（2026年）：デュアルGPU 32GB VRAMパーツリスト",
      "subtitle": "$2,000のローカルLLM PCビルド：デュアルRTX 5060 Ti 16GB（32GB VRAM）+ Ryzen 7 9700X + 64GB DDR5。テンソル分割で70B Q4を12〜18 ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年$2,000本地LLM PC构建：双GPU 32GB显存配件清单",
      "subtitle": "$2,000本地LLM PC构建：双RTX 5060 Ti 16GB（32GB显存）+ Ryzen 7 9700X + 64GB DDR5。通过tensor-split以12-18 tok/s运行70",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Build de PC para LLM Local por $2,000 (2026): Lista de Componentes Dual-GPU con 32GB de VRAM",
      "subtitle": "Build de PC para LLM local por $2,000: dual RTX 5060 Ti 16GB (32GB VRAM) + Ryzen 7 9700X + 64GB DDR5",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Build de PC para LLM Local por $2.000 (2026): Lista de Peças Dual-GPU com 32GB de VRAM",
      "subtitle": "Build de PC para LLM local de $2.000: 2x RTX 5060 Ti 16GB (32GB VRAM) + Ryzen 7 9700X + 64GB DDR5. E",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تجميع كمبيوتر لنماذج LLM محلية بميزانية 2,000 دولار (2026): قائمة قطع بثنائي GPU وذاكرة VRAM 32GB",
      "subtitle": "تجميع كمبيوتر LLM محلي بـ 2,000 دولار: بطاقتا RTX 5060 Ti 16GB (32GB VRAM) + Ryzen 7 9700X + 64GB DD",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "$2,000 로컬 LLM PC 빌드(2026): 듀얼 GPU 32GB VRAM 부품 목록",
      "subtitle": "$2,000 로컬 LLM PC 빌드: 듀얼 RTX 5060 Ti 16GB(32GB VRAM) + Ryzen 7 9700X + 64GB DDR5. 텐서 분할로 70B Q4를 초당 1",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-workstation-build-overview": {
    "en": {
      "title": "Build a Local LLM PC: Best Workstation Setup (GPU, VRAM, 7B–70B Models)",
      "subtitle": "Build a powerful local LLM workstation with the right GPU, VRAM, and RAM. Exact PC setups to run 7B–",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Local LLM PC bauen: Beste Workstation (GPU, VRAM, 7B–70B Modelle)",
      "subtitle": "Baue deine Local LLM Workstation mit der richtigen GPU, VRAM und RAM. Konkrete PC-Builds für 7B–70B ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Construire un PC LLM local : meilleure workstation (GPU, VRAM, modèles 7B–70B)",
      "subtitle": "Créez une workstation LLM locale avec le bon GPU, VRAM et RAM. Configurations précises pour exécuter",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM用PC構築：最適ワークステーション（GPU・VRAM・7B〜70B対応）",
      "subtitle": "ローカルLLMを高速に動かすPC構成を解説。GPU・VRAM・RAMの最適な組み合わせで、7B〜70BモデルをOllamaやLM Studioで実行できます。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM电脑配置指南：最佳工作站方案（GPU、VRAM、7B–70B模型）",
      "subtitle": "构建本地LLM工作站，选择合适的GPU、VRAM和内存。查看可运行7B–70B模型的真实配置，支持Ollama和LM Studio。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Construye un PC para LLM Local: Mejor Estación de Trabajo (GPU, VRAM, Modelos 7B–70B)",
      "subtitle": "Construye una estación de trabajo LLM local con la GPU, VRAM y RAM adecuadas. Configuraciones exacta",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Monte um PC para LLM Local: Melhor Estação de Trabalho (GPU, VRAM, Modelos 7B–70B)",
      "subtitle": "Monte uma estação de trabalho LLM local com GPU, VRAM e RAM adequadas. Configurações exatas para exe",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "ابنِ حاسوبًا لـ⁨LLM⁩ المحلي: أفضل محطة عمل (⁨GPU⁩، ⁨VRAM⁩، نماذج ⁨7B⁩–⁨70B⁩)",
      "subtitle": "محطة بـ ⁨4⁩,⁨000⁩–⁨6⁩,⁨000⁩$: بطاقتا ⁨RTX 4090⁩ (⁨48 GB VRAM⁩)، ⁨Threadripper 7970X⁩ (⁨32⁩ نواة)، ⁨1",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM PC 제작: 최고의 워크스테이션 설정 (GPU, VRAM, 7B~70B 모델)",
      "subtitle": "올바른 GPU, VRAM, RAM을 갖춘 강력한 로컬 LLM 워크스테이션을 제작하세요. Ollama와 LM Studio로 7B~70B 모델을 빠르게 실행하는 정확한 PC 구성.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-setup-for-teams-overview": {
    "en": {
      "title": "Local LLM Server Setup for Business Teams: Multi-User Access & Cost Control",
      "subtitle": "Team local LLM server setup with vLLM, nginx, access control, and usage tracking. Multi-user setup g",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokaler LLM-Server für Business-Teams: Multi-User-Zugriff & Kostenscaling",
      "subtitle": "Team-lokaler LLM-Server mit vLLM, nginx, Zugriffskontrolle und Nutzungsverfolgung. Multi-User-Setup,",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Configuration serveur LLM local pour équipes professionnelles: Accès multi-utilisateurs et contrôle des coûts",
      "subtitle": "Serveur LLM local pour équipes avec vLLM, nginx, contrôle d'accès et suivi d'utilisation. Configurat",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "チームビジネス向けローカルLLMサーバー構築: マルチユーザーアクセスとコスト管理",
      "subtitle": "vLLM、nginx、アクセス制御、利用状況追跡を使用したチームローカルLLMサーバー。マルチユーザーセットアップ、コスト比較、ロールベース権限。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "团队本地LLM服务器构建: 多用户访问与成本管理",
      "subtitle": "使用vLLM、nginx、访问控制和使用跟踪的团队本地LLM服务器。多用户设置、成本比较和基于角色的权限。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Servidor LLM local para equipos empresariales: acceso multiusuario y control de costos",
      "subtitle": "Servidor LLM local para equipos con vLLM, nginx, control de acceso y seguimiento de uso. Configuraci",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Servidor LLM local para equipes empresariais: acesso multiusuário e controle de custos",
      "subtitle": "Servidor LLM local para equipes com vLLM, nginx, controle de acesso e rastreamento de uso. Configura",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "خادم ⁨LLM⁩ محلي للفرق المؤسسية: وصول متعدد المستخدمين والتحكم في التكاليف",
      "subtitle": "خادم مشترك بتكلفة ⁨50⁩$/شهر مقابل ⁨1⁩,⁨000⁩$+ على السحابة. يغطي إعداد ⁨vLLM⁩ و⁨nginx⁩، والأذونات حسب",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "비즈니스 팀을 위한 로컬 LLM 서버 설정: 다중 사용자 접근 및 비용 관리",
      "subtitle": "vLLM, nginx, 접근 제어 및 사용량 추적을 갖춘 팀용 로컬 LLM 서버 설정. 다중 사용자 설정 가이드, 비용 비교 및 역할 기반 권한.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "fine-tuning-local-llms-lora-overview": {
    "en": {
      "title": "LoRA Fine-Tuning for Local LLMs 2026: Unsloth Tutorial on 8 GB VRAM with Llama 3.3",
      "subtitle": "Fine-tune Llama 3.3 8B on 8 GB VRAM in 1–2 hours using Unsloth (up to 2× faster than standard traini",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "LoRA Fine-Tuning für lokale LLMs 2026: Unsloth-Anleitung mit Llama 3.3 auf 8 GB VRAM",
      "subtitle": "Lokale LLMs mit LoRA und QLoRA feinabstimmen 2026: Anleitung mit Hardware-Anforderungen, Datensatzvo",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Fine-Tuning LoRA pour LLMs locaux 2026 : Tutoriel Unsloth sur 8 Go de VRAM avec Llama 3.3",
      "subtitle": "Fine-tuner Llama 3.3 8B avec LoRA sur 8 Go de VRAM en 1–2 heures avec Unsloth (jusqu'à 2× plus rapid",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "LoRA ファインチューニング入門 2026年 : Unsloth で Llama 3.3 を 8GB VRAM で実行",
      "subtitle": "Unsloth（最大2倍高速）を使用して、Llama 3.3 8B を 8GB VRAM で 1～2時間でファインチューニングします。500例のみ必要。完全なコード、ハイパーパラメータ、および LoR",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "LoRA 微调本地 LLM 2026：Unsloth 8GB VRAM Llama 3.3 教程",
      "subtitle": "使用 Unsloth（最快快 2 倍）在 8GB VRAM 上 1-2 小时内微调 Llama 3.3 8B。只需 500 个示例。完整代码、超参数和 LoRA vs RAG 决策矩阵。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Fine-Tuning LoRA para LLMs Locales 2026: Tutorial de Unsloth en 8 GB de VRAM con Llama 3.3",
      "subtitle": "Haz fine-tuning de Llama 3.3 8B con LoRA en 8 GB de VRAM en 1–2 horas con Unsloth (hasta 2× más rápi",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Fine-Tuning LoRA para LLMs Locais 2026: Tutorial do Unsloth em 8 GB de VRAM com Llama 3.3",
      "subtitle": "Faça fine-tuning do Llama 3.3 8B com LoRA em 8 GB de VRAM em 1–2 horas com Unsloth (até 2× mais rápi",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "الضبط الدقيق بـ ⁨LoRA⁩ لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: درس ⁨Unsloth⁩ على ⁨8 GB⁩ من ⁨VRAM⁩ مع ⁨Llama 3.3⁩",
      "subtitle": "اضبط ⁨Llama 3.3 8B⁩ على ⁨8 GB VRAM⁩ خلال ⁨1⁩–⁨2⁩ ساعة باستخدام ⁨Unsloth⁩ عبر ⁨QLoRA⁩. يكفي ⁨500⁩ مثا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "LoRA 파인튜닝 로컬 LLM 2026: Llama 3.3으로 8 GB VRAM에서 Unsloth 튜토리얼",
      "subtitle": "Unsloth(최대 2배 빠른 QLoRA)를 사용하여 1~2시간 만에 8 GB VRAM으로 Llama 3.3 8B를 파인튜닝하십시오. 최소 500개 훈련 예제. 전체 코드 + Lo",
      "footer": "PromptQuorum 가이드"
    }
  },
  "open-webui-vs-sillytavern-overview": {
    "en": {
      "title": "Open WebUI vs SillyTavern: Best Chat UI for Local LLMs",
      "subtitle": "Open WebUI (professional chat, multi-user, Docker) vs SillyTavern (character roleplay, lorebooks, gr",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Open WebUI vs SillyTavern: Beste Chat-UI für lokale LLMs",
      "subtitle": "Open WebUI vs. SillyTavern 2026: Welches lokale LLM-Frontend? Funktionen, Bedienung und Anwendungsfä",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Open WebUI vs SillyTavern : Meilleure Interface Chat pour LLM Locaux",
      "subtitle": "Open WebUI (chat pro, multi-utilisateur, Docker) vs SillyTavern (roleplay, lorebooks, chat de groupe",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Open WebUI vs SillyTavern：ローカルLLM最良のチャットUI",
      "subtitle": "Open WebUI（プロ向けチャット、マルチユーザー、Docker）vs SillyTavern（ロールプレイ、Lorebooks、グループチャット）。Ollama・vLLM・llama.cpp対応",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Open WebUI vs SillyTavern：本地LLM最佳聊天界面",
      "subtitle": "Open WebUI（专业聊天、多用户、Docker）vs SillyTavern（角色扮演、世界观书、群组聊天）本地LLM前端对比。兼容Ollama、vLLM、llama.cpp。2026年4月指南",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Open WebUI vs SillyTavern: Mejor Interfaz de Chat para LLMs Locales",
      "subtitle": "Open WebUI (chat profesional multiusuario, Docker) vs SillyTavern (roleplay, lorebooks, chat grupal)",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Open WebUI vs SillyTavern: Melhor Interface de Chat para LLMs Locais",
      "subtitle": "Open WebUI (chat profissional multiusuário, Docker) vs SillyTavern (roleplay, lorebooks, chat em gru",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Open WebUI⁩ مقابل ⁨SillyTavern⁩: أفضل واجهة محادثة لنماذج ⁨LLM⁩ المحلية",
      "subtitle": "⁨Open WebUI⁩ يدعم تعدد المستخدمين عبر ⁨Docker⁩ ومتوافق مع ⁨OpenAI. SillyTavern⁩ متخصص في ⁨roleplay⁩ ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Open WebUI vs SillyTavern: 로컬 LLM을 위한 최고의 채팅 UI",
      "subtitle": "Open WebUI(전문 채팅, 다중 사용자, Docker) vs SillyTavern(캐릭터 롤플레이, 로어북, 그룹 채팅) — 로컬 LLM 비교. 두 도구 모두 Ollama, ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "on-prem-air-gapped-local-llm-overview": {
    "en": {
      "title": "On-Prem Air-Gapped Local LLMs: Isolated Deployment for Classified Environments",
      "subtitle": "Air-gapped local LLM deployment: complete isolation architecture, network security, updates manageme",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "On-Prem Air-Gapped Local LLMs: Isolierte Bereitstellung für klassifizierte Umgebungen",
      "subtitle": "Air-Gapped Local LLM Bereitstellung: komplette Isolierungsarchitektur, Netzwerksicherheit, Update-Ve",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "On-Prem Air-Gapped Local LLMs: Déploiement isolé pour environnements classifiés",
      "subtitle": "Déploiement air-gapped d'LLM local: architecture d'isolement complet, sécurité réseau, gestion des m",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "オンプレミス・エアギャップローカルLLM: 機密環境の隔離デプロイ",
      "subtitle": "エアギャップローカルLLMデプロイメント: 完全隔離アーキテクチャ、ネットワークセキュリティ、更新管理、機密データ処理。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM气隙部署: 隔离架构与分类数据保护",
      "subtitle": "了解如何在完全隔离的网络环境中部署本地LLM: 包括网络隔离架构设计、模型离线管理、安全更新流程和分类信息保护。适用于政府、军事、金融机构。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "On-Prem Air-Gapped Local LLMs: Despliegue Aislado para Entornos Clasificados",
      "subtitle": "Despliegue de LLM local con air-gap: arquitectura de aislamiento completo, seguridad de red, gestión",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais On-Prem Air-Gapped: Implantação Isolada para Ambientes Classificados",
      "subtitle": "Implantação de LLM local com air-gap: arquitetura de isolamento completo, segurança de rede, gestão ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية المعزولة في الموقع (⁨Air-Gapped⁩): نشر معزول للبيئات المصنّفة",
      "subtitle": "النشر المعزول يقطع كل اتصال خارجي للبيانات المصنّفة. بنية عزل كاملة، أمان الشبكة وإدارة التحديثات بل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "온프레미스 에어갭 로컬 LLM: 기밀 환경을 위한 완전 격리 배포",
      "subtitle": "에어갭 로컬 LLM 배포: 완전 격리 아키텍처, 네트워크 보안, 업데이트 관리, 기밀 데이터 처리.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "run-70b-models-24gb-vram-overview": {
    "en": {
      "title": "How to Run 70B Models on 24GB VRAM: Advanced Techniques",
      "subtitle": "Run 70B models on 24GB VRAM 2026: quantization (Q4_K_M), offloading, layer splitting. Techniques wit",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "70B-Modelle auf 24GB VRAM ausführen: Fortgeschrittene Techniken",
      "subtitle": "70B-Modelle auf 24GB VRAM 2026: Quantisierung (Q4_K_M), Offloading, Layer-Splitting. Techniken mit T",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Exécuter des modèles 70B sur 24 Go de VRAM : Techniques avancées",
      "subtitle": "Modèles 70B sur 24 Go de VRAM 2026 : quantification (Q4_K_M), déchargement, division de couches. Tec",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "24GB VRAMで70Bモデルを実行: 高度なテクニック",
      "subtitle": "24GB VRAMで70Bモデル 2026: 量子化（Q4_K_M）、オフロード、レイヤー分割。トレードオフとパフォーマンスデータを含むテクニック。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "在24GB VRAM上运行70B模型：高级技术",
      "subtitle": "24GB VRAM上的70B模型2026：量化（Q4_K_M）、卸载、层分割。含权衡和性能数据的技术。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Cómo ejecutar modelos 70B en 24 GB de VRAM: técnicas avanzadas",
      "subtitle": "Ejecutar modelos 70B en 24 GB de VRAM 2026: cuantización (Q4_K_M), offloading, división de capas. Té",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Como executar modelos 70B em 24 GB de VRAM: técnicas avançadas",
      "subtitle": "Executar modelos 70B em 24 GB de VRAM 2026: quantização (Q4_K_M), offloading, divisão de camadas. Té",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "كيفية تشغيل نماذج ⁨70B⁩ على ⁨24 GB⁩ من ⁨VRAM⁩: تقنيات متقدمة",
      "subtitle": "⁨Llama 70B⁩ يتسع في ⁨24 GB VRAM⁩ عند ⁨Q2⁩ بحجم ⁨17.5 GB⁩ وسرعة ⁨5⁩–⁨8 token⁩/ث. ⁨Q4⁩ مع تفريغ ⁨11 GB",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "24GB VRAM에서 70B 모델 실행하기: 고급 기법",
      "subtitle": "24GB VRAM에서 70B 모델 실행 2026: 양자화(Q4_K_M), 오프로딩, 레이어 분할. 트레이드오프와 성능 데이터를 포함한 기법 안내.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "double-local-llm-speed-overview": {
    "en": {
      "title": "How to Double Local LLM Speed: Optimization Techniques",
      "subtitle": "Speed up local LLM inference by 2-3× in 2026: GPU tuning, batch size, quantization. Production optim",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLMs beschleunigen: Optimierungstechniken für 2026",
      "subtitle": "Lokale LLM-Inferenz 2–3× schneller: GPU-Tuning, Batch-Größe, Quantisierung. Produktionstechniken mit",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Doubler la Vitesse des LLM Locaux : Techniques d'Optimisation 2026",
      "subtitle": "LLM locaux 2–3× plus rapides en 2026 : réglage GPU, taille de lot, quantification. Techniques de pro",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMを2-3倍高速化：最適化テクニック2026",
      "subtitle": "ローカルLLM推論を2–3×高速化：GPUチューニング、バッチサイズ、量子化。2026年最新ベンチマーク付き本番最適化テクニック。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "如何将本地LLM速度翻倍：优化技术指南",
      "subtitle": "2026年本地LLM推理提速2-3倍：GPU调优、批处理大小、量化。包含基准测试的生产优化技术。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Cómo duplicar la velocidad de LLMs locales: Técnicas de optimización",
      "subtitle": "Acelera la inferencia de LLMs locales 2-3× en 2026: ajuste GPU, batch size, cuantización. Técnicas d",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Como duplicar a velocidade de LLMs locais: Técnicas de otimização",
      "subtitle": "Acelere a inferência de LLMs locais 2–3× em 2026: ajuste de GPU, batch size, quantização. Técnicas d",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "كيف تضاعف سرعة نماذج ⁨LLM⁩ المحلية: تقنيات التحسين",
      "subtitle": "الجمع بين تعطيل التسجيل وتحسين التكميم وضبط ⁨GPU⁩ يرفع سرعة الاستدلال ⁨2⁩–⁨3⁩× دون فقدان جودة. تقنيا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 속도를 두 배로 높이는 방법: 최적화 기법",
      "subtitle": "2026년 로컬 LLM 추론 속도를 2~3배 향상시키는 방법: GPU 튜닝, 배치 크기, 양자화. 벤치마크 포함 프로덕션 최적화 기법.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-developer-stack-overview": {
    "en": {
      "title": "Best Local LLM Stack for Developers (April 2026)",
      "subtitle": "Build a local LLM dev environment in 3 tiers: (1) Ollama CLI in 5 min, (2) vLLM + FastAPI server in ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Best Local LLM Stack für Entwickler (April 2026)",
      "subtitle": "Lokaler LLM-Entwickler-Stack 2026: Ollama, Continue, Aider und VS Code für KI-Entwicklung ohne Cloud",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleur Stack LLM Local pour Développeurs (avril 2026)",
      "subtitle": "Environnement LLM local en 3 niveaux : (1) Ollama CLI en 5 min, (2) vLLM + FastAPI en 30 min, (3) pr",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "開発者向けベストローカルLLMスタック（2026年4月）",
      "subtitle": "ローカルLLM開発環境を3段階で構築：(1) Ollama CLI 5分、(2) vLLM + FastAPI 30分、(3) 本番マルチGPU（nginx + Prometheus）。VS Code",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "开发者最佳本地LLM技术栈（2026年4月）",
      "subtitle": "3层搭建本地LLM开发环境：(1) Ollama CLI 5分钟、(2) vLLM + FastAPI 30分钟、(3) 多GPU生产环境（nginx + Prometheus）。VS Code和Cu",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejor Stack Local de LLM para Desarrolladores (abril 2026)",
      "subtitle": "Entorno de desarrollo local con LLM en 3 niveles: Ollama CLI (5 min), vLLM + FastAPI (30 min) y prod",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor Stack de LLM Local para Desenvolvedores (abril 2026)",
      "subtitle": "Ambiente de desenvolvimento local com LLM em 3 níveis: Ollama CLI (5 min), vLLM + FastAPI (30 min) e",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل حزمة ⁨LLM⁩ محلية للمطورين (أبريل ⁨2026⁩)",
      "subtitle": "⁨3⁩ مستويات: ⁨Ollama CLI⁩ جاهز في ⁨5⁩ دقائق، ⁨vLLM + FastAPI⁩ في ⁨30⁩ دقيقة، ونشر متعدد ⁨GPU⁩ للإنتا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "개발자를 위한 최고의 로컬 LLM 스택 (2026년 4월)",
      "subtitle": "3단계로 로컬 LLM 개발 환경을 구축하십시오: (1) 5분 만에 Ollama CLI, (2) 30분 만에 vLLM + FastAPI 서버, (3) nginx와 Prometheus",
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

