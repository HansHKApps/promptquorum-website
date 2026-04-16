'use client'

import Link from 'next/link'
import { llmThemes, type LLMTheme } from '@/lib/local-llms/themes'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'Local LLMs: The Complete Guide to Running AI Models on Your Own Hardware (2026)',
  de: 'Der vollständige Leitfaden zum lokalen Betrieb von KI-Modellen im Jahr 2026.',
  fr: 'Le guide complet pour exécuter des modèles IA localement en 2026.',
  ja: '2026年にAIモデルをローカルで実行するための完全ガイド。',
  zh: '2026年本地运行AI模型的完整指南。',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: '8 GB RAM runs a 7B model locally — no API key, no monthly cost, full privacy. 40 GB VRAM handles 70B models (Llama 4, DeepSeek V3) at production quality. Ollama and LM Studio install in under 10 minutes on macOS, Windows, and Linux. Open-source models including Llama 4, Qwen3.5, DeepSeek, and Mistral match GPT-4 on most coding and reasoning benchmarks. These 88 guides cover hardware selection, quantization, RAG pipelines, fine-tuning, and enterprise deployment — with exact commands, VRAM numbers, and benchmark data.',
  de: 'Lokale LLMs bieten vollständige Privatsphäre, keine API-Kosten und Offline-Fähigkeit. Diese Leitfäden decken alles ab — von der ersten Installation bis zum Fine-Tuning von 70B-Modellen, Hardware-Auswahl und Enterprise-Deployment.',
  fr: 'Les LLMs locaux offrent une confidentialité totale, zéro coût API et une capacité hors ligne. Ces guides couvrent tout, de la première installation au fine-tuning de modèles 70B, la sélection matérielle et le déploiement entreprise.',
  ja: 'ローカルLLMは完全なプライバシー、APIコストゼロ、オフライン機能を提供します。これらのガイドは、最初のインストールから70BモデルのファインチューニングW、ハードウェア選択、エンタープライズデプロイまでをカバーします。',
  zh: '本地LLM提供完整隐私、零API成本和离线能力。这些指南涵盖从首次安装到70B模型微调、硬件选择和企业部署的一切内容。',
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum connects to your local LLM (Ollama, LM Studio, Jan AI) and dispatches your prompt to 25+ cloud models simultaneously — compare local vs cloud results in one view.',
  de: 'PromptQuorum verbindet sich mit Ihrem lokalen LLM (Ollama, LM Studio, Jan AI) und sendet Ihren Prompt gleichzeitig an 25+ Cloud-Modelle — lokale vs. Cloud-Ergebnisse in einer Ansicht.',
  fr: 'PromptQuorum se connecte à votre LLM local (Ollama, LM Studio, Jan AI) et envoie votre prompt simultanément à plus de 25 modèles cloud — comparez les résultats locaux vs cloud en une vue.',
  ja: 'PromptQuorumはあなたのローカルLLM（Ollama、LM Studio、Jan AI）に接続し、プロンプトを25以上のクラウドモデルに同時に送信します。ローカルとクラウドの結果を一画面で比較できます。',
  zh: 'PromptQuorum连接到您的本地LLM（Ollama、LM Studio、Jan AI），并同时将提示词发送给25+个云模型——在一个视图中比较本地与云端结果。',
}

const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
}

const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页',
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Getting Started: How Do You Run Your First Local LLM?',
    de: 'Erste Schritte: Wie starten Sie Ihr erstes lokales LLM?',
    fr: 'Premiers pas : Comment exécuter votre premier LLM local ?',
    ja: 'はじめに：最初のローカルLLMをどう実行するか？',
    zh: '入门：如何运行您的第一个本地LLM？',
  },
  'best-models': {
    en: 'Models by Use Case: Which Local LLM Should You Actually Use?',
    de: 'Modelle nach Anwendungsfall: Welches lokale LLM sollten Sie wirklich verwenden?',
    fr: 'Modèles par cas d\'usage : Quel LLM local devriez-vous vraiment utiliser ?',
    ja: 'ユースケース別モデル：実際にどのローカルLLMを使うべきか？',
    zh: '按用例分类的模型：您实际上应该使用哪个本地LLM？',
  },
  'tools-interfaces': {
    en: 'Tools & Interfaces: Which Software Gets You Running Fastest?',
    de: 'Tools & Interfaces: Welche Software bringt Sie am schnellsten zum Start?',
    fr: 'Outils et interfaces : Quel logiciel vous fait démarrer le plus vite ?',
    ja: 'ツールとインターフェース：どのソフトウェアが最も速く起動できるか？',
    zh: '工具与界面：哪款软件让您启动最快？',
  },
  'hardware-performance': {
    en: 'Hardware & Performance: What Do You Actually Need to Run Local LLMs?',
    de: 'Hardware & Leistung: Was brauchen Sie wirklich für lokale LLMs?',
    fr: 'Matériel et performances : De quoi avez-vous vraiment besoin pour les LLMs locaux ?',
    ja: 'ハードウェアとパフォーマンス：ローカルLLMに本当に必要なものは？',
    zh: '硬件与性能：运行本地LLM您真正需要什么？',
  },
  'advanced-techniques': {
    en: 'Advanced Techniques: How Do You Go Beyond Basic Chat?',
    de: 'Fortgeschrittene Techniken: Wie gehen Sie über einfachen Chat hinaus?',
    fr: 'Techniques avancées : Comment aller au-delà du chat de base ?',
    ja: '高度なテクニック：基本的なチャット以上のことをどうするか？',
    zh: '高级技术：如何超越基本聊天？',
  },
  enterprise: {
    en: 'Enterprise: How Do Organizations Deploy Local LLMs at Scale?',
    de: 'Enterprise: Wie setzen Organisationen lokale LLMs im großen Maßstab ein?',
    fr: 'Entreprise : Comment les organisations déploient-elles des LLMs locaux à grande échelle ?',
    ja: 'エンタープライズ：組織はローカルLLMをどのようにスケールデプロイするか？',
    zh: '企业：组织如何大规模部署本地LLM？',
  },
  'gpu-buying-guides': {
    en: 'GPU Buying Guides: Which GPU Should You Buy for Local LLMs?',
    de: 'GPU-Kaufratgeber: Welche GPU sollten Sie für lokale LLMs kaufen?',
    fr: 'Guides d\'achat de GPU : Quelle GPU devriez-vous acheter pour les LLMs locaux ?',
    ja: 'GPU購入ガイド：ローカルLLM用にどのGPUを購入すべきか？',
    zh: 'GPU购买指南：您应该为本地LLM购买哪个GPU？',
  },
  'hardware-setups': {
    en: 'Hardware Setups: What Computer Do You Need for Local LLMs?',
    de: 'Hardware-Setups: Welchen Computer brauchen Sie für lokale LLMs?',
    fr: 'Configurations matérielles : Quel ordinateur avez-vous besoin pour les LLMs locaux ?',
    ja: 'ハードウェアセットアップ：ローカルLLM用にどのコンピュータが必要か？',
    zh: '硬件设置：为本地LLM您需要什么计算机？',
  },
  'privacy-business': {
    en: 'Privacy & Business: How Do You Secure Local LLMs for Organizations?',
    de: 'Datenschutz & Unternehmen: Wie sichern Sie lokale LLMs für Organisationen?',
    fr: 'Confidentialité & Entreprise : Comment sécuriser les LLMs locaux pour les organisations ?',
    ja: 'プライバシーとビジネス：組織向けにローカルLLMをどのように保護するか？',
    zh: '隐私与业务：您如何为组织保护本地LLM？',
  },
  'cost-comparisons': {
    en: 'Cost & Comparisons: Local vs Cloud vs Subscriptions—What\'s Cheaper?',
    de: 'Kosten & Vergleiche: Lokal vs Cloud vs Abos—Was ist günstiger?',
    fr: 'Coûts et comparaisons : Local vs Cloud vs Abonnements—Qu\'est-ce qui est moins cher ?',
    ja: 'コストと比較：ローカルvsクラウドvsサブスク—どれが安いか？',
    zh: '成本与比较：本地vs云vs订阅—哪个更便宜？',
  },
}

