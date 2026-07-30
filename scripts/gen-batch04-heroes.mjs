#!/usr/bin/env node
const BASE = 'http://localhost:3059';
const SPECS = {
  "lm-studio-vs-jan-ai-overview": {
    "en": {
      "title": "Jan AI vs LM Studio: Which Is Better for Local LLMs?",
      "subtitle": "Jan AI vs LM Studio June 2026: Feature comparison, privacy, UI, API support. LM Studio 0.4.16 vs Jan",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Jan AI vs LM Studio: Welches ist besser für lokale LLMs?",
      "subtitle": "Jan AI: Open-Source, datenschutzorientiert, Plugins. LM Studio: einfaches Setup, HuggingFace-Suche, ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Jan AI vs LM Studio : Lequel choisir pour les LLM locaux ?",
      "subtitle": "Jan AI : open-source, confidentialité, plugins. LM Studio : installation rapide, HuggingFace intégré",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Jan AI vs LM Studio：ローカルLLMにはどちらが優れているか？",
      "subtitle": "Jan AIはオープンソース、プライバシー重視、プラグイン対応。LM Studioは初心者向けで高速セットアップ。比較ガイド2026。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Jan AI vs LM Studio：哪款本地LLM应用更好用？",
      "subtitle": "Jan AI开源隐私优先，插件丰富。LM Studio简洁易用，初学者首选。性能、功能、隐私全面对比。2026年决策指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Jan AI vs LM Studio: ¿Cuál es mejor para LLMs locales?",
      "subtitle": "Jan AI vs LM Studio: compara funciones, privacidad, interfaz y soporte API. ¿Qué app LLM de escritor",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Jan AI vs LM Studio: Qual é melhor para LLMs locais?",
      "subtitle": "Jan AI vs LM Studio: compare recursos, privacidade, interface e suporte a API. Qual app LLM desktop ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Jan AI⁩ مقابل ⁨LM Studio⁩: أيهما أفضل لنماذج ⁨LLM⁩ المحلية؟",
      "subtitle": "⁨LM Studio⁩ أفضل للمبتدئين: واجهة أبسط وبحث ⁨HuggingFace⁩ مدمج. ⁨Jan AI⁩ للمطورين: مفتوح المصدر وبلا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Jan AI vs LM Studio: 로컬 LLM에 어느 것이 더 적합합니까?",
      "subtitle": "Jan AI vs LM Studio: 기능 비교, 프라이버시, UI, API 지원. 어느 로컬 LLM 데스크톱 앱이 더 낫습니까? 2026년 4월 리뷰.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-gpus-for-local-llms-overview": {
    "en": {
      "title": "Best GPUs for Local LLMs in 2026: Complete Benchmark and Selection Guide",
      "subtitle": "Best budget GPUs for local LLMs 2026: RTX 4090, 4080, 4070 Ti, 4060 Ti. Benchmarks on VRAM, power, c",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Die besten GPUs für lokale LLMs 2026: Kompletter Benchmark- und Auswahlführer",
      "subtitle": "Beste GPUs für lokale LLMs 2026: RTX 4090, 4080, 4070 Ti. Benchmarks zu VRAM, Stromverbrauch, Kosten",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Les meilleurs GPU pour LLMs locaux 2026 : Guide complet de benchmark et de sélection",
      "subtitle": "Meilleurs GPU budgétaires pour LLMs locaux 2026 : RTX 4090, 4080, 4070 Ti, 4060 Ti. Benchmarks VRAM,",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM向け最高のGPU 2026年：完全なベンチマーク・選択ガイド",
      "subtitle": "2026年のローカルLLM向け予算GPU：RTX 4090、4080、4070 Ti、4060 Ti。VRAM、消費電力、コスト、性能のベンチマーク。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年本地LLM最佳GPU完整指南：基准测试和选择建议",
      "subtitle": "2026年本地LLM最佳GPU：RTX 4090、4080、4070 Ti、4060 Ti。包括VRAM、功耗、成本和每美元性能基准。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Las mejores GPUs para LLMs locales en 2026: Guía completa de benchmarks y selección",
      "subtitle": "Mejores GPUs para LLMs locales 2026: RTX 4090, 4080, 4070 Ti, 4060 Ti. Benchmarks de VRAM, consumo, ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "As melhores GPUs para LLMs locais em 2026: guia completo de benchmarks e seleção",
      "subtitle": "Melhores GPUs para LLMs locais 2026: RTX 4090, 4080, 4070 Ti, 4060 Ti. Benchmarks de VRAM, consumo, ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل بطاقات ⁨GPU⁩ لنماذج ⁨LLM⁩ المحلية في ⁨2026⁩: دليل شامل للقياسات والاختيار",
      "subtitle": "⁨RTX 4090⁩ (⁨24GB VRAM⁩) تشغّل نماذج ⁨70B Q4⁩ بـ ⁨50-60⁩ رمزًا/ث وهي الأسرع للاستدلال المحلي. مقارنة",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 로컬 LLM을 위한 최고의 GPU: 완전한 벤치마크 및 선택 가이드",
      "subtitle": "2026년 로컬 LLM을 위한 최고의 GPU: RTX 4090, 4080, 4070 Ti, 4060 Ti. VRAM, 전력, 비용, 달러당 성능 벤치마크.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "minisforum-um890-pro-local-ai-review-overview": {
    "en": {
      "title": "Minisforum UM890 Pro Review (2026): Local AI Home Server",
      "subtitle": "Minisforum UM890 Pro review 2026: Ryzen 9 8945HS, Radeon 780M, up to 96 GB DDR5, OCuLink eGPU, dual ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Minisforum UM890 Pro Test (2026): Lokaler-KI-Heimserver",
      "subtitle": "Minisforum UM890 Pro Test 2026: Ryzen 9 8945HS, Radeon 780M, bis zu 96 GB DDR5, OCuLink-eGPU, zwei 2",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Test Minisforum UM890 Pro (2026) : serveur IA local",
      "subtitle": "Test Minisforum UM890 Pro 2026 : Ryzen 9 8945HS, Radeon 780M, jusqu'à 96 GB DDR5, eGPU OCuLink, deux",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Minisforum UM890 Pro レビュー（2026）: ローカルAIホームサーバー",
      "subtitle": "Minisforum UM890 Pro レビュー2026: Ryzen 9 8945HS、Radeon 780M、最大96 GB DDR5、OCuLink eGPU、2基の2.5GbE。Home A",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Minisforum UM890 Pro 评测（2026）：本地 AI 家庭服务器",
      "subtitle": "Minisforum UM890 Pro 评测 2026：Ryzen 9 8945HS、Radeon 780M、最高 96 GB DDR5、OCuLink eGPU、双 2.5GbE。运行 Home ",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Análisis Minisforum UM890 Pro (2026): servidor de IA local",
      "subtitle": "Análisis Minisforum UM890 Pro 2026: Ryzen 9 8945HS, Radeon 780M, hasta 96 GB DDR5, eGPU OCuLink, dos",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Análise Minisforum UM890 Pro (2026): servidor de IA local",
      "subtitle": "Análise Minisforum UM890 Pro 2026: Ryzen 9 8945HS, Radeon 780M, até 96 GB DDR5, eGPU OCuLink, duas 2",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "مراجعة Minisforum UM890 Pro (2026): خادم منزلي بذكاء اصطناعي محلي",
      "subtitle": "مراجعة Minisforum UM890 Pro 2026: Ryzen 9 8945HS، وRadeon 780M، وحتى 96 GB DDR5، وeGPU عبر OCuLink، ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Minisforum UM890 Pro 리뷰(2026): 로컬 AI 홈 서버",
      "subtitle": "Minisforum UM890 Pro 리뷰 2026: Ryzen 9 8945HS, Radeon 780M, 최대 96 GB DDR5, OCuLink eGPU, 듀얼 2.5GbE. H",
      "footer": "PromptQuorum 가이드"
    }
  },
  "system-prompt-vs-user-prompt-overview": {
    "en": {
      "title": "System Prompt vs User Prompt: What's the Difference in 2026",
      "subtitle": "System prompt vs user prompt: one controls AI behavior for the entire session, one drives each turn.",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "System Prompt vs User Prompt: Der Unterschied in 2026",
      "subtitle": "System Prompts legen das KI-Verhalten fest; User Prompts steuern jede Anfrage. Unterschied, Interakt",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Prompt Système vs Prompt Utilisateur : Quelle est la Différence en 2026",
      "subtitle": "Les prompts système définissent le comportement IA. Les prompts utilisateur gèrent chaque requête. D",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "システムプロンプト対ユーザープロンプト：違いとは",
      "subtitle": "システムプロンプトはAIの役割・制約・出力形式をセッション全体で設定します。ユーザープロンプトはリクエストごとの具体的なタスクを定義します。API構造の違い、GPT-5.6とClaude Sonnet",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "系统提示词 vs 用户提示词：2026 年的区别",
      "subtitle": "系统提示词定义 AI 的行为。用户提示词处理每次请求。关键区别与 GPT-5.6 和 Claude 的示例。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "System Prompt vs User Prompt: La diferencia en 2026",
      "subtitle": "Los system prompts definen el comportamiento de la IA. Los user prompts gestionan cada solicitud. Di",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "System Prompt vs User Prompt: A Diferença em 2026",
      "subtitle": "System prompts definem o comportamento da IA para toda a sessão; user prompts gerenciam cada solicit",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨System Prompt⁩ مقابل ⁨User Prompt⁩: الفرق في ⁨2026⁩",
      "subtitle": "⁨System prompts⁩ تُحدد ⁨70%⁩ من ثبات مخرجات ⁨LLMs⁩. تعلّم الفرق بين ⁨system prompt⁩ و⁨user prompt⁩ و",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "시스템 프롬프트 vs 사용자 프롬프트: 2026년 기준 차이점",
      "subtitle": "시스템 프롬프트 vs 사용자 프롬프트: 하나는 세션 전체의 AI 동작을 제어하고, 하나는 각 턴을 이끕니다. API 예제 및 디버그 패턴 포함.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "google-prompting-guide-overview": {
    "en": {
      "title": "Google's Prompting Guide",
      "subtitle": "Master Google's 5 prompting principles: clarity, constraints, examples, roles, structure.",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Google Prompting Guide",
      "subtitle": "Beherrsche Googles 5 Prompting-Prinzipien: Klarheit, Struktur, Beispiele, Rollen, Beschränkungen. Au",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Guide Google pour la Rédaction de Prompts",
      "subtitle": "Maîtrisez les 5 principes Google : clarté, structure, exemples, rôles, contraintes. Appliquez sur Ge",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Googleプロンプト作成ガイド",
      "subtitle": "Googleの5つの原則を習得：明確さ・構造・例・ロール・制約。Gemini、GPT-5.5、Claude、ローカルモデルで実践します。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Google提示词撰写指南",
      "subtitle": "掌握Google 5大提示词原则：明确性、结构、例子、角色、约束。在Gemini、GPT-5.5、Claude和本地模型上实践。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "La Guía de Prompts de Google",
      "subtitle": "Domina los 5 principios de prompts de Google: claridad, restricciones, ejemplos, roles y estructura.",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Guia de Prompts do Google",
      "subtitle": "Domine os 5 princípios de prompts do Google: clareza, restrições, exemplos, papéis, estrutura. Apliq",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "دليل ⁨Google⁩ للمطالبات",
      "subtitle": "⁨5⁩ مبادئ من ⁨Google⁩ (وضوح، بنية، أمثلة، أدوار، قيود) تُقلّل أخطاء النماذج ⁨40⁩–⁨60%⁩. طبّقها على ⁨",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Google 프롬프팅 가이드",
      "subtitle": "Google의 5가지 프롬프팅 원칙(명확성, 제약, 예시, 역할, 구조)을 마스터하십시오. Gemini, GPT-5.5, Claude 및 로컬 모델에 적용하여 예측 가능한 출력을 ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "vram-calculator-local-llm-overview": {
    "en": {
      "title": "VRAM Calculator 2026: 7B/13B/70B LLM GPU Requirements (Q4, Q5, Q8)",
      "subtitle": "Interactive VRAM calculator: Calculate exact GPU requirements for 7B (3.5 GB Q4), 13B (6.5 GB Q4), 7",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "VRAM-Rechner 2026: GPU-Anforderungen für 7B/13B/70B LLMs (Q4, Q5, Q8)",
      "subtitle": "Interaktiver VRAM-Rechner 2026: GPU-Bedarf für 7B (3,5 GB Q4), 13B (6,5 GB), 70B (35 GB) berechnen. ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Calculateur VRAM 2026 : Exigences GPU pour LLMs 7B/13B/70B (Q4, Q5, Q8)",
      "subtitle": "Calculateur VRAM interactif : calculez les exigences GPU exactes pour LLMs 7B (3.5 Go Q4), 13B (6.5 ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "VRAMカリキュレーター2026：7B/13B/70B LLMのGPU要件（Q4、Q5、Q8）",
      "subtitle": "インタラクティブVRAMカリキュレーター：7B（Q4で3.5 GB）、13B（Q4で6.5 GB）、70B（Q4で35 GB）LLMの正確なGPU要件を計算。RTX 4090、4080、4070 Ti",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "VRAM计算器2026：7B/13B/70B LLM的GPU显存需求（Q4、Q5、Q8）",
      "subtitle": "交互式VRAM计算器：精确计算7B（Q4需3.5 GB）、13B（Q4需6.5 GB）、70B（Q4需35 GB）LLM的GPU需求。验证RTX 4090、4080、4070 Ti适配性。支持Q4/Q",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Calculadora de VRAM 2026: Requisitos de GPU para LLMs 7B/13B/70B (Q4, Q5, Q8)",
      "subtitle": "Calcula los requisitos exactos de GPU para LLMs de 7B (3,5 GB en Q4), 13B (6,5 GB en Q4) y 70B (35 G",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Calculadora de VRAM 2026: Requisitos de GPU para LLMs 7B/13B/70B (Q4, Q5, Q8)",
      "subtitle": "Calcule os requisitos exatos de GPU para LLMs de 7B (3,5 GB em Q4), 13B (6,5 GB em Q4) e 70B (35 GB ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "حاسبة ⁨VRAM 2026⁩: متطلبات ⁨GPU⁩ لنماذج ⁨LLM 7B/13B/70B⁩ (⁨Q4⁩، ⁨Q5⁩، ⁨Q8⁩)",
      "subtitle": "احسب متطلبات ⁨GPU⁩ الدقيقة لنماذج ⁨7B⁩ (⁨3.5 GB⁩ بـ ⁨Q4⁩) و⁨13B⁩ (⁨6.5 GB⁩ بـ ⁨Q4⁩) و⁨70B⁩ (⁨35 GB⁩ ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "VRAM 계산기 2026: 7B/13B/70B LLM GPU 요구 사항 (Q4, Q5, Q8)",
      "subtitle": "인터랙티브 VRAM 계산기: 7B(Q4 3.5GB), 13B(6.5GB), 70B(35GB) LLM GPU 요구 사항 계산. RTX 4090/4080/4070 Ti 적합 여부와 Q",
      "footer": "PromptQuorum 가이드"
    }
  },
  "laptop-vs-desktop-local-llm-overview": {
    "en": {
      "title": "Laptop vs Desktop for Local LLMs: 7× Cost Gap, Thermal Throttling Data & 2026 Buying Guide",
      "subtitle": "Desktop RTX 4070 Ti: 80 tok/sec sustained at $19/tok/sec. MacBook M5 Max: 55-70 tok/sec (est.), thro",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Laptop vs. Desktop für lokale LLMs 2026: Kosten, Geschwindigkeit & 70B-Fähigkeit",
      "subtitle": "RTX 4070 Ti: 80 Tok/Sek, 21 €/Tok/Sek. MacBook M4 Max: 35 Tok/Sek, Drosselung nach 18 Min. 70B-Model",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Laptop vs bureau pour les LLMs locaux 2026 : coût, vitesse & capacité 70B",
      "subtitle": "RTX 4070 Ti : 80 tok/s, 21 €/tok/s. MacBook M4 Max : 35 tok/s, throttling après 18 min. Modèles 70B ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM向けラップトップ vs デスクトップ 2026：コスト・速度・70B対応能力",
      "subtitle": "RTX 4070 Ti：80トークン/秒、コスト19ドル/トークン/秒。MacBook M4 Max：35トークン/秒（18分後にスロットリング）、約100ドル/トークン/秒。70Bモデルの実行にはデ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM笔记本 vs 台式机 2026：成本、速度与70B模型能力",
      "subtitle": "RTX 4070 Ti：80令牌/秒，成本19美元/令牌/秒。MacBook M4 Max：35令牌/秒（18分钟后降频），约100美元/令牌/秒。运行70B模型需要台式机或Mac Studio M2",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Laptop vs escritorio para LLMs locales: brecha de costo 7×, datos de throttling térmico y guía de compra 2026",
      "subtitle": "Escritorio RTX 4070 Ti: 80 tok/s sostenidos a $19/tok/s. MacBook M5 Max: 55–70 tok/s, con throttling",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Laptop vs desktop para LLMs locais: diferença de custo 7×, dados de throttling térmico e guia de compra 2026",
      "subtitle": "Desktop RTX 4070 Ti: 80 tok/s sustentados a $19/tok/s. MacBook M5 Max: 55–70 tok/s, com throttling a",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "الحاسوب المحمول مقابل المكتبي لنماذج ⁨LLM⁩ المحلية: فجوة تكلفة ⁨7⁩×، بيانات الاختناق الحراري ودليل الشراء ⁨2026⁩",
      "subtitle": "مكتبي ⁨RTX 4070 Ti⁩ يُنتج ⁨80 tok/s⁩ مستدامة بـ ⁨19⁩$/⁨tok/s⁩؛ ⁨MacBook M5 Max⁩ يختنق بعد ⁨18⁩ دقيقة",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM용 노트북 vs 데스크톱: 7배 비용 차이, 열 제한 데이터 및 2026 구매 가이드",
      "subtitle": "데스크톱 RTX 4070 Ti: 지속 80 tok/s, tok/s당 $19. MacBook M5 Max: 55-70 tok/s, 15-18분 후 스로틀링, tok/s당 $100. ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "balkonkraftwerk-germany-rules-overview": {
    "en": {
      "title": "Balkonkraftwerk Rules in Germany: The Complete 2026 Guide",
      "subtitle": "Germany updated its Balkonkraftwerk rules in 2026 — a new inverter cap, a registration step people s",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Balkonkraftwerk in Deutschland: Der vollständige Ratgeber 2026",
      "subtitle": "Deutschland hat die Balkonkraftwerk-Regeln 2026 geändert: eine neue Wechselrichter-Grenze, ein Anmel",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Règles du Balkonkraftwerk en Allemagne : le guide complet 2026",
      "subtitle": "L'Allemagne a mis à jour les règles du Balkonkraftwerk en 2026 : un nouveau plafond d'onduleur, une ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ドイツのBalkonkraftwerkルール：2026年完全ガイド",
      "subtitle": "ドイツは2026年にBalkonkraftwerkのルールを改定した — インバーター出力の新しい上限、見落とすと罰則につながる登録手続き、設置できる機器を変える新しいDIN規格。一次法的文書に基づき",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "德国Balkonkraftwerk规定：2026年完整指南",
      "subtitle": "德国在2026年更新了Balkonkraftwerk规定——新的逆变器输出上限、一个常被忽略却会被罚款的注册步骤,以及一项改变了可安装设备范围的新DIN标准。已核对一手法律文本。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Normas del Balkonkraftwerk en Alemania: La guía completa 2026",
      "subtitle": "Alemania actualizó las normas del Balkonkraftwerk en 2026: un nuevo límite en el inversor, un paso d",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Regras do Balkonkraftwerk na Alemanha: O Guia Completo 2026",
      "subtitle": "A Alemanha atualizou as regras do Balkonkraftwerk em 2026: um novo limite no inversor, uma etapa de ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "قواعد Balkonkraftwerk في ألمانيا: الدليل الكامل 2026",
      "subtitle": "حدّثت ألمانيا قواعد Balkonkraftwerk في 2026: حد جديد لخرج العاكس، وخطوة تسجيل يتجاهلها كثيرون فتتم م",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "독일 Balkonkraftwerk 규정: 2026년 완전 가이드",
      "subtitle": "독일이 2026년 Balkonkraftwerk 규정을 개정했다 — 새로워진 인버터 출력 상한, 놓치면 과태료로 이어지는 등록 절차, 설치 가능 기기를 바꾸는 새 DIN 규격까지. ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "prompting-across-languages-overview": {
    "en": {
      "title": "Prompting Across Languages: How to Get Consistent Results",
      "subtitle": "LLMs trained on ~46% English underperform in French, German, Japanese, Arabic. Learn which models ha",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Prompting in verschiedenen Sprachen: Konsistente KI-Ergebnisse in jeder Sprache",
      "subtitle": "Mehrsprachiges KI-Prompting: Modell-Vergleich für Deutsch, Französisch, Japanisch, Arabisch — plus T",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Prompts Multilingues : Obtenir des Résultats Cohérents dans Chaque Langue",
      "subtitle": "Prompts multilingues : comparatif des modèles IA pour le français, japonais, arabe — coûts tokens, s",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "多言語プロンプティング：あらゆる言語で一貫した結果を得る方法",
      "subtitle": "多言語LLMプロンプティング：日本語・アラビア語・フランス語でのモデル比較、tokenコスト差、system prompt戦略と典型的なミスを解説します。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "多语言提示工程：在任何语言中获得一致的AI结果",
      "subtitle": "多语言LLM提示：中文、日文、阿拉伯文的模型对比、token成本差异、系统提示策略及常见错误——企业级多语言AI应用实战指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Prompting en Diferentes Idiomas: Cómo Obtener Resultados Coherentes",
      "subtitle": "Los LLMs, entrenados en ~46 % de inglés, rinden peor en francés, alemán, japonés y árabe. Qué modelo",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Prompting em Diferentes Idiomas: Como Obter Resultados Consistentes",
      "subtitle": "LLMs treinados em ~46% de inglês têm desempenho inferior em francês, alemão, japonês e árabe. Quais ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "كتابة البرومبت بلغات مختلفة: كيف تحصل على نتائج متسقة",
      "subtitle": "نماذج ⁨LLM⁩ دُرِّبت على ~⁨46%⁩ إنجليزي — أداؤها أضعف في العربية واليابانية والفرنسية. أفضل النماذج ل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "다국어 프롬프팅: 모든 언어에서 일관된 결과를 얻는 방법",
      "subtitle": "LLM은 약 46% 영어 데이터로 학습되어 프랑스어, 독일어, 일본어, 아랍어에서 성능이 저하됩니다. 각 언어에 최적화된 모델과 다국어 프롬프트 작성법을 학습하십시오.",
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

