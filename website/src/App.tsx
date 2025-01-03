import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Scene from "./scene"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./index.css"

function App() {
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  const handleNavClick = (page: string) => {
    if (page === 'resume') {
      // Replace with your actual resume PDF URL
      window.open('/resume.pdf', '_blank')
      return
    }
    setCurrentPage(page)
  }

  return (
    <main>
      <div className="scene-container">
        <Scene />
      </div>
      <div className="content-overlay">
        <nav className="navbar">
          <button onClick={() => handleNavClick('projects')} className="nav-link">Projects</button>
          <button onClick={() => handleNavClick('resume')} className="nav-link">Resume</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
        </nav>
        <h1 className="title">William Liu</h1>
      </div>
      <AnimatePresence mode="wait">
        {currentPage === 'projects' && (
          <Projects />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
