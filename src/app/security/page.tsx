import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Security & Data Handling | PromptQuorum',
    description:
      'How PromptQuorum handles prompts, API keys and website data: browser-side processing, direct provider calls, named processors and how to report a vulnerability.',
    alternates: { canonical: 'https://www.promptquorum.com/security' },
    robots: { index: true, follow: true },
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PromptQuorum', item: 'https://www.promptquorum.com/' },
    { '@type': 'ListItem', position: 2, name: 'Security', item: 'https://www.promptquorum.com/security' },
  ],
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-xs font-mono text-gray-400 mb-4">
            <a href="/" className="hover:text-purple-600 transition-colors">PromptQuorum</a>
            <span className="mx-2">/</span>
            <span>Security</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Security &amp; data handling</h1>
          <p className="mt-2 text-sm text-gray-500">
            What PromptQuorum does with your prompts, API keys and website data, and how to report a problem.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">In short</h2>
            <p>
              PromptQuorum does not host or run any AI models and has no server that receives your prompts or
              API keys. Requests go from your device directly to the AI providers you choose.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Prompts and AI responses</h2>
            <p>
              Prompts and responses are handled in your browser and sent straight from your device to the
              provider you selected (for example OpenAI, Anthropic or Google). They do not pass through
              PromptQuorum servers. What each provider does with that data is governed by the provider&apos;s own
              terms and privacy policy. Local models you run yourself stay on your machine.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">API keys</h2>
            <p>
              You bring your own keys. They are stored only in your browser&apos;s localStorage and are used for
              direct calls to your chosen provider. PromptQuorum servers never receive or transmit them.
              localStorage is not encrypted storage: anyone with access to your browser profile or device, or
              malicious software or browser extensions running on it, could read it. Use provider keys with
              spending limits, and revoke a key at the provider if you suspect exposure.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">What the website itself processes</h2>
            <p>
              The website and its public MCP server process a small amount of personal data: hosting and server logs, cookie-consent records, rate-limiting hashes and an optional
              pseudonymous MCP profile. We collect no payment data. The full list, purposes, lawful bases and
              processors (including their locations) are in the{' '}
              <a href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</a>.
            </p>
            <p className="mt-3">
              Website analytics (Umami and Microsoft Clarity) run in cookieless mode.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Responsible party and GDPR</h2>
            <p>
              The data controller is Hans Kuepper, Germany (see the{' '}
              <a href="/impressum" className="text-purple-600 hover:underline">Impressum</a>). You can request
              access, correction or deletion of your data, or withdraw consent, at any time by emailing the
              address below. MCP profiles can also be viewed and deleted with the <code>my_profile</code> and{' '}
              <code>forget_me</code> tools.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Report a vulnerability</h2>
            <p>
              If you find a security issue, email{' '}
              <a href="mailto:hello@promptquorum.com" className="text-purple-600 hover:underline">
                hello@promptquorum.com
              </a>{' '}
              with enough detail to reproduce it. Please give us reasonable time to fix it before disclosing
              it publicly. We do not run a paid bug-bounty programme.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
