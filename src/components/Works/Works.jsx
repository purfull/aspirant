import { useState, useEffect, useRef } from 'react';
import './Works.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, SlidersHorizontal, Check } from 'lucide-react';

const row1 = [
  {
    id: 'w1',
    title: 'Listing Images Optimization',
    category: 'E-Commerce & Amazon',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    tag: 'Listing Images'
  },
  {
    id: 'w2',
    title: 'Summer Lifestyle Campaign',
    category: 'Brand Shoot',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    tag: 'Campaign'
  },
  {
    id: 'w3',
    title: 'Urban Billboard Takeover',
    category: 'Out of Home Media',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    tag: 'Billboard'
  },
  {
    id: 'w4',
    title: 'Fintech Dashboard & Mobile App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    tag: 'App UI'
  }
];

const row2 = [
  {
    id: 'w5',
    title: 'Kratos Monolith Identity',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    tag: 'Branding'
  },
  {
    id: 'w6',
    title: 'Magazine Editorial & Poster',
    category: 'Print & Creatives',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    tag: 'Editorial'
  },
  {
    id: 'w7',
    title: 'Health & Analytics Mobile Platform',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80',
    tag: 'SaaS UI'
  },
  {
    id: 'w8',
    title: 'Minimalist Architecture Agency',
    category: 'Web Experience',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    tag: 'Web Design'
  }
];

const row3 = [
  {
    id: 'w9',
    title: 'Dark Mode Digital SaaS Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    tag: 'Web Platform'
  },
  {
    id: 'w10',
    title: 'Conversion-Focused Product Showcase',
    category: 'Listing Images',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80',
    tag: 'Listing Images'
  },
  {
    id: 'w11',
    title: 'Luxury Fashion & Logo Design',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    tag: 'Logo Design'
  },
  {
    id: 'w12',
    title: 'Studio Commercial Photography',
    category: 'Media Production',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80',
    tag: 'Studio Shoot'
  }
];

// Unified list for mobile carousel
const allWorks = [...row1, ...row2, ...row3];

const Works = ({
  showControlsInitial = true,
  showIndicatorsInitial = true,
  autoScrollInterval = 3200
}) => {
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(showControlsInitial);
  const [showIndicators, setShowIndicators] = useState(showIndicatorsInitial);
  const [showSettings, setShowSettings] = useState(false);

  const timerRef = useRef(null);

  // Auto-scroll loop on mobile
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allWorks.length);
    }, autoScrollInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoScrollInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allWorks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allWorks.length) % allWorks.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section className="works" id="works">
      <div className="works-header">
        <motion.div 
          className="works-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="dot"></span> Our Works
        </motion.div>

        <motion.h2 
          className="works-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Turning Vision Into<br />
          <em>Digital Reality</em>
        </motion.h2>
      </div>

      {/* DESKTOP INFINITE SCROLL SECTION */}
      <div className="works-desktop-marquee">
        <div className="marquee-perspective-wrapper">
          {/* Row 1 - Left to Right */}
          <div className="marquee-row marquee-row-1">
            <div className="marquee-track scroll-left">
              {[...row1, ...row1].map((item, idx) => (
                <div className="work-card" key={`r1-${idx}`}>
                  <img src={item.image} alt={item.title} className="card-thumb" />
                  <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee-row marquee-row-2">
            <div className="marquee-track scroll-right">
              {[...row2, ...row2].map((item, idx) => (
                <div className="work-card" key={`r2-${idx}`}>
                  <img src={item.image} alt={item.title} className="card-thumb" />
                  <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left to Right */}
          <div className="marquee-row marquee-row-3">
            <div className="marquee-track scroll-left">
              {[...row3, ...row3].map((item, idx) => (
                <div className="work-card" key={`r3-${idx}`}>
                  <img src={item.image} alt={item.title} className="card-thumb" />
                  <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE AUTO-SCROLL CAROUSEL SECTION */}
      <div 
        className="works-mobile-carousel"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Toggle options bar for controllers & indicators */}
        <div className="mobile-carousel-options-bar">
          <button 
            className={`options-toggle-btn ${showSettings ? 'active' : ''}`}
            onClick={() => setShowSettings(!showSettings)}
            aria-label="Carousel settings"
          >
            <SlidersHorizontal size={14} />
            <span>Display Options</span>
          </button>

          <AnimatePresence>
            {showSettings && (
              <motion.div 
                className="options-popup"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <button 
                  className={`option-chip ${showControls ? 'selected' : ''}`}
                  onClick={() => setShowControls(!showControls)}
                >
                  <span className="checkbox">{showControls && <Check size={12} />}</span>
                  Show Controls
                </button>
                <button 
                  className={`option-chip ${showIndicators ? 'selected' : ''}`}
                  onClick={() => setShowIndicators(!showIndicators)}
                >
                  <span className="checkbox">{showIndicators && <Check size={12} />}</span>
                  Show Indicators
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Slide Area */}
        <div className="carousel-track-wrapper">
          <motion.div 
            className="carousel-card-container"
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0.6, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="mobile-work-card">
              <img 
                src={allWorks[currentIndex].image} 
                alt={allWorks[currentIndex].title} 
                className="mobile-card-img"
              />
              <div className="mobile-card-overlay">
                <span className="mobile-card-tag">{allWorks[currentIndex].tag}</span>
                <h3 className="mobile-card-title">{allWorks[currentIndex].title}</h3>
                <span className="mobile-card-cat">{allWorks[currentIndex].category}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional Carousel Controls (prev/next) */}
        {showControls && (
          <div className="carousel-controls">
            <button 
              className="carousel-control-btn prev"
              onClick={handlePrev}
              aria-label="Previous work"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="carousel-control-btn next"
              onClick={handleNext}
              aria-label="Next work"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Optional Carousel Indicators (dots) */}
        {showIndicators && (
          <div className="carousel-indicators">
            {allWorks.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`indicator-dot ${dotIdx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
