import React from 'react';
import { Layers } from 'lucide-react';

const integrationsList = [
  { name: 'Bonvoice', src: '/images/bonvoice.webp' },
  { name: 'Zoom Phone', src: '/images/zoom-phone.webp' },
  { name: 'Zadarma', src: '/images/Zadarma.webp' },
  { name: 'Smartflo', src: '/images/smartflo.webp' },
  { name: 'RingCentral', src: '/images/ring-central.webp' },
  { name: 'LeadSquared', src: '/images/lead-squared.webp' },
  { name: 'GoHighLevel', src: '/images/go-high-level.webp' },
  { name: 'Exotel', src: '/images/exotel.webp' },
  { name: 'Callyzer', src: '/images/Callyzer.webp' },
  { name: 'WhatsApp', src: '/images/whatsapp.webp' },
  { name: 'Mobile CRM', src: '/images/MobileCRM-Logo.webp' },
  { name: 'Kaleyra', src: '/images/kaleyra.png' },
  { name: 'Yeastar', src: '/images/yeastar.png' },
  { name: '8x8', src: '/images/8x8.png' },
  { name: 'More Coming', src: '/images/more-coming.png' },
];

export default function Integrations() {
  return (
    <section id="integrations" style={{ backgroundColor: '#FFFFFF', padding: '100px 0 60px' }}>
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge-pill badge-blue-subtle">
              <Layers size={16} />
              <span>CRM & Telephony Integrations</span>
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: '800',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: '#070E1C',
              marginBottom: '20px',
            }}
          >
            Seamless integrations with your sales tech stack
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: '#4A5568',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Use CallVibe’s built-in CRM and pipeline out of the box, or integrate effortlessly with your current telephony, messaging, and CRM tools to bring complete AI visibility to every deal.
          </p>
        </div>

        {/* Continuous Smooth Infinite Marquee */}
        <div className="marquee-container" style={{ margin: '40px 0 60px' }}>
          <div className="marquee-track">
            {/* Repeat list twice for seamless loop */}
            {[...integrationsList, ...integrationsList].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '150px',
                  height: '56px',
                  padding: '8px 16px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  transition: 'transform 0.2s ease',
                  opacity: 0.9,
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    maxHeight: '40px',
                    maxWidth: '140px',
                    objectFit: 'contain',
                    filter: 'grayscale(15%)',
                    transition: 'filter 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(15%)')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid for Accessibility and Full Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '24px',
            marginTop: '20px',
          }}
        >
          {integrationsList.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '76px',
                padding: '12px 20px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #EDF2F7',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = '#F8FAFC';
                e.currentTarget.style.borderColor = '#EDF2F7';
              }}
            >
              <img
                src={item.src}
                alt={item.name}
                style={{
                  maxHeight: '36px',
                  maxWidth: '120px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
