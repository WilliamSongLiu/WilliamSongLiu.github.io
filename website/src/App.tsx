import { useState } from "react"
import Scene from "./scene"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./index.css"

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'contact'>('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavigation = (page: 'home' | 'projects' | 'contact') => {
    if (page === currentPage) return; // Prevent animation if same page

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 500)
  }

  const isPageOpen = currentPage !== 'home'

  return (
    <main>
      <div className="scene-container">
        <Scene isBlurred={isPageOpen} />
      </div>
      <div className="content-overlay">
        <nav className="navbar">
          <button
            onClick={() => handleNavigation('projects')}
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <button
            onClick={() => handleNavigation('contact')}
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>
        <div className={`page-container ${isTransitioning ? 'transitioning' : ''}`}>
          {currentPage === 'home' && <h1 className="title">William Liu</h1>}
          {currentPage === 'projects' && <Projects onBack={() => handleNavigation('home')} />}
          {currentPage === 'contact' && <Contact onBack={() => handleNavigation('home')} />}
        </div>
      </div>
    </main>
  )
}

export default App
