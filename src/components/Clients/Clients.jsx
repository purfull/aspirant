import './Clients.scss';
import { motion } from 'framer-motion';
import botho from "../../assets/images/client/botho.png";
import pets from "../../assets/images/client/pets.png";
import alpha from "../../assets/images/client/alpha.png";
import saguni from "../../assets/images/client/saguni.png";
import enco from "../../assets/images/client/enco.png";
import khwai from "../../assets/images/client/khwai.png";
import bukhara from "../../assets/images/client/bukhara.png";
import nf from "../../assets/images/client/nf.png";

const brands = [
  { id: 1, name: 'Frame Blox', image: botho },
  { id: 2, name: 'Supa Blox', image: pets },
  { id: 3, name: 'Hype Blox', image: alpha },
  { id: 4, name: 'Ultra Blox', image: saguni },
  { id: 5, name: 'Ship Blox', image: enco },
  { id: 6, name: 'Frame Blox', image: khwai },
  { id: 7, name: 'Ultra Blox', image: bukhara },
  { id: 8, name: 'Ship Blox', image: nf },
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
              {/* <span className="brand-icon">{brand.icon}</span>
              <span className="brand-name">{brand.name}</span> */}
              <img src={brand.image} alt="" srcset="" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
