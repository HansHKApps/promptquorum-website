'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const STORAGE_KEY = 'analytics_consent'

const COPY: Record<string, { text: string; policy: string; accept: string; decline: string }> = {
  en: {
    text: 'We use Google Analytics to understand how visitors use this site — no personal data is shared. See our',
    policy: 'Privacy Policy',
    accept: 'Accept',
    decline: 'Decline',
  },
  de: {
    text: 'Wir verwenden Google Analytics, um zu verstehen, wie Besucher diese Website nutzen – keine personenbezogenen Daten werden weitergegeben. Weitere Informationen in unserer',
    policy: 'Datenschutzerklärung',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
  },
  fr: {
    text: "Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent ce site — aucune donnée personnelle n'est partagée. Consultez notre",
    policy: 'Politique de confidentialité',
    accept: 'Accepter',
    decline: 'Refuser',
  },
  ja: {
    text: 'このサイトの利用状況を把握するためにGoogle Analyticsを使用しています。個人データは共有されません。',
    policy: 'プライバシーポリシー',
    accept: '同意する',
    decline: '拒否する',
  },
  zh: {
    text: '我们使用 Google Analytics 了解访客如何使用本网站——不会共享任何个人数据。请查看我们的',
    policy: '隐私政策',
    accept: '接受',
    decline: '拒绝',
  },
}

function gtagConsent(state: 'granted' | 'denied') {
  if (typeof window === 'undefined') return
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('consent', 'update', { analytics_storage: state, ad_storage: state })
}

function CookieBannerInner() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang') ?? ''
  const lang = (['en','de','fr','ja','zh'].includes(rawLang) ? rawLang : 'en') as string
  const c = COPY[lang] ?? COPY.en
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') {
      gtagConsent('granted')
    } else if (!stored) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    gtagConsent('granted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    gtagConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9998,
        background: '#1C1B1F',
        border: '1px solid #49454F',
        borderRadius: '16px',
        padding: '20px 24px',
        maxWidth: '520px',
        width: 'calc(100vw - 48px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <p style={{ margin: 0, fontSize: '13px', color: '#CAC4D0', lineHeight: 1.6 }}>
        {c.text}{' '}
        <a href="/privacy" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
          {c.policy}
        </a>
        .
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button
          onClick={decline}
          style={{
            padding: '8px 20px',
            borderRadius: '100px',
            border: '1px solid #49454F',
            background: 'transparent',
            color: '#CAC4D0',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {c.decline}
        </button>
        <button
          onClick={accept}
          style={{
            padding: '8px 20px',
            borderRadius: '100px',
            border: 'none',
            background: '#6750A4',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {c.accept}
        </button>
      </div>
    </div>
  )
}

export function CookieBanner() {
  return (
    <Suspense>
      <CookieBannerInner />
    </Suspense>
  )
}
