import { useState } from 'react';
import './FAQ.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is Framer?',
    answer: 'Framer is a modern visual web design and publishing platform that allows us to create fast, beautifully animated, and responsive digital experiences without compromising on code quality or speed.'
  },
  {
    id: 2,
    question: 'How do you tailor marketing strategies for our brand?',
    answer: 'We begin with thorough research into your competitive landscape, target audience behaviors, and past campaign performance. From there, we architect customized growth funnels across paid, organic, and creative channels.'
  },
  {
    id: 3,
    question: 'What is the typical timeline to see measurable results?',
    answer: 'Paid advertising and conversion optimization often generate measurable traction within 2 to 4 weeks, while search visibility, brand positioning, and content strategies typically compound strongly over 3 to 6 months.'
  },
  {
    id: 4,
    question: 'What core services does Aspirant Ideas offer?',
    answer: 'Our full-suite expertise covers Brand & Marketing Strategy, High-End Creatives, Web Design & Development, SEO & Performance Marketing (SEM), and Professional Photography & Videography.'
  },
  {
    id: 5,
    question: 'Can your team collaborate with our in-house marketers?',
    answer: 'Yes! We frequently operate as a strategic extension of existing in-house teams, augmenting your creative bandwidth, media buying, and analytics capabilities with transparent weekly reporting.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (id) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">
            Frequently Asked<br />
            <em>Questions?</em>
          </h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <motion.div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <motion.div 
                    className="faq-icon-wrapper"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq-answer-text">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
