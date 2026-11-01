import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'AI assistant for local AI',
  close: 'Close — Ask Hans stays available as an icon',
  maximize: 'Full screen',
  restore: 'Restore window size',
  newChat: 'New',
  newChatLabel: 'Start a new conversation',
  logoLabel: 'Open Ask Hans (double-click)',
  logoTitle: 'Ask Hans — double-click to open',

  welcomeTitle: 'Welcome to Ask Hans, your interactive guide to local AI.',
  welcomeBody:
    'I search the PromptQuorum content and answer your questions about apps, hardware and guides. Choose a starting point or ask your own question below.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'Find suitable apps and guides', question: 'Which apps and guides are right for me? I would like to try local AI.' },
    { icon: 'ArrowLeftRight', title: 'Compare apps and find alternatives', question: 'Can you help me compare apps and find alternatives?' },
    { icon: 'Cpu', title: 'Check whether your hardware can run a model', question: 'Can my hardware run a particular AI model? Please ask me about my computer.' },
    { icon: 'Scale', title: 'Explain licenses and recommend a suitable software stack', question: 'Please explain licenses to me and recommend a suitable software stack for local AI.' },
  ],

  previousChat: (n: number) => `Previous conversation · ${n} ${n === 1 ? 'message' : 'messages'}`,
  continueChat: 'Continue chatting here',

  inputLabel: 'Your question for Ask Hans',
  inputPlaceholder: 'Ask a question …',
  send: 'Send',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans is an AI and can make mistakes. Please do not enter any personal data.',
  withdraw: 'Withdraw consent',
  thinking: 'Ask Hans is thinking …',
  searching: 'Searching PromptQuorum …',
  panelTools: 'Using a tool …',

  errors: {
    unavailable: 'Ask Hans is currently unreachable.',
    failed: 'Unfortunately, that did not work. Please try again.',
    rephrase: 'I could not answer that one. Please try rephrasing your question or splitting it into smaller questions.',
    rate: 'A lot of questions have just been asked. Please wait a moment and try again.',
    limit: (n: number) => `The limit of ${n} messages for this visit has been reached.`,
    refused: 'Unfortunately, I cannot say anything about that. Please feel free to ask something else.',
    disabled: 'Ask Hans is not available at the moment.',
    tooLong: (max: number) => `Please keep it shorter: questions may be at most ${max} characters long.`,
  },
  retry: 'Try again',
  followupsLabel: "Suggested follow-up questions",

  panelLabelPrefix: 'Topic',
  panelLinksHeading: 'Related pages',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'Before we start',
  consentParagraphs: [
    'Ask Hans answers your questions with the help of AI (Claude by Anthropic), based on the content of PromptQuorum. For this, your input is sent to our server and to Anthropic. Please do not enter any personal data.',
    'By choosing “Yes, I agree”, you additionally allow us to record anonymously which topics are asked about and which links are used. We do not store the text of your question. You can still use Ask Hans without giving consent. You can withdraw your consent at any time.',
  ],
  consentPrivacyLink: 'More in the privacy policy.',
  consentPrivacyHref: '/privacy',
  consentYes: 'Yes, I agree',
  consentNo: 'No, thanks',
  consentQuestionLabel: 'Your question (will be sent after you make your choice):',

  dir: 'ltr',
  devNotice: 'Tool in development – we look forward to your feedback.',
  contactLabel: 'Send feedback by email',
  welcomeAria: 'Welcome',
  feedback: {
    prompt: 'How helpful is Ask Hans?',
    star: (n: number) => `${n} out of 5 stars`,
    commentPlaceholder: 'Optional: What could we do better? Please do not include personal data.',
    send: 'Send feedback',
    thanks: 'Thank you for your feedback!',
    error: 'The feedback could not be sent. Please try again later.',
  },
  panel: {
    relatedHeading: "Matching your question",
    relatedEarlier: "Earlier answers",
    panelHide: "Hide topic panel",
    panelShow: "Show topic panel",
    historyHeading: "Earlier conversations",
    historyHide: "Hide earlier conversations",
    historyShow: (n: number) => `Show earlier conversations (${n})`,
  },

  search: {
    badge: "New · Beta",
    headline: "Ask a question — Ask Hans answers",
    pitch: "Instead of a list of links, you get an answer built from PromptQuorum's own software directory, guides and hardware data, in your language. A new kind of site search, still in development.",
    examples: ["Which app can search my PDFs locally?", "Does Llama run on a Mac with 16 GB?", "Which mini PC works as a Home Assistant server?"],
    placeholder: 'Ask your question...',
    ariaLabel: 'Ask the assistant a question',
    modalAriaLabel: 'AI-powered questions and answers',
    hint: 'Type your question and press Enter',
    close: 'Close',
  },
  categories: {
    'prompt-engineering': {
      label: 'Prompt Engineering',
      links: {
        'pe-hub': { title: 'Prompt Engineering', description: 'All guides on the topic at a glance' },
        'pe-ides': { title: 'Prompt Engineering IDEs', description: 'The best tools for writing prompts' },
        'pe-mgmt': { title: 'Prompt Management', description: 'Platforms for managing prompts' },
      },
    },
    'local-llms': {
      label: 'Local LLMs',
      links: {
        'll-what': { title: 'What are local LLMs?', description: 'Getting started with local AI' },
        'll-ollama': { title: 'Install Ollama', description: 'Step by step to your first model' },
        'll-beginner': { title: 'Models for beginners', description: 'Which models are good to start with' },
      },
    },
    'mini-pcs': {
      label: 'Mini PCs',
      links: {
        'mp-best': { title: 'Best mini PCs for local AI', description: 'Comparison of suitable mini PCs' },
        'mp-amd': { title: 'AMD mini PCs', description: 'Mini PCs with AMD processors at a glance' },
        'mp-run': { title: 'What can I run?', description: 'Check your hardware and find suitable models' },
      },
    },
    'gpus-vram': {
      label: 'Graphics Cards & VRAM',
      links: {
        'gp-best': { title: 'Best GPUs for local LLMs', description: 'Graphics cards compared' },
        'gp-apple': { title: 'Apple Silicon or NVIDIA?', description: 'Two platforms compared' },
        'gp-can': { title: 'Will it run on my PC?', description: 'Check compatibility yourself' },
      },
    },
    'smart-home': {
      label: 'Smart Home',
      links: {
        'sh-hub': { title: 'Smart Home', description: 'Local AI at home' },
        'sh-ha': { title: 'Get started with Home Assistant', description: 'First steps with Home Assistant' },
        'sh-hw': { title: 'Hardware for a local smart home', description: 'Which devices are suitable' },
      },
    },
    'balcony-solar': {
      label: 'Balcony Solar',
      links: {
        'bs-hub': { title: 'Balcony Solar', description: 'Basics and overview' },
        'bs-batt': { title: 'Storage for balcony solar', description: 'Battery storage at a glance' },
        'bs-anker': { title: 'Anker Solix at a glance', description: 'One system in detail' },
      },
    },
    'find-app': {
      label: 'Find an App',
      links: {
        'fa-dir': { title: 'Software directory', description: 'Browse and filter all apps' },
        'fa-iphone': { title: 'Apps for iPhone', description: 'Local AI on the iPhone' },
        'fa-android': { title: 'Apps for Android', description: 'Local AI on Android' },
      },
    },
    'chat-clients': {
      label: 'Chat Clients',
      links: {
        'cc-comp': { title: 'Chat apps compared', description: 'Chat and assistants side by side' },
        'cc-anything': { title: 'AnythingLLM reviewed', description: 'A chat client in detail' },
        'cc-jan': { title: 'Jan reviewed', description: 'A chat client in detail' },
      },
    },
    'inference-engines': {
      label: 'Inference Engines',
      links: {
        'ie-comp': { title: 'Engines compared', description: 'Running and serving models at a glance' },
        'ie-ollama': { title: 'Ollama reviewed', description: 'The best-known engine in detail' },
        'ie-lms': { title: 'LM Studio reviewed', description: 'A desktop program in detail' },
      },
    },
    'agent-frameworks': {
      label: 'Agent Frameworks',
      links: {
        'af-comp': { title: 'Code and development compared', description: 'Agents and frameworks side by side' },
        'af-langchain': { title: 'LangChain reviewed', description: 'A framework in detail' },
        'af-openclaw': { title: 'OpenClaw reviewed', description: 'An agent in detail' },
      },
    },
    'code-assistants': {
      label: 'Code Assistants',
      links: {
        'ca-comp': { title: 'Code and development compared', description: 'Assistants and plugins side by side' },
        'ca-continue': { title: 'Continue reviewed', description: 'An IDE plugin in detail' },
        'ca-cline': { title: 'Cline reviewed', description: 'An assistant in detail' },
      },
    },
    'document-pdf-chat': {
      label: 'Documents & PDF Chat',
      links: {
        'dp-comp': { title: 'Knowledge and search compared', description: 'Documents and RAG side by side' },
        'dp-anything': { title: 'AnythingLLM reviewed', description: 'Chat with documents' },
        'dp-ragflow': { title: 'RAGFlow reviewed', description: 'Document understanding in detail' },
      },
    },
    'rag-vector-databases': {
      label: 'RAG & Vector Databases',
      links: {
        'rv-comp': { title: 'Knowledge and search compared', description: 'RAG and vector databases at a glance' },
        'rv-llama': { title: 'LlamaIndex reviewed', description: 'A RAG framework in detail' },
        'rv-qdrant': { title: 'Qdrant reviewed', description: 'A vector database in detail' },
      },
    },
    'image-generation': {
      label: 'Image Generation',
      links: {
        'ig-comp': { title: 'Image and video compared', description: 'Tools side by side' },
        'ig-comfy': { title: 'ComfyUI reviewed', description: 'An image generator in detail' },
        'ig-fooocus': { title: 'Fooocus reviewed', description: 'An easy way to get started' },
      },
    },
    'speech-to-text': {
      label: 'Speech Recognition',
      links: {
        'st-comp': { title: 'Speech and audio compared', description: 'Tools side by side' },
        'st-whisper': { title: 'Whisper.cpp reviewed', description: 'Speech recognition in detail' },
        'st-ha': { title: 'Whisper for Home Assistant', description: 'Run voice control locally' },
      },
    },
    'text-to-speech-voice': {
      label: 'Text-to-Speech & Voice',
      links: {
        'tv-comp': { title: 'Speech and audio compared', description: 'Tools side by side' },
        'tv-voicebox': { title: 'Voicebox reviewed', description: 'Speech output in detail' },
        'tv-dir': { title: 'Software directory', description: 'Browse all apps' },
      },
    },
    'personal-assistants': {
      label: 'Personal Assistants',
      links: {
        'pa-comp': { title: 'Chat and assistants compared', description: 'Assistants side by side' },
        'pa-ha': { title: 'Home Assistant Assist reviewed', description: 'A voice assistant in detail' },
        'pa-claw': { title: 'OpenClaw reviewed', description: 'An assistant in detail' },
      },
    },
    'vision-ocr': {
      label: 'Image Recognition & OCR',
      links: {
        'vo-comp': { title: 'Image and video compared', description: 'Tools side by side' },
        'vo-llava': { title: 'LLaVA reviewed', description: 'Image understanding in detail' },
        'vo-immich': { title: 'Immich reviewed', description: 'Manage photos locally' },
      },
    },
    'workflow-automation': {
      label: 'Workflows & Automation',
      links: {
        'wa-n8n': { title: 'n8n reviewed', description: 'Building workflows in detail' },
        'wa-dify': { title: 'Dify reviewed', description: 'A workflow builder in detail' },
        'wa-langflow': { title: 'Langflow reviewed', description: 'Visual orchestration in detail' },
      },
    },
    'promptquorum-apps': {
      label: 'PQ Apps',
      links: {
        'pq-hub': { title: 'PQ Apps', description: 'The apps from PromptQuorum' },
        'pq-dir': { title: 'Software directory', description: 'Browse all apps' },
        'pq-about': { title: 'About us', description: 'Who is behind PromptQuorum' },
      },
    },
    default: {
      label: 'General',
      links: {
        'df-dir': { title: 'Software directory', description: 'Browse and filter all apps' },
        'df-ll': { title: 'Local LLMs', description: 'Getting started with local AI' },
        'df-run': { title: 'What can I run?', description: 'Check your hardware' },
      },
    },
  },
}
