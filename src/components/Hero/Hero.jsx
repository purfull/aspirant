import { useState } from 'react';
import './Hero.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import photography from '../../assets/images/hero/photography.png';
import seo from '../../assets/images/hero/seo.png';
import marketing from '../../assets/images/hero/marketing-strategy.png';
import creatives from '../../assets/images/hero/creatives.png';
import webDesign from '../../assets/images/hero/web-design.png';

const servicesCards = [
  {
    id: 1,
    title: 'Marketing Strategy',
    description: 'Big ideas. Smart moves. Bold results. We turn brand ambitions into strategies that actually go places.',
    image: marketing,
    badge: 'Strategy'
  },
  {
    id: 2,
    title: 'Creatives',
    description: 'No boring visuals here. Just scroll-stopping creativity that makes your brand impossible to ignore.',
    image: creatives,
    badge: 'Design'
  },
  {
    id: 3,
    title: 'Web Design & Dev',
    description: 'More than a pretty website. We build sleek, smart digital experiences that turn clicks into connections.',
    image: webDesign,
    badge: 'Engineering'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Less noise. More impact. We put your brand in front of the right people and turn attention into action.',
    image: seo,
    badge: 'Growth'
  },
  {
    id: 5,
    title: 'Photography & Video',
    description: 'Real people. Real moments. Seriously good content. We capture stories your audience actually wants to watch.',
    image: photography,
    badge: 'Production'
  }
];

const Hero = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleWhatsapp = (e) => {
    e.preventDefault();
    window.open('https://wa.me/+26771687825', '_blank');
  }
  return (
    <section className="hero" id='hero'>
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
          <span>Trusted by <span className="highlight">50+ Clients</span></span>
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
          <Button variant="primary" onClick={handleWhatsapp}>Book a Free Strategy Call</Button>
          <Button
            variant="outline"
            onClick={() => {
              const el = document.getElementById('industries');
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
                {/* Background image covering the card */}
                <div className="card-image-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-preview-image"
                    loading="eager"
                  />
                </div>

                {/* Mild orange gradient overlay */}
                <div className="card-bg-gradient"></div>

                {/* Vertical Title (visible when unhovered) */}
                <span className="card-title-vertical">
                  {card.title}
                </span>

                {/* Expanded Content (info pane smoothly revealed on hover) */}
                <div className="card-expanded-content">
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
