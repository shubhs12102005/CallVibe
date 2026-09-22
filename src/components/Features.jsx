import React from 'react';
import { 
  AlignLeft, 
  Sparkles, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Smile, 
  PhoneCall,
  FileText
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" style={{ backgroundColor: '#FFFFFF', paddingBottom: '90px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>

        {/* Feature 1: Conversation Intelligence Software */}
        <div className="feature-row">
          {/* Left Column: Text */}
          <div className="feature-text-col">
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-blue-subtle">
                <Sparkles size={16} />
                <span>Conversation Intelligence Software</span>
              </span>
            </div>

            <h3 className="feature-heading">
              Turn lengthy calls into instant AI insights
            </h3>

            <p className="feature-desc">
              Automatically transcribe and summarize sales calls using AI-powered conversation intelligence. Identify buying signals, customer intent, objections, and sentiment without manual effort.
            </p>

            <div className="pills-grid">
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>AI call transcription</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Automated summaries</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Buying signal detection</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Sales conversation analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual UI Card */}
          <div className="feature-card-col">
            <div className="feature-blue-canvas">
              <div className="feature-inner-ui-card">
                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>
                    <PhoneCall size={18} color="#2264F6" />
                    <span>Live Transcription</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#059669', fontWeight: '600' }}>
                    <span className="recording-dot" />
                    <span>Recording</span>
                  </div>
                </div>

                {/* Dialog bubbles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#F1F5F9', padding: '14px 18px', borderRadius: '12px', fontSize: '14px', color: '#334155' }}>
                    <span style={{ fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '2px', fontSize: '12px' }}>Prospect:</span>
                    "Hi, I'm interested in your call analytics platform..."
                  </div>
                  <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE', padding: '14px 18px', borderRadius: '12px', fontSize: '14px', color: '#1E40AF' }}>
                    <span style={{ fontWeight: '600', color: '#1D4ED8', display: 'block', marginBottom: '2px', fontSize: '12px' }}>Sales Rep:</span>
                    "Great! Let me walk you through our AI-powered features..."
                  </div>
                </div>

                {/* Meta footer row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #E2E8F0', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#64748B' }}>Sentiment:</span>
                    <span style={{ color: '#059669', fontWeight: '700', backgroundColor: '#ECFDF5', padding: '3px 10px', borderRadius: '9999px', fontSize: '13px' }}>Positive</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#64748B' }}>Category:</span>
                    <span style={{ color: '#2563EB', fontWeight: '700', backgroundColor: '#EFF6FF', padding: '3px 10px', borderRadius: '9999px', fontSize: '13px' }}>Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: AI Sales Assistant (Reversed Layout) */}
        <div className="feature-row reverse">
          {/* Left Column: Visual UI Card */}
          <div className="feature-card-col">
            <div className="feature-blue-canvas">
              <div className="feature-inner-ui-card">
                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '16px', color: '#0F172A' }}>
                    <FileText size={18} color="#9333EA" />
                    <span>Call Summary</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', backgroundColor: '#F3F4F6', padding: '4px 10px', borderRadius: '9999px' }}>
                    AI Generated
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '16px', lineHeight: 1.5 }}>
                  Customer evaluated enterprise pricing and requested integration timeline for Salesforce and Zoom Phone.
                </p>

                {/* Next Action Box */}
                <div style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #2264F6', padding: '12px 16px', borderRadius: '4px 10px 10px 4px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    Next Action:
                  </div>
                  <div style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                    Send enterprise pricing proposal and schedule technical demo for next week.
                  </div>
                </div>

                {/* Metrics Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#059669', lineHeight: 1 }}>87%</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Conversion Score</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#2264F6', lineHeight: 1 }}>4:32</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="feature-text-col">
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Zap size={15} />
                <span>AI Sales Assistant</span>
              </span>
            </div>

            <h3 className="feature-heading">
              Convert conversations into revenue opportunities
            </h3>

            <p className="feature-desc">
              Convert Assist uses AI to extract next steps, generate follow-up emails, and prioritize high-intent leads helping sales teams close deals faster.
            </p>

            <div className="pills-grid">
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Automated follow-ups</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Lead prioritization</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Sales workflow automation</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Opportunity tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Sales Coaching Software */}
        <div className="feature-row">
          {/* Left Column: Text */}
          <div className="feature-text-col">
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-green-subtle">
                <BarChart3 size={16} />
                <span>Sales Coaching Software</span>
              </span>
            </div>

            <h3 className="feature-heading">
              Improve sales performance with AI coaching
            </h3>

            <p className="feature-desc">
              AI Sales Coach provides call scoring, performance analytics, and coaching insights to help managers improve rep productivity and conversion rates.
            </p>

            <div className="pills-grid">
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Call scoring system</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Sales performance analytics</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Coaching insights</span>
              </div>
              <div className="feature-pill">
                <AlignLeft size={16} />
                <span>Revenue team enablement</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual UI Card */}
          <div className="feature-card-col">
            <div className="feature-blue-canvas">
              <div className="feature-inner-ui-card">
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A' }}>
                    Performance Overview
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500' }}>
                    Last 7 days
                  </span>
                </div>

                {/* 4 Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#2264F6' }}>87%</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Positive Sentiment</div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#0D9488' }}>4:32</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Avg Duration</div>
                  </div>
                  <div style={{ backgroundColor: '#FAF5FF', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#9333EA' }}>68%</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Answer Rate</div>
                  </div>
                  <div style={{ backgroundColor: '#FFF7ED', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#EA580C' }}>156</div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Total Calls</div>
                  </div>
                </div>

                {/* Peak Hours Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #E2E8F0', fontSize: '13px' }}>
                  <span style={{ color: '#64748B' }}>Peak Hours:</span>
                  <span style={{ fontWeight: '700', color: '#0F172A' }}>2:00 PM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .feature-row.reverse {
          direction: rtl;
        }

        .feature-row.reverse > * {
          direction: ltr;
        }

        .feature-heading {
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #070E1C;
          margin-bottom: 20px;
        }

        .feature-desc {
          font-size: 16px;
          line-height: 1.68;
          color: #4A5568;
          margin-bottom: 32px;
        }

        .pills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .feature-blue-canvas {
          background: radial-gradient(100% 100% at 50% 20%, #2563EB 0%, #173B9E 60%, #0D205E 100%);
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 20px 40px -10px rgba(23, 59, 158, 0.25);
          position: relative;
          overflow: hidden;
        }

        .feature-inner-ui-card {
          background-color: #FFFFFF;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 991px) {
          .feature-row, .feature-row.reverse {
            grid-template-columns: 1fr;
            gap: 40px;
            direction: ltr !important;
          }
          .feature-blue-canvas {
            padding: 20px;
          }
          .feature-inner-ui-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
