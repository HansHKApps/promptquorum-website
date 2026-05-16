export function FactsDisclaimer() {
  return (
    <div className="my-8 p-5 border border-amber-200 bg-amber-50 rounded-xl text-sm text-text-secondary">
      <h2 className="font-bold text-text-primary mb-2 text-base">A Note on Third-Party Facts</h2>
      <p>
        This article references third-party AI models, benchmarks, prices, and licenses.
        The AI landscape changes rapidly. Benchmark scores, license terms, model names,
        and API prices can shift between the time of writing and the time you read this.
        Before making deployment or compliance decisions based on this article, verify current
        figures on each provider&apos;s official source: Hugging Face model cards for licenses
        and benchmarks, provider websites for API pricing, and EUR-Lex for current GDPR and
        EU AI Act text. This article reflects publicly available information as of May 2026.
      </p>
    </div>
  )
}
