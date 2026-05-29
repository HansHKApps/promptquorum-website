'use client'

const LABELS: Record<string, string> = {
  en: 'Cookie Settings',
  de: 'Cookie-Einstellungen',
  fr: 'Paramètres des cookies',
  ja: 'Cookie設定',
  zh: 'Cookie 设置',
}

export function CookieSettingsLink({ lang = 'en', className }: { lang?: string; className?: string }) {
  const label = (LABELS[lang as keyof typeof LABELS] ?? LABELS.en)!
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-banner'))}
      className={className ?? 'hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer text-inherit font-inherit'}
    >
      {label}
    </button>
  )
}
