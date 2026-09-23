import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Phone, 
  MessageSquare, 
  Database, 
  UploadCloud, 
  CheckCircle2,
  Sparkles,
  Search
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import CtaBanner from '../components/CtaBanner';

const categories = [
  { id: 'all', label: 'All Integrations' },
  { id: 'telephony', label: 'Cloud Telephony' },
  { id: 'messaging', label: 'Messaging' },
  { id: 'crm', label: 'CRM & Leads' },
  { id: 'import', label: 'File Import' },
];

const directoryItems = [
  // Telephony
  { name: '8x8', category: 'telephony', logo: '/images/8x8.png', desc: 'Contact-center calls into CallVibe intelligence' },
  { name: 'Bonvoice', category: 'telephony', logo: '/images/bonvoice.webp', desc: 'Cloud telephony call ingestion & tracking' },
  { name: 'Callyzer', category: 'telephony', logo: '/images/Callyzer.webp', desc: 'Field-sales call tracking + analytics' },
  { name: 'Exotel', category: 'telephony', logo: '/images/exotel.webp', desc: 'Cloud telephony call recording & analytics' },
  { name: 'Kaleyra', category: 'telephony', logo: '/images/kaleyra.png', desc: 'CPaaS voice — recordings for AI scoring' },
  { name: 'RingCentral', category: 'telephony', logo: '/images/ring-central.webp', desc: 'Cloud phone calls, transcribed & scored' },
  { name: 'SalesTrail', category: 'telephony', logo: '/images/sales-trail.png', desc: 'Mobile call-tracking capture' },
  { name: 'Smartflo (Tata Tele)', category: 'telephony', logo: '/images/smartflo.webp', desc: 'Cloud calling — auto-capture & analyze' },
  { name: 'Zadarma', category: 'telephony', logo: '/images/Zadarma.webp', desc: 'VoIP call recording + transcription' },
  { name: 'Zoom Phone', category: 'telephony', logo: '/images/zoom-phone.webp', desc: 'Zoom Phone recordings → AI insights' },
  // Messaging
  { name: 'WhatsApp', category: 'messaging', logo: '/images/whatsapp.webp', desc: 'Analyze WhatsApp sales chats alongside calls' },
  // CRM
  { name: 'GoHighLevel', category: 'crm', logo: '/images/go-high-level.webp', desc: 'Push call outcomes & alerts into GHL' },
  { name: 'LeadSquared', category: 'crm', logo: '/images/lead-squared.webp', desc: 'Sync insights & notifications to LeadSquared' },
  { name: 'MobileCRM', category: 'crm', logo: '/images/MobileCRM-Logo.webp', desc: 'Mobile CRM + phone provider — lead sync & capture' },
  // Import
  { name: 'Upload Center', category: 'import', logo: '/images/more-coming.png', desc: 'Upload audio directly — no telephony required' },
];

export default function IntegrationsPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = directoryItems.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
          <div style={{ maxWidth: '840px', margin: '0 auto 40px' }}>
            <SlidingHeadline
              text="Connect CallVibe with Your Entire Revenue Stack"
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
              Seamlessly connect 14+ cloud telephony, CRM, and messaging platforms—or manage your entire pipeline with CallVibe's built-in CRM.
            </p>

            {/* Circle Avatars + Explore Integrations Button */}
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
                onClick={() => {
                  const el = document.getElementById('directory');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ fontSize: '15px', padding: '12px 28px', borderRadius: '9999px' }}
              >
                <Sparkles size={16} />
                <span>Explore Integrations</span>
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
                {directoryItems.concat(directoryItems).map((item, i) => (
                  <div key={i} style={{ minWidth: '130px', height: '44px', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                    <img src={item.logo} alt={item.name} style={{ maxHeight: '34px', objectFit: 'contain', filter: 'grayscale(100%) opacity(70%)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section id="directory" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              <Layers size={15} />
              <span>Integrations Directory</span>
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: '800', color: '#070E1C', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Connect Any Tool in Minutes
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B' }}>
              Capture, transcribe, and score every inbound and outbound customer interaction without disrupting rep routines.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {/* Category pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: '600',
                    backgroundColor: selectedCategory === c.id ? '#2264F6' : '#F1F5F9',
                    color: selectedCategory === c.id ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s',
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={{ position: 'relative', minWidth: '240px' }}>
              <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: '9999px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -10px rgba(34, 100, 246, 0.12)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div>
                  <div
                    style={{
                      height: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      style={{ maxHeight: '38px', maxWidth: '140px', objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn btn-outline pix-hover-right"
                  style={{
                    fontSize: '13px',
                    padding: '8px 16px',
                    width: '100%',
                    justifyContent: 'space-between',
                    borderColor: '#E2E8F0',
                  }}
                >
                  <span>Book Demo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive 1: WhatsApp Conversation Intelligence */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="badge-pill badge-green-subtle" style={{ marginBottom: '18px' }}>
                <MessageSquare size={16} />
                <span>WhatsApp Conversation Intelligence</span>
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                Bring WhatsApp into your revenue intelligence
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '24px' }}>
                CallVibe now analyzes WhatsApp sales conversations, not just calls. Auto-capture chats, detect intent and buying signals, surface action items, and keep the full customer history in one timeline — the same AI that scores your calls, now on your busiest messaging channel.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>WhatsApp chat capture</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Intent & sentiment on messages</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Unified call + chat timeline</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Action items from conversations</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/WhatsApp-Conversation-Intelligence.webp"
                alt="WhatsApp Conversation Intelligence"
                style={{ width: '100%', maxWidth: '520px', borderRadius: '20px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Built-in CRM & Pipeline */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="feature-row reverse">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/Built-in-CRM-Sales-Pipeline.webp"
                alt="Built-in CRM & Sales Pipeline"
                style={{ width: '100%', maxWidth: '520px', borderRadius: '20px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)' }}
              />
            </div>

            <div>
              <span className="badge-pill badge-purple" style={{ marginBottom: '18px' }}>
                <Database size={16} />
                <span>Built-in CRM & Sales Pipeline</span>
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                A CRM built for conversations — not the other way around
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '24px' }}>
                CallVibe isn't just an add-on to your CRM; it is one. Manage contacts and leads, drag deals through a visual pipeline, schedule and track follow-up calls, and generate pipeline reports — all tied to the AI insights from every conversation.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#2264F6" />
                  <span>Visual drag-and-drop pipeline</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#2264F6" />
                  <span>Contacts & lead management</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#2264F6" />
                  <span>Custom statuses & fields</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#2264F6" />
                  <span>Pipeline reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive 3: AI Insights Command */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '18px' }}>
                <Sparkles size={16} />
                <span>AI Insights Command</span>
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: '800', color: '#070E1C', marginBottom: '20px', lineHeight: 1.2 }}>
                Ask your calls anything
              </h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.68, marginBottom: '24px' }}>
                Skip the dashboards. Ask CallVibe a question in plain language and get instant, AI-generated answers across all conversations — top objections this week, why deals stalled, which reps need coaching. Insights on demand, no reports to build.
              </p>

              <button onClick={onOpenBooking} className="btn btn-primary pix-hover-right">
                <span>Try Insights Command</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/AI-Insights-Command.webp"
                alt="AI Insights Command"
                style={{ width: '100%', maxWidth: '520px', borderRadius: '20px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)' }}
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
