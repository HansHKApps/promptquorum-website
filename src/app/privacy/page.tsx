import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PromptQuorum',
  description: 'Privacy Policy for PromptQuorum. Learn how we collect, use, and protect your data, your rights under GDPR, and how to contact us with data requests.',
  alternates: {
    canonical: 'https://www.promptquorum.com/privacy',
  },
  robots: 'noindex, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com/privacy',
    siteName: 'PromptQuorum',
    title: 'Privacy Policy | PromptQuorum',
    description: 'Privacy Policy for PromptQuorum. Learn how we collect, use, and protect your data, your rights under GDPR, and how to contact us with data requests.',
    images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: 'PromptQuorum — One Prompt. Every Model. One Verdict.' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'Privacy Policy | PromptQuorum',
    description: 'Privacy Policy for PromptQuorum. Learn how we collect, use, and protect your data, your rights under GDPR, and how to contact us with data requests.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
}

const EFFECTIVE_DATE = '15 March 2026'
const CONTROLLER = 'PromptQuorum'
const CONTROLLER_EMAIL = 'hello@promptquorum.com'
const SITE_URL = 'https://www.promptquorum.com'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-text-secondary mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-text-secondary">
            Effective date: <time dateTime="2026-03-15">{EFFECTIVE_DATE}</time> &nbsp;·&nbsp; Controller: {CONTROLLER} &nbsp;·&nbsp; Contact: {CONTROLLER_EMAIL}
          </p>
        </div>

        {/* GDPR notice banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg px-5 py-4 mb-10 text-sm text-text-secondary leading-relaxed">
          This policy is written to comply with the EU General Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA). If you have questions or wish to exercise your rights, email{' '}
          <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>{' '}
          and we will respond within 30 days.
        </div>

        <div className="prose-policy space-y-12">

          {/* 1 */}
          <section>
            <H2 n="1">Who we are</H2>
            <P>
              PromptQuorum ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") is a software product available at{' '}
              <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a>. PromptQuorum is developed by Hans Kuepper (the "<strong>data controller</strong>" for the purposes of GDPR).
            </P>
            <P>
              We operate a multi-model AI dispatch and consensus analysis tool. The product itself processes no personal data — prompts, API keys, and AI responses are handled entirely within your browser and transmitted directly from your device to the AI providers you choose. PromptQuorum servers never receive, store, or process your prompts or API keys.
            </P>
            <P>
              This Privacy Policy covers only the personal data we collect through the PromptQuorum website — specifically the waitlist form at{' '}
              <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a>.
            </P>
          </section>

          {/* 2 */}
          <section>
            <H2 n="2">Data we collect and why</H2>
            <P>We collect the following personal data:</P>

            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>Data</Th>
                    <Th>How collected</Th>
                    <Th>Purpose</Th>
                    <Th>Lawful basis</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td>Email address</Td>
                    <Td>Waitlist form on homepage</Td>
                    <Td>Beta launch notification; product update emails</Td>
                    <Td>Consent (Art. 6(1)(a) GDPR)</Td>
                  </tr>
                  <tr>
                    <Td>Anonymous usage analytics</Td>
                    <Td>Google Analytics 4 (GA4) cookie</Td>
                    <Td>Understand which pages are visited; improve the site</Td>
                    <Td>Legitimate interest (Art. 6(1)(f) GDPR) — see §7</Td>
                  </tr>
                </tbody>
              </table>
            </div>

            <P>
              We do not collect names, phone numbers, payment information, IP addresses stored beyond session-level aggregation, or any special-category data under Art. 9 GDPR.
            </P>
          </section>

          {/* 3 */}
          <section>
            <H2 n="3">Lawful basis for processing</H2>
            <H3>Consent — email address</H3>
            <P>
              When you enter your email and click "Join Waitlist", you give us explicit consent to contact you with beta launch announcements and product updates. Consent is the lawful basis under Art. 6(1)(a) GDPR. You may withdraw consent at any time by clicking the unsubscribe link in any email we send, or by emailing{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>. Withdrawal of consent does not affect the lawfulness of processing before withdrawal.
            </P>
            <H3>Legitimate interest — analytics</H3>
            <P>
              We use Google Analytics 4 to understand how visitors interact with the site in aggregate. We have assessed that this interest is not overridden by your interests or rights, given that: (a) we use IP anonymisation; (b) data is aggregated and not used to identify individuals; and (c) you can opt out via browser settings or the Google Analytics Opt-out Browser Add-on. If you prefer, you can email us to request we stop processing analytics data associated with your visit.
            </P>
          </section>

          {/* 4 */}
          <section>
            <H2 n="4">Data processors and third parties</H2>
            <P>
              We use the following third-party processors. Each is bound by a Data Processing Agreement (DPA) and GDPR-compliant data handling obligations:
            </P>

            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>Processor</Th>
                    <Th>Role</Th>
                    <Th>Data shared</Th>
                    <Th>Location</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td><strong>Resend</strong> (Resend Inc.)</Td>
                    <Td>Waitlist signup handler — stores subscriber email addresses and sends confirmation and launch emails on our behalf</Td>
                    <Td>Email address</Td>
                    <Td>United States</Td>
                  </tr>
                  <tr>
                    <Td><strong>Google Analytics 4</strong> (Google LLC)</Td>
                    <Td>Website analytics — anonymised aggregate usage data</Td>
                    <Td>Anonymised analytics events, no PII</Td>
                    <Td>United States</Td>
                  </tr>
                </tbody>
              </table>
            </div>



            <P>
              We do not sell your data to any third party. We do not share your email address with advertisers.
            </P>
          </section>

          {/* 5 */}
          <section>
            <H2 n="5">International data transfers</H2>
            <P>
              Some of our processors are based in the United States. Transfers of personal data from the European Economic Area (EEA) or the United Kingdom (UK) to the United States are subject to appropriate safeguards:
            </P>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-[15px] leading-relaxed">
              <li>
                <strong className="text-text-primary">Resend:</strong> Transfer is covered by Standard Contractual Clauses (SCCs) adopted by the European Commission under GDPR Art. 46(2)(c). Resend's Data Processing Agreement is available at resend.com/legal/dpa.
              </li>
              <li>
                <strong className="text-text-primary">Google Analytics:</strong> Google LLC participates in the EU–US Data Privacy Framework. Transfer is additionally covered by SCCs. Google's data transfer documentation is available at business.safety.google/gdpr.
              </li>
            </ul>
            <P>
              You may request a copy of the applicable SCCs by emailing{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>.
            </P>
          </section>

          {/* 6 */}
          <section>
            <H2 n="6">Data retention</H2>
            <P>
              We retain your email address for <strong>24 months</strong> from the date of submission, or until you unsubscribe — whichever comes first. After this period, your email address is permanently deleted from all systems, including our email service provider's list.
            </P>
            <P>
              Anonymised Google Analytics data is retained for 14 months (the minimum configurable retention period in GA4). No personal data is retained in GA4.
            </P>
            <P>
              Resend retains transactional email logs for up to 30 days. Audience contact records (your email address and subscription status) are retained for as long as your subscription is active, or until you request deletion.
            </P>
          </section>

          {/* 7 */}
          <section>
            <H2 n="7">Cookies and tracking</H2>
            <P>
              The PromptQuorum website uses the following cookies:
            </P>

            <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <Th>Cookie</Th>
                    <Th>Set by</Th>
                    <Th>Purpose</Th>
                    <Th>Duration</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">_ga</code></Td>
                    <Td>Google Analytics 4</Td>
                    <Td>Distinguishes unique users; anonymised</Td>
                    <Td>2 years</Td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">_ga_*</code></Td>
                    <Td>Google Analytics 4</Td>
                    <Td>Session state</Td>
                    <Td>2 years</Td>
                  </tr>
                  <tr>
                    <Td><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">localStorage</code></Td>
                    <Td>PromptQuorum (product only)</Td>
                    <Td>Stores your API keys and settings locally in your browser — never transmitted to us</Td>
                    <Td>Until you clear browser data</Td>
                  </tr>
                </tbody>
              </table>
            </div>

            <P>
              We do not use tracking pixels, fingerprinting, or third-party advertising cookies. To opt out of Google Analytics tracking, install the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> or configure your browser to block cookies from <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">*.google-analytics.com</code>.
            </P>
          </section>

          {/* 8 */}
          <section>
            <H2 n="8">Your rights under GDPR</H2>
            <P>
              If you are in the EEA, UK, or Switzerland, you have the following rights regarding your personal data. We will respond to all requests within <strong>30 days</strong> of receipt.
            </P>

            <div className="space-y-4 my-6">
              {[
                {
                  right: 'Right of access (Art. 15)',
                  desc: 'Request a copy of the personal data we hold about you and information about how it is processed.',
                },
                {
                  right: 'Right to rectification (Art. 16)',
                  desc: 'Ask us to correct inaccurate or incomplete personal data.',
                },
                {
                  right: 'Right to erasure / "right to be forgotten" (Art. 17)',
                  desc: 'Request deletion of your personal data. We will erase your email from all systems within 30 days, including our email service provider\'s list.',
                },
                {
                  right: 'Right to restriction of processing (Art. 18)',
                  desc: 'Ask us to pause processing of your data while a dispute is resolved.',
                },
                {
                  right: 'Right to data portability (Art. 20)',
                  desc: 'Receive a copy of your personal data in a structured, machine-readable format (JSON or CSV) to transfer to another controller.',
                },
                {
                  right: 'Right to object (Art. 21)',
                  desc: 'Object to processing based on legitimate interest (analytics). We will cease that processing unless we can demonstrate compelling legitimate grounds.',
                },
                {
                  right: 'Right to withdraw consent',
                  desc: 'Withdraw consent for email communications at any time by unsubscribing from any email we send, or by emailing us directly. Withdrawal does not affect prior lawful processing.',
                },
                {
                  right: 'Right not to be subject to automated decisions (Art. 22)',
                  desc: 'We do not use automated decision-making or profiling that produces legal or similarly significant effects.',
                },
              ].map(({ right, desc }) => (
                <div key={right} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary text-[15px]">{right}</p>
                    <p className="text-text-secondary text-[14.5px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <P>
              To exercise any of these rights, email{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>{' '}
              with the subject line "<strong>Data Subject Request</strong>". We may ask you to verify your identity before processing the request. There is no fee for exercising your rights.
            </P>
          </section>

          {/* 9 */}
          <section>
            <H2 n="9">Right to lodge a complaint</H2>
            <P>
              If you believe we have not handled your personal data in accordance with applicable law, you have the right to lodge a complaint with your local supervisory authority. In the EU, find your national authority at{' '}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>. In the UK, the supervisory authority is the{' '}
              <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Information Commissioner's Office (ICO)</a>.
            </P>
            <P>
              We would appreciate the opportunity to address your concern directly before you escalate to a supervisory authority — please contact us at{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>{' '}
              first.
            </P>
          </section>

          {/* 10 */}
          <section>
            <H2 n="10">California privacy rights (CCPA)</H2>
            <P>
              If you are a California resident, you have the right to know what personal information we collect, the right to delete it, and the right to opt out of its sale. We do not sell personal information. To exercise your rights, email{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>.
            </P>
          </section>

          {/* 11 */}
          <section>
            <H2 n="11">Children's privacy</H2>
            <P>
              The PromptQuorum website is not directed at children under 16. We do not knowingly collect personal data from anyone under 16. If you believe we have inadvertently collected such data, email{' '}
              <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a>{' '}
              and we will delete it immediately.
            </P>
          </section>

          {/* 12 */}
          <section>
            <H2 n="12">Changes to this policy</H2>
            <P>
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. When we do, we will update the effective date at the top of this page. Material changes — such as collecting new categories of data or changing the lawful basis — will be communicated by email to waitlist subscribers at least 14 days before taking effect.
            </P>
          </section>

          {/* 13 */}
          <section>
            <H2 n="13">Contact</H2>
            <P>
              For all privacy-related questions, data subject requests, or to withdraw consent:
            </P>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-text-secondary space-y-1">
              <p><strong className="text-text-primary">PromptQuorum — Data Controller</strong></p>
              <p>Email: <a href={`mailto:${CONTROLLER_EMAIL}`} className="text-primary hover:underline">{CONTROLLER_EMAIL}</a></p>
              <p>Website: <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a></p>
              <p className="text-xs font-mono text-text-secondary pt-1">Response time: within 30 days of receipt</p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-text-secondary">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href={`mailto:${CONTROLLER_EMAIL}`} className="hover:text-primary transition-colors">hello@promptquorum.com</a>
        </div>

      </div>
    </div>
  )
}

/* ── Small layout helpers ── */
function H2({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-text-primary tracking-tight mb-3 flex items-baseline gap-3">
      <span className="text-sm font-mono text-text-secondary shrink-0">{n}.</span>
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-text-primary mt-5 mb-2">{children}</h3>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] text-text-secondary leading-relaxed mb-4">{children}</p>
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left py-2.5 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="py-3 px-4 text-text-secondary text-[13.5px] align-top">{children}</td>
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed my-4">
      ⚠ {children}
    </div>
  )
}
