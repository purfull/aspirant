import { useState, useEffect } from 'react';
import './Header.scss';
import Button from '../Button/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Works', href: '#works' },
  { name: 'Industries', href: '#industries' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize if screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <Button 
              variant="primary"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile & Tablet Burger Menu Button (smooth morph from 3 bars to X) */}
          <button 
            type="button"
            className={`header-burger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="burger-line line-1"></span>
            <span className="burger-line line-2"></span>
            <span className="burger-line line-3"></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile & Tablet Half-Screen Slide Menu (Matching Image 1) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay for bottom of screen */}
            <motion.div 
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide down half-screen drawer with pure black minimalist style */}
            <motion.div 
              className="mobile-menu-drawer"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-inner">
                {/* Clean, left-aligned minimalist link list */}
                <nav className="mobile-nav-list">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="mobile-nav-item"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: 0.03 + idx * 0.025 }}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Orange pill button with right arrow */}
                <div className="mobile-menu-cta">
                  <button 
                    type="button"
                    className="mobile-talk-btn"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Let's Talk</span>
                    <span className="arrow-icon">↗</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
