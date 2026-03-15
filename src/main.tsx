import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'
import { FrameworksGuide } from './pages/blog/FrameworksGuide.tsx'
import { LocalAIVsCloud } from './pages/blog/LocalAIVsCloud.tsx'
import { AIModelComparison } from './pages/blog/AIModelComparison.tsx'
import { QuorumBlog } from './pages/blog/QuorumBlog.tsx'
import { OptimizationBlog } from './pages/blog/OptimizationBlog.tsx'
import { DataPrivacyBlog } from './pages/blog/DataPrivacyBlog.tsx'
import { PromptImpactBlog } from './pages/blog/PromptImpactBlog.tsx'
import { Features } from './pages/Features.tsx'
import { HowItWorks } from './pages/HowItWorks.tsx'
import { FAQ } from './pages/FAQ.tsx'
import { DownloadPage } from './pages/Download.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/blog/prompt-frameworks" element={<FrameworksGuide />} />
            <Route path="/blog/local-ai-vs-cloud" element={<LocalAIVsCloud />} />
            <Route path="/blog/ai-model-comparison" element={<AIModelComparison />} />
            <Route path="/blog/quorum" element={<QuorumBlog />} />
            <Route path="/blog/prompt-optimization" element={<OptimizationBlog />} />
            <Route path="/blog/enterprise-data-privacy" element={<DataPrivacyBlog />} />
            <Route path="/blog/research-prompt-optimization-impact" element={<PromptImpactBlog />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
)
