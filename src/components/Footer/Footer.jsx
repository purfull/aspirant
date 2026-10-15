import React from 'react';
import './Footer.scss';
import logo from '/logo.png';

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

        {/* Center Section: Social Media Icons (LinkedIn, Instagram, Facebook) */}
        <div className="footer-center">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/aspirant-ideas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn linkedin-btn"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path d="M7.4 9.1H4.8V17.5H7.4V9.1ZM6.1 4.7C5.2 4.7 4.5 5.4 4.5 6.3C4.5 7.2 5.2 7.9 6.1 7.9C7 7.9 7.7 7.2 7.7 6.3C7.7 5.4 7 4.7 6.1 4.7ZM19.5 12.8C19.5 10.4 18.2 9 15.9 9C14.1 9 13.3 10 12.8 10.7V9.1H10.2C10.2 9.8 10.2 17.5 10.2 17.5H12.8V12.8C12.8 12.5 12.8 12.3 12.9 12.1C13.2 11.4 13.8 10.7 14.8 10.7C16.1 10.7 16.7 11.7 16.7 13.1V17.5H19.5V12.8Z" fill="white" />
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/aspirantideas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn instagram-btn"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
              <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.6" fill="none" />
              <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" fill="none" />
              <circle cx="15.8" cy="8.2" r="0.9" fill="white" />
            </svg>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/aspirantideas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn facebook-btn"
            aria-label="Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path d="M13.5 19V12.7H15.6L15.9 10.3H13.5V8.8C13.5 8.1 13.7 7.6 14.7 7.6H16V5.5C15.8 5.4 14.9 5.3 13.9 5.3C11.8 5.3 10.3 6.6 10.3 9V10.3H8.3V12.7H10.3V19H13.5Z" fill="white" />
            </svg>
          </a>
        </div>

        {/* Right Section: Powered by : + DNA Media Logo */}
        <div className="footer-right">
          <span className="footer-text">Powered by :</span>
          <div className="dna-media-logo-wrap" title="DNA Media">
            <svg 
              className="dna-media-svg"
              width="100" 
              height="28" 
              viewBox="0 0 100 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* DNA Bold Typography */}
              <text 
                x="0" 
                y="19" 
                fill="#FFFFFF" 
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" 
                fontWeight="900" 
                fontSize="18.5" 
                letterSpacing="0.4"
              >
                DNA
              </text>
              
              {/* Media subtext beneath A */}
              <text 
                x="28.5" 
                y="26" 
                fill="#D1D5DB" 
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" 
                fontWeight="600" 
                fontSize="6.8" 
                letterSpacing="0.6"
              >
                Media
              </text>

              {/* Connecting Molecule Lines radiating from central cyan node */}
              <line x1="41" y1="12" x2="57" y2="15" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="57" y1="15" x2="61" y2="5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="57" y1="15" x2="72" y2="13" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="57" y1="15" x2="68" y2="23" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="57" y1="15" x2="52" y2="24" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />

              {/* Molecule Nodes with 3D spherical radial shading */}
              {/* Top Orange Node */}
              <circle cx="61" cy="5" r="4.2" fill="url(#dnaOrange)" />
              
              {/* Far Right Coral Node */}
              <circle cx="72" cy="13" r="3.4" fill="url(#dnaCoral)" />
              
              {/* Bottom-Left Peach Node */}
              <circle cx="52" cy="24" r="3.2" fill="url(#dnaPeach)" />
              
              {/* Bottom-Right Purple Node */}
              <circle cx="68" cy="23" r="5" fill="url(#dnaPurple)" />
              
              {/* Central Cyan Node */}
              <circle cx="57" cy="15" r="3.8" fill="url(#dnaCyan)" />

              <defs>
                <radialGradient id="dnaOrange" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFA64D" />
                  <stop offset="100%" stopColor="#FF6B00" />
                </radialGradient>
                <radialGradient id="dnaCoral" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FF7A7A" />
                  <stop offset="100%" stopColor="#E63946" />
                </radialGradient>
                <radialGradient id="dnaPeach" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFF2E8" />
                  <stop offset="100%" stopColor="#FDBA74" />
                </radialGradient>
                <radialGradient id="dnaPurple" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#E0C3FC" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </radialGradient>
                <radialGradient id="dnaCyan" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#67E8F9" />
                  <stop offset="100%" stopColor="#0284C7" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
