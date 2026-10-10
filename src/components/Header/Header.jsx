import './Header.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
            </svg>
          </div>
          <span>Aspirantideas</span>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a href="#process">Process</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-cta">
          <Button variant="primary">Let's Talk</Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
