'use client'

import { Suspense } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { LandingPageClient } from './LandingPageClient'
import { useWaitlist } from '@/context/WaitlistContext'

const T: Partial<Record<Lang, { title: string; desc: string }>> = {
  en: {
    title: 'Join the Waitlist',
    desc: 'Early access users get priority onboarding, direct access to the developer, and a free power tool!',
  },
  de: {
    title: 'Warteliste beitreten',
    desc: 'Early-Access-Nutzer erhalten bevorzugtes Onboarding, direkten Zugang zum Entwickler und ein kostenloses Power-Tool!',
  },
  fr: {
    title: 'Rejoindre la liste d\'attente',
    desc: 'Les membres early-access bénéficient d\'un onboarding prioritaire, d\'un accès direct au développeur et d\'un outil puissant offert !',
  },
  ja: {
    title: 'ウェイトリストに参加',
    desc: '早期アクセスユーザーには、優先オンボーディング、開発者への直接アクセス、そして無料のパワーツールをご提供します！',
  },
  zh: {
    title: '加入候补名单',
    desc: '早期访问用户将获得优先入职辅导、与开发者的直接联系，以及一个免费的强大工具！',
  },
  es: {
    title: 'Unirse a la lista de espera',
    desc: '¡Los usuarios de acceso anticipado obtienen incorporación prioritaria, acceso directo al desarrollador y una herramienta gratuita!',
  },
  pt: {
    title: 'Entrar na lista de espera',
    desc: 'Os utilizadores de acesso antecipado recebem integração prioritária, acesso direto ao programador e uma ferramenta gratuita!',
  },
  ar: {
    title: 'انضم إلى قائمة الانتظار',
    desc: 'يحصل مستخدمو الوصول المبكر على تأهيل ذي أولوية، ووصول مباشر إلى المطور، وأداة مجانية قوية!',
  },
  ko: {
    title: '대기자 명단 등록',
    desc: '얼리 액세스 사용자는 우선 온보딩, 개발자 직접 접근, 무료 파워 툴을 받을 수 있습니다!',
  },
}

function WaitlistModalInner() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const lang = useLang()
  const t = (T[lang as keyof typeof T] ?? T.en)!

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
