import { useState } from 'react';
import './Hero.scss';
import Button from '../Button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../../assets/hero.png';

const servicesCards = [
  {
    id: 1,
    title: 'Marketing Strategy',
    description: 'We help you plan, position, and communicate your brand with a strategic roadmap.',
    image: heroImg,
    badge: 'Strategy'
  },
  {
    id: 2,
    title: 'Creatives',
    description: 'We create visuals and campaigns that capture attention and elevate your digital presence.',
    image: heroImg,
    badge: 'Design'
  },
  {
    id: 3,
    title: 'Web Design & Dev',
    description: 'We help you plan, position, and communicate your brand with a strategic roadmap.',
    image: heroImg,
    badge: 'Engineering'
  },
  {
    id: 4,
    title: 'SEO & SEM',
    description: 'Data-driven visibility and performance campaigns that drive measurable qualified traffic.',
    image: heroImg,
    badge: 'Growth'
  },
  {
    id: 5,
    title: 'Photography & Video',
    description: 'Studio-grade video production and commercial photography that capture audience attention.',
    image: heroImg,
    badge: 'Production'
  }
];

const Hero = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="avatars">
            <img src="https://i.pravatar.cc/100?img=1" alt="Client 1" />
            <img src="https://i.pravatar.cc/100?img=2" alt="Client 2" />
            <img src="https://i.pravatar.cc/100?img=3" alt="Client 3" />
          </div>
          <span>Trusted by <span className="highlight">150+ Clients</span></span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Premium Digital Marketing<br />
          <em>for Ambitious Brands.</em>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We craft data-driven digital strategies that connect your brand to the right audiences, drive real growth, and deliver measurable ROI across Africa and beyond.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary">Book a 30 mins call</Button>
          <Button 
            variant="outline"
            onClick={() => {
              const el = document.getElementById('works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Our Works
          </Button>
        </motion.div>

        {/* Interactive Cards Section - hidden in mobile */}
        <motion.div 
          className="hero-cards-container"
          id="services"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          onMouseLeave={() => setHoveredId(null)}
        >
          {servicesCards.map((card) => {
            const isHovered = hoveredId === card.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <div 
                key={card.id}
                className={`hero-card ${isHovered ? 'is-hovered' : ''} ${isAnyHovered && !isHovered ? 'is-compressed' : ''}`}
                onMouseEnter={() => setHoveredId(card.id)}
                onClick={() => setHoveredId(isHovered ? null : card.id)}
              >
                {/* Background layers */}
                <div className="card-bg-gradient"></div>
                <div className={`card-bg-dark ${isHovered ? 'active' : ''}`}></div>

                {/* Vertical Title (visible when unhovered) */}
                <span className={`card-title-vertical ${isHovered ? 'hidden' : ''}`}>
                  {card.title}
                </span>

                {/* Expanded Content (visible when hovered) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="card-expanded-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-image-wrapper">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="card-preview-image"
                        />
                      </div>

                      <div className="card-info-pane">
                        <h3 className="card-expanded-title">{card.title}</h3>
                        <p className="card-expanded-desc">{card.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
