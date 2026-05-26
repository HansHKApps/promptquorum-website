'use client'

import { useEffect, useState, Suspense } from 'react'
import { useLang, type Lang } from '@/hooks/useLang'

const STORAGE_KEY = 'analytics_consent'
const RECORD_VERSION = 1
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

export type ConsentRecord = {
  state: 'granted' | 'denied' | 'custom'
  analytics: boolean
  marketing: boolean
  ts: number
  version: number
}

type Copy = {
  intro: string
  policy: string
  rejectAll: string
  customize: string
  acceptAll: string
  essential: string
  essentialDesc: string
  analytics: string
  analyticsDesc: string
  marketing: string
  marketingDesc: string
  alwaysOn: string
  save: string
}

const COPY: Record<Lang, Copy> = {
  en: {
    intro: 'We use cookies and similar tech to understand how visitors use this site. Choose what to enable — you can change this anytime via "Cookie Settings" in the footer.',
    policy: 'Privacy Policy',
    rejectAll: 'Reject all',
    customize: 'Customize',
    acceptAll: 'Accept all',
    essential: 'Essential',
    essentialDesc: 'Required for the site to function (e.g. your language and consent choice).',
    analytics: 'Analytics',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics — anonymous usage stats.',
    marketing: 'Marketing',
    marketingDesc: 'Ad personalization and remarketing signals (none currently active).',
    alwaysOn: 'Always on',
    save: 'Save preferences',
  },
  de: {
    intro: 'Wir verwenden Cookies und ähnliche Technologien, um zu verstehen, wie Besucher diese Website nutzen. Wählen Sie, was aktiviert werden soll – Sie können dies jederzeit über „Cookie-Einstellungen" im Footer ändern.',
    policy: 'Datenschutzerklärung',
    rejectAll: 'Alle ablehnen',
    customize: 'Anpassen',
    acceptAll: 'Alle akzeptieren',
    essential: 'Erforderlich',
    essentialDesc: 'Notwendig für die Funktion der Website (z. B. Sprache und Einwilligungsauswahl).',
    analytics: 'Analyse',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics – anonyme Nutzungsstatistiken.',
    marketing: 'Marketing',
    marketingDesc: 'Anzeigenpersonalisierung und Remarketing-Signale (derzeit nicht aktiv).',
    alwaysOn: 'Immer aktiv',
    save: 'Einstellungen speichern',
  },
  fr: {
    intro: "Nous utilisons des cookies et technologies similaires pour comprendre comment les visiteurs utilisent ce site. Choisissez ce que vous souhaitez activer — vous pouvez modifier ce choix à tout moment via « Paramètres des cookies » dans le pied de page.",
    policy: 'Politique de confidentialité',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    acceptAll: 'Tout accepter',
    essential: 'Essentiels',
    essentialDesc: 'Nécessaires au fonctionnement du site (langue et choix de consentement).',
    analytics: 'Analyses',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics — statistiques d\'usage anonymes.',
    marketing: 'Marketing',
    marketingDesc: 'Personnalisation publicitaire et signaux de remarketing (aucun actif actuellement).',
    alwaysOn: 'Toujours actif',
    save: 'Enregistrer mes préférences',
  },
  ja: {
    intro: '当サイトでは、訪問者の利用状況を把握するためにCookieおよび類似技術を使用します。有効にする項目を選択してください — フッターの「Cookie設定」からいつでも変更できます。',
    policy: 'プライバシーポリシー',
    rejectAll: 'すべて拒否',
    customize: 'カスタマイズ',
    acceptAll: 'すべて受け入れる',
    essential: '必須',
    essentialDesc: 'サイトの機能に必要です（言語設定、同意の保存など）。',
    analytics: '分析',
    analyticsDesc: 'Google Analytics、Umami、Vercel Analytics — 匿名の利用統計。',
    marketing: 'マーケティング',
    marketingDesc: '広告のパーソナライズおよびリマーケティング信号（現在は無効）。',
    alwaysOn: '常時オン',
    save: '設定を保存',
  },
  zh: {
    intro: '我们使用 Cookie 和类似技术来了解访客如何使用本网站。请选择启用项 — 您可以随时通过页脚的"Cookie 设置"更改。',
    policy: '隐私政策',
    rejectAll: '全部拒绝',
    customize: '自定义',
    acceptAll: '全部接受',
    essential: '必要',
    essentialDesc: '网站正常运行所必需（如语言和同意选择）。',
    analytics: '分析',
    analyticsDesc: 'Google Analytics、Umami、Vercel Analytics — 匿名使用统计。',
    marketing: '营销',
    marketingDesc: '广告个性化和再营销信号（当前未启用）。',
    alwaysOn: '始终开启',
    save: '保存偏好',
  },
}

function gtagConsent(r: ConsentRecord) {
  if (typeof window === 'undefined') return
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('consent', 'update', {
    analytics_storage: r.analytics ? 'granted' : 'denied',
    ad_storage: r.marketing ? 'granted' : 'denied',
    ad_user_data: r.marketing ? 'granted' : 'denied',
    ad_personalization: r.marketing ? 'granted' : 'denied',
  })
}

