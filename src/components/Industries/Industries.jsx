import { useState } from 'react';
import './Industries.scss';
import IndustryCTA from '../IndustryCTA/IndustryCTA';
import { motion } from 'framer-motion';
import socialMedia from "../../assets/images/other-industries/social-media-marketing.png";
import paidMedia from "../../assets/images/other-industries/paid-media-campaigns.png";
import videoContent from "../../assets/images/other-industries/video-short-form-content.png";
import photography from "../../assets/images/other-industries/photography-video.png";
import design from "../../assets/images/other-industries/design-for-digital.png";
import webDev from "../../assets/images/other-industries/website-development.png";
import seo from "../../assets/images/other-industries/seo.png";
import marketingTech from "../../assets/images/other-industries/marketing-technologies.png";
import onsiteEvent from "../../assets/images/other-industries/onsite-event-support.png";

const industriesData = [
  {
    id: 1,
    title: 'Social Media Marketing',
    description: 'Always-on content calendars, community management and trend-jacking done right. We make your feed the place people actually want to be, across Instagram, TikTok, Facebook, LinkedIn and YouTube.',
    image: socialMedia
  },
  {
    id: 2,
    title: 'Paid Media Campaigns',
    description: 'Meta and Google ads built to convert, not just collect likes. We test, tweak and scale what works, with full receipts on every Pula spent.',
    image: paidMedia
  },
  {
    id: 3,
    title: 'Video & Short-Form Content',
    description: 'Reels, TikToks, brand films and testimonial content engineered for the first three seconds. Hook, story, payoff. Every time.',
    image: videoContent
  },
  {
    id: 4,
    title: 'Photography & Video for Business',
    description: 'Brand shoots, product photography and corporate content that makes your business look as good as it actually is.',
    image: photography
  },
  {
    id: 5,
    title: 'Design for Digital',
    description: 'Social creatives, ad designs, motion graphics and UI that pop on every screen. Zero boring templates, all main character visuals.',
    image: design
  },
  {
    id: 6,
    title: 'Website Development',
    description: 'Fast, mobile-first websites, landing pages and e-commerce builds that turn visitors into leads. Clean code, cleaner conversions.',
    image: webDev
  },
  {
    id: 7,
    title: 'SEO & Search',
    description: 'Get found when it matters. Keyword strategy, technical SEO and search marketing that gets you to page one and keeps you there.',
    image: seo
  },
  {
    id: 8,
    title: 'Marketing Technologies',
    description: 'CRM setup, lead-routing automation, conversion tracking and live dashboards. The behind-the-scenes tech that makes growth repeatable.',
    image: marketingTech
  },
  {
    id: 9,
    title: 'Onsite Event Support',
    description: 'Live coverage, content capture and digital activations at launches, conferences and brand events. If it happens, it gets posted.',
    image: onsiteEvent
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
            <span className="dot"></span> What We Do
          </div>
          <h2 className="industries-title">
            From Unknown to Unforgettable
          </h2>
          <p className="process-subtitle">
            Content, ads, tech and tools under one roof. Pick one, or let us run the whole playbook.
          </p>
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
