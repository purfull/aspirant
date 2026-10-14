import './CardsCarousel.scss';
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

const cardsData = [
  {
    id: 1,
    title: 'Social Media Marketing',
    description: 'Always-on content calendars, community management and trend-jacking done right. We make your feed the place people actually want to be, across Instagram, TikTok, Facebook, LinkedIn and YouTube.',
    icon: Share2
  },
  {
    id: 2,
    title: 'Paid Media Campaigns',
    description: 'Meta and Google ads built to convert, not just collect likes. We test, tweak and scale what works, with full receipts on every Pula spent.',
    icon: Target
  },
  {
    id: 3,
    title: 'Video & Short-Form Content',
    description: 'Reels, TikToks, brand films and testimonial content engineered for the first three seconds. Hook, story, payoff. Every time.',
    icon: Video
  },
  {
    id: 4,
    title: 'Photography & Video for Business',
    description: 'Brand shoots, product photography and corporate content that makes your business look as good as it actually is.',
    icon: Camera
  },
  {
    id: 5,
    title: 'Design for Digital',
    description: 'Social creatives, ad designs, motion graphics and UI that pop on every screen. Zero boring templates, all main character visuals.',
    icon: Palette
  },
  {
    id: 6,
    title: 'Website Development',
    description: 'Fast, mobile-first websites, landing pages and e-commerce builds that turn visitors into leads. Clean code, cleaner conversions.',
    icon: Globe
  },
  {
    id: 7,
    title: 'SEO & Search',
    description: 'Get found when it matters. Keyword strategy, technical SEO and search marketing that gets you to page one and keeps you there.',
    icon: Search
  },
  {
    id: 8,
    title: 'Marketing Technologies',
    description: 'CRM setup, lead-routing automation, conversion tracking and live dashboards. The behind-the-scenes tech that makes growth repeatable.',
    icon: Cpu
  },
  {
    id: 9,
    title: 'Onsite Event Support',
    description: 'Live coverage, content capture and digital activations at launches, conferences and brand events. If it happens, it gets posted.',
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

const CardsCarousel = ({ 
  cards = cardsData,
  badgeText = 'What We Do',
  title = 'From Unknown to Unforgettable',
  subtitle = 'Content, ads, tech and tools under one roof. Pick one, or let us run the whole playbook.'
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
          {cards.map((card) => {
            const IconComponent = card.icon;

            return (
              <motion.div 
                key={card.id} 
                className="service-card carousel-card-inner"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.25)'
                }}
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

export default CardsCarousel;
