import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'
import { preload } from 'react-dom'
import '../../fonts/korean-font.css'

// Scoped to /ko only: Noto Sans KR comes with hundreds of @font-face rules, so its stylesheet is
// imported here and not in the shared global CSS that every locale loads. The font is self-hosted
// (src/fonts/korean-font.css): do not switch back to next/font/google, which downloads about 120
// font files from Google during each build.

export default function KoLayout({ children }: { children: React.ReactNode }) {
  preload('/fonts/noto-sans-kr-fca78c2ee6cec166.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' })

  return (
    <>
      <HtmlLangUpdater lang="ko" />
      {/* Nested layouts can't redeclare <html>/<body> in the App Router, so
          the font variable + usage class live on this wrapper div instead of
          relying on html[lang="ko"] (see globals.css: .font-korean-scope). */}
      <div className="font-korean-vars font-korean-scope">
        {children}
      </div>
    </>
  )
}
