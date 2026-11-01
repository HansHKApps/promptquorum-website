import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'Asistente de IA para IA local',
  close: 'Cerrar — Ask Hans se mantiene como icono',
  maximize: 'Pantalla completa',
  restore: 'Restablecer el tamaño de la ventana',
  newChat: 'Nuevo',
  newChatLabel: 'Iniciar una nueva conversación',
  logoLabel: 'Abrir Ask Hans (doble clic)',
  logoTitle: 'Ask Hans — doble clic para abrir',

  welcomeTitle: 'Bienvenido a Ask Hans, su guía interactiva de IA local.',
  welcomeBody:
    'Busco en los contenidos de PromptQuorum y respondo a sus preguntas sobre apps, hardware y guías. Elija un punto de partida o escriba abajo su propia pregunta.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'Encontrar apps y guías adecuadas', question: '¿Qué apps y guías me convienen? Quiero probar la IA local.' },
    { icon: 'ArrowLeftRight', title: 'Comparar apps y sugerir alternativas', question: '¿Puedes ayudarme a comparar apps y a encontrar alternativas?' },
    { icon: 'Cpu', title: 'Comprobar si su hardware puede ejecutar un modelo', question: '¿Puede mi hardware ejecutar un modelo de IA concreto? Pregúntame por mi equipo, por favor.' },
    { icon: 'Scale', title: 'Explicar licencias y recomendar un stack de software adecuado', question: 'Explícame las licencias y recomiéndame un stack de software adecuado para IA local.' },
  ],

  previousChat: (n: number) => `Conversación anterior · ${n} ${n === 1 ? 'mensaje' : 'mensajes'}`,
  continueChat: 'Seguir chateando aquí',

  inputLabel: 'Su pregunta para Ask Hans',
  inputPlaceholder: 'Haga una pregunta …',
  send: 'Enviar',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans es una IA y puede equivocarse. No introduzca datos personales.',
  withdraw: 'Revocar el consentimiento',
  thinking: 'Ask Hans está pensando …',
  searching: 'Buscando en PromptQuorum …',
  panelTools: 'Usando una herramienta …',

  errors: {
    unavailable: 'Ask Hans no está disponible en este momento.',
    failed: 'Lamentablemente, no ha funcionado. Inténtelo de nuevo.',
    rephrase: 'No he podido responder a esa pregunta. Reformúlela o divídala en preguntas más pequeñas, por favor.',
    rate: 'Se han hecho muchísimas preguntas en poco tiempo. Espere un momento e inténtelo de nuevo.',
    limit: (n: number) => `Se ha alcanzado el límite de ${n} mensajes para esta visita.`,
    refused: 'Lamentablemente, no puedo decir nada al respecto. Haga otra pregunta, por favor.',
    disabled: 'Ask Hans no está disponible por ahora.',
    tooLong: (max: number) => `Sea más breve, por favor: las preguntas pueden tener como máximo ${max} caracteres.`,
  },
  retry: 'Reintentar',

  panelLabelPrefix: 'Tema',
  panelLinksHeading: 'Páginas relacionadas',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'Antes de empezar',
  consentParagraphs: [
    'Ask Hans responde a sus preguntas con ayuda de una IA (Claude, de Anthropic) a partir de los contenidos de PromptQuorum. Para ello, su entrada se transmite a nuestro servidor y a Anthropic. No introduzca datos personales.',
    'Al pulsar «Sí, de acuerdo», nos permite además registrar de forma anónima qué temas se consultan y qué enlaces se usan. No guardamos el texto de su pregunta. También puede usar Ask Hans sin dar su consentimiento. Puede revocar su consentimiento en cualquier momento.',
  ],
  consentPrivacyLink: 'Más información en la política de privacidad.',
  consentPrivacyHref: '/es/privacy',
  consentYes: 'Sí, de acuerdo',
  consentNo: 'No, gracias',
  consentQuestionLabel: 'Su pregunta (se enviará según su elección):',

  dir: 'ltr',
  devNotice: 'Herramienta en desarrollo: agradecemos sus comentarios.',
  contactLabel: 'Enviar comentarios por correo electrónico',
  welcomeAria: 'Bienvenida',
  feedback: {
    prompt: '¿Qué tan útil es Ask Hans?',
    star: (n: number) => `${n} de 5 estrellas`,
    commentPlaceholder: 'Opcional: ¿qué podemos mejorar? No incluya datos personales.',
    send: 'Enviar comentarios',
    thanks: '¡Gracias por sus comentarios!',
    error: 'No se pudieron enviar los comentarios. Inténtelo de nuevo más tarde.',
  },
  panel: {
    relatedHeading: "Relacionado con su pregunta",
    panelHide: "Ocultar panel de temas",
    panelShow: "Mostrar panel de temas",
    historyHeading: "Conversaciones anteriores",
    historyHide: "Ocultar conversaciones anteriores",
    historyShow: (n: number) => `Mostrar conversaciones anteriores (${n})`,
  },

  search: {
    badge: "Nuevo · Beta",
    headline: "Haz tu pregunta — Ask Hans responde",
    pitch: "En lugar de una lista de enlaces, recibes una respuesta elaborada a partir del directorio de software, las guías y los datos de hardware de PromptQuorum, en tu idioma. Una nueva forma de buscar en el sitio, todavía en desarrollo.",
    examples: ["¿Qué app puede buscar en mis PDF en local?", "¿Funciona Llama en un Mac con 16 GB?", "¿Qué mini PC sirve como servidor de Home Assistant?"],
    placeholder: "Haz tu pregunta...",
    ariaLabel: "Hacer una pregunta al asistente",
    modalAriaLabel: "Preguntas y respuestas con IA",
    hint: "Escribe tu pregunta y pulsa Intro",
    close: 'Cerrar',
  },
  categories: {
    "prompt-engineering": {
      "label": "Prompt Engineering",
      "links": {
        "pe-hub": {
          "title": "Prompt Engineering",
          "description": "Todas las guías del tema de un vistazo"
        },
        "pe-ides": {
          "title": "IDEs de prompt engineering",
          "description": "Las mejores herramientas para escribir prompts"
        },
        "pe-mgmt": {
          "title": "Gestión de prompts",
          "description": "Plataformas para organizar prompts"
        }
      }
    },
    "local-llms": {
      "label": "LLM locales",
      "links": {
        "ll-what": {
          "title": "¿Qué son los LLM locales?",
          "description": "Introducción a la IA local"
        },
        "ll-ollama": {
          "title": "Instalar Ollama",
          "description": "Paso a paso hasta el primer modelo"
        },
        "ll-beginner": {
          "title": "Modelos para principiantes",
          "description": "Qué modelos son buenos para empezar"
        }
      }
    },
    "mini-pcs": {
      "label": "Mini PC",
      "links": {
        "mp-best": {
          "title": "Los mejores mini PC para IA local",
          "description": "Comparativa de mini PC adecuados"
        },
        "mp-amd": {
          "title": "Mini PC con AMD",
          "description": "Mini PC con procesador AMD de un vistazo"
        },
        "mp-run": {
          "title": "¿Qué puedo ejecutar?",
          "description": "Comprobar el hardware y encontrar modelos adecuados"
        }
      }
    },
    "gpus-vram": {
      "label": "GPU y VRAM",
      "links": {
        "gp-best": {
          "title": "Las mejores GPU para LLM locales",
          "description": "Comparativa de tarjetas gráficas"
        },
        "gp-apple": {
          "title": "¿Apple Silicon o NVIDIA?",
          "description": "Comparativa de dos plataformas"
        },
        "gp-can": {
          "title": "¿Funcionará en mi PC?",
          "description": "Comprobar la compatibilidad por su cuenta"
        }
      }
    },
    "smart-home": {
      "label": "Smart Home",
      "links": {
        "sh-hub": {
          "title": "Smart Home",
          "description": "IA local en casa"
        },
        "sh-ha": {
          "title": "Primeros pasos con Home Assistant",
          "description": "Cómo empezar con Home Assistant"
        },
        "sh-hw": {
          "title": "Hardware para un Smart Home local",
          "description": "Qué dispositivos son adecuados"
        }
      }
    },
    "balcony-solar": {
      "label": "Solar de balcón",
      "links": {
        "bs-hub": {
          "title": "Solar de balcón",
          "description": "Conceptos básicos y visión general"
        },
        "bs-batt": {
          "title": "Almacenamiento para solar de balcón",
          "description": "Baterías de almacenamiento de un vistazo"
        },
        "bs-anker": {
          "title": "Anker Solix de un vistazo",
          "description": "Un sistema en detalle"
        }
      }
    },
    "find-app": {
      "label": "Encontrar una app",
      "links": {
        "fa-dir": {
          "title": "Directorio de software",
          "description": "Explorar y filtrar todas las apps"
        },
        "fa-iphone": {
          "title": "Apps para iPhone",
          "description": "IA local en el iPhone"
        },
        "fa-android": {
          "title": "Apps para Android",
          "description": "IA local en Android"
        }
      }
    },
    "chat-clients": {
      "label": "Clientes de chat",
      "links": {
        "cc-comp": {
          "title": "Comparativa de apps de chat",
          "description": "Chat y asistentes frente a frente"
        },
        "cc-anything": {
          "title": "AnythingLLM a prueba",
          "description": "Un cliente de chat en detalle"
        },
        "cc-jan": {
          "title": "Jan a prueba",
          "description": "Un cliente de chat en detalle"
        }
      }
    },
    "inference-engines": {
      "label": "Motores de inferencia",
      "links": {
        "ie-comp": {
          "title": "Comparativa de motores",
          "description": "Ejecución y despliegue de un vistazo"
        },
        "ie-ollama": {
          "title": "Ollama a prueba",
          "description": "El motor más conocido en detalle"
        },
        "ie-lms": {
          "title": "LM Studio a prueba",
          "description": "Un programa de escritorio en detalle"
        }
      }
    },
    "agent-frameworks": {
      "label": "Frameworks de agentes",
      "links": {
        "af-comp": {
          "title": "Comparativa de código y desarrollo",
          "description": "Agentes y frameworks frente a frente"
        },
        "af-langchain": {
          "title": "LangChain a prueba",
          "description": "Un framework en detalle"
        },
        "af-openclaw": {
          "title": "OpenClaw a prueba",
          "description": "Un agente en detalle"
        }
      }
    },
    "code-assistants": {
      "label": "Asistentes de código",
      "links": {
        "ca-comp": {
          "title": "Comparativa de código y desarrollo",
          "description": "Asistentes y plugins frente a frente"
        },
        "ca-continue": {
          "title": "Continue a prueba",
          "description": "Un plugin para IDE en detalle"
        },
        "ca-cline": {
          "title": "Cline a prueba",
          "description": "Un asistente en detalle"
        }
      }
    },
    "document-pdf-chat": {
      "label": "Documentos y chat con PDF",
      "links": {
        "dp-comp": {
          "title": "Comparativa de conocimiento y búsqueda",
          "description": "Documentos y RAG frente a frente"
        },
        "dp-anything": {
          "title": "AnythingLLM a prueba",
          "description": "Chatear con documentos"
        },
        "dp-ragflow": {
          "title": "RAGFlow a prueba",
          "description": "Comprensión de documentos en detalle"
        }
      }
    },
    "rag-vector-databases": {
      "label": "RAG y bases de datos vectoriales",
      "links": {
        "rv-comp": {
          "title": "Comparativa de conocimiento y búsqueda",
          "description": "RAG y bases de datos vectoriales de un vistazo"
        },
        "rv-llama": {
          "title": "LlamaIndex a prueba",
          "description": "Un framework RAG en detalle"
        },
        "rv-qdrant": {
          "title": "Qdrant a prueba",
          "description": "Una base de datos vectorial en detalle"
        }
      }
    },
    "image-generation": {
      "label": "Generación de imágenes",
      "links": {
        "ig-comp": {
          "title": "Comparativa de imagen y vídeo",
          "description": "Herramientas frente a frente"
        },
        "ig-comfy": {
          "title": "ComfyUI a prueba",
          "description": "Un generador de imágenes en detalle"
        },
        "ig-fooocus": {
          "title": "Fooocus a prueba",
          "description": "Una forma sencilla de empezar"
        }
      }
    },
    "speech-to-text": {
      "label": "Reconocimiento de voz",
      "links": {
        "st-comp": {
          "title": "Comparativa de voz y audio",
          "description": "Herramientas frente a frente"
        },
        "st-whisper": {
          "title": "Whisper.cpp a prueba",
          "description": "Reconocimiento de voz en detalle"
        },
        "st-ha": {
          "title": "Whisper para Home Assistant",
          "description": "Usar el control por voz en local"
        }
      }
    },
    "text-to-speech-voice": {
      "label": "Síntesis de voz",
      "links": {
        "tv-comp": {
          "title": "Comparativa de voz y audio",
          "description": "Herramientas frente a frente"
        },
        "tv-voicebox": {
          "title": "Voicebox a prueba",
          "description": "Síntesis de voz en detalle"
        },
        "tv-dir": {
          "title": "Directorio de software",
          "description": "Explorar todas las apps"
        }
      }
    },
    "personal-assistants": {
      "label": "Asistentes personales",
      "links": {
        "pa-comp": {
          "title": "Comparativa de chat y asistentes",
          "description": "Asistentes frente a frente"
        },
        "pa-ha": {
          "title": "Home Assistant Assist a prueba",
          "description": "Un asistente de voz en detalle"
        },
        "pa-claw": {
          "title": "OpenClaw a prueba",
          "description": "Un asistente en detalle"
        }
      }
    },
    "vision-ocr": {
      "label": "Visión y OCR",
      "links": {
        "vo-comp": {
          "title": "Comparativa de imagen y vídeo",
          "description": "Herramientas frente a frente"
        },
        "vo-llava": {
          "title": "LLaVA a prueba",
          "description": "Comprensión de imágenes en detalle"
        },
        "vo-immich": {
          "title": "Immich a prueba",
          "description": "Gestionar fotos en local"
        }
      }
    },
    "workflow-automation": {
      "label": "Flujos de trabajo y automatización",
      "links": {
        "wa-n8n": {
          "title": "n8n a prueba",
          "description": "Crear flujos de trabajo en detalle"
        },
        "wa-dify": {
          "title": "Dify a prueba",
          "description": "Un constructor de flujos en detalle"
        },
        "wa-langflow": {
          "title": "Langflow a prueba",
          "description": "Orquestación visual en detalle"
        }
      }
    },
    "promptquorum-apps": {
      "label": "Apps de PQ",
      "links": {
        "pq-hub": {
          "title": "Apps de PQ",
          "description": "Las apps de PromptQuorum"
        },
        "pq-dir": {
          "title": "Directorio de software",
          "description": "Explorar todas las apps"
        },
        "pq-about": {
          "title": "Sobre nosotros",
          "description": "Quién está detrás de PromptQuorum"
        }
      }
    },
    "default": {
      "label": "General",
      "links": {
        "df-dir": {
          "title": "Directorio de software",
          "description": "Explorar y filtrar todas las apps"
        },
        "df-ll": {
          "title": "LLM locales",
          "description": "Introducción a la IA local"
        },
        "df-run": {
          "title": "¿Qué puedo ejecutar?",
          "description": "Comprobar el hardware"
        }
      }
    }
  },
}
