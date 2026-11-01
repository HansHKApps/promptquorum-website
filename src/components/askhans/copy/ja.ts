import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'ローカルAIのためのAIアシスタント',
  close: '閉じる — Ask Hans はアイコンとして残ります',
  maximize: '全画面表示',
  restore: 'ウィンドウサイズを元に戻す',
  newChat: '新規',
  newChatLabel: '新しい会話を始める',
  logoLabel: 'Ask Hans を開く(ダブルクリック)',
  logoTitle: 'Ask Hans — ダブルクリックで開く',

  welcomeTitle: 'Ask Hans へようこそ。ローカルAIのインタラクティブなガイドです。',
  welcomeBody:
    'PromptQuorum のコンテンツを検索し、アプリ、ハードウェア、ガイドに関するご質問にお答えします。下から入口を選ぶか、ご自身の質問を入力してください。',
  welcomeCards: [
    { icon: 'LayoutGrid', title: '自分に合うアプリとガイドを探す', question: '自分に合うアプリとガイドを教えてください。ローカルAIを試してみたいです。' },
    { icon: 'ArrowLeftRight', title: 'アプリを比較し、代替候補を知る', question: 'アプリの比較と、代替アプリ探しを手伝ってもらえますか?' },
    { icon: 'Cpu', title: 'お使いのハードウェアでモデルを動かせるか確認する', question: '自分のハードウェアで特定のAIモデルを動かせますか?私のパソコンについて質問してください。' },
    { icon: 'Scale', title: 'ライセンスを理解し、最適なソフトウェア構成を提案してもらう', question: 'ライセンスについて説明し、ローカルAIに適したソフトウェア構成を提案してください。' },
  ],

  previousChat: (n: number) => `以前の会話 · ${n}件のメッセージ`,
  continueChat: 'ここから会話を続ける',

  inputLabel: 'Ask Hans へのご質問',
  inputPlaceholder: '質問を入力 …',
  send: '送信',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans はAIのため、誤りを含む場合があります。個人情報は入力しないでください。',
  withdraw: '同意を撤回する',
  thinking: 'Ask Hans が考えています …',
  searching: 'PromptQuorum を検索しています …',
  panelTools: 'ツールを使用しています …',

  errors: {
    unavailable: '現在、Ask Hans に接続できません。',
    failed: '処理に失敗しました。もう一度お試しください。',
    rate: 'ただいま質問が集中しています。しばらくお待ちのうえ、もう一度お試しください。',
    limit: (n: number) => `今回のご利用では、メッセージ数の上限(${n}件)に達しました。`,
    refused: '申し訳ありませんが、その件にはお答えできません。別の質問をどうぞ。',
    disabled: '現在、Ask Hans はご利用いただけません。',
    tooLong: (max: number) => `もう少し短くまとめてください。質問は最大${max}文字までです。`,
  },
  retry: '再試行',

  panelLabelPrefix: 'トピック',
  panelLinksHeading: '関連ページ',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: '始める前に',
  consentParagraphs: [
    'Ask Hans は、PromptQuorum のコンテンツに基づき、AI(Anthropic の Claude)を使ってご質問にお答えします。そのため、入力内容は当社のサーバーと Anthropic に送信されます。個人情報は入力しないでください。',
    '「はい、同意します」を選択すると、どのトピックが質問され、どのリンクが利用されたかを匿名で記録することにも同意したことになります。質問の本文は保存しません。同意しなくても Ask Hans をご利用いただけます。同意はいつでも撤回できます。',
  ],
  consentPrivacyLink: '詳しくはプライバシーポリシーをご覧ください。',
  consentPrivacyHref: '/ja/privacy',
  consentYes: 'はい、同意します',
  consentNo: 'いいえ、結構です',
  consentQuestionLabel: 'ご質問(選択後に送信されます):',

  dir: 'ltr',
  devNotice: '開発中のツールです。ご意見をお待ちしています。',
  contactLabel: 'メールでフィードバックを送る',
  welcomeAria: 'ようこそ',
  feedback: {
    prompt: 'Ask Hans はお役に立ちましたか?',
    star: (n: number) => `5段階中${n}`,
    commentPlaceholder: '任意:改善点があればお聞かせください。個人情報は入力しないでください。',
    send: 'フィードバックを送信',
    thanks: 'フィードバックありがとうございます!',
    error: 'フィードバックを送信できませんでした。しばらくしてからもう一度お試しください。',
  },
  search: {
    placeholder: '質問を入力してください...',
    ariaLabel: 'アシスタントに質問する',
    modalAriaLabel: 'AIによる質問と回答',
    hint: '質問を入力して Enter キーを押してください',
    close: '閉じる',
  },
  categories: {
    "prompt-engineering": {
      "label": "プロンプトエンジニアリング",
      "links": {
        "pe-hub": {
          "title": "プロンプトエンジニアリング",
          "description": "関連ガイドの一覧"
        },
        "pe-ides": {
          "title": "プロンプトエンジニアリング用IDE",
          "description": "プロンプト作成に最適なツール"
        },
        "pe-mgmt": {
          "title": "プロンプト管理",
          "description": "プロンプトを管理するプラットフォーム"
        }
      }
    },
    "local-llms": {
      "label": "ローカルLLM",
      "links": {
        "ll-what": {
          "title": "ローカルLLMとは?",
          "description": "ローカルAI入門"
        },
        "ll-ollama": {
          "title": "Ollama のインストール",
          "description": "最初のモデルまでを手順で解説"
        },
        "ll-beginner": {
          "title": "初心者向けモデル",
          "description": "始めるのに適したモデル"
        }
      }
    },
    "mini-pcs": {
      "label": "ミニPC",
      "links": {
        "mp-best": {
          "title": "ローカルAI向けミニPCのおすすめ",
          "description": "適したミニPCの比較"
        },
        "mp-amd": {
          "title": "AMD搭載ミニPC",
          "description": "AMDプロセッサ搭載ミニPCの一覧"
        },
        "mp-run": {
          "title": "何を動かせる?",
          "description": "ハードウェアを確認して合うモデルを探す"
        }
      }
    },
    "gpus-vram": {
      "label": "GPUとVRAM",
      "links": {
        "gp-best": {
          "title": "ローカルLLM向けGPUのおすすめ",
          "description": "グラフィックカードの比較"
        },
        "gp-apple": {
          "title": "Apple Silicon か NVIDIA か?",
          "description": "2つのプラットフォームを比較"
        },
        "gp-can": {
          "title": "自分のPCで動く?",
          "description": "互換性を自分で確認"
        }
      }
    },
    "smart-home": {
      "label": "スマートホーム",
      "links": {
        "sh-hub": {
          "title": "スマートホーム",
          "description": "家庭で使うローカルAI"
        },
        "sh-ha": {
          "title": "Home Assistant を始める",
          "description": "Home Assistant の第一歩"
        },
        "sh-hw": {
          "title": "ローカルスマートホーム向けハードウェア",
          "description": "適したデバイスの紹介"
        }
      }
    },
    "balcony-solar": {
      "label": "ベランダ発電",
      "links": {
        "bs-hub": {
          "title": "ベランダ発電",
          "description": "基本と概要"
        },
        "bs-batt": {
          "title": "ベランダ発電用の蓄電池",
          "description": "バッテリーストレージの概要"
        },
        "bs-anker": {
          "title": "Anker Solix の概要",
          "description": "1つのシステムを詳しく解説"
        }
      }
    },
    "find-app": {
      "label": "アプリを探す",
      "links": {
        "fa-dir": {
          "title": "ソフトウェアディレクトリ",
          "description": "すべてのアプリを検索・絞り込み"
        },
        "fa-iphone": {
          "title": "iPhone向けアプリ",
          "description": "iPhoneで使うローカルAI"
        },
        "fa-android": {
          "title": "Android向けアプリ",
          "description": "Androidで使うローカルAI"
        }
      }
    },
    "chat-clients": {
      "label": "チャットクライアント",
      "links": {
        "cc-comp": {
          "title": "チャットアプリの比較",
          "description": "チャットとアシスタントを比較"
        },
        "cc-anything": {
          "title": "AnythingLLM レビュー",
          "description": "チャットクライアントを詳しく解説"
        },
        "cc-jan": {
          "title": "Jan レビュー",
          "description": "チャットクライアントを詳しく解説"
        }
      }
    },
    "inference-engines": {
      "label": "推論エンジン",
      "links": {
        "ie-comp": {
          "title": "エンジンの比較",
          "description": "実行と提供の概要"
        },
        "ie-ollama": {
          "title": "Ollama レビュー",
          "description": "定番エンジンを詳しく解説"
        },
        "ie-lms": {
          "title": "LM Studio レビュー",
          "description": "デスクトップアプリを詳しく解説"
        }
      }
    },
    "agent-frameworks": {
      "label": "エージェントフレームワーク",
      "links": {
        "af-comp": {
          "title": "コードと開発の比較",
          "description": "エージェントとフレームワークを比較"
        },
        "af-langchain": {
          "title": "LangChain レビュー",
          "description": "フレームワークを詳しく解説"
        },
        "af-openclaw": {
          "title": "OpenClaw レビュー",
          "description": "エージェントを詳しく解説"
        }
      }
    },
    "code-assistants": {
      "label": "コードアシスタント",
      "links": {
        "ca-comp": {
          "title": "コードと開発の比較",
          "description": "アシスタントとプラグインを比較"
        },
        "ca-continue": {
          "title": "Continue レビュー",
          "description": "IDEプラグインを詳しく解説"
        },
        "ca-cline": {
          "title": "Cline レビュー",
          "description": "アシスタントを詳しく解説"
        }
      }
    },
    "document-pdf-chat": {
      "label": "ドキュメントとPDFチャット",
      "links": {
        "dp-comp": {
          "title": "ナレッジと検索の比較",
          "description": "ドキュメントとRAGを比較"
        },
        "dp-anything": {
          "title": "AnythingLLM レビュー",
          "description": "ドキュメントとチャットする"
        },
        "dp-ragflow": {
          "title": "RAGFlow レビュー",
          "description": "ドキュメント理解を詳しく解説"
        }
      }
    },
    "rag-vector-databases": {
      "label": "RAGとベクトルデータベース",
      "links": {
        "rv-comp": {
          "title": "ナレッジと検索の比較",
          "description": "RAGとベクトルデータベースの概要"
        },
        "rv-llama": {
          "title": "LlamaIndex レビュー",
          "description": "RAGフレームワークを詳しく解説"
        },
        "rv-qdrant": {
          "title": "Qdrant レビュー",
          "description": "ベクトルデータベースを詳しく解説"
        }
      }
    },
    "image-generation": {
      "label": "画像生成",
      "links": {
        "ig-comp": {
          "title": "画像と動画の比較",
          "description": "ツールを比較"
        },
        "ig-comfy": {
          "title": "ComfyUI レビュー",
          "description": "画像生成ツールを詳しく解説"
        },
        "ig-fooocus": {
          "title": "Fooocus レビュー",
          "description": "手軽に始められる入門ツール"
        }
      }
    },
    "speech-to-text": {
      "label": "音声認識",
      "links": {
        "st-comp": {
          "title": "音声とオーディオの比較",
          "description": "ツールを比較"
        },
        "st-whisper": {
          "title": "Whisper.cpp レビュー",
          "description": "音声認識を詳しく解説"
        },
        "st-ha": {
          "title": "Home Assistant 用 Whisper",
          "description": "音声操作をローカルで運用"
        }
      }
    },
    "text-to-speech-voice": {
      "label": "音声合成とボイス",
      "links": {
        "tv-comp": {
          "title": "音声とオーディオの比較",
          "description": "ツールを比較"
        },
        "tv-voicebox": {
          "title": "Voicebox レビュー",
          "description": "音声合成を詳しく解説"
        },
        "tv-dir": {
          "title": "ソフトウェアディレクトリ",
          "description": "すべてのアプリを検索"
        }
      }
    },
    "personal-assistants": {
      "label": "パーソナルアシスタント",
      "links": {
        "pa-comp": {
          "title": "チャットとアシスタントの比較",
          "description": "アシスタントを比較"
        },
        "pa-ha": {
          "title": "Home Assistant Assist レビュー",
          "description": "音声アシスタントを詳しく解説"
        },
        "pa-claw": {
          "title": "OpenClaw レビュー",
          "description": "アシスタントを詳しく解説"
        }
      }
    },
    "vision-ocr": {
      "label": "画像認識とOCR",
      "links": {
        "vo-comp": {
          "title": "画像と動画の比較",
          "description": "ツールを比較"
        },
        "vo-llava": {
          "title": "LLaVA レビュー",
          "description": "画像理解を詳しく解説"
        },
        "vo-immich": {
          "title": "Immich レビュー",
          "description": "写真をローカルで管理"
        }
      }
    },
    "workflow-automation": {
      "label": "ワークフローと自動化",
      "links": {
        "wa-n8n": {
          "title": "n8n レビュー",
          "description": "ワークフロー構築を詳しく解説"
        },
        "wa-dify": {
          "title": "Dify レビュー",
          "description": "ワークフロービルダーを詳しく解説"
        },
        "wa-langflow": {
          "title": "Langflow レビュー",
          "description": "ビジュアルなオーケストレーションを詳しく解説"
        }
      }
    },
    "promptquorum-apps": {
      "label": "PQ アプリ",
      "links": {
        "pq-hub": {
          "title": "PQ アプリ",
          "description": "PromptQuorum のアプリ"
        },
        "pq-dir": {
          "title": "ソフトウェアディレクトリ",
          "description": "すべてのアプリを検索"
        },
        "pq-about": {
          "title": "私たちについて",
          "description": "PromptQuorum の運営者"
        }
      }
    },
    "default": {
      "label": "一般",
      "links": {
        "df-dir": {
          "title": "ソフトウェアディレクトリ",
          "description": "すべてのアプリを検索・絞り込み"
        },
        "df-ll": {
          "title": "ローカルLLM",
          "description": "ローカルAI入門"
        },
        "df-run": {
          "title": "何を動かせる?",
          "description": "ハードウェアを確認"
        }
      }
    }
  },
}
