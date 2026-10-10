import { useState } from 'react';
import './Industries.scss';
import IndustryCTA from '../IndustryCTA/IndustryCTA';
import { motion } from 'framer-motion';

const industriesData = [
  {
    id: 1,
    title: 'Educational Institutions',
    description: 'We create intuitive platforms that simplify learning and administration. Focused on accessibility, clarity, and seamless user experiences.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Luxury Lodges',
    description: 'Elevating boutique hospitality with immersive digital storytelling, direct booking funnels, and unforgettable guest journeys.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Retail Stores',
    description: 'Bridging brick-and-mortar charm with high-converting omnichannel campaigns and captivating visual merchandising.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Restaurants & Food Chains',
    description: 'Crafting crave-worthy visual campaigns, local discovery SEO, and frictionless online ordering experiences.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Corporate Companies',
    description: 'Architecting authoritative brand identity, investor-grade collateral, and scalable B2B enterprise lead generation.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Warehouses',
    description: 'Streamlining industrial logistics visibility, partner portals, and supply-chain employer branding.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    title: 'Automobile Dealers',
    description: 'Driving high-intent test drives and showroom foot traffic through cinematic video and hyper-targeted ads.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    title: 'Spa',
    description: 'Translating tranquility into online bookings with calming aesthetics and automated client re-engagement.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    title: 'Other Agencies',
    description: 'Serving as trusted white-label partners for creative production, technical development, and media buying.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Industries = () => {
  const [activeTouchId, setActiveTouchId] = useState(null);

  const handleCardClick = (id) => {
    setActiveTouchId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <motion.div 
          className="industries-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="industries-badge">
            <span className="dot"></span> Our Focus
          </div>
          <h2 className="industries-title">
            Industries We Empower with<br />
            <em>Design & Innovation</em>
          </h2>
        </motion.div>

        <motion.div 
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industriesData.map((item) => {
            const isTouchActive = activeTouchId === item.id;

            return (
              <motion.div 
                key={item.id} 
                className={`industry-card ${isTouchActive ? 'touch-active' : ''}`}
                variants={cardVariants}
                onClick={() => handleCardClick(item.id)}
              >
                {/* Background image container */}
                <div className="card-media-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="card-bg-photo" 
                  />
                  <div className="card-gradient-overlay"></div>
                </div>

                {/* Default state bottom label */}
                <div className="card-default-label">
                  <span className="label-text">{item.title}</span>
                </div>

                {/* Hover state with background blur and centered description text */}
                <div className="card-hover-overlay">
                  <div className="hover-content">
                    <p className="hover-description">
                      {item.description}
                    </p>
                    <span className="hover-title">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Not Seeing Your Industry Here? Banner Card with drifting particles & border beam */}
        <IndustryCTA />
      </div>
    </section>
  );
};

export default Industries;
