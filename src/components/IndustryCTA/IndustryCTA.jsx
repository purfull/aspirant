import './IndustryCTA.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

// Deterministic particles generated at module level for pure rendering
const PARTICLES = Array.from({ length: 42 }).map((_, i) => {
  const pseudo1 = ((i * 37 + 13) % 100) / 100;
  const pseudo2 = ((i * 73 + 29) % 100) / 100;
  const pseudo3 = ((i * 19 + 7) % 100) / 100;
  const pseudo4 = ((i * 47 + 53) % 100) / 100;

  return {
    id: i,
    x: pseudo1 * 94 + 3,
    y: pseudo2 * 92 + 4,
    size: pseudo3 * 2.5 + 1.5,
    duration: pseudo4 * 3 + 2.5,
    delay: (i * 0.23) % 4,
    driftX: (pseudo1 - 0.5) * 16,
    driftY: -(pseudo2 * 14 + 6)
  };
});

const IndustryCTA = () => {
  return (
    <div className="industry-cta-wrapper">
      <motion.div 
        className="industry-cta-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Circular moving orange gradient glow around the div */}
        <div className="circular-gradient-glow-wrapper" aria-hidden="true">
          <div className="circular-gradient-orb"></div>
        </div>

        {/* Floating and blinking white particles */}
        <div className="particles-container" aria-hidden="true">
          {PARTICLES.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                '--drift-x': `${p.driftX}px`,
                '--drift-y': `${p.driftY}px`
              }}
            />
          ))}
        </div>

        {/* Card Content */}
        <div className="industry-cta-content">
          <h2 className="industry-cta-title">
            Not Seeing Your Industry Here?<br />
            Let's create something<br />
            <em>uniquely yours.</em>
          </h2>

          <p className="industry-cta-subtitle">
            We work across diverse domains with tailored solutions.
          </p>

          <div className="industry-cta-action">
            <Button variant="primary">Book a 30 mins Call</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryCTA;
