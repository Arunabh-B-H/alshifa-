import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Baby, Brain, Bone, ArrowRight, Stethoscope, Microscope } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art diagnostic and treatment facilities.',
    icon: <HeartPulse className="service-icon" size={32} />,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    title: 'Pediatrics',
    description: 'Compassionate care for infants, children, and adolescents focusing on growth and wellness.',
    icon: <Baby className="service-icon" size={32} />,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    id: 3,
    title: 'Neurology',
    description: 'Comprehensive evaluation and treatment for disorders of the nervous system.',
    icon: <Brain className="service-icon" size={32} />,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 4,
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.',
    icon: <Bone className="service-icon" size={32} />,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 5,
    title: 'General Surgery',
    description: 'Expert surgical interventions using the latest minimally invasive techniques.',
    icon: <Stethoscope className="service-icon" size={32} />,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    id: 6,
    title: 'Laboratory',
    description: '24/7 fully equipped diagnostic laboratory for accurate and timely results.',
    icon: <Microscope className="service-icon" size={32} />,
    color: 'bg-purple-50 text-purple-600',
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="section bg-color">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Medical Specialties</h2>
          <p className="section-subtitle">
            Providing a wide range of dedicated services ensuring comprehensive healthcare for the Pallickal community.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className={`icon-wrapper ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a 
                href="#appointment" 
                className="service-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-alshifa-chat', { detail: { department: service.title } }));
                }}
              >
                Book Consultation <ArrowRight size={16} className="link-icon" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
