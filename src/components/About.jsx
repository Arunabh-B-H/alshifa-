import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const points = [
    "Over 15 years of trusted healthcare in Pallickal",
    "Award-winning patient care and safety protocols",
    "Modern infrastructure and advanced technology",
    "Dedicated team of experienced medical professionals"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container about-container">
        
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-shape"></div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
            alt="Hospital Exterior and Doctors" 
            className="about-image"
          />
          <div className="experience-badge bounce">
            <span className="exp-number">15+</span>
            <span className="exp-text">Years of<br/>Experience</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="section-tagline">About Al Shifa</h4>
          <h2 className="section-title text-left">Healing with Heart, Treating with Technology</h2>
          <p className="about-description">
            At Al Shifa Medical Center, our philosophy is simple: put the patient first. We understand that visiting a hospital can be stressful, which is why we've designed our facilities and trained our staff to provide a calming, supportive, and highly efficient healthcare experience right here in Pallickal.
          </p>
          
          <ul className="about-points">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="about-point"
              >
                <CheckCircle2 className="check-icon" size={20} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary mt-8">
            Learn More About Us
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
