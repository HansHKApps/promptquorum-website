import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'Assistente de IA para IA local',
  close: 'Fechar — o Ask Hans permanece como ícone',
  maximize: 'Tela cheia',
  restore: 'Restaurar tamanho da janela',
  newChat: 'Novo',
  newChatLabel: 'Iniciar nova conversa',
  powerSwitch: "Modo Power",
  powerSwitchTitle: "Configurações guiadas com um relatório completo",
  logoLabel: 'Abrir o Ask Hans',
  logoTitle: 'Ask Hans — clique para abrir',

  welcomeTitle: 'Bem-vindo ao Ask Hans, seu guia interativo para IA local.',
  welcomeBody:
    'Eu pesquiso o conteúdo do PromptQuorum e respondo às suas perguntas sobre apps, hardware e guias. Escolha um ponto de partida ou faça sua própria pergunta abaixo.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'Encontrar apps e guias adequados', question: 'Quais apps e guias combinam comigo? Quero experimentar IA local.' },
    { icon: 'ArrowLeftRight', title: 'Comparar apps e indicar alternativas', question: 'Você pode me ajudar a comparar apps e encontrar alternativas?' },
    { icon: 'Cpu', title: 'Verificar se o seu hardware roda um modelo', question: 'Meu hardware consegue rodar um determinado modelo de IA? Por favor, pergunte sobre o meu computador.' },
    { icon: 'Scale', title: 'Explicar licenças e recomendar um stack de software adequado', question: 'Explique-me as licenças e recomende um stack de software adequado para IA local.' },
  ],

  previousChat: (n: number) => `Conversa anterior · ${n} ${n === 1 ? 'mensagem' : 'mensagens'}`,
  continueChat: 'Continuar a conversa aqui',

  inputLabel: 'Sua pergunta para o Ask Hans',
  inputPlaceholder: 'Faça uma pergunta …',
  send: 'Enviar',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'O Ask Hans é uma IA e pode errar. Por favor, não informe dados pessoais.',
  withdraw: 'Revogar consentimento',
  thinking: 'O Ask Hans está pensando …',
  searching: 'Pesquisando no PromptQuorum …',
  panelTools: 'Usando uma ferramenta …',

  errors: {
    unavailable: 'O Ask Hans está indisponível no momento.',
    failed: 'Infelizmente isso não funcionou. Por favor, tente novamente.',
    rephrase: 'Infelizmente não consegui responder a essa pergunta. Tente reformulá-la ou dividi-la em perguntas menores.',
    rate: 'Muitas perguntas foram feitas agora há pouco. Aguarde um momento e tente novamente.',
    limit: (n: number) => `O limite de ${n} mensagens para esta visita foi atingido.`,
    refused: 'Infelizmente não posso comentar sobre isso. Fique à vontade para fazer outra pergunta.',
    disabled: 'O Ask Hans não está disponível no momento.',
    tooLong: (max: number) => `Seja mais breve, por favor: as perguntas podem ter no máximo ${max} caracteres.`,
  },
  retry: 'Tentar novamente',
  followupsLabel: "Perguntas de acompanhamento sugeridas",

  panelLabelPrefix: 'Tema',
  panelLinksHeading: 'Páginas relacionadas',

  // Consent text as of 2026-11-06 (see docs/askhans-privacy.de.md). On any change bump ASK_HANS_CONSENT_TEXT_VERSION.
  consentTitle: 'Antes de começar',
  consentParagraphs: [
    'O Ask Hans responde às suas perguntas com a ajuda de IA (Claude, da Anthropic), com base no conteúdo do PromptQuorum. Para isso, o texto que você digita é enviado ao nosso servidor e à Anthropic. Por favor, não informe dados pessoais.',
    'Se você escolher “Sim, concordo”, permite que registremos de forma anônima, para fins estatísticos e para melhorar o Ask Hans e nossos conteúdos: o tema da sua pergunta, quais apps, categorias do diretório e ferramentas o Ask Hans consultou para responder, o idioma, em quais links você clica e quais funções você usa (por exemplo, perguntas de acompanhamento sugeridas ou iniciar uma nova conversa), o horário e um ID de visita aleatório que não está vinculado a você. As estatísticas não contêm o texto da pergunta nem da resposta, endereço IP ou nome. Publicamos apenas números agregados. Também contamos, em faixas aproximadas, se é uma visita recorrente e por quanto tempo o Ask Hans fica aberto. Para isso, o navegador memoriza no seu dispositivo (não no nosso servidor) o dia da primeira visita e quantas vezes você usou o Ask Hans; isso é apagado quando você retira o consentimento.',
    'Seu consentimento é voluntário. Você pode usar o Ask Hans sem ele e revogá-lo a qualquer momento, com efeito para o futuro. Como prova da sua decisão, armazenamos o horário, a versão do texto e o ID de visita aleatório. Independentemente da sua escolha, contamos de forma anônima quantas vezes o Ask Hans é aberto e quantas respostas são dadas (apenas totais: sem ID, sem texto). Sua escolha (sim ou não) fica guardada no seu navegador por um mês; depois disso, este aviso aparece novamente e pedimos seu consentimento outra vez.',
  ],
  consentPrivacyLink: 'Saiba mais na Política de Privacidade.',
  consentPrivacyHref: '/pt/privacy',
  consentSaveLabel: "Salvar minhas conversas neste dispositivo por 7 dias",
  consentSaveOn: "Salvas no seu navegador, neste computador, por 7 dias. Você pode excluí-las a qualquer momento.",
  consentSaveOff: "Suas conversas não são salvas. Elas desaparecem quando você fecha a página.",
  consentYes: 'Sim, concordo',
  consentNo: 'Não, obrigado',
  consentQuestionLabel: 'Sua pergunta (será enviada após a sua escolha):',

  dir: 'ltr',
  devNotice: 'Ferramenta em desenvolvimento – aguardamos o seu feedback.',
  copyright: "As respostas do Ask Hans são conteúdo da PromptQuorum e protegidas por direitos autorais. O uso pessoal e citações curtas com link para promptquorum.com são permitidos. Cópia em massa, extração automatizada, republicação e uso para treinar IA exigem autorização por escrito.",
  contactLabel: 'Enviar feedback por e-mail',
  welcomeAria: 'Boas-vindas',
  feedback: {
    prompt: 'Quão útil é o Ask Hans?',
    star: (n: number) => `${n} de 5 estrelas`,
    thanks: 'Obrigado pelo seu feedback!',
    error: 'Não foi possível enviar o feedback. Por favor, tente novamente mais tarde.',
    followup: {
      title: 'Lamentamos que não tenha sido mais útil.',
      body: 'O que podemos melhorar? Quer nos enviar feedback por e-mail? Preenchemos os detalhes; acrescente suas próprias palavras antes de enviar.',
      include: 'Incluir minha pergunta e a resposta no e-mail, para que Hans veja o que deu errado.',
      note: 'Você pode editar o e-mail antes de enviar; nada é transmitido até você enviá-lo. Não inclua dados pessoais.',
      write: 'Escrever um e-mail',
      skip: 'Não, obrigado',
      copied: 'Os detalhes também foram copiados para a área de transferência.',
      mail: { subject: 'Feedback sobre o Ask Hans ({n}/5)', intro: 'O que podemos melhorar? Escreva aqui:', rating: 'Avaliação', language: 'Idioma', page: 'Página', question: 'Última pergunta', answer: 'Última resposta' },
    },
  },
  info: {
    label: "Sobre o Ask Hans",
    title: "O que é o Ask Hans?",
    intro: "O Ask Hans é um assistente de IA que responde às suas perguntas usando somente o conteúdo próprio do PromptQuorum: o diretório de software, os guias, as análises e os dados de hardware deste site. É uma ferramenta beta em desenvolvimento e não é o próprio Hans.",
    canTitle: "O que ele pode fazer",
    can: ["Encontrar e comparar apps de IA local do diretório de software e citar alternativas.", "Verificar se o seu hardware (RAM, VRAM) consegue executar um modelo.", "Explicar licenças de software em linguagem simples e sugerir um stack de software.", "Indicar os guias, análises e páginas de hardware correspondentes neste site, no seu idioma."],
    cannotTitle: "O que ele não pode fazer",
    cannot: ["Pesquisar qualquer coisa fora de promptquorum.com: sem busca na web, sem notícias, sem previsão do tempo, sem preços em tempo real.", "Acertar sempre: é uma IA e pode errar. Confira os fatos importantes nas páginas indicadas.", "Dar orientação jurídica, médica, financeira ou de instalação elétrica. Para isso, consulte um profissional qualificado.", "Lembrar de você depois que você sair: as conversas ficam no seu navegador (por 7 dias, só se você escolher salvá-las) e não são armazenadas no nosso servidor.", "Instalar, alterar ou comprar qualquer coisa por você, nem responder sem limite: {messages} perguntas por visita, {chars} caracteres por pergunta."],
    privacy: "Sua pergunta é enviada ao nosso servidor e à Anthropic (Claude) para gerar a resposta. Por favor, não informe dados pessoais.",
    close: "Fechar",
  },

  copyUi: {
    copy: "Copiar",
    copied: "Copiado",
    copyAnswer: "Copiar resposta",
    moreOptions: "Mais opções de cópia e compartilhamento",
    copyFormatted: "Copiar com formatação",
    copyPlain: "Copiar como texto simples",
    shareEmail: "Enviar por e-mail",
    shareWhatsApp: "Enviar pelo WhatsApp",
    shareTelegram: "Enviar pelo Telegram",
    shareMore: "Compartilhar…",
    emailSubject: "Resposta do Ask Hans (PromptQuorum)",
  },

  promo: {
    title: "Gostou do Ask Hans?",
    body: "Até onde sabemos, o Ask Hans e o servidor MCP do PromptQuorum são o único site sobre IA local com um assistente de IA e um servidor MCP que conseguem ler o site inteiro. Se eles ajudam você, compartilhe com seus amigos.",
    share: "Compartilhar com amigos",
    copyLink: "Copiar link",
    linkCopied: "Link copiado",
    shareText: "Ask Hans: o assistente de IA do PromptQuorum para IA local, hardware e casa inteligente.",
    close: "Ocultar",
    imageAlt: "Ask Hans e o MCP do PromptQuorum: até onde sabemos, o único site de IA local com os dois",
  },

  panel: {
    relatedHeading: "Relacionado à sua pergunta",
    relatedEarlier: "Respostas anteriores",
    panelHide: "Ocultar painel de temas",
    panelShow: "Mostrar painel de temas",
    historyHeading: "Conversas anteriores",
    historyHide: "Ocultar conversas anteriores",
    historyShow: (n: number) => `Mostrar conversas anteriores (${n})`,
    historyClear: "Excluir conversas salvas",
  },

  search: {
    badge: "Novo · Beta",
    headline: "Faça sua pergunta — o Ask Hans responde",
    pitch: "Em vez de uma lista de links, você recebe uma resposta montada a partir do diretório de software, dos guias e dos dados de hardware da PromptQuorum, no seu idioma. Uma nova forma de busca no site, ainda em desenvolvimento.",
    examples: ["Qual app pesquisa meus PDFs localmente?", "O Llama roda em um Mac com 16 GB?", "Qual mini PC serve como servidor Home Assistant?"],
    placeholder: 'Faça sua pergunta...',
    ariaLabel: 'Fazer uma pergunta ao assistente',
    modalAriaLabel: 'Perguntas e respostas com IA',
    hint: 'Digite a pergunta e pressione Enter',
    close: 'Fechar',
  },
  categories: {
    'prompt-engineering': {
      label: 'Prompt Engineering',
      links: {
        'pe-hub': {
          title: 'Prompt Engineering',
          description: 'Todos os guias sobre o tema em um só lugar',
        },
        'pe-ides': {
          title: 'IDEs de Prompt Engineering',
          description: 'As melhores ferramentas para escrever prompts',
        },
        'pe-mgmt': {
          title: 'Gerenciamento de prompts',
          description: 'Plataformas para gerenciar prompts',
        },
      },
    },
    'local-llms': {
      label: 'LLMs locais',
      links: {
        'll-what': {
          title: 'O que são LLMs locais?',
          description: 'A porta de entrada para a IA local',
        },
        'll-ollama': {
          title: 'Instalar o Ollama',
          description: 'Passo a passo até o primeiro modelo',
        },
        'll-beginner': {
          title: 'Modelos para iniciantes',
          description: 'Quais modelos são bons para começar',
        },
      },
    },
    'mini-pcs': {
      label: 'Mini PCs',
      links: {
        'mp-best': {
          title: 'Melhores mini PCs para IA local',
          description: 'Comparação de mini PCs adequados',
        },
        'mp-amd': {
          title: 'Mini PCs com AMD',
          description: 'Visão geral de mini PCs com processador AMD',
        },
        'mp-run': {
          title: 'O que posso rodar?',
          description: 'Verifique o hardware e encontre os modelos certos',
        },
      },
    },
    'gpus-vram': {
      label: 'Placas de vídeo e VRAM',
      links: {
        'gp-best': {
          title: 'Melhores GPUs para LLMs locais',
          description: 'Placas de vídeo comparadas',
        },
        'gp-apple': {
          title: 'Apple Silicon ou NVIDIA?',
          description: 'Duas plataformas comparadas',
        },
        'gp-can': {
          title: 'Isso roda no meu PC?',
          description: 'Verifique a compatibilidade por conta própria',
        },
      },
    },
    'smart-home': {
      label: 'Casa inteligente',
      links: {
        'sh-hub': {
          title: 'Casa inteligente',
          description: 'IA local dentro de casa',
        },
        'sh-ha': {
          title: 'Primeiros passos com o Home Assistant',
          description: 'Como começar com o Home Assistant',
        },
        'sh-hw': {
          title: 'Hardware para casa inteligente local',
          description: 'Quais dispositivos são adequados',
        },
      },
    },
    'balcony-solar': {
      label: 'Energia solar de varanda',
      links: {
        'bs-hub': {
          title: 'Energia solar de varanda',
          description: 'Fundamentos e visão geral',
        },
        'bs-batt': {
          title: 'Armazenamento para energia solar de varanda',
          description: 'Visão geral de baterias de armazenamento',
        },
        'bs-anker': {
          title: 'Visão geral do Anker Solix',
          description: 'Um sistema em detalhes',
        },
      },
    },
    'find-app': {
      label: 'Encontrar app',
      links: {
        'fa-dir': {
          title: 'Diretório de software',
          description: 'Pesquise e filtre todos os apps',
        },
        'fa-iphone': {
          title: 'Apps para iPhone',
          description: 'IA local no iPhone',
        },
        'fa-android': {
          title: 'Apps para Android',
          description: 'IA local no Android',
        },
      },
    },
    'chat-clients': {
      label: 'Clientes de chat',
      links: {
        'cc-comp': {
          title: 'Apps de chat comparados',
          description: 'Chat e assistentes lado a lado',
        },
        'cc-anything': {
          title: 'AnythingLLM em teste',
          description: 'Um cliente de chat em detalhes',
        },
        'cc-jan': {
          title: 'Jan em teste',
          description: 'Um cliente de chat em detalhes',
        },
      },
    },
    'inference-engines': {
      label: 'Engines de inferência',
      links: {
        'ie-comp': {
          title: 'Engines comparadas',
          description: 'Execução e disponibilização em visão geral',
        },
        'ie-ollama': {
          title: 'Ollama em teste',
          description: 'A engine mais conhecida em detalhes',
        },
        'ie-lms': {
          title: 'LM Studio em teste',
          description: 'Um programa de desktop em detalhes',
        },
      },
    },
    'agent-frameworks': {
      label: 'Frameworks de agentes',
      links: {
        'af-comp': {
          title: 'Código e desenvolvimento comparados',
          description: 'Agentes e frameworks lado a lado',
        },
        'af-langchain': {
          title: 'LangChain em teste',
          description: 'Um framework em detalhes',
        },
        'af-openclaw': {
          title: 'OpenClaw em teste',
          description: 'Um agente em detalhes',
        },
      },
    },
    'code-assistants': {
      label: 'Assistentes de código',
      links: {
        'ca-comp': {
          title: 'Código e desenvolvimento comparados',
          description: 'Assistentes e plugins lado a lado',
        },
        'ca-continue': {
          title: 'Continue em teste',
          description: 'Um plugin de IDE em detalhes',
        },
        'ca-cline': {
          title: 'Cline em teste',
          description: 'Um assistente em detalhes',
        },
      },
    },
    'document-pdf-chat': {
      label: 'Documentos e chat com PDF',
      links: {
        'dp-comp': {
          title: 'Conhecimento e busca comparados',
          description: 'Documentos e RAG lado a lado',
        },
        'dp-anything': {
          title: 'AnythingLLM em teste',
          description: 'Converse com seus documentos',
        },
        'dp-ragflow': {
          title: 'RAGFlow em teste',
          description: 'Compreensão de documentos em detalhes',
        },
      },
    },
    'rag-vector-databases': {
      label: 'RAG e bancos de dados vetoriais',
      links: {
        'rv-comp': {
          title: 'Conhecimento e busca comparados',
          description: 'RAG e bancos de dados vetoriais em visão geral',
        },
        'rv-llama': {
          title: 'LlamaIndex em teste',
          description: 'Um framework de RAG em detalhes',
        },
        'rv-qdrant': {
          title: 'Qdrant em teste',
          description: 'Um banco de dados vetorial em detalhes',
        },
      },
    },
    'image-generation': {
      label: 'Geração de imagens',
      links: {
        'ig-comp': {
          title: 'Imagem e vídeo comparados',
          description: 'Ferramentas lado a lado',
        },
        'ig-comfy': {
          title: 'ComfyUI em teste',
          description: 'Um gerador de imagens em detalhes',
        },
        'ig-fooocus': {
          title: 'Fooocus em teste',
          description: 'Uma porta de entrada simples',
        },
      },
    },
    'speech-to-text': {
      label: 'Reconhecimento de voz',
      links: {
        'st-comp': {
          title: 'Voz e áudio comparados',
          description: 'Ferramentas lado a lado',
        },
        'st-whisper': {
          title: 'Whisper.cpp em teste',
          description: 'Reconhecimento de voz em detalhes',
        },
        'st-ha': {
          title: 'Whisper para o Home Assistant',
          description: 'Controle por voz rodando localmente',
        },
      },
    },
    'text-to-speech-voice': {
      label: 'Síntese de fala e voz',
      links: {
        'tv-comp': {
          title: 'Voz e áudio comparados',
          description: 'Ferramentas lado a lado',
        },
        'tv-voicebox': {
          title: 'Voicebox em teste',
          description: 'Síntese de fala em detalhes',
        },
        'tv-dir': {
          title: 'Diretório de software',
          description: 'Pesquise todos os apps',
        },
      },
    },
    'personal-assistants': {
      label: 'Assistentes pessoais',
      links: {
        'pa-comp': {
          title: 'Chat e assistentes comparados',
          description: 'Assistentes lado a lado',
        },
        'pa-ha': {
          title: 'Home Assistant Assist em teste',
          description: 'Um assistente de voz em detalhes',
        },
        'pa-claw': {
          title: 'OpenClaw em teste',
          description: 'Um assistente em detalhes',
        },
      },
    },
    'vision-ocr': {
      label: 'Visão computacional e OCR',
      links: {
        'vo-comp': {
          title: 'Imagem e vídeo comparados',
          description: 'Ferramentas lado a lado',
        },
        'vo-llava': {
          title: 'LLaVA em teste',
          description: 'Compreensão de imagens em detalhes',
        },
        'vo-immich': {
          title: 'Immich em teste',
          description: 'Gerencie fotos localmente',
        },
      },
    },
    'workflow-automation': {
      label: 'Fluxos de trabalho e automação',
      links: {
        'wa-n8n': {
          title: 'n8n em teste',
          description: 'Criação de fluxos de trabalho em detalhes',
        },
        'wa-dify': {
          title: 'Dify em teste',
          description: 'Um construtor de fluxos de trabalho em detalhes',
        },
        'wa-langflow': {
          title: 'Langflow em teste',
          description: 'Orquestração visual em detalhes',
        },
      },
    },
    'promptquorum-apps': {
      label: 'Apps PQ',
      links: {
        'pq-hub': {
          title: 'Apps PQ',
          description: 'Os apps do PromptQuorum',
        },
        'pq-dir': {
          title: 'Diretório de software',
          description: 'Pesquise todos os apps',
        },
        'pq-about': {
          title: 'Sobre nós',
          description: 'Quem está por trás do PromptQuorum',
        },
      },
    },
    default: {
      label: 'Geral',
      links: {
        'df-dir': {
          title: 'Diretório de software',
          description: 'Pesquise e filtre todos os apps',
        },
        'df-ll': {
          title: 'LLMs locais',
          description: 'A porta de entrada para a IA local',
        },
        'df-run': {
          title: 'O que posso rodar?',
          description: 'Verifique o hardware',
        },
      },
    },
  },
}