const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Zero-to-running in under 10 minutes. OS-specific installation guides, first-model walkthroughs, and a privacy-first setup checklist for beginners. Ollama installs with a single command on macOS, Windows, and Linux. For 8 GB RAM, start with Llama 3.2 3B (Q4, ~2 GB) using `ollama pull llama3.2:3b`.',
    de: 'Von null zu lauffähig in unter 10 Minuten. OS-spezifische Installationsleitfäden, erste Schritte mit Modellen und eine Datenschutz-erste Checkliste für Anfänger. Ollama installiert sich mit einem einzigen Befehl auf macOS, Windows und Linux. Bei 8 GB RAM beginnen Sie mit Llama 3.2 3B (Q4, ~2 GB) mit dem Befehl `ollama pull llama3.2:3b`.',
    fr: 'De zéro à prêt en moins de 10 minutes. Guides d\'installation spécifiques à l\'OS, démarrage avec les premiers modèles et liste de contrôle de configuration respectueuse de la vie privée. Ollama s\'installe en une seule commande sur macOS, Windows et Linux. Pour 8 GB de RAM, commencez avec Llama 3.2 3B (Q4, ~2 GB).',
    ja: 'ゼロから起動まで10分以下。OS固有のインストールガイド、最初のモデルチュートリアル、プライバシーファースト設定チェックリスト。OllamaはmacOS、Windows、Linuxで1つのコマンドでインストールできます。8 GB RAMの場合、Llama 3.2 3B（Q4、約2 GB）から始めてください。',
    zh: '从零开始到运行，只需10分钟以内。提供特定操作系统的安装指南、首次模型演练和隐私优先的设置检查清单。Ollama可在macOS、Windows和Linux上用一条命令安装。8 GB RAM时，从Llama 3.2 3B（Q4，约2 GB）开始。',
  },
  'best-models': {
    en: 'Model reviews, benchmark comparisons, use-case winners, and quantization guides for Llama 4, Qwen3.5, DeepSeek, Gemma 4, and 70B+ models. Qwen2.5-Coder leads coding benchmarks; Mistral 7B is fastest for RAM-constrained setups. Every review includes exact VRAM requirements and benchmark scores versus GPT-4o.',
    de: 'Modellbewertungen, Benchmark-Vergleiche, Use-Case-Gewinner und Quantisierungsleitfäden für Llama 4, Qwen3.5, DeepSeek, Gemma 4 und 70B+-Modelle. Qwen2.5-Coder führt Code-Benchmarks an; Mistral 7B ist am schnellsten für RAM-begrenzte Setups. Jede Bewertung enthält exakte VRAM-Anforderungen und Benchmark-Scores gegenüber GPT-4o.',
    fr: 'Critiques de modèles, comparaisons de références, gagnants par cas d\'usage et guides de quantification pour Llama 4, Qwen3.5, DeepSeek, Gemma 4 et modèles 70B+. Qwen2.5-Coder domine les benchmarks de code ; Mistral 7B est le plus rapide pour les configurations RAM limitées. Chaque examen inclut les exigences VRAM exactes et les scores de benchmark par rapport à GPT-4o.',
    ja: 'Llama 4、Qwen3.5、DeepSeek、Gemma 4、70B+モデルのモデルレビュー、ベンチマーク比較、ユースケース勝者、量子化ガイド。Qwen2.5-Coderはコーディングベンチマークをリード；Mistral 7BはRAM制約されたセットアップで最速。各レビューには正確なVRAM要件とGPT-4oに対するベンチマークスコアが含まれます。',
    zh: 'Llama 4、Qwen3.5、DeepSeek、Gemma 4和70B+模型的模型评论、基准比较、使用案例获奖者和量化指南。Qwen2.5-Coder在编码基准中领先；Mistral 7B在RAM受限的设置中速度最快。每篇评论都包含确切的VRAM要求和与GPT-4o相比的基准分数。',
  },
  'tools-interfaces': {
    en: 'Software showdowns, GUI comparisons, API setups, and front-end guides — Ollama, LM Studio, OpenWebUI, vLLM, llama.cpp, and more. Ollama exposes an OpenAI-compatible REST API at `localhost:11434` — drop-in replacement for cloud SDKs with no code changes. LM Studio adds a GUI and model browser for non-technical users.',
    de: 'Software-Vergleiche, GUI-Vergleiche, API-Setups und Front-End-Leitfäden — Ollama, LM Studio, OpenWebUI, vLLM, llama.cpp und mehr. Ollama stellt eine OpenAI-kompatible REST-API unter `localhost:11434` bereit — vollständig Ersatz für Cloud-SDKs ohne Code-Änderungen. LM Studio fügt eine GUI und Modellbrowser für nicht-technische Benutzer hinzu.',
    fr: 'Comparaisons de logiciels, comparaisons d\'interface graphique, configurations d\'API et guides frontaux — Ollama, LM Studio, OpenWebUI, vLLM, llama.cpp, et plus. Ollama expose une API REST compatible avec OpenAI à `localhost:11434` — remplacement prêt à l\'emploi des SDK cloud sans modification de code. LM Studio ajoute une interface graphique et un navigateur de modèles pour les utilisateurs non techniques.',
    ja: 'ソフトウェアショーダウン、GUIの比較、APIセットアップ、フロントエンドガイド — Ollama、LM Studio、OpenWebUI、vLLM、llama.cpp、その他。OllamaはOpenAI互換のREST APIを`localhost:11434`で公開 — コード変更なしのクラウドSDKの置き換え。LM Studioは非技術ユーザー向けのGUIとモデルブラウザを追加します。',
    zh: '软件对比、GUI比较、API设置和前端指南 — Ollama、LM Studio、OpenWebUI、vLLM、llama.cpp等。Ollama在`localhost:11434`上公开OpenAI兼容的REST API — 无需代码更改即可替代云SDK。LM Studio为非技术用户添加GUI和模型浏览器。',
  },
  'hardware-performance': {
    en: 'Real hardware recommendations, VRAM math, GPU benchmarks, quantization trade-offs, and optimization tricks for RTX 5090, 4090, Mac Silicon, and budget builds. RTX 4060 (8 GB VRAM, ~$300) runs 7B models at 30+ tokens/sec. Apple Silicon M2 handles 7B–13B natively via Metal with no discrete GPU required.',
    de: 'Echte Hardware-Empfehlungen, VRAM-Mathematik, GPU-Benchmarks, Quantisierungs-Trade-offs und Optimierungstricks für RTX 5090, 4090, Mac Silicon und Budget-Setups. RTX 4060 (8 GB VRAM, ~$300) führt 7B-Modelle mit 30+ Token/sec aus. Apple Silicon M2 verarbeitet 7B–13B nativ über Metal ohne dedizierte GPU.',
    fr: 'Recommandations matérielles réelles, mathématiques VRAM, benchmarks GPU, compromis de quantification et astuces d\'optimisation pour RTX 5090, 4090, Mac Silicon et configurations budget. RTX 4060 (8 GB VRAM, ~$300) exécute les modèles 7B à 30+ tokens/sec. Apple Silicon M2 gère 7B–13B nativement via Metal sans GPU discret requis.',
    ja: '実際のハードウェア推奨事項、VRAM数学、GPUベンチマーク、量子化トレードオフ、RTX 5090、4090、Mac Silicon、予算ビルドの最適化トリック。RTX 4060（8 GB VRAM、約$300）は7Bモデルを30+トークン/秒で実行します。Apple Silicon M2はMetal経由で7B–13Bをネイティブに処理し、ディスクリートGPUは不要です。',
    zh: '真实的硬件建议、VRAM数学、GPU基准、量化权衡以及RTX 5090、4090、Mac Silicon和预算构建的优化技巧。RTX 4060（8 GB VRAM，约$300）以30+个令牌/秒运行7B模型。Apple Silicon M2通过Metal本机处理7B–13B，无需独立GPU。',
  },
  'advanced-techniques': {
    en: 'Fine-tuning, RAG pipelines, quantization deep-dives, distillation, model merging, and prompt optimization for production use. LoRA reduces fine-tuning VRAM requirements from 24 GB to 8 GB. QLoRA cuts it further to 4 GB. Local RAG workflows keep sensitive data on-premises while maintaining search quality.',
    de: 'Fine-Tuning, RAG-Pipelines, Quantisierungs-Deep-Dives, Destillation, Modell-Merging und Prompt-Optimierung für die Produktionsnutzung. LoRA reduziert Fine-Tuning VRAM-Anforderungen von 24 GB auf 8 GB. QLoRA reduziert es weiter auf 4 GB. Lokale RAG-Workflows halten sensible Daten vor Ort, während die Suchqualität erhalten bleibt.',
    fr: 'Fine-tuning, pipelines RAG, plongées approfondies de quantification, distillation, fusion de modèles et optimisation de prompts pour utilisation en production. LoRA réduit les besoins en VRAM du fine-tuning de 24 GB à 8 GB. QLoRA le réduit davantage à 4 GB. Les workflows RAG locaux maintiennent les données sensibles sur site tout en maintenant la qualité de la recherche.',
    ja: 'ファインチューニング、RAGパイプライン、量子化の深掘り、蒸留、モデルマージング、本番環境用のプロンプト最適化。LoRAはファインチューニングVRAM要件を24 GBから8 GBに削減します。QLоRAはさらに4 GBに削減します。ローカルRAGワークフローは、検索品質を維持しながら機密データをオンプレミスに保ちます。',
    zh: '微调、RAG管道、量化深度探讨、蒸馏、模型合并以及生产用途的提示词优化。LoRA将微调VRAM要求从24 GB降至8 GB。QLoRA进一步将其降至4 GB。本地RAG工作流在保持搜索质量的同时将敏感数据保留在本地。',
  },
  'enterprise': {
    en: 'Multi-GPU setups, inference optimization, model serving frameworks (vLLM, TensorRT-LLM), monitoring and observability, cost audits, and regulatory compliance. Local LLMs eliminate cross-border data transfer, satisfy GDPR Article 28, and reduce licensing costs 40–80% versus SaaS.',
    de: 'Multi-GPU-Setups, Rückschluss-Optimierung, Model-Serving-Frameworks (vLLM, TensorRT-LLM), Überwachung und Observabilität, Kostenaudits und behördliche Compliance. Lokale LLMs eliminieren grenzüberschreitende Datenübertragung, erfüllen DSGVO Artikel 28 und senken die Lizenzkosten um 40–80% gegenüber SaaS.',
    fr: 'Configurations multi-GPU, optimisation de l\'inférence, cadres de service de modèles (vLLM, TensorRT-LLM), surveillance et observabilité, audits de coûts et conformité réglementaire. Les LLMs locaux éliminent le transfert de données transfrontalières, satisfont l\'article 28 du RGPD et réduisent les coûts de licences de 40–80% par rapport à SaaS.',
    ja: 'マルチGPUセットアップ、推論最適化、モデル提供フレームワーク（vLLM、TensorRT-LLM）、監視と可観測性、コスト監査および規制準拠。ローカルLLMは国境を超えたデータ転送を排除し、GDPR第28条を満たし、SaaSと比較してライセンス費用を40–80%削減します。',
    zh: '多GPU设置、推理优化、模型服务框架（vLLM、TensorRT-LLM）、监控和可观测性、成本审计和法规合规。本地LLM消除跨境数据转移、满足GDPR第28条，并相比SaaS将许可成本降低40–80%。',
  },
  'gpu-buying-guides': {
    en: 'GPU selection by budget and use case, cost per token, power efficiency, thermal design, second-hand marketplace comparisons, and warranty trade-offs. RTX 4090 (~$1600) handles 70B models; RTX 4080 (~$800) runs 13B–20B; RTX 4060 (~$300) is best value for 7B models.',
    de: 'GPU-Auswahl nach Budget und Anwendungsfall, Kosten pro Token, Energieeffizienz, thermisches Design, Vergleiche des Second-Hand-Marktes und Garantie-Trade-offs. RTX 4090 (~$1600) verarbeitet 70B-Modelle; RTX 4080 (~$800) führt 13B–20B aus; RTX 4060 (~$300) ist das beste Verhältnis für 7B-Modelle.',
    fr: 'Sélection GPU par budget et cas d\'usage, coût par token, efficacité énergétique, conception thermique, comparaisons du marché d\'occasion et compromis de garantie. RTX 4090 (~$1600) gère les modèles 70B ; RTX 4080 (~$800) exécute 13B–20B ; RTX 4060 (~$300) est le meilleur rapport pour les modèles 7B.',
    ja: '予算とユースケース別のGPU選択、トークンあたりのコスト、エネルギー効率、熱設計、中古市場の比較、保証トレードオフ。RTX 4090（~$1600）は70Bモデルを処理；RTX 4080（~$800）は13B–20Bを実行；RTX 4060（~$300）は7Bモデルに最適な値。',
    zh: '按预算和使用案例的GPU选择、每个令牌的成本、能源效率、热设计、二手市场比较和保修权衡。RTX 4090（~$1600）处理70B模型；RTX 4080（~$800）运行13B–20B；RTX 4060（~$300）是7B模型的最佳性价比。',
  },
  'hardware-setups': {
    en: 'Complete build guides for laptop, desktop, workstation, and server deployments. From single-GPU setups to multi-node clusters. Budget builds ($500–$1500), mid-range ($1500–$5000), and enterprise ($5000+) configurations with exact part lists and estimated throughput.',
    de: 'Vollständige Bauanleitungen für Laptop-, Desktop-, Workstation- und Server-Bereitstellungen. Von Single-GPU-Setups bis zu Multi-Node-Clustern. Budget-Builds ($500–$1500), Mid-Range ($1500–$5000) und Enterprise ($5000+) Konfigurationen mit exakten Teilelisten und geschätztem Durchsatz.',
    fr: 'Guides complets pour les déploiements portables, de bureau, de station de travail et de serveur. Des configurations GPU simples aux grappes multi-nœuds. Configurations budget ($500–$1500), milieu de gamme ($1500–$5000) et entreprise ($5000+) avec listes de pièces exactes et débit estimé.',
    ja: 'ラップトップ、デスクトップ、ワークステーション、サーバーデプロイメント用の完全な構築ガイド。シングルGPUセットアップからマルチノードクラスターまで。予算構築($500–$1500)、ミッドレンジ($1500–$5000)、エンタープライズ($5000+)構成、正確なパーツリストと推定スループット。',
    zh: '笔记本电脑、台式机、工作站和服务器部署的完整构建指南。从单GPU设置到多节点集群。预算构建（$500–$1500）、中档（$1500–$5000）和企业（$5000+）配置，附带精确的零件清单和估计吞吐量。',
  },
  'privacy-business': {
    en: 'On-premises deployment for compliance (GDPR, HIPAA, APPI, CAC). Zero-knowledge architecture, air-gapped setups, and access logging. Local LLMs eliminate API vendor lock-in, reduce compliance audit burden, and protect proprietary data from SaaS providers.',
    de: 'On-Premises-Bereitstellung für Compliance (DSGVO, HIPAA, APPI, CAC). Zero-Knowledge-Architektur, luftgekoppelte Setups und Zugriffsprotokolle. Lokale LLMs eliminieren API-Anbieter-Lock-in, reduzieren die Compliance-Audit-Belastung und schützen proprietäre Daten vor SaaS-Anbietern.',
    fr: 'Déploiement sur site pour la conformité (RGPD, HIPAA, APPI, CAC). Architecture zéro connaissance, configurations air-gap et journalisation des accès. Les LLMs locaux éliminent la dépendance aux fournisseurs d\'API, réduisent la charge d\'audit de conformité et protègent les données propriétaires des fournisseurs SaaS.',
    ja: 'コンプライアンス（GDPR、HIPAA、APPI、CAC）のためのオンプレミスデプロイ。ゼロナレッジアーキテクチャ、エアギャップセットアップ、アクセスログ。ローカルLLMはAPIベンダーロックインを排除し、コンプライアンス監査の負担を減らし、SaaSプロバイダーから専有データを保護します。',
    zh: '用于合规性（GDPR、HIPAA、APPI、CAC）的本地部署。零知识架构、隔离设置和访问日志。本地LLM消除API供应商锁定、减少合规审计负担并保护专有数据免受SaaS提供商影响。',
  },
  'cost-comparisons': {
    en: 'Break-even analysis: local vs cloud vs subscription models. Hidden SaaS costs: overage fees, enterprise seats, audit logs. Local hardware pays for itself in 6–18 months for heavy users. ROI calculators for different workload types.',
    de: 'Break-Even-Analyse: lokal vs Cloud vs Abonnementmodelle. Versteckte SaaS-Kosten: Überschussgebühren, Enterprise-Plätze, Audit-Protokolle. Lokale Hardware rechnet sich in 6–18 Monaten für Power-User. ROI-Rechner für verschiedene Workload-Typen.',
    fr: 'Analyse du seuil de rentabilité : local vs cloud vs modèles d\'abonnement. Coûts SaaS cachés : frais de dépassement, sièges entreprise, journaux d\'audit. Le matériel local s\'amortit en 6–18 mois pour les utilisateurs intensifs. Calculatrices ROI pour différents types de charges de travail.',
    ja: 'ブレークイーブン分析：ローカルvsクラウドvsサブスクリプションモデル。隠されたSaaSコスト：超過料金、エンタープライズシート、監査ログ。ローカルハードウェアは大量ユーザーにとって6–18ヶ月で投資を回収。異なるワークロードタイプのROI計算機。',
    zh: '损益平衡分析：本地vs云vs订阅模式。隐性SaaS成本：超额费用、企业席位、审计日志。本地硬件对于重度用户在6–18个月内回本。不同工作负载类型的ROI计算器。',
  },
}

