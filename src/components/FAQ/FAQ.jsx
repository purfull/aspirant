import { useState } from 'react';
import './FAQ.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Where are you based, and do you work outside Botswana?',
    answer: 'HQ is in Gaborone, Botswana, with active clients across Southern Africa and India. Wherever your customers are scrolling, we can reach them.'
  },
  {
    id: 2,
    question: 'Are you only for big corporates?',
    answer: `Nope. We work with startups, SMEs and corporates. We size the plan to your goals and your budget, so you never pay for stuff you don't need.`
  },
  {
    id: 3,
    question: 'What does working with you look like?',
    answer: 'Discovery call, tailored game plan, agreed scope, then we get to work. Expect regular check-ins and reports that actually make sense.'
  },
  {
    id: 4,
    question: 'How fast will I see results?',
    answer: 'Paid campaigns can start delivering within days. SEO, content and brand building usually hit their stride within 3 to 6 months of consistent posting. Good things compound.'
  },
  {
    id: 5,
    question: 'Can you run our whole digital game?',
    answer: '100%. Plenty of clients treat us as their full digital team, from content and ads to web and reporting. Others bring us in for one campaign. Both work.'
  },
  {
    id: 6,
    question: 'How do we get started?',
    answer: `Hit the button below or email marketing@aspirantideas.com. We'll set up a quick call and map out your next big move.`
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
