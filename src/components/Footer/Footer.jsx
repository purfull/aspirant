import React from 'react';
import './Footer.scss';
import logo from '/logo.png';
import dnaLogo from '/dna-media.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Left Section: Conceived, Created and Coded by + Aspirant Ideas Logo */}
        <div className="footer-left">
          <span className="footer-text">Conceived, Created and Coded by</span>
          <a href="#hero" className="footer-brand-link" aria-label="Aspirant Ideas Home">
            <img 
              src={logo} 
              alt="Aspirant Ideas" 
              className="footer-aspirant-logo" 
            />
          </a>
        </div>

        {/* Center Section: Social Media Logos as images, centered on screen, without hover animations */}
        <div className="footer-center">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/aspirant-ideas/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn linkedin-btn"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/aspirantideas/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn instagram-btn"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/AspirantIdeas/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn facebook-btn"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
          </a>
        </div>

        {/* Right Section: Powered by : + DNA Media Logo */}
        <div className="footer-right">
          <span className="footer-text">Powered by :</span>
          <div className="dna-media-logo-wrap" title="DNA Media">
            <img src={dnaLogo} alt="DNA Media" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
