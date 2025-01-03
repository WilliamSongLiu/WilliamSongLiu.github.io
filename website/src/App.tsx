import Scene from "./scene"
import "./index.css"

function App() {
  return (
    <main>
      <div className="scene-container">
        <Scene />
      </div>
      <div className="content-overlay">
        <nav className="navbar">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <h1 className="title">William Liu</h1>
      </div>
    </main>
  )
}

export default App
