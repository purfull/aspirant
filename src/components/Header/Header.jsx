import { useState, useEffect } from 'react';
import './Header.scss';
import Button from '../Button/Button';
import logo from '/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Works', href: 'works' },
  // { name: 'Technology', href: 'technology' },
  { name: 'Testimonial', href: 'testimonials' },
  // { name: 'Testimonials', href: 'testimonials' },
  // { name: 'FAQ', href: 'faq' },
  // { name: 'Faq', href: 'faq' },
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
  const handleWhatsapp = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.open('https://wa.me/+26771687825', '_blank');
  }

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header-container">
          <div className="header-logo"
            onClick={() => {
              const el = document.getElementById('hero');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
            <img src={logo} alt="aspirants-logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button href={link.href}
                    onClick={() => {
                      const el = document.getElementById(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}>{link.name}</button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <Button
              variant="primary"
              onClick={handleWhatsapp}
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
                    <motion.button
                      key={link.name}
                      className="mobile-nav-item"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: 0.03 + idx * 0.025 }}
                      onClick={() => {
                        const el = document.getElementById(link.href);
                        if (el) { el.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); };
                      }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Orange pill button with right arrow */}
                <div className="mobile-menu-cta">

                  <Button
                    variant="primary"
                    onClick={handleWhatsapp}
                  >
                    Let's Talk
                  </Button>
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
