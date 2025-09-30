import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Sportify Clone',
    description: 'A clone of the popular music streaming platform with modern UI and features.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://view-transitions-lac-seven.vercel.app/',
    image: '/images/sportify-clone.png'
  },
  {
    title: 'Netflix Clone',
    description: 'A responsive Netflix clone with movie browsing and trailer playback functionality.',
    technologies: ['React', 'css', 'TMDB API'],
    link: 'https://netflix-henna-beta.vercel.app/',
    image: '/images/netflix-clone.png'
  },
  {
    title: 'Resume Builder',
    description: 'An interactive resume builder application with customizable templates.',
    technologies: ['React', 'PDF Generation', 'Local Storage'],
    link: 'https://resume-builder-tau-blush.vercel.app/',
    image: '/assets/images/resume-builder.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Some of my recent work
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
