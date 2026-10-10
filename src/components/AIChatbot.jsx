import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Bot,
  Send,
  X,
  MessageCircle,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  HeartPulse,
  Stethoscope,
  Activity,
  ArrowRight
} from 'lucide-react';
import './AIChatbot.css';

// Easily editable Al Shifa Clinic Owner / Reception WhatsApp number (Country code + phone without symbols)
export const OWNER_WHATSAPP_NUMBER = "918714311881";

const INITIAL_WELCOME = {
  id: 1,
  sender: 'bot',
  text: "Namaskaram! 🏥 Welcome to Al Shifa Medical Center, Pallickal.\n\nI am your AI Health Concierge. How can I assist you with your consultation, doctor appointments, or medical queries today?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  options: [
    "📅 Book Doctor Appointment",
    "🩺 Medical Specialties & Doctors",
    "🧪 24/7 Diagnostic Lab & Tests",
    "📍 Clinic Location & OPD Timings",
    "🚨 Emergency Helpline"
  ]
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_WELCOME]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  // Multi-step patient registration state
  // 0: Idle / Conversational
  // 1: Selecting Department/Specialty
  // 2: Selecting Preferred Date & Time
  // 3: Entering Patient Name & WhatsApp Contact
  // 4: Registration Summary Generated
  const [bookingStep, setBookingStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    name: '',
    phone: ''
  });

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Listen for global custom trigger (e.g. from hero or navbar Book Appointment buttons)
  useEffect(() => {
    const handleOpenChat = (event) => {
      setIsOpen(true);
      setUnreadCount(0);
      if (event?.detail?.department) {
        startBookingWithDept(event.detail.department);
      }
    };

    window.addEventListener('open-alshifa-chat', handleOpenChat);
    return () => window.removeEventListener('open-alshifa-chat', handleOpenChat);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const startBookingWithDept = (departmentName) => {
    setBookingData((prev) => ({ ...prev, service: departmentName }));
    setBookingStep(2);
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'bot',
        text: `Selected Department: *${departmentName}*.\n\nWhen would you like to schedule your consultation at Alshifa Pallickal?`,
        timestamp,
        options: [
          "Today Evening (05:00 PM)",
          "Tomorrow Morning (10:00 AM)",
          "Tomorrow Evening (04:30 PM)",
          "This Saturday 11:00 AM"
        ]
      }
    ]);
  };

  const handleSendMessage = (textToSend = input) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      timestamp
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      processAIResponse(trimmed);
      setIsTyping(false);
    }, 750);
  };

  const processAIResponse = (text) => {
    const lower = text.toLowerCase();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Handle Appointment Booking Step Transitions
    if (bookingStep === 1) {
      setBookingData((prev) => ({ ...prev, service: text }));
      setBookingStep(2);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `Selected Department: *${text}*.\n\nWhat is your preferred consultation date and time slot?`,
          timestamp,
          options: [
            "Today Evening (05:00 PM)",
            "Tomorrow Morning (10:00 AM)",
            "Tomorrow Evening (04:30 PM)",
            "This Saturday 11:00 AM"
          ]
        }
      ]);
      return;
    }

    if (bookingStep === 2) {
      setBookingData((prev) => ({ ...prev, date: text }));
      setBookingStep(3);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `Appointment slot noted: *${text}*.\n\nPlease provide the *Patient Name & WhatsApp Mobile Number* so we can confirm the registration.`,
          timestamp
        }
      ]);
      return;
    }

    if (bookingStep === 3) {
      setBookingData((prev) => ({ ...prev, name: text, phone: text }));
      setBookingStep(4);

      const finalService = bookingData.service || "General Medicine";
      const finalDate = bookingData.date || "Tomorrow 10:00 AM";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `🎉 Thank you! Your patient registration details have been prepared.\n\nClick the green button below to send this directly to the Alshifa Clinic Owner & Reception on WhatsApp for immediate confirmation.`,
          timestamp,
          summaryCard: {
            service: finalService,
            date: finalDate,
            contact: text
          }
        }
      ]);
      return;
    }

    // Natural Language / Intent Matching

    // 1. Booking / Appointment
    if (
      lower.includes('book') ||
      lower.includes('appointment') ||
      lower.includes('reserve') ||
      lower.includes('consult') ||
      lower.includes('register')
    ) {
      setBookingStep(1);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "I'll be glad to help you register for an appointment! Which doctor or department do you need?",
          timestamp,
          options: [
            "Dr. Kanza Beegum (Family Physician)",
            "Cardiology",
            "Pediatrics (Child Care)",
            "Neurology",
            "Orthopedics",
            "General Surgery",
            "24/7 Diagnostic Lab"
          ]
        }
      ]);
      return;
    }

    // 2. Specialties / Doctors
    if (
      lower.includes('special') ||
      lower.includes('doctor') ||
      lower.includes('department') ||
      lower.includes('kanza') ||
      lower.includes('cardio') ||
      lower.includes('ortho') ||
      lower.includes('pediatric') ||
      lower.includes('neuro')
    ) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "🏥 *Medical Team & Specialties at Al Shifa Medical Center:*\n\n• **Dr. Kanza Beegum**: Family Physician & Managing Director (Comprehensive Family Healthcare)\n• **Cardiology**: Heart care, ECG & preventive cardiac consultations\n• **Pediatrics**: Specialized infant, child healthcare & vaccinations\n• **Neurology**: Comprehensive diagnosis for brain & nerve conditions\n• **Orthopedics**: Bone, joint & sports injury treatments\n• **General Surgery**: Expert surgical care with minimal invasive techniques\n• **24/7 Emergency & Casualty**: Round-the-clock doctor care\n\nWould you like to book a consultation with Dr. Kanza Beegum?",
          timestamp,
          options: [
            "Dr. Kanza Beegum (Family Physician)",
            "📅 Book Doctor Appointment",
            "💬 Chat with Reception on WhatsApp"
          ]
        }
      ]);
      return;
    }

    // 3. Laboratory / Blood Test / Scans
    if (
      lower.includes('lab') ||
      lower.includes('test') ||
      lower.includes('blood') ||
      lower.includes('scan') ||
      lower.includes('x-ray') ||
      lower.includes('ecg') ||
      lower.includes('diagnostic')
    ) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "🧪 *Alshifa 24/7 Diagnostic Laboratory:*\n\n• Complete Blood Counts & Routine Pathology\n• Biochemistry, Lipid & Diabetic Profiles\n• Digital 12-Lead ECG & X-Ray\n• Ultrasound Diagnostics\n• Fast digital report sharing via WhatsApp\n\nWalk-ins are welcome, or you can register your test slot ahead of time.",
          timestamp,
          options: ["📅 Book Lab Test Appointment", "📍 Clinic Address & Timings"]
        }
      ]);
      return;
    }

    // 4. Timings / OPD Hours
    if (
      lower.includes('time') ||
      lower.includes('hour') ||
      lower.includes('opd') ||
      lower.includes('open') ||
      lower.includes('close') ||
      lower.includes('timing')
    ) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "⏰ *Alshifa Medical Center Working Hours:*\n\n• **OPD Consultations**: Mon - Sat (8:00 AM - 8:30 PM)\n• **Sunday OPD**: 9:00 AM - 2:00 PM\n• **Emergency & Trauma**: 24 Hours / 7 Days Open\n• **Pharmacy & Diagnostic Lab**: 24/7 Round the clock",
          timestamp,
          options: ["📅 Book Appointment", "🚨 Emergency Helpline", "📍 View Location"]
        }
      ]);
      return;
    }

    // 5. Location / Address / Route
    if (
      lower.includes('location') ||
      lower.includes('address') ||
      lower.includes('where') ||
      lower.includes('pallickal') ||
      lower.includes('route') ||
      lower.includes('map')
    ) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "📍 *Hospital Location:*\nAlshifa Medical Center,\nMain Road, Pallickal, Kerala.\n\n🚘 Dedicated patient parking, ambulance bay, and wheelchair-accessible entrance are readily available.",
          timestamp,
          options: ["🗺️ Open in Google Maps", "📅 Book Doctor Appointment"]
        }
      ]);
      return;
    }

    // 6. Emergency / Ambulance / Urgent
    if (
      lower.includes('emergency') ||
      lower.includes('urgent') ||
      lower.includes('ambulance') ||
      lower.includes('helpline') ||
      lower.includes('call')
    ) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "🚨 *24/7 Emergency & Ambulance Service:*\n\nOur Casualty & Trauma team is on standby 24 hours a day at Pallickal.\n\n• Emergency Helpline: **087143 11881**\n• Immediate WhatsApp: Tap the green WhatsApp button below for urgent routing.",
          timestamp,
          options: ["💬 Direct WhatsApp to Owner", "📅 Non-Urgent Appointment"]
        }
      ]);
      return;
    }

    // 7. General Fallback
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'bot',
        text: "I am trained to help you with doctor appointments, department information, lab tests, and hospital timings at Alshifa Medical Center Pallickal.\n\nHow would you like to proceed?",
        timestamp,
        options: [
          "📅 Book Doctor Appointment",
          "🩺 Medical Specialties & Doctors",
          "🧪 24/7 Diagnostic Lab & Tests",
          "💬 Direct WhatsApp to Owner"
        ]
      }
    ]);
  };

  // Direct Handoff to Clinic Owner's WhatsApp
  const handleSendToWhatsApp = (cardData) => {
    const serviceName = cardData?.service || bookingData.service || "General Medical Consultation";
    const appointmentSchedule = cardData?.date || bookingData.date || "Earliest Available Slot";
    const patientDetails = cardData?.contact || bookingData.name || "Patient from Website";

    const formattedMessage =
      `*🏥 NEW PATIENT REGISTRATION - ALSHIFA MEDICAL CENTER, PALLICKAL*%0A%0A` +
      `*Department/Specialty:* ${encodeURIComponent(serviceName)}%0A` +
      `*Preferred Slot:* ${encodeURIComponent(appointmentSchedule)}%0A` +
      `*Patient Name & Contact:* ${encodeURIComponent(patientDetails)}%0A%0A` +
      `*Location:* Alshifa Medical Center, Main Road, Pallickal%0A` +
      `*Source:* Website AI Health Concierge%0A` +
      `*Timestamp:* ${encodeURIComponent(new Date().toLocaleString())}`;

    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${formattedMessage}`, '_blank');
  };

  const handleResetChat = () => {
    setBookingStep(0);
    setBookingData({ service: '', date: '', name: '', phone: '' });
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Chat has been reset! 🏥 How can I help you with your healthcare needs at Alshifa Pallickal today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          "📅 Book Doctor Appointment",
          "🩺 Medical Specialties & Doctors",
          "🧪 24/7 Diagnostic Lab & Tests",
          "📍 Clinic Location & OPD Timings"
        ]
      }
    ]);
  };

  const handleOptionClick = (option) => {
    if (option.includes("Google Maps") || option.includes("Location")) {
      window.open(
        "https://www.google.com/maps/dir//Al+Shifa+Medical+Center,+RRF4%2B2V8,+Pallickal,+Keralam+695604/@8.8113588,76.8144292,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3b05e7b52407b4b7:0x836502d9194f348a!2m2!1d76.8072153!2d8.8225483?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
      );
      return;
    }
    if (option.includes("Direct WhatsApp")) {
      window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Alshifa Medical Center, I would like to inquire about healthcare services.")}`, "_blank");
      return;
    }
    handleSendMessage(option);
  };

  return (
    <div className="alshifa-chatbot-container">
      {/* Floating Trigger Button in Bottom Right */}
      <div className="chatbot-trigger-wrapper">
        {/* Tooltip on hover */}
        {!isOpen && (
          <div className="chatbot-pill-tooltip">
            <span className="tooltip-dot"></span>
            <span className="tooltip-text">Chat with Alshifa AI Concierge</span>
          </div>
        )}

        {/* Pulse Ring when idle */}
        {!isOpen && <div className="chatbot-pulse-ring" />}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`chatbot-trigger-btn ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? "Close AI Chat" : "Open Alshifa AI Chat"}
          title={isOpen ? "Close Chat" : "Chat with Alshifa AI"}
        >
          {isOpen ? (
            <X size={24} className="trigger-icon" />
          ) : (
            <>
              <div className="trigger-icon-stack">
                <Bot size={22} className="trigger-bot-icon" />
                <Sparkles size={14} className="trigger-sparkle-icon" />
              </div>
              {unreadCount > 0 && <span className="trigger-badge">{unreadCount}</span>}
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="header-brand">
                <div className="bot-avatar-wrapper">
                  <div className="bot-avatar-inner">
                    <HeartPulse size={18} className="bot-avatar-icon" />
                  </div>
                  <span className="online-indicator" title="Online 24/7"></span>
                </div>
                <div className="bot-info">
                  <div className="bot-title-row">
                    <h3 className="bot-name">Alshifa AI Health Concierge</h3>
                    <Sparkles size={14} className="sparkle-gold" />
                  </div>
                  <div className="bot-status-row">
                    <span className="status-live">● Online</span>
                    <span className="status-divider">•</span>
                    <span className="status-sub">Pallickal Medical Center</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Header */}
              <div className="header-actions-row">
                <a
                  href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Alshifa Medical Center, I would like to connect with reception.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="header-btn whatsapp-btn"
                  title="Direct WhatsApp with Owner/Reception"
                  aria-label="Direct WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <button
                  onClick={handleResetChat}
                  className="header-btn"
                  title="Reset Conversation"
                  aria-label="Reset Chat"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="header-btn close-btn"
                  title="Close Chat"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Department Banner */}
            <div className="chatbot-banner">
              <Activity size={13} className="banner-icon" />
              <span>Instant patient appointment & enquiry routing to Owner's WhatsApp</span>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-message-row ${msg.sender === 'user' ? 'from-user' : 'from-bot'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="bot-avatar-mini">
                      <Stethoscope size={12} />
                    </div>
                  )}

                  <div className="message-content-wrapper">
                    <div className={`message-bubble ${msg.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                      {msg.text.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="bubble-paragraph">
                          {paragraph.startsWith('• ') ? (
                            <span className="bullet-item">{paragraph}</span>
                          ) : (
                            paragraph
                          )}
                        </p>
                      ))}
                    </div>

                    {/* Summary Card with Direct Send to WhatsApp */}
                    {msg.summaryCard && (
                      <motion.div
                        className="booking-summary-card"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="summary-header">
                          <div className="summary-title">
                            <CheckCircle2 size={16} className="text-emerald" />
                            <span>Registration Ready</span>
                          </div>
                          <span className="summary-badge">Pallickal Desk</span>
                        </div>

                        <div className="summary-details">
                          <div className="summary-row">
                            <span className="summary-label">Specialty:</span>
                            <strong className="summary-value text-teal">{msg.summaryCard.service}</strong>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Preferred Time:</span>
                            <strong className="summary-value text-amber">{msg.summaryCard.date}</strong>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Patient:</span>
                            <strong className="summary-value">{msg.summaryCard.contact}</strong>
                          </div>
                        </div>

                        <button
                          onClick={() => handleSendToWhatsApp(msg.summaryCard)}
                          className="whatsapp-send-btn"
                          title="Transmit details to Alshifa WhatsApp"
                        >
                          <MessageCircle size={18} className="wa-icon" />
                          <span>Send Registration to Owner's WhatsApp</span>
                          <ExternalLink size={14} className="wa-arrow" />
                        </button>
                      </motion.div>
                    )}

                    {/* Quick Suggestion Pills */}
                    {msg.options && msg.options.length > 0 && (
                      <div className="quick-options-container">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="quick-option-pill"
                          >
                            <span>{opt}</span>
                            <ArrowRight size={12} className="pill-arrow" />
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="message-timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="chat-message-row from-bot">
                  <div className="bot-avatar-mini">
                    <Stethoscope size={12} />
                  </div>
                  <div className="typing-indicator-bubble">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <div className="chatbot-input-footer">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="chatbot-form"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask a question or enter your details..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="chatbot-input"
                  aria-label="Type medical query or booking details"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="chatbot-send-btn"
                  title="Send Message"
                  aria-label="Send Message"
                >
                  <Send size={16} />
                </button>
              </form>
              <div className="footer-credit">
                <span>Al Shifa Medical Center • 24/7 Helpline: 087143 11881</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
