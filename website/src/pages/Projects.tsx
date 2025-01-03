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
    description: "A sophisticated machine learning model that predicts user behavior based on historical data. Built with Python, TensorFlow, and deployed on AWS. Features include real-time predictions, automated model retraining, and a REST API for easy integration.",
    link: "https://github.com/yourusername/project1",
    image: "/project1.png"
  },
  {
    title: "Project Two",
    description: "A modern web application for collaborative document editing. Built with React, Node.js, and Socket.IO. Features real-time collaboration, version history, and automatic saving. Used by over 1,000 active users.",
    link: "https://github.com/yourusername/project2",
    image: "/project2.png"
  },
  {
    title: "Project Three",
    description: "An iOS mobile app for tracking personal fitness goals and nutrition. Developed using Swift and CoreML for personalized workout recommendations. Integrates with HealthKit and features custom workout plans, meal tracking, and progress visualization.",
    link: "https://github.com/yourusername/project3",
    image: "/project3.png"
  },
  {
    title: "Project Four",
    description: "A blockchain-based voting system that ensures secure and transparent elections. Built with Solidity and Ethereum smart contracts. Features include voter verification, real-time vote counting, and audit trails.",
    link: "https://github.com/yourusername/project4",
    image: "/project4.png"
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