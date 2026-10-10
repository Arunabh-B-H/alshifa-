import React from 'react';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">

        <div className="footer-col brand-col">
          <a href="#home" className="logo footer-logo">
            <HeartPulse className="logo-icon white" size={32} />
            <span className="logo-text text-white">Al Shifa <span className="logo-accent text-gray">Medical Center</span></span>
          </a>
          <p className="footer-desc">
            Providing compassionate, world-class healthcare to the Pallickal community. Your health is our priority.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#founder">Founder</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#find-us">Find Us</a></li>
            <li>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-alshifa-chat'));
                }}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Departments</h4>
          <ul className="footer-links">
            <li><a href="#services">Cardiology</a></li>
            <li><a href="#services">Neurology</a></li>
            <li><a href="#services">Orthopedics</a></li>
            <li><a href="#services">Pediatrics</a></li>
            <li><a href="#services">Laboratory</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin className="contact-icon" size={20} />
              <a
                href="https://www.google.com/maps/dir//Al+Shifa+Medical+Center,+RRF4%2B2V8,+Pallickal,+Keralam+695604/@8.8113588,76.8144292,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3b05e7b52407b4b7:0x836502d9194f348a!2m2!1d76.8072153!2d8.8225483?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="hover-underline"
              >
                Al Shifa Medical Center, RRF4+2V8, Pallickal, Keralam 695604
              </a>
            </li>
            <li>
              <Phone className="contact-icon" size={20} />
              <a href="tel:08714311881">087143 11881 (24/7 Helpline)</a>
            </li>
            <li>
              <Mail className="contact-icon" size={20} />
              <a href="mailto:info@alshifapallickal.com">info@alshifapallickal.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Al Shifa Medical Center Pallickal. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
