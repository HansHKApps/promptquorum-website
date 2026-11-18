import type { AcademyCopy } from './types'

export const copy: AcademyCopy = {
  metaTitle: 'PromptQuorum Academy: Free Personalized AI Learning',
  metaDescription:
    'Pick a subject, your time and your level. PromptQuorum Academy builds short lessons that draw on PromptQuorum guides, with an AI tutor, tests and a PDF certificate.',
  h1: 'PromptQuorum Academy',
  intro: 'Learn local AI, prompting and related topics in short lessons built for your time and level. Free, no account needed.',
  howTitle: 'How it works',
  steps: [
    { name: 'Choose', text: 'Name a subject, your available time and your level.' },
    { name: 'Diagnose', text: 'A few quick questions show what you already know.' },
    { name: 'Personalize', text: 'You get a programme built around your gaps.' },
    { name: 'Learn', text: 'Short text lessons that draw on PromptQuorum guides.' },
    { name: 'Interact', text: 'Ask the AI tutor questions while you read.' },
    { name: 'Test', text: 'Questions with three answers and an explanation for each.' },
    { name: 'Certify', text: 'Reach 70% and download a PDF certificate.' },
  ],
  disclaimer: 'Lessons are written by AI and can contain errors. The certificate records your learning; it is not an accredited qualification.',
  hubs: {
    'local-llms': 'Local LLMs',
    'prompt-engineering': 'Prompt engineering',
    'power-local-llm': 'Local AI apps',
    'prompt-bites': 'Local AI quick answers',
    'smart-home': 'Local smart home',
    'balcony-solar': 'Balcony solar',
  },

  subjectLabel: 'What do you want to learn?',
  subjectPlaceholder: 'e.g. Running a local LLM on my laptop',
  subjectError: 'Please enter a subject or pick one of the suggestions.',
  suggestions: 'Suggestions',
  timeLegend: 'How much time do you have?',
  minutes: (m) => (m >= 60 && m % 60 === 0 ? `${m / 60} h` : `${m} min`),
  levelLegend: 'Your level',
  levels: {
    beginner: { label: 'Beginner', hint: 'New to the subject' },
    some: { label: 'Some knowledge', hint: 'I know the basics' },
    experienced: { label: 'Experienced', hint: 'I want depth' },
  },
  testsLegend: 'Tests',
  tests: {
    none: { label: 'No test', hint: 'Just learn. No score and no certificate.' },
    final: { label: 'Final test only', hint: 'One test at the end. Needed for a certificate.' },
    per_lesson_and_final: { label: 'Every lesson + final test', hint: 'A short quiz after each lesson, then the final test.' },
  },
  languageLabel: 'Language of your programme',
  submit: 'Continue to quick check',
  restored: 'We restored your last setup from this browser.',
  startNew: 'Start new',
  storageBlocked: 'This browser does not allow saving. You can continue, but your progress is lost when you close the page.',
  loading: 'Loading',

  diagnosticTitle: 'Quick check',
  diagnosticComing: 'The quick-check questions are not available yet. Your setup is saved:',
  summarySubject: 'Subject',
  summaryTime: 'Time',
  summaryLevel: 'Level',
  summaryTests: 'Tests',
  summaryLanguage: 'Language',
  changeSetup: 'Change setup',

  privacyNote:
    'No account needed. Your progress is saved in this browser only. To create lessons, questions and tutor answers, your subject, your answers and your tutor messages are sent to our AI provider (Anthropic); please do not type personal data into them. The name for your certificate stays in this browser. To prevent abuse, requests are rate-limited with a short-lived hashed key derived from your IP address. If you leave feedback, we store the rating, the comment and the subject you studied, without your name or any account.',
  deleteData: 'Delete my data',
  deleteConfirm: 'Delete your Academy progress from this browser? This cannot be undone.',
  dataDeleted: 'Data deleted',
}
