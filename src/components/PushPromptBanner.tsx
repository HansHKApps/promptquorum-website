'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import { getLangDir } from '@/lib/i18n/constants'
import { claimPromptSlot, releasePromptSlot } from '@/lib/promptSlot'

const STORAGE_KEY = 'push_prompt_dismissed_until'
const SESSION_COUNT_KEY = 'pq_session_count'
const SESSION_ACTIVE_KEY = 'pq_session_active'
const TIME_ON_SITE_KEY = 'pq_time_on_site_ms'
// Permanent, not a suppression window: once someone has actually subscribed we
// never ask again on this browser.
const SUBSCRIBED_KEY = 'pq_push_subscribed'
const SLOT_ID = 'push_prompt'
const SUPPRESS_DURATION_MS = 90 * 24 * 60 * 60 * 1000 // 3 months
// Single rule for everyone: 5 minutes of cumulative time on the site, passive or
// active. Accumulates across page views and visits, so it is real time spent, not
// "5 minutes since this particular page loaded".
const REQUIRED_TIME_ON_SITE_MS = 5 * 60 * 1000
const HEARTBEAT_MS = 5 * 1000
// A sleeping laptop or a tab left open overnight must not credit hours in one tick.
const MAX_TICK_MS = 15 * 1000

interface OneSignalType {
  init: (config: {
    appId: string
    serviceWorkerPath?: string
    notifyButton?: { enable: boolean }
    promptOptions?: { autoPrompt: boolean }
  }) => Promise<void>
  Notifications?: {
    requestPermission: () => Promise<void>
  }
  User: {
    PushSubscription: {
      optedIn: boolean
    }
    addTags: (tags: Record<string, string>) => Promise<void>
  }
}

declare global {
  interface Window {
    OneSignalDeferred?: Array<(onesignal: OneSignalType) => void>
    OneSignal?: OneSignalType
  }
}

const COPY: Record<
  string,
  {
    title: string
    body: string
    allow: string
    dismiss: string
  }
> = {
  en: {
    title: 'Make AI do what you actually want',
    body: 'Real techniques. Tested prompts. Zero fluff. Land in your browser the moment we publish.',
    allow: "I'm in",
    dismiss: 'Maybe later',
  },
  de: {
    title: 'KI die wirklich funktioniert',
    body: 'Echte Techniken. Getestete Prompts. Kein Bullshit. Direkt in deinen Browser, sobald wir veröffentlichen.',
    allow: 'Dabei sein',
    dismiss: 'Vielleicht später',
  },
  fr: {
    title: "L'IA qui fait enfin ce que vous voulez",
    body: 'Techniques testées, prompts concrets, zéro théorie creuse. Livré dès la publication.',
    allow: 'Je suis partant',
    dismiss: 'Peut-être plus tard',
  },
  ja: {
    title: 'AIを本当に使いこなす',
    body: '実証済みのプロンプト技術。理論ではなく実践。公開と同時に通知。',
    allow: '参加する',
    dismiss: '後で',
  },
  zh: {
    title: '让 AI 真正听你的',
    body: '实测提示词技巧，零废话，零理论。发布即推送。',
    allow: '加入',
    dismiss: '暂不',
  },
  es: {
    title: 'Haz que la IA haga lo que realmente quieres',
    body: 'Técnicas reales. Prompts probados. Cero relleno. En tu navegador en cuanto publicamos.',
    allow: 'Me apunto',
    dismiss: 'Quizá más tarde',
  },
  pt: {
    title: 'Faça a IA fazer o que você realmente quer',
    body: 'Técnicas reais. Prompts testados. Zero enrolação. No seu navegador assim que publicamos.',
    allow: 'Quero sim',
    dismiss: 'Talvez depois',
  },
  ar: {
    title: 'اجعل الذكاء الاصطناعي ينفّذ ما تريده فعلاً',
    body: 'تقنيات حقيقية. مطالبات مُختبرة. بلا حشو. تصلك في متصفحك فور النشر.',
    allow: 'أنا معكم',
    dismiss: 'ربما لاحقاً',
  },
  ko: {
    title: 'AI가 진짜 원하는 대로 움직이게',
    body: '검증된 기법과 실전 프롬프트. 군더더기 없이, 게시되는 순간 브라우저로.',
    allow: '참여할게요',
    dismiss: '나중에',
  },
}

