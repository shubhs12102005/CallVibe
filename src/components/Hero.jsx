import React from 'react';
import { ArrowRightCircle, Sparkles } from 'lucide-react';
import SlidingHeadline from './SlidingHeadline';
import AnimatedCounter from './AnimatedCounter';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="home"
      style={{
        background: 'radial-gradient(110% 120% at 75% 25%, #1848B5 0%, #0E2D77 35%, #081A46 70%, #050E24 100%)',
        position: 'relative',
        paddingTop: '170px',
        paddingBottom: '90px',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow dots */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(147, 51, 234, 0.08) 60%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          {/* Main Headline with word-by-word sliding animation */}
          <SlidingHeadline
            text="Turn Every Sales Call Into Revenue Intelligence with AI Call Analytics"
            staggerMs={75}
            style={{
              fontSize: 'clamp(36px, 5.2vw, 62px)',
              fontWeight: '800',
              lineHeight: 1.14,
              letterSpacing: '-0.025em',
              marginBottom: '28px',
              color: '#FFFFFF',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: '660px',
              marginBottom: '36px',
              fontWeight: '400',
            }}
          >
            CallVibe.ai is an AI-powered conversation intelligence platform that integrates with your cloud telephony, CRM, and sales stack to automatically record, transcribe, analyze, and score 100% of sales calls helping revenue teams improve conversions, coaching, and pipeline visibility.
          </p>

          {/* CTA Button with arrow hover transition */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-gradient pix-hover-right"
              style={{
                fontSize: '17px',
                padding: '15px 34px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span>Book Enterprise Demo</span>
              <ArrowRightCircle size={22} />
            </button>
          </div>
        </div>

        {/* Overlapping Key Metrics Card with animated counters */}
        <div
          style={{
            marginTop: '60px',
            backgroundColor: '#070D1B',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            padding: '44px 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
          }}
          className="metrics-grid"
        >
          {/* Stat 1: 94% Sentiment Accuracy */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              Sentiment Accuracy
            </span>
            <AnimatedCounter
              end={94}
              suffix="%"
              style={{
                fontSize: 'clamp(48px, 4.5vw, 66px)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#FFFFFF',
                marginBottom: '14px',
              }}
            />
            <div style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '500', lineHeight: 1.4 }}>
              AI-powered analysis
            </div>
            <div style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.4 }}>
              Real-time emotion detection
            </div>
          </div>

          {/* Stat 2: 6:24 Avg Call Duration */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              Avg Call Duration
            </span>
            <AnimatedCounter
              isTimer={true}
              timerMinutes={6}
              timerSeconds={24}
              style={{
                fontSize: 'clamp(48px, 4.5vw, 66px)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#FFFFFF',
                marginBottom: '14px',
              }}
            />
            <div style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '500', lineHeight: 1.4 }}>
              Productive minutes
            </div>
            <div style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.4 }}>
              Quality conversation time
            </div>
          </div>

          {/* Stat 3: 73% Conversion Rate */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              Conversion Rate
            </span>
            <AnimatedCounter
              end={73}
              suffix="%"
              style={{
                fontSize: 'clamp(48px, 4.5vw, 66px)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#FFFFFF',
                marginBottom: '14px',
              }}
            />
            <div style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '500', lineHeight: 1.4 }}>
              Calls to Deals
            </div>
            <div style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.4 }}>
              AI-guided conversations
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .metrics-grid {
            padding: 30px 24px !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
