import type { AcademyCopy } from './types'

export const copy: AcademyCopy = {
  metaTitle: 'PromptQuorum Academy: aprende IA gratis, a tu medida',
  metaDescription:
    'Elige un tema, tu tiempo y tu nivel. PromptQuorum Academy crea lecciones cortas que se apoyan en las guías de PromptQuorum, con tutor de IA, tests y certificado PDF.',
  h1: 'PromptQuorum Academy',
  intro: 'Aprende IA local, prompting y temas relacionados en lecciones cortas adaptadas a tu tiempo y tu nivel. Gratis y sin cuenta.',
  howTitle: 'Cómo funciona',
  steps: [
    { name: 'Elegir', text: 'Indica un tema, tu tiempo disponible y tu nivel.' },
    { name: 'Diagnosticar', text: 'Unas preguntas rápidas muestran lo que ya sabes.' },
    { name: 'Personalizar', text: 'Recibes un programa pensado para tus lagunas.' },
    { name: 'Aprender', text: 'Lecciones de texto cortas que se apoyan en las guías de PromptQuorum.' },
    { name: 'Preguntar', text: 'Haz preguntas al tutor de IA mientras lees.' },
    { name: 'Evaluar', text: 'Preguntas con tres respuestas y una explicación para cada una.' },
    { name: 'Certificar', text: 'Llega al 70 % y descarga un certificado PDF.' },
  ],
  disclaimer:
    'Las lecciones las escribe una IA y pueden contener errores. El certificado registra tu aprendizaje; no es una titulación acreditada.',
  hubs: {
    'local-llms': 'LLM locales',
    'prompt-engineering': 'Prompt engineering',
    'power-local-llm': 'Apps de IA local',
    'prompt-bites': 'Respuestas rápidas sobre IA local',
    'smart-home': 'Hogar inteligente local',
    'balcony-solar': 'Solar de balcón',
  },

  subjectLabel: '¿Qué quieres aprender?',
  subjectPlaceholder: 'p. ej. Ejecutar un LLM local en mi portátil',
  subjectError: 'Escribe un tema o elige una sugerencia.',
  suggestions: 'Sugerencias',
  timeLegend: '¿Cuánto tiempo tienes?',
  minutes: (m) => (m >= 60 && m % 60 === 0 ? `${m / 60} h` : `${m} min`),
  levelLegend: 'Tu nivel',
  levels: {
    beginner: { label: 'Principiante', hint: 'Soy nuevo en el tema' },
    some: { label: 'Conocimientos básicos', hint: 'Conozco lo básico' },
    experienced: { label: 'Avanzado', hint: 'Quiero profundizar' },
  },
  testsLegend: 'Tests',
  tests: {
    none: { label: 'Sin test', hint: 'Solo aprender. Sin nota ni certificado.' },
    final: { label: 'Solo test final', hint: 'Un test al final. Necesario para el certificado.' },
    per_lesson_and_final: { label: 'Cada lección + test final', hint: 'Un quiz corto tras cada lección y luego el test final.' },
  },
  languageLabel: 'Idioma de tu programa',
  submit: 'Continuar al diagnóstico',
  restored: 'Hemos recuperado tu última configuración de este navegador.',
  startNew: 'Empezar de nuevo',
  storageBlocked: 'Este navegador no permite guardar. Puedes continuar, pero perderás tu progreso al cerrar la página.',
  loading: 'Cargando',

  diagnosticTitle: 'Diagnóstico rápido',
  diagnosticComing: 'Las preguntas de diagnóstico aún no están disponibles. Tu configuración está guardada:',
  summarySubject: 'Tema',
  summaryTime: 'Tiempo',
  summaryLevel: 'Nivel',
  summaryTests: 'Tests',
  summaryLanguage: 'Idioma',
  changeSetup: 'Cambiar configuración',

  privacyNote:
    'No necesitas cuenta. Tu progreso se guarda solo en este navegador. Para crear lecciones, preguntas y respuestas del tutor, tu tema, tus respuestas y tus mensajes al tutor se envían a nuestro proveedor de IA (Anthropic); no escribas datos personales en ellos. El nombre de tu certificado se queda en este navegador. Para evitar abusos, limitamos las solicitudes con una clave temporal cifrada (hash) derivada de tu dirección IP. Si dejas tu opinión, guardamos la valoración, el comentario y el tema que estudiaste, sin tu nombre ni cuenta.',
  deleteData: 'Borrar mis datos',
  deleteConfirm: '¿Borrar tu progreso de Academy de este navegador? No se puede deshacer.',
  dataDeleted: 'Datos borrados',
}
