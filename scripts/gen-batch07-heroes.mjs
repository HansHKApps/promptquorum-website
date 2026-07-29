#!/usr/bin/env node
const BASE = 'http://localhost:3065';
const SPECS = {
  "corporate-rag-local-llms-overview": {
    "en": {
      "title": "Corporate RAG With Local LLMs: Document Q&A for Organizations",
      "subtitle": "Corporate RAG with local LLMs: secure document Q&A, proprietary knowledge bases, audit trails, multi",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Corporate RAG mit lokalen LLMs: Dokumenten-Q&A für Unternehmen",
      "subtitle": "Corporate RAG mit lokalen LLMs: sichere Dokumenten-Q&A, proprietäre Wissensdatenbanken, Audit-Trails",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "RAG d'entreprise avec LLMs locaux : Q&A documentaire pour organisations",
      "subtitle": "RAG d'entreprise avec LLMs locaux : Q&A documentaire sécurisé, bases de connaissances propriétaires,",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "企業RAGとローカルLLM：組織向けドキュメントQ&A",
      "subtitle": "企業RAGとローカルLLM：セキュアなドキュメントQ&A、独自知識ベース、監査証跡、マルチユーザーアクセス制御、エンタープライズ。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "企业RAG与本地LLM：面向组织的文档问答",
      "subtitle": "企业RAG与本地LLM：安全文档问答、专有知识库、审计跟踪、多用户访问控制、企业级。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "RAG Corporativo con LLMs Locales: Q&A Documental para Organizaciones",
      "subtitle": "RAG corporativo con LLMs locales: Q&A documental seguro, bases de conocimiento propietarias, audit t",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "RAG Corporativo com LLMs Locais: Q&A Documental para Organizações",
      "subtitle": "RAG corporativo com LLMs locais: Q&A documental seguro, bases de conhecimento proprietárias, audit t",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨RAG⁩ المؤسسي بنماذج ⁨LLM⁩ المحلية: أسئلة وأجوبة المستندات للمؤسسات",
      "subtitle": "⁨RAG⁩ المحلي يبقي مستندات الشركة داخل المنشأة ويلغي تكاليف ⁨API⁩. يغطي استيعاب المستندات والتحكم بال",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "기업용 RAG와 로컬 LLM: 조직을 위한 문서 Q&A",
      "subtitle": "로컬 LLM을 활용한 기업용 RAG: 안전한 문서 Q&A, 독점 지식 베이스, 감사 추적, 다중 사용자 접근 제어, 엔터프라이즈.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "enterprise-compliance-local-llms-overview": {
    "en": {
      "title": "Enterprise Compliance: GDPR, HIPAA, SOC2, and AI Regulations",
      "subtitle": "Enterprise AI compliance: GDPR, HIPAA, SOC2, EU AI Act requirements. Local LLM regulatory guide.",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Enterprise Compliance: DSGVO, HIPAA, SOC2 und KI-Regulierung",
      "subtitle": "DSGVO, HIPAA, SOC2 Compliance mit Local LLMs: Regulatorischer Leitfaden für Unternehmensdeployments.",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Conformité Entreprise: RGPD, HIPAA, SOC2 et Réglementations IA",
      "subtitle": "Conformité IA entreprise: RGPD, HIPAA, SOC2, exigences Loi IA UE. Guide réglementaire Local LLM.",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "エンタープライズコンプライアンス: GDPR、HIPAA、SOC2、AI規制",
      "subtitle": "エンタープライズAIコンプライアンス: GDPR、HIPAA、SOC2、EU AI Act要件。Local LLM規制ガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "企业合规: GDPR、HIPAA、SOC2 和 AI 法规",
      "subtitle": "企业 AI 合规：GDPR、HIPAA、SOC2、EU AI Act 要求。Local LLM 法规指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Cumplimiento Empresarial: GDPR, HIPAA, SOC2 y Regulaciones de IA",
      "subtitle": "Cumplimiento de IA empresarial: GDPR, HIPAA, SOC2, requisitos de la Ley de IA de la UE. Guía regulat",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Conformidade Empresarial: LGPD, GDPR, HIPAA, SOC2 e Regulamentações de IA",
      "subtitle": "Conformidade de IA empresarial: LGPD, GDPR, HIPAA, SOC2, requisitos da Lei de IA da UE. Guia regulat",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "الامتثال المؤسسي: ⁨GDPR⁩ و⁨HIPAA⁩ و⁨SOC2⁩ ولوائح الذكاء الاصطناعي",
      "subtitle": "غرامات ⁨GDPR⁩ تبلغ ⁨20⁩ مليون يورو و⁨HIPAA⁩ مليون و⁨500⁩ ألف دولار: نماذج ⁨LLM⁩ المحلية تستوفي متطلب",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "기업 컴플라이언스: GDPR, HIPAA, SOC2 및 AI 규정",
      "subtitle": "기업 AI 컴플라이언스: GDPR, HIPAA, SOC2, EU AI Act 요구 사항. 로컬 LLM 규제 가이드.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "scaling-local-llms-enterprise-overview": {
    "en": {
      "title": "Scaling Local LLMs for Enterprise: Multi-User, Multi-GPU Production Deployment",
      "subtitle": "Scale local LLMs: Kubernetes, load balancing, redundancy, monitoring. Multi-GPU production deploymen",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Local LLMs in der Enterprise skalieren: Multi-User-, Multi-GPU-Produktionsdeployment",
      "subtitle": "Skaliere Local LLMs: Kubernetes, Load Balancing, Redundanz, Monitoring. Multi-GPU-Produktionsdeploym",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Mettre à l'échelle les LLM locaux en entreprise : Déploiement multi-utilisateurs et multi-GPU en production",
      "subtitle": "Mettez à l'échelle les LLM locaux : Kubernetes, équilibrage de charge, redondance, surveillance. Dép",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "企業向けLocal LLMのスケーリング：マルチユーザー、マルチGPU本番デプロイメント",
      "subtitle": "Local LLMをスケーリング：Kubernetes、ロードバランシング、冗長性、監視。マルチGPU本番デプロイメント。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "企业级本地LLM扩展：多用户、多GPU生产部署",
      "subtitle": "扩展本地LLM：Kubernetes、负载均衡、冗余性、监控。多GPU生产部署。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Escalando LLMs locales en la empresa: Despliegue en producción multi-usuario y multi-GPU",
      "subtitle": "Escala LLMs locales: Kubernetes, balanceo de carga, redundancia, monitoreo. Despliegue multi-GPU en ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Escalando LLMs locais na empresa: Implantação em produção multi-usuário e multi-GPU",
      "subtitle": "Escale LLMs locais: Kubernetes, balanceamento de carga, redundância, monitoramento. Implantação mult",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "توسيع نطاق نماذج ⁨LLM⁩ المحلية في المؤسسة: نشر إنتاجي متعدد المستخدمين ومتعدد ⁨GPU⁩",
      "subtitle": "وسّع نماذج ⁨LLM⁩ المحلية على مستوى المؤسسات: ⁨Kubernetes⁩، وموازنة الحمل، والتكرار، والمراقبة، ونشر ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "엔터프라이즈를 위한 로컬 LLM 확장: 다중 사용자·다중 GPU 프로덕션 배포",
      "subtitle": "로컬 LLM 확장: Kubernetes, 로드 밸런싱, 이중화, 모니터링. 다중 GPU 프로덕션 배포.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "why-enterprises-use-local-llms-overview": {
    "en": {
      "title": "Why Enterprises Use Local LLMs: Cost, Compliance, and Control",
      "subtitle": "Why enterprises use local LLMs: cost analysis, GDPR/HIPAA compliance, data sovereignty, vendor lock-",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Warum Unternehmen lokale LLMs einsetzen: Kosten, Compliance und Kontrolle",
      "subtitle": "Warum Unternehmen lokale LLMs einsetzen: Kostenanalyse, DSGVO/BSI-Compliance, Datenschutz, Vermeidun",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Pourquoi les entreprises choisissent les LLM locaux : Coût, Conformité et Contrôle",
      "subtitle": "Pourquoi les entreprises utilisent les LLM locaux : analyse des coûts, conformité RGPD/CNIL, souvera",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "エンタープライズがローカルLLMを使用する理由：コスト、コンプライアンス、制御",
      "subtitle": "エンタープライズがローカルLLMを使う理由：コスト分析、METI/データセキュリティ法コンプライアンス、データ主権、ベンダーロックイン回避。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "企业使用本地LLM的原因：成本、合规性和控制",
      "subtitle": "企业使用本地LLM的原因：成本分析、数据安全法合规性、数据主权、避免供应商锁定。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Por qué las empresas usan LLMs locales: Costo, Cumplimiento y Control",
      "subtitle": "Por qué las empresas usan LLMs locales: análisis de costos, cumplimiento GDPR/HIPAA, soberanía de da",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Por que as empresas usam LLMs locais: Custo, Conformidade e Controle",
      "subtitle": "Por que as empresas usam LLMs locais: análise de custos, conformidade LGPD/GDPR/HIPAA, soberania de ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "لماذا تستخدم المؤسسات نماذج ⁨LLM⁩ المحلية: التكلفة، والامتثال، والتحكم",
      "subtitle": "توفّر المؤسسات بين $⁨100k⁩ و$⁨500k⁩ سنويًا بتجنّب رسوم ⁨API⁩ لكل ⁨token⁩. دليل التكلفة والامتثال لـ ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "기업이 로컬 LLM을 선택하는 이유: 비용, 컴플라이언스, 그리고 통제권",
      "subtitle": "기업이 로컬 LLM을 사용하는 이유: 비용 분석, GDPR/HIPAA 컴플라이언스, 데이터 주권, 벤더 종속성 회피.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "private-local-ai-for-business-overview": {
    "en": {
      "title": "Private Local AI For Business: On-Premises Deployment Without Cloud",
      "subtitle": "On-premises AI breaks even at 200M tokens/month: $83/mo hardware vs $1,000/mo GPT-5 API. GDPR/HIPAA-",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Private lokale KI für Unternehmen: On-Premises-Bereitstellung ohne Cloud",
      "subtitle": "Private lokale KI für Unternehmen 2026: DSGVO-konforme On-Premises-LLMs ohne Cloud. Datenschutz, Kos",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "IA Locale Privée Pour Les Entreprises : Déploiement On-Premises Sans Cloud",
      "subtitle": "L'IA sur site rentable dès 200M tokens/mois : 83 $/mois matériel vs 1 000 $/mois API GPT-5. RGPD, HI",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "プライベート・ローカルAI for ビジネス：オンプレミス展開ガイド 2026",
      "subtitle": "オンプレミスAIは月2億トークンで損益分岐：ハードウェア$83/月 vs GPT-5 API $1,000/月。GDPR・HIPAA・SOC2準拠。Llama 3.3 70BをRTX 5090またはv",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "企业本地私有AI：保持数据主权与成本控制的On-Premises部署指南 2026",
      "subtitle": "本地部署AI在月2亿token时盈亏平衡：硬件$83/月 vs GPT-5 API $1,000/月。GDPR、HIPAA、SOC2合规。Llama 3.3 70B运行于RTX 5090或vLLM集群",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "IA Local Privada para Empresas: Despliegue On-Premises sin la Nube",
      "subtitle": "La IA on-premises es rentable a partir de 200M tokens/mes: $83/mes en hardware frente a $1.000/mes d",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "IA Local Privada para Empresas: Implantação On-Premises sem a Nuvem",
      "subtitle": "IA on-premises é economicamente viável a partir de 200M tokens/mês: $83/mês em hardware vs $1.000/mê",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "الذكاء الاصطناعي المحلي الخاص للشركات: نشر في الموقع دون السحابة",
      "subtitle": "تكلفة ⁨83⁩ دولارًا/شهر للعتاد مقابل ⁨1⁩,⁨000⁩ دولار/شهر لـ ⁨API⁩ عند ⁨200⁩ مليون ⁨token. Llama 3.3 7",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "비즈니스를 위한 프라이빗 로컬 AI: 클라우드 없이 온프레미스 배포",
      "subtitle": "온프레미스 AI는 월 2억 토큰에서 손익분기점 도달: 하드웨어 월 $83 vs GPT-5 API 월 $1,000. GDPR·HIPAA·SOC2 준수. RTX 5090 또는 vLLM",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llms-vs-cloud-apis-overview": {
    "en": {
      "title": "Local LLMs vs Cloud APIs: Which Should You Use in 2026?",
      "subtitle": "Local LLMs cost $0/token after hardware; cloud APIs cost $0.15-$60/1M tokens. Full 2026 comparison: ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLMs vs. Cloud-APIs: Was sollten Sie 2026 verwenden?",
      "subtitle": "Lokale LLMs kosten $0/Token nach Hardware; Cloud-APIs $0,15-$60/1 Mio. Tokens. 2026-Vergleich über 8",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLMs locaux vs APIs cloud : Que choisir en 2026 ?",
      "subtitle": "LLMs locaux : $0/token après le matériel ; APIs cloud : $0,15-$60/1M tokens. Comparaison 2026 : conf",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM vs クラウドAPI：2026年はどちらを選ぶべきか？",
      "subtitle": "ローカルLLMはハードウェア投資後$0/トークン；クラウドAPIは$0.15〜$60/100万トークン。プライバシー・コスト・品質を8つの要素で2026年完全比較。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM vs 云端API：2026年该如何选择？",
      "subtitle": "本地LLM硬件投资后每token费用为$0；云端API费用为$0.15-$60/百万token。2026年完整对比：隐私、成本、质量8大因素。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs locales vs APIs en la nube: ¿Cuál deberías usar en 2026?",
      "subtitle": "Los LLMs locales cuestan $0/token tras el hardware; las APIs cloud, $0.15–$60/1M tokens. Comparación",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais vs APIs na Nuvem: Qual Usar em 2026?",
      "subtitle": "LLMs locais custam $0/token após o hardware; APIs na nuvem custam $0,15–$60/1M tokens. Comparação 20",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية مقابل واجهات ⁨API⁩ السحابية: أيهما يجب أن تستخدم في ⁨2026⁩؟",
      "subtitle": "⁨LLM⁩ المحلية تكلّف ⁨0⁩$/رمز بعد العتاد؛ ⁨API⁩ السحابية بين ⁨0.15⁩$ و⁨60⁩$/مليون رمز. مقارنة ⁨2026⁩ ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM vs 클라우드 API: 2026년에는 무엇을 선택해야 합니까?",
      "subtitle": "로컬 LLM은 하드웨어 투자 후 토큰당 $0입니다. 클라우드 API는 1M 토큰당 $0.15~$60입니다. 2026년 전체 비교: 프라이버시, 비용, 속도, 품질 8가지 요소.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llms-vs-chatgpt-plus-overview": {
    "en": {
      "title": "Local LLMs vs ChatGPT Plus 2026: Full Cost Comparison Across 7 Pricing Tiers",
      "subtitle": "ChatGPT Plus: $20/mo = $720 over 3 years. Local Llama 3.3 70B on RTX 5060 Ti: $500 GPU + $90 power =",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLMs vs ChatGPT Plus 2026: Vollständiger Kostenvergleich über 7 Preisstufen",
      "subtitle": "Lokale LLMs vs. ChatGPT Plus 2026: Kostenvergleich über 3 Jahre, Datenschutz und Performance. Wann s",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLMs locaux vs ChatGPT Plus 2026 : Comparaison tarifaire complète sur 7 niveaux",
      "subtitle": "ChatGPT Plus : 20€/mois = 720€ sur 3 ans. LLM Llama 3.3 70B local sur RTX 5060 Ti : 600€ GPU + 90€ é",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM vs ChatGPT Plus 2026：7つの価格レベルの完全比較",
      "subtitle": "ChatGPT Plus：20€/月 = 3年間で約144,000円。RTX 5060 Ti 上のローカル Llama 3.3 70B：約94,800円 GPU + 22,500円電気代 = 約117",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM vs ChatGPT Plus 2026：7个价格级别完整对比",
      "subtitle": "ChatGPT Plus：$20/月 = 3年$720。RTX 5060 Ti本地Llama 3.3 70B：约$500 GPU + $90电费 = $590总计。平衡点14个月。7个ChatGPT级",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs locales vs ChatGPT Plus 2026: Comparación completa de costos en 7 niveles de precios",
      "subtitle": "ChatGPT Plus: $20/mes = $720 en 3 años. Llama 3.3 70B local en RTX 5060 Ti: $500 GPU + $90 luz = $59",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais vs ChatGPT Plus 2026: Comparação Completa de Custos em 7 Níveis de Preço",
      "subtitle": "ChatGPT Plus: $20/mês = $720 em 3 anos. Llama 3.3 70B local em RTX 5060 Ti: $500 GPU + $90 energia =",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية مقابل ⁨ChatGPT Plus 2026⁩: مقارنة تكاليف كاملة عبر ⁨7⁩ مستويات تسعير",
      "subtitle": "⁨ChatGPT Plus⁩ يكلّف ⁨720⁩$ في ⁨3⁩ سنوات. ⁨Llama 3.3 70B⁩ محلي على ⁨RTX 5060 Ti⁩: ⁨500⁩$ ⁨GPU + 90⁩$",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM vs ChatGPT Plus 2026: 7가지 요금제 완전 비용 비교",
      "subtitle": "ChatGPT Plus: $20/월 = 3년간 $720. RTX 5060 Ti의 로컬 Llama 3.3 70B: GPU $500 + 전기료 $90 = 총 $590. 손익분기점 14",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llms-vs-claude-pro-overview": {
    "en": {
      "title": "Local LLMs vs Claude Pro: Privacy, Cost, and Quality",
      "subtitle": "Claude Pro costs $20/month; a used RTX 4090 running Llama 3.3 70B breaks even after 4 years. Cost, p",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLMs vs Claude Pro: Datenschutz, Kosten und Qualität",
      "subtitle": "Lokale LLMs vs. Claude Pro 2026: Kosten, Datenschutz und Qualität. Wann lokale Modelle das $20/Monat",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLMs Locaux vs Claude Pro: Confidentialité, Coûts et Qualité",
      "subtitle": "Claude Pro coûte 20€/mois; une RTX 4090 d'occasion exécute Llama 3.3 70B et s'amortit après 4 ans. C",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM vs Claude Pro: プライバシー、コスト、品質比較",
      "subtitle": "Claude Proは月¥3,200; 中古RTX 4090でLlama 3.3 70Bを実行し、4年で回収できます。コスト、プライバシー、ベンチマーク、200Kコンテキストウィンドウ — 完全比較。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM vs Claude Pro: 隐私、成本与质量对比",
      "subtitle": "Claude Pro月$20；二手RTX 4090运行Llama 3.3 70B，4年收回成本。成本、隐私、基准、200K上下文窗口 — 完整比较。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs Locales vs Claude Pro: Privacidad, Costo y Calidad",
      "subtitle": "Claude Pro cuesta $20/mes; una RTX 4090 usada con Llama 3.3 70B recupera la inversión en 4 años. Cos",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais vs Claude Pro: Privacidade, Custo e Qualidade",
      "subtitle": "Claude Pro custa $20/mês; uma RTX 4090 usada com Llama 3.3 70B recupera o investimento em 4 anos. Cu",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية مقابل ⁨Claude Pro⁩: الخصوصية والتكلفة والجودة",
      "subtitle": "⁨Claude Pro⁩ بـ ⁨20⁩$/شهر؛ ⁨RTX 4090⁩ مستعملة مع ⁨Llama 3.3 70B⁩ تسترد استثمارها خلال ⁨4⁩ سنوات. مقا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM vs Claude Pro: 프라이버시, 비용, 품질 비교",
      "subtitle": "Claude Pro는 월 $20이며, 중고 RTX 4090으로 구동하는 Llama 3.3 70B는 4년 후 손익분기점에 도달합니다. 비용, 프라이버시, 벤치마크 점수, 200K 컨",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-vs-cloud-agents-overview": {
    "en": {
      "title": "Local vs Cloud AI Agents 2026: Cost, Speed, Privacy Comparison",
      "subtitle": "Cloud agents respond in 100–300ms but cost $20/1M tokens. Local agents take 2–5 sec but cost $0. Bre",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Local vs Cloud AI Agenten 2026: Kosten-, Geschwindigkeit- und Datenschutzvergleich",
      "subtitle": "Lokale vs. Cloud-KI-Agenten 2026: Datenschutz, Kosten und Fähigkeiten im Vergleich. Wann lokale Agen",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Agents IA Cloud vs Locaux 2026 : Comparaison des coûts, vitesse et confidentialité",
      "subtitle": "Agents Cloud répondent en 100–300ms, coûtent 18€/1M tokens. Agents locaux prennent 2–5 sec, coûtent ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Local vs Cloud AIエージェント2026: コスト・速度・プライバシー比較",
      "subtitle": "クラウドエージェント100–300ms応答、¥3,300/1M tokens。ローカルエージェント2–5秒、¥0。損益分岐点50M tokens/月。2026年完全比較ガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地 vs 云端AI代理2026: 成本、速度和隐私对比",
      "subtitle": "云端代理100–300ms响应，$20/1M令牌。本地代理2–5秒，$0。损益分界点50M令牌/月。2026完整比较指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Agentes de IA Local vs Cloud 2026: Comparativa de Coste, Velocidad y Privacidad",
      "subtitle": "Los agentes cloud responden en 100–300 ms pero cuestan $20/1M tokens; los locales tardan 2–5 s pero ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Agentes de IA Local vs Nuvem 2026: Comparação de Custo, Velocidade e Privacidade",
      "subtitle": "Agentes na nuvem respondem em 100–300 ms mas custam $20/1M tokens; os locais demoram 2–5 s mas custa",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "وكلاء الذكاء الاصطناعي المحليون مقابل السحابيين ⁨2026⁩: مقارنة التكلفة والسرعة والخصوصية",
      "subtitle": "الوكلاء السحابيون يستجيبون خلال ⁨100⁩–⁨300⁩ مللي ثانية بتكلفة ⁨20⁩$/مليون رمز. الوكلاء المحليون يستغ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 vs 클라우드 AI 에이전트 2026: 비용, 속도, 개인정보 보호 비교",
      "subtitle": "클라우드 에이전트는 100–300ms로 응답하지만 100만 토큰당 $20의 비용이 발생합니다. 로컬 에이전트는 2–5초가 소요되지만 비용은 $0입니다. 손익분기점은 월 5,000만",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-ai-agents-langgraph-ollama-overview": {
    "en": {
      "title": "Local AI Agents With LangGraph and Ollama: Build Autonomous Decision-Making Systems",
      "subtitle": "AI agents observe, reason, call tools, then repeat. LangGraph + Ollama run this locally — no API cos",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale KI-Agenten mit LangGraph und Ollama: Autonome Entscheidungsfindungssysteme bauen",
      "subtitle": "Lokale KI-Agenten mit LangGraph und Ollama bauen 2026: autonome Workflows ohne Cloud. Tool-Calling, ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Agents IA Locaux avec LangGraph et Ollama : Construire des Systèmes de Prise de Décision Autonomes",
      "subtitle": "Les agents IA observent, raisonnent, appellent des outils, puis répètent. LangGraph + Ollama fonctio",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "LangGraphとOllamaを使用したローカルAIエージェント：自律的な意思決定システムを構築する",
      "subtitle": "AIエージェントは観察し、推論し、ツールを呼び出し、繰り返します。LangGraph + Ollamaはローカルで実行 — APIコストなし、完全なデータ制御。構築と展開の方法を説明します。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "使用LangGraph和Ollama的本地AI智能体：构建自主决策系统",
      "subtitle": "AI智能体观察、推理、调用工具，然后重复。LangGraph + Ollama本地运行——零API成本、完全数据控制。以下是构建和部署的方法。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Agentes de IA Locales con LangGraph y Ollama: Construye Sistemas de Toma de Decisiones Autónomos",
      "subtitle": "Los agentes de IA observan, razonan, llaman herramientas y repiten. LangGraph + Ollama lo ejecutan e",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Agentes de IA Locais com LangGraph e Ollama: Construa Sistemas de Decisão Autônomos",
      "subtitle": "Agentes de IA observam, raciocinam, chamam ferramentas e repetem. LangGraph + Ollama executam tudo l",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "وكلاء الذكاء الاصطناعي المحليون باستخدام ⁨LangGraph⁩ و⁨Ollama⁩: بناء أنظمة اتخاذ قرار مستقلة",
      "subtitle": "⁨LangGraph + Ollama⁩ ينفذان حلقة المراقبة–الاستدلال–الأداة محليًا بلا تكاليف ⁨API⁩. دليل خطوة بخطوة ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "LangGraph와 Ollama로 구축하는 로컬 AI 에이전트: 자율 의사결정 시스템 구축 가이드",
      "subtitle": "AI 에이전트는 관찰하고, 추론하며, 도구를 호출한 후 반복합니다. LangGraph + Ollama는 이를 로컬에서 실행합니다 — API 비용 없음, 완전한 데이터 제어. 구축 ",
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

