import React from 'react';
import './Benefits.scss';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Heart, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import defaultTempImage from '../../assets/hero.png';

/**
 * Benefits Section
 * Two-column responsive layout matching Aspirant's design system:
 * - Left: Visual container / Temporary mockup card (user can easily replace with their custom image)
 * - Right: Badge, Title, Subtitle, Key Value Pillars, and Primary CTA
 */
const Benefits = ({
  customImage = null, // Set to your custom image URL/import when ready
  onCtaClick
}) => {
  const leadList = [
    {
      id: 1,
      name: 'Devon Lane',
      role: 'Growth Lead, FinTech',
      status: 'Qualified Lead',
      metric: '+48% Conv.',
      avatarBg: 'linear-gradient(135deg, #FF4C00, #ff8c42)',
      initials: 'DL'
    },
    {
      id: 2,
      name: 'Esther Howard',
      role: 'Head of Marketing',
      status: 'Booked 30m Call',
      metric: 'Closed $12k',
      avatarBg: 'linear-gradient(135deg, #ff7033, #45261D)',
      initials: 'EH'
    },
    {
      id: 3,
      name: 'Cameron Williamson',
      role: 'Founder & CEO',
      status: 'Inbound Inquirer',
      metric: 'High Intent',
      avatarBg: 'linear-gradient(135deg, #332219, #FF4C00)',
      initials: 'CW'
    }
  ];

  const valuePillars = [
    {
      id: 1,
      icon: <Target className="pillar-icon" size={20} />,
      title: 'Precision Audience Targeting',
      desc: 'Zero ad-spend waste. We map your ideal customer profile and place your message in front of active buyers.'
    },
    {
      id: 2,
      icon: <Zap className="pillar-icon" size={20} />,
      title: 'High-Converting Funnels',
      desc: 'Mobile-first, psychological landing experiences engineered to turn casual scrollers into scheduled discovery calls.'
    },
    {
      id: 3,
      icon: <TrendingUp className="pillar-icon" size={20} />,
      title: 'Automated Lead Routing & CRM',
      desc: 'Instant lead handoff and multi-channel follow-up sequences so inquiries never slip through the cracks.'
    },
    {
      id: 4,
      icon: <ShieldCheck className="pillar-icon" size={20} />,
      title: 'Transparent ROI & Attribution',
      desc: 'Live reporting dashboards tracking every lead, customer acquisition cost, and revenue dollar with receipts.'
    }
  ];

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="benefits" id="benefits">
      {/* Anchor helper in case old link used '#penefits' */}
      <span id="penefits" style={{ position: 'absolute', top: '-80px', visibility: 'hidden' }} />

      <div className="benefits-container">
        {/* Left Column: Visual container / Temporary Mockup Card */}
        <motion.div 
          className="benefits-visual-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="benefits-card-frame">
            {/* Ambient orange glow aura behind card */}
            <div className="card-ambient-glow" aria-hidden="true" />

            {/* If user supplies a custom image, display it directly */}
            {customImage ? (
              <div className="custom-image-wrapper">
                <img 
                  src={customImage} 
                  alt="Feature showcase" 
                  className="custom-display-image"
                />
              </div>
            ) : (
              /* Temporary Interactive Mockup with Leads list, stats, and badges */
              <div className="temp-mockup-container">
                {/* Background decorative watermark image */}
                <div className="mockup-bg-watermark">
                  <img src={defaultTempImage} alt="Preview background" className="watermark-img" />
                  <div className="mockup-overlay-gradient" />
                </div>

                {/* Floating Top Metric Pill */}
                <motion.div 
                  className="floating-metric-pill"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="metric-icon-wrap">
                    <Sparkles size={14} className="sparkle-icon" />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Pipeline Velocity</span>
                    <span className="metric-val">+340% MoM Growth</span>
                  </div>
                </motion.div>

                {/* Main UI Card: Latest Leads */}
                <div className="leads-showcase-card">
                  <div className="leads-card-header">
                    <div className="header-left">
                      <span className="live-status-dot" />
                      <h4 className="leads-card-title">Latest Leads</h4>
                    </div>
                    <span className="leads-badge-counter">3 New</span>
                  </div>

                  <div className="leads-card-list">
                    {leadList.map((lead) => (
                      <div key={lead.id} className="lead-item-row">
                        <div 
                          className="lead-avatar"
                          style={{ background: lead.avatarBg }}
                        >
                          <span className="avatar-text">{lead.initials}</span>
                          <span className="online-indicator" />
                        </div>

                        <div className="lead-details">
                          <div className="lead-name-row">
                            <span className="lead-name">{lead.name}</span>
                            <span className="lead-metric-tag">{lead.metric}</span>
                          </div>
                          <span className="lead-role">{lead.role}</span>
                        </div>

                        <div className="lead-status-pill">
                          <CheckCircle2 size={13} className="check-icon" />
                          <span>{lead.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer with Doodle Badge */}
                  <div className="leads-card-footer">
                    <div className="footer-avatar-stack">
                      <div className="stack-avatar a1">JD</div>
                      <div className="stack-avatar a2">SK</div>
                      <div className="stack-avatar a3">AL</div>
                      <span className="stack-count">+48 more</span>
                    </div>
                    <div className="doodle-heart-wrap">
                      <Heart size={14} className="heart-doodle" />
                      <span className="doodle-text">Loved by Founders</span>
                    </div>
                  </div>
                </div>

                {/* Circular ring accent badge */}
                <div className="floating-circle-ring" aria-hidden="true">
                  <div className="ring-pulse" />
                  <Users size={16} className="ring-icon" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Column: Content, Typography, Value Pillars, CTA */}
        <motion.div 
          className="benefits-content-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Badge */}
          <div className="benefits-badge">
            <span className="dot"></span> Why Choose Aspirant
          </div>

          {/* Section Title */}
          <h2 className="benefits-title">
            Predictable Growth.<br />
            <em>Real Pipeline Impact.</em>
          </h2>

          {/* Subtitle */}
          <p className="benefits-subtitle">
            We don't do vanity metrics or fluff. We engineer full-funnel customer acquisition systems combining high-converting creative with surgical ad targeting to turn every interaction into measurable business growth.
          </p>

          {/* Value Pillars / Feature Grid */}
          <div className="benefits-pillars-grid">
            {valuePillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-heading">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="benefits-action-row">
            <Button variant="primary" onClick={handleCta}>
              Book a 30 mins Call
            </Button>
            <span className="benefits-note">
              No pressure. Just actionable strategy tailored to your brand.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
