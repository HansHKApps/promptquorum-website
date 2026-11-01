import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: '本地 AI 智能助手',
  close: '关闭 — Ask Hans 将以图标形式保留',
  maximize: '全屏',
  restore: '恢复窗口大小',
  newChat: '新对话',
  newChatLabel: '开始新对话',
  logoLabel: '打开 Ask Hans（双击）',
  logoTitle: 'Ask Hans — 双击打开',

  welcomeTitle: '欢迎使用 Ask Hans，您的本地 AI 互动向导。',
  welcomeBody:
    '我会检索 PromptQuorum 的内容，解答您关于应用、硬件和指南的问题。请选择一个入口，或在下方直接输入您的问题。',
  welcomeCards: [
    { icon: 'LayoutGrid', title: '查找合适的应用和指南', question: '哪些应用和指南适合我？我想尝试本地 AI。' },
    { icon: 'ArrowLeftRight', title: '比较应用并推荐替代品', question: '你能帮我比较应用并找到替代品吗？' },
    { icon: 'Cpu', title: '检查您的硬件能否运行某个模型', question: '我的硬件能运行某个特定的 AI 模型吗？请向我询问我的电脑配置。' },
    { icon: 'Scale', title: '讲解许可证并推荐合适的软件组合', question: '请给我讲解许可证，并为本地 AI 推荐一套合适的软件组合。' },
  ],

  previousChat: (n: number) => `之前的对话 · ${n} 条消息`,
  continueChat: '在此继续对话',

  inputLabel: '您向 Ask Hans 提出的问题',
  inputPlaceholder: '请输入问题……',
  send: '发送',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans 是 AI，可能会出错。请勿输入个人数据。',
  withdraw: '撤回同意',
  thinking: 'Ask Hans 正在思考……',
  searching: '正在检索 PromptQuorum……',
  panelTools: '正在使用工具……',

  errors: {
    unavailable: 'Ask Hans 目前无法访问。',
    failed: '很遗憾，操作未能成功。请您重试。',
    rephrase: '很遗憾，我未能回答这个问题。请换一种方式表述，或将问题拆分成几个较小的问题。',
    rate: '目前提问的人非常多。请您稍候片刻，然后重试。',
    limit: (n: number) => `本次访问已达到 ${n} 条消息的上限。`,
    refused: '很抱歉，我无法回答这个问题。欢迎您换一个问题。',
    disabled: 'Ask Hans 目前不可用。',
    tooLong: (max: number) => `请精简您的提问：问题最多 ${max} 个字符。`,
  },
  retry: '重试',

  panelLabelPrefix: '主题',
  panelLinksHeading: '相关页面',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: '开始之前',
  consentParagraphs: [
    'Ask Hans 借助 AI（Anthropic 的 Claude），基于 PromptQuorum 的内容回答您的问题。为此，您输入的内容将传输至我们的服务器和 Anthropic。请勿输入个人数据。',
    '点击“是，我同意”，即表示您另外允许我们以匿名方式记录被询问的主题和被使用的链接。我们不会保存您的提问文本。即使不同意，您仍可使用 Ask Hans。您可以随时撤回同意。',
  ],
  consentPrivacyLink: '详见隐私政策。',
  consentPrivacyHref: '/zh/privacy',
  consentYes: '是，我同意',
  consentNo: '不，谢谢',
  consentQuestionLabel: '您的问题（将在您做出选择后发送）：',

  dir: 'ltr',
  devNotice: '工具开发中——期待您的反馈。',
  contactLabel: '通过电子邮件发送反馈',
  welcomeAria: '欢迎',
  feedback: {
    prompt: 'Ask Hans 对您有多大帮助？',
    star: (n: number) => `${n} 星（满分 5 星）`,
    commentPlaceholder: '选填：我们哪些地方可以做得更好？请勿填写个人数据。',
    send: '发送反馈',
    thanks: '感谢您的反馈！',
    error: '反馈未能发送。请您稍后重试。',
  },
  info: {
    label: "关于 Ask Hans",
    title: "什么是 Ask Hans？",
    intro: "Ask Hans 是一款 AI 助手，仅依据 PromptQuorum 自有内容回答您的问题，包括本网站的软件目录、指南、评测和硬件数据。它是一款开发中的测试版工具，并不是 Hans 本人。",
    canTitle: "它能做什么",
    can: ["从软件目录中查找并比较本地 AI 应用，并列出替代方案。", "检查您的硬件（RAM、VRAM）能否运行某个模型。", "用通俗的语言解释软件许可证，并推荐软件组合。", "用您的语言为您指引本网站上相应的指南、评测和硬件页面。"],
    cannotTitle: "它不能做什么",
    cannot: ["查询 promptquorum.com 以外的任何信息：不提供网络搜索、新闻、天气或实时价格。", "保证每次都正确：它是 AI，可能会出错。请在链接页面上核实重要事实。", "提供法律、医疗、财务或电气安装方面的建议。如有需要，请咨询合格的专业人士。", "在您离开后记住您：对话保留在您的浏览器中，不会存储在我们的服务器上。", "代您安装、更改或购买任何东西，或无限制地回答：每次访问最多 {messages} 个问题，每个问题最多 {chars} 个字符。"],
    privacy: "您的问题会发送到我们的服务器和 Anthropic（Claude）以生成回答。请勿输入个人数据。",
    close: "关闭",
  },

  copyUi: {
    copy: "复制",
    copied: "已复制",
    copyAnswer: "复制回答",
  },

  panel: {
    relatedHeading: "与您的问题相关",
    panelHide: "隐藏主题面板",
    panelShow: "显示主题面板",
    historyHeading: "以往的对话",
    historyHide: "隐藏以往的对话",
    historyShow: (n: number) => `显示以往的对话（${n}）`,
  },

  search: {
    badge: "新功能 · 测试版",
    headline: "提出问题——Ask Hans 为您解答",
    pitch: "您得到的不是一串链接，而是基于 PromptQuorum 自有的软件目录、指南和硬件数据整理出的答案，并使用您的语言。这是一种新的站内搜索方式，仍在开发中。",
    examples: ["哪个应用可以在本地搜索我的 PDF？", "Llama 能在 16 GB 的 Mac 上运行吗？", "哪款迷你主机适合做 Home Assistant 服务器？"],
    placeholder: '请输入您的问题……',
    ariaLabel: '向助手提问',
    modalAriaLabel: 'AI 问答',
    hint: '输入问题后按 Enter 键',
    close: '关闭',
  },
  categories: {
    'prompt-engineering': {
      label: '提示词工程',
      links: {
        'pe-hub': { title: '提示词工程', description: '该主题所有指南一览' },
        'pe-ides': { title: '提示词工程 IDE', description: '编写提示词的最佳工具' },
        'pe-mgmt': { title: '提示词管理', description: '管理提示词的平台' },
      },
    },
    'local-llms': {
      label: '本地大模型',
      links: {
        'll-what': { title: '什么是本地大模型？', description: '本地 AI 入门' },
        'll-ollama': { title: '安装 Ollama', description: '一步步运行第一个模型' },
        'll-beginner': { title: '适合新手的模型', description: '哪些模型适合入门' },
      },
    },
    'mini-pcs': {
      label: '迷你主机',
      links: {
        'mp-best': { title: '本地 AI 最佳迷你主机', description: '合适的迷你主机对比' },
        'mp-amd': { title: 'AMD 迷你主机', description: 'AMD 处理器迷你主机一览' },
        'mp-run': { title: '我能运行什么？', description: '检查硬件并找到合适的模型' },
      },
    },
    'gpus-vram': {
      label: '显卡与显存',
      links: {
        'gp-best': { title: '本地大模型最佳 GPU', description: '显卡对比' },
        'gp-apple': { title: 'Apple Silicon 还是 NVIDIA？', description: '两大平台对比' },
        'gp-can': { title: '我的电脑能运行吗？', description: '自行检查兼容性' },
      },
    },
    'smart-home': {
      label: '智能家居',
      links: {
        'sh-hub': { title: '智能家居', description: '家中的本地 AI' },
        'sh-ha': { title: '开始使用 Home Assistant', description: 'Home Assistant 入门' },
        'sh-hw': { title: '本地智能家居硬件', description: '哪些设备合适' },
      },
    },
    'balcony-solar': {
      label: '阳台光伏',
      links: {
        'bs-hub': { title: '阳台光伏', description: '基础知识与概览' },
        'bs-batt': { title: '阳台光伏储能', description: '电池储能一览' },
        'bs-anker': { title: 'Anker Solix 概览', description: '详解一套系统' },
      },
    },
    'find-app': {
      label: '查找应用',
      links: {
        'fa-dir': { title: '软件目录', description: '浏览并筛选所有应用' },
        'fa-iphone': { title: 'iPhone 应用', description: 'iPhone 上的本地 AI' },
        'fa-android': { title: 'Android 应用', description: 'Android 上的本地 AI' },
      },
    },
    'chat-clients': {
      label: '聊天客户端',
      links: {
        'cc-comp': { title: '聊天应用对比', description: '聊天与助手对照' },
        'cc-anything': { title: 'AnythingLLM 评测', description: '详解一款聊天客户端' },
        'cc-jan': { title: 'Jan 评测', description: '详解一款聊天客户端' },
      },
    },
    'inference-engines': {
      label: '推理引擎',
      links: {
        'ie-comp': { title: '引擎对比', description: '运行与部署一览' },
        'ie-ollama': { title: 'Ollama 评测', description: '详解最知名的引擎' },
        'ie-lms': { title: 'LM Studio 评测', description: '详解一款桌面程序' },
      },
    },
    'agent-frameworks': {
      label: '智能体框架',
      links: {
        'af-comp': { title: '代码与开发对比', description: '智能体与框架对照' },
        'af-langchain': { title: 'LangChain 评测', description: '详解一个框架' },
        'af-openclaw': { title: 'OpenClaw 评测', description: '详解一个智能体' },
      },
    },
    'code-assistants': {
      label: '代码助手',
      links: {
        'ca-comp': { title: '代码与开发对比', description: '助手与插件对照' },
        'ca-continue': { title: 'Continue 评测', description: '详解一款 IDE 插件' },
        'ca-cline': { title: 'Cline 评测', description: '详解一款助手' },
      },
    },
    'document-pdf-chat': {
      label: '文档与 PDF 对话',
      links: {
        'dp-comp': { title: '知识与搜索对比', description: '文档与 RAG 对照' },
        'dp-anything': { title: 'AnythingLLM 评测', description: '与文档对话' },
        'dp-ragflow': { title: 'RAGFlow 评测', description: '详解文档理解' },
      },
    },
    'rag-vector-databases': {
      label: 'RAG 与向量数据库',
      links: {
        'rv-comp': { title: '知识与搜索对比', description: 'RAG 与向量数据库一览' },
        'rv-llama': { title: 'LlamaIndex 评测', description: '详解一个 RAG 框架' },
        'rv-qdrant': { title: 'Qdrant 评测', description: '详解一款向量数据库' },
      },
    },
    'image-generation': {
      label: '图像生成',
      links: {
        'ig-comp': { title: '图像与视频对比', description: '工具对照' },
        'ig-comfy': { title: 'ComfyUI 评测', description: '详解一款图像生成器' },
        'ig-fooocus': { title: 'Fooocus 评测', description: '简单易上手的入门之选' },
      },
    },
    'speech-to-text': {
      label: '语音识别',
      links: {
        'st-comp': { title: '语音与音频对比', description: '工具对照' },
        'st-whisper': { title: 'Whisper.cpp 评测', description: '详解语音识别' },
        'st-ha': { title: 'Home Assistant 的 Whisper', description: '本地运行语音控制' },
      },
    },
    'text-to-speech-voice': {
      label: '语音合成与声音',
      links: {
        'tv-comp': { title: '语音与音频对比', description: '工具对照' },
        'tv-voicebox': { title: 'Voicebox 评测', description: '详解语音合成' },
        'tv-dir': { title: '软件目录', description: '浏览所有应用' },
      },
    },
    'personal-assistants': {
      label: '个人助手',
      links: {
        'pa-comp': { title: '聊天与助手对比', description: '助手对照' },
        'pa-ha': { title: 'Home Assistant Assist 评测', description: '详解一款语音助手' },
        'pa-claw': { title: 'OpenClaw 评测', description: '详解一款助手' },
      },
    },
    'vision-ocr': {
      label: '图像识别与 OCR',
      links: {
        'vo-comp': { title: '图像与视频对比', description: '工具对照' },
        'vo-llava': { title: 'LLaVA 评测', description: '详解图像理解' },
        'vo-immich': { title: 'Immich 评测', description: '在本地管理照片' },
      },
    },
    'workflow-automation': {
      label: '工作流与自动化',
      links: {
        'wa-n8n': { title: 'n8n 评测', description: '详解工作流搭建' },
        'wa-dify': { title: 'Dify 评测', description: '详解一款工作流构建器' },
        'wa-langflow': { title: 'Langflow 评测', description: '详解可视化编排' },
      },
    },
    'promptquorum-apps': {
      label: 'PQ 应用',
      links: {
        'pq-hub': { title: 'PQ 应用', description: 'PromptQuorum 的应用' },
        'pq-dir': { title: '软件目录', description: '浏览所有应用' },
        'pq-about': { title: '关于我们', description: 'PromptQuorum 背后的团队' },
      },
    },
    default: {
      label: '综合',
      links: {
        'df-dir': { title: '软件目录', description: '浏览并筛选所有应用' },
        'df-ll': { title: '本地大模型', description: '本地 AI 入门' },
        'df-run': { title: '我能运行什么？', description: '检查硬件' },
      },
    },
  },
}
