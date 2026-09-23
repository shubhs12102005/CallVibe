import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Star, 
  Maximize2, 
  X,
  PhoneCall
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import AnimatedCounter from '../components/AnimatedCounter';

const partners = [
  { name: 'Zoom Phone', src: '/images/zoom-phone.webp' },
  { name: 'Zadarma', src: '/images/Zadarma.webp' },
  { name: 'Tata Smartflo', src: '/images/smartflo.webp' },
  { name: 'RingCentral', src: '/images/ring-central.webp' },
  { name: 'Bonvoice', src: '/images/bonvoice.webp' },
  { name: '8x8', src: '/images/8x8.png' },
  { name: 'LeadSquared', src: '/images/lead-squared.webp' },
  { name: 'GoHighLevel', src: '/images/go-high-level.webp' },
  { name: 'Exotel', src: '/images/exotel.webp' },
  { name: 'Kaleyra', src: '/images/kaleyra.png' },
];

/**
 * AboutPage Component
 * 
 * Faithfully matches the real CallVibe About page:
 * - Clean light hero with headline, social proof avatars, and rating
 * - Dual-card product recap and detail showcase
 * - Metrics bar with animated statistics (94%+, 3x, 80%)
 * - Executive testimonial feature card on deep navy backdrop
 * - Mission statement typography
 * - Integrations banner with partner marquee
 */
