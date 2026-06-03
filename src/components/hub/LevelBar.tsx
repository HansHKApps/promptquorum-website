'use client'

import { useLang } from '@/hooks/useLang'

interface Props {
  activeLevel: string | undefined
  onSelect: (level: string) => void
  onClear: () => void
}

const LABELS: Record<string, Record<string, string>> = {
  en: { prompt: "What's your level?", beginner: 'Just Starting', intermediate: 'Know the Basics', advanced: 'Building Systems', clear: 'Clear' },
  de: { prompt: 'Ihr Niveau?', beginner: 'Einsteiger', intermediate: 'Grundlagen bekannt', advanced: 'Systeme bauen', clear: 'Zurücksetzen' },
  fr: { prompt: 'Votre niveau ?', beginner: 'Débutant', intermediate: 'Bases acquises', advanced: 'Construction avancée', clear: 'Réinitialiser' },
  ja: { prompt: 'あなたのレベルは？', beginner: '初心者', intermediate: '基本を理解', advanced: 'システム構築', clear: 'クリア' },
  zh: { prompt: '您的级别？', beginner: '入门', intermediate: '掌握基础', advanced: '构建系统', clear: '清除' },
  es: { prompt: '¿Cuál es tu nivel?', beginner: 'Principiante', intermediate: 'Conocimientos básicos', advanced: 'Construyendo sistemas', clear: 'Limpiar' },
  pt: { prompt: 'Qual é o seu nível?', beginner: 'Iniciante', intermediate: 'Conhecimentos básicos', advanced: 'Construindo sistemas', clear: 'Limpar' }, // VERIFY
}

const LEVELS = ['beginner', 'intermediate', 'advanced'] as const

export function LevelBar({ activeLevel, onSelect, onClear }: Props) {
  const lang = useLang()
  const t = LABELS[lang] ?? LABELS.en

  return (
    <div className="flex flex-wrap items-center gap-2 py-3 px-1">
      <span className="text-sm text-gray-500 mr-1">{t.prompt}</span>
      {LEVELS.map((level) => {
        const isActive = activeLevel === level
        return (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className={`
              text-sm px-3.5 py-1.5 rounded-full border transition-all duration-200
              ${isActive
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }
            `}
          >
            {t[level]}
          </button>
        )
      })}
      {activeLevel && (
        <button
          onClick={onClear}
          className="text-xs text-gray-400 hover:text-gray-600 ml-1 transition-colors"
        >
          × {t.clear}
        </button>
      )}
    </div>
  )
}