const HUB_COMING_SOON: Record<string, string> = {
  en: 'More guides coming soon.',
  de: 'Weitere Leitfäden folgen in Kürze.',
  fr: 'D\'autres guides arrivent bientôt.',
  ja: 'さらなるガイドが近日公開予定です。',
  zh: '更多指南即将推出。',
}

const HUB_GETTING_STARTED_LINK: Record<string, string> = {
  en: 'Start with Getting Started',
  de: 'Mit „Erste Schritte" beginnen',
  fr: 'Commencer par « Premiers pas »',
  ja: 'はじめにから始める',
  zh: '从"入门"开始',
}

const HUB_TAKEAWAYS_TITLE: Record<string, string> = {
  en: 'Key Takeaways',
  de: 'Zusammenfassung',
  fr: 'Points clés',
  ja: 'ポイントまとめ',
  zh: '核心要点',
}

const HUB_TAKEAWAYS_BULLETS: Record<string, string[]> = {
  en: [
    '8 GB RAM is enough to run a 7B model locally (Ollama or LM Studio, under 10 min setup)',
    '40 GB VRAM runs 70B models (Llama 4, DeepSeek V3) at full quality',
    'Q4 quantization halves VRAM requirements with minimal quality loss — 7B model fits in 4–5 GB VRAM',
    'Llama 4, Qwen3.5, DeepSeek, and Mistral match GPT-4 on most coding and reasoning benchmarks',
    'Zero API costs after hardware purchase — no usage limits, no vendor lock-in',
    'All data stays on your machine — no telemetry, no cloud storage, GDPR-ready',
    'LoRA fine-tuning requires 500+ labeled examples and 24 GB+ VRAM (or cloud GPU for training)',
  ],
  de: [
    '8 GB RAM reichen aus, um ein 7B-Modell lokal auszuführen (Ollama oder LM Studio, unter 10 Minuten Einrichtung)',
    '40 GB VRAM führt 70B-Modelle (Llama 4, DeepSeek V3) in voller Qualität aus',
    'Q4-Quantisierung halbiert VRAM-Anforderungen mit minimalem Qualitätsverlust — 7B-Modell passt in 4–5 GB VRAM',
    'Llama 4, Qwen3.5, DeepSeek und Mistral entsprechen GPT-4 bei den meisten Code- und Reasoning-Benchmarks',
    'Null API-Kosten nach Hardware-Kauf — keine Nutzungsbegrenzungen, keine Anbieter-Lock-in',
    'Alle Daten bleiben auf Ihrer Maschine — keine Telemetrie, kein Cloud-Speicher, DSGVO-konform',
    'LoRA-Fine-Tuning erfordert 500+ gekennzeichnete Beispiele und 24 GB+ VRAM (oder Cloud-GPU zum Training)',
  ],
  fr: [
    '8 GB de RAM suffisent pour exécuter un modèle 7B localement (Ollama ou LM Studio, moins de 10 min de configuration)',
    '40 GB VRAM exécute les modèles 70B (Llama 4, DeepSeek V3) en qualité complète',
    'La quantification Q4 réduit de moitié les besoins en VRAM avec une perte de qualité minimale — un modèle 7B tient en 4–5 GB VRAM',
    'Llama 4, Qwen3.5, DeepSeek et Mistral correspondent à GPT-4 sur la plupart des benchmarks de code et de raisonnement',
    'Zéro coût d\'API après achat du matériel — aucune limite d\'utilisation, aucun verrouillage fournisseur',
    'Toutes les données restent sur votre machine — pas de télémétrie, pas de stockage cloud, prêt pour le RGPD',
    'Le fine-tuning LoRA nécessite 500+ exemples étiquetés et 24 GB+ VRAM (ou GPU cloud pour l\'entraînement)',
  ],
  ja: [
    '8 GB RAMで7Bモデルをローカルで実行できます（Ollama または LM Studio、10分以内のセットアップ）',
    '40 GB VRAMで70Bモデル（Llama 4、DeepSeek V3）をフル品質で実行',
    'Q4量子化により、品質の低下を最小限に抑えながらVRAM要件を半分に削減 — 7BモデルはVRAM 4–5 GBに収まります',
    'Llama 4、Qwen3.5、DeepSeek、MistralはほとんどのコーディングおよびReasoningベンチマークでGPT-4に対応',
    'ハードウェア購入後のAPIコストはゼロ — 使用制限なし、ベンダーロックインなし',
    'すべてのデータはマシン上に保たれます — テレメトリなし、クラウドストレージなし、GDPR対応',
    'LoRA微調整には500個以上のラベル付き例とVRAM 24 GB以上が必要です（またはトレーニング用のクラウドGPU）',
  ],
  zh: [
    '8 GB RAM足以在本地运行7B模型（Ollama或LM Studio，设置不到10分钟）',
    '40 GB VRAM以完整品质运行70B模型（Llama 4、DeepSeek V3）',
    'Q4量化在最小质量损失的情况下使VRAM要求减半 — 7B模型需要4–5 GB VRAM',
    'Llama 4、Qwen3.5、DeepSeek和Mistral在大多数编码和推理基准上与GPT-4相匹配',
    '硬件购买后零API成本 — 无使用限制、无供应商锁定',
    '所有数据保留在您的机器上 — 无遥测、无云存储、GDPR就绪',
    'LoRA微调需要500多个标记示例和24 GB+ VRAM（或用于训练的云GPU）',
  ],
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
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
}

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
const SLUG_ACRONYMS: Record<string, string> = {
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

const HUB_FAQ_TITLE: Record<string, string> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
}

