import './Process.scss';
import { motion } from 'framer-motion';

const processSteps = [
  {
    id: 1,
    title: 'Ideate',
    description: 'We deep-dive your brand, your audience and your competitors, then map out the angles that will make people stop scrolling.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C21.657 34 23 32.657 23 31C23 30.204 22.684 29.48 22.172 28.948C21.668 28.424 21.35 27.72 21.35 26.944C21.35 25.318 22.668 24 24.294 24H27C31.418 24 35 20.418 35 16C35 10.477 28.284 6 20 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="13" cy="16" r="2" fill="white" />
        <circle cx="18" cy="12" r="2" fill="white" />
        <circle cx="25" cy="13" r="2" fill="white" />
        <path d="M24 32L33 23" stroke="#CC3D00" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M31 21L34 24L36 22L33 19L31 21Z" fill="#CC3D00"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Create',
    description: `Our creators, designers and videographers cook up content made for the feed and tuned to your audience's vibe.`,
    icon: (
      <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 9.5 10 20 10C30.5 10 36 20 36 20C36 20 30.5 30 20 30C9.5 30 4 20 4 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="5.5" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="20" r="2.5" fill="#CC3D00"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Launch & Boost',
    description: "We post, promote and put budget behind what's working, tracking every click, lead and view in real time.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="15" width="10" height="15" rx="5" stroke="white" strokeWidth="2"/>
        <rect x="23" y="15" width="10" height="15" rx="5" stroke="white" strokeWidth="2"/>
        <path d="M17 19H23" stroke="white" strokeWidth="2"/>
        <path d="M17 24H23" stroke="white" strokeWidth="2"/>
        <path d="M30 6L31 9.5L34.5 10.5L31 11.5L30 15L29 11.5L25.5 10.5L29 9.5L30 6Z" fill="#CC3D00"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Scale',
    description: `We double down on the winners, cut what's not landing, and report it back in plain language. Then we run it back, bigger.`,
    icon: (
      <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="9" width="28" height="18" rx="3" stroke="white" strokeWidth="2"/>
        <path d="M3 31H37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="18" y="27" width="4" height="4" fill="white"/>
        <rect x="19" y="13" width="9" height="8" rx="1.5" stroke="#CC3D00" strokeWidth="1.5"/>
        <path d="M21 17L23 19L26 15" stroke="#CC3D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="process-card-frame">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="process-badge">
            <span className="dot"></span> How We Work
          </div>
          <h2 className="process-title">
            The Glow-Up Playbook
          </h2>
          <p className="process-subtitle">
            Four steps. Zero guesswork. Built to take your brand from quiet to everywhere.
          </p>
        </motion.div>

        <motion.div 
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step) => (
            <motion.div key={step.id} className="process-item" variants={itemVariants}>
              <div className="item-icon">
                {step.icon}
              </div>
              <h3 className="item-title">{step.title}</h3>
              <p className="item-desc">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
