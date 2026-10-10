import './Hero.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Hero = () => {
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
          <Button variant="outline">Our Works</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