const HUB_FAQS: Record<string, {q:string, a:string}[]> = {
  en: [
    {
      q: 'What is a local LLM?',
      a: 'A large language model (e.g., Llama 4, Qwen3.5, DeepSeek) that runs on your own hardware instead of a cloud API. You get full privacy, offline capability, no usage limits, and zero API costs after hardware purchase.'
    },
    {
      q: 'How much VRAM do I need for a local LLM?',
      a: '8 GB VRAM runs 7B models at Q4 quantization. 16 GB handles 13B models comfortably. 40 GB+ (e.g., dual RTX 4090s or A100) is required for 70B models. Apple Silicon unified memory counts as VRAM.'
    },
    {
      q: 'What is the difference between Ollama and LM Studio?',
      a: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.'
    },
    {
      q: 'Can local LLMs match cloud models like GPT-4o?',
      a: 'On coding and reasoning tasks, Llama 4, DeepSeek V3, and Qwen3.5 score within 5–10% of GPT-4o on standard benchmarks (MMLU, HumanEval). Claude Opus 4.6 and GPT-5 maintain an edge on complex multi-step tasks.'
    },
    {
      q: 'How do I fine-tune a local model?',
      a: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.'
    },
    {
      q: 'What is the minimum hardware to run a local LLM in 2026?',
      a: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for 20–40 tokens/sec on 7B models.'
    },
    {
      q: 'Are local LLMs free to use?',
      a: 'Yes. Ollama and LM Studio are free and open-source. The models themselves (Llama, Mistral, Qwen, DeepSeek) are available under open-source licenses at no cost. The only cost is your hardware.'
    },
    {
      q: 'What is the best local LLM for coding in 2026?',
      a: 'Qwen2.5-Coder 7B is the top performer for code completion and review on consumer hardware (8 GB VRAM). DeepSeek-Coder V2 Lite is the strongest alternative. For CPU-only setups, Phi-3.5 Mini offers the best coding quality under 4 GB RAM.'
    },
    {
      q: 'Can I run a local LLM without a GPU?',
      a: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical CPU inference speed: 2–8 tokens/sec on a modern laptop CPU, compared to 20–50 tokens/sec on an RTX 4060. 7B Q4 requires ~5 GB RAM (not VRAM). For CPU-only setups, Phi-3.5 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.'
    },
    {
      q: 'How do I update local LLM models when new versions are released?',
      a: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. Model updates from Meta, Alibaba, and Mistral typically arrive within 24–48 hours of official release.'
    },
  ],
  de: [
    {
      q: 'Was ist ein lokales LLM?',
      a: 'Ein großes Sprachmodell (z.B. Llama 4, Qwen3.5, DeepSeek), das auf Ihrer eigenen Hardware anstelle einer Cloud-API ausgeführt wird. Sie erhalten vollständige Privatsphäre, Offline-Funktionalität, keine Nutzungsbegrenzungen und null API-Kosten nach dem Hardware-Kauf.'
    },
    {
      q: 'Wie viel VRAM benötige ich für ein lokales LLM?',
      a: '8 GB VRAM führen 7B-Modelle bei Q4-Quantisierung aus. 16 GB verarbeiten 13B-Modelle komfortabel. 40 GB+ (z.B. dual RTX 4090 oder A100) sind erforderlich für 70B-Modelle. Apple-Silicon-Unified-Memory zählt als VRAM.'
    },
    {
      q: 'Was ist der Unterschied zwischen Ollama und LM Studio?',
      a: 'Ollama ist ein CLI-Tool, das Modelle über einfache Terminalcommands ausführt und eine OpenAI-kompatible API unter `localhost:11434` bereitstellt. LM Studio bietet eine Desktop-GUI, einen Modellbrowser und eine integrierte Chat-Oberfläche. Beide unterstützen die gleichen Modelle.'
    },
    {
      q: 'Können lokale LLMs Cloud-Modelle wie GPT-4o entsprechen?',
      a: 'Bei Coding- und Reasoning-Aufgaben erzielen Llama 4, DeepSeek V3 und Qwen3.5 bei Standard-Benchmarks (MMLU, HumanEval) Ergebnisse in 5–10% von GPT-4o. Claude Opus 4.6 und GPT-5 behaupten einen Vorteil bei komplexen mehrstufigen Aufgaben.'
    },
    {
      q: 'Wie fine-tunne ich ein lokales Modell?',
      a: 'Fine-Tuning erfordert 500+ gekennzeichnete Trainingsbeispiele, das QLoRA-Framework (reduziert VRAM-Anforderung durch 4-Bit-Quantisierung), 24 GB+ VRAM (oder Cloud-GPU-Vermietung) und 1–4 Stunden Trainingszeit für ein 7B-Modell.'
    },
    {
      q: 'Was ist die Mindest-Hardware zum Ausführen eines lokalen LLM im Jahr 2026?',
      a: 'Minimum: 8 GB RAM und eine beliebige moderne CPU (führt 3B–7B-Modelle mit 2–5 Token/Sek aus). Empfohlen: eine GPU mit 8 GB+ VRAM (RTX 3060 oder neuer) für 20–40 Token/Sek auf 7B-Modellen.'
    },
    {
      q: 'Sind lokale LLMs kostenlos nutzbar?',
      a: 'Ja. Ollama und LM Studio sind kostenlos und Open-Source. Die Modelle selbst (Llama, Mistral, Qwen, DeepSeek) sind unter Open-Source-Lizenzen kostenlos verfügbar. Die einzigen Kosten fallen für die Hardware an.'
    },
    {
      q: 'Was ist das beste lokale LLM für Coding im Jahr 2026?',
      a: 'Qwen2.5-Coder 7B ist der Top-Performer für Code-Completion und Review auf Consumer-Hardware (8 GB VRAM). DeepSeek-Coder V2 Lite ist die stärkste Alternative. Für CPU-only-Setups bietet Phi-3.5 Mini unter 4 GB RAM die beste Code-Qualität.'
    },
    {
      q: 'Kann ich ein lokales LLM ohne GPU ausführen?',
      a: 'Ja. Jede moderne CPU kann 3B–7B-Modelle bei Q4-Quantisierung mit Ollama (CPU-Modus) oder LM Studio ausführen. Typische CPU-Rückschluss-Geschwindigkeit: 2–8 Token/Sek auf einer modernen Laptop-CPU, verglichen mit 20–50 Token/Sek auf einer RTX 4060. 7B Q4 erfordert etwa 5 GB RAM (nicht VRAM). Für CPU-only-Setups bieten Phi-3.5 Mini (3,8B) und Llama 3.2 3B das beste Qualitäts-Geschwindigkeits-Verhältnis.'
    },
    {
      q: 'Wie aktualisiere ich lokale LLM-Modelle, wenn neue Versionen freigegeben werden?',
      a: 'Ollama: Führen Sie `ollama pull <model-name>` erneut aus — es werden nur geänderte Layer heruntergeladen. LM Studio: Öffnen Sie den Modellbrowser, finden Sie die aktualisierte Version und laden Sie sie herunter. Alte GGUF-Dateien werden nicht automatisch entfernt — löschen Sie sie manuell aus ~/.ollama/models (Ollama) oder ~/Library/Application Support/LM Studio/models (macOS), um Speicherplatz freizugeben. Modell-Updates von Meta, Alibaba und Mistral sind normalerweise 24–48 Stunden nach der offiziellen Veröffentlichung verfügbar.'
    },
    {
      q: 'Muss ich bei lokalen LLMs die DSGVO beachten?',
      a: 'Lokale Verarbeitung bedeutet, dass kein Datenschutzabkommen (Art. 28 DSGVO) erforderlich ist, da Daten niemals die Maschine verlassen. Ollama bindet standardmäßig an `localhost` — keine externe Zugänglichkeit. Dies erfüllt DSGVO-Anforderungen für On-Premises-Deployment.'
    },
    {
      q: 'Welche lokalen LLM-Modelle eignen sich best für den deutschen Mittelstand?',
      a: 'Llama 4 und Qwen3.5 für allgemeine Verwendung, DeepSeek-Coder für Softwareentwicklung, beide sind BSI-kompatibel wenn On-Premises bereitgestellt. Diese Modelle ermöglichen DSGVO-konforme KI-Nutzung ohne Anbieter-Lock-in.'
    },
  ],
  fr: [
    {
      q: 'Qu\'est-ce qu\'un LLM local ?',
      a: 'Un grand modèle de langage (par exemple, Llama 4, Qwen3.5, DeepSeek) qui s\'exécute sur votre matériel personnel plutôt que sur une API cloud. Vous bénéficiez de confidentialité totale, d\'une capacité hors ligne, d\'aucune limite d\'utilisation et de zéro coût d\'API après l\'achat du matériel.'
    },
    {
      q: 'De combien de VRAM ai-je besoin pour un LLM local ?',
      a: '8 GB VRAM exécutent les modèles 7B en quantification Q4. 16 GB gèrent confortablement les modèles 13B. 40 GB+ (par exemple, dual RTX 4090 ou A100) sont requis pour les modèles 70B. La mémoire unifiée Apple Silicon compte comme VRAM.'
    },
    {
      q: 'Quelle est la différence entre Ollama et LM Studio ?',
      a: 'Ollama est un outil CLI qui exécute les modèles via des commandes simples et expose une API compatible OpenAI à `localhost:11434`. LM Studio fournit une GUI desktop, un navigateur de modèles et une interface de chat intégrée. Tous deux supportent les mêmes modèles.'
    },
    {
      q: 'Les LLMs locaux peuvent-ils rivaliser avec les modèles cloud comme GPT-4o ?',
      a: 'Sur les tâches de codage et de raisonnement, Llama 4, DeepSeek V3 et Qwen3.5 obtiennent des résultats à 5–10% de GPT-4o sur les benchmarks standard (MMLU, HumanEval). Claude Opus 4.6 et GPT-5 conservent un avantage sur les tâches multi-étapes complexes.'
    },
    {
      q: 'Comment affiner un modèle local ?',
      a: 'Le fine-tuning nécessite 500+ exemples d\'entraînement annotés, le framework QLoRA (réduit l\'exigence VRAM via quantification 4 bits), 24 GB+ VRAM (ou location GPU cloud) et 1–4 heures de temps d\'entraînement pour un modèle 7B.'
    },
    {
      q: 'Quel est le matériel minimum pour exécuter un LLM local en 2026 ?',
      a: 'Minimum : 8 GB RAM et tout CPU moderne (exécute les modèles 3B–7B à 2–5 tokens/sec). Recommandé : un GPU avec 8 GB+ VRAM (RTX 3060 ou plus récent) pour 20–40 tokens/sec sur les modèles 7B.'
    },
    {
      q: 'Les LLMs locaux sont-ils gratuits d\'utilisation ?',
      a: 'Oui. Ollama et LM Studio sont gratuits et open-source. Les modèles eux-mêmes (Llama, Mistral, Qwen, DeepSeek) sont disponibles gratuitement sous licences open-source. Seul le coût du matériel s\'applique.'
    },
    {
      q: 'Quel est le meilleur LLM local pour le codage en 2026 ?',
      a: 'Qwen2.5-Coder 7B est le meilleur performer pour la complétion et la révision de code sur matériel grand public (8 GB VRAM). DeepSeek-Coder V2 Lite est la meilleure alternative. Pour les configurations CPU uniquement, Phi-3.5 Mini offre la meilleure qualité de code sous 4 GB RAM.'
    },
    {
      q: 'Puis-je exécuter un LLM local sans GPU ?',
      a: 'Oui. Tout CPU moderne peut exécuter les modèles 3B–7B en quantification Q4 avec Ollama (mode CPU) ou LM Studio. Vitesse d\'inférence CPU typique : 2–8 tokens/sec sur un CPU portable moderne, comparé à 20–50 tokens/sec sur une RTX 4060. 7B Q4 nécessite environ 5 GB RAM (pas VRAM). Pour les configurations CPU uniquement, Phi-3.5 Mini (3,8B) et Llama 3.2 3B offrent le meilleur rapport qualité/vitesse.'
    },
    {
      q: 'Comment mettre à jour les modèles LLM locaux lors de la sortie de nouvelles versions ?',
      a: 'Ollama : exécutez `ollama pull <model-name>` à nouveau — il télécharge uniquement les couches modifiées. LM Studio : ouvrez le navigateur de modèles, trouvez la version mise à jour et téléchargez-la. Les anciens fichiers GGUF ne sont pas supprimés automatiquement — supprimez-les manuellement de ~/.ollama/models (Ollama) ou ~/Library/Application Support/LM Studio/models (macOS) pour libérer de l\'espace disque. Les mises à jour de modèles de Meta, Alibaba et Mistral arrivent généralement 24–48 heures après la sortie officielle.'
    },
  ],
  ja: [
    {
      q: 'ローカルLLMとは何ですか？',
      a: 'クラウドAPIではなく、自分のハードウェア上で実行される大型言語モデル（例：Llama 4、Qwen3.5、DeepSeek）です。完全なプライバシー、オフライン機能、使用制限なし、およびハードウェア購入後のゼロAPIコストが得られます。'
    },
    {
      q: 'ローカルLLMにはどの程度のVRAMが必要ですか？',
      a: '8 GB VRAMはQ4量子化で7Bモデルを実行します。16 GBは13Bモデルを快適に処理します。40 GB+（デュアルRTX 4090またはA100など）は70Bモデルに必要です。Apple SiliconのUnified Memoryはメインメモリとしてカウントされます。'
    },
    {
      q: 'OllamaとLM Studioの違いは何ですか？',
      a: 'Ollamaはシンプルなターミナルコマンドでモデルを実行するCLIツールで、`localhost:11434`でOpenAI互換APIを公開します。LM Studioはデスクトップ GUI、モデルブラウザ、組み込みチャットインターフェースを提供します。どちらも同じモデルをサポートします。'
    },
    {
      q: 'ローカルLLMはGPT-4oなどのクラウドモデルに対抗できますか？',
      a: 'コーディングと推論タスクでは、Llama 4、DeepSeek V3、Qwen3.5は標準ベンチマーク（MMLU、HumanEval）でGPT-4oの5–10%以内のスコアを取得します。Claude Opus 4.6とGPT-5は複雑なマルチステップタスクで優位性を保っています。'
    },
    {
      q: 'ローカルモデルはどのようにファインチューニングしますか？',
      a: 'ファインチューニングには500+個のラベル付きトレーニング例、QLоRAフレームワーク（4ビット量子化によるVRAM削減）、24 GB+ VRAM（またはクラウドGPUレンタル）、および7Bモデルの1–4時間のトレーニング時間が必要です。'
    },
    {
      q: '2026年にローカルLLMを実行するための最小限のハードウェアは何ですか？',
      a: '最小：8 GB RAMと任意の最新CPU（3B–7Bモデルを2–5トークン/秒で実行）。推奨：8 GB+ VRAM搭載GPU（RTX 3060以降）で7Bモデルで20–40トークン/秒。'
    },
    {
      q: 'ローカルLLMは無料で使用できますか？',
      a: 'はい。OllamaとLM Studioは無料でオープンソースです。モデル自体（Llama、Mistral、Qwen、DeepSeek）はオープンソースライセンスの下で無料で入手できます。唯一のコストはハードウェアです。'
    },
    {
      q: '2026年のコーディング向けベストローカルLLMは何ですか？',
      a: 'Qwen2.5-Coder 7Bはコンシューマハードウェア（8 GB VRAM）でのコード補完とレビューのトップパフォーマーです。DeepSeek-Coder V2 Liteが最有力な代替案です。CPUのみのセットアップの場合、Phi-3.5 Miniは4 GB RAM未満で最高のコーディング品質を提供します。'
    },
    {
      q: 'GPUなしでローカルLLMを実行できますか？',
      a: 'はい。任意の最新CPUはOllama（CPUモード）またはLM StudioでQ4量子化で3B–7Bモデルを実行できます。典型的なCPU推論速度：最新のノートPC CPUで2–8トークン/秒、RTX 4060で20–50トークン/秒と比較。7B Q4には約5 GB RAM（VRAM以外）が必要です。CPUのみのセットアップの場合、Phi-3.5 Mini（3.8B）とLlama 3.2 3Bは最高の品質対速度比を提供します。'
    },
    {
      q: '新しいバージョンがリリースされたときにローカルLLMモデルを更新するにはどうすればよいですか？',
      a: 'Ollama: `ollama pull <model-name>`を再実行します — 変更されたレイヤーのみをダウンロードします。LM Studio: モデルブラウザを開き、更新版を見つけてダウンロードします。古いGGUFファイルは自動削除されません — ~/.ollama/models（Ollama）または~/Library/Application Support/LM Studio/models（macOS）から手動で削除してディスク容量を解放します。Meta、Alibaba、Mistralのモデル更新は通常、公式リリースの24–48時間以内に利用可能になります。'
    },
  ],
  zh: [
    {
      q: '什么是本地LLM？',
      a: '在您自己的硬件上运行而不是云API的大型语言模型（例如Llama 4、Qwen3.5、DeepSeek）。您获得完整隐私、离线功能、无使用限制和硬件购买后零API成本。'
    },
    {
      q: '本地LLM需要多少VRAM？',
      a: '8 GB VRAM在Q4量化下运行7B模型。16 GB舒适地处理13B模型。40 GB+（例如双RTX 4090或A100）是70B模型所需。Apple Silicon统一内存计为VRAM。'
    },
    {
      q: 'Ollama和LM Studio有什么区别？',
      a: 'Ollama是一个CLI工具，通过简单的终端命令运行模型，并在`localhost:11434`公开OpenAI兼容的API。LM Studio提供桌面GUI、模型浏览器和内置聊天界面。两者都支持相同的模型。'
    },
    {
      q: '本地LLM能否与GPT-4o等云模型相匹敌？',
      a: '在编码和推理任务上，Llama 4、DeepSeek V3和Qwen3.5在标准基准（MMLU、HumanEval）上的得分在GPT-4o的5–10%以内。Claude Opus 4.6和GPT-5在复杂的多步任务上保持优势。'
    },
    {
      q: '如何微调本地模型？',
      a: '微调需要500个以上标记的训练示例、QLoRA框架（通过4位量化降低VRAM要求）、24 GB+ VRAM（或云GPU租赁）和7B模型1–4小时的训练时间。'
    },
    {
      q: '2026年运行本地LLM的最少硬件要求是什么？',
      a: '最低要求：8 GB RAM和任何现代CPU（以2–5令牌/秒运行3B–7B模型）。推荐：具有8 GB+ VRAM的GPU（RTX 3060或更新）在7B模型上达到20–40令牌/秒。'
    },
    {
      q: '本地LLM可以免费使用吗？',
      a: '是的。Ollama和LM Studio是免费且开源的。模型本身（Llama、Mistral、Qwen、DeepSeek）在开源许可证下免费获得。唯一的成本是硬件。'
    },
    {
      q: '2026年最佳编码本地LLM是什么？',
      a: 'Qwen2.5-Coder 7B是消费级硬件（8 GB VRAM）上代码补全和审查的顶级表现者。DeepSeek-Coder V2 Lite是最强的替代方案。对于仅CPU设置，Phi-3.5 Mini在4 GB RAM以内提供最佳编码质量。'
    },
    {
      q: '没有GPU可以运行本地LLM吗？',
      a: '是的。任何现代CPU都可以使用Ollama（CPU模式）或LM Studio在Q4量子化下运行3B–7B模型。典型的CPU推理速度：现代笔记本电脑CPU上2–8令牌/秒，相比RTX 4060上的20–50令牌/秒。7B Q4需要约5 GB RAM（非VRAM）。对于仅CPU设置，Phi-3.5 Mini（3.8B）和Llama 3.2 3B提供最佳的质量对速度比。'
    },
    {
      q: '发布新版本时如何更新本地LLM模型？',
      a: 'Ollama：再次运行`ollama pull <model-name>`— 仅下载更改的层。LM Studio：打开模型浏览器，找到更新版本并下载。旧的GGUF文件不会自动删除— 从~/.ollama/models（Ollama）或~/Library/Application Support/LM Studio/models（macOS）手动删除以释放磁盘空间。Meta、Alibaba和Mistral的模型更新通常在官方发布后24–48小时内推出。'
    },
  ],
}

