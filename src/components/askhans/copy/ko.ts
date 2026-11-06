import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: '로컬 AI를 위한 AI 어시스턴트',
  close: '닫기 — Ask Hans는 아이콘으로 남습니다',
  maximize: '전체 화면',
  restore: '창 크기 복원',
  newChat: '새 대화',
  newChatLabel: '새 대화 시작',
  logoLabel: 'Ask Hans 열기',
  logoTitle: 'Ask Hans — 클릭하여 열기',

  welcomeTitle: '로컬 AI를 안내하는 인터랙티브 가이드, Ask Hans에 오신 것을 환영합니다.',
  welcomeBody:
    'PromptQuorum의 콘텐츠를 검색하여 앱, 하드웨어, 가이드에 관한 질문에 답해 드립니다. 시작할 주제를 선택하시거나 아래에 직접 질문을 입력해 주십시오.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: '나에게 맞는 앱과 가이드 찾기', question: '저에게 맞는 앱과 가이드는 무엇인가요? 로컬 AI를 시도해 보고 싶습니다.' },
    { icon: 'ArrowLeftRight', title: '앱 비교 및 대안 안내', question: '앱을 비교하고 대안을 찾는 일을 도와주실 수 있나요?' },
    { icon: 'Cpu', title: '내 하드웨어에서 모델을 실행할 수 있는지 확인', question: '제 하드웨어에서 특정 AI 모델을 실행할 수 있나요? 제 컴퓨터에 대해 질문해 주세요.' },
    { icon: 'Scale', title: '라이선스 설명 및 알맞은 소프트웨어 스택 추천', question: '라이선스를 설명해 주시고, 로컬 AI에 알맞은 소프트웨어 스택을 추천해 주세요.' },
  ],

  previousChat: (n: number) => `이전 대화 · 메시지 ${n}개`,
  continueChat: '여기서 대화 이어가기',

  inputLabel: 'Ask Hans에게 보낼 질문',
  inputPlaceholder: '질문하기 …',
  send: '보내기',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans는 AI이며 오류가 있을 수 있습니다. 개인정보는 입력하지 마십시오.',
  withdraw: '동의 철회',
  thinking: 'Ask Hans가 생각하고 있습니다 …',
  searching: 'PromptQuorum을 검색하고 있습니다 …',
  panelTools: '도구를 사용하고 있습니다 …',

  errors: {
    unavailable: '지금은 Ask Hans에 연결할 수 없습니다.',
    failed: '처리하지 못했습니다. 다시 시도해 주십시오.',
    rephrase: '이 질문에는 답변하지 못했습니다. 질문을 다른 표현으로 바꾸시거나 여러 개의 작은 질문으로 나누어 주십시오.',
    rate: '현재 질문이 매우 많습니다. 잠시 기다린 후 다시 시도해 주십시오.',
    limit: (n: number) => `이번 방문의 메시지 한도(${n}개)에 도달했습니다.`,
    refused: '이 질문에는 답변드릴 수 없습니다. 다른 질문을 해 주십시오.',
    disabled: 'Ask Hans는 현재 이용할 수 없습니다.',
    tooLong: (max: number) => `질문을 더 짧게 작성해 주십시오. 질문은 최대 ${max}자까지 입력할 수 있습니다.`,
  },
  retry: '다시 시도',
  followupsLabel: "추천 후속 질문",

  panelLabelPrefix: '주제',
  panelLinksHeading: '관련 페이지',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: '시작하기 전에',
  consentParagraphs: [
    'Ask Hans는 PromptQuorum의 콘텐츠를 바탕으로 AI(Anthropic의 Claude)를 사용하여 질문에 답합니다. 이를 위해 입력하신 내용이 당사 서버와 Anthropic으로 전송됩니다. 개인정보는 입력하지 마십시오.',
    '"예, 동의합니다"를 선택하시면 통계 목적 및 Ask Hans와 당사 콘텐츠 개선을 위해 다음 사항을 익명으로 기록하는 것에 동의하시는 것입니다: 질문의 주제, 답변을 위해 Ask Hans가 조회한 앱·디렉터리 카테고리·도구, 언어, 클릭하신 링크, 사용하신 기능(예: 추천 후속 질문, 새 대화 시작), 시각, 그리고 개인과 연결되지 않는 무작위 방문 ID. 통계에는 질문이나 답변 내용, IP 주소, 이름이 포함되지 않습니다. 당사는 집계된 수치만 공개합니다.',
    '동의는 자발적입니다. 동의하지 않으셔도 Ask Hans를 이용하실 수 있으며, 동의는 언제든지 철회하실 수 있고 철회는 장래를 향해 효력이 있습니다. 선택의 증빙으로 그 시각, 문구 버전, 무작위 방문 ID를 저장합니다. 선택과 관계없이 Ask Hans가 열린 횟수와 제공된 답변 수는 익명으로 집계합니다(합계만 집계하며 ID와 내용은 포함하지 않습니다).',
  ],
  consentPrivacyLink: '자세한 내용은 개인정보 처리방침을 참조하십시오.',
  consentPrivacyHref: '/ko/privacy',
  consentYes: '예, 동의합니다',
  consentNo: '아니요, 괜찮습니다',
  consentQuestionLabel: '질문 (선택 후 전송됩니다):',

  dir: 'ltr',
  devNotice: '개발 중인 도구입니다 – 여러분의 피드백을 기다립니다.',
  contactLabel: '이메일로 피드백 보내기',
  welcomeAria: '환영합니다',
  feedback: {
    prompt: 'Ask Hans는 얼마나 도움이 되셨습니까?',
    star: (n: number) => `5점 만점에 ${n}점`,
    thanks: '피드백을 주셔서 감사합니다!',
    error: '피드백을 보내지 못했습니다. 나중에 다시 시도해 주십시오.',
    followup: {
      title: '더 도움이 되지 못해 죄송합니다.',
      body: '무엇을 개선하면 좋을까요? 이메일로 의견을 보내 주시겠습니까? 세부 정보는 미리 채워 드리며, 보내기 전에 직접 내용을 덧붙이실 수 있습니다.',
      note: '이메일에는 마지막 질문과 답변이 포함됩니다. 보내고 싶지 않은 내용은 삭제하시고, 개인정보는 입력하지 마십시오.',
      write: '이메일 쓰기',
      skip: '괜찮습니다',
      copied: '세부 정보가 클립보드에도 복사되었습니다.',
      mail: { subject: 'Ask Hans 피드백 ({n}/5)', intro: '무엇을 개선하면 좋을까요? 여기에 적어 주십시오:', rating: '평점', language: '언어', page: '페이지', question: '마지막 질문', answer: '마지막 답변' },
    },
  },
  info: {
    label: "Ask Hans 소개",
    title: "Ask Hans란 무엇입니까?",
    intro: "Ask Hans는 이 웹사이트의 소프트웨어 디렉터리, 가이드, 리뷰, 하드웨어 데이터 등 PromptQuorum 자체 콘텐츠만을 사용하여 질문에 답하는 AI 어시스턴트입니다. 개발 중인 베타 도구이며 Hans 본인이 아닙니다.",
    canTitle: "할 수 있는 일",
    can: ["소프트웨어 디렉터리에서 로컬 AI 앱을 찾아 비교하고 대안을 안내합니다.", "사용하시는 하드웨어(RAM, VRAM)에서 모델을 실행할 수 있는지 확인합니다.", "소프트웨어 라이선스를 쉬운 말로 설명하고 소프트웨어 스택을 제안합니다.", "이 사이트의 해당 가이드, 리뷰, 하드웨어 페이지를 사용하시는 언어로 안내합니다."],
    cannotTitle: "할 수 없는 일",
    cannot: ["promptquorum.com 외부의 정보 조회: 웹 검색, 뉴스, 날씨, 실시간 가격은 지원하지 않습니다.", "항상 정확하게 답하는 것: AI이므로 오류가 있을 수 있습니다. 중요한 사실은 링크된 페이지에서 확인해 주십시오.", "법률, 의료, 금융, 전기 설비에 관한 조언. 이러한 사항은 자격을 갖춘 전문가에게 문의해 주십시오.", "떠난 뒤에 사용자를 기억하는 것: 대화는 브라우저에 남으며 당사 서버에는 저장되지 않습니다.", "사용자를 대신하여 설치, 변경, 구매를 하는 것, 그리고 제한 없는 답변: 방문당 질문 {messages}개, 질문당 {chars}자까지입니다."],
    privacy: "질문은 답변을 생성하기 위해 당사 서버와 Anthropic(Claude)으로 전송됩니다. 개인정보는 입력하지 마십시오.",
    close: "닫기",
  },

  copyUi: {
    copy: "복사",
    copied: "복사됨",
    copyAnswer: "답변 복사",
  },

  panel: {
    relatedHeading: "질문과 관련된 내용",
    relatedEarlier: "이전 답변",
    panelHide: "주제 패널 숨기기",
    panelShow: "주제 패널 표시",
    historyHeading: "이전 대화",
    historyHide: "이전 대화 숨기기",
    historyShow: (n: number) => `이전 대화 표시 (${n})`,
  },

  search: {
    badge: "신규 · 베타",
    headline: "질문해 주십시오 — Ask Hans가 답변합니다",
    pitch: "링크 목록 대신, PromptQuorum의 소프트웨어 디렉터리, 가이드, 하드웨어 데이터를 바탕으로 만든 답변을 사용하시는 언어로 받아 보실 수 있습니다. 새로운 방식의 사이트 검색이며, 아직 개발 중입니다.",
    examples: ["내 PDF를 로컬에서 검색할 수 있는 앱은 무엇입니까?", "16 GB Mac에서 Llama가 실행됩니까?", "Home Assistant 서버로 쓸 만한 미니 PC는 무엇입니까?"],
    placeholder: '질문을 입력해 주십시오...',
    ariaLabel: '어시스턴트에게 질문하기',
    modalAriaLabel: 'AI 기반 질문과 답변',
    hint: '질문을 입력하고 Enter를 누르십시오',
    close: '닫기',
  },
  categories: {
    "prompt-engineering": {
      "label": "프롬프트 엔지니어링",
      "links": {
        "pe-hub": {
          "title": "프롬프트 엔지니어링",
          "description": "관련 가이드 전체 보기"
        },
        "pe-ides": {
          "title": "프롬프트 엔지니어링 IDE",
          "description": "프롬프트 작성에 가장 좋은 도구"
        },
        "pe-mgmt": {
          "title": "프롬프트 관리",
          "description": "프롬프트를 관리하는 플랫폼"
        }
      }
    },
    "local-llms": {
      "label": "로컬 LLM",
      "links": {
        "ll-what": {
          "title": "로컬 LLM이란?",
          "description": "로컬 AI 입문"
        },
        "ll-ollama": {
          "title": "Ollama 설치하기",
          "description": "첫 모델까지 단계별 안내"
        },
        "ll-beginner": {
          "title": "입문자용 모델",
          "description": "시작하기에 알맞은 모델"
        }
      }
    },
    "mini-pcs": {
      "label": "미니 PC",
      "links": {
        "mp-best": {
          "title": "로컬 AI용 최고의 미니 PC",
          "description": "적합한 미니 PC 비교"
        },
        "mp-amd": {
          "title": "AMD 미니 PC",
          "description": "AMD 프로세서 미니 PC 한눈에 보기"
        },
        "mp-run": {
          "title": "무엇을 실행할 수 있나요?",
          "description": "하드웨어 확인 및 알맞은 모델 찾기"
        }
      }
    },
    "gpus-vram": {
      "label": "그래픽카드 & VRAM",
      "links": {
        "gp-best": {
          "title": "로컬 LLM용 최고의 GPU",
          "description": "그래픽카드 비교"
        },
        "gp-apple": {
          "title": "Apple Silicon 또는 NVIDIA?",
          "description": "두 플랫폼 비교"
        },
        "gp-can": {
          "title": "내 PC에서 실행되나요?",
          "description": "호환성 직접 확인"
        }
      }
    },
    "smart-home": {
      "label": "스마트 홈",
      "links": {
        "sh-hub": {
          "title": "스마트 홈",
          "description": "가정에서 쓰는 로컬 AI"
        },
        "sh-ha": {
          "title": "Home Assistant 시작하기",
          "description": "Home Assistant 첫걸음"
        },
        "sh-hw": {
          "title": "로컬 스마트 홈용 하드웨어",
          "description": "적합한 기기 안내"
        }
      }
    },
    "balcony-solar": {
      "label": "베란다 태양광",
      "links": {
        "bs-hub": {
          "title": "베란다 태양광",
          "description": "기본 개념과 개요"
        },
        "bs-batt": {
          "title": "베란다 태양광용 저장 장치",
          "description": "배터리 저장 장치 한눈에 보기"
        },
        "bs-anker": {
          "title": "Anker Solix 한눈에 보기",
          "description": "시스템 자세히 살펴보기"
        }
      }
    },
    "find-app": {
      "label": "앱 찾기",
      "links": {
        "fa-dir": {
          "title": "소프트웨어 디렉터리",
          "description": "모든 앱 검색 및 필터링"
        },
        "fa-iphone": {
          "title": "iPhone용 앱",
          "description": "iPhone에서 쓰는 로컬 AI"
        },
        "fa-android": {
          "title": "Android용 앱",
          "description": "Android에서 쓰는 로컬 AI"
        }
      }
    },
    "chat-clients": {
      "label": "채팅 클라이언트",
      "links": {
        "cc-comp": {
          "title": "채팅 앱 비교",
          "description": "채팅과 어시스턴트 비교"
        },
        "cc-anything": {
          "title": "AnythingLLM 리뷰",
          "description": "채팅 클라이언트 자세히 보기"
        },
        "cc-jan": {
          "title": "Jan 리뷰",
          "description": "채팅 클라이언트 자세히 보기"
        }
      }
    },
    "inference-engines": {
      "label": "추론 엔진",
      "links": {
        "ie-comp": {
          "title": "엔진 비교",
          "description": "실행과 배포 한눈에 보기"
        },
        "ie-ollama": {
          "title": "Ollama 리뷰",
          "description": "가장 잘 알려진 엔진 자세히 보기"
        },
        "ie-lms": {
          "title": "LM Studio 리뷰",
          "description": "데스크톱 프로그램 자세히 보기"
        }
      }
    },
    "agent-frameworks": {
      "label": "에이전트 프레임워크",
      "links": {
        "af-comp": {
          "title": "코드와 개발 비교",
          "description": "에이전트와 프레임워크 비교"
        },
        "af-langchain": {
          "title": "LangChain 리뷰",
          "description": "프레임워크 자세히 보기"
        },
        "af-openclaw": {
          "title": "OpenClaw 리뷰",
          "description": "에이전트 자세히 보기"
        }
      }
    },
    "code-assistants": {
      "label": "코드 어시스턴트",
      "links": {
        "ca-comp": {
          "title": "코드와 개발 비교",
          "description": "어시스턴트와 플러그인 비교"
        },
        "ca-continue": {
          "title": "Continue 리뷰",
          "description": "IDE 플러그인 자세히 보기"
        },
        "ca-cline": {
          "title": "Cline 리뷰",
          "description": "어시스턴트 자세히 보기"
        }
      }
    },
    "document-pdf-chat": {
      "label": "문서 & PDF 채팅",
      "links": {
        "dp-comp": {
          "title": "지식과 검색 비교",
          "description": "문서와 RAG 비교"
        },
        "dp-anything": {
          "title": "AnythingLLM 리뷰",
          "description": "문서와 대화하기"
        },
        "dp-ragflow": {
          "title": "RAGFlow 리뷰",
          "description": "문서 이해 자세히 보기"
        }
      }
    },
    "rag-vector-databases": {
      "label": "RAG & 벡터 데이터베이스",
      "links": {
        "rv-comp": {
          "title": "지식과 검색 비교",
          "description": "RAG와 벡터 데이터베이스 한눈에 보기"
        },
        "rv-llama": {
          "title": "LlamaIndex 리뷰",
          "description": "RAG 프레임워크 자세히 보기"
        },
        "rv-qdrant": {
          "title": "Qdrant 리뷰",
          "description": "벡터 데이터베이스 자세히 보기"
        }
      }
    },
    "image-generation": {
      "label": "이미지 생성",
      "links": {
        "ig-comp": {
          "title": "이미지와 영상 비교",
          "description": "도구 비교"
        },
        "ig-comfy": {
          "title": "ComfyUI 리뷰",
          "description": "이미지 생성기 자세히 보기"
        },
        "ig-fooocus": {
          "title": "Fooocus 리뷰",
          "description": "쉬운 시작"
        }
      }
    },
    "speech-to-text": {
      "label": "음성 인식",
      "links": {
        "st-comp": {
          "title": "음성과 오디오 비교",
          "description": "도구 비교"
        },
        "st-whisper": {
          "title": "Whisper.cpp 리뷰",
          "description": "음성 인식 자세히 보기"
        },
        "st-ha": {
          "title": "Home Assistant용 Whisper",
          "description": "음성 제어를 로컬에서 운영"
        }
      }
    },
    "text-to-speech-voice": {
      "label": "음성 합성 & 보이스",
      "links": {
        "tv-comp": {
          "title": "음성과 오디오 비교",
          "description": "도구 비교"
        },
        "tv-voicebox": {
          "title": "Voicebox 리뷰",
          "description": "음성 합성 자세히 보기"
        },
        "tv-dir": {
          "title": "소프트웨어 디렉터리",
          "description": "모든 앱 검색"
        }
      }
    },
    "personal-assistants": {
      "label": "개인 비서",
      "links": {
        "pa-comp": {
          "title": "채팅과 어시스턴트 비교",
          "description": "어시스턴트 비교"
        },
        "pa-ha": {
          "title": "Home Assistant Assist 리뷰",
          "description": "음성 비서 자세히 보기"
        },
        "pa-claw": {
          "title": "OpenClaw 리뷰",
          "description": "어시스턴트 자세히 보기"
        }
      }
    },
    "vision-ocr": {
      "label": "이미지 인식 & OCR",
      "links": {
        "vo-comp": {
          "title": "이미지와 영상 비교",
          "description": "도구 비교"
        },
        "vo-llava": {
          "title": "LLaVA 리뷰",
          "description": "이미지 이해 자세히 보기"
        },
        "vo-immich": {
          "title": "Immich 리뷰",
          "description": "사진을 로컬에서 관리"
        }
      }
    },
    "workflow-automation": {
      "label": "워크플로 & 자동화",
      "links": {
        "wa-n8n": {
          "title": "n8n 리뷰",
          "description": "워크플로 구성 자세히 보기"
        },
        "wa-dify": {
          "title": "Dify 리뷰",
          "description": "워크플로 빌더 자세히 보기"
        },
        "wa-langflow": {
          "title": "Langflow 리뷰",
          "description": "비주얼 오케스트레이션 자세히 보기"
        }
      }
    },
    "promptquorum-apps": {
      "label": "PQ 앱",
      "links": {
        "pq-hub": {
          "title": "PQ 앱",
          "description": "PromptQuorum의 앱"
        },
        "pq-dir": {
          "title": "소프트웨어 디렉터리",
          "description": "모든 앱 검색"
        },
        "pq-about": {
          "title": "회사 소개",
          "description": "PromptQuorum을 만드는 사람들"
        }
      }
    },
    "default": {
      "label": "일반",
      "links": {
        "df-dir": {
          "title": "소프트웨어 디렉터리",
          "description": "모든 앱 검색 및 필터링"
        },
        "df-ll": {
          "title": "로컬 LLM",
          "description": "로컬 AI 입문"
        },
        "df-run": {
          "title": "무엇을 실행할 수 있나요?",
          "description": "하드웨어 확인"
        }
      }
    }
  },
}
