import './Testimonials.scss';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: 'Team Aspirant’s creative thinking, strategic direction and reliable execution made our creative campaigns and event collaborations seamless.',
    author: 'Alpha Direct Insurance Co',
    role: 'Alpha Direct Insurance Co',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    quote: 'Transformed a food concept into one of Botswana’s recognised premium dining brands through strategic branding, creative marketing and consistent growth, now spanning three successful branches.',
    author: 'David Warner',
    role: 'Bukhara Restaurant',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    quote: 'Partnered with BTCAT for over a decade, contributing both as an external volunteer and through leadership committee roles across creative, content and event management, while championing eco-friendly practices and fund raising initiatives.',
    author: 'David Warner',
    role: 'Botswana Tamil Cultural Association Trust',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    quote: 'Aspirant team, brought our camp to life through authentic on-site content, strategic storytelling and stunning aerial visuals that captured the true Okavango Delta experience.',
    author: 'Judge Sango',
    role: 'Saguni Group',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="testimonials-badge">
            <span className="dot"></span> Testimonial
          </div>
          <h2 className="testimonials-title">
            Words From<br />
            <em>Our Clients</em>
          </h2>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((item) => (
            <motion.div 
              key={item.id} 
              className="testimonial-card"
              variants={cardVariants}
            >
              <p className="testimonial-quote">
                "{item.quote}"
              </p>
              
              <div className="testimonial-author">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="author-avatar" 
                />
                <div className="author-info">
                  <span className="author-name">{item.author}</span>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
