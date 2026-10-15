import './About.scss';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years in the Game', value: '27+' },
  { label: 'Clients Worldwide', value: '50+' },
  { label: 'Creatives Shipped', value: '1K+' },
  { label: 'Countries Served', value: '3' }
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <motion.div 
          className="about-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="dot"></span> Who We Are
        </motion.div>

        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Aspirant Ideas is a digital marketing agency where creativity, technology and real storytelling collide. In an AI-driven world, we keep it human, blending bold ideas with smart digital solutions. <span className="highlight">From social media and campaigns to websites, video and on-site content</span>, our creative team builds brand experiences that stand out and drive growth.Your brand has a story. We make people stop, connect and take action.
        </motion.p>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-label">
                <span className="dot"></span> {stat.label}
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
