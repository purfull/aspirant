import './Testimonials.scss';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    author: 'David Warner',
    role: 'CTO of Tech Solution',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    quote: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    author: 'David Warner',
    role: 'CTO of Tech Solution',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    quote: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    author: 'David Warner',
    role: 'CTO of Tech Solution',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    quote: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    author: 'David Warner',
    role: 'CTO of Tech Solution',
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
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
