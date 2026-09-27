import { Noto_Sans_KR } from 'next/font/google'
import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

// Scoped to /ko only: the root layout (src/app/layout.tsx) owns <html>/<body>
// and previously declared this font unconditionally, which meant its
// generated CSS (hundreds of @font-face rules — Noto Sans KR's Hangul glyph
// set is bundled regardless of `subsets` choice) shipped in the shared global
// CSS bundle for every locale, not just /ko. Moving the loader call here
// means only /ko route builds reference that CSS.
//
// 'korean' is not a valid next/font subset for this family — Google's font
// metadata only exposes cyrillic/latin/latin-ext/vietnamese as SUPPLEMENTARY
// subsets for Noto Sans KR (same for Noto Sans JP/SC/TC: none of the CJK
// Noto families expose a same-script subset). The Hangul glyphs are always
// bundled regardless of which of these is chosen — 'subsets' here only
// controls whether accessory Latin/Cyrillic/Vietnamese characters are
// included alongside them.
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-korean',
  display: 'swap',
})

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="ko" />
      {/* Nested layouts can't redeclare <html>/<body> in the App Router, so
          the font variable + usage class live on this wrapper div instead of
          relying on html[lang="ko"] (see globals.css: .font-korean-scope). */}
      <div className={`${notoSansKR.variable} font-korean-scope`}>
        {children}
      </div>
    </>
  )
}
