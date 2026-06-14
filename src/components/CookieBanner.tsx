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

const COPY: Partial<Record<Lang, Copy>> = {
  en: {
    intro: 'We use cookies and similar tech to understand how visitors use this site. Choose what to enable — you can change this anytime via "Cookie Settings" in the footer.',
    policy: 'Privacy Policy',
    rejectAll: 'Reject all',
    customize: 'Customize',
    acceptAll: 'Accept all',
    essential: 'Essential',
    essentialDesc: 'Required for the site to function (e.g. your language and consent choice).',
    analytics: 'Analytics',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity — anonymous usage stats.',
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
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity – anonyme Nutzungsstatistiken.',
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
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity — statistiques d\'usage anonymes.',
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
    analyticsDesc: 'Google Analytics、Umami、Vercel Analytics、Microsoft Clarity — 匿名の利用統計。',
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
    analyticsDesc: 'Google Analytics、Umami、Vercel Analytics、Microsoft Clarity — 匿名使用统计。',
    marketing: '营销',
    marketingDesc: '广告个性化和再营销信号（当前未启用）。',
    alwaysOn: '始终开启',
    save: '保存偏好',
  },
  es: {
    intro: 'Usamos cookies y tecnologías similares para entender cómo los visitantes utilizan este sitio. Elija qué activar — puede cambiarlo en cualquier momento desde «Configuración de cookies» en el pie de página.',
    policy: 'Política de privacidad',
    rejectAll: 'Rechazar todo',
    customize: 'Personalizar',
    acceptAll: 'Aceptar todo',
    essential: 'Esenciales',
    essentialDesc: 'Necesarias para el funcionamiento del sitio (p. ej., su idioma y su elección de consentimiento).',
    analytics: 'Analítica',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity — estadísticas de uso anónimas.',
    marketing: 'Marketing',
    marketingDesc: 'Personalización publicitaria y señales de remarketing (ninguna activa actualmente).',
    alwaysOn: 'Siempre activas',
    save: 'Guardar preferencias',
  },
  pt: {
    intro: 'Usamos cookies e tecnologias semelhantes para entender como os visitantes utilizam este site. Escolha o que ativar — você pode alterar isso a qualquer momento em «Configurações de cookies» no rodapé.',
    policy: 'Política de Privacidade',
    rejectAll: 'Rejeitar tudo',
    customize: 'Personalizar',
    acceptAll: 'Aceitar tudo',
    essential: 'Essenciais',
    essentialDesc: 'Necessários para o funcionamento do site (por exemplo, seu idioma e sua escolha de consentimento).',
    analytics: 'Análise',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity — estatísticas de uso anônimas.',
    marketing: 'Marketing',
    marketingDesc: 'Personalização de anúncios e sinais de remarketing (nenhum ativo no momento).',
    alwaysOn: 'Sempre ativo',
    save: 'Salvar preferências',
  },
  ar: {
    intro: 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لفهم كيفية استخدام الزوار لهذا الموقع. اختر ما تريد تفعيله — يمكنك تغيير ذلك في أي وقت عبر «إعدادات ملفات تعريف الارتباط» في تذييل الصفحة.',
    policy: 'سياسة الخصوصية',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    acceptAll: 'قبول الكل',
    essential: 'ضرورية',
    essentialDesc: 'مطلوبة لكي يعمل الموقع (مثل لغتك واختيار الموافقة).',
    analytics: 'التحليلات',
    analyticsDesc: 'Google Analytics وUmami وVercel Analytics وMicrosoft Clarity — إحصاءات استخدام مجهولة الهوية.',
    marketing: 'التسويق',
    marketingDesc: 'تخصيص الإعلانات وإشارات إعادة التسويق (لا يوجد نشط حاليًا).',
    alwaysOn: 'مفعّل دائمًا',
    save: 'حفظ التفضيلات',
  },
  ko: {
    intro: '당사는 방문자가 이 사이트를 이용하는 방식을 파악하기 위해 쿠키 및 유사 기술을 사용합니다. 활성화할 항목을 선택하십시오 — 푸터의 «쿠키 설정»을 통해 언제든지 변경하실 수 있습니다.',
    policy: '개인 정보 처리 방침',
    rejectAll: '모두 거부',
    customize: '설정',
    acceptAll: '모두 허용',
    essential: '필수',
    essentialDesc: '사이트 작동에 필요합니다(예: 언어 및 동의 선택 사항).',
    analytics: '분석',
    analyticsDesc: 'Google Analytics, Umami, Vercel Analytics, Microsoft Clarity — 익명 사용 통계.',
    marketing: '마케팅',
    marketingDesc: '광고 개인화 및 리마케팅 신호(현재 활성화된 항목 없음).',
    alwaysOn: '항상 활성',
    save: '설정 저장',
  },
}

const VALID_LANGS: Lang[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// The middleware auto-detects the visitor's language (Accept-Language) and stores it
// in the `pq_lang` cookie. On URLs without a path locale (/de/…) or ?lang= param —
// e.g. a returning visitor landing on bare "/" — useLang() reports 'en', so the
// consent prompt would show in English even though the site knows the user's language.
// Read the cookie as a fallback so the prompt appears in the language of the user.
function readLangCookie(): Lang | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)pq_lang=([a-z]{2})(?:;|$)/)
  const value = match?.[1] as Lang | undefined
  return value && VALID_LANGS.includes(value) ? value : null
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
  const urlLang = useLang()
  const [cookieLang, setCookieLang] = useState<Lang | null>(null)
  // Prefer the language explicit in the URL (matches the page the visitor is on);
  // otherwise fall back to the pq_lang cookie set by the middleware; else English.
  const lang: Lang = urlLang !== 'en' ? urlLang : (cookieLang ?? 'en')
  const c = (COPY[lang] ?? COPY.en)!
  const isRtl = lang === 'ar'
  const [visible, setVisible] = useState(false)
  const [showCustom, setShowCustom] = useState(false)
  const [analyticsOn, setAnalyticsOn] = useState(false)
  const [marketingOn, setMarketingOn] = useState(false)

  useEffect(() => {
    setCookieLang(readLangCookie())
  }, [])

  useEffect(() => {
    const stored = readConsent()
    if (!stored || isStale(stored)) {
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
    padding: '6px 12px',
    borderRadius: '100px',
    border: '1px solid #CAC4D0',
    background: 'transparent',
    color: '#E6E1E5',
    fontSize: '12px',
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
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{
        position: 'fixed',
        bottom: '16px',
        ...(isRtl ? { right: '16px' } : { left: '16px' }),
        zIndex: 9998,
        background: '#1C1B1F',
        border: '1px solid #49454F',
        borderRadius: '12px',
        padding: '14px 16px',
        maxWidth: '320px',
        width: 'calc(100vw - 32px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <p style={{ margin: 0, fontSize: '13px', color: '#CAC4D0', lineHeight: 1.5 }}>
        {c.intro}{' '}
        <a href="/privacy" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
          {c.policy}
        </a>
        {' · '}
        <a href="/impressum" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
          Impressum
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #49454F', paddingTop: '14px', maxHeight: '220px', overflowY: 'auto' }}>
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
