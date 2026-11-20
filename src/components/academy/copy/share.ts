// PromptQuorum Academy — texts for the share buttons (WhatsApp, Telegram, email, copy, Word, PDF), all nine languages.
// Brand names (WhatsApp, Telegram, Word, PDF) are not translated.

import type { AcademyLang } from '@/lib/academy/types'

export interface ShareCopy {
  plan: string
  result: string
  copy: string
  copied: string
  intro: (subject: string) => string
  done: (subject: string, percent: number) => string
  tryIt: string
  docTitle: string
  objectives: string
  lessons: string
}

export const SHARE_COPY: Record<AcademyLang, ShareCopy> = {
  en: {
    plan: 'Share this learning plan',
    result: 'Share your result',
    copy: 'Copy',
    copied: 'Copied',
    intro: (s) => `I'm learning “${s}” with PromptQuorum Academy: free, personalized AI learning.`,
    done: (s, p) => `I completed “${s}” on PromptQuorum Academy and scored ${p}%.`,
    tryIt: 'Try it free:',
    docTitle: 'Learning plan',
    objectives: 'Objectives',
    lessons: 'Lessons',
  },
  de: {
    plan: 'Lernplan teilen',
    result: 'Ergebnis teilen',
    copy: 'Kopieren',
    copied: 'Kopiert',
    intro: (s) => `Ich lerne „${s}“ mit der PromptQuorum Academy: kostenlos und persönlich zugeschnitten.`,
    done: (s, p) => `Ich habe „${s}“ in der PromptQuorum Academy abgeschlossen und ${p} % erreicht.`,
    tryIt: 'Kostenlos ausprobieren:',
    docTitle: 'Lernplan',
    objectives: 'Lernziele',
    lessons: 'Lektionen',
  },
  fr: {
    plan: 'Partager ce parcours',
    result: 'Partager mon résultat',
    copy: 'Copier',
    copied: 'Copié',
    intro: (s) => `J’apprends « ${s} » avec PromptQuorum Academy : un apprentissage de l’IA gratuit et personnalisé.`,
    done: (s, p) => `J’ai terminé « ${s} » sur PromptQuorum Academy avec un score de ${p} %.`,
    tryIt: 'À essayer gratuitement :',
    docTitle: 'Parcours d’apprentissage',
    objectives: 'Objectifs',
    lessons: 'Leçons',
  },
  es: {
    plan: 'Compartir este plan',
    result: 'Compartir mi resultado',
    copy: 'Copiar',
    copied: 'Copiado',
    intro: (s) => `Estoy aprendiendo «${s}» con PromptQuorum Academy: aprendizaje de IA gratuito y personalizado.`,
    done: (s, p) => `He completado «${s}» en PromptQuorum Academy con un resultado del ${p} %.`,
    tryIt: 'Pruébalo gratis:',
    docTitle: 'Plan de aprendizaje',
    objectives: 'Objetivos',
    lessons: 'Lecciones',
  },
  pt: {
    plan: 'Compartilhar este plano',
    result: 'Compartilhar meu resultado',
    copy: 'Copiar',
    copied: 'Copiado',
    intro: (s) => `Estou aprendendo “${s}” com a PromptQuorum Academy: aprendizado de IA gratuito e personalizado.`,
    done: (s, p) => `Concluí “${s}” na PromptQuorum Academy e tive ${p}% de acertos.`,
    tryIt: 'Experimente grátis:',
    docTitle: 'Plano de estudo',
    objectives: 'Objetivos',
    lessons: 'Aulas',
  },
  ja: {
    plan: 'この学習プランを共有',
    result: '結果を共有',
    copy: 'コピー',
    copied: 'コピーしました',
    intro: (s) => `PromptQuorum Academyで「${s}」を学んでいます。無料でパーソナライズされたAI学習です。`,
    done: (s, p) => `PromptQuorum Academyで「${s}」を修了し、正答率は${p}%でした。`,
    tryIt: '無料で試す：',
    docTitle: '学習プラン',
    objectives: '学習目標',
    lessons: 'レッスン',
  },
  zh: {
    plan: '分享这个学习计划',
    result: '分享我的成绩',
    copy: '复制',
    copied: '已复制',
    intro: (s) => `我正在 PromptQuorum Academy 学习“${s}”：免费的个性化 AI 学习。`,
    done: (s, p) => `我在 PromptQuorum Academy 完成了“${s}”，得分 ${p}%。`,
    tryIt: '免费试用：',
    docTitle: '学习计划',
    objectives: '学习目标',
    lessons: '课程',
  },
  ar: {
    plan: 'شارك خطة التعلّم',
    result: 'شارك نتيجتي',
    copy: 'نسخ',
    copied: 'تم النسخ',
    intro: (s) => `أتعلّم «${s}» مع PromptQuorum Academy: تعلّم مجاني ومخصّص للذكاء الاصطناعي.`,
    done: (s, p) => `أنهيت «${s}» في PromptQuorum Academy وحصلت على ${p}%.`,
    tryIt: 'جرّبه مجانًا:',
    docTitle: 'خطة التعلّم',
    objectives: 'الأهداف',
    lessons: 'الدروس',
  },
  ko: {
    plan: '학습 계획 공유',
    result: '결과 공유',
    copy: '복사',
    copied: '복사됨',
    intro: (s) => `PromptQuorum Academy에서 “${s}” 과정을 배우고 있어요. 무료 맞춤형 AI 학습입니다.`,
    done: (s, p) => `PromptQuorum Academy에서 “${s}” 과정을 마치고 ${p}%를 받았어요.`,
    tryIt: '무료로 써 보세요:',
    docTitle: '학습 계획',
    objectives: '학습 목표',
    lessons: '레슨',
  },
}