export default function AboutPage({ onOpenBooking }) {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
      {/* 1. Hero Section (Light Background matching original CallVibe) */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          backgroundColor: '#F8FAFC',
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(34, 100, 246, 0.08) 0%, transparent 60%)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {/* Sliding Headline */}
            <SlidingHeadline
              text="About CallVibe - AI Conversation Intelligence for Sales Teams"
              staggerMs={70}
              style={{
                fontSize: 'clamp(32px, 4.4vw, 54px)',
                fontWeight: '800',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
                color: '#0F172A',
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.68,
                color: '#64748B',
                maxWidth: '740px',
                margin: '0 auto 36px',
              }}
            >
              At CallVibe, we believe every sales conversation holds untapped revenue potential. Our AI-powered conversation intelligence platform captures hidden insights, buying signals, and customer intent—turning everyday sales calls into measurable revenue growth and actionable sales intelligence.
            </p>

            {/* Avatars, CTA button, and Star Rating Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {/* 3 Overlapping Circular Avatars */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/circles-image-3.webp"
                  alt="Customer"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 3,
                  }}
                />
                <img
                  src="/images/circles-image-2.webp"
                  alt="Customer"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    marginLeft: '-14px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                <img
                  src="/images/circles-image-1.webp"
                  alt="Customer"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    marginLeft: '-14px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Blue Check Features Button */}
              <a
                href="/features"
                className="btn btn-primary"
                style={{
                  fontSize: '15px',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px rgba(34, 100, 246, 0.35)',
                }}
              >
                <Sparkles size={16} />
                <span>Check Features</span>
              </a>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#2563EB' }}>
                  <Star size={16} fill="#2563EB" />
                  <Star size={16} fill="#2563EB" />
                  <Star size={16} fill="#2563EB" />
                  <Star size={16} fill="#2563EB" />
                  <Star size={16} fill="#2563EB" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#334155' }}>
                  Rated 4.9 of 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase: Call Recap & Call Details side-by-side */}
      <section style={{ padding: '60px 0 80px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Card 1: Call Recap */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  minHeight: '340px',
                  backgroundColor: '#F1F5F9',
                }}
                onClick={() => setActiveLightbox('/images/Call-Recap-CV1.webp')}
              >
                <img
                  src="/images/Call-Recap-CV1.webp"
                  alt="Call Recap"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '380px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                  Call Recap - Turn every call into a clear recap, smart AI summary, and actionable details instantly.
                </h3>
                <button
                  onClick={() => setActiveLightbox('/images/Call-Recap-CV1.webp')}
                  style={{ color: '#64748B', padding: '6px' }}
                  title="Enlarge"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>

            {/* Card 2: Call Details */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  minHeight: '340px',
                  backgroundColor: '#F1F5F9',
                }}
                onClick={() => setActiveLightbox('/images/Call-Details-CV1.webp')}
              >
                <img
                  src="/images/Call-Details-CV1.webp"
                  alt="Call Details"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '380px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                  Call Details at your Finger Tips
                </h3>
                <button
                  onClick={() => setActiveLightbox('/images/Call-Details-CV1.webp')}
                  style={{ color: '#64748B', padding: '6px' }}
                  title="Enlarge"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Metrics Bar Section (Exact copy of CallVibe About page) */}
      <section style={{ backgroundColor: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '70px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
            className="about-metrics-grid"
          >
            {/* Stat 1 */}
            <div style={{ paddingRight: '20px' }}>
              <div style={{ fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: '800', color: '#0F172A', lineHeight: 1, marginBottom: '14px' }}>
                <AnimatedCounter end={94} suffix="%+" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Sentiment Detection Accuracy
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B' }}>
                AI-powered sentiment analysis that understands tone, intent, and emotion across every sales conversation with precision.
              </p>
            </div>

            {/* Stat 2 */}
            <div style={{ paddingRight: '20px' }}>
              <div style={{ fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: '800', color: '#0F172A', lineHeight: 1, marginBottom: '14px' }}>
                <AnimatedCounter end={3} suffix="x" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Faster Follow-Up Response Time
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B' }}>
                Automated AI insights, next steps, and follow-up recommendations help sales teams respond faster and close deals efficiently.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div style={{ fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: '800', color: '#0F172A', lineHeight: 1, marginBottom: '14px' }}>
                <AnimatedCounter end={80} suffix="%" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Reduction in Call Review Time
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B' }}>
                AI-generated summaries and call transcription eliminate manual listening and accelerate decision-making for revenue teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonial Section with Deep Navy Gradient */}
      <section
        style={{
          background: 'radial-gradient(110% 120% at 75% 25%, #1848B5 0%, #0E2D77 35%, #081A46 70%, #050E24 100%)',
          padding: '90px 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '540px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '44px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Header: 80% + stars */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '48px', fontWeight: '800', color: '#0F172A', lineHeight: 1 }}>
                80%
              </span>
              <div style={{ display: 'flex', gap: '3px', color: '#2563EB' }}>
                <Star size={18} fill="#2563EB" />
                <Star size={18} fill="#2563EB" />
                <Star size={18} fill="#2563EB" />
                <Star size={18} fill="#2563EB" />
                <Star size={18} fill="#2563EB" />
              </div>
            </div>

            {/* Magenta badge */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: '800',
                color: '#C026D3',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              NEW CUSTOMERS SINCE 2024
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#0F172A',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                marginBottom: '28px',
              }}
            >
              “CallVibe turned our sales calls into real revenue insights. We close faster and follow up smarter.”
            </blockquote>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src="/images/Ravi-Kiran.png"
                alt="Ravi Kiran"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #E2E8F0',
                }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: '#0F172A' }}>
                  Ravi Kiran
                </strong>
                <span style={{ fontSize: '13px', color: '#64748B' }}>
                  CEO and Co-Founder @techprofuse
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Statement & Mission Typography */}
      <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 46px)',
                fontWeight: '800',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: '#64748B',
                marginBottom: '36px',
              }}
            >
              With a team of AI specialists, data scientists, and sales tech experts, CallVibe delivers conversation intelligence, call analytics, and AI-powered insights to improve coaching, capture buying signals, and boost conversions.
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#475569',
                maxWidth: '900px',
              }}
            >
              CallVibe was built on innovation, trust, and a mission to help businesses unlock the full value of every conversation. From our first customer to a growing global user base, we continue to empower sales teams with AI-driven insights that turn conversations into predictable revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Seamless Integrations Banner with Partner Marquee */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span className="badge-pill badge-blue-subtle">
              <ShieldCheck size={16} />
              <span>Trusted by 50+ Companies</span>
            </span>
            <span className="badge-pill badge-blue-subtle">
              <Building2 size={16} />
              <span>Built for real conversations</span>
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 44px)',
              fontWeight: '800',
              color: '#0F172A',
              letterSpacing: '-0.02em',
              maxWidth: '720px',
              margin: '0 auto 16px',
            }}
          >
            Seamless integrations with your CRM and telephony tools
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#64748B',
              maxWidth: '680px',
              margin: '0 auto 32px',
            }}
          >
            Connect CallVibe with your existing CRM systems, cloud telephony platforms, and sales tools. Our AI conversation intelligence software integrates seamlessly to centralize call data, automate workflows, and improve pipeline visibility.
          </p>

          {/* Consultation Button */}
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{
              fontSize: '16px',
              padding: '14px 32px',
              marginBottom: '60px',
            }}
          >
            <PhoneCall size={18} />
            <span>Schedule a Consultation</span>
          </button>

          {/* Integration Partners Marquee */}
          <div className="marquee-container">
            <div className="marquee-track">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '48px',
                    padding: '0 20px',
                    filter: 'grayscale(100%) opacity(70%)',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)';
                  }}
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    style={{
                      maxHeight: '38px',
                      maxWidth: '140px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
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
            style={{ maxWidth: '980px', padding: '16px', backgroundColor: '#FFFFFF' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
              <button onClick={() => setActiveLightbox(null)} style={{ padding: '6px' }}>
                <X size={24} color="#0F172A" />
              </button>
            </div>
            <img src={activeLightbox} alt="Preview" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      )}
    </div>
  );
}
