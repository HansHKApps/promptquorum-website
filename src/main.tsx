import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'
import { FrameworksGuide } from './pages/blog/FrameworksGuide.tsx'
import { LocalAIVsCloud } from './pages/blog/LocalAIVsCloud.tsx'
import { AIModelComparison } from './pages/blog/AIModelComparison.tsx'
import { QuorumBlog } from './pages/blog/QuorumBlog.tsx'
import { OptimizationBlog } from './pages/blog/OptimizationBlog.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/prompt-frameworks" element={<FrameworksGuide />} />
          <Route path="/blog/local-ai-vs-cloud" element={<LocalAIVsCloud />} />
          <Route path="/blog/ai-model-comparison" element={<AIModelComparison />} />
          <Route path="/blog/quorum" element={<QuorumBlog />} />
          <Route path="/blog/prompt-optimization" element={<OptimizationBlog />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