const HUB_REGIONAL_TITLE: Record<string, string> = {
  en: 'Compliance & Regional Context',
  de: 'Compliance & Regionaler Kontext',
  fr: 'Conformité et contexte régional',
  ja: 'コンプライアンスと地域別コンテキスト',
  zh: '合规与地区背景',
}

const HUB_REGIONAL_ITEMS: Record<string, {region:string, text:string}[]> = {
  en: [
    {
      region: 'EU / GDPR',
      text: 'Local LLMs process all data on-premises. When combined with full-disk encryption and access logging, on-premises inference satisfies GDPR Article 28 (no data processor agreement needed if data never leaves the machine). Ollama binds to `localhost` by default — no external exposure.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japan\'s Act on the Protection of Personal Information (APPI) restricts cross-border data transfer for personal data. Local LLMs eliminate cross-border transfer entirely. METI\'s 2024 AI governance guidelines encourage privacy-preserving AI — local deployment is aligned with these recommendations.'
    },
    {
      region: 'China / CAC',
      text: 'The Cyberspace Administration of China\'s Interim Measures for Generative AI Services (2023) require AI providers offering services to Chinese users to register. Local LLMs running entirely on-premises are outside the CAC\'s public-facing provider definition, significantly reducing compliance burden for enterprise deployments.'
    },
  ],
  de: [
    {
      region: 'EU / DSGVO',
      text: 'Lokale LLMs verarbeiten alle Daten vor Ort. In Kombination mit vollständiger Festplattenverschlüsselung und Zugriffsprotokollierung erfüllt On-Premises-Verarbeitung DSGVO Artikel 28 (keine Datenschutzvereinbarung erforderlich, wenn Daten die Maschine nicht verlassen). Ollama bindet standardmäßig an `localhost` — keine externe Zugänglichkeit. Dies entspricht BSI-Anforderungen für sichere Cloud-Nutzung und wird vom deutschen Mittelstand zunehmend bevorzugt.'
    },
    {
      region: 'Japan / APPI',
      text: 'Japans Gesetz zum Schutz persönlicher Informationen (APPI) beschränkt die grenzüberschreitende Datenübertragung. Lokale LLMs eliminieren die grenzüberschreitende Übertragung vollständig. METs AI-Governance-Richtlinien von 2024 unterstützen datenschutzerhaltende KI — lokale Bereitstellung ist mit diesen Empfehlungen vereinbar.'
    },
    {
      region: 'China / CAC',
      text: 'Chinas Cyberspace-Administration regelt generative KI-Dienste (2023). Lokale LLMs, die vollständig vor Ort laufen, fallen außerhalb der öffentlich zugänglichen Anbieter-Definition der CAC und reduzieren die Compliance-Anforderungen für Unternehmensbereitstellungen erheblich.'
    },
  ],
  fr: [
    {
      region: 'EU / RGPD',
      text: 'Les LLMs locaux traitent toutes les données sur site. En combinaison avec le chiffrement du disque complet et la journalisation des accès, le traitement sur site satisfait l\'article 28 du RGPD (aucun accord de traitement de données nécessaire si les données ne quittent jamais la machine). Ollama se lie à `localhost` par défaut — aucune exposition externe. La CNIL recommande cette approche pour les processus d\'IA respectueux de la vie privée.'
    },
    {
      region: 'Japan / APPI',
      text: 'La loi japonaise sur la protection des informations personnelles (APPI) restreint les transferts transfrontaliers de données. Les LLMs locaux éliminent entièrement les transferts transfrontaliers. Les directives de gouvernance de l\'IA du METI 2024 encouragent l\'IA préservant la confidentialité — le déploiement local s\'aligne avec ces recommandations.'
    },
    {
      region: 'China / CAC',
      text: 'La Cyberspace Administration of China (2023) réglemente les services d\'IA générative. Les LLMs locaux fonctionnant entièrement sur site sortent de la définition du fournisseur public-facing de la CAC, réduisant considérablement le fardeau de conformité pour les déploiements d\'entreprise.'
    },
  ],
  ja: [
    {
      region: 'Japan / APPI',
      text: '日本の個人情報保護法（APPI）は個人データの国際転送を制限しています。ローカルLLMは国際転送を完全に排除します。METI の2024年AI ガバナンスガイドラインはプライバシー保護AIを推奨しており、ローカルデプロイはこれらの推奨事項に一致しています。大規模企業は社内システムとしてのローカルLLMを採用して、データ主権と規制要件を満たしています。'
    },
    {
      region: 'EU / GDPR',
      text: 'ローカルLLMはすべてのデータをオンプレミスで処理します。フルディスク暗号化とアクセスログと組み合わせると、オンプレミス推論はGDPR第28条を満たします（データがマシンを離れない場合、データプロセッサー契約は不要）。Ollamaはデフォルトで`localhost`にバインド — 外部露出なし。'
    },
    {
      region: 'China / CAC',
      text: '中国のサイバースペース管理（2023）は生成AIサービスを規制しています。完全にオンプレミスで実行されるローカルLLMはCACの公開フェーシング提供者定義の外側にあり、エンタープライズデプロイのコンプライアンス負担を大幅に削減します。'
    },
  ],
  zh: [
    {
      region: 'China / CAC',
      text: '中国网络信息办公室（2023）规范生成式AI服务。完全在本地运行的本地LLM超出了CAC公共面向提供商的定义，大大减轻了企业部署的合规负担。数据主权和网络安全法（2024）鼓励在国内部署AI模型以保护数据——本地LLM完全符合这些要求。'
    },
    {
      region: 'EU / GDPR',
      text: '本地LLM在本地处理所有数据。结合全磁盘加密和访问日志，本地处理满足GDPR第28条（如果数据永远不离开机器，则不需要数据处理协议）。Ollama默认绑定到`localhost`— 无外部暴露。'
    },
    {
      region: 'Japan / APPI',
      text: '日本个人信息保护法（APPI）限制个人数据的跨境转移。本地LLM完全消除跨境转移。METI 2024年AI治理指南鼓励隐私保护AI— 本地部署与这些建议相一致。'
    },
  ],
}

