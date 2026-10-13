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
          Aspirant Ideas is a Gaborone-born digital crew building the online presence of brands that want to scale, and fast. We live where your customers scroll, and we make sure your brand shows up there as the main character.

          Led by Dr. Arun Prasanna Gandhi <span className="highlight">(DBA, MCIM, 27+ years in marketing across Botswana, India and South Africa)</span>, our squad of strategists, designers, creators, videographers and ads nerds turns ideas into content people actually stop for.

          Your aspirations, our obsession. No fluff, no guesswork. Just creative that hits and numbers that prove it.
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
