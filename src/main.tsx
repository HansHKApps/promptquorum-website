import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'
import { FrameworksGuide } from './pages/blog/FrameworksGuide.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/prompt-frameworks" element={<FrameworksGuide />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
