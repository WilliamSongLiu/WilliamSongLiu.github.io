import React from 'react'

interface ProjectsProps {
  onBack: () => void;
}

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Description of your first project. You can write multiple lines of text here explaining what the project does, what technologies were used, and what you learned.",
    link: "https://github.com/yourusername/project1",
    image: "/project1.png"
  },
  {
    title: "Project Two",
    description: "Description of your second project. This is a placeholder text that you should replace with actual project details.",
    link: "https://github.com/yourusername/project2",
    image: "/project2.png"
  }
]

export default function Projects({ onBack }: ProjectsProps) {
  return (
    <div className="page projects-page">
      <button onClick={onBack} className="back-button">
        ← Back
      </button>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </div>
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}