const HUB_PRESENTATION_HEADING: Record<string, string> = {
  en: 'Visual Summary: Local LLMs 2026',
  de: 'Visuelle Zusammenfassung: Lokale LLMs 2026',
  fr: 'Résumé visuel : LLMs locaux 2026',
  ja: 'ビジュアルサマリー：ローカルLLM 2026',
  zh: '视觉摘要：本地LLM 2026',
}

const HUB_PRESENTATION_DESC: Record<string, string> = {
  en: 'The slide deck below covers hardware requirements (8 GB VRAM for 7B models, 40 GB+ for 70B), top open-source models 2026, Ollama setup in 5 minutes, Q4_K_M quantization, regional compliance (GDPR, APPI), and key takeaways. Download the PDF as a Local LLMs quick-reference card.',
  de: 'Die Folien unten zeigen Hardwareanforderungen (8 GB VRAM für 7B-Modelle, 40 GB+ für 70B), Top-Open-Source-Modelle 2026, Ollama-Setup in 5 Minuten, Q4_K_M-Quantisierung, regionale Compliance (DSGVO, APPI) und wichtige Erkenntnisse. PDF als lokales LLM-Referenzkarte herunterladen.',
  fr: 'Les diapositives ci-dessous couvrent les exigences matérielles (8 Go de VRAM pour les modèles 7B, 40 Go+ pour les 70B), les meilleurs modèles open source 2026, la configuration Ollama en 5 minutes, la quantification Q4_K_M, la conformité régionale (RGPD, APPI) et les points clés. Téléchargez le PDF comme carte de référence LLM locale.',
  ja: '以下のスライドは、ハードウェア要件（7Bモデルに8 GB VRAM、70Bに40 GB以上）、2026年トップオープンソースモデル、5分でのOllamaセットアップ、Q4_K_M量子化、地域コンプライアンス（GDPR、APPI）、重要なポイントをカバーしています。PDFをローカルLLMクイックリファレンスカードとしてダウンロードしてください。',
  zh: '以下幻灯片涵盖硬件需求（7B模型需要8 GB显存，70B需要40 GB+）、2026年顶级开源模型、5分钟内完成Ollama设置、Q4_K_M量化、地区合规性（GDPR、APPI）和关键要点。将PDF下载为本地LLM快速参考卡。',
}

