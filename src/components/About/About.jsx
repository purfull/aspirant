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
          Aspirant Ideas is a digital marketing agency blending creativity, technology and authentic storytelling to bring brands closer to their audiences. In an AI-driven world, we champion real people, real experiences and innovative digital solutions. From social media and digital campaigns to web solutions and technology-driven brand experiences, our team of strategists, designers, videographers and social media specialists goes beyond the screen, capturing content on-site that helps businesses stand out, connect and grow.



          <span className="highlight"></span>

Your brand has a story worth telling. Let's make your audience stop, engage and take action.
          
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
