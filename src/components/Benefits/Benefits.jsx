import React from 'react';
import './Benefits.scss';
import Button from '../Button/Button';
import banner from '../../assets/images/tech/tech-banner.png';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap,
} from 'lucide-react';

/**
 * Benefits Section
 * Two-column responsive layout matching Aspirant's design system:
 * - Left: Visual container / Temporary mockup card (user can easily replace with their custom image)
 * - Right: Badge, Title, Subtitle, Key Value Pillars, and Primary CTA
 */
const Benefits = ({
  customImage = null, // Set to your custom image URL/import when ready
  onCtaClick
}) => {
  const handleOpenHtml = () => {
    window.open('/TheSelfieBooth.html', '_blank', 'noopener,noreferrer');
  };
  const valuePillars = [
    {
      id: 1,
      icon: <Target className="pillar-icon" size={20} />,
      tag: "New Drop",
      title: 'Africa Booth Trend',
      desc: 'Something big is loading. Tap in to be first to see Africa Booth Trend when the full experience goes live.',
      ctaLable: "Explore Africa Booth Trend ↗",
      ctaLink: handleOpenHtml
    },
    {
      id: 2,
      icon: <Zap className="pillar-icon" size={20} />,
      title: 'More Drops Loading',
      desc: 'New tools and platforms are in the works. Follow us on LinkedIn so you don\'t miss the next launch'
    }
  ];


  return (
    <section className="benefits" id="technology">
      {/* Anchor helper in case old link used '#penefits' */}
      <span id="penefits" style={{ position: 'absolute', top: '-80px', visibility: 'hidden' }} />

      <div className="benefits-container">
        {/* Left Column: Visual container / Temporary Mockup Card */}
        <motion.div 
          className="benefits-visual-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={banner} alt="" className='banner' />
        </motion.div>

        {/* Right Column: Content, Typography, Value Pillars, CTA */}
        <motion.div 
          className="benefits-content-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Badge */}
          <div className="benefits-badge">
            <span className="dot"></span> Technology
          </div>

          {/* Section Title */}
          <h2 className="benefits-title">
            Where Creative Meets Code.
          </h2>

          {/* Subtitle */}
          <p className="benefits-subtitle">
            We build and back the platforms that give brands an unfair advantage. Here's what's cooking in our lab.
          </p>

          {/* Value Pillars / Feature Grid */}
          <div className="benefits-pillars-grid">
            {valuePillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-text">
                {pillar.tag && <div className="pillar-tag-box">
                  {pillar.tag}
                </div>}
                  <h3 className="pillar-heading">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>

                  {pillar.ctaLable && <button onClick={pillar.ctaLink} className="pillar-cta">{pillar.ctaLable}</button>}
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          {/* <div className="benefits-action-row">
            <Button variant="primary" onClick={handleCta}>
              Book a 30 mins Call
            </Button>
            <span className="benefits-note">
              No pressure. Just actionable strategy tailored to your brand.
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