function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  if (raw === 'granted' || raw === 'denied') {
    // Migrate legacy string values
    const analytics = raw === 'granted'
    return { state: raw, analytics, marketing: false, ts: Date.now(), version: RECORD_VERSION }
  }
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>
    if (typeof parsed.ts !== 'number' || typeof parsed.version !== 'number') return null
    return {
      state: parsed.state ?? 'denied',
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      ts: parsed.ts,
      version: parsed.version,
    }
  } catch {
    return null
  }
}

function writeConsent(r: ConsentRecord, lang: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(r))
  window.dispatchEvent(new CustomEvent('consent-changed', { detail: r }))
  // Fire-and-forget server-side log (GDPR Art. 7(1) proof). Never block UI.
  fetch('/api/consent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      state: r.state,
      analytics: r.analytics,
      marketing: r.marketing,
      version: r.version,
      lang,
    }),
    keepalive: true,
  }).catch(() => {})
}

function isStale(r: ConsentRecord): boolean {
  return r.version !== RECORD_VERSION || Date.now() - r.ts > MAX_AGE_MS
}

function CookieBannerInner() {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const [visible, setVisible] = useState(false)
  const [showCustom, setShowCustom] = useState(false)
  const [analyticsOn, setAnalyticsOn] = useState(false)
  const [marketingOn, setMarketingOn] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (stored && !isStale(stored)) {
      gtagConsent(stored)
    } else {
      setVisible(true)
    }

    const openHandler = () => {
      setShowCustom(false)
      setAnalyticsOn(false)
      setMarketingOn(false)
      setVisible(true)
    }
    window.addEventListener('open-cookie-banner', openHandler)
    return () => window.removeEventListener('open-cookie-banner', openHandler)
  }, [])

  function commit(r: ConsentRecord) {
    writeConsent(r, lang)
    gtagConsent(r)
    setVisible(false)
  }

  function rejectAll() {
    commit({ state: 'denied', analytics: false, marketing: false, ts: Date.now(), version: RECORD_VERSION })
  }

  function acceptAll() {
    commit({ state: 'granted', analytics: true, marketing: true, ts: Date.now(), version: RECORD_VERSION })
  }

  function saveCustom() {
    commit({
      state: 'custom',
      analytics: analyticsOn,
      marketing: marketingOn,
      ts: Date.now(),
      version: RECORD_VERSION,
    })
  }

  if (!visible) return null

  const btnStyle: React.CSSProperties = {
    padding: '8px 18px',
    borderRadius: '100px',
    border: '1px solid #CAC4D0',
    background: 'transparent',
    color: '#E6E1E5',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    whiteSpace: 'nowrap',
    flex: '1 1 0',
    minWidth: 0,
  }

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
        maxWidth: '560px',
        width: 'calc(100vw - 48px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <p style={{ margin: 0, fontSize: '13px', color: '#CAC4D0', lineHeight: 1.6 }}>
        {c.intro}{' '}
        <a href="/privacy" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
          {c.policy}
        </a>
        .
      </p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={rejectAll} style={btnStyle}>{c.rejectAll}</button>
        <button
          onClick={() => setShowCustom((v) => !v)}
          style={btnStyle}
          aria-expanded={showCustom}
        >
          {c.customize} {showCustom ? '▴' : '▾'}
        </button>
        <button onClick={acceptAll} style={btnStyle}>{c.acceptAll}</button>
      </div>

      {showCustom && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #49454F', paddingTop: '14px' }}>
          <CategoryRow
            title={c.essential}
            desc={c.essentialDesc}
            checked
            disabled
            badge={c.alwaysOn}
          />
          <CategoryRow
            title={c.analytics}
            desc={c.analyticsDesc}
            checked={analyticsOn}
            onChange={setAnalyticsOn}
          />
          <CategoryRow
            title={c.marketing}
            desc={c.marketingDesc}
            checked={marketingOn}
            onChange={setMarketingOn}
          />
          <button onClick={saveCustom} style={{ ...btnStyle, flex: '0 0 auto', alignSelf: 'flex-end', padding: '8px 22px' }}>
            {c.save}
          </button>
        </div>
      )}
    </div>
  )
}

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  badge,
  onChange,
}: {
  title: string
  desc: string
  checked: boolean
  disabled?: boolean
  badge?: string
  onChange?: (v: boolean) => void
}) {
  return (
    <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: disabled ? 'default' : 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ marginTop: '3px', accentColor: '#D0BCFF', cursor: disabled ? 'default' : 'pointer' }}
      />
      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#E6E1E5' }}>
          {title}
          {badge && (
            <span style={{ marginLeft: '8px', fontSize: '11px', fontWeight: 500, color: '#938F99' }}>
              ({badge})
            </span>
          )}
        </span>
        <span style={{ fontSize: '12px', color: '#CAC4D0', lineHeight: 1.5 }}>{desc}</span>
      </span>
    </label>
  )
}

export function CookieBanner() {
  return (
    <Suspense>
      <CookieBannerInner />
    </Suspense>
  )
}
