import { ImageResponse } from 'next/og'
import { getSiteOverview } from '@/lib/home/overview'
import { parseCard } from '@/lib/askhans/card'

export const runtime = 'nodejs'

// Share card for Power Mode reports. Shows only the process name and the public site numbers: never answers.
// The default OG font is Latin-only, so ja/zh/ko/ar cards use the English wording (numbers are universal).
const LATIN = new Set(['en', 'de', 'fr', 'es', 'pt'])
const HEAD: Record<string, string> = {
  en: 'I checked my local AI setup', de: 'Ich habe mein lokales KI-Setup geprüft', fr: 'J’ai vérifié ma configuration d’IA locale',
  es: 'He revisado mi configuración de IA local', pt: 'Verifiquei minha configuração de IA local',
}
const PROCESS_NAME: Record<string, string> = {
  max: 'MAX – Full Setup', audit: 'Audit My AI Setup', hardware: 'Hardware Selector', solution: 'Solution Setup', mobile: 'Phone & Tablet',
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const raw = url.searchParams.get('lang') ?? 'en'
  const lang = /^[a-z]{2}$/.test(raw) ? raw : 'en'
  const process_ = parseCard(url.searchParams.get('p')) ?? 'max'
  const ov = await getSiteOverview(lang)
  const useLatin = LATIN.has(lang)
  const en = useLatin ? ov : await getSiteOverview('en')
  const head = HEAD[useLatin ? lang : 'en']

  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #6750A4 0%, #7D5260 100%)', padding: '56px', color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '22px', fontWeight: 700, letterSpacing: '0.1em' }}>
          <div style={{ display: 'flex' }}>PROMPTQUORUM · ASK HANS</div>
          <div style={{ display: 'flex', opacity: 0.85 }}>{PROCESS_NAME[process_]}</div>
        </div>
        <div style={{ display: 'flex', fontSize: '60px', fontWeight: 800, lineHeight: 1.15 }}>{head}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {en.tiles.slice(0, 7).map((t) => (
            <div key={t.label} style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.14)', borderRadius: '14px', padding: '12px 18px', minWidth: '150px' }}>
              <div style={{ display: 'flex', fontSize: '38px', fontWeight: 800 }}>{t.value}</div>
              <div style={{ display: 'flex', fontSize: '15px', opacity: 0.9, maxWidth: '200px' }}>{t.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', fontSize: '20px', opacity: 0.85 }}>www.promptquorum.com/askhans</div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
  )
}
