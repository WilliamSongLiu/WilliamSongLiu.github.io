import React, { FC } from 'react';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { text: string; url: string }[];
}

const projects: Project[] = [
  {
    title: "AI Research Project",
    description: "Developed novel machine learning algorithms for natural language processing, achieving state-of-the-art results on multiple benchmarks.",
    image: "https://via.placeholder.com/400x300",
    tags: ["AI", "NLP", "Machine Learning"],
    links: [
      { text: "GitHub", url: "#" },
      { text: "Paper", url: "#" }
    ]
  },
  {
    title: "VR Game Development",
    description: "Created an immersive virtual reality game using Unity and OpenXR, featuring innovative interaction mechanics.",
    image: "https://via.placeholder.com/400x300",
    tags: ["XR", "Games", "Unity"],
    links: [
      { text: "Play Store", url: "#" },
      { text: "Demo Video", url: "#" }
    ]
  },
  {
    title: "Blockchain DApp",
    description: "Built a decentralized application for NFT trading with smart contracts on Ethereum, supporting multiple token standards.",
    image: "https://via.placeholder.com/400x300",
    tags: ["Web3", "Blockchain", "Ethereum"],
    links: [
      { text: "Live Demo", url: "#" }
    ]
  },
  {
    title: "Trading Bot Platform",
    description: "Developed an automated trading platform with machine learning-based decision making and real-time market analysis.",
    image: "https://via.placeholder.com/400x300",
    tags: ["AI", "Trading", "Automation"],
    links: [
      { text: "Documentation", url: "#" },
      { text: "GitHub", url: "#" }
    ]
  }
];

const Projects: FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;