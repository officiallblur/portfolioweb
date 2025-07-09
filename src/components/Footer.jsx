import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Abdulrahman's Portfolio</h2>
            <p>Creating digital experiences that matter</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Abdulrahmanlawal175@gmail.com</p>
            <p>+2348082091715</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abdulrahman Lawal. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;