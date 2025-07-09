import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experiences = [
  {
    company: 'Barnksforte Technologies',
    position: 'QA specialist',
    duration: 'March 2025 - Present',
    description: [
      'Acquired Knowledge on FrontEnd Development using React, Typescript and Knowledge in Quality Assurance(QA).',
      'Developed responsive web applications using React and CSS',
      'Implemented quality assurance processes for frontend development',
      
    ]
  },
  {
    company: 'Techminds Academy',
    position: 'Instructor (Fullstack Development)',
    duration: 'January 2024 - February 2025',
    description: [
      'Taught HTML, CSS, JavaScript and PHP to aspiring developers',
      'Developed curriculum and learning materials for fullstack development',
      'Mentored students through projects and career development'
    ]
  },
  {
    company: 'Industrial Training Funds',
    position: 'Trainee (Hardware & Networking)',
    duration: 'September 2022 - March 2023',
    description: [
      'Learned computer hardware maintenance and troubleshooting',
      'Gained knowledge in networking fundamentals and configurations',
      'Participated in real-world IT infrastructure projects'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <span className="duration">{exp.duration}</span>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;