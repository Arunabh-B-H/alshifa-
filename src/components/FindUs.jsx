import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Car,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import './FindUs.css';

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir//Al+Shifa+Medical+Center,+RRF4%2B2V8,+Pallickal,+Keralam+695604/@8.8113588,76.8144292,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3b05e7b52407b4b7:0x836502d9194f348a!2m2!1d76.8072153!2d8.8225483?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D";

export const CLINIC_ADDRESS =
  "Al Shifa Medical Center, RRF4+2V8, Pallickal, Keralam 695604";

export const CLINIC_PHONE = "087143 11881";
export const CLINIC_HELPLINE = "087143 11881";
export const WHATSAPP_NUMBER = "918714311881";

export default function FindUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const facilities = [
    { icon: Car, text: "Free Patient & Visitor Parking" },
    { icon: ShieldCheck, text: "24/7 Dedicated Ambulance Bay" },
    { icon: Clock, text: "Emergency Casualty Open 24 Hours" }
  ];

  return (
    <section id="find-us" className="section find-us-section">
      <div className="container find-us-container">
        
        {/* Left Side: Hospital Details & Quick Contact */}
        <motion.div
          className="find-us-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="tagline-pill">
            <Compass size={15} className="tagline-icon" />
            <span>Find Us in Pallickal</span>
          </div>

          <h2 className="find-us-title">
            Compassionate Care, <br />
            <span className="text-highlight">Right in Your Neighborhood</span>
          </h2>

          <p className="find-us-desc">
            Al Shifa Medical Center is conveniently located on Main Road, Pallickal.
            Whether you need urgent emergency care, routine doctor consultations, or
            diagnostic lab tests, our doors are open with world-class facilities.
          </p>

          {/* Address Box */}
          <div className="address-card">
            <div className="address-icon-box">
              <MapPin size={22} className="address-pin-icon" />
            </div>
            <div className="address-text-group">
              <h4 className="address-heading">Al Shifa Medical Center</h4>
              <p className="address-body">{CLINIC_ADDRESS}</p>
            </div>
            <button
              onClick={handleCopyAddress}
              className="copy-btn"
              title="Copy Address"
              aria-label="Copy Address to clipboard"
            >
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span className="copy-btn-text">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Operating Hours / Emergency Status */}
          <div className="hours-grid">
            <div className="hours-item">
              <span className="hours-label">Emergency & Casualty</span>
              <span className="hours-value status-247">
                <span className="live-dot-pulse"></span>
                24/7 Open Round the Clock
              </span>
            </div>
            <div className="hours-item">
              <span className="hours-label">OPD Consultations</span>
              <span className="hours-value">Mon – Sat: 8:00 AM – 8:30 PM</span>
            </div>
          </div>

          {/* Action Buttons: Call & WhatsApp */}
          <div className="find-us-actions">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="btn btn-primary find-us-btn"
              aria-label="Call Al Shifa Medical Center"
            >
              <Phone size={18} />
              <span>Call Helpline</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Namaskaram Al Shifa Medical Center! I would like to enquire about doctor consultation & location."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-action"
              aria-label="Chat with Al Shifa Reception on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                className="wa-svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29z" />
              </svg>
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Facilities Checklist */}
          <div className="facilities-row">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              return (
                <div key={i} className="facility-pill">
                  <Icon size={15} className="facility-icon" />
                  <span>{fac.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Small Card of Google Map with Animation & Redirection */}
        <motion.div
          className="find-us-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="map-card">
            
            {/* Map Header Pill Banner */}
            <div className="map-card-header">
              <div className="map-header-left">
                <div className="map-live-badge">
                  <span className="live-dot"></span>
                  <span className="live-badge-text">Find Us • Google Maps</span>
                </div>
              </div>
              <span className="map-coords-badge">RRF4+2V8 Pallickal</span>
            </div>

            {/* Embedded Interactive Map Container */}
            <div className="map-embed-wrapper">
              <iframe
                title="Google Maps Location - Al Shifa Medical Center Pallickal"
                src="https://maps.google.com/maps?q=8.8225483,76.8072153+(Al+Shifa+Medical+Center+Pallickal)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>

              {/* Animated Glowing Pulse Marker Accent in Center */}
              <div className="map-animated-radar-pin">
                <div className="radar-ping-ring"></div>
                <div className="radar-pin-dot">
                  <MapPin size={16} className="radar-pin-symbol" />
                </div>
              </div>

              {/* Floating Bottom Navigation Card */}
              <div className="map-action-overlay">
                <div className="overlay-info">
                  <span className="overlay-title">Al Shifa Medical Center</span>
                  <span className="overlay-sub">Main Road, Pallickal</span>
                </div>
                
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-get-directions"
                  aria-label="Open Directions in Google Maps"
                >
                  <Navigation size={16} className="nav-arrow-icon" />
                  <span>Get Directions</span>
                  <ExternalLink size={13} className="ext-icon" />
                </a>
              </div>
            </div>

            {/* Bottom Quick Directions Link Bar */}
            <div className="map-card-footer">
              <span className="footer-tip">
                Tap to launch real-time GPS navigation on Google Maps
              </span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <span>Open Maps</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