const HUB_PRESENTATION_PDF: Record<string, string> = {
  en: 'Download Local LLMs Reference Card (PDF)',
  de: 'Lokales LLM-Referenzblatt herunterladen (PDF)',
  fr: 'Télécharger la carte de référence LLMs locaux (PDF)',
  ja: 'ローカルLLMリファレンスカードをダウンロード（PDF）',
  zh: '下载本地LLM参考卡（PDF）',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Returns the article title from content, or a readable fallback from the slug
function getArticleTitle(articleKey: string, lang: Language): string {
  const contentKey = LLM_SLUG_TO_KEY[articleKey]
  if (contentKey && llmContent[contentKey]?.[lang]?.title) return llmContent[contentKey][lang].title
  if (contentKey && llmContent[contentKey]?.en?.title)     return llmContent[contentKey].en.title
  return slugToTitle(articleKey)
}

function ArticleCard({ articleKey, dot, lang }: { articleKey: string; dot: string; lang: Language }) {
  const title = getArticleTitle(articleKey, lang)
  const href = navHref(`/local-llms/${articleKey}`, lang)
  const hasContent = !!(LLM_SLUG_TO_KEY[articleKey] && llmContent[LLM_SLUG_TO_KEY[articleKey]])

  // Future-proof: if no content, don't render the card
  if (!hasContent) {
    return null
  }

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
        {title}
      </span>
    </Link>
  )
}

