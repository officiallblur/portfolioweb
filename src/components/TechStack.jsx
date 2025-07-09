import { motion } from 'framer-motion';
import '../styles/TechStack.css';

const techStack = [
  { name: 'Python', logo: '/images/python.png' },
  { name: 'PHP', logo: '/images/php.png' },
  { name: 'React', logo: '/images/reactjs.png' },
  { name: 'JavaScript', logo: '/images/javascript.png' },
];

const TechStack = () => {
  return (
    <section id="skills" className="tech-stack">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies I've been working with recently
        </motion.p>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="tech-logo">
                <img src={tech.logo} alt={tech.name} />
              </div>
              <h3>{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;