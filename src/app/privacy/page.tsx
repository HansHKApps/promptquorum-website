'use client'

import type { ReactNode } from 'react'
import { useLang } from '@/hooks/useLang'
import { translations, type Language } from '@/translations'

const EFFECTIVE_DATE = '15 March 2026'
const CONTROLLER = 'PromptQuorum'
const CONTROLLER_EMAIL = 'hello@promptquorum.com'
const SITE_URL = 'https://www.promptquorum.com'

const GDPR_RIGHTS = [
  { key: 'S8Right1', descKey: 'S8Desc1' },
  { key: 'S8Right2', descKey: 'S8Desc2' },
  { key: 'S8Right3', descKey: 'S8Desc3' },
  { key: 'S8Right4', descKey: 'S8Desc4' },
  { key: 'S8Right5', descKey: 'S8Desc5' },
  { key: 'S8Right6', descKey: 'S8Desc6' },
  { key: 'S8Right7', descKey: 'S8Desc7' },
  { key: 'S8Right8', descKey: 'S8Desc8' },
]

export default function PrivacyPage() {
  const lang = useLang() as Language
  const t = translations[lang]

  const renderTemplate = (text: string, vars: Record<string, string> = {}) => {
    let result = text
    Object.entries(vars).forEach(([key, value]) => {
      result = result.replace(`{{${key}}}`, value)
    })
    return result
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-text-secondary mb-4">
            <a href={`/?lang=${lang}`} className="hover:text-primary transition-colors">{t.privacyFooterHome}</a>
            <span className="mx-2">/</span>
            <span>{t.privacyBreadcrumb}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            {t.privacyPageTitle}
          </h1>
          <p className="text-sm font-mono text-text-secondary">
            {t.privacyEffectiveDate} <time dateTime="2026-03-15">{EFFECTIVE_DATE}</time> &nbsp;·&nbsp; {t.privacyController} {CONTROLLER} &nbsp;·&nbsp; {t.privacyContact} {CONTROLLER_EMAIL}
          </p>
        </div>

        {/* GDPR notice banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg px-5 py-4 mb-10 text-sm text-text-secondary leading-relaxed">
          {renderTemplate(t.privacyGdprBanner, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
            <span key={i}>
              {part}
              {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
            </span>
          ))}
        </div>

        <div className="prose-policy space-y-12">

          {/* Section 1 */}
          <section>
            <H2 n="1">{t.privacyS1Title}</H2>
            <P>{renderTemplate(t.privacyS1Para1, { url: SITE_URL })}</P>
            <P>{t.privacyS1Para2}</P>
            <P>{renderTemplate(t.privacyS1Para3, { url: SITE_URL })}</P>
          </section>

          {/* Section 2 */}
          <section>
            <H2 n="2">{t.privacyS2Title}</H2>
            <P>{t.privacyS2Intro}</P>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>{t.privacyS2Col1}</Th>
                    <Th>{t.privacyS2Col2}</Th>
                    <Th>{t.privacyS2Col3}</Th>
                    <Th>{t.privacyS2Col4}</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td>{t.privacyS2Row1_1}</Td>
                    <Td>{t.privacyS2Row1_2}</Td>
                    <Td>{t.privacyS2Row1_3}</Td>
                    <Td>{t.privacyS2Row1_4}</Td>
                  </tr>
                  <tr>
                    <Td>{t.privacyS2Row2_1}</Td>
                    <Td>{t.privacyS2Row2_2}</Td>
                    <Td>{t.privacyS2Row2_3}</Td>
                    <Td>{t.privacyS2Row2_4}</Td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>{t.privacyS2Closure}</P>
          </section>

          {/* Section 3 */}
          <section>
            <H2 n="3">{t.privacyS3Title}</H2>
            <H3>{t.privacyS3Sub1}</H3>
            <P>{renderTemplate(t.privacyS3Para1, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
            <H3>{t.privacyS3Sub2}</H3>
            <P>{t.privacyS3Para2}</P>
          </section>

          {/* Section 4 */}
          <section>
            <H2 n="4">{t.privacyS4Title}</H2>
            <P>{t.privacyS4Intro}</P>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>{t.privacyS4ColProc}</Th>
                    <Th>{t.privacyS4ColRole}</Th>
                    <Th>{t.privacyS4ColData}</Th>
                    <Th>{t.privacyS4ColLoc}</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td><strong>{t.privacyS4Row1Proc}</strong></Td>
                    <Td>{t.privacyS4Row1Role}</Td>
                    <Td>{t.privacyS4Row1Data}</Td>
                    <Td>{t.privacyS4Row1Loc}</Td>
                  </tr>
                  <tr>
                    <Td><strong>{t.privacyS4Row2Proc}</strong></Td>
                    <Td>{t.privacyS4Row2Role}</Td>
                    <Td>{t.privacyS4Row2Data}</Td>
                    <Td>{t.privacyS4Row2Loc}</Td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>{t.privacyS4Closure}</P>
          </section>

          {/* Section 5 */}
          <section>
            <H2 n="5">{t.privacyS5Title}</H2>
            <P>{t.privacyS5Intro}</P>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-[15px] leading-relaxed">
              <li><strong className="text-text-primary">Resend:</strong> {t.privacyS5Bullet1}</li>
              <li><strong className="text-text-primary">Google Analytics:</strong> {t.privacyS5Bullet2}</li>
            </ul>
            <P>{renderTemplate(t.privacyS5Closure, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
          </section>

          {/* Section 6 */}
          <section>
            <H2 n="6">{t.privacyS6Title}</H2>
            <P>{t.privacyS6Para1}</P>
            <P>{t.privacyS6Para2}</P>
            <P>{t.privacyS6Para3}</P>
          </section>

          {/* Section 7 */}
          <section>
            <H2 n="7">{t.privacyS7Title}</H2>
            <P>{t.privacyS7Para1}</P>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>{t.privacyS7ColCookie}</Th>
                    <Th>{t.privacyS7ColSetBy}</Th>
                    <Th>{t.privacyS7ColPurpose}</Th>
                    <Th>{t.privacyS7ColDuration}</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{t.privacyS7Row1Cookie}</code></Td>
                    <Td>{t.privacyS7Row1SetBy}</Td>
                    <Td>{t.privacyS7Row1Purpose}</Td>
                    <Td>{t.privacyS7Row1Duration}</Td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{t.privacyS7Row2Cookie}</code></Td>
                    <Td>{t.privacyS7Row2SetBy}</Td>
                    <Td>{t.privacyS7Row2Purpose}</Td>
                    <Td>{t.privacyS7Row2Duration}</Td>
                  </tr>
                  <tr>
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{t.privacyS7Row3Cookie}</code></Td>
                    <Td>{t.privacyS7Row3SetBy}</Td>
                    <Td>{t.privacyS7Row3Purpose}</Td>
                    <Td>{t.privacyS7Row3Duration}</Td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>{t.privacyS7Para2}</P>
          </section>

          {/* Section 8 */}
          <section>
            <H2 n="8">{t.privacyS8Title}</H2>
            <P>{t.privacyS8Intro}</P>
            <div className="space-y-4 my-6">
              {GDPR_RIGHTS.map(({ key, descKey }) => {
                const rightKey = `privacy${key}` as keyof typeof t
                const descKeyFull = `privacy${descKey}` as keyof typeof t
                return (
                  <div key={key} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-text-primary text-[15px]">{t[rightKey]}</p>
                      <p className="text-text-secondary text-[14.5px] leading-relaxed">{t[descKeyFull]}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <P>{renderTemplate(t.privacyS8Closure, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
          </section>

          {/* Section 9 */}
          <section>
            <H2 n="9">{t.privacyS9Title}</H2>
            <P>{t.privacyS9Para1}</P>
            <P>{renderTemplate(t.privacyS9Para2, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
          </section>

          {/* Section 10 */}
          <section>
            <H2 n="10">{t.privacyS10Title}</H2>
            <P>{renderTemplate(t.privacyS10Para, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
          </section>

          {/* Section 11 */}
          <section>
            <H2 n="11">{t.privacyS11Title}</H2>
            <P>{renderTemplate(t.privacyS11Para, { email: CONTROLLER_EMAIL }).split(CONTROLLER_EMAIL).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>}
              </span>
            ))}</P>
          </section>

          {/* Section 12 */}
          <section>
            <H2 n="12">{t.privacyS12Title}</H2>
            <P>{t.privacyS12Para}</P>
          </section>

          {/* Section 13 */}
          <section>
            <H2 n="13">{t.privacyS13Title}</H2>
            <P>{t.privacyS13Para}</P>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-text-secondary space-y-1">
              <p><strong className="text-text-primary">{t.privacyS13ContactTitle}</strong></p>
              <p>{t.privacyS13ContactEmail} <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a></p>
              <p>{t.privacyS13ContactWebsite} <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a></p>
              <p className="text-xs font-mono text-text-secondary pt-1">{t.privacyS13ResponseTime}</p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-text-secondary">
          <a href={`/?lang=${lang}`} className="hover:text-primary transition-colors">{t.privacyFooterHome}</a>
          <a href={`/faq?lang=${lang}`} className="hover:text-primary transition-colors">{t.privacyFooterFaq}</a>
          <a href={`mailto:${CONTROLLER_EMAIL}`} className="hover:text-primary transition-colors">{CONTROLLER_EMAIL}</a>
        </div>

      </div>
    </div>
  )
}

function H2({ n, children }: { n: string; children: ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-text-primary tracking-tight mb-3 flex items-baseline gap-3">
      <span className="text-sm font-mono text-text-secondary shrink-0">{n}.</span>
      {children}
    </h2>
  )
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-text-primary mt-5 mb-2">{children}</h3>
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-[15px] text-text-secondary leading-relaxed mb-4">{children}</p>
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="text-left py-2.5 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">
      {children}
    </th>
  )
}

function Td({ children }: { children: ReactNode }) {
  return <td className="py-3 px-4 text-text-secondary text-[13.5px] align-top">{children}</td>
}
