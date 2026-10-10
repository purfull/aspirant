import './Clients.scss';
import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: 'Frame Blox', icon: '◑' },
  { id: 2, name: 'Supa Blox', icon: '◯' },
  { id: 3, name: 'Hype Blox', icon: '⧖' },
  { id: 4, name: 'Ultra Blox', icon: '◖' },
  { id: 5, name: 'Ship Blox', icon: '⫸' },
  { id: 6, name: 'Frame Blox', icon: '◑' },
  { id: 7, name: 'Ultra Blox', icon: '◖' },
  { id: 8, name: 'Ship Blox', icon: '⫸' },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Clients = () => {
  return (
    <section className="clients" id="clients">
      <div className="clients-container">
        <motion.h2 
          className="clients-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Growing &<br />Leading Brands
        </motion.h2>

        <motion.div 
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {brands.map((brand, index) => (
            <motion.div key={index} className="brand-card" variants={itemVariants}>
              <span className="brand-icon">{brand.icon}</span>
              <span className="brand-name">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