/**
 * True if this browser is already a push subscriber, by any of three signals:
 * our own permanent flag, the live OneSignal SDK state, or a granted browser
 * permission (which on this site can only come from this banner). The SDK loads
 * async, so the flag and the permission check are what cover an early render.
 */
function isAlreadySubscribed(): boolean {
  try {
    if (localStorage.getItem(SUBSCRIBED_KEY) === '1') return true
  } catch {
    /* ignore */
  }
  try {
    if (window.OneSignal?.User?.PushSubscription?.optedIn) return true
  } catch {
    /* ignore */
  }
  try {
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') return true
  } catch {
    /* ignore */
  }
  return false
}

function markSubscribed(): void {
  try {
    localStorage.setItem(SUBSCRIBED_KEY, '1')
  } catch {
    /* ignore */
  }
}

function PushPromptBannerInner() {
  const pathname = usePathname()
  // Same resolution as the rest of the site: path prefix wins, legacy ?lang= is
  // handled (and cleaned up) by the hook. The hand-rolled detector this replaces
  // knew only 5 of the 9 locales and served English to /es/, /pt/, /ar/ and /ko/.
  const lang = useLang()
  const dir = getLangDir(lang)
  const c = (COPY[lang as keyof typeof COPY] ?? COPY.en)!

  const [visible, setVisible] = useState(false)
  const visitorTypeRef = useRef<'new' | 'returning'>('new')

  useEffect(() => {
    // Already a subscriber — never ask again, and don't even start the timer.
    if (isAlreadySubscribed()) {
      markSubscribed()
      return
    }

    // The SDK may resolve after this effect runs; if it reports an existing
    // subscription, record it permanently and pull the banner if it is up.
    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(async (OneSignal: OneSignalType) => {
      if (OneSignal.User?.PushSubscription?.optedIn) {
        markSubscribed()
        setVisible(false)
        releasePromptSlot(SLOT_ID)
      }
    })

    try {
      const until = localStorage.getItem(STORAGE_KEY)
      if (until && Date.now() < parseInt(until, 10)) return
    } catch {
      /* ignore */
    }

    // Count distinct sessions — sessionStorage clears on tab/browser close
    let sessionCount = 1
    try {
      if (!sessionStorage.getItem(SESSION_ACTIVE_KEY)) {
        sessionCount = parseInt(localStorage.getItem(SESSION_COUNT_KEY) || '0', 10) + 1
        localStorage.setItem(SESSION_COUNT_KEY, String(sessionCount))
        sessionStorage.setItem(SESSION_ACTIVE_KEY, '1')
      } else {
        sessionCount = parseInt(localStorage.getItem(SESSION_COUNT_KEY) || '1', 10)
      }
    } catch {
      /* ignore */
    }

    visitorTypeRef.current = sessionCount >= 2 ? 'returning' : 'new'

    const readElapsed = () => {
      try {
        return parseInt(localStorage.getItem(TIME_ON_SITE_KEY) || '0', 10) || 0
      } catch {
        return 0
      }
    }

    let elapsed = readElapsed()
    let last = Date.now()

    const timer = setInterval(() => {
      const now = Date.now()
      elapsed += Math.min(now - last, MAX_TICK_MS)
      last = now
      try {
        localStorage.setItem(TIME_ON_SITE_KEY, String(elapsed))
      } catch {
        /* ignore */
      }

      if (elapsed < REQUIRED_TIME_ON_SITE_MS) return

      // Re-check: they may have subscribed during these 5 minutes.
      if (isAlreadySubscribed()) {
        clearInterval(timer)
        return
      }

      // The Google preferred-sources card may already own the screen. Keep the
      // heartbeat running and try again next tick rather than stacking on it.
      if (!claimPromptSlot(SLOT_ID)) return

      clearInterval(timer)
      setVisible(true)
      try {
        window.umami?.track('push_prompt_shown', {
          visitor_type: visitorTypeRef.current,
          time_on_site_min: Math.round(elapsed / 60000),
          source_page: pathname,
          lang,
        })
      } catch {
        /* silent */
      }
    }, HEARTBEAT_MS)

    return () => {
      clearInterval(timer)
      releasePromptSlot(SLOT_ID)
    }
    // Armed once per mount — pathname/lang are only read inside the heartbeat.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + SUPPRESS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setVisible(false)
    releasePromptSlot(SLOT_ID)
    try {
      window.umami?.track('push_prompt_dismiss', {
        visitor_type: visitorTypeRef.current,
        source_page: pathname,
        lang,
      })
    } catch {
      /* silent */
    }
  }, [pathname, lang])

  const allow = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + SUPPRESS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setVisible(false)
    releasePromptSlot(SLOT_ID)
    try {
      window.umami?.track('push_prompt_allow', {
        visitor_type: visitorTypeRef.current,
        source_page: pathname,
        lang,
      })
    } catch {
      /* silent */
    }
    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(async (OneSignal: OneSignalType) => {
      await OneSignal.Notifications?.requestPermission()
      // After permission, tag with language (mirrors OneSignalInit.tsx)
      const optedIn = OneSignal.User.PushSubscription.optedIn
      if (optedIn) {
        markSubscribed()
        await OneSignal.User.addTags({ lang })
      }
      // Separates "clicked our banner" from "actually granted the browser prompt" —
      // without this the funnel stops at push_prompt_allow and the real opt-in rate
      // only exists inside OneSignal.
      try {
        window.umami?.track('push_prompt_permission', {
          result: optedIn ? 'granted' : 'not_granted',
          browser_permission:
            typeof Notification !== 'undefined' ? Notification.permission : 'unavailable',
          source_page: pathname,
          lang,
        })
      } catch {
        /* silent */
      }
    })
  }, [pathname, lang])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Push notification opt-in"
      dir={dir}
      style={{
        position: 'fixed',
        bottom: '96px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9997,
        background: 'linear-gradient(145deg, #1C1B1F 0%, #211F28 100%)',
        border: '1px solid #5B4B8A',
        borderRadius: '16px',
        padding: '20px 24px',
        maxWidth: '520px',
        width: 'calc(100vw - 48px)',
        boxShadow: '0 0 0 1px rgba(103,80,164,0.15), 0 8px 40px rgba(103,80,164,0.25), 0 2px 8px rgba(0,0,0,0.5)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>⚡</span>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#EDE8F5', letterSpacing: '-0.01em' }}>
            {c.title}
          </p>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#B8B0C8', lineHeight: 1.6 }}>
          {c.body}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button
          onClick={dismiss}
          style={{
            padding: '8px 18px',
            borderRadius: '100px',
            border: '1px solid #3A3545',
            background: 'transparent',
            color: '#8A8499',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {c.dismiss}
        </button>
        <button
          onClick={allow}
          style={{
            padding: '8px 22px',
            borderRadius: '100px',
            border: 'none',
            background: 'linear-gradient(135deg, #7C5CBF 0%, #5B3FA0 100%)',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            boxShadow: '0 2px 12px rgba(103,80,164,0.4)',
          }}
        >
          {c.allow}
        </button>
      </div>
    </div>
  )
}

export function PushPromptBanner() {
  // No Suspense boundary needed since useSearchParams() is gone — usePathname()
  // and useLang() do not suspend.
  return <PushPromptBannerInner />
}
