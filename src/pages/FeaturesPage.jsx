import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  BarChart4, 
  BellRing, 
  FileText,
  Lock,
  Users2,
  CheckCircle2
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import CtaBanner from '../components/CtaBanner';

const featureCards = [
  {
    icon: <Headphones size={28} color="#2264F6" />,
    title: 'Live Transcription',
    description: 'Accurate AI call transcription with searchable conversation data to quickly find key moments, objections, and buying signals.',
    cta: 'View transcripts',
  },
  {
    icon: <Zap size={28} color="#9333EA" />,
    title: 'Convert Assist',
    description: 'AI extracts next actions, drafts personalized follow-ups, and prioritizes leads based on intent and engagement.',
    cta: 'See Convert Assist',
  },
  {
    icon: <BarChart4 size={28} color="#059669" />,
    title: 'Call Coaching',
    description: 'Automated call scoring, sales performance metrics, and coaching insights to improve rep effectiveness and win rates.',
    cta: 'Explore coaching',
  },
  {
    icon: <FileText size={28} color="#2563EB" />,
    title: 'Call Recap',
    description: 'Instant call recaps summarize key points, objections, and action items, while syncing conversation history into your CRM for full context.',
    cta: 'Learn more',
  },
  {
    icon: <BellRing size={28} color="#EA580C" />,
    title: 'Triggers & Smart Alerts',
    description: 'Set multi-condition triggers to alert the right teams, route high-intent leads, and automate follow-ups based on live call activity.',
    cta: 'Discover More',
  },
  {
    icon: <Lock size={28} color="#0D9488" />,
    title: 'Security & Integrations',
    description: 'Built with enterprise-grade security, compliance controls, and seamless CRM integrations to keep customer data protected and workflows connected.',
    cta: 'Security overview',
  },
];

const partners = [
  '/images/bonvoice.webp',
  '/images/zoom-phone.webp',
  '/images/Zadarma.webp',
  '/images/smartflo.webp',
  '/images/ring-central.webp',
  '/images/lead-squared.webp',
  '/images/exotel.webp',
  '/images/whatsapp.webp',
];

export default function FeaturesPage({ onOpenBooking }) {
  const scrollToGrid = () => {
    const el = document.getElementById('features-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Hero Section (Light, matching original CallVibe) */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '60px',
          backgroundColor: '#F8FAFC',
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(34, 100, 246, 0.08) 0%, transparent 60%)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
            <SlidingHeadline
              text="AI-Powered Conversation Intelligence for Revenue Teams"
              staggerMs={70}
              style={{
                fontSize: 'clamp(34px, 4.6vw, 54px)',
                fontWeight: '800',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                color: '#0F172A',
              }}
            />

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: '#64748B',
                maxWidth: '680px',
                margin: '0 auto 36px',
              }}
            >
              Unlock advanced AI call analytics, sales conversation insights, and real-time intelligence to improve conversions, pipeline quality, and revenue growth.
            </p>

            {/* Circle Avatars + Check Features Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/circles-image-3.webp"
                  alt="Reviewer"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #FFFFFF', zIndex: 3 }}
                />
                <img
                  src="/images/circles-image-2.webp"
                  alt="Reviewer"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #FFFFFF', marginLeft: '-14px', zIndex: 2 }}
                />
                <img
                  src="/images/circles-image-1.webp"
                  alt="Reviewer"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #FFFFFF', marginLeft: '-14px', zIndex: 1 }}
                />
              </div>

              <button
                onClick={scrollToGrid}
                className="btn btn-primary"
                style={{ fontSize: '15px', padding: '12px 28px', borderRadius: '9999px' }}
              >
                <Sparkles size={16} />
                <span>Check Features</span>
              </button>
            </div>
          </div>

          {/* Marquee */}
          <div style={{ marginTop: '50px', borderTop: '1px solid #E2E8F0', paddingTop: '32px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Seamless integrations with your favorite tools
            </div>
            <div className="marquee-container">
              <div className="marquee-track">
                {[...partners, ...partners].map((src, i) => (
                  <div key={i} style={{ minWidth: '130px', height: '44px', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                    <img src={src} alt="partner" style={{ maxHeight: '34px', objectFit: 'contain', filter: 'grayscale(100%) opacity(70%)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 6 Key Features */}
      <section id="features-grid" style={{ padding: '100px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              <Sparkles size={15} />
              <span>AI Platform for Sales Teams</span>
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: '800', color: '#070E1C', letterSpacing: '-0.02em', marginBottom: '18px' }}>
              Best-in-Class Conversation Intelligence
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.6 }}>
              Use AI-powered call tracking, transcription, and analytics to convert sales conversations into measurable revenue outcomes.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '36px 30px',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(34, 100, 246, 0.15)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #EDF2F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '21px', fontWeight: '700', color: '#0F172A', marginBottom: '14px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6, marginBottom: '28px' }}>
                    {card.description}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="pix-hover-right"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#2264F6',
                    textAlign: 'left',
                  }}
                >
                  <span>{card.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive 1: Boost Conversions */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="badge-pill badge-purple" style={{ marginBottom: '18px' }}>
                Real-Time AI Call Intelligence
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                Tailored AI Insights to Boost Conversions
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '32px' }}>
                Identify customer intent, track deal signals, and optimize sales conversations with AI-driven recommendations and predictive insights.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#2264F6' }}>50+</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1E293B', marginTop: '4px' }}>Companies Scaled</div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>Revenue teams onboarded</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#059669' }}>14+</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1E293B', marginTop: '4px' }}>Certified Integrations</div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>Native telephony & CRM</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/Boost-Conversions.webp"
                alt="Tailored AI Insights to Boost Conversions"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: Security & Compliance */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="feature-row reverse">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/Secure-Compliance.webp"
                alt="Enterprise Security & Compliance"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)',
                }}
              />
            </div>

            <div>
              <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '18px' }}>
                <ShieldCheck size={16} />
                <span>Enterprise Security & Compliance</span>
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                Premier Security & Compliance-Ready Systems
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '28px' }}>
                Secure your sales data with enterprise-grade security, compliance-ready infrastructure, and scalable architecture for global teams.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1E293B', fontWeight: '500' }}>
                  <CheckCircle2 size={20} color="#059669" />
                  <span>End-to-end encryption in transit (TLS 1.3) and at rest (AES-256)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1E293B', fontWeight: '500' }}>
                  <CheckCircle2 size={20} color="#059669" />
                  <span>Strict zero data retention for public model retraining</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1E293B', fontWeight: '500' }}>
                  <CheckCircle2 size={20} color="#059669" />
                  <span>Granular role-based permissions (RBAC) for managers and SDRs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: Performance Scale */}
      <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="badge-pill badge-green-subtle" style={{ marginBottom: '18px' }}>
                <Users2 size={16} />
                <span>Coaching & Performance at Scale</span>
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                Enable sales managers with AI coaching tools
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '28px' }}>
                Call analytics dashboards and performance insights give managers superpower visibility to scale high-performing revenue teams.
              </p>

              <button onClick={onOpenBooking} className="btn btn-primary pix-hover-right">
                <span>Request Manager Coaching Demo</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/Performance-Scale.webp"
                alt="Coaching & Performance at Scale"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenBooking={onOpenBooking} onLearnMore={onOpenBooking} />
    </div>
  );
}
