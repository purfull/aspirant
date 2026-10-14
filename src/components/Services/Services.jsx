import './Services.scss';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Target, 
  Video, 
  Camera, 
  Palette, 
  Globe, 
  Search, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Insurance & Financial Services',
    description: 'Lead-gen machines for insurers, banks and fintechs.',
    icon: Share2
  },
  {
    id: 2,
    title: 'Education & Training',
    description: 'Universities, colleges and schools filling seats.',
    icon: Target
  },
  {
    id: 3,
    title: 'Hospitality & Tourism',
    description: 'Lodges, safaris, hotels and restaurants worth the trip.',
    icon: Video
  },
  {
    id: 4,
    title: 'Technology & SaaS',
    description: 'Tech companies, software and IT solutions.',
    icon: Camera
  },
  {
    id: 5,
    title: 'Retail & FMCG',
    description: 'Stores, distributors and consumer brands.',
    icon: Palette
  },
  {
    id: 6,
    title: 'Health & Wellness',
    description: 'Clinics, hospitals and wellness providers.',
    icon: Globe
  },
  {
    id: 7,
    title: 'Automotive',
    description: 'Dealers, service centres and fleet companies.',
    icon: Search
  },
  {
    id: 8,
    title: 'Beauty & Lifestyle',
    description: 'Spas, beauty brands and lifestyle businesses.',
    icon: Cpu
  },
  {
    id: 9,
    title: 'Corporate & B2B',
    description: 'Professional services and corporates going digital-first.',
    icon: Sparkles
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Services = ({ 
  cards = servicesData,
  badgeText = 'Industries We Serve',
  title = 'Every Sector Deserves a Glow-Up.',
  subtitle = 'From scrappy startups to big-name corporates, across Southern Africa, India and beyond.'
}) => {
  return (
    <section className="cards-carousel-section" id="services">
      <div className="cards-carousel-container">
        
        {/* Section Header with Badge and Titles */}
        <motion.div 
          className="carousel-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-text-block">
            <div className="carousel-badge">
              <span className="dot"></span> {badgeText}
            </div>
            <h2 className="carousel-title">
              {title}
            </h2>
            <p className="carousel-subtitle">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Clean Responsive Cards Grid (No Carousel, No Tags, No Explore Buttons) */}
        <motion.div 
          className="services-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {servicesData.map((card) => {
            const IconComponent = card.icon;

            return (
              <motion.div 
                key={card.id} 
                className="service-card carousel-card-inner"
                variants={cardVariants}
              >
                {/* 1. Lucide Icon */}
                <div className="card-icon-container">
                  <IconComponent size={26} className="card-lucide-icon" />
                </div>

                {/* 2. Title */}
                <h3 className="card-title">{card.title}</h3>

                {/* 3. Sub Text / Description */}
                <p className="card-description">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
