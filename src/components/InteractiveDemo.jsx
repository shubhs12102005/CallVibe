import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Sparkles, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

const mockTranscript = [
  { time: '00:02', speaker: 'Sales Rep (Alex)', text: 'Thanks for hopping on today, Sarah! How has your current SDR call qualification been performing?', sentiment: 'Neutral' },
  { time: '00:08', speaker: 'Prospect (Sarah)', text: 'Honestly, reps are losing 3 hours a day manually logging summaries into Salesforce and missing key buying signals.', sentiment: 'Frustrated' },
  { time: '00:16', speaker: 'Sales Rep (Alex)', text: 'CallVibe automates 100% of CRM entry, transcribes every conversation, and highlights objections instantly.', sentiment: 'Helpful' },
  { time: '00:23', speaker: 'Prospect (Sarah)', text: 'That would be a game-changer for our 45-person sales floor. How fast does the telephony integration set up?', sentiment: 'Positive' },
  { time: '00:30', speaker: 'Sales Rep (Alex)', text: 'It connects in under 10 minutes with Zoom Phone, Zadarma, or RingCentral via zero-code webhooks.', sentiment: 'Enthusiastic' },
  { time: '00:37', speaker: 'Prospect (Sarah)', text: 'Awesome, let’s get a pilot arranged for our enterprise team next Tuesday!', sentiment: 'High Intent' },
];

export default function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const [score, setScore] = useState(88);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= mockTranscript.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
        setScore((prev) => Math.min(96, prev + 2));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setScore(78);
  };

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <span className="badge-pill badge-blue-subtle" style={{ marginBottom: '16px' }}>
            <Sparkles size={15} />
            <span>Interactive AI Sandbox</span>
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Experience CallVibe Intelligence In Action
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B' }}>
            Watch real-time voice transcription, emotional sentiment telemetry, and automatic next-step extraction.
          </p>
        </div>

        {/* Demo Player Box */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Player Toolbar */}
          <div
            style={{
              padding: '20px 28px',
              backgroundColor: '#0A1124',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#2264F6',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                aria-label={isPlaying ? 'Pause Demo Call' : 'Play Demo Call'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '3px' }} />}
              </button>
              <button
                onClick={handleReset}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Reset simulation"
              >
                <RotateCcw size={16} />
              </button>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '700' }}>Enterprise Discovery Call #1084</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Inbound Demo • Sarah Jenkins (VP Sales)</div>
              </div>
            </div>

            {/* Live Audio Waves simulation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '24px' }}>
              {[18, 28, 12, 34, 20, 36, 14, 26, 38, 16, 30, 22].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '4px',
                    height: isPlaying ? `${Math.max(6, (h * (i % 2 === 0 ? 1.2 : 0.8))) }px` : '8px',
                    backgroundColor: isPlaying ? '#38BDF8' : '#475569',
                    borderRadius: '2px',
                    transition: 'height 0.25s ease',
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Deal Health
                </span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#10B981' }}>{score}%</div>
              </div>
            </div>
          </div>

          {/* Player Main Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: '340px' }} className="demo-grid">
            {/* Left: Streaming Transcripts */}
            <div style={{ padding: '24px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '380px', overflowY: 'auto' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Live Streamed Conversation
              </div>
              {mockTranscript.slice(0, currentStep + 1).map((item, idx) => {
                const isRep = item.speaker.includes('Alex');
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '14px',
                      backgroundColor: isRep ? '#F0F9FF' : '#F8FAFC',
                      border: isRep ? '1px solid #BAE6FD' : '1px solid #E2E8F0',
                      animation: 'fadeIn 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: isRep ? '#0284C7' : '#334155' }}>
                        {item.speaker}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94A3B8' }}>{item.time}</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.5, margin: 0 }}>
                      {item.text}
                    </p>
                    <div style={{ marginTop: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          backgroundColor:
                            item.sentiment === 'High Intent' || item.sentiment === 'Positive'
                              ? '#DCFCE7'
                              : item.sentiment === 'Frustrated'
                              ? '#FEE2E2'
                              : '#E0F2FE',
                          color:
                            item.sentiment === 'High Intent' || item.sentiment === 'Positive'
                              ? '#15803D'
                              : item.sentiment === 'Frustrated'
                              ? '#B91C1C'
                              : '#0369A1',
                        }}
                      >
                        Sentiment: {item.sentiment}
                      </span>
                    </div>
                  </div>
                );
              })}
              {isPlaying && currentStep < mockTranscript.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13px', fontStyle: 'italic', padding: '8px' }}>
                  <span className="recording-dot" /> Listening & processing next speech segment...
                </div>
              )}
            </div>

            {/* Right: AI Insights Engine */}
            <div style={{ padding: '24px', backgroundColor: '#FAFAFA', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Extracted Buying Signals
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#065F46', backgroundColor: '#ECFDF5', padding: '8px 12px', borderRadius: '8px' }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Pain point: 3 hrs lost daily in manual logging</span>
                  </div>
                  {currentStep >= 3 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#065F46', backgroundColor: '#ECFDF5', padding: '8px 12px', borderRadius: '8px' }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>Deal size: 45 enterprise sales seats</span>
                    </div>
                  )}
                  {currentStep >= 5 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#065F46', backgroundColor: '#ECFDF5', padding: '8px 12px', borderRadius: '8px' }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>Action: Enterprise pilot scheduled next Tuesday</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Automated CRM Sync
                </div>
                <div style={{ fontSize: '13px', color: '#334155', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '12px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: '600', color: '#1E293B', marginBottom: '4px' }}>Stage: Decision Maker Demo</div>
                  <div style={{ color: '#64748B' }}>Opportunity: $54,000 ARR • Close Date: 30 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
