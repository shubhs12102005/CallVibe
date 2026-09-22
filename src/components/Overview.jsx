import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Overview() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container">
        <div style={{ maxWidth: '920px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '24px' }}>
            <span
              className="badge-pill badge-purple"
              style={{
                fontSize: '13px',
                padding: '7px 16px',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'default',
              }}
            >
              <span>AI Sales Intelligence Platform</span>
              <ArrowUpRight size={15} />
            </span>
          </div>

          {/* Section Heading */}
          <h2
            style={{
              fontSize: 'clamp(32px, 4.4vw, 54px)',
              fontWeight: '800',
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              color: '#070E1C',
              marginBottom: '24px',
            }}
          >
            Transform sales conversations into{' '}
            <span style={{ color: '#2264F6' }}>actionable revenue insights</span>
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.25vw, 19px)',
              lineHeight: 1.68,
              color: '#4A5568',
              maxWidth: '820px',
            }}
          >
            Powered by advanced AI and machine learning, CallVibe delivers conversation analytics, sales insights, and automated call intelligence to help teams identify buying signals, improve follow-ups, and increase win rates.
          </p>
        </div>
      </div>
    </section>
  );
}
