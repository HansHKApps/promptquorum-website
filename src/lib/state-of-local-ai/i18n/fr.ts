import type { SolaStrings } from './types'

export const fr: SolaStrings = {
  home: 'Accueil',
  about: 'À propos',
  series: 'L’état de l’IA locale',
  reportLabel: 'Rapport 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    'Un rapport trimestriel sur l’état de l’IA locale : chiffres sourcés, tests pratiques, hypothèses signalées et registre des affirmations. Prochain numéro : janvier 2027.',
  hubIntro1:
    'L’état de l’IA locale est un rapport trimestriel sur la situation actuelle de l’IA locale. Il est rédigé à partir de l’expérience de l’auteur dans la création de PromptQuorum et le test d’applications d’IA locale.',
  hubIntro2: 'Les faits sont signalés comme tels, les sources sont numérotées, et les hypothèses indiquent qui les formule et sur quoi elles reposent.',
  nextIssue: 'Prochain numéro :',
  latestReport: 'Dernier rapport',
  readReport: 'Lire le rapport',
  evidenceFile: 'Dossier de preuves',
  archive: 'Archives',
  pressContact: 'Contact presse',

  by: 'Par',
  dataCutOff: 'Date d’arrêt des données',
  version: 'Version',
  keyFindings: 'Points clés',
  fullEvidenceTitle: 'Preuves complètes et annexes',
  fullEvidenceSub:
    'Chaque note de méthode, calcul, encadré d’hypothèses, tableau, le registre des affirmations et toutes les sources numérotées. Il s’ouvre directement ici, sans téléchargement.',
  evidenceEnglishNote: 'Le dossier de preuves complet (affirmations, calculs, sources) n’est disponible qu’en anglais.',
  scrollableTable: 'Tableau défilant',
  citeThisReport: 'Citer ce rapport',
  aboutThisReport: 'À propos de ce rapport',
  founderLine: 'est le fondateur de PromptQuorum, basé à Francfort, avec plus de 30 ans d’expérience dans le conseil et la direction générale.',
  methodPre: 'La méthode, les libellés, les hypothèses et les sources figurent dans la ',
  methodLink1: 'section complète des preuves',
  methodMid: ' ci-dessus, qui existe aussi sous forme de ',
  methodLink2: 'page séparée',
  methodPost: '.',
  pressContactLabel: 'Contact presse :',
  evidenceAndDownloads: 'Preuves et téléchargements',
  evidenceFileSeparate: 'Dossier de preuves sur une page séparée',
  claimRegister: 'Registre des affirmations (claims.csv)',
  sources: 'Sources',
  backTo: 'Retour à',
  correctionsAndUpdates: 'Corrections et mises à jour',
  translatedNote: 'Ceci est une traduction de l’original anglais ; l’original anglais fait foi.',

  issues: {
    '2026-q4': {
      title: 'Peu de poules, encore moins d’œufs',
      subtitle:
        'L’IA locale progresse vite, mais le parc de matériel réellement utilisable est minuscule. Les excellentes applications sont plus rares encore.',
      summary:
        'Très peu d’ordinateurs savent faire tourner un bon modèle d’IA locale, et encore moins d’applications justifient l’effort. Neuf tests pratiques, des chiffres sourcés et un registre des affirmations montrent où en est l’IA locale aujourd’hui.',
      seoTitle: 'Peu de poules, encore moins d’œufs | L’état de l’IA locale',
      metaDescription:
        'Rapport 01 (Q4 2026) : peu d’ordinateurs font tourner une bonne IA locale, encore moins d’applications le méritent. Chiffres sourcés, neuf tests.',
      keyFindings: [
        'Dans l’enquête matérielle Steam de juillet 2026, 25.9% des systèmes interrogés disposaient de 16 GB de mémoire graphique et 5.4% de 24 GB.',
        'Sur un Mac de 24 GB lors des tests de l’auteur, le système utilisait 9.67 GB de mémoire juste après le démarrage, avant le chargement de tout modèle.',
        'Sur neuf applications d’IA locale testées par l’auteur, huit ont pu être notées ; quatre de ces huit ont obtenu 2 ou moins pour leur fonction principale.',
        'Entre 2.2% et 4.5% des ménages ou consommateurs américains paient pour un chatbot d’IA, selon trois sources de données de cartes bancaires. Le 1% des plus gros payeurs représente 19.5% des dépenses de consommation en IA.',
        'Le prix catalogue du NVIDIA DGX Spark de 128 GB est passé de $3,999 au lancement à $4,699 en février 2026, puis à $6,950 en octobre 2026.',
        'Les ventes d’ordinateurs portables et fixes neufs ont reculé au troisième trimestre 2026 : IDC fait état de livraisons en baisse de 20.1% à 62.7 millions d’unités, Omdia de 21.2% à 58.1 millions.',
        'Les plus grands modèles ouverts ont environ quatre mois de retard sur les meilleurs modèles du cloud, mais exigent au moins 377 GB de mémoire (un calcul).',
        'Une recherche de « local AI » renvoie 10 résultats dans l’App Store allemand d’Apple et 29 fiches dans Google Play, sur environ 2.75 millions et 2.65 millions d’applications.',
        'Les recherches Google pour « local ai » ont atteint un pic fin mai 2026 et, à la mi-octobre, étaient à la moitié de leur niveau un an plus tôt ; le rapport précise que cet écart avec d’autres indicateurs ne peut pas être expliqué à partir des données.',
      ],
      disclosure:
        'L’auteur a fondé PromptQuorum, un site de contenus et un annuaire consacrés aux applications d’IA locale, et a testé des applications qui y sont référencées. Chaque fiche de test pratique, avec ses étiquettes de preuve et les propres erreurs du testeur, est liée depuis le dossier de preuves. Aucun paiement ni parrainage n’est consigné dans les notes de test.',
      correction: 'Version 1.0 : première publication.',
    },
  },
}
