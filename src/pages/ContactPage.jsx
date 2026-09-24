import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  X,
  MessageSquare
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import CtaBanner from '../components/CtaBanner';

/**
 * ContactPage Component
 * 
 * Recreates the exact CallVibe Contact page:
 * - Light hero with "Get in Touch" headline and "Send Us a Message" CTA
 * - 3 Contact info cards (Call Us, Visit Our Office, Email Us)
 * - Office details section with hours, address, and email
 * - Embedded responsive Google Map of Wagle Estate, Thane West
 * - Interactive direct inquiry message modal
 * - Bottom CTA banner
 */
export default function ContactPage({ onOpenBooking }) {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [msgData, setMsgData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(true);
  };

  const scrollToMap = () => {
    const el = document.getElementById('office-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
      {/* 1. Hero Section (Light, matching original CallVibe) */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          backgroundColor: '#F8FAFC',
          backgroundImage: 'radial-gradient(circle at 50% 15%, rgba(34, 100, 246, 0.08) 0%, transparent 65%)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <SlidingHeadline
              text="Get in Touch"
              staggerMs={70}
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '800',
                color: '#0F172A',
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            />

            <p
              style={{
                fontSize: '18px',
                color: '#64748B',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto 32px',
              }}
            >
              Connect with us for any questions, support, or partnership inquiries.
            </p>

            <button
              onClick={() => {
                setIsMessageModalOpen(true);
                setSubmittedMessage(false);
              }}
              className="btn btn-primary"
              style={{
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '9999px',
                boxShadow: '0 4px 14px rgba(34, 100, 246, 0.35)',
              }}
            >
              <span>Send Us a Message</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. 3 Contact Cards Row */}
      <section style={{ padding: '60px 0 80px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Call Us */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '40px 32px',
                textAlign: 'left',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(34, 100, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#EFF6FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Phone size={26} color="#2264F6" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Call Us
              </h3>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px' }}>
                Mon to Fri (9am – 6pm).
              </p>
              <a
                href="tel:+918108810916"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  color: '#0F172A',
                  fontSize: '14px',
                  fontWeight: '700',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2264F6';
                  e.currentTarget.style.color = '#2264F6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.color = '#0F172A';
                }}
              >
                <Phone size={14} color="#2264F6" />
                <span>+91 81088 10916</span>
              </a>
            </div>

            {/* Card 2: Visit Our Office */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '40px 32px',
                textAlign: 'left',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(34, 100, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#EFF6FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <MapPin size={26} color="#2264F6" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Visit Our Office
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
                Road No 8, SG Barve RD, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604
              </p>
              <button
                onClick={scrollToMap}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  color: '#0F172A',
                  fontSize: '14px',
                  fontWeight: '700',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2264F6';
                  e.currentTarget.style.color = '#2264F6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.color = '#0F172A';
                }}
              >
                <MapPin size={14} color="#2264F6" />
                <span>Show on map</span>
              </button>
            </div>

            {/* Card 3: Email Us */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '40px 32px',
                textAlign: 'left',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(34, 100, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#EFF6FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Mail size={26} color="#2264F6" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Email Us
              </h3>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px' }}>
                Get reply within 24 hours.
              </p>
              <a
                href="mailto:manoj@silgatehiring.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  color: '#0F172A',
                  fontSize: '14px',
                  fontWeight: '700',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2264F6';
                  e.currentTarget.style.color = '#2264F6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.color = '#0F172A';
                }}
              >
                <Send size={14} color="#2264F6" />
                <span>manoj@silgatehiring.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visit Our Office Information Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.8fr',
              gap: '48px',
              alignItems: 'center',
            }}
            className="office-info-grid"
          >
            {/* Left Column */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#2264F6', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
                CallVibe Information
              </div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: '800',
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                Visit Our Office
              </h2>
              <button
                onClick={() => {
                  setIsMessageModalOpen(true);
                  setSubmittedMessage(false);
                }}
                className="btn btn-primary"
                style={{
                  fontSize: '15px',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                }}
              >
                <span>Send Us a Message</span>
                <Send size={16} />
              </button>
            </div>

            {/* Right Column: Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, marginBottom: '8px' }}>
                Planning a visit? Reach out through the form and we’ll be happy to welcome you in person.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px', color: '#1E293B', fontWeight: '600' }}>
                <Clock size={20} color="#2264F6" />
                <span>Open 8am to 6pm</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px', color: '#1E293B', fontWeight: '600' }}>
                <MapPin size={20} color="#2264F6" />
                <span>Road No 8, SG Barve RD, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px', color: '#1E293B', fontWeight: '600' }}>
                <Phone size={20} color="#2264F6" />
                <a href="tel:+918108810916" style={{ color: '#2264F6' }}>
                  +91 81088 10916
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px', color: '#1E293B', fontWeight: '600' }}>
                <Mail size={20} color="#2264F6" />
                <a href="mailto:manoj@silgatehiring.com" style={{ color: '#2264F6' }}>
                  manoj@silgatehiring.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-Width Interactive Google Map */}
      <section id="office-map" style={{ width: '100%', height: '460px', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <iframe
          title="CallVibe Office Location - Wagle Estate, Thane West"
          src="https://maps.google.com/maps?q=Road%20No%208%2C%20SG%20Barve%20RD%2C%20Wagle%20Estate%2C%20Padwal%20Nagar%2C%20Thane%20West%2C%20Maharashtra%20400604&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* 5. Bottom CTA Banner */}
      <CtaBanner onOpenBooking={onOpenBooking} onLearnMore={() => (window.location.pathname = '/features')} />

      {/* Direct Inquiry Message Modal */}
      {isMessageModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsMessageModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '520px', padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={20} color="#2264F6" />
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                  Send a Message to CallVibe
                </h3>
              </div>
              <button onClick={() => setIsMessageModalOpen(false)} style={{ color: '#94A3B8', padding: '4px' }}>
                <X size={20} />
              </button>
            </div>

            {submittedMessage ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Message Dispatched!
                </h4>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                  Thank you for reaching out. A CallVibe representative will reply within 24 hours.
                </p>
                <button onClick={() => setIsMessageModalOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleMsgSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="auth-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="auth-input"
                  />
                </div>

                <div>
                  <label className="auth-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={msgData.email}
                    onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="auth-input"
                  />
                </div>

                <div>
                  <label className="auth-label">Subject</label>
                  <select
                    value={msgData.subject}
                    onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                    className="auth-input"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Enterprise Telephony Integration">Enterprise Telephony Integration</option>
                    <option value="Partnership / Reseller">Partnership / Reseller</option>
                    <option value="Support Request">Support Request</option>
                  </select>
                </div>

                <div>
                  <label className="auth-label">Message *</label>
                  <textarea
                    required
                    rows="4"
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    placeholder="How can we help your team?"
                    className="auth-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="auth-submit-btn" style={{ marginTop: '8px' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .office-info-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
