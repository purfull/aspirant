import './Services.scss';
import { motion } from 'framer-motion';

const services = [
  { id: 1, title: 'Marketing Strategy' },
  { id: 2, title: 'Creatives' },
  { id: 3, title: 'Web Design & Dev' },
  { id: 4, title: 'SEO & SEM' },
  { id: 5, title: 'Photography & Video' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 10px 40px rgba(230, 81, 0, 0.2)' 
              }}
            >
              <div className="card-bg"></div>
              <h3 className="card-title">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
