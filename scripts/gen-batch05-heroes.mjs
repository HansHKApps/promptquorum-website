#!/usr/bin/env node
const BASE = 'http://localhost:3061';
const SPECS = {
  "what-are-local-llms-overview": {
    "en": {
      "title": "What Are Local LLMs? How Running AI Models on Your Own Hardware Works",
      "subtitle": "Local LLMs run AI models on your own hardware -- no internet required. Learn what they are, how they",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Was sind lokale LLMs? Wie die Ausführung von KI-Modellen auf Ihrer eigenen Hardware funktioniert",
      "subtitle": "Was sind lokale LLMs? KI-Modelle, die offline auf Ihrer Hardware laufen. Vorteile, Funktionsweise un",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Qu'est-ce que les LLMs locaux ? Comment exécuter des modèles IA sur votre propre matériel",
      "subtitle": "LLMs locaux : confidentialité totale, coût zéro, utilisation hors ligne. Comparez les avantages et i",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMとは？自分のハードウェアでAIモデルを実行する方法",
      "subtitle": "ローカルLLM：完全なプライバシー、コストゼロ、オフライン利用。メリット・デメリットを比較、OllamaとLM Studioで今すぐ始める。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "什么是本地LLM？在自己的硬件上运行AI模型的方法",
      "subtitle": "本地LLM：完全隐私、零成本、离线使用。比较优劣，用Ollama和LM Studio立即开始。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "¿Qué son los LLM locales? Cómo ejecutar modelos de IA en tu propio hardware",
      "subtitle": "Los LLM locales ejecutan modelos de IA en tu propio hardware, sin necesidad de internet. Aprende qué",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "O que são LLMs locais? Como rodar modelos de IA no seu próprio hardware",
      "subtitle": "Os LLMs locais rodam modelos de IA no seu próprio hardware, sem precisar de internet. Aprenda o que ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "ما هي نماذج ⁨LLM⁩ المحلية؟ كيف تشغّل نماذج الذكاء الاصطناعي على عتادك الخاص",
      "subtitle": "تعمل نماذج ⁨LLM⁩ المحلية بالكامل على عتادك بلا إنترنت. نموذج ⁨7B⁩ بـ ⁨Q4⁩ يحتاج ⁨8 GB RAM⁩ فقط. دليل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM이란 무엇인가요? 자체 하드웨어에서 AI 모델을 실행하는 방법",
      "subtitle": "로컬 LLM은 인터넷 없이 자체 하드웨어에서 AI 모델을 실행합니다. 로컬 LLM이 무엇인지, 어떻게 작동하는지, 언제 사용해야 하는지 알아보세요. 2026년 가이드.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "run-first-local-llm-overview": {
    "en": {
      "title": "Run Your First Local LLM in 10 Minutes: Install to First Response",
      "subtitle": "Run your first local LLM in under 10 minutes with Ollama: install, pull a 3B model, and get a respon",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Führe dein erstes lokales LLM aus: Von Installation bis erste Antwort in 10 Minuten",
      "subtitle": "Erstes lokales LLM mit Ollama in 10 Minuten: Installation, Modell laden, erste Abfrage. Funktioniert",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Exécutez votre premier LLM local: de l'installation à la première réponse en 10 minutes",
      "subtitle": "Premier LLM local avec Ollama en 10 minutes : installation, téléchargement du modèle, première requê",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "初めてのローカルLLM：インストールから最初の回答まで10分",
      "subtitle": "Ollamaを使って初めてのローカルLLMを10分以内で実行。インストール、モデルダウンロード、初回プロンプト実行まで完全解説。Mac・Windows・Linux対応、クラウド不要。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "运行您的第一个本地LLM：从安装到首个响应仅需10分钟",
      "subtitle": "用Ollama在10分钟内运行第一个本地LLM：安装、模型下载、首次推理完整指南。支持Mac、Windows、Linux，无需云端或GPU。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Ejecuta tu primer LLM local en 10 minutos: De la instalación a la primera respuesta",
      "subtitle": "Ejecuta tu primer LLM local en 10 minutos con Ollama: instala, descarga un modelo 3B y obtén respues",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Rode seu primeiro LLM local em 10 minutos: da instalação à primeira resposta",
      "subtitle": "Rode seu primeiro LLM local em 10 minutos com o Ollama: instale, baixe um modelo 3B e obtenha a resp",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "شغّل أول نموذج ⁨LLM⁩ محلي في ⁨10⁩ دقائق: من التثبيت إلى أول استجابة",
      "subtitle": "⁨Llama 3.2 3B⁩ ينتج ⁨25⁩–⁨45 token⁩/ثانية على ⁨CPU⁩ بدون ⁨GPU⁩. ثبّت ⁨Ollama⁩، حمّل النموذج بأمر واح",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 LLM 처음 실행하기: 설치부터 첫 응답까지 10분 완성",
      "subtitle": "Ollama로 로컬 LLM을 10분 이내에 실행하십시오: 설치, 3B 모델 다운로드, 첫 응답 확인까지 — 다운로드 후에는 API 키나 인터넷이 필요 없습니다.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "how-to-install-lm-studio-overview": {
    "en": {
      "title": "Install LM Studio: GUI Setup for macOS, Windows & Linux",
      "subtitle": "Install LM Studio on macOS, Windows, or Linux: download, load a model, and start chatting in 5 minut",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "LM Studio installieren: Desktop-App-Einrichtung für macOS, Windows und Linux",
      "subtitle": "Starten Sie lokale LLMs ohne Terminal-Befehle. Modelle herunterladen, suchen, chatten--alles in 5 Mi",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Installer LM Studio : guide de configuration de l'application desktop pour macOS, Windows et Linux",
      "subtitle": "Exécutez des LLM locaux sans lignes de commande. Téléchargez, recherchez, chattez en 5 minutes. Supp",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "LM Studio のインストール方法：macOS・Windows・Linux 向けデスクトップアプリ設定ガイド",
      "subtitle": "ターミナル不要でローカルLLM実行。モデル検索、ダウンロード、チャット5分で完結。NVIDIA CUDA・AMD ROCm・Apple Metal対応。初心者向け完全ガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "如何安装 LM Studio：macOS、Windows 和 Linux 的桌面应用设置指南",
      "subtitle": "无需终端轻松运行本地LLM。搜索模型、下载、聊天仅需5分钟。支持NVIDIA CUDA、AMD ROCm、Apple Metal加速。完整入门指南和Ollama对比。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Instalar LM Studio: configuración de interfaz gráfica para macOS, Windows y Linux",
      "subtitle": "Instala LM Studio en macOS, Windows o Linux: descarga un modelo y empieza a chatear en 5 minutos. Si",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Instalar LM Studio: configuração de interface gráfica para macOS, Windows e Linux",
      "subtitle": "Instale o LM Studio no macOS, Windows ou Linux: baixe um modelo e comece a conversar em 5 minutos. S",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "تثبيت ⁨LM Studio⁩: إعداد الواجهة الرسومية لـ ⁨macOS⁩ و ⁨Windows⁩ و ⁨Linux⁩",
      "subtitle": "⁨LM Studio⁩ يُشغّل نماذج ⁨GGUF⁩ محليًا بواجهة رسومية دون طرفية. ثبّت، نزّل نموذجًا وابدأ المحادثة خل",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "LM Studio 설치: macOS, Windows 및 Linux GUI 설정 가이드",
      "subtitle": "macOS, Windows 또는 Linux에서 LM Studio를 설치하는 방법: 다운로드, 모델 로드, 5분 안에 채팅 시작. 터미널 불필요. 초보자 가이드 2026.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-llms-with-vscode-cursor-overview": {
    "en": {
      "title": "Local LLMs With VS Code and Cursor: Setup and Best Practices",
      "subtitle": "Use Ollama with VS Code via Continue.dev for local code completions -- no API key needed. Best model",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLMs mit VS Code und Cursor: Einrichtung und Best Practices",
      "subtitle": "Lokale LLMs in VS Code mit Continue.dev und Cursor einrichten. Beste Modelle: Qwen-Coder 7B, Llama C",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "LLM Locaux avec VS Code et Cursor : Configuration et Bonnes Pratiques",
      "subtitle": "Configurez les LLM locaux dans VS Code avec Continue.dev et Cursor. Meilleurs modèles : Qwen-Coder 7",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "VS CodeとCursorでローカルLLMを使用する：セットアップとベストプラクティス",
      "subtitle": "VS CodeおよびCursorエディタでローカル大言語モデルによるコード補完を実現するための完全セットアップガイド。Continue.dev設定、Cursor統合、最適なモデル選択、パフォーマンスチ",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "VS Code和Cursor中的本地LLM：设置和最佳实践",
      "subtitle": "在VS Code和Cursor代码编辑器中使用本地运行的大语言模型实现私密代码补全的完整教程与最佳实践指南。详细讲解Continue.dev扩展的安装配置、Cursor集成方法、最优编码模型推荐、性能",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "LLMs Locales con VS Code y Cursor: Configuración y Mejores Prácticas",
      "subtitle": "Usa Ollama en VS Code con Continue.dev para completados de código locales sin clave API. Mejores mod",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "LLMs Locais com VS Code e Cursor: Configuração e Boas Práticas",
      "subtitle": "Use o Ollama no VS Code com o Continue.dev para completamentos de código locais sem chave de API. Me",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية مع ⁨VS Code⁩ و⁨Cursor⁩: الإعداد وأفضل الممارسات",
      "subtitle": "⁨Ollama⁩ مع ⁨Continue.dev⁩ في ⁨VS Code⁩ يتيح إكمال الشيفرة محليًا بلا مفتاح ⁨API⁩. أفضل النماذج ⁨202",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "VS Code와 Cursor에서 로컬 LLM 사용하기: 설정 및 모범 사례",
      "subtitle": "Continue.dev를 통해 Ollama를 VS Code에 연결하여 로컬 코드 자동 완성을 사용하십시오 — API 키 불필요. 2026년 최적 모델, VRAM 요구 사항, Cur",
      "footer": "PromptQuorum 가이드"
    }
  },
  "troubleshooting-local-llm-setup-overview": {
    "en": {
      "title": "Fix Local LLM Errors in 2026: 11 Common Problems in Ollama, LM Studio, and vLLM",
      "subtitle": "11 common local LLM errors fixed: OOM kills, GPU not detected, port 11434 refused, slow CPU fallback",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale LLM-Fehler 2026 beheben: 11 häufige Probleme in Ollama, LM Studio und vLLM",
      "subtitle": "11 häufige lokale LLM-Fehler behoben: OOM, GPU nicht erkannt, Port 11434 abgelehnt, langsamer CPU-Fa",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Corriger les erreurs locales LLM 2026 : 11 problèmes courants dans Ollama, LM Studio et vLLM",
      "subtitle": "11 erreurs LLM local corrigées : OOM, GPU non détecté, port 11434 refusé, repli CPU lent, hôte dista",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルLLMエラーを2026年に修正する：Ollama、LM Studio、vLLMの10個の一般的な問題",
      "subtitle": "OOMエラー、GPU未検出、ポート11434拒否、予期しないリモートホストなど11の頻出ローカルLLMエラーをOllama・LM Studioで修正するコマンド一覧。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "修复本地 LLM 错误 2026：Ollama、LM Studio 和 vLLM 的 11 个常见问题",
      "subtitle": "11个常见本地LLM报错修复方案：OOM内存溢出、GPU未检测、端口11434被拒、CPU降速、意外远程主机。Ollama与LM Studio修复命令大全。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Corregir errores de LLM local en 2026: 11 problemas frecuentes en Ollama, LM Studio y vLLM",
      "subtitle": "11 errores comunes de LLM local resueltos: cuelgues OOM, GPU no detectada, puerto 11434 rechazado, C",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Corrigir erros de LLM local em 2026: 11 problemas frequentes no Ollama, LM Studio e vLLM",
      "subtitle": "11 erros comuns de LLM local resolvidos: travamentos OOM, GPU não detectada, porta 11434 recusada, C",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "إصلاح أخطاء ⁨LLM⁩ المحلي في ⁨2026⁩: ⁨11⁩ مشكلة شائعة في ⁨Ollama⁩ و⁨LM Studio⁩ و⁨vLLM⁩",
      "subtitle": "⁨11⁩ خطأ شائعًا في ⁨LLM⁩ المحلي: تعليق ⁨OOM⁩ يُحل بـ ⁨Q4⁩_⁨K⁩_⁨M⁩، ⁨GPU⁩ غير محتجزة، رفض منفذ ⁨11434",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 로컬 LLM 오류 해결: Ollama, LM Studio, vLLM의 11가지 주요 문제",
      "subtitle": "11가지 로컬 LLM 오류 해결: OOM 충돌, GPU 미감지, 포트 11434 거부, 느린 CPU 폴백, 예상치 못한 원격 호스트. Ollama + LM Studio 수정 명령.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "llamacpp-vs-ollama-vs-vllm-overview": {
    "en": {
      "title": "llama.cpp vs Ollama vs vLLM 2026: Speed, Batching & GPU Benchmarks",
      "subtitle": "llama.cpp delivers 38 tok/s speed. Ollama offers 5-min simplicity. vLLM provides 250+ throughput. Co",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "llama.cpp vs Ollama vs vLLM 2026: Geschwindigkeit & GPU-Benchmarks",
      "subtitle": "llama.cpp: 38 Tok/s Single-Token (schnellstes). Ollama: 5-Min-Setup (einfachstes). vLLM: 250+ Tok/s ",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "llama.cpp vs Ollama vs vLLM 2026 : Vitesse & Benchmarks GPU",
      "subtitle": "llama.cpp : 38 tok/s par token (plus rapide). Ollama : 5 min (plus simple). vLLM : 250+ tok/s batch ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "llama.cpp vs Ollama vs vLLM 2026：速度・バッチ処理・GPU性能比較",
      "subtitle": "llama.cpp：シングルトークン最速（38 tok/s）。Ollama：最も簡単（5分）。vLLM：最大スループット（250+ tok/s）。RTX 4090ベンチマーク。2026年4月。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "llama.cpp vs Ollama vs vLLM：选择哪个推理后端？",
      "subtitle": "llama.cpp：单token最快（38 tok/s）。Ollama：最简单（5分钟）。vLLM：批处理吞吐量最高（250+ tok/s）。RTX 4090实测。2026年4月。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "llama.cpp vs Ollama vs vLLM 2026: Velocidad, Batching y Benchmarks GPU",
      "subtitle": "llama.cpp: 38 tok/s (más rápido). Ollama: setup en 5 min (más simple). vLLM: 250+ tok/s en batch (ma",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "llama.cpp vs Ollama vs vLLM 2026: Velocidade, Batching e Benchmarks GPU",
      "subtitle": "llama.cpp: 38 tok/s (mais rápido). Ollama: setup em 5 min (mais simples). vLLM: 250+ tok/s em batch ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨llama.cpp⁩ مقابل ⁨Ollama⁩ مقابل ⁨vLLM 2026⁩: السرعة والـ ⁨Batching⁩ ومعايير ⁨GPU⁩",
      "subtitle": "⁨llama.cpp⁩ يُنجز ⁨38 tok/s⁩ (الأسرع لمستخدم واحد)؛ ⁨vLLM⁩ يصل إلى ⁨250+ tok/s⁩ في الدُّفعة؛ ⁨Ollama",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "llama.cpp vs Ollama vs vLLM 2026: 속도, 배칭 및 GPU 벤치마크",
      "subtitle": "llama.cpp는 38 tok/s 속도를 제공합니다. Ollama는 5분 설치의 간편함을 제공합니다. vLLM은 250+ tok/s 처리량을 제공합니다. RTX 4090 완전 벤",
      "footer": "PromptQuorum 가이드"
    }
  },
  "best-local-rag-tools-overview": {
    "en": {
      "title": "Best Local RAG Tools in 2026: Open WebUI, LlamaIndex, and LangChain",
      "subtitle": "Best local RAG tools: Open WebUI, LlamaIndex, LangChain, and more. Document Q&A, retrieval, chunking",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Beste lokale RAG-Tools im 2026: Open WebUI, LlamaIndex und LangChain",
      "subtitle": "Beste lokale RAG-Tools: Open WebUI, LlamaIndex, LangChain und mehr. Dokumenten-Q&A, Abruf, Chunking.",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Meilleurs outils RAG locaux en 2026: Open WebUI, LlamaIndex et LangChain",
      "subtitle": "Meilleurs outils RAG locaux: Open WebUI, LlamaIndex, LangChain et plus. Q&A sur documents, récupérat",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "2026年のベストローカルRAGツール：Open WebUI、LlamaIndex、LangChain",
      "subtitle": "ベストローカルRAGツール：Open WebUI、LlamaIndex、LangChain。ドキュメントQ&A、検索、チャンキング対応。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "2026年最佳本地RAG工具：Open WebUI、LlamaIndex和LangChain",
      "subtitle": "最佳本地RAG工具：Open WebUI、LlamaIndex、LangChain。文档问答、检索、分块处理。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Mejores herramientas RAG locales en 2026: Open WebUI, LlamaIndex y LangChain",
      "subtitle": "Mejores herramientas RAG locales: Open WebUI, LlamaIndex, LangChain y más. Q&A de documentos, recupe",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Melhores ferramentas RAG locais em 2026: Open WebUI, LlamaIndex e LangChain",
      "subtitle": "Melhores ferramentas RAG locais: Open WebUI, LlamaIndex, LangChain e mais. Q&A de documentos, recupe",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "أفضل أدوات ⁨RAG⁩ المحلية في ⁨2026⁩: ⁨Open WebUI⁩ و⁨LlamaIndex⁩ و⁨LangChain⁩",
      "subtitle": "⁨Open WebUI⁩ يوفر أبسط ⁨RAG⁩ مدمج للمستندات. ⁨LlamaIndex⁩ و⁨LangChain⁩ إطاران للخطوط الاحترافية. مقا",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "2026년 최고의 로컬 RAG 도구: Open WebUI, LlamaIndex, LangChain",
      "subtitle": "최고의 로컬 RAG 도구: Open WebUI, LlamaIndex, LangChain 등. 문서 Q&A, 검색, 청킹.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "local-rag-2026-overview": {
    "en": {
      "title": "Local RAG 2026: Build Document Q&A Systems Without Cloud APIs",
      "subtitle": "Local RAG 2026: build document Q&A systems, vector databases, chunking strategies, and retrieval opt",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Lokale RAG 2026: Erstellen Sie Dokumenten-Q&A-Systeme ohne Cloud-APIs",
      "subtitle": "Lokale RAG 2026: erstellen Sie Dokumenten-Q&A-Systeme, Vektordatenbanken, Chunk-Strategien und Abruf",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "RAG local 2026 : créer des systèmes de questions-réponses sur documents sans APIs cloud",
      "subtitle": "RAG local 2026 : créez des systèmes de questions-réponses, bases de données vectorielles, stratégies",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "ローカルRAG 2026：クラウドAPIなしで文書Q&Aシステムを構築",
      "subtitle": "ローカルRAG 2026：文書Q&Aシステム、ベクターデータベース、チャンキング戦略、検索最適化の完全ガイド。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "本地RAG 2026：无需云API构建文档问答系统",
      "subtitle": "本地RAG 2026：构建文档问答系统、向量数据库、分块策略、检索优化的完整指南。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "RAG Local 2026: Construye Sistemas de Preguntas y Respuestas sin APIs en la Nube",
      "subtitle": "RAG Local 2026: construye sistemas de preguntas y respuestas, bases de datos vectoriales, estrategia",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "RAG Local 2026: Crie Sistemas de Perguntas e Respostas sem APIs na Nuvem",
      "subtitle": "RAG Local 2026: construa sistemas de perguntas e respostas, bancos de dados vetoriais, estratégias d",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "⁨RAG⁩ محلي ⁨2026⁩: ابنِ أنظمة أسئلة وأجوبة دون واجهات ⁨API⁩ سحابية",
      "subtitle": "⁨RAG⁩ المحلي ⁨2026⁩: أنشئ أنظمة أسئلة وأجوبة على مستنداتك بقواعد بيانات متجهية وتقسيم ذكي. استراتيجي",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "로컬 RAG 2026: 클라우드 API 없이 문서 Q&A 시스템 구축하기",
      "subtitle": "로컬 RAG 2026: 문서 Q&A 시스템, 벡터 데이터베이스, 청킹 전략, 검색 최적화 방법을 다루는 완전한 가이드.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "ollama-command-guide-overview": {
    "en": {
      "title": "Ollama Command Guide: Every Command Explained (2026)",
      "subtitle": "Ollama commands explained 2026: pull, run, list, rm, serve, create, with examples. Complete CLI refe",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Ollama Befehls-Anleitung: Alle Befehle erklärt (2026)",
      "subtitle": "Ollama-Befehle erklärt 2026: pull, run, list, rm, serve, create mit Beispielen. Vollständige CLI-Ref",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Guide des commandes Ollama: Toutes les commandes expliquées (2026)",
      "subtitle": "Commandes Ollama expliquées 2026: pull, run, list, rm, serve, create avec exemples. Référence CLI co",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "Ollama コマンドガイド: すべてのコマンド説明 (2026)",
      "subtitle": "Ollama コマンド説明 2026: pull, run, list, rm, serve, create と例。完全な CLI リファレンスが 95% の使用ケースをカバー。",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "Ollama 命令指南：每个命令详解 (2026)",
      "subtitle": "Ollama 命令详解 2026：pull、run、list、rm、serve、create 等完整 CLI 参考。涵盖 95% 的实际使用场景。",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Guía de Comandos de Ollama: Todos los Comandos Explicados (2026)",
      "subtitle": "Comandos de Ollama explicados 2026: pull, run, list, rm, serve, create con ejemplos. Referencia CLI ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Guia de Comandos Ollama: Todos os Comandos Explicados (2026)",
      "subtitle": "Comandos Ollama explicados 2026: pull, run, list, rm, serve, create com exemplos. Referência CLI com",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "دليل أوامر ⁨Ollama⁩: شرح جميع الأوامر (⁨2026⁩)",
      "subtitle": "⁨6⁩ أوامر ⁨Ollama⁩ الأساسية تغطي ⁨95%⁩ من حالات الاستخدام: ⁨pull⁩، ⁨run⁩، ⁨list⁩، ⁨rm⁩، ⁨serve⁩، ⁨cr",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "Ollama 명령어 가이드: 모든 명령어 완전 해설 (2026)",
      "subtitle": "Ollama 명령어 완전 해설 2026: pull, run, list, rm, serve, create 예시 포함. 사용 사례의 95%를 커버하는 완전한 CLI 레퍼런스.",
      "footer": "PromptQuorum 가이드"
    }
  },
  "multi-gpu-local-llms-overview": {
    "en": {
      "title": "Multi-GPU Local LLMs 2026: Run 70B Models Across 2+ GPUs with vLLM and Ollama",
      "subtitle": "2× RTX 4090 (48 GB combined): Llama 3.3 70B at 100 tok/sec for $3,600. Only 5–10% speed penalty vs t",
      "footer": "PromptQuorum Guide"
    },
    "de": {
      "title": "Multi-GPU Lokale LLMs 2026: 70B-Modelle auf 2+ GPUs mit vLLM und Ollama ausführen",
      "subtitle": "Multi-GPU-Setups für lokale LLMs 2026: Lohnt eine zweite Grafikkarte? VRAM-Pooling, Tensor-Paralleli",
      "footer": "PromptQuorum-Leitfaden"
    },
    "fr": {
      "title": "Multi-GPU LLMs Locaux 2026 : Exécuter les Modèles 70B sur 2+ GPUs avec vLLM et Ollama",
      "subtitle": "2× RTX 4090 (48 Go combinés) : Llama 3.3 70B à 100 tok/sec pour €3.398. Seulement 5–10 % de surcoût ",
      "footer": "Guide PromptQuorum"
    },
    "ja": {
      "title": "マルチGPU ローカルLLMs 2026: 2+ GPUsで70Bモデルを実行する（vLLM + Ollama）",
      "subtitle": "2× RTX 4090（合計48 GB）: Llama 3.3 70Bを100 tok/secで実行、わずか5–10%のオーバーヘッド。vLLMテンソル並列処理 + Ollama自動分割。NVLink",
      "footer": "PromptQuorumガイド"
    },
    "zh": {
      "title": "多GPU本地LLMs 2026：在2+个GPU上运行70B模型（vLLM和Ollama）",
      "subtitle": "2× RTX 4090（合计48 GB）：Llama 3.3 70B @ 100 tok/s，成本$3,600。仅5–10%速度损失vs理论单GPU。vLLM张量并行 + Ollama自动分割。NVL",
      "footer": "PromptQuorum 指南"
    },
    "es": {
      "title": "Multi-GPU LLMs Locales 2026: Ejecuta Modelos 70B en 2+ GPUs con vLLM y Ollama",
      "subtitle": "2× RTX 4090 (48 GB): Llama 3.3 70B a 100 tok/s por $3,600. Solo 5–10% de penalización vs GPU única. ",
      "footer": "Guía de PromptQuorum"
    },
    "pt": {
      "title": "Multi-GPU LLMs Locais 2026: Execute Modelos 70B em 2+ GPUs com vLLM e Ollama",
      "subtitle": "2× RTX 4090 (48 GB): Llama 3.3 70B a 100 tok/s por $3.600. Apenas 5–10% de penalidade vs GPU única. ",
      "footer": "Guia PromptQuorum"
    },
    "ar": {
      "title": "نماذج ⁨LLM⁩ المحلية متعددة ⁨GPU 2026⁩: شغّل نماذج ⁨70B⁩ على ⁨2+ GPU⁩ بـ ⁨vLLM⁩ و⁨Ollama⁩",
      "subtitle": "⁨2⁩× ⁨RTX 4090⁩ (⁨48 GB⁩): ⁨Llama 3.3 70B⁩ بـ ⁨100 tok/s⁩ بـ ⁨3⁩,⁨600⁩$. غرامة ⁨5⁩–⁨10%⁩ فقط مقابل ⁨",
      "footer": "دليل PromptQuorum"
    },
    "ko": {
      "title": "멀티 GPU 로컬 LLM 2026: vLLM과 Ollama로 2개 이상의 GPU에서 70B 모델 실행하기",
      "subtitle": "2× RTX 4090(합산 48 GB): Llama 3.3 70B를 100 tok/s로, 가격은 $3,600. 이론상 단일 GPU 대비 속도 손실 5~10%에 불과합니다. vLLM",
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

