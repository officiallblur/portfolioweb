
// ThemeToggle.jsx
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="theme-toggle"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
};
export default ThemeToggle;