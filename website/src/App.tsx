import { useState } from "react"
import Scene from "./scene"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./index.css"

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'contact'>('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleNavigation = (page: 'home' | 'projects' | 'contact') => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 500) // Half of our transition duration
  }

  return (
    <main>
      <div className="scene-container">
        <Scene />
      </div>
      <div className="content-overlay">
        <nav className="navbar">
          <button onClick={() => handleNavigation('projects')} className="nav-link">Projects</button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
          <button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button>
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
