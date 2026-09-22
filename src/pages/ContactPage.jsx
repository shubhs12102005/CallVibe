import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import CtaBanner from '../components/CtaBanner';

export default function ContactPage({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(110% 120% at 75% 25%, #1848B5 0%, #0E2D77 35%, #081A46 70%, #050E24 100%)',
          color: '#FFFFFF',
          paddingTop: '170px',
          paddingBottom: '90px',
          position: 'relative',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
              We're Here to Help
            </span>
            <SlidingHeadline
              text="Get in Touch with CallVibe"
              staggerMs={70}
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: '800',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            />
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, maxWidth: '680px' }}>
              Connect with us for enterprise inquiries, custom telephony integration support, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Contact Info Cards */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginTop: '-110px',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* Card 1: Support */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '36px 30px',
                boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
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
                  color: '#2264F6',
                  marginBottom: '20px',
                }}
              >
                <Phone size={26} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Contact Support
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>
                Mon to Fri (9am – 6pm SGT)
              </p>
              <a
                href="tel:+6568160011"
                style={{ fontSize: '18px', fontWeight: '800', color: '#2264F6' }}
              >
                +65 6816 0011
              </a>
            </div>

            {/* Card 2: HQ Office */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '36px 30px',
                boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#FAF5FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9333EA',
                  marginBottom: '20px',
                }}
              >
                <MapPin size={26} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Visit CallVibe HQ
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px', lineHeight: 1.5 }}>
                22, Sin Ming Lane #06-76, Midview City<br />
                Singapore 573969
              </p>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#9333EA' }}>
                Open 8:00 AM – 6:00 PM
              </span>
            </div>

            {/* Card 3: Email */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '36px 30px',
                boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  marginBottom: '20px',
                }}
              >
                <Mail size={26} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Send an Email
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>
                Guaranteed reply within 24 hours
              </p>
              <a
                href="mailto:info@callvibe.ai"
                style={{ fontSize: '18px', fontWeight: '800', color: '#059669' }}
              >
                info@callvibe.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Office Map */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '48px',
              alignItems: 'start',
            }}
            className="contact-layout"
          >
            {/* Form */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '40px',
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '32px' }}>
                Fill out the details below and our team will get in touch right away.
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    borderRadius: '16px',
                    padding: '36px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#065F46', marginBottom: '8px' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ fontSize: '15px', color: '#047857', marginBottom: '20px' }}>
                    Thank you, {formData.name}. Our enterprise team in Singapore has received your request and will follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-two-col">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-two-col">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '15px',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                        }}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Enterprise Demo">Enterprise Demo</option>
                        <option value="Telephony / CRM Integration">Telephony / CRM Integration</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell us about your team size, dialer stack, and what you're looking to solve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary pix-hover-right"
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '8px',
                    }}
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Office Info & Simulated Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '24px',
                  padding: '36px',
                  color: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Building2 size={24} color="#38BDF8" />
                  <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>
                    Singapore Headquarters
                  </h3>
                </div>

                <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '24px' }}>
                  Midview City is centrally situated in Singapore, hosting CallVibe's executive leadership, core research engineering, and global sales operations.
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0' }}>
                    <MapPin size={16} color="#38BDF8" />
                    <span>22, Sin Ming Lane #06-76, Midview City Singapore 573969</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0' }}>
                    <Clock size={16} color="#38BDF8" />
                    <span>Operating Hours: 8:00 AM - 6:00 PM SGT</span>
                  </div>
                </div>
              </div>

              {/* Map Canvas Preview */}
              <div
                style={{
                  borderRadius: '24px',
                  height: '240px',
                  backgroundColor: '#E2E8F0',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <iframe
                  title="CallVibe Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Midview%20City%20Singapore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenBooking={onOpenBooking} onLearnMore={onOpenBooking} />

      <style>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
