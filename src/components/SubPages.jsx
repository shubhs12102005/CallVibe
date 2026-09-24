import React from 'react';
import { ArrowLeft, Mail, MapPin, Phone, CheckCircle, Shield, FileText, Star, Users } from 'lucide-react';

export default function SubPages({ currentTab, onBack, onOpenBooking }) {
  if (currentTab === 'home') return null;

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '90px', backgroundColor: '#FFFFFF', minHeight: '80vh' }}>
      <div className="container">
        {/* Back navigation button */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#2264F6',
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        {/* Content based on selected tab */}
        {currentTab === 'about' && (
          <div style={{ maxWidth: '840px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              About CallVibe
            </span>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Empowering sales teams with actionable conversation intelligence
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#475569', marginBottom: '28px' }}>
              CallVibe was founded with a clear mission: to eliminate the black box of voice sales calls. Every day, high-velocity revenue teams conduct thousands of sales conversations, yet less than 1% of the insights gained on those calls ever reach CRM systems or sales leadership.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#64748B', marginBottom: '36px' }}>
              By pairing state-of-the-art speech-to-text models with proprietary natural language intelligence fine-tuned on B2B sales dynamics, CallVibe transcribes, evaluates, and converts raw audio into pipeline visibility, objection matrices, and personalized rep coaching.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', margin: '40px 0' }}>
              <div style={{ padding: '24px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#2264F6', marginBottom: '6px' }}>100%</div>
                <div style={{ fontSize: '14px', color: '#475569', fontWeight: '600' }}>Call Coverage Analyzed</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#059669', marginBottom: '6px' }}>+34%</div>
                <div style={{ fontSize: '14px', color: '#475569', fontWeight: '600' }}>Average Win Rate Lift</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#9333EA', marginBottom: '6px' }}>3.2 hrs</div>
                <div style={{ fontSize: '14px', color: '#475569', fontWeight: '600' }}>Saved Per Rep / Day</div>
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn btn-primary" style={{ marginTop: '20px' }}>
              Meet with our Leadership Team
            </button>
          </div>
        )}

        {currentTab === 'contact' && (
          <div style={{ maxWidth: '840px' }}>
            <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
              Get In Touch
            </span>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              We’d love to hear from you
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#475569', marginBottom: '40px' }}>
              Whether you are an enterprise revenue leader seeking custom telephony integrations or looking for a trial deployment, our team is ready.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ padding: '28px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <Phone size={24} color="#2264F6" style={{ marginBottom: '14px' }} />
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#0F172A', marginBottom: '6px' }}>Call Us</h4>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '12px' }}>Mon to Fri (9am – 6pm)</p>
                <a href="tel:+918108810916" style={{ fontSize: '15px', fontWeight: '700', color: '#2264F6' }}>
                  +91 81088 10916
                </a>
              </div>

              <div style={{ padding: '28px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <Mail size={24} color="#2264F6" style={{ marginBottom: '14px' }} />
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#0F172A', marginBottom: '6px' }}>Email Us</h4>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '12px' }}>Direct inquiries and sales support</p>
                <a href="mailto:manoj@silgatehiring.com" style={{ fontSize: '15px', fontWeight: '700', color: '#2264F6' }}>
                  manoj@silgatehiring.com
                </a>
              </div>

              <div style={{ padding: '28px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <MapPin size={24} color="#2264F6" style={{ marginBottom: '14px' }} />
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#0F172A', marginBottom: '6px' }}>Global Headquarters</h4>
                <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                  Road No 8, SG Barve RD, Wagle Estate, Padwal Nagar<br />
                  Thane West, Maharashtra 400604
                </div>
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn btn-gradient" style={{ padding: '14px 32px' }}>
              Schedule a Consultation
            </button>
          </div>
        )}

        {currentTab === 'blog' && (
          <div style={{ maxWidth: '960px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              CallVibe Insights & Blog
            </span>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0F172A', marginBottom: '32px', letterSpacing: '-0.02em' }}>
              Latest Research in Voice AI & Revenue Operations
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#2264F6', textTransform: 'uppercase' }}>Conversation Intelligence</span>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', margin: '12px 0' }}>
                  Why Scoring 100% of Sales Calls Beats Manual Spot-Checks
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                  How automated sentiment detection and objection clustering expose hidden churn indicators in early discovery calls.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#9333EA', textTransform: 'uppercase' }}>CRM Automation</span>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', margin: '12px 0' }}>
                  The 3-Hour Productivity Leak: Automating SDR Follow-Up Notes
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                  Eliminate administrative rep fatigue with zero-click CRM syncing and generative email draft generation.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669', textTransform: 'uppercase' }}>Telephony Stack</span>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', margin: '12px 0' }}>
                  Integrating Zoom Phone, Zadarma & RingCentral in Under 10 Minutes
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                  A step-by-step architectural breakdown of secure SIP, webhook ingestion, and privacy encryption.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'reviews' && (
          <div style={{ maxWidth: '880px' }}>
            <span className="badge-pill badge-green-subtle" style={{ marginBottom: '16px' }}>
              Customer Testimonials
            </span>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0F172A', marginBottom: '32px', letterSpacing: '-0.02em' }}>
              What revenue leaders say about CallVibe
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '28px', backgroundColor: '#F8FAFC', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#334155', fontStyle: 'italic', marginBottom: '16px' }}>
                  "CallVibe helped our 30-rep SDR team boost discovery conversion by 28% in our first 45 days. The automatic summary notes alone saved our managers hundreds of hours."
                </p>
                <div style={{ fontWeight: '700', color: '#0F172A', fontSize: '14px' }}>Marcus Vance</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>VP of Sales Development • CloudPeak</div>
              </div>

              <div style={{ padding: '28px', backgroundColor: '#F8FAFC', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#334155', fontStyle: 'italic', marginBottom: '16px' }}>
                  "We integrated Zoom Phone and LeadSquared with zero dev work. Our reps now leave every meeting with an AI next-action already queued in the pipeline."
                </p>
                <div style={{ fontWeight: '700', color: '#0F172A', fontSize: '14px' }}>Elena Rostova</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Revenue Operations Director • FinScale</div>
              </div>
            </div>
          </div>
        )}

        {(currentTab === 'terms' || currentTab === 'privacy') && (
          <div style={{ maxWidth: '800px' }}>
            <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
              Legal & Compliance
            </span>
            <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
              {currentTab === 'terms' ? 'Terms of Service' : 'Privacy & Data Protection Policy'}
            </h1>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '28px' }}>
              Last updated: September 2026 • Thane West, Maharashtra 400604
            </p>
            <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p>
                CallVibe provides an AI conversation intelligence platform designed to transcribe, evaluate, and assist sales organizations. We maintain enterprise-grade security controls, SOC2-aligned architectures, and strict zero-data retention policies for model retraining on customer proprietary voice data.
              </p>
              <p>
                Customer call recordings and transcripts are encrypted in transit using TLS 1.3 and at rest via AES-256. Customers retain full ownership and governance over all conversation telemetry, audio streams, and synthesized deal reports.
              </p>
              <p>
                For questions regarding data processing addendums (DPA) or compliance agreements, contact our privacy office at <strong>manoj@silgatehiring.com</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
