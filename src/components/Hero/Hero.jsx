import { useState } from 'react';
import './Hero.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import photography from '../../assets/images/hero/photography.jpg';
import seo from '../../assets/images/hero/seo.jpg';
import marketing from '../../assets/images/hero/marketing-strategy.jpg';
import creatives from '../../assets/images/hero/creatives.jpg';
import webDesign from '../../assets/images/hero/web-design.jpg';

const servicesCards = [
  {
    id: 1,
    title: 'Marketing Strategy',
    description: 'We help you plan, position, and communicate your brand with a strategic roadmap.',
    image: marketing,
    badge: 'Strategy'
  },
  {
    id: 2,
    title: 'Creatives',
    description: 'We create visuals and campaigns that capture attention and elevate your digital presence.',
    image: creatives,
    badge: 'Design'
  },
  {
    id: 3,
    title: 'Web Design & Dev',
    description: 'We help you plan, position, and communicate your brand with a strategic roadmap.',
    image: webDesign,
    badge: 'Engineering'
  },
  {
    id: 4,
    title: 'SEO & SEM',
    description: 'Data-driven visibility and performance campaigns that drive measurable qualified traffic.',
    image: seo,
    badge: 'Growth'
  },
  {
    id: 5,
    title: 'Photography & Video',
    description: 'Studio-grade video production and commercial photography that capture audience attention.',
    image: photography,
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
          Stop the Scroll.{" "}
          <em>Start to Scale.</em>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We're the creative social and digital crew for brands that are done blending in. Scroll-stopping content, ads that actually convert, and websites built to grow, for ambitious businesses across Southern Africa & India.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary">Book a Free Strategy Call</Button>
          <Button 
            variant="outline"
            onClick={() => {
              const el = document.getElementById('works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See What We Do ↓
          </Button>
        </motion.div>

        {/* Interactive Cards Section - 80% screen width on desktop, hidden on mobile */}
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

            return (
              <div 
                key={card.id}
                className={`hero-card ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredId(card.id)}
                onClick={() => setHoveredId(isHovered ? null : card.id)}
              >
                {/* Background layers */}
                <div className="card-bg-gradient"></div>
                <div className="card-bg-dark"></div>

                {/* Vertical Title (visible when unhovered) */}
                <span className="card-title-vertical">
                  {card.title}
                </span>

                {/* Expanded Content (smoothly faded in on hover without DOM thrashing) */}
                <div className="card-expanded-content">
                  <div className="card-image-wrapper">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="card-preview-image"
                      loading="eager"
                    />
                  </div>

                  <div className="card-info-pane">
                    <h3 className="card-expanded-title">{card.title}</h3>
                    <p className="card-expanded-desc">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
