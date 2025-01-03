import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Description of your first project. Write about the technologies used, challenges overcome, and impact created.",
    link: "https://github.com/yourusername/project1",
    image: "/project1.png"
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="projects-page"
    >
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="project-card"
          >
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}