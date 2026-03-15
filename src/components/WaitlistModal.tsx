'use client'

import { Suspense } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { LandingPageClient } from './LandingPageClient'
import { useWaitlist } from '@/context/WaitlistContext'

const T: Record<Lang, { title: string; desc: string }> = {
  en: {
    title: 'Join the Waitlist',
    desc: 'Be the first to access our open-source prompt optimization tool. Early access gets lifetime premium features.',
  },
  de: {
    title: 'Warteliste beitreten',
    desc: 'Seien Sie der Erste, der Zugang zu unserem Open-Source-Prompt-Optimierungstool erhält. Frühzeitige Mitglieder erhalten lebenslange Premium-Funktionen.',
  },
  fr: {
    title: 'Rejoindre la liste d\'attente',
    desc: 'Soyez le premier à accéder à notre outil d\'optimisation de prompts open-source. Les membres en accès anticipé bénéficient de fonctionnalités premium à vie.',
  },
  ja: {
    title: 'ウェイトリストに参加',
    desc: 'オープンソースのプロンプト最適化ツールにいち早くアクセスしましょう。早期アクセスメンバーは生涯プレミアム機能を利用できます。',
  },
  zh: {
    title: '加入候补名单',
    desc: '率先使用我们的开源提示词优化工具。早期成员可终身享受高级功能。',
  },
}

function WaitlistModalInner() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const lang = useLang()
  const t = T[lang] ?? T.en

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={closeWaitlist}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl">
          {/* Close Button */}
          <button
            onClick={closeWaitlist}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-gray-600 text-sm mb-6">{t.desc}</p>

            <Suspense fallback={<div className="h-12 bg-gray-200 rounded animate-pulse" />}>
              <LandingPageClient isWaitlistForm={true} lang={lang} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WaitlistModal() {
  return <WaitlistModalInner />
}
