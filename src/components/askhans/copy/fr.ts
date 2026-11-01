import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: "Assistant IA pour l'IA locale",
  close: "Fermer — Ask Hans reste disponible sous forme d'icône",
  maximize: 'Plein écran',
  restore: 'Rétablir la taille de la fenêtre',
  newChat: 'Nouveau',
  newChatLabel: 'Démarrer une nouvelle conversation',
  logoLabel: 'Ouvrir Ask Hans (double-clic)',
  logoTitle: 'Ask Hans — double-clic pour ouvrir',

  welcomeTitle: "Bienvenue sur Ask Hans, votre guide interactif de l'IA locale.",
  welcomeBody:
    "Je parcours les contenus de PromptQuorum et réponds à vos questions sur les applications, le matériel et les guides. Choisissez un point de départ ou posez votre propre question ci-dessous.",
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'Trouver les applications et guides adaptés', question: "Quelles applications et quels guides me conviennent ? Je souhaite essayer l'IA locale." },
    { icon: 'ArrowLeftRight', title: 'Comparer des applications et découvrir des alternatives', question: 'Pouvez-vous m’aider à comparer des applications et à trouver des alternatives ?' },
    { icon: 'Cpu', title: 'Vérifier si votre matériel peut exécuter un modèle', question: "Mon matériel peut-il exécuter un modèle d'IA donné ? Interrogez-moi sur mon ordinateur, s'il vous plaît." },
    { icon: 'Scale', title: 'Comprendre les licences et recommander une pile logicielle adaptée', question: "Expliquez-moi les licences et recommandez-moi une pile logicielle adaptée à l'IA locale." },
  ],

  previousChat: (n: number) => `Conversation précédente · ${n} ${n === 1 ? 'message' : 'messages'}`,
  continueChat: 'Poursuivre la conversation ici',

  inputLabel: 'Votre question à Ask Hans',
  inputPlaceholder: 'Poser une question …',
  send: 'Envoyer',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: "Ask Hans est une IA et peut se tromper. Merci de ne saisir aucune donnée personnelle.",
  withdraw: 'Retirer le consentement',
  thinking: 'Ask Hans réfléchit …',
  searching: 'Recherche dans PromptQuorum …',
  panelTools: 'Utilisation d’un outil …',

  errors: {
    unavailable: "Ask Hans n'est pas joignable pour le moment.",
    failed: "Cela n'a malheureusement pas fonctionné. Veuillez réessayer.",
    rephrase: "Je n'ai malheureusement pas pu répondre à cette question. Veuillez la reformuler ou la diviser en plusieurs questions plus courtes.",
    rate: "Beaucoup de questions ont été posées à l'instant. Veuillez patienter un moment, puis réessayer.",
    limit: (n: number) => `La limite de ${n} messages est atteinte pour cette visite.`,
    refused: "Je ne peux malheureusement rien dire à ce sujet. N'hésitez pas à poser une autre question.",
    disabled: "Ask Hans n'est pas disponible pour le moment.",
    tooLong: (max: number) => `Merci d'être plus bref : les questions ne doivent pas dépasser ${max} caractères.`,
  },
  retry: 'Réessayer',

  panelLabelPrefix: 'Thème',
  panelLinksHeading: 'Pages associées',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'Avant de commencer',
  consentParagraphs: [
    "Ask Hans répond à vos questions à l'aide d'une IA (Claude d'Anthropic) à partir des contenus de PromptQuorum. Pour cela, votre saisie est transmise à notre serveur et à Anthropic. Merci de ne saisir aucune donnée personnelle.",
    "En choisissant « Oui, j'accepte », vous nous autorisez en outre à enregistrer de manière anonyme les thèmes abordés et les liens utilisés. Le texte de votre question n'est pas conservé. Sans votre accord, vous pouvez tout de même utiliser Ask Hans. Vous pouvez retirer votre consentement à tout moment.",
  ],
  consentPrivacyLink: 'Plus de détails dans la politique de confidentialité.',
  consentPrivacyHref: '/fr/privacy',
  consentYes: "Oui, j'accepte",
  consentNo: 'Non, merci',
  consentQuestionLabel: 'Votre question (envoyée après votre choix) :',

  dir: 'ltr',
  devNotice: 'Outil en développement – nous attendons vos retours avec plaisir.',
  contactLabel: 'Envoyer un retour par e-mail',
  welcomeAria: 'Bienvenue',
  feedback: {
    prompt: 'Dans quelle mesure Ask Hans vous a-t-il été utile ?',
    star: (n: number) => `${n} étoile${n === 1 ? '' : 's'} sur 5`,
    commentPlaceholder: 'Facultatif : que pouvons-nous améliorer ? Merci de ne saisir aucune donnée personnelle.',
    send: 'Envoyer le retour',
    thanks: 'Merci pour votre retour !',
    error: "Le retour n'a pas pu être envoyé. Veuillez réessayer plus tard.",
  },
  panel: {
    relatedHeading: "En lien avec votre question",
    relatedEarlier: "Réponses précédentes",
    panelHide: "Masquer le panneau thématique",
    panelShow: "Afficher le panneau thématique",
    historyHeading: "Conversations précédentes",
    historyHide: "Masquer les conversations précédentes",
    historyShow: (n: number) => `Afficher les conversations précédentes (${n})`,
  },

  search: {
    badge: "Nouveau · Bêta",
    headline: "Posez votre question — Ask Hans répond",
    pitch: "Au lieu d'une liste de liens, vous obtenez une réponse construite à partir de l'annuaire de logiciels, des guides et des données matérielles de PromptQuorum, dans votre langue. Une nouvelle forme de recherche sur le site, encore en développement.",
    examples: ["Quelle appli peut chercher dans mes PDF en local ?", "Llama tourne-t-il sur un Mac avec 16 Go ?", "Quel mini-PC convient comme serveur Home Assistant ?"],
    placeholder: 'Posez votre question...',
    ariaLabel: "Poser une question à l'assistant",
    modalAriaLabel: 'Questions et réponses assistées par IA',
    hint: 'Saisissez votre question et appuyez sur Entrée',
    close: 'Fermer',
  },
  categories: {
    "prompt-engineering": {
      "label": "Prompt engineering",
      "links": {
        "pe-hub": {
          "title": "Prompt engineering",
          "description": "Tous les guides sur le sujet en un coup d'œil"
        },
        "pe-ides": {
          "title": "IDE de prompt engineering",
          "description": "Les meilleurs outils pour rédiger des prompts"
        },
        "pe-mgmt": {
          "title": "Gestion des prompts",
          "description": "Plateformes pour organiser vos prompts"
        }
      }
    },
    "local-llms": {
      "label": "LLM locaux",
      "links": {
        "ll-what": {
          "title": "Que sont les LLM locaux ?",
          "description": "Une introduction à l'IA locale"
        },
        "ll-ollama": {
          "title": "Installer Ollama",
          "description": "Pas à pas jusqu'à votre premier modèle"
        },
        "ll-beginner": {
          "title": "Modèles pour débutants",
          "description": "Quels modèles choisir pour commencer"
        }
      }
    },
    "mini-pcs": {
      "label": "Mini-PC",
      "links": {
        "mp-best": {
          "title": "Meilleurs mini-PC pour l'IA locale",
          "description": "Comparatif de mini-PC adaptés"
        },
        "mp-amd": {
          "title": "Mini-PC AMD",
          "description": "Aperçu des mini-PC à processeur AMD"
        },
        "mp-run": {
          "title": "Que puis-je exécuter ?",
          "description": "Vérifier le matériel et trouver les modèles adaptés"
        }
      }
    },
    "gpus-vram": {
      "label": "Cartes graphiques et VRAM",
      "links": {
        "gp-best": {
          "title": "Meilleurs GPU pour les LLM locaux",
          "description": "Comparatif de cartes graphiques"
        },
        "gp-apple": {
          "title": "Apple Silicon ou NVIDIA ?",
          "description": "Comparaison de deux plateformes"
        },
        "gp-can": {
          "title": "Est-ce compatible avec mon PC ?",
          "description": "Vérifier la compatibilité soi-même"
        }
      }
    },
    "smart-home": {
      "label": "Maison connectée",
      "links": {
        "sh-hub": {
          "title": "Maison connectée",
          "description": "L'IA locale à la maison"
        },
        "sh-ha": {
          "title": "Démarrer avec Home Assistant",
          "description": "Premiers pas avec Home Assistant"
        },
        "sh-hw": {
          "title": "Matériel pour une maison connectée locale",
          "description": "Quels appareils conviennent"
        }
      }
    },
    "balcony-solar": {
      "label": "Solaire de balcon",
      "links": {
        "bs-hub": {
          "title": "Solaire de balcon",
          "description": "Notions de base et vue d'ensemble"
        },
        "bs-batt": {
          "title": "Stockage pour le solaire de balcon",
          "description": "Aperçu des batteries de stockage"
        },
        "bs-anker": {
          "title": "Anker Solix en un coup d'œil",
          "description": "Un système en détail"
        }
      }
    },
    "find-app": {
      "label": "Trouver une application",
      "links": {
        "fa-dir": {
          "title": "Répertoire de logiciels",
          "description": "Parcourir et filtrer toutes les applications"
        },
        "fa-iphone": {
          "title": "Applications pour iPhone",
          "description": "L'IA locale sur iPhone"
        },
        "fa-android": {
          "title": "Applications pour Android",
          "description": "L'IA locale sur Android"
        }
      }
    },
    "chat-clients": {
      "label": "Clients de chat",
      "links": {
        "cc-comp": {
          "title": "Comparatif des applications de chat",
          "description": "Chat et assistants face à face"
        },
        "cc-anything": {
          "title": "Test d'AnythingLLM",
          "description": "Un client de chat en détail"
        },
        "cc-jan": {
          "title": "Test de Jan",
          "description": "Un client de chat en détail"
        }
      }
    },
    "inference-engines": {
      "label": "Moteurs d'inférence",
      "links": {
        "ie-comp": {
          "title": "Comparatif des moteurs",
          "description": "Exécution et déploiement en un coup d'œil"
        },
        "ie-ollama": {
          "title": "Test d'Ollama",
          "description": "Le moteur le plus connu en détail"
        },
        "ie-lms": {
          "title": "Test de LM Studio",
          "description": "Un logiciel de bureau en détail"
        }
      }
    },
    "agent-frameworks": {
      "label": "Frameworks d'agents",
      "links": {
        "af-comp": {
          "title": "Comparatif code et développement",
          "description": "Agents et frameworks face à face"
        },
        "af-langchain": {
          "title": "Test de LangChain",
          "description": "Un framework en détail"
        },
        "af-openclaw": {
          "title": "Test d'OpenClaw",
          "description": "Un agent en détail"
        }
      }
    },
    "code-assistants": {
      "label": "Assistants de code",
      "links": {
        "ca-comp": {
          "title": "Comparatif code et développement",
          "description": "Assistants et plugins face à face"
        },
        "ca-continue": {
          "title": "Test de Continue",
          "description": "Un plugin d'IDE en détail"
        },
        "ca-cline": {
          "title": "Test de Cline",
          "description": "Un assistant en détail"
        }
      }
    },
    "document-pdf-chat": {
      "label": "Documents et chat PDF",
      "links": {
        "dp-comp": {
          "title": "Comparatif connaissances et recherche",
          "description": "Documents et RAG face à face"
        },
        "dp-anything": {
          "title": "Test d'AnythingLLM",
          "description": "Discuter avec ses documents"
        },
        "dp-ragflow": {
          "title": "Test de RAGFlow",
          "description": "La compréhension de documents en détail"
        }
      }
    },
    "rag-vector-databases": {
      "label": "RAG et bases vectorielles",
      "links": {
        "rv-comp": {
          "title": "Comparatif connaissances et recherche",
          "description": "RAG et bases vectorielles en un coup d'œil"
        },
        "rv-llama": {
          "title": "Test de LlamaIndex",
          "description": "Un framework RAG en détail"
        },
        "rv-qdrant": {
          "title": "Test de Qdrant",
          "description": "Une base vectorielle en détail"
        }
      }
    },
    "image-generation": {
      "label": "Génération d'images",
      "links": {
        "ig-comp": {
          "title": "Comparatif image et vidéo",
          "description": "Outils face à face"
        },
        "ig-comfy": {
          "title": "Test de ComfyUI",
          "description": "Un générateur d'images en détail"
        },
        "ig-fooocus": {
          "title": "Test de Fooocus",
          "description": "Une prise en main simple"
        }
      }
    },
    "speech-to-text": {
      "label": "Reconnaissance vocale",
      "links": {
        "st-comp": {
          "title": "Comparatif voix et audio",
          "description": "Outils face à face"
        },
        "st-whisper": {
          "title": "Test de Whisper.cpp",
          "description": "La reconnaissance vocale en détail"
        },
        "st-ha": {
          "title": "Whisper pour Home Assistant",
          "description": "Faire fonctionner la commande vocale en local"
        }
      }
    },
    "text-to-speech-voice": {
      "label": "Synthèse vocale et voix",
      "links": {
        "tv-comp": {
          "title": "Comparatif voix et audio",
          "description": "Outils face à face"
        },
        "tv-voicebox": {
          "title": "Test de Voicebox",
          "description": "La synthèse vocale en détail"
        },
        "tv-dir": {
          "title": "Répertoire de logiciels",
          "description": "Parcourir toutes les applications"
        }
      }
    },
    "personal-assistants": {
      "label": "Assistants personnels",
      "links": {
        "pa-comp": {
          "title": "Comparatif chat et assistants",
          "description": "Assistants face à face"
        },
        "pa-ha": {
          "title": "Test de Home Assistant Assist",
          "description": "Un assistant vocal en détail"
        },
        "pa-claw": {
          "title": "Test d'OpenClaw",
          "description": "Un assistant en détail"
        }
      }
    },
    "vision-ocr": {
      "label": "Vision par ordinateur et OCR",
      "links": {
        "vo-comp": {
          "title": "Comparatif image et vidéo",
          "description": "Outils face à face"
        },
        "vo-llava": {
          "title": "Test de LLaVA",
          "description": "La compréhension d'images en détail"
        },
        "vo-immich": {
          "title": "Test d'Immich",
          "description": "Gérer ses photos en local"
        }
      }
    },
    "workflow-automation": {
      "label": "Workflows et automatisation",
      "links": {
        "wa-n8n": {
          "title": "Test de n8n",
          "description": "Créer des workflows en détail"
        },
        "wa-dify": {
          "title": "Test de Dify",
          "description": "Un constructeur de workflows en détail"
        },
        "wa-langflow": {
          "title": "Test de Langflow",
          "description": "L'orchestration visuelle en détail"
        }
      }
    },
    "promptquorum-apps": {
      "label": "Applications PQ",
      "links": {
        "pq-hub": {
          "title": "Applications PQ",
          "description": "Les applications de PromptQuorum"
        },
        "pq-dir": {
          "title": "Répertoire de logiciels",
          "description": "Parcourir toutes les applications"
        },
        "pq-about": {
          "title": "À propos",
          "description": "Qui se cache derrière PromptQuorum"
        }
      }
    },
    "default": {
      "label": "Général",
      "links": {
        "df-dir": {
          "title": "Répertoire de logiciels",
          "description": "Parcourir et filtrer toutes les applications"
        },
        "df-ll": {
          "title": "LLM locaux",
          "description": "Une introduction à l'IA locale"
        },
        "df-run": {
          "title": "Que puis-je exécuter ?",
          "description": "Vérifier le matériel"
        }
      }
    }
  },
}
