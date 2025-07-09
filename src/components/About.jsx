import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/images/profile.jpg" alt="About" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I'm Abdulrahman Lawal,  I am an Information and Communication Technolgy graduate at Airforce Institute of Technolgy Kaduna. I am looking
        to join a company that values innovation, collaboration, and continuous learning and am
        confident that my enthusiasm and drive will help me succeed in any role that leverages my
        passion for technology. </p>
          <p>
            My journey in tech began with hardware and networking, then evolved into full-stack development. I've had the privilege to work with various organizations where I've honed my skills in web development, quality assurance, and technical instruction.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends.
          </p>
          <div className="about-details">
            <div>
              <h4>Name:</h4>
              <p>Abdulrahman Lawal</p>
            </div>
            <div>
              <h4>Email:</h4>
              <p>Abdulrahmanlawal175@gmail.com</p>
            </div>
            <div>
              <h4>Experience:</h4>
              <p>5+ Years</p>
            </div>
            <div>
              <h4>Location:</h4>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;