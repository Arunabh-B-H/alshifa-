import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  ShieldCheck,
  Calendar,
  Phone,
  MessageCircle,
  Quote,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  ExternalLink,
  X
} from 'lucide-react';
import './Founder.css';

export default function Founder() {
  const [showBoardModal, setShowBoardModal] = useState(false);

  const clinicalHighlights = [
    {
      title: "Comprehensive Family Healthcare",
      desc: "Diagnosis and evidence-based treatment for pediatric, adult, and geriatric conditions, routine health check-ups, and chronic disease management."
    },
    {
      title: "Managing Director & Clinical Leadership",
      desc: "Championing round-the-clock emergency casualty readiness, fully digitized pathology services, and affordable medical access across Pallickal."
    },
    {
      title: "Community-First Practice",
      desc: "Dedicated to holistic well-being, preventive medicine, and establishing trusted, patient-centric relationships across generations."
    }
  ];

  const handleBookWithDoctor = () => {
    window.dispatchEvent(
      new CustomEvent('open-alshifa-chat', {
        detail: { department: 'Dr. Kanza Beegum (Family Physician)' }
      })
    );
  };

  return (
    <section id="founder" className="section founder-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          className="founder-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="tagline-pill">
            <Stethoscope size={15} className="tagline-icon" />
            <span>Leadership & Clinical Direction</span>
          </div>
          <h2 className="section-title">Meet Our Founder</h2>
          <p className="section-subtitle">
            Guiding Al Shifa Medical Center with deep medical expertise, clinical integrity,
            and compassionate care for every family in Pallickal.
          </p>
        </motion.div>

        {/* 2-Column Founder Showcase */}
        <div className="founder-grid">
          
          {/* Left Column: Doctor Portrait & Designation Card */}
          <motion.div
            className="founder-visual-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Portrait Frame */}
            <div className="founder-portrait-card">
              <div className="portrait-glow-ring"></div>
              
              <div className="portrait-image-wrapper">
                <img
                  src="/images/dr_kanza_beegum.png"
                  alt="Dr. Kanza Beegum - Family Physician & Managing Director"
                  className="founder-main-photo"
                />
                
                {/* Verified Medical Badge */}
                <div className="portrait-badge">
                  <ShieldCheck size={16} className="badge-shield-icon" />
                  <span>Licensed Medical Practitioner</span>
                </div>
              </div>

              {/* Official Designation Board (Derived from Photo 2) */}
              <div className="designation-board">
                <div className="board-header">
                  <HeartPulse size={20} className="board-cross-icon" />
                  <h3 className="board-doctor-name">DR. KANZA BEEGUM</h3>
                </div>
                
                <div className="board-roles">
                  <span className="role-pill primary-role">FAMILY PHYSICIAN</span>
                  <span className="role-pill secondary-role">MANAGING DIRECTOR</span>
                </div>

                <div className="board-footer">
                  <span className="board-institution">AL SHIFA MEDICAL CENTER</span>
                  <span className="board-location">Pallickal, Kerala</span>
                </div>

                {/* View Original Clinic Board Photo Button */}
                <button
                  type="button"
                  onClick={() => setShowBoardModal(true)}
                  className="board-view-photo-btn"
                  aria-label="View official clinic designation board"
                >
                  <img
                    src="/images/dr_kanza_beegum_designation.png"
                    alt="Official Designation Signboard"
                    className="board-thumb-mini"
                  />
                  <span>View Official Clinic Signboard</span>
                  <ExternalLink size={13} className="thumb-arrow-icon" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Philosophy, Background & Quick Actions */}
          <motion.div
            className="founder-content-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Quote Card */}
            <div className="founder-quote-box">
              <Quote size={32} className="quote-watermark" />
              <p className="quote-text">
                "Healthcare is not just about prescribing medicine; it is about listening
                with empathy, understanding our patients' lived experiences, and treating every
                family with dignity. At Al Shifa, we strive to make world-class healthcare
                humble, humane, and accessible to everyone in our community."
              </p>
              <div className="quote-signoff">
                <strong className="signoff-name">— Dr. Kanza Beegum</strong>
                <span className="signoff-title">Family Physician & Managing Director, Al Shifa</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="clinical-highlights-list">
              {clinicalHighlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <div className="highlight-icon-wrap">
                    <CheckCircle2 size={18} className="check-gold-icon" />
                  </div>
                  <div className="highlight-text-wrap">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons */}
            <div className="founder-cta-group">
              <button
                onClick={handleBookWithDoctor}
                className="btn btn-primary founder-btn"
                title="Book Consultation with Dr. Kanza Beegum"
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </button>

              <a
                href="https://wa.me/918714311881?text=Hello%20Dr.%20Kanza%20Beegum,%20I%20would%20like%20to%20consult%20at%20Al%20Shifa%20Medical%20Center."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-founder"
                title="WhatsApp Direct Consultation"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:08714311881"
                className="btn-call-founder"
                title="Call Al Shifa: 087143 11881"
              >
                <Phone size={17} />
                <span>087143 11881</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Official Signboard Lightbox Modal */}
      <AnimatePresence>
        {showBoardModal && (
          <motion.div
            className="board-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBoardModal(false)}
          >
            <motion.div
              className="board-modal-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="board-modal-header">
                <div className="modal-title-wrap">
                  <ShieldCheck size={18} className="text-secondary" />
                  <h4>Official Clinic Signboard</h4>
                </div>
                <button
                  onClick={() => setShowBoardModal(false)}
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="board-modal-image-wrap">
                <img
                  src="/images/dr_kanza_beegum_designation.png"
                  alt="Dr. Kanza Beegum - Family Physician, Managing Director, Al Shifa Medical Center"
                  className="board-modal-img"
                />
              </div>

              <div className="board-modal-footer">
                <p>Verified Designation Board • Al Shifa Medical Center, Pallickal</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
