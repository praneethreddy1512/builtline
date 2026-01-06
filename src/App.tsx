import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { TeamPage } from './pages/TeamPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  )
}