function ArticleComingSoon({ articleKey, lang }: { articleKey: string; lang: Language }) {
  const title = getArticleTitle(articleKey, lang)
  return (
    <div className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl p-4 opacity-50 cursor-default select-none">
      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-gray-300" />
      <span className="text-text-secondary text-sm font-medium leading-snug flex-1">
        {title}
        <span className="ml-2 text-xs font-normal opacity-60">· soon</span>
      </span>
    </div>
  )
}

function ThemeSection({ theme, lang }: { theme: LLMTheme; lang: Language }) {
  const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: 'bg-gray-400' }
  const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title

  // Filter to articles: live ones (have content and not coming soon), and coming soon ones
  const liveArticles = theme.articleKeys.filter(
    key => !COMING_SOON_SLUGS.has(key) && !!(LLM_SLUG_TO_KEY[key] && llmContent[LLM_SLUG_TO_KEY[key]])
  )
  const soonArticles = theme.articleKeys.filter(key => COMING_SOON_SLUGS.has(key))
  const hasContent = liveArticles.length > 0 || soonArticles.length > 0

  return (
    <section id={theme.id} className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
          {theme.title}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{label}</h2>
      <p className="text-text-secondary text-sm mb-6 max-w-2xl">
        {THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description}
      </p>
      {hasContent ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {liveArticles.map(key => (
            <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
          ))}
          {soonArticles.map(key => (
            <ArticleComingSoon key={key} articleKey={key} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary text-sm p-4 bg-primary/5 rounded-lg border border-primary/15">
          <p>{HUB_COMING_SOON[lang] ?? HUB_COMING_SOON['en']} <Link href={navHref('/local-llms#getting-started', lang)} className="text-primary hover:underline">{HUB_GETTING_STARTED_LINK[lang] ?? HUB_GETTING_STARTED_LINK['en']}</Link>.</p>
        </div>
      )}
    </section>
  )
}

function LocalLLMsHubContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Local LLMs</p>
          <p className="text-xs text-text-secondary mb-4">Updated <time dateTime="2026-04-07">April 2026</time></p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>

          {/* Key Takeaways */}
          <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {HUB_TAKEAWAYS_TITLE[lang] ?? HUB_TAKEAWAYS_TITLE['en']}
            </p>
            <ul className="space-y-2">
              {(HUB_TAKEAWAYS_BULLETS[lang] ?? HUB_TAKEAWAYS_BULLETS['en']).map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap gap-2">
            {llmThemes.map(theme => {
              const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: '' }
              return (
                <a
                  key={theme.id}
                  href={`#${theme.id}`}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-opacity hover:opacity-80 ${colors.badge}`}
                >
                  {THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title}
                </a>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-text-secondary flex-1">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Theme sections */}
        {llmThemes.map(theme => (
          <ThemeSection key={theme.id} theme={theme} lang={lang} />
        ))}

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_TITLE[lang] ?? HUB_FAQ_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_FAQS[lang] ?? HUB_FAQS['en']).map((faq, i) => (
              <div key={i} className="border-b border-primary/15 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Context Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_REGIONAL_TITLE[lang] ?? HUB_REGIONAL_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_REGIONAL_ITEMS[lang] ?? HUB_REGIONAL_ITEMS['en']).map((item, i) => (
              <div key={i} className="bg-primary/5 border border-primary/15 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{item.region}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Presentation Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
          </h2>
          <p className="text-sm text-text-secondary mb-4 max-w-2xl">
            {HUB_PRESENTATION_DESC[lang] ?? HUB_PRESENTATION_DESC['en']}
          </p>
          <a
            href={`/presentations/local-llms-hub-static.html?lang=${lang}&print=1`}
            className="inline-block mb-6 text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {HUB_PRESENTATION_PDF[lang] ?? HUB_PRESENTATION_PDF['en']}
          </a>
          <iframe
            src={`/presentations/local-llms-hub-static.html?lang=${lang}`}
            title={HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
            className="w-full rounded-xl border border-primary/15"
            style={{ height: '560px' }}
            loading="lazy"
          />
        </section>

        {/* Back nav */}
        <div className="pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-sm text-text-secondary hover:text-primary transition-colors">
            {HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}
          </Link>
        </div>

      </div>
    </div>
  )
}

export function LocalLLMsHub({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <LocalLLMsHubContent initialLang={initialLang} />
}
