import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download | PromptQuorum',
  description: 'Download PromptQuorum - the AI prompt optimization platform. Available for macOS, Windows, and Linux.',
  alternates: {
    canonical: 'https://www.promptquorum.com/download',
  },
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Download</h1>
          <p className="text-lg text-text-secondary">Coming soon - Full download page</p>
        </div>
        <p className="text-center"><a href="/" className="text-primary hover:text-primary/80">← Back to Home</a></p>
      </div>
    </div>
  )
}
