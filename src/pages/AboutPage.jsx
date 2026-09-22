import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Users, 
  Award, 
  CheckCircle2,
  Quote,
  Maximize2,
  X
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import AnimatedCounter from '../components/AnimatedCounter';
import CtaBanner from '../components/CtaBanner';

const previews = [
  { id: 1, title: 'Call Recap & Objections', src: '/images/Call-Recap-CV1.webp' },
  { id: 2, title: 'AI Summary & Next Steps', src: '/images/Call-Summary-CV.webp' },
  { id: 3, title: 'Granular Call Details', src: '/images/Call-Details-CV1.webp' },
];

export default function AboutPage({ onOpenBooking }) {
  const [activeLightbox, setActiveLightbox] = useState(null);

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
          <div style={{ maxWidth: '840px', marginBottom: '40px' }}>
            <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
              Our Story & Mission
            </span>
            <SlidingHeadline
              text="About CallVibe - AI Conversation Intelligence for Sales Teams"
              staggerMs={70}
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: '800',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
                color: '#FFFFFF',
              }}
            />
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.68,
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '720px',
                marginBottom: '36px',
              }}
            >
              At CallVibe, we believe every sales conversation holds untapped revenue potential. Our AI-powered conversation intelligence platform captures hidden insights, buying signals, and customer intent—turning everyday sales calls into measurable revenue growth and actionable sales intelligence.
            </p>

            <button
              onClick={onOpenBooking}
              className="btn btn-gradient pix-hover-right"
              style={{ fontSize: '16px', padding: '14px 32px' }}
            >
              <span>Explore Platform</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* 3 Animated Stats */}
          <div
            style={{
              marginTop: '50px',
              backgroundColor: '#070D1B',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              padding: '40px 48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '36px',
            }}
          >
            <div>
              <AnimatedCounter
                end={94}
                suffix="%"
                style={{ fontSize: '54px', fontWeight: '800', color: '#FFFFFF', lineHeight: 1, marginBottom: '10px' }}
              />
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#94A3B8', marginBottom: '4px' }}>
                Sentiment Detection Accuracy
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                Understands tone, intent, and customer hesitation across every conversation.
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <AnimatedCounter
                  end={3}
                  suffix="x"
                  style={{ fontSize: '54px', fontWeight: '800', color: '#38BDF8', lineHeight: 1, marginBottom: '10px' }}
                />
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#94A3B8', marginBottom: '4px' }}>
                Faster Follow-Up Response Time
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                Automated AI summaries draft personalized follow-ups in seconds.
              </div>
            </div>

            <div>
              <AnimatedCounter
                end={85}
                suffix="%"
                style={{ fontSize: '54px', fontWeight: '800', color: '#10B981', lineHeight: 1, marginBottom: '10px' }}
              />
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#94A3B8', marginBottom: '4px' }}>
                Reduction in Call Review Time
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                Managers spot coaching moments instantly without scrubbing full audio.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Gallery */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              <Sparkles size={15} />
              <span>Call Details at your Finger Tips</span>
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: '800', color: '#070E1C', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Built for Real Sales Conversations
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B' }}>
              Inspect live transcript timelines, objection categorization, and deal momentum across your team. Click to inspect mockups.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {previews.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(34, 100, 246, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ height: '240px', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                  <img src={item.src} alt={item.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '20px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '700', fontSize: '15px', color: '#1E293B' }}>{item.title}</span>
                  <Maximize2 size={16} color="#64748B" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Testimonial Feature */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'center',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
            }}
            className="testimonial-card"
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src="/images/Ravi-Kiran.png"
                alt="Ravi Kiran"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #EFF6FF',
                  margin: '0 auto 16px',
                }}
              />
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>
                Ravi Kiran
              </h4>
              <p style={{ fontSize: '13px', color: '#64748B' }}>
                CEO and Co-Founder @techprofuse
              </p>
            </div>

            <div>
              <Quote size={36} color="#2264F6" style={{ opacity: 0.3, marginBottom: '16px' }} />
              <blockquote
                style={{
                  fontSize: 'clamp(20px, 2.4vw, 26px)',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: 1.4,
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}
              >
                “CallVibe turned our sales calls into real revenue insights. We close faster and follow up smarter.”
              </blockquote>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.65 }}>
                With a team of AI specialists, data scientists, and sales tech experts, CallVibe delivers conversation intelligence, call analytics, and AI-powered insights to improve coaching, capture buying signals, and boost conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="modal-backdrop" onClick={() => setActiveLightbox(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', padding: '24px', backgroundColor: '#FFFFFF', textAlign: 'center' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                {activeLightbox.title}
              </h3>
              <button onClick={() => setActiveLightbox(null)} style={{ padding: '6px', color: '#64748B' }}>
                <X size={20} />
              </button>
            </div>
            <img
              src={activeLightbox.src}
              alt={activeLightbox.title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '12px' }}
            />
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CtaBanner onOpenBooking={onOpenBooking} onLearnMore={onOpenBooking} />

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card {
            grid-template-columns: 1fr !important;
            padding: 30px 24px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}
