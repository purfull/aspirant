import './About.scss';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years in Marketing', value: '27+' },
  { label: 'Brands Served+', value: '50+' },
  { label: 'Countries Served', value: '3' },
  { label: 'Core Services', value: '5' }
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
          <span className="dot"></span> About Us
        </motion.div>

        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          DNA Media t/a Aspirant Ideas is a digital marketing company
          on a mission: to ideate strategies for our clients through
          creatively niche visuals channelled through exactly the right
          mediums. Led by Dr. Arun Prasanna Gandhi <span className="highlight">(DBA, MCIM 4 27
          years of marketing experience across Botswana, India and
          South Africa)</span>, our team of strategists, designers,
          videographers and social media specialists are passionate
          about helping businesses stand out, connect, and grow.
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
