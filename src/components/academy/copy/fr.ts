import type { AcademyCopy } from './types'

export const copy: AcademyCopy = {
  metaTitle: "PromptQuorum Academy : apprendre l'IA, gratuit",
  metaDescription:
    "Choisissez un sujet, votre temps et votre niveau. PromptQuorum Academy crée de courtes leçons qui s'appuient sur les guides PromptQuorum, avec tuteur IA, tests et certificat PDF.",
  h1: 'PromptQuorum Academy',
  intro: "Apprenez l'IA locale, le prompting et des sujets voisins en courtes leçons adaptées à votre temps et à votre niveau. Gratuit, sans compte.",
  howTitle: 'Comment ça marche',
  steps: [
    { name: 'Choisir', text: 'Indiquez un sujet, votre temps disponible et votre niveau.' },
    { name: 'Évaluer', text: 'Quelques questions rapides montrent ce que vous savez déjà.' },
    { name: 'Personnaliser', text: 'Vous recevez un programme construit autour de vos lacunes.' },
    { name: 'Apprendre', text: "De courtes leçons écrites, qui s'appuient sur les guides PromptQuorum." },
    { name: 'Échanger', text: 'Posez vos questions au tuteur IA pendant la lecture.' },
    { name: 'Tester', text: 'Des questions à trois réponses, chacune expliquée.' },
    { name: 'Certifier', text: 'Atteignez 70 % et téléchargez un certificat PDF.' },
  ],
  disclaimer:
    "Les leçons sont rédigées par une IA et peuvent contenir des erreurs. Le certificat atteste de votre apprentissage ; ce n'est pas un diplôme reconnu.",
  hubs: {
    'local-llms': 'LLM locaux',
    'prompt-engineering': 'Prompt engineering',
    'power-local-llm': "Applications d'IA locale",
    'prompt-bites': "Réponses rapides sur l'IA locale",
    'smart-home': 'Maison connectée locale',
    'balcony-solar': 'Solaire de balcon',
  },

  subjectLabel: 'Que voulez-vous apprendre ?',
  subjectPlaceholder: 'ex. Faire tourner un LLM local sur mon portable',
  subjectError: 'Veuillez saisir un sujet ou choisir une suggestion.',
  suggestions: 'Suggestions',
  timeLegend: 'De combien de temps disposez-vous ?',
  minutes: (m) => (m >= 60 && m % 60 === 0 ? `${m / 60} h` : `${m} min`),
  levelLegend: 'Votre niveau',
  levels: {
    beginner: { label: 'Débutant', hint: 'Nouveau sur le sujet' },
    some: { label: 'Quelques bases', hint: 'Je connais les bases' },
    experienced: { label: 'Expérimenté', hint: "Je veux aller plus loin" },
  },
  testsLegend: 'Tests',
  tests: {
    none: { label: 'Sans test', hint: 'Apprendre seulement. Ni score ni certificat.' },
    final: { label: 'Test final seul', hint: 'Un test à la fin. Nécessaire pour le certificat.' },
    per_lesson_and_final: { label: 'Chaque leçon + test final', hint: 'Un court quiz après chaque leçon, puis le test final.' },
  },
  languageLabel: 'Langue de votre programme',
  submit: "Passer à l'évaluation rapide",
  restored: 'Nous avons restauré votre dernier choix depuis ce navigateur.',
  startNew: 'Recommencer',
  storageBlocked:
    "Ce navigateur n'autorise pas l'enregistrement. Vous pouvez continuer, mais votre progression sera perdue à la fermeture de la page.",
  loading: 'Chargement',

  diagnosticTitle: 'Évaluation rapide',
  diagnosticIntro: "Répondez à quelques questions rapides pour que votre programme saute ce que vous savez déjà. Il n'y a pas de note.",
  questionOf: (i, n) => `Question ${i} sur ${n}`,
  notSure: 'Je ne suis pas sûr',
  preparingQuestions: 'Préparation de vos questions…',
  preparingProgramme: 'Création de votre programme…',
  changeSetup: 'Modifier le choix',

  errorGeneric: 'Un problème est survenu pendant la préparation du contenu. Veuillez réessayer.',
  errorRate: 'Trop de requêtes depuis votre connexion. Patientez un peu, puis réessayez.',
  errorUnsupported: "Academy couvre l'IA, les logiciels, le matériel informatique, la maison connectée et l'énergie domestique. Veuillez choisir un sujet dans ces domaines.",
  errorUnavailable: "Academy n'est pas disponible pour le moment. Veuillez réessayer plus tard.",
  retry: 'Réessayer',

  programmeTitle: 'Votre programme',
  objectivesTitle: 'Objectifs',
  lessonsTitle: 'Leçons',
  recapBadge: 'Révision',
  testPlanNone: 'Pas de test : ni note ni certificat.',
  testPlanFinal: (f) => `Test final : ${f} questions.`,
  testPlanPerLesson: (q, f) => `Un quiz de ${q} questions après chaque leçon, puis un test final de ${f} questions.`,
  totalTime: (d) => `Durée totale : environ ${d}`,
  startLesson: 'Commencer la leçon 1',
  lessonsComing: 'Les leçons elles-mêmes ne sont pas encore disponibles.',
  startOver: 'Recommencer',

  privacyNote:
    "Aucun compte requis. Votre progression est enregistrée uniquement dans ce navigateur. Pour créer les leçons, les questions et les réponses du tuteur, votre sujet, vos réponses et vos messages au tuteur sont envoyés à notre fournisseur d'IA (Anthropic) ; merci de ne pas y saisir de données personnelles. Le nom figurant sur votre certificat reste dans ce navigateur. Pour éviter les abus, les requêtes sont limitées à l'aide d'une clé hachée et temporaire dérivée de votre adresse IP. Si vous laissez un avis, nous enregistrons la note, le commentaire et le sujet étudié, sans votre nom ni compte.",
  deleteData: 'Supprimer mes données',
  deleteConfirm: 'Supprimer votre progression Academy de ce navigateur ? Cette action est irréversible.',
  dataDeleted: 'Données supprimées',
}
