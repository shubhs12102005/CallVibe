import React from 'react';
import { ChevronRight, Video } from 'lucide-react';

export default function CtaBanner({ onOpenBooking, onLearnMore }) {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '60px 0 100px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#EEF2F6',
            borderRadius: '28px',
            padding: '70px 40px',
            textAlign: 'center',
            maxWidth: '1080px',
            margin: '0 auto',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 40px -15px rgba(0, 20, 60, 0.05)',
          }}
        >
          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 44px)',
              fontWeight: '800',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#070E1C',
              marginBottom: '20px',
            }}
          >
            Ready to supercharge your sales calls with AI?
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#4A5568',
              maxWidth: '680px',
              margin: '0 auto 36px',
            }}
          >
            Join modern revenue teams using AI conversation intelligence to improve sales performance, optimize conversions, and scale revenue growth.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={onLearnMore}
              className="btn btn-magenta"
              style={{
                fontSize: '16px',
                padding: '14px 28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Learn More</span>
              <ChevronRight size={18} />
            </button>

            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{
                fontSize: '16px',
                padding: '14px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Video size={18} />
              <span>Book a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
