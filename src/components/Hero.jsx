import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">Welcome to Al Shifa Medical Center</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Compassionate Care for a Healthier <span className="text-highlight">Pallickal</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience world-class healthcare with empathy. Our dedicated professionals provide comprehensive medical services tailored to your well-being.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#appointment" 
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-alshifa-chat'));
              }}
            >
              <Calendar size={20} />
              Book Appointment
            </a>
            <a href="#services" className="btn btn-secondary btn-lg btn-icon-hover">
              Our Services
              <ArrowRight size={20} className="icon-anim" />
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Emergency Care</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Specialist Doctors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Using a placeholder aesthetic that feels clinical and modern */}
          <div className="image-decoration doc-card">
            <div className="doc-avatar"></div>
            <div className="doc-info">
              <p className="doc-name">Dr. Kanza Beegum</p>
              <p className="doc-spec">Family Physician & Managing Director</p>
            </div>
          </div>
          <div className="hero-image-backdrop"></div>
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000"
            alt="Modern Hospital Setting"
            className="hero-main-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
