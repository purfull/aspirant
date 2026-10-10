import './CTA.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      {/* Scroll-triggered blooming orange ambient background gradient */}
      <motion.div 
        className="cta-bg-gradient-glow"
        initial={{ opacity: 0, scale: 0.55 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glow-radial-core"></div>
      </motion.div>

      {/* Subtle background dotted texture */}
      <div className="cta-bg-texture" aria-hidden="true"></div>

      <div className="cta-container">
        <motion.h2 
          className="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to Scale<br />
          Your Brand?
        </motion.h2>

        <motion.p 
          className="cta-subheading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
        </motion.p>

        <motion.div 
          className="cta-button-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="primary">Book a 30 mins Call</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
