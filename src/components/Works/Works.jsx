import { useState, useEffect, useRef } from 'react';
import './Works.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, SlidersHorizontal, Check } from 'lucide-react';
import i1 from "../../assets/images/works/1.jpg";
import i2 from "../../assets/images/works/1.png";
import i3 from "../../assets/images/works/2.jpg";
import i4 from "../../assets/images/works/2.png";
import i5 from "../../assets/images/works/3.jpg";
import i6 from "../../assets/images/works/3.png";
import i7 from "../../assets/images/works/4.jpg";
import i8 from "../../assets/images/works/4.png";
import i9 from "../../assets/images/works/5.jpg";
import i10 from "../../assets/images/works/6.jpg";
import i11 from "../../assets/images/works/6.png";
import i12 from "../../assets/images/works/7.jpg";

import i13 from "../../assets/images/works/7.png";
import i14 from "../../assets/images/works/8.jpg";
import i15 from "../../assets/images/works/9.jpg";
import i16 from "../../assets/images/works/11.jpg";
import i17 from "../../assets/images/works/12.jpg";
import i18 from "../../assets/images/works/13.jpg";
import i19 from "../../assets/images/works/14.jpg";
import i20 from "../../assets/images/works/15.jpg";
import i21 from "../../assets/images/works/16.jpg";
import i22 from "../../assets/images/works/17.jpg";
import i23 from "../../assets/images/works/18.jpg";

import i24 from "../../assets/images/works/19.jpg";
import i25 from "../../assets/images/works/20.jpg";
import i26 from "../../assets/images/works/21.jpg";
import i27 from "../../assets/images/works/22.jpg";
import i28 from "../../assets/images/works/23.jpg";
import i29 from "../../assets/images/works/24.jpg";
import i30 from "../../assets/images/works/25.jpg";
import i31 from "../../assets/images/works/26.jpg";
import i32 from "../../assets/images/works/27.jpg";
import i33 from "../../assets/images/works/28.jpg";
import i34 from "../../assets/images/works/29.jpg";
import i35 from "../../assets/images/works/30.jpg";
import i36 from "../../assets/images/works/31.jpg";

const row1 = [
  {
    image: i1,
  },
  {
    image: i2,
  },
  {
    image: i3
  },
  {
    image: i4,
  },
  {
    image: i5,
  },
  {
    image: i6,
  },
  {
    image: i7
  },
  {
    image: i8,
  },
  {
    image: i9,
  },
  {
    image: i10,
  },
  {
    image: i11
  },
  {
    image: i12,
  }
];

const row2 = [
  {
    image: i13,
  },
  {
    image: i14,
  },
  {
    image: i15
  },
  {
    image: i16,
  },
  {
    image: i17,
  },
  {
    image: i18,
  },
  {
    image: i19
  },
  {
    image: i20,
  },
  {
    image: i21,
  },
  {
    image: i22,
  },
  {
    image: i23
  },
  {
    image: i24,
  }
];

const row3 = [
  {
    image: i25,
  },
  {
    image: i26,
  },
  {
    image: i27
  },
  {
    image: i28,
  },
  {
    image: i29,
  },
  {
    image: i30,
  },
  {
    image: i31
  },
  {
    image: i32,
  },
  {
    image: i33,
  },
  {
    image: i34,
  },
  {
    image: i35
  },
  {
    image: i36,
  }
];

// Unified list for mobile carousel
const allWorks = [...row1, ...row2, ...row3];

const Works = ({
  showControlsInitial = true,
  showIndicatorsInitial = false,
  autoScrollInterval = 3200
}) => {
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(showControlsInitial);
  const [showIndicators, setShowIndicators] = useState(false);
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
                  <img src={item.image} className="card-thumb" />
                  {/* <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee-row marquee-row-2">
            <div className="marquee-track scroll-right">
              {[...row2, ...row2].map((item, idx) => (
                <div className="work-card" key={`r2-${idx}`}>
                  <img src={item.image} className="card-thumb" />
                  {/* <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left to Right */}
          <div className="marquee-row marquee-row-3">
            <div className="marquee-track scroll-left">
              {[...row3, ...row3].map((item, idx) => (
                <div className="work-card" key={`r3-${idx}`}>
                  <img src={item.image} className="card-thumb" />
                  {/* <div className="card-overlay">
                    <span className="card-tag">{item.tag}</span>
                    <h4 className="card-name">{item.title}</h4>
                  </div> */}
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
