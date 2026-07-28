#!/usr/bin/env node
// One-off generator for batch-03 article hero images.
const BASE = 'http://localhost:3057';
const SPECS = {
  "local-llms-mobile-local-llms-overview": {
    "en": {
      "title": "Mobile Local LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X",
      "subtitle": "MLC LLM vs Ollama for Android: MLC Chat runs on-device (Play Store), Ollama needs a desktop server. ",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Mobile lokale LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X",
      "subtitle": "Beste lokale LLM-Apps für Android und iOS 2026: MLC LLM, PocketPal AI und Ollama. Modelle auf dem Sm",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLMs locaux mobiles 2026 : iPhone 16 Pro, iPad M4 & Snapdragon X",
      "subtitle": "Top apps LLM mobiles pour Android (MLC LLM, PocketPal AI 500K+ téléchargements) & iOS (Ollama iOS, P",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "モバイル向けローカルLLM 2026：iPhone 16 Pro・iPad M4・Snapdragon X",
      "subtitle": "Android向けトップモバイルLLMアプリ（MLC LLM、PocketPal AI 50万ダウンロード以上）& iOS（Ollama iOS、Private LLM）。iPhone 1–3B、Sn",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "移动本地LLM 2026：iPhone 16 Pro、iPad M4与Snapdragon X对比",
      "subtitle": "Android顶级移动LLM应用（MLC LLM、PocketPal AI 50万+下载量）与iOS（Ollama iOS、Private LLM）。iPhone 1–3B，Snapdragon X ",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs locales en móviles 2026: iPhone 16 Pro, iPad M4 y Snapdragon X",
      "subtitle": "MLC LLM y PocketPal AI (500K+ descargas) en Android; Ollama iOS y Private LLM en iPhone. Ejecuta Lla",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais em Celulares 2026: iPhone 16 Pro, iPad M4 e Snapdragon X",
      "subtitle": "Top apps de LLM móvel: MLC LLM e PocketPal AI (500K+ downloads) no Android; Ollama iOS e Private LLM",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية على الهواتف ⁨2026⁩: ⁨iPhone 16 Pro⁩ و⁨iPad M4⁩ و⁨Snapdragon X⁩",
      "subtitle": "تطبيقات ⁨LLM⁩ للهواتف: ⁨MLC LLM⁩ و⁨PocketPal AI⁩ (⁨500K⁩+ تنزيل) على ⁨Android⁩؛ ⁨Ollama iOS⁩ و⁨Priva",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "모바일 로컬 LLM 2026: iPhone 16 Pro, iPad M4 & Snapdragon X",
      "subtitle": "Android(MLC LLM, PocketPal AI — 50만 다운로드 이상) & iOS(Ollama iOS, Private LLM)용 최고의 모바일 LLM 앱. iPhone에서",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-model-updates-2026-overview": {
    "en": {
      "title": "Local LLM Model Updates 2026: Every Major Open-Weight Release This Year",
      "subtitle": "Local LLM model updates 2026: Gemma 3, Llama 4 Scout, Q1 releases tracked with specs, MMLU benchmark",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLM-Modell-Updates 2026: Alle großen Open-Weight-Releases dieses Jahr",
      "subtitle": "Lokale LLM-Updates 2026: Gemma 3 (Feb), Llama 4 Scout (Mrz) und 4 Q1-Releases mit Spezifikationen, M",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Mises à jour des LLM locaux 2026 : Chaque release open-weight majeure de l'année",
      "subtitle": "Mises à jour LLM locaux 2026: Gemma 3, Llama 4 Scout, Q1 releases avec spécifications, benchmarks MM",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMモデルアップデート2026年：すべての大型オープンウェイトリリース",
      "subtitle": "ローカルLLMモデル更新2026：Gemma 3、Llama 4 Scout、Q1発布4件追跡、規格・MMUベンチマーク・Ollama対応。2026年4月。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM模型更新2026年：所有大型开源权重发布",
      "subtitle": "本地LLM模型更新2026：Gemma 3（2月）、Llama 4 Scout（3月）等6款Q1发布，含规格、MMLU基准和Ollama命令。2026年4月更新。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Actualizaciones de modelos LLM locales 2026: Todos los lanzamientos open-weight importantes del año",
      "subtitle": "Actualizaciones de LLM locales 2026: Gemma 3, Llama 4 Scout y lanzamientos del Q1 con especificacion",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Atualizações de modelos LLM locais 2026: Todos os grandes lançamentos open-weight do ano",
      "subtitle": "Atualizações de LLM local 2026: Gemma 3 (fev), Llama 4 Scout (mar) e 4 lançamentos do T1 com especif",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تحديثات نماذج ⁨LLM⁩ المحلية ⁨2026⁩: جميع الإصدارات مفتوحة الأوزان المهمة في العام",
      "subtitle": "⁨Gemma 3⁩ و⁨Llama 4 Scout⁩ و⁨Qwen3⁩ و⁨DeepSeek-R1⁩ — أبرز إصدارات نماذج ⁨LLM⁩ المفتوحة في ⁨2026⁩ بال",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 모델 업데이트 2026: 올해 출시된 주요 오픈 웨이트 모델 총정리",
      "subtitle": "로컬 LLM 모델 업데이트 2026: Gemma 3, Llama 4 Scout, Q1 출시 모델을 사양, MMLU 벤치마크, Ollama 지원 여부와 함께 정리했습니다. 2026년",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llm-one-click-installers-overview": {
    "en": {
      "title": "Ollama vs LM Studio vs Jan AI vs GPT4All: Which Local LLM Installer in 2026? (Comparison + Install Guide)",
      "subtitle": "Side-by-side comparison of Ollama, LM Studio, Jan AI, GPT4All and raw llama.cpp for 2026 — interface",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLM One-Click-Installer: Ollama vs LM Studio vs Jan AI vs GPT4All im Vergleich",
      "subtitle": "Vergleich von Ollama, LM Studio, Jan AI, GPT4All und reinem llama.cpp für 2026 – Oberfläche, Modella",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Installateurs LLM locaux One-Click : Ollama vs LM Studio vs Jan AI vs GPT4All comparés",
      "subtitle": "Comparatif 2026 d'Ollama, LM Studio, Jan AI, GPT4All et llama.cpp brut : interface, nombre de modèle",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLM One-Clickインストーラー：Ollama vs LM Studio vs Jan AI vs GPT4All 比較",
      "subtitle": "Ollama・LM Studio・Jan AI・GPT4All・素の llama.cpp を2026年版で比較。UI、モデル数、APIポート、プライバシー、インストール手順、用途別の選び方を解説。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地LLM一键安装器对比：Ollama vs LM Studio vs Jan AI vs GPT4All",
      "subtitle": "2026 年 Ollama、LM Studio、Jan AI、GPT4All 与原生 llama.cpp 全面对比：界面、模型数量、API 端口、隐私、安装命令，以及该如何选择。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Ollama vs LM Studio vs Jan AI vs GPT4All: ¿Cuál instalador de LLM local elegir en 2026? (Comparativa + Guía de instalación)",
      "subtitle": "Comparativa 2026 de Ollama, LM Studio, Jan AI, GPT4All y llama.cpp puro: interfaz, número de modelos",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Ollama vs LM Studio vs Jan AI vs GPT4All: Qual instalador de LLM local escolher em 2026?",
      "subtitle": "Comparação 2026 de Ollama, LM Studio, Jan AI, GPT4All e llama.cpp puro: interface, número de modelos",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨Ollama⁩ مقابل ⁨LM Studio⁩ مقابل ⁨Jan AI⁩ مقابل ⁨GPT4All⁩: أي مثبّت ⁨LLM⁩ محلي تختار في ⁨2026⁩؟ (مقارنة + دليل تثبيت)",
      "subtitle": "مقارنة ⁨2026⁩ بين ⁨Ollama⁩ و⁨LM Studio⁩ و⁨Jan AI⁩ و⁨GPT4All⁩ و⁨llama.cpp⁩ الخام: الواجهة وعدد النماذ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Ollama vs LM Studio vs Jan AI vs GPT4All: 2026년 최고의 로컬 LLM 설치 도구는? (비교 + 설치 가이드)",
      "subtitle": "2026년 Ollama·LM Studio·Jan AI·GPT4All·순수 llama.cpp 비교: 인터페이스, 모델 수, API 포트, 프라이버시, 설치 명령, 용도별 선택 가이드",
      "footer": "PromptQuorum 가이드"
    }
  },
  "gpu-vs-cpu-vs-apple-silicon-overview": {
    "en": {
      "title": "GPU vs CPU vs Apple Silicon for Local LLMs 2026: Which Wins?",
      "subtitle": "NVIDIA RTX 50-series vs Apple M5 vs CPU-only for local LLMs — real speed comparisons, power draw, an",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "GPU vs CPU vs Apple Silicon für lokale LLMs 2026: Was gewinnt?",
      "subtitle": "NVIDIA RTX 50 vs Apple M5 vs nur CPU für lokale LLMs — Geschwindigkeit, Stromverbrauch, Kosten pro T",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "GPU vs CPU vs Apple Silicon pour les LLM locaux 2026 : Lequel gagne ?",
      "subtitle": "NVIDIA RTX 50 vs Apple M5 vs CPU seul pour les LLM locaux — comparaisons de vitesse, consommation et",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "GPU vs CPU vs Apple Silicon ローカルLLM 2026：どれが勝つ？",
      "subtitle": "Apple M5 vs NVIDIA RTX 50 vs CPUのみ — ローカルLLMの実速度、消費電力、tok/s当たりコスト比較。2026年版。MacユーザーにはApple Siliconが断然",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "GPU vs CPU vs Apple Silicon 本地大模型 2026：哪个更强？",
      "subtitle": "Apple M5 vs NVIDIA RTX 50 vs 仅CPU — 本地大模型实际速度、功耗、每Tok/s成本对比（2026年版）。Qwen3在Apple MLX上有优化。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "GPU vs CPU vs Apple Silicon para LLMs locales 2026: ¿Cuál gana?",
      "subtitle": "NVIDIA RTX 50 vs Apple M5 vs solo CPU para LLMs locales — comparativas de velocidad, consumo y coste",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "GPU vs CPU vs Apple Silicon para LLMs locais 2026: Qual vence?",
      "subtitle": "NVIDIA RTX 50 vs Apple M5 vs somente CPU para LLMs locais — comparações reais de velocidade, consumo",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨GPU⁩ مقابل ⁨CPU⁩ مقابل ⁨Apple Silicon⁩ لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: أيها يفوز؟",
      "subtitle": "⁨NVIDIA RTX 50⁩ مقابل ⁨Apple M5⁩ مقابل ⁨CPU⁩ فقط لنماذج ⁨LLM⁩ المحلية — مقارنات سرعة حقيقية واستهلاك",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "GPU vs CPU vs Apple Silicon 로컬 LLM 2026: 어느 것이 이기나?",
      "subtitle": "NVIDIA RTX 50 vs Apple M5 vs CPU만 — 로컬 LLM 실제 속도, 전력 소비, tok/s당 비용 비교 (2026). 예산별 명확한 승자.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-arabic-local-llms-2026-overview": {
    "en": {
      "title": "Best Arabic Local LLMs: Jais, Falcon & Running Arabic AI On-Premise (2026)",
      "subtitle": "Compare Jais 30B, Falcon Arabic 7B and Qwen3-8B, the top Arabic local LLMs in 2026. VRAM table, on-p",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste arabische lokale LLMs: Jais, Falcon und arabische KI On-Premise betreiben (2026)",
      "subtitle": "Jais 30B, Falcon Arabic 7B und Qwen3-8B im Vergleich: die besten arabischen lokalen LLMs 2026. Mit V",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs LLM locaux arabophones : Jais, Falcon et exécution de l'IA arabe sur site (2026)",
      "subtitle": "Jais 30B, Falcon Arabic 7B et Qwen3-8B : les meilleurs LLM locaux arabophones en 2026. Tableau VRAM,",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ベストなアラビア語対応ローカルLLM：Jais、Falcon、オンプレミスでのアラビア語AI実行（2026）",
      "subtitle": "Jais 30B・Falcon Arabic 7B・Qwen3-8Bが2026年のベストなアラビア語ローカルLLM。VRAM表、オンプレミス設定、品質評価のコツを解説。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "最佳阿拉伯语本地LLM：Jais、Falcon 及在本地运行阿拉伯语 AI（2026）",
      "subtitle": "Jais 30B、Falcon Arabic 7B、Qwen3-8B 是 2026 年最佳阿拉伯语本地 LLM。含 VRAM 表、本地部署指南与质量评估建议。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejores LLM locales en árabe: Jais, Falcon y ejecutar IA árabe on-premise (2026)",
      "subtitle": "Jais 30B, Falcon Arabic 7B y Qwen3-8B son los mejores LLM locales en árabe en 2026. Tabla de VRAM, g",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores LLMs locais em árabe: Jais, Falcon e IA em árabe on-premise (2026)",
      "subtitle": "Jais 30B, Falcon Arabic 7B e Qwen3-8B são os melhores LLMs locais em árabe em 2026. Tabela de VRAM, ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نماذج ⁨LLM⁩ العربية المحلية: ⁨Jais⁩ و⁨Falcon⁩ وتشغيل الذكاء الاصطناعي العربي داخل المؤسسة (⁨2026⁩)",
      "subtitle": "نماذج الذكاء الاصطناعي العربية المحلية: ⁨Jais 30B⁩ و⁨Falcon Arabic 7B⁩ و⁨Qwen3-8B⁩ الأفضل في ⁨2026⁩.",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "최고의 아랍어 로컬 LLM: Jais, Falcon 및 아랍어 AI 온프레미스 실행 (2026)",
      "subtitle": "Jais 30B, Falcon Arabic 7B, Qwen3-8B은 2026년 최고의 아랍어 로컬 LLM. VRAM 표, 온프레미스 설정, 품질 평가 팁을 제공합니다.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-gpu-for-llm-inference-under-500-2026-overview": {
    "en": {
      "title": "Best GPU for LLM Inference Under $500 (2026)",
      "subtitle": "The best budget GPU for local LLM inference under $500 is the RTX 4060 Ti 16GB (~$424): its 16 GB VR",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste GPU für LLM-Inferenz unter 500 € (2026)",
      "subtitle": "Die beste Budget-GPU für lokale LLM-Inferenz ist die RTX 4060 Ti 16GB (~520 €): 16 GB VRAM führen 14",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleure GPU pour l'inférence LLM à moins de 500 € (2026)",
      "subtitle": "La meilleure GPU budget pour l'inférence LLM locale sous 500 € est la RTX 4060 Ti 16 Go (~520 €) : s",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "500ドル以下のLLM推論向けGPUおすすめランキング（2026年）",
      "subtitle": "$500以下のローカルLLM推論に最良のバジェットGPUはRTX 4060 Ti 16GB（~¥88,000）：16GB VRAMで14BモデルをQ4で完全にGPU内実行。RTX 3060 12GB（",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年500美元以下LLM推理最佳GPU排行",
      "subtitle": "500美元以下本地LLM推理的最佳预算GPU是RTX 4060 Ti 16GB（~$424）：16GB显存可将14B模型Q4完全放入GPU运行。RTX 3060 12GB（~$339）是更便宜的次选。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejor GPU para inferencia LLM por menos de 500 € (2026)",
      "subtitle": "La mejor GPU económica para inferencia LLM local por menos de 500 € es la RTX 4060 Ti 16GB (~520 €):",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor GPU para inferência de LLM por menos de US$ 500 (2026)",
      "subtitle": "A melhor GPU econômica para inferência de LLM local por menos de US$ 500 é a RTX 4060 Ti 16GB (~R$ 3",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل ⁨GPU⁩ للاستدلال على نماذج ⁨LLM⁩ بأقل من $⁨500⁩ (⁨2026⁩)",
      "subtitle": "أفضل ⁨GPU⁩ اقتصادية للاستدلال المحلي على ⁨LLM⁩ بأقل من $⁨500⁩ هي ⁨RTX 4060 Ti 16GB⁩ (~$⁨424⁩): تشغّل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)",
      "subtitle": "$500 이하 로컬 LLM 추론에 가장 좋은 보급형 GPU는 RTX 4060 Ti 16GB(~$424)입니다. 16GB VRAM으로 14B 모델을 Q4로 GPU 내에서 완전히 실행",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-mini-pc-for-local-llm-overview": {
    "en": {
      "title": "Best Mini PC for Local LLM?",
      "subtitle": "Mac Mini M4 hits ~18 tok/s on 7B Q4. Minisforum UM790 Pro scales to 64 GB DDR5. Beelink SER8: ~8 tok",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Bester Mini-PC für lokale LLMs?",
      "subtitle": "Mac Mini M4: ~18 tok/s bei 7B Q4. Minisforum UM790 Pro: bis 64 GB DDR5 skalierbar. Beelink SER8: ~8 ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleur mini PC pour LLM local ?",
      "subtitle": "Mac Mini M4 : ~18 tok/s, le plus rapide. UM790 Pro : 64 Go DDR5. Beelink SER8 : ~8 tok/s économique.",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMに最適なミニPCは？",
      "subtitle": "Mac Mini M4：最速、~18 tok/s。Minisforum UM790 Pro：64 GB RAM スケーリング。Beelink SER8：予算オプション。ローカルLLM向け 3 選。Pr",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地 LLM 最佳迷你电脑是什么？",
      "subtitle": "Mac Mini M4：最快、约 18 tok/s。Minisforum UM790 Pro：64 GB 内存扩展。Beelink SER8：经济选择。本地 LLM 三大选择。PromptQuorum",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "¿El mejor mini PC para LLM local?",
      "subtitle": "Mac Mini M4 alcanza ~18 tok/s en 7B Q4. Minisforum UM790 Pro escala a 64 GB DDR5. Beelink SER8: ~8 t",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhor mini PC para LLM local?",
      "subtitle": "Mac Mini M4 alcança ~18 tok/s em 7B Q4. Minisforum UM790 Pro escala até 64 GB DDR5. Beelink SER8: ~8",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل جهاز كمبيوتر مصغر لتشغيل نماذج اللغة الكبيرة محلياً؟",
      "subtitle": "⁨Mac Mini M4⁩ يحقق ~⁨18⁩ رمز/ثانية في ⁨7B Q4. UM790 Pro⁩ يتوسع حتى ⁨64 GB DDR5. Beelink SER8⁩: ~⁨8⁩ ",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM용 최고의 미니 PC는?",
      "subtitle": "Mac Mini M4는 7B Q4에서 ~18 tok/s 달성. Minisforum UM790 Pro는 64 GB DDR5까지 확장 가능. Beelink SER8: ~8 tok/s의",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-ollama-models-4gb-vram-overview": {
    "en": {
      "title": "Best Ollama Models for 4 GB VRAM?",
      "subtitle": "4 GB VRAM is tight. Phi-4 Mini Q4 (3.2 GB), Gemma 2 2B (1.5 GB), SmolLM 1.7B (1.0 GB). Llama 3 8B wi",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste Ollama-Modelle für 4 GB VRAM?",
      "subtitle": "4 GB VRAM ist eng. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3 8B pas",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs modèles Ollama pour 4 Go de VRAM ?",
      "subtitle": "4 Go de VRAM est serré. Phi-4 Mini Q4 (3,2 Go), Gemma 2 2B (1,5 Go), SmolLM 1.7B (1,0 Go). Llama 3 8",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "4 GB VRAM向け最良Ollamaモデルは？",
      "subtitle": "4 GB VRAMは制限がありますが使えます。Phi-4 Mini Q4（3.2 GB）、Gemma 2 2B（1.5 GB）、SmolLM 1.7B（1.0 GB）。Llama 3 8Bは収まりませ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "4 GB显存最佳Ollama模型？",
      "subtitle": "4 GB显存很紧张。Phi-4 Mini Q4（3.2 GB）、Gemma 2 2B（1.5 GB）、SmolLM 1.7B（1.0 GB）。Llama 3 8B不适合。PromptQuorum快速解",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "¿Mejores modelos Ollama para 4 GB de VRAM?",
      "subtitle": "4 GB de VRAM es ajustado. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores modelos Ollama para 4 GB de VRAM?",
      "subtitle": "4 GB de VRAM é justo. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3 8B ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل نماذج ⁨Ollama⁩ لـ⁨4 GB VRAM⁩؟",
      "subtitle": "⁨4 GB VRAM⁩ تتسع لـ⁨Phi-4 Mini Q4⁩ (⁨3.2 GB⁩) و⁨Gemma 2 2B⁩ (⁨1.5 GB⁩) و⁨SmolLM 1.7B⁩ (⁨1.0 GB⁩). أم",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "4GB VRAM에 최적화된 Ollama 모델은?",
      "subtitle": "4GB VRAM은 좁지만 사용 가능합니다. Phi-4 Mini Q4 (3.2GB), Gemma 2 2B (1.5GB), SmolLM 1.7B (1.0GB). Llama 3 8B는 ",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-whisper-home-assistant-overview": {
    "en": {
      "title": "Local Speech-to-Text for Smart Homes: Whisper + HA (2026)",
      "subtitle": "Add local speech-to-text to Home Assistant with Whisper: model sizes, hardware needs, accuracy vs sp",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokales Sprache-zu-Text fürs Smart Home: Whisper + HA (2026)",
      "subtitle": "Whisper für lokales Sprache-zu-Text in Home Assistant 2026: Modellgröße wählen, Wyoming konfiguriere",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Reconnaissance Vocale Locale pour la Maison Connectée : Whisper + HA (2026)",
      "subtitle": "Whisper + Home Assistant 2026 : reconnaissance vocale locale, tailles de modèle, Wyoming et précisio",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "スマートホーム向けのローカル音声認識：Whisper + HA（2026）",
      "subtitle": "Whisper で Home Assistant にローカル音声認識を追加する方法（2026）：クラウド不要の音声テキスト変換、日本語対応モデルの選び方を解説。モデルサイズ・ハードウェア要件・精度と速",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "智能家居的本地语音转文字：Whisper + HA（2026）",
      "subtitle": "用 Whisper 为 Home Assistant 添加本地语音识别与实时转写（2026）：支持中文等多语言识别，数据完全本地处理无需联网。含不同规格模型的延迟与精度对比，以及经由 Wyoming ",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Voz-a-Texto Local para Smart Homes: Whisper + HA (2026)",
      "subtitle": "Whisper en Home Assistant 2026: voz-a-texto local, tamaños de modelo, hardware necesario y ajuste de",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Voz-para-Texto Local para Casas Inteligentes: Whisper + HA (2026)",
      "subtitle": "Whisper no Home Assistant 2026: voz-para-texto local, tamanhos de modelo, hardware necessário e conf",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تحويل الكلام إلى نص محليًا للمنازل الذكية: ⁨Whisper + HA⁩ (⁨2026⁩)",
      "subtitle": "5 أحجام نماذج Whisper لـ Home Assistant — tiny على CPU، large مع GPU. اربط بـ Assist عبر Wyoming لنس",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "스마트 홈용 로컬 음성→텍스트: Whisper + HA (2026)",
      "subtitle": "Home Assistant의 Whisper 2026: 로컬 음성→텍스트, 모델 크기, 필요한 하드웨어, 정확도 조정. 클라우드 없음, 오프라인 변환.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "autonomous-local-agents-actually-work-overview": {
    "en": {
      "title": "Local AI Agents in 2026: What Actually Works (And What Still Fails)",
      "subtitle": "Autonomous, multi-step local agents & multi-agent orchestration (CrewAI, AutoGen) tested on 5 real c",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale KI-Agenten in 2026: Was funktioniert (und was noch fehlschlägt)",
      "subtitle": "Autonome, mehrstufige lokale KI-Agenten, app-übergreifend getestet auf 6 Stacks, 5 realen Aufgaben. ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Agents locaux en 2026 : Ce qui fonctionne réellement (et ce qui échoue)",
      "subtitle": "Agents IA locaux autonomes et multi-étapes testés sur 6 stacks, 5 tâches réelles multi-apps. 2 fonct",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルAIエージェント2026年：実際に機能するもの（そして失敗するもの）",
      "subtitle": "自律的でマルチステップ、アプリ横断のローカルAIエージェント6スタックを実務タスク5種類でテスト。2つは確実に機能、3つは意外に失敗、1つは使用不可能。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地AI代理2026：实际可行的方案（以及失败的原因）",
      "subtitle": "自主、多步骤、跨应用的本地AI代理，6个框架实测5项真实任务。2个可靠运行，3个意外失败，1个无法使用。包括企业部署指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Agentes de IA locales en 2026: lo que realmente funciona (y lo que sigue fallando)",
      "subtitle": "Agentes de IA locales autónomos y multipaso en 6 stacks, 5 tareas reales multiaplicación. 2 funciona",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Agentes de IA locais em 2026: o que realmente funciona (e o que ainda falha)",
      "subtitle": "Agentes de IA locais autônomos e multipasso testados em 6 stacks, 5 tarefas reais multiaplicativo. 2",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "وكلاء الذكاء الاصطناعي المحليون في ⁨2026⁩: ما يعمل فعلاً (وما يستمر في الفشل)",
      "subtitle": "وكلاء ⁨AI⁩ محليون مستقلون، متعددو الخطوات، عابرون للتطبيقات — اختُبروا في ⁨6⁩ أطر عمل و⁨5⁩ مهام حقيق",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 로컬 AI 에이전트: 실제로 작동하는 것과 여전히 실패하는 것",
      "subtitle": "자율적이고 다단계이며 앱을 넘나드는 로컬 AI 에이전트 스택 6개를 실제 작업 5가지로 테스트하였습니다. 2개는 작동, 3개는 숨겨진 방식으로 실패, 1개는 사용 불가.",
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

