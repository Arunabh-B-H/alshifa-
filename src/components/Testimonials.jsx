import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

// Authentic Google Multi-Color Logo Icon
export const GoogleIcon = ({ size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className="google-svg-icon"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=al+shifa+medical+center+reviews+pallickal#lrd=0x3b05e7b52407b4b7:0x836502d9194f348a,1,,,,";

const googleReviewsData = [
  {
    id: 1,
    name: "BIDINSAN S D",
    isLocalGuide: true,
    badge: "Local Guide · 118 reviews · 642 photos",
    profileUrl: "https://www.google.com/maps/contrib/104114554519783433983/reviews?hl=en-IN",
    date: "2 months ago",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #4285F4 0%, #1A73E8 100%)",
    content:
      "Easy accessibility is a major plus point of this medical centre. Sufficient staff are always available, and the level of care shown to patients is really commendable. The atmosphere is pleasant, with a clean and well-maintained space."
  },
  {
    id: 2,
    name: "RITHA",
    isLocalGuide: true,
    badge: "Local Guide · 89 reviews · 426 photos",
    profileUrl: "https://www.google.com/maps/contrib/116272204975444683435/reviews?hl=en-IN",
    date: "1 year ago (Edited)",
    rating: 5,
    reaction: "❤️🙏 9 helpful",
    avatarBg: "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)",
    content:
      "The highly skilled and courteous staff and doctors provide top-notch treatment, ensuring patients receive the best care. The hospital's atmosphere is refreshingly calm and well-maintained, making it an ideal environment for recovery."
  },
  {
    id: 3,
    name: "SIDHARDH M",
    isLocalGuide: true,
    badge: "Local Guide · 50 reviews · 39 photos",
    profileUrl: "https://www.google.com/maps/contrib/111868493009015794408/reviews?hl=en-IN",
    date: "2 years ago",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #FBBC05 0%, #E37400 100%)",
    content:
      "Very good hospital. They wont take all your amount. However inside space is less."
  },
  {
    id: 4,
    name: "shihas mb",
    isLocalGuide: false,
    badge: "12 reviews",
    profileUrl: "https://www.google.com/maps/contrib/115414545868058393436/reviews?hl=en-IN",
    date: "2 years ago",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #34A853 0%, #137333 100%)",
    content:
      "Good Staff and Patient-centered Medical centre in our neighbourhood."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="google-section-tagline">
            <GoogleIcon size={16} />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Read real feedback from our community members and Local Guides on Google Maps.
          </p>
        </motion.div>

        {/* Prominent Google Rating Stats Banner */}
        <motion.div
          className="google-rating-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Google Color Accent Strip */}
          <div className="google-color-strip"></div>

          <div className="google-banner-inner">
            <div className="google-banner-left">
              <div className="google-badge-logo">
                <GoogleIcon size={34} />
              </div>
              <div className="google-score-box">
                <div className="score-number-row">
                  <span className="score-big">4.8</span>
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="star-gold fill-gold" />
                    ))}
                  </div>
                </div>
                <div className="score-subtext">
                  <strong>Verified Google Reviews</strong>
                  <span className="dot-divider">•</span>
                  <span>Al Shifa Medical Center, Pallickal</span>
                </div>
              </div>
            </div>

            <div className="google-banner-right">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-google-maps-review"
                aria-label="Read all Google Reviews for Al Shifa Medical Center"
              >
                <GoogleIcon size={16} />
                <span>Read Google Reviews</span>
                <ExternalLink size={14} className="ext-arrow" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 Google Reviews Grid */}
        <div className="google-reviews-grid">
          {googleReviewsData.map((review, i) => (
            <motion.div
              key={review.id}
              className="google-review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Card Top Row: Google Icon & Star Rating */}
              <div className="card-top-row">
                <div className="card-stars-row">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} size={17} className="star-gold fill-gold" />
                  ))}
                  <span className="review-date-badge">{review.date}</span>
                </div>
                
                <a 
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="card-google-watermark" 
                  title="Read on Google Reviews"
                  aria-label="Read on Google Reviews"
                >
                  <GoogleIcon size={20} />
                </a>
              </div>

              {/* Review Text */}
              <p className="google-review-text">
                "{review.content}"
              </p>

              {/* Helpful Reaction Pill (if available) */}
              {review.reaction && (
                <div className="helpful-reaction-pill">
                  <span>{review.reaction}</span>
                </div>
              )}

              {/* Author Footer */}
              <div className="google-author-row">
                <div
                  className="google-author-avatar"
                  style={{ background: review.avatarBg }}
                >
                  {review.name.charAt(0)}
                </div>

                <div className="google-author-details">
                  <div className="author-name-line">
                    <a
                      href={review.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="author-name-link"
                      title="View Reviewer Profile on Google Maps"
                    >
                      <span>{review.name}</span>
                      <ExternalLink size={11} className="name-ext-icon" />
                    </a>
                  </div>

                  <div className="author-meta-line">
                    {review.isLocalGuide && (
                      <span className="local-guide-tag">
                        ★ Local Guide
                      </span>
                    )}
                    <span className="author-badge-text">{review.badge}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
