import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I'm{' '}
            <TypeAnimation
              sequence={[
                'Abdulrahman',
                1000,
                'Lawal',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2>Full Developer & QA specialist</h2>
          <p>
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div className="hero-actions">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <div className="glow-effect"></div>
            <img src="/images/profile.jpg" alt="Abdulrahman" